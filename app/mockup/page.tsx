'use client';

import { useState } from 'react';
import { Send, FileText, Clock } from 'lucide-react';
import Link from 'next/link';

export default function MockupPage() {
  const [activeSession, setActiveSession] = useState(0);
  const [messageInput, setMessageInput] = useState('');

  const sessions = [
    {
      id: 0,
      title: 'Crisis Escalation Protocol',
      expert: 'Sarah Martinez',
      duration: '28 min',
      date: 'Oct 17, 2025'
    },
    {
      id: 1,
      title: 'API Integration Best Practices',
      expert: 'Michael Chen',
      duration: '35 min',
      date: 'Oct 15, 2025'
    },
    {
      id: 2,
      title: 'Database Migration Strategy',
      expert: 'Emily Rodriguez',
      duration: '42 min',
      date: 'Oct 12, 2025'
    },
  ];

  const messages = [
    {
      from: 'ai',
      text: 'Hi Sarah, thanks for taking time with me today. Can you walk me through what happens when you get an urgent escalation call?'
    },
    {
      from: 'user',
      text: 'Sure. First thing I do is gather the basics: What system? What\'s the business impact? How many users affected?'
    },
    {
      from: 'ai',
      text: 'What specific questions do you ask to assess severity?'
    },
    {
      from: 'user',
      text: 'I ask: When did it start? What changed recently? Can we see logs? And critically - what\'s the business impact? Is revenue at risk?'
    },
    {
      from: 'ai',
      text: 'What signals tell you to escalate vs. handle at a lower level?'
    },
    {
      from: 'user',
      text: 'Three things: business impact, complexity of the issue, and client type. Enterprise clients with SLAs get immediate senior attention.'
    },
  ];

  const documents = [
    {
      title: 'Crisis Escalation Playbook',
      type: 'Process Documentation',
      pages: 8,
      icon: '📋'
    },
    {
      title: 'Decision Tree Framework',
      type: 'Visual Flowchart',
      pages: 3,
      icon: '🌲'
    },
    {
      title: 'Training Checklist',
      type: 'Onboarding Guide',
      pages: 5,
      icon: '✅'
    },
    {
      title: 'AI Training Dataset',
      type: 'Structured Data',
      pages: 12,
      icon: '🤖'
    },
  ];

  return (
    <div className="h-screen bg-gray-50 flex">
      {/* Sidebar - Saved Sessions */}
      <aside className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <Link href="/">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#b974f4] to-[#ff6b4a] bg-clip-text text-transparent">
              tacivo AI
            </h1>
          </Link>
          <p className="text-sm text-gray-600 mt-1">Knowledge Extraction Platform</p>
        </div>

        {/* Sessions List */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="text-xs uppercase text-gray-500 mb-3 font-semibold tracking-wider px-2">
            Saved Sessions
          </div>
          <div className="space-y-2">
            {sessions.map((session) => (
              <div
                key={session.id}
                onClick={() => setActiveSession(session.id)}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  activeSession === session.id
                    ? 'bg-gradient-to-r from-[#b974f4]/10 to-[#ff6b4a]/10 border border-[#b974f4]/30'
                    : 'bg-gray-50 hover:bg-gray-100 border border-transparent'
                }`}
              >
                <div className="font-semibold text-gray-900 text-sm mb-1">
                  {session.title}
                </div>
                <div className="text-xs text-gray-600">
                  {session.expert}
                </div>
                <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {session.duration}
                  </span>
                  <span>{session.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* New Session Button */}
        <div className="p-4 border-t border-gray-200">
          <button className="w-full py-3 px-4 bg-gradient-to-r from-[#b974f4] to-[#ff6b4a] text-white rounded-lg font-medium hover:shadow-lg transition-all">
            + New Extraction
          </button>
        </div>
      </aside>

      {/* Main Content - Split View */}
      <div className="flex-1 flex overflow-hidden">
        {/* Chat Interface */}
        <div className="flex-1 flex flex-col bg-white border-r border-gray-200">
          {/* Chat Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              {sessions[activeSession].title}
            </h2>
            <p className="text-sm text-gray-600">
              with {sessions[activeSession].expert}
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${
                  message.from === 'ai' ? 'justify-start' : 'justify-end'
                }`}
              >
                <div
                  className={`max-w-[75%] rounded-lg p-4 ${
                    message.from === 'ai'
                      ? 'bg-gradient-to-r from-[#b974f4]/10 to-[#ff6b4a]/10 text-gray-900'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <div className="text-xs font-semibold mb-1 opacity-70">
                    {message.from === 'ai' ? 'tacivo AI' : sessions[activeSession].expert}
                  </div>
                  <div className="text-sm leading-relaxed">{message.text}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder="Ask a follow-up question..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b974f4]/50 focus:border-[#b974f4]"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-[#b974f4] to-[#ff6b4a] text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Knowledge Base - Generated Documentation */}
        <div className="w-96 bg-gray-50 flex flex-col">
          {/* Knowledge Base Header */}
          <div className="px-6 py-4 bg-white border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Generated Documentation
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {documents.length} documents
            </p>
          </div>

          {/* Documents List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {documents.map((doc, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:border-[#b974f4] hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#b974f4]/10 to-[#ff6b4a]/10 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                    {doc.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">
                      {doc.title}
                    </h3>
                    <p className="text-xs text-gray-600 mb-2">
                      {doc.type}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <FileText className="w-3 h-3" />
                      <span>{doc.pages} pages</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Export Button */}
          <div className="p-4 bg-white border-t border-gray-200">
            <button className="w-full py-3 px-4 border-2 border-[#b974f4] text-[#b974f4] rounded-lg font-medium hover:bg-[#b974f4]/5 transition-all">
              Export All Documents
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
