'use client';

import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import jsPDF from 'jspdf';
import { VoiceControls } from '@/components/VoiceControls';
import { useVoiceControls } from '@/hooks/useVoiceControls';
import { ArrowLeft, Upload, X, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

type DocumentType = 'case-study' | 'best-practices' | null;

type Context = {
  expertName: string;
  role: string;
  yearsOfExperience: string;
  documentType: DocumentType;
  description: string;
  uploadedFiles: File[];
};

type Step = 'initial' | 'context' | 'chat' | 'results';

export default function InterviewPage() {
  const [step, setStep] = useState<Step>('initial');
  const [context, setContext] = useState<Context>({
    expertName: '',
    role: '',
    yearsOfExperience: '',
    documentType: null,
    description: '',
    uploadedFiles: [],
  });
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [generatedDocument, setGeneratedDocument] = useState('');
  const [isGeneratingDoc, setIsGeneratingDoc] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const voiceControls = useVoiceControls();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleDocumentTypeSelect = (type: DocumentType) => {
    setContext({ ...context, documentType: type });
  };

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return;

    const newFiles = Array.from(files).filter(file => {
      const validTypes = ['.pdf', '.docx', '.pptx', '.txt', '.md'];
      const extension = '.' + file.name.split('.').pop()?.toLowerCase();
      return validTypes.includes(extension) && file.size <= 10 * 1024 * 1024; // 10MB
    });

    setContext({
      ...context,
      uploadedFiles: [...context.uploadedFiles, ...newFiles]
    });
  };

  const removeFile = (index: number) => {
    const newFiles = [...context.uploadedFiles];
    newFiles.splice(index, 1);
    setContext({ ...context, uploadedFiles: newFiles });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileUpload(e.dataTransfer.files);
  };

  const proceedToContext = () => {
    if (!context.expertName || !context.role || !context.yearsOfExperience || !context.documentType) {
      alert('Please fill in all fields and select a document type');
      return;
    }
    setStep('context');
  };

  const startInterview = async () => {
    if (context.description.length < 50) {
      alert('Please give us at least a brief description (50 characters minimum) so we can conduct a great interview');
      return;
    }

    setStep('chat');
    setIsLoading(true);

    // Build process description including document type and description
    const processToDocument = `${context.documentType === 'case-study' ? 'Case Study' : 'Best Practices Guide'}: ${context.description}`;

    try {
      const initialMessages: Message[] = [
        {
          role: 'user',
          content: `Hello! I'm ready to begin the knowledge transfer interview about: ${processToDocument}`,
        },
      ];

      const apiEndpoint = context.documentType === 'case-study'
        ? '/api/chat-case-study'
        : '/api/chat-best-practices';

      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: initialMessages,
          context: {
            expertName: context.expertName,
            role: context.role,
            yearsOfExperience: context.yearsOfExperience,
            processToDocument,
          },
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

      // Auto-play AI response if enabled
      if (voiceControls.autoPlayEnabled && assistantMessage) {
        await voiceControls.playText(assistantMessage);
      }
    } catch (error) {
      console.error('Error starting interview:', error);
      alert('Failed to start interview. Please try again.');
      setStep('context');
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
      const processToDocument = `${context.documentType === 'case-study' ? 'Case Study' : 'Best Practices Guide'}: ${context.description}`;

      const apiEndpoint = context.documentType === 'case-study'
        ? '/api/chat-case-study'
        : '/api/chat-best-practices';

      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages,
          context: {
            expertName: context.expertName,
            role: context.role,
            yearsOfExperience: context.yearsOfExperience,
            processToDocument,
          },
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

      // Auto-play AI response if enabled
      if (voiceControls.autoPlayEnabled && assistantMessage) {
        await voiceControls.playText(assistantMessage);
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
      const processToDocument = `${context.documentType === 'case-study' ? 'Case Study' : 'Best Practices Guide'}: ${context.description}`;

      const apiEndpoint = context.documentType === 'case-study'
        ? '/api/generate-doc-case-study'
        : '/api/generate-doc-best-practices';

      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages,
          context: {
            expertName: context.expertName,
            role: context.role,
            yearsOfExperience: context.yearsOfExperience,
            processToDocument,
          },
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

    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('Knowledge Transfer Document', margin, yPosition);
    yPosition += 10;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Expert: ${context.expertName}`, margin, yPosition);
    yPosition += 6;
    doc.text(`Role: ${context.role}`, margin, yPosition);
    yPosition += 6;
    doc.text(`Experience: ${context.yearsOfExperience} years`, margin, yPosition);
    yPosition += 6;
    doc.text(`Type: ${context.documentType === 'case-study' ? 'Case Study' : 'Best Practices Guide'}`, margin, yPosition);
    yPosition += 10;

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
    setStep('initial');
    setContext({
      expertName: '',
      role: '',
      yearsOfExperience: '',
      documentType: null,
      description: '',
      uploadedFiles: [],
    });
    setMessages([]);
    setGeneratedDocument('');
  };

  const handlePlayLastMessage = () => {
    const lastAssistantMessage = [...messages].reverse().find(m => m.role === 'assistant');
    if (lastAssistantMessage) {
      voiceControls.playText(lastAssistantMessage.content);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img src="/assets/loop-logos/loop-logo.svg" alt="Tacivo" className="h-10" />
            </div>
            {step !== 'initial' && (
              <button
                onClick={() => {
                  if (step === 'context') setStep('initial');
                  else if (step === 'chat') setStep('context');
                }}
                className="text-sm text-gray-600 hover:text-tacivo-purple transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* STEP 1: Initial Form */}
        {step === 'initial' && (
          <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              className="max-w-3xl w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h1 className="font-serif text-2xl sm:text-3xl md:text-3xl font-normal tracking-tight text-slate-900 mb-4">
                  Turn your expertise into professional documentation in{' '}
                  <span className="text-tacivo-orange">15 minutes</span>
                </h1>
              </div>

              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/60 shadow-lg">
                {/* About You Section */}
                <div className="mb-8">
                  <h2 className="font-serif text-2xl font-normal text-slate-900 mb-6">
                    Step 1: About You
                  </h2>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={context.expertName}
                        onChange={(e) => setContext({ ...context, expertName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tacivo-purple focus:border-transparent outline-none transition"
                        placeholder="e.g., Sarah Johnson"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Your Role/Title
                      </label>
                      <input
                        type="text"
                        value={context.role}
                        onChange={(e) => setContext({ ...context, role: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tacivo-purple focus:border-transparent outline-none transition"
                        placeholder="e.g., Senior Sales Manager, Cloud Architect"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Years of Experience
                      </label>
                      <input
                        type="number"
                        value={context.yearsOfExperience}
                        onChange={(e) => setContext({ ...context, yearsOfExperience: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tacivo-purple focus:border-transparent outline-none transition"
                        placeholder="e.g., 10"
                        min="0"
                      />
                    </div>
                  </div>
                </div>

                {/* Document Type Selection */}
                <div>
                  <h2 className="font-serif text-2xl font-normal text-slate-900 mb-3">
                    Step 2: What Do You Want to Create?
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <button
                      onClick={() => handleDocumentTypeSelect('case-study')}
                      className={`text-left p-6 rounded-2xl border-2 transition-all ${
                        context.documentType === 'case-study'
                          ? 'border-tacivo-purple bg-tacivo-purple/5'
                          : 'border-gray-200 hover:border-tacivo-purple/50'
                      }`}
                    >
                      <div className="text-4xl mb-3">📋</div>
                      <h3 className="font-serif text-xl font-normal text-slate-900 mb-2">
                        Case Study
                      </h3>
                      <p className="text-sm text-slate-600 mb-2">
                        Document a specific project, deal, or event you recently completed
                      </p>
                      <p className="text-xs text-slate-500">
                        e.g., "How I closed the Enterprise XYZ deal" or "Q4 Migration Project"
                      </p>
                    </button>

                    <button
                      onClick={() => handleDocumentTypeSelect('best-practices')}
                      className={`text-left p-6 rounded-2xl border-2 transition-all ${
                        context.documentType === 'best-practices'
                          ? 'border-tacivo-orange bg-tacivo-orange/5'
                          : 'border-gray-200 hover:border-tacivo-orange/50'
                      }`}
                    >
                      <div className="text-4xl mb-3">📖</div>
                      <h3 className="font-serif text-xl font-normal text-slate-900 mb-2">
                        Best Practices Guide
                      </h3>
                      <p className="text-sm text-slate-600 mb-2">
                        Create a general playbook or SOP based on your overall experience
                      </p>
                      <p className="text-xs text-slate-500">
                        e.g., "Enterprise Sales Playbook" or "Cloud Migration Checklist"
                      </p>
                    </button>
                  </div>

                  <button
                    onClick={proceedToContext}
                    disabled={!context.expertName || !context.role || !context.yearsOfExperience || !context.documentType}
                    className="w-full px-8 py-4 bg-gradient-to-r from-tacivo-purple via-tacivo-orange to-tacivo-purple bg-[length:200%_100%] text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ animation: context.documentType ? 'shimmer 5s linear infinite' : 'none' }}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* STEP 2: Context & Upload */}
        {step === 'context' && (
          <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              className="max-w-3xl w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-tacivo-purple/10 to-tacivo-orange/10 rounded-full mb-4">
                  <span className="text-3xl">
                    {context.documentType === 'case-study' ? '📋' : '📖'}
                  </span>
                  <span className="font-medium text-slate-900">
                    Creating Your {context.documentType === 'case-study' ? 'Case Study' : 'Best Practices Guide'}
                  </span>
                </div>
                <p className="text-slate-600">
                  {context.expertName} • {context.role}
                </p>
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-tacivo-purple"></div>
                    <span>Step 2 of 3</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/60 shadow-lg space-y-8">
                {/* Description Section */}
                <div>
                  <h2 className="font-serif text-xl font-normal text-slate-900 mb-2">
                    {context.documentType === 'case-study'
                      ? 'Tell us briefly about this project or event'
                      : 'Tell us briefly what this guide should cover'}
                  </h2>
                  <p className="text-sm text-slate-500 mb-4">
                    Don&apos;t worry about details - we&apos;ll dig deep in the interview. Just give us context to ask better questions.
                  </p>
                  <textarea
                    value={context.description}
                    onChange={(e) => setContext({ ...context, description: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tacivo-purple focus:border-transparent outline-none transition resize-none"
                    placeholder={
                      context.documentType === 'case-study'
                        ? 'e.g., We closed a $500K deal with Enterprise XYZ. It took 6 months and involved custom integration requirements...'
                        : 'e.g., This should be a comprehensive sales playbook for closing enterprise deals, including discovery, demo strategies, and negotiation tactics...'
                    }
                  />
                  <div className="mt-2 flex justify-between text-sm">
                    <span className={context.description.length >= 50 ? 'text-green-600' : 'text-slate-500'}>
                      {context.description.length}/500 characters {context.description.length >= 50 ? '✓' : '- give us at least 50'}
                    </span>
                  </div>
                </div>

                {/* File Upload Section */}
                <div>
                  <h2 className="font-serif text-xl font-normal text-slate-900 mb-2">
                    Upload any relevant documents (optional but helpful)
                  </h2>
                  <p className="text-sm text-slate-500 mb-4">
                    {context.documentType === 'case-study'
                      ? 'Upload anything related to this specific project: proposals, reports, presentations, emails, notes. This helps us ask more informed questions.'
                      : "Upload any existing materials you have: past presentations, reports, templates, procedures. We'll use these as a foundation to build on."}
                  </p>

                  {/* Drop Zone */}
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all ${
                      isDragging
                        ? 'border-tacivo-purple bg-tacivo-purple/5'
                        : 'border-gray-300 hover:border-tacivo-purple/50 hover:bg-gray-50'
                    }`}
                  >
                    <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-slate-700 font-medium mb-2">
                      Drag and drop files here
                    </p>
                    <p className="text-sm text-slate-500 mb-4">or click to browse</p>
                    <p className="text-xs text-slate-400">
                      PDF, DOCX, PPTX, TXT, MD (Max 10MB per file)
                    </p>
                  </div>

                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".pdf,.docx,.pptx,.txt,.md"
                    onChange={(e) => handleFileUpload(e.target.files)}
                    className="hidden"
                  />

                  {/* Uploaded Files List */}
                  {context.uploadedFiles.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {context.uploadedFiles.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                        >
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <FileText className="w-5 h-5 text-tacivo-purple flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-slate-900 truncate">
                                {file.name}
                              </p>
                              <p className="text-xs text-slate-500">
                                {formatFileSize(file.size)}
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFile(index);
                            }}
                            className="p-1 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
                          >
                            <X className="w-4 h-4 text-gray-500" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Start Button */}
                <div className="pt-6 border-t border-gray-200">
                  <button
                    onClick={startInterview}
                    disabled={context.description.length < 50 || isLoading}
                    className="w-full px-8 py-4 bg-gradient-to-r from-tacivo-purple via-tacivo-orange to-tacivo-purple bg-[length:200%_100%] text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                    style={{ animation: context.description.length >= 50 ? 'shimmer 5s linear infinite' : 'none' }}
                  >
                    {isLoading ? 'Preparing your interview...' : 'Start Interview →'}
                  </button>
                  <p className="text-center text-sm text-slate-500 mt-4">
                    ⏱️ This will take 15-30 minutes. You can pause anytime.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* STEP 3: Chat Interface */}
        {step === 'chat' && (
          <div className="h-[calc(100vh-5rem)] flex flex-col">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-tacivo-purple to-tacivo-orange text-white p-6 shadow-lg">
              <div className="max-w-5xl mx-auto flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-serif font-normal">Interview in Progress</h2>
                  <p className="text-sm text-white/90 mt-1">
                    {context.expertName} - {context.role}
                  </p>
                </div>
                <button
                  onClick={endInterview}
                  disabled={isGeneratingDoc || messages.length < 4}
                  className="bg-white text-tacivo-purple font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGeneratingDoc ? 'Generating...' : 'End Interview'}
                </button>
              </div>
            </div>

            {/* Messages Container */}
            <div
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-50 to-white"
            >
              <div className="max-w-5xl mx-auto px-6 py-8 space-y-6">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl p-5 ${
                        message.role === 'user'
                          ? 'bg-orange-50 text-gray-900 border border-orange-100'
                          : 'bg-white border border-gray-200 text-gray-900 shadow-sm'
                      }`}
                    >
                      <p className="text-sm font-semibold mb-2 opacity-80">
                        {message.role === 'user' ? context.expertName : 'Tacivo AI'}
                      </p>
                      <div className="whitespace-pre-wrap">{message.content}</div>
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
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
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 bg-white p-6 shadow-lg">
              <div className="max-w-5xl mx-auto flex gap-4">
                <VoiceControls
                  onTranscription={(text) => setInputMessage(text)}
                  onPlayLastMessage={handlePlayLastMessage}
                  disabled={isLoading}
                  hasMessages={messages.some(m => m.role === 'assistant')}
                  voiceControls={voiceControls}
                />
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                  disabled={isLoading}
                  className="flex-1 px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-tacivo-purple focus:border-transparent outline-none transition disabled:opacity-50"
                  placeholder="Type your response or use voice..."
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  className="bg-gradient-to-r from-tacivo-purple to-tacivo-orange text-white font-semibold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Results */}
        {step === 'results' && (
          <div className="min-h-[calc(100vh-5rem)] px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl shadow-lg border border-slate-200/60 p-8 sm:p-10"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                  <div>
                    <h2 className="font-serif text-3xl md:text-4xl font-normal text-slate-900 mb-2">
                      Knowledge Transfer Document
                    </h2>
                    <p className="text-slate-600">
                      {context.expertName} • {context.role} • {context.documentType === 'case-study' ? 'Case Study' : 'Best Practices Guide'}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={downloadPDF}
                      className="px-6 py-3 bg-tacivo-orange text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                    >
                      Download PDF
                    </button>
                    <button
                      onClick={startNewInterview}
                      className="px-6 py-3 bg-gradient-to-r from-tacivo-purple to-tacivo-orange text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                    >
                      Start New Interview
                    </button>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-tacivo-purple prose-a:text-tacivo-orange">
                  <ReactMarkdown>{generatedDocument}</ReactMarkdown>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
