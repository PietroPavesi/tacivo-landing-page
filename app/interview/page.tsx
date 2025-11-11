'use client';

import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import jsPDF from 'jspdf';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

type Context = {
  expertName: string;
  role: string;
  yearsOfExperience: string;
  processToDocument: string;
};

type Step = 'form' | 'chat' | 'results';

export default function InterviewPage() {
  const [step, setStep] = useState<Step>('form');
  const [context, setContext] = useState<Context>({
    expertName: '',
    role: '',
    yearsOfExperience: '',
    processToDocument: '',
  });
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [generatedDocument, setGeneratedDocument] = useState('');
  const [isGeneratingDoc, setIsGeneratingDoc] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const startInterview = async () => {
    if (!context.expertName || !context.role || !context.yearsOfExperience || !context.processToDocument) {
      alert('Please fill in all fields');
      return;
    }

    setStep('chat');
    setIsLoading(true);

    // Start the interview with AI's first question
    try {
      const initialMessages: Message[] = [
        {
          role: 'user',
          content: `Hello! I'm ready to begin the knowledge transfer interview about: ${context.processToDocument}`,
        },
      ];

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: initialMessages,
          context,
        }),
      });

      if (!response.ok) throw new Error('Failed to start interview');

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = '';

      setIsTyping(true);

      while (true) {
        const { done, value } = await reader!.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') {
              setIsTyping(false);
              setMessages([
                initialMessages[0],
                { role: 'assistant', content: assistantMessage },
              ]);
              break;
            }

            try {
              const parsed = JSON.parse(data);
              if (parsed.text) {
                assistantMessage += parsed.text;
                setMessages([
                  initialMessages[0],
                  { role: 'assistant', content: assistantMessage },
                ]);
              }
            } catch {
              // Skip invalid JSON
            }
          }
        }
      }
    } catch (error) {
      console.error('Error starting interview:', error);
      alert('Failed to start interview. Please try again.');
      setStep('form');
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: inputMessage,
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputMessage('');
    setIsLoading(true);
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages,
          context,
        }),
      });

      if (!response.ok) throw new Error('Failed to send message');

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = '';

      while (true) {
        const { done, value } = await reader!.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') {
              setIsTyping(false);
              setMessages([...newMessages, { role: 'assistant', content: assistantMessage }]);
              break;
            }

            try {
              const parsed = JSON.parse(data);
              if (parsed.text) {
                assistantMessage += parsed.text;
                setMessages([...newMessages, { role: 'assistant', content: assistantMessage }]);
              }
            } catch {
              // Skip invalid JSON
            }
          }
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const endInterview = async () => {
    setIsGeneratingDoc(true);

    try {
      const response = await fetch('/api/generate-doc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages,
          context,
        }),
      });

      if (!response.ok) throw new Error('Failed to generate document');

      const data = await response.json();
      setGeneratedDocument(data.document);
      setStep('results');
    } catch (error) {
      console.error('Error generating document:', error);
      alert('Failed to generate document. Please try again.');
    } finally {
      setIsGeneratingDoc(false);
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const maxWidth = pageWidth - 2 * margin;
    let yPosition = margin;

    // Title
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('Knowledge Transfer Document', margin, yPosition);
    yPosition += 10;

    // Metadata
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Expert: ${context.expertName}`, margin, yPosition);
    yPosition += 6;
    doc.text(`Role: ${context.role}`, margin, yPosition);
    yPosition += 6;
    doc.text(`Experience: ${context.yearsOfExperience} years`, margin, yPosition);
    yPosition += 6;
    doc.text(`Topic: ${context.processToDocument}`, margin, yPosition);
    yPosition += 10;

    // Document content
    doc.setFontSize(10);
    const lines = doc.splitTextToSize(generatedDocument, maxWidth);

    for (let i = 0; i < lines.length; i++) {
      if (yPosition > pageHeight - margin) {
        doc.addPage();
        yPosition = margin;
      }
      doc.text(lines[i], margin, yPosition);
      yPosition += 6;
    }

    doc.save(`knowledge-transfer-${context.expertName.replace(/\s+/g, '-').toLowerCase()}.pdf`);
  };

  const startNewInterview = () => {
    setStep('form');
    setContext({
      expertName: '',
      role: '',
      yearsOfExperience: '',
      processToDocument: '',
    });
    setMessages([]);
    setGeneratedDocument('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-orange-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-[#5B21B6]">
            Tacivo Knowledge Transfer
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            Extract and document expert knowledge through AI-powered interviews
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* STEP 1: Context Form */}
        {step === 'form' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-[#5B21B6] mb-2">
              Start Knowledge Transfer Interview
            </h2>
            <p className="text-gray-600 mb-8">
              Provide context about the expert and the knowledge to be captured
            </p>

            <div className="space-y-6" suppressHydrationWarning>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Expert Name
                </label>
                <input
                  type="text"
                  value={context.expertName}
                  onChange={(e) => setContext({ ...context, expertName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A855F7] focus:border-transparent outline-none transition"
                  placeholder="e.g., Sarah Johnson"
                  suppressHydrationWarning
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Role/Domain
                </label>
                <input
                  type="text"
                  value={context.role}
                  onChange={(e) => setContext({ ...context, role: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A855F7] focus:border-transparent outline-none transition"
                  placeholder="e.g., Senior Software Engineer, Sales Manager"
                  suppressHydrationWarning
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Years of Experience
                </label>
                <input
                  type="text"
                  value={context.yearsOfExperience}
                  onChange={(e) => setContext({ ...context, yearsOfExperience: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A855F7] focus:border-transparent outline-none transition"
                  placeholder="e.g., 10"
                  suppressHydrationWarning
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  What process/skill should we document?
                </label>
                <textarea
                  value={context.processToDocument}
                  onChange={(e) => setContext({ ...context, processToDocument: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A855F7] focus:border-transparent outline-none transition resize-none"
                  placeholder="e.g., The process for onboarding enterprise clients, including discovery, negotiation, and implementation"
                  suppressHydrationWarning
                />
              </div>

              <button
                onClick={startInterview}
                disabled={isLoading}
                className="w-full bg-[#5B21B6] hover:bg-[#4C1D95] text-white font-semibold py-4 px-6 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Starting Interview...' : 'Start Interview'}
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Chat Interface */}
        {step === 'chat' && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col" style={{ height: 'calc(100vh - 200px)' }}>
            {/* Chat Header */}
            <div className="bg-[#5B21B6] text-white p-4 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold">Interview in Progress</h2>
                <p className="text-sm text-purple-200">
                  Interviewing: {context.expertName} - {context.role}
                </p>
              </div>
              <button
                onClick={endInterview}
                disabled={isGeneratingDoc || messages.length < 4}
                className="bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold py-2 px-6 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGeneratingDoc ? 'Generating...' : 'End Interview'}
              </button>
            </div>

            {/* Messages Container */}
            <div
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-6 space-y-4"
              style={{ maxHeight: 'calc(100vh - 350px)' }}
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-4 ${
                      message.role === 'user'
                        ? 'bg-[#A855F7] text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm font-semibold mb-1">
                      {message.role === 'user' ? context.expertName : 'Interviewer'}
                    </p>
                    <div className="whitespace-pre-wrap">{message.content}</div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 p-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                  disabled={isLoading}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A855F7] focus:border-transparent outline-none transition disabled:opacity-50"
                  placeholder="Type your response..."
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  className="bg-[#5B21B6] hover:bg-[#4C1D95] text-white font-semibold py-3 px-8 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Results */}
        {step === 'results' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-[#5B21B6] mb-2">
                    Knowledge Transfer Document
                  </h2>
                  <p className="text-gray-600">
                    Expert: {context.expertName} | {context.role}
                  </p>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={downloadPDF}
                    className="bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold py-2 px-6 rounded-lg transition"
                  >
                    Download PDF
                  </button>
                  <button
                    onClick={startNewInterview}
                    className="bg-[#5B21B6] hover:bg-[#4C1D95] text-white font-semibold py-2 px-6 rounded-lg transition"
                  >
                    Start New Interview
                  </button>
                </div>
              </div>

              <div className="prose prose-lg max-w-none prose-headings:text-[#5B21B6] prose-a:text-[#A855F7]">
                <ReactMarkdown>{generatedDocument}</ReactMarkdown>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
