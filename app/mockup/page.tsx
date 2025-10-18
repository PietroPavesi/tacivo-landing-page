'use client';

import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function MockupPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeExtraction, setActiveExtraction] = useState(0);

  const extractions = [
    { title: 'Sarah Martinez', meta: 'Crisis Escalation • 28 min', id: 0 },
    { title: 'Demo Expert 2', meta: 'Process Documentation • 25 min', id: 1 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-6 border-b border-gray-200">
            <Link href="/" className="inline-block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-[#b974f4] to-[#ff6b4a] bg-clip-text text-transparent">
                tacivo
              </h1>
            </Link>
          </div>

          <nav className="px-3 py-4">
            <div className="text-[10px] uppercase text-gray-500 mb-2 font-semibold tracking-wider px-3">
              Navigation
            </div>
            <div className="space-y-1">
              {['Dashboard', 'Extractions', 'Knowledge Base', 'Settings'].map((item, idx) => (
                <div
                  key={item}
                  className={`px-3 py-2 rounded-md cursor-pointer transition-all flex items-center gap-3 text-sm ${
                    idx === 0
                      ? 'bg-[#b974f4]/10 text-[#b974f4] font-medium'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-base">
                    {idx === 0 && '📊'}
                    {idx === 1 && '💬'}
                    {idx === 2 && '📚'}
                    {idx === 3 && '⚙️'}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </nav>

          <div className="px-3 py-4 border-t border-gray-200 mt-auto">
            <div className="text-[10px] uppercase text-gray-500 mb-2 font-semibold tracking-wider px-3">
              Recent Extractions
            </div>
            <div className="space-y-1">
              {extractions.map((extraction) => (
                <div
                  key={extraction.id}
                  onClick={() => setActiveExtraction(extraction.id)}
                  className={`p-3 rounded-md cursor-pointer transition-all border text-sm ${
                    activeExtraction === extraction.id
                      ? 'bg-[#b974f4]/5 border-[#b974f4]/30'
                      : 'border-transparent hover:bg-gray-50'
                  }`}
                >
                  <div className="font-medium text-gray-900">{extraction.title}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{extraction.meta}</div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-hidden bg-gray-50">
          {/* Header */}
          <header className="px-8 py-6 bg-white border-b border-gray-200">
            <div className="flex items-center gap-4 mb-3">
              <Link href="/" className="text-gray-600 hover:text-[#b974f4] transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-2xl font-semibold text-gray-900">Crisis Escalation Protocol - Sarah Martinez</h1>
            </div>
            <div className="flex gap-6 text-sm text-gray-600">
              <span>📅 Extracted: Oct 17, 2025</span>
              <span>⏱️ Duration: 28 minutes</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-[#b974f4] to-[#ff6b4a] text-gray-900">
                Completed
              </span>
            </div>
          </header>

          {/* Tabs */}
          <div className="flex gap-1 px-8 py-3 bg-white border-b border-gray-200 overflow-x-auto scrollbar-hide">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'conversation', label: 'Conversation' },
              { id: 'outputs', label: 'Generated Outputs' },
              { id: 'playbook', label: 'Playbook' },
              { id: 'decision-tree', label: 'Decision Tree' },
              { id: 'training', label: 'Training Checklist' },
              { id: 'ai-dataset', label: 'AI Dataset' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md font-medium text-sm whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#b974f4]/10 text-[#b974f4]'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto p-8 bg-gray-50">
            {activeTab === 'overview' && <OverviewTab />}
            {activeTab === 'conversation' && <ConversationTab />}
            {activeTab === 'outputs' && <OutputsTab />}
            {activeTab === 'playbook' && <PlaybookTab />}
            {activeTab === 'decision-tree' && <DecisionTreeTab />}
            {activeTab === 'training' && <TrainingTab />}
            {activeTab === 'ai-dataset' && <AIDatasetTab />}
          </div>
        </main>
      </div>
    </div>
  );
}

function OverviewTab() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { value: '28', label: 'Minutes of Conversation' },
          { value: '5', label: 'Documents Generated' },
          { value: '12', label: 'Years of Expertise' },
          { value: '1,200', label: 'Words Captured' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="text-4xl font-bold bg-gradient-to-r from-[#b974f4] to-[#ff6b4a] bg-clip-text text-transparent mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Expert Profile */}
      <h2 className="text-xl font-semibold mb-4 text-gray-900">Expert Profile</h2>
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <div className="flex gap-6 items-start">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 text-xl font-semibold flex-shrink-0">
            SM
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1 text-gray-900">Sarah Martinez</h3>
            <p className="text-gray-600 mb-3 text-sm">Senior Solutions Architect</p>
            <p className="text-gray-700 leading-relaxed text-sm">
              12 years of experience in crisis management and technical escalation for IT services.
              Specializes in coordinating complex incidents, client communication, and post-mortem analysis.
            </p>
          </div>
        </div>
      </div>

      {/* Knowledge Domains */}
      <h2 className="text-xl font-semibold mb-4 text-gray-900">Knowledge Domains Extracted</h2>
      <div className="grid grid-cols-2 gap-4">
        {[
          {
            icon: '📋',
            title: 'Crisis Escalation Framework',
            description: 'Complete decision-making protocol for incident triage and escalation',
          },
          {
            icon: '🌲',
            title: 'Decision Tree',
            description: 'Visual flowchart for when to escalate vs handle at support level',
          },
          {
            icon: '✅',
            title: 'Training Checklist',
            description: '3-week onboarding program with competency assessments',
          },
          {
            icon: '🤖',
            title: 'AI Training Dataset',
            description: 'Structured data for AI/LLM training and custom agents',
          },
        ].map((domain) => (
          <div
            key={domain.title}
            className="bg-white border border-gray-200 rounded-lg p-5 cursor-pointer hover:border-[#b974f4] hover:shadow-md transition-all"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#b974f4]/10 to-[#ff6b4a]/10 rounded-lg flex items-center justify-center text-2xl mb-3">
              {domain.icon}
            </div>
            <h3 className="text-base font-semibold mb-2 text-gray-900">{domain.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{domain.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConversationTab() {
  const messages = [
    { from: 'ai', name: 'Tacivo AI', time: '10:00 AM', text: 'Hi Sarah, thanks for taking 30 minutes with me today. I understand you handle critical escalations when client systems go down. Can you walk me through what happens when you get that urgent call?' },
    { from: 'user', name: 'Sarah Martinez', time: '10:01 AM', text: 'Sure. So typically I get a call or Slack message - "Client X\'s production system is down" or "We have a P1 incident." First thing I do is gather the basics: What system? What\'s the business impact? How many users affected?' },
    { from: 'ai', name: 'Tacivo AI', time: '10:02 AM', text: 'What specific questions do you ask?' },
    { from: 'user', name: 'Sarah Martinez', time: '10:03 AM', text: 'I ask: When did it start? What changed recently - was there a deployment, a config change? Can we see logs? What\'s the error message? And critically - what\'s the business impact? Are transactions failing? Is revenue at risk?' },
    { from: 'ai', name: 'Tacivo AI', time: '10:04 AM', text: 'Got it. So you\'re assessing severity. What happens next?' },
    { from: 'user', name: 'Sarah Martinez', time: '10:05 AM', text: 'I make a quick call - is this something our L1/L2 support can handle, or do I need to pull in senior engineers? If logs show something obvious like a service restart or database connection issue, I might have support handle it. But if it\'s unclear or high-stakes, I escalate immediately.' },
    { from: 'ai', name: 'Tacivo AI', time: '10:06 AM', text: 'What signals tell you to escalate vs. handle at lower level?' },
    { from: 'user', name: 'Sarah Martinez', time: '10:07 AM', text: 'Three things: First, business impact - if it\'s revenue-generating or customer-facing, escalate. Second, complexity - if the root cause isn\'t obvious in 10 minutes, escalate. Third, client type - our enterprise clients with SLAs get immediate senior attention, smaller clients might wait if we\'re triaging.' },
    { from: 'ai', name: 'Tacivo AI', time: '10:08 AM', text: 'That\'s really helpful. Let\'s say you decide to escalate. What\'s your process?' },
    { from: 'user', name: 'Sarah Martinez', time: '10:09 AM', text: 'I loop in the right people fast. For infrastructure issues, I ping our DevOps lead. For application bugs, it\'s the product engineering manager. For database issues, our DBA. I create a dedicated Slack channel - "#incident-clientname-date" - and I post what we know so far.' },
    { from: 'ai', name: 'Tacivo AI', time: '10:10 AM', text: 'Do you have a template for that initial post?' },
    { from: 'user', name: 'Sarah Martinez', time: '10:11 AM', text: 'Yeah, actually I do. I post: Client name, system affected, symptoms, business impact, timeline, what we\'ve tried, and who\'s on it. Keeps everyone aligned.' },
    { from: 'ai', name: 'Tacivo AI', time: '10:12 AM', text: 'Smart. What about client communication during this?' },
    { from: 'user', name: 'Sarah Martinez', time: '10:13 AM', text: 'That\'s critical. I immediately email the client with an ETA for next update - usually 30 minutes. I don\'t promise a fix time, just update cadence. Then I assign someone to be the single point of contact for the client, usually me or the account manager.' },
    { from: 'ai', name: 'Tacivo AI', time: '10:14 AM', text: 'What if the client\'s CEO is calling every 5 minutes?' },
    { from: 'user', name: 'Sarah Martinez', time: '10:15 AM', text: 'Ha, that happens. If it\'s high-pressure, I do two things: First, I put someone senior on dedicated client comms so they feel heard. Second, I shield the technical team from interruptions - they need focus to fix it. The worst thing is engineers getting bombarded while trying to troubleshoot.' },
    { from: 'ai', name: 'Tacivo AI', time: '10:16 AM', text: 'Walk me through the troubleshooting phase. How do you coordinate?' },
    { from: 'user', name: 'Sarah Martinez', time: '10:17 AM', text: 'We use a war room approach. Everyone jumps on a Zoom call or huddles in person. I act as coordinator - I\'m not necessarily fixing it, but I\'m tracking what\'s been tested, what\'s been ruled out, and what to try next. I keep a live document updating in real-time.' },
    { from: 'ai', name: 'Tacivo AI', time: '10:18 AM', text: 'What\'s in that document?' },
    { from: 'user', name: 'Sarah Martinez', time: '10:19 AM', text: 'Timeline of events, hypotheses we\'re testing, results of each test, current status, and next actions. It\'s our single source of truth. After the incident, this becomes our post-mortem.' },
    { from: 'ai', name: 'Tacivo AI', time: '10:20 AM', text: 'How do you know when to try a risky fix vs. playing it safe?' },
    { from: 'user', name: 'Sarah Martinez', time: '10:21 AM', text: 'Great question. If we\'re in a total outage - like zero functionality - we can be more aggressive with fixes because we\'re not making it worse. But if it\'s partial - like 80% of users are fine - I\'m way more cautious. A bad fix could take down the other 80%.' },
    { from: 'ai', name: 'Tacivo AI', time: '10:22 AM', text: 'What about rollback decisions?' },
    { from: 'user', name: 'Sarah Martinez', time: '10:23 AM', text: 'If we deployed something in the last 24 hours and now there\'s an issue, my default is rollback first, ask questions later. You can always redeploy. But if the incident started days after a deployment, rollback probably won\'t help and wastes time.' },
    { from: 'ai', name: 'Tacivo AI', time: '10:24 AM', text: 'How do you decide when to engage external vendors or support?' },
    { from: 'user', name: 'Sarah Martinez', time: '10:25 AM', text: 'If it\'s third-party software or infrastructure - like AWS, databases, APIs we integrate with - and we\'ve ruled out our code, I open a ticket with them immediately. But I also work a parallel track assuming it\'s our issue, because vendor support can be slow.' },
    { from: 'ai', name: 'Tacivo AI', time: '10:26 AM', text: 'What\'s your threshold for declaring "we need to fail over to backup systems"?' },
    { from: 'user', name: 'Sarah Martinez', time: '10:27 AM', text: 'If we hit 2 hours with no clear path to resolution and it\'s a critical system, I start discussing failover with the client. Failover isn\'t instant and has risks, so it\'s a big decision. I need client sign-off and executive approval.' },
    { from: 'ai', name: 'Tacivo AI', time: '10:28 AM', text: 'What lessons do you wish you could download into every new senior engineer\'s brain?' },
    { from: 'user', name: 'Sarah Martinez', time: '10:29 AM', text: 'One: Don\'t assume. Verify everything - even the "obvious" stuff. Two: Communication is half the job in a crisis - if you\'re not updating people, they assume the worst. Three: Have a rollback plan before you deploy anything. Four: Know your client\'s business - understand what\'s critical to them, not just what\'s critical technically.', typing: true },
    { from: 'ai', name: 'Tacivo AI', time: '10:30 AM', text: 'Last question - what\'s the most common mistake you see people make in escalations?', typing: true },
    { from: 'user', name: 'Sarah Martinez', time: '10:31 AM', text: 'Panicking and trying random fixes without a hypothesis. Or the opposite - analysis paralysis where they\'re gathering data for hours instead of taking action. You need to balance both - gather enough info to have a theory, then test it quickly.', typing: true },
    { from: 'ai', name: 'Tacivo AI', time: '10:32 AM', text: 'This is incredibly valuable, Sarah. Thank you.', typing: true },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-2">Expert Interview Transcript</h2>
        <div className="text-sm text-gray-600">
          <span className="text-gray-900 font-semibold">Duration:</span> 28 minutes •
          <span className="text-gray-900 font-semibold"> Words Captured:</span> ~1,200 •
          <span className="text-gray-900 font-semibold"> Status:</span> <span className="text-[#34d399]">Processing complete</span>
        </div>
      </div>

      {messages.map((msg, idx) => (
        <div key={idx} className={`flex gap-4 mb-6 ${msg.typing ? 'animate-fade-in' : ''}`}>
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold flex-shrink-0 ${
              msg.from === 'ai'
                ? 'bg-gradient-to-r from-[#b974f4] to-[#ff6b4a] text-gray-900'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {msg.from === 'ai' ? 'T' : 'SM'}
          </div>
          <div className="flex-1">
            <div className="flex gap-3 items-center mb-2">
              <span className="font-semibold">{msg.name}</span>
              <span className="text-xs text-gray-500">{msg.time}</span>
              {msg.typing && (
                <span className="flex items-center gap-1 text-xs text-gray-500">
                  <span className="w-1 h-1 bg-[#b974f4] rounded-full animate-pulse"></span>
                  <span className="w-1 h-1 bg-[#b974f4] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-1 h-1 bg-[#b974f4] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                </span>
              )}
            </div>
            <div className={msg.typing ? 'relative' : ''}>
              <p className="text-gray-700 leading-relaxed">{msg.text}</p>
              {msg.typing && (
                <div className="absolute -left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#b974f4] to-[#ff6b4a] animate-pulse"></div>
              )}
            </div>
          </div>
        </div>
      ))}

      <div className="bg-gradient-to-r from-[#b974f4]/10 to-[#ff6b4a]/10 border-l-4 border-[#b974f4] rounded-r-lg p-6 mt-8">
        <h3 className="text-gray-900 font-semibold mb-3">Tacit Knowledge Extracted:</h3>
        <ul className="text-gray-700 text-sm space-y-2">
          <li>• Crisis assessment criteria and severity classification</li>
          <li>• Escalation triggers and routing protocols</li>
          <li>• War room coordination and live documentation</li>
          <li>• Client communication strategies and SPOC assignment</li>
          <li>• Technical decision-making frameworks (rollback, risky fixes, vendor engagement)</li>
          <li>• Post-incident processes and preventive measures</li>
        </ul>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            <span className="text-[#b974f4] font-semibold">Next Steps:</span> Tacivo AI is processing this conversation into
            structured outputs including playbooks, decision trees, training checklists, and AI-ready datasets.
          </p>
        </div>
      </div>
    </div>
  );
}

function OutputsTab() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-3 gap-6">
        {[
          { icon: '📋', title: 'Crisis Escalation Playbook', description: 'Comprehensive guide for handling P1 incidents', meta: '2,400 words • PDF, DOCX' },
          { icon: '🌲', title: 'Decision Tree Flowchart', description: 'Visual decision-making framework', meta: 'Interactive • Mermaid, PNG' },
          { icon: '✅', title: 'Onboarding Checklist', description: '3-week training program for new hires', meta: '24 items • Excel, PDF' },
          { icon: '🤖', title: 'AI Training Dataset', description: 'Structured knowledge for LLM training', meta: 'JSON, CSV • 1.2MB' },
          { icon: '📊', title: 'Process Metrics', description: 'KPIs and success indicators', meta: 'Dashboard • Analytics' },
          { icon: '💡', title: 'Best Practices', description: 'Common patterns and edge cases', meta: '12 scenarios • PDF' },
        ].map((output) => (
          <div
            key={output.title}
            className="bg-white border border-gray-200 rounded-xl p-6 cursor-pointer hover:border-[#b974f4] hover:-translate-y-1 transition-all hover:shadow-lg hover:shadow-[#b974f4]/15"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#b974f4]/20 to-[#ff6b4a]/20 rounded-xl flex items-center justify-center text-2xl mb-4">
              {output.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{output.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{output.description}</p>
            <div className="pt-4 border-t border-gray-200 text-xs text-gray-500">
              {output.meta}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlaybookTab() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white border border-gray-200 rounded-xl p-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Crisis Escalation Playbook</h1>
          <div className="flex gap-6 text-sm text-gray-600">
            <span>Version 1.0</span>
            <span>•</span>
            <span>Expert: Sarah Martinez</span>
            <span>•</span>
            <span>Last Updated: Oct 17, 2025</span>
          </div>
        </div>

        <div className="flex gap-3 mb-8">
          <button className="px-5 py-2 bg-gradient-to-r from-[#b974f4] to-[#ff6b4a] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#b974f4]/30 transition-all">
            Download PDF
          </button>
          <button className="px-5 py-2 bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            Export DOCX
          </button>
          <button className="px-5 py-2 bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            Share Link
          </button>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          {/* Header Section */}
          <div className="text-sm text-gray-600 space-y-1">
            <p><strong className="text-gray-900">Generated from:</strong> Sarah Martinez Expert Interview (28 min)</p>
            <p><strong className="text-gray-900">Owner:</strong> Operations/Technical Leadership</p>
            <p><strong className="text-gray-900">Status:</strong> <span className="text-[#34d399]">Production-Ready</span></p>
          </div>

          {/* Overview */}
          <div className="bg-gradient-to-r from-[#b974f4]/10 to-[#ff6b4a]/10 border-l-4 border-[#b974f4] p-6 rounded-r-lg">
            <h2 className="text-xl font-semibold mb-3 text-gray-900">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              This playbook codifies proven crisis escalation and incident management protocols for IT services organizations.
              It captures 12 years of field-tested expertise in managing critical client system failures.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              <strong className="text-gray-900">Use this playbook when:</strong> Client production systems experience outages,
              performance degradation, or critical functionality failures.
            </p>
          </div>

          {/* Phase 1 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center gap-3">
              <span className="w-10 h-10 bg-gradient-to-r from-[#b974f4] to-[#ff6b4a] rounded-full flex items-center justify-center text-lg font-bold">1</span>
              Phase 1: Initial Assessment (First 5 Minutes)
            </h2>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900">Immediate Information Gathering</h3>
            <p className="text-gray-700 mb-4">When you receive an escalation alert, collect these data points:</p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 space-y-2">
              <p className="text-sm font-semibold text-[#b974f4] mb-3">CRITICAL QUESTIONS CHECKLIST:</p>
              {[
                'What system is affected? (specific service/application name)',
                'When did the issue start? (exact timestamp if possible)',
                'What are the symptoms? (error messages, user reports)',
                'What changed recently? (deployments, configs, infrastructure)',
                'How many users/transactions affected?',
                "What's the business impact? (revenue, operations, reputation)",
                'Can we access logs? (application, infrastructure, database)'
              ].map((q, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[#ff6b4a] mt-0.5">☐</span>
                  <span className="text-gray-700 text-sm">{q}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-900">Severity Classification</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 border-l-4 border-red-500 p-5 rounded-r-lg">
                <p className="text-gray-900 font-bold mb-2">P1 - Critical (Immediate Escalation Required)</p>
                <ul className="space-y-1 text-gray-700 text-sm ml-5">
                  <li>• Revenue-generating systems down</li>
                  <li>• Customer-facing services unavailable</li>
                  <li>• Data loss or security breach</li>
                  <li>• Enterprise client with SLA impacted</li>
                </ul>
                <p className="text-[#ff6b4a] font-semibold mt-3 text-sm">→ Action: Escalate immediately to senior engineers</p>
              </div>

              <div className="bg-gray-50 border-l-4 border-orange-500 p-5 rounded-r-lg">
                <p className="text-gray-900 font-bold mb-2">P2 - High (Escalate if Not Resolved in 10 Minutes)</p>
                <ul className="space-y-1 text-gray-700 text-sm ml-5">
                  <li>• Significant performance degradation</li>
                  <li>• Intermittent failures affecting multiple users</li>
                  <li>• Root cause unclear after initial triage</li>
                </ul>
                <p className="text-[#ff6b4a] font-semibold mt-3 text-sm">→ Action: Attempt L1/L2 resolution, escalate if no progress</p>
              </div>

              <div className="bg-gray-50 border-l-4 border-yellow-500 p-5 rounded-r-lg">
                <p className="text-gray-900 font-bold mb-2">P3 - Medium (Standard Support Response)</p>
                <ul className="space-y-1 text-gray-700 text-sm ml-5">
                  <li>• Limited user impact</li>
                  <li>• Clear workaround available</li>
                  <li>• Small client or internal system</li>
                </ul>
                <p className="text-[#ff6b4a] font-semibold mt-3 text-sm">→ Action: Handle through normal support channels</p>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center gap-3">
              <span className="w-10 h-10 bg-gradient-to-r from-[#b974f4] to-[#ff6b4a] rounded-full flex items-center justify-center text-lg font-bold">2</span>
              Phase 2: Escalation Decision (Minutes 5-10)
            </h2>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900">Escalation Triggers</h3>
            <p className="text-gray-700 mb-4">Escalate to senior technical resources if <strong className="text-[#ff6b4a]">ANY</strong> of these apply:</p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-5 rounded-lg">
                <p className="text-gray-900 font-semibold mb-2">1. Business Impact Threshold</p>
                <ul className="space-y-1 text-gray-700 text-sm ml-5">
                  <li>• Revenue-generating functionality affected</li>
                  <li>• Customer-facing system with &gt;100 active users</li>
                  <li>• Enterprise client with SLA penalties</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <p className="text-gray-900 font-semibold mb-2">2. Complexity Threshold</p>
                <ul className="space-y-1 text-gray-700 text-sm ml-5">
                  <li>• Root cause not identified within 10 minutes</li>
                  <li>• Issue spans multiple systems/services</li>
                  <li>• Requires deep technical expertise</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <p className="text-gray-900 font-semibold mb-2">3. Client Type Threshold</p>
                <ul className="space-y-1 text-gray-700 text-sm ml-5">
                  <li>• Enterprise clients (always escalate immediately)</li>
                  <li>• Strategic accounts (escalate proactively)</li>
                  <li>• Standard clients (escalate if P1/P2)</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-900">Escalation Routing Matrix</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 p-3 text-left text-gray-900 font-semibold">Issue Type</th>
                    <th className="border border-gray-200 p-3 text-left text-gray-900 font-semibold">Primary Contact</th>
                    <th className="border border-gray-200 p-3 text-left text-gray-900 font-semibold">Secondary Contact</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    ['Infrastructure/Cloud', 'DevOps Lead', 'Platform Engineering Manager'],
                    ['Application Bugs', 'Product Engineering Manager', 'Technical Architect'],
                    ['Database Issues', 'Database Administrator', 'Backend Engineering Lead'],
                    ['Network/Connectivity', 'Network Operations', 'Infrastructure Director'],
                    ['Third-party Integration', 'Integration Specialist', 'Vendor Relations Manager']
                  ].map(([issue, primary, secondary], i) => (
                    <tr key={i} className="border border-gray-200">
                      <td className="border border-gray-200 p-3 text-gray-700">{issue}</td>
                      <td className="border border-gray-200 p-3 text-gray-700">{primary}</td>
                      <td className="border border-gray-200 p-3 text-gray-700">{secondary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Phase 3 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center gap-3">
              <span className="w-10 h-10 bg-gradient-to-r from-[#b974f4] to-[#ff6b4a] rounded-full flex items-center justify-center text-lg font-bold">3</span>
              Phase 3: Crisis Coordination (Ongoing)
            </h2>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900">War Room Setup</h3>

            <div className="space-y-4">
              <div className="bg-gray-50 p-5 rounded-lg">
                <p className="text-gray-900 font-semibold mb-3">Step 1: Create Incident Channel</p>
                <ul className="space-y-2 text-gray-700 text-sm ml-5">
                  <li>• Naming convention: <code className="bg-gray-100 px-2 py-1 rounded text-[#b974f4]">#incident-[clientname]-[YYYYMMDD]</code></li>
                  <li>• Add: Technical team, account manager, operations lead</li>
                  <li>• Pin channel purpose and current status</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <p className="text-gray-900 font-semibold mb-3">Step 2: Initial Status Post (Template)</p>
                <pre className="bg-white p-4 rounded text-xs text-gray-700 overflow-x-auto font-mono border border-gray-200">
{`🚨 INCIDENT: [Client Name] - [System Name]
SEVERITY: [P1/P2/P3]
STARTED: [Timestamp]

SYMPTOMS:
- [What users are experiencing]

BUSINESS IMPACT:
- [Revenue/operations/users affected]

TIMELINE:
- [When it started]
- [What changed recently]

ATTEMPTED SO FAR:
- [Actions taken]

CURRENT TEAM:
- [Names and roles of people investigating]

NEXT UPDATE: [Timestamp - typically 30min]`}
                </pre>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900">Technical Coordination Protocol</h3>
            <div className="bg-gradient-to-r from-[#b974f4]/10 to-[#ff6b4a]/10 p-5 rounded-lg">
              <p className="text-gray-900 font-semibold mb-3">Role: Incident Commander (You)</p>
              <ul className="space-y-2 text-gray-700 text-sm ml-5">
                <li>• Coordinate technical team</li>
                <li>• Maintain live incident document</li>
                <li>• Shield engineers from client interruptions</li>
                <li>• Track hypotheses and test results</li>
                <li>• Make escalation decisions</li>
              </ul>
            </div>
          </div>

          {/* Phase 4 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center gap-3">
              <span className="w-10 h-10 bg-gradient-to-r from-[#b974f4] to-[#ff6b4a] rounded-full flex items-center justify-center text-lg font-bold">4</span>
              Phase 4: Client Communication
            </h2>

            <div className="bg-gradient-to-r from-[#ff6b4a]/20 to-[#b974f4]/20 border-l-4 border-[#ff6b4a] p-5 rounded-r-lg mb-6">
              <p className="text-gray-900 font-bold mb-3">Golden Rules:</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>1. Set expectation for UPDATE frequency, not resolution time</li>
                <li>2. Assign single point of contact (SPOC) for client</li>
                <li>3. Be honest about progress - silence kills trust</li>
                <li>4. Shield technical team from client interruptions</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900">Initial Client Communication (Template)</h3>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <p className="text-xs text-gray-600 mb-3">Subject: [URGENT] Incident Update - [System Name]</p>
              <pre className="text-xs text-gray-700 whitespace-pre-wrap font-sans">
{`Dear [Client Name],

We are aware of the issue affecting [system/functionality] and have
immediately engaged our senior technical team.

CURRENT STATUS:
- Issue identified at [time]
- Impact: [brief description]
- Team assigned: [senior engineer names]

NEXT STEPS:
- Our team is actively investigating
- You will receive an update by [time - typically 30 min from now]
- [Your Name] is your single point of contact

We will provide updates every 30 minutes until resolved.

[SPOC Contact Details]`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900">High-Pressure Client Management</h3>
            <div className="bg-gray-50 p-5 rounded-lg">
              <p className="text-gray-900 font-semibold mb-3">If executive/CEO is calling repeatedly:</p>
              <ul className="space-y-2 text-gray-700 text-sm ml-5">
                <li>• Assign senior person to dedicated client communication</li>
                <li>• Update them every 15 minutes (not 30)</li>
                <li>• Keep technical team protected from interruptions</li>
                <li>• Explain: "Our engineers need focus to resolve this quickly"</li>
              </ul>
            </div>
          </div>

          {/* Key Lessons */}
          <div className="border-t-2 border-gray-200 pt-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Key Lessons & Principles</h2>

            <div className="grid gap-4">
              {[
                { title: "Don't Assume - Verify Everything", desc: "Even 'obvious' issues should be verified. Check the basics: Is the service actually running? Is DNS resolving? Are credentials correct?" },
                { title: "Communication is Half the Job", desc: "In a crisis, silence = panic. Even 'no new information' is worth communicating." },
                { title: "Have a Rollback Plan Before Deployment", desc: "Every deployment should have a tested rollback procedure. In a crisis, this saves hours." },
                { title: "Know Your Client's Business", desc: "Understand what's critical to THEM, not just what's technically critical. A feature that seems minor might be their revenue engine." },
                { title: "Balance Analysis with Action", desc: "Don't spend 3 hours gathering logs without trying anything. Form a hypothesis quickly and test it." },
                { title: "Protect Your Technical Team", desc: "Engineers can't troubleshoot while being interrupted every 5 minutes. Create a communication buffer." }
              ].map((lesson, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#b974f4]">
                  <p className="text-gray-900 font-semibold mb-2">{i + 1}. {lesson.title}</p>
                  <p className="text-gray-700 text-sm">{lesson.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Common Mistakes */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Common Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { wrong: "Panic-driven random fixes without a hypothesis", right: "Form a theory, test methodically" },
                { wrong: "Analysis paralysis - gathering data for hours", right: "Gather enough to form hypothesis, then act" },
                { wrong: "Going silent when there's no progress", right: "Update even when saying 'still investigating'" },
                { wrong: "Assuming recent deployment is unrelated", right: "Always consider rollback for issues <48hr after deploy" },
                { wrong: "Letting client interrupt engineers constantly", right: "Assign SPOC, protect technical team focus" },
                { wrong: "Promising specific resolution time", right: "Promise update frequency, not fix time" }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-400 text-sm mb-2">❌ {item.wrong}</p>
                  <p className="text-[#34d399] text-sm">✅ {item.right}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t-2 border-gray-200 pt-6 text-center">
            <p className="text-gray-600 text-sm italic">
              This playbook was generated from a 28-minute expert interview using Tacivo AI.
              It captures 12 years of field experience in a format that can be immediately used
              for training, standardization, and AI system enhancement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DecisionTreeTab() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white border border-gray-200 rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-4">Crisis Escalation Decision Tree</h1>
        <p className="text-gray-600 mb-2">IT Services - When to Escalate vs. Handle at Support Level</p>
        <div className="text-sm text-gray-500">
          <span className="text-gray-900 font-semibold">Source:</span> Sarah Martinez Expert Knowledge •
          <span className="text-gray-900 font-semibold"> Use Case:</span> Real-time decision support for L1/L2 support engineers
        </div>
      </div>

      {/* Start: Incident Reported */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-[#b974f4]">START: Incident Reported</h2>
        <div className="bg-gray-50 p-5 rounded-lg font-mono text-xs leading-relaxed overflow-x-auto">
          <pre className="text-gray-700">
{`┌─────────────────────────────────────┐
│   INCIDENT REPORTED                 │
│   Client system issue detected      │
└──────────────┬──────────────────────┘
               │
               ▼
┌──────────────────────────────────────────────────────────┐
│  GATHER INITIAL DATA (2-3 minutes)                       │
│  ✓ What system affected?                                 │
│  ✓ When did it start?                                    │
│  ✓ What are symptoms?                                    │
│  ✓ Recent changes?                                       │
│  ✓ How many users affected?                              │
│  ✓ Business impact?                                      │
└──────────────┬───────────────────────────────────────────┘
               │
               ▼
        ┌──────────────────┐
        │ SEVERITY CHECK   │
        │ (Business Impact)│
        └─────┬────────────┘
              │
    ┌─────────┴─────────┐
    ▼                   ▼`}
          </pre>
        </div>
      </div>

      {/* Decision Path 1: Business Impact */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-gradient-to-r from-[#b974f4] to-[#ff6b4a] rounded-full flex items-center justify-center text-sm font-bold">1</span>
          Decision Path 1: Business Impact Assessment
        </h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-500">
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-900 font-semibold mb-1">Is this a revenue-generating system?</p>
                <p className="text-gray-600 ml-4">└─ YES → <span className="text-red-400 font-bold">ESCALATE IMMEDIATELY (P1)</span></p>
                <p className="text-gray-600 ml-4">└─ NO → Continue to Decision Path 2</p>
              </div>
              <div>
                <p className="text-gray-900 font-semibold mb-1">Is this customer-facing with &gt;100 active users?</p>
                <p className="text-gray-600 ml-4">└─ YES → <span className="text-red-400 font-bold">ESCALATE IMMEDIATELY (P1)</span></p>
                <p className="text-gray-600 ml-4">└─ NO → Continue to Decision Path 2</p>
              </div>
              <div>
                <p className="text-gray-900 font-semibold mb-1">Is this an Enterprise client with SLA?</p>
                <p className="text-gray-600 ml-4">└─ YES → <span className="text-red-400 font-bold">ESCALATE IMMEDIATELY (P1)</span></p>
                <p className="text-gray-600 ml-4">└─ NO → Continue to Decision Path 2</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#ff6b4a]/20 to-[#b974f4]/20 p-4 rounded-lg">
            <p className="text-gray-900 font-bold mb-2">→ If ANY "YES" above: ESCALATE to Senior Engineers</p>
            <p className="text-gray-700 text-sm font-semibold mb-2">Action Steps:</p>
            <ol className="text-gray-700 text-sm space-y-1 ml-5">
              <li>1. Create incident channel: #incident-[client]-[date]</li>
              <li>2. Page on-call senior engineer</li>
              <li>3. Post initial status</li>
              <li>4. Notify client within 5 minutes</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Decision Path 2: Technical Complexity */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-gradient-to-r from-[#b974f4] to-[#ff6b4a] rounded-full flex items-center justify-center text-sm font-bold">2</span>
          Decision Path 2: Technical Complexity Assessment
        </h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-900 font-semibold mb-3">Can you identify the root cause in &lt;10 minutes?</p>
            <div className="ml-4 space-y-2 text-sm">
              <p className="text-gray-700">├─ YES → Continue to Decision Path 3</p>
              <p className="text-gray-700">└─ NO → Is the issue:</p>
              <div className="ml-8 space-y-1">
                <p className="text-gray-700">├─ Multi-system issue? → <span className="text-orange-400 font-bold">ESCALATE (P2)</span></p>
                <p className="text-gray-700">├─ Requires specialized knowledge? → <span className="text-orange-400 font-bold">ESCALATE (P2)</span></p>
                <p className="text-gray-700">├─ Logs show errors you don&apos;t understand? → <span className="text-orange-400 font-bold">ESCALATE (P2)</span></p>
                <p className="text-gray-700">└─ Clear single-component issue? → Continue to Path 3</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#b974f4]/10 to-[#ff6b4a]/10 p-4 rounded-lg">
            <p className="text-gray-900 font-bold mb-3">→ If ESCALATE: Assign to appropriate specialist</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-gray-700">• Infrastructure/Cloud → <span className="text-[#b974f4]">DevOps Lead</span></div>
              <div className="text-gray-700">• Application Bug → <span className="text-[#b974f4]">Engineering Manager</span></div>
              <div className="text-gray-700">• Database → <span className="text-[#b974f4]">DBA</span></div>
              <div className="text-gray-700">• Network → <span className="text-[#b974f4]">Network Ops</span></div>
              <div className="text-gray-700">• Integration → <span className="text-[#b974f4]">Integration Specialist</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decision Path 3: L1/L2 Resolution */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-gradient-to-r from-[#b974f4] to-[#ff6b4a] rounded-full flex items-center justify-center text-sm font-bold">3</span>
          Decision Path 3: L1/L2 Resolution Attempt
        </h2>
        <div className="bg-gray-50 p-5 rounded-lg space-y-4">
          <div>
            <p className="text-gray-900 font-semibold mb-2">You&apos;ve reached here if:</p>
            <ul className="text-gray-700 text-sm space-y-1 ml-5">
              <li>✓ NOT revenue-critical</li>
              <li>✓ NOT high-user-impact</li>
              <li>✓ NOT enterprise client</li>
              <li>✓ Root cause seems identifiable</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border border-gray-200">
            <p className="text-[#ff6b4a] font-bold mb-3">ATTEMPT L1/L2 RESOLUTION - Time limit: 10 minutes</p>
            <p className="text-gray-900 text-sm mb-2">Try standard fixes:</p>
            <ul className="text-gray-700 text-sm space-y-1 ml-5">
              <li>├─ Service restart</li>
              <li>├─ Clear cache/logs</li>
              <li>├─ Check configurations</li>
              <li>├─ Review recent changes</li>
              <li>└─ Test connectivity</li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-[#ff6b4a]/20 to-[#b974f4]/20 p-4 rounded-lg">
            <p className="text-gray-900 font-bold mb-2">If NOT RESOLVED after 10 minutes:</p>
            <p className="text-gray-700 text-sm">Has it been 10+ minutes with no progress?</p>
            <p className="text-gray-700 text-sm ml-4">└─ YES → <span className="text-[#ff6b4a] font-bold">ESCALATE to senior technical resources</span></p>
            <p className="text-gray-700 text-sm ml-4">└─ NO → Continue troubleshooting (but set 10-min timer)</p>
          </div>
        </div>
      </div>

      {/* Decision Path 4: During Investigation */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-gradient-to-r from-[#b974f4] to-[#ff6b4a] rounded-full flex items-center justify-center text-sm font-bold">4</span>
          Decision Path 4: During Investigation (Senior Engineers)
        </h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-gray-900 font-semibold mb-3">Rollback Decision Flowchart</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-900 mb-1">Was there a deployment in last 24 hours?</p>
                <p className="text-gray-700 ml-4">├─ YES → <span className="text-[#34d399] font-bold">ROLLBACK IMMEDIATELY</span></p>
                <p className="text-gray-600 ml-8 text-xs">(High probability deployment caused it)</p>
              </div>
              <div>
                <p className="text-gray-700 ml-4">└─ NO → Was there deployment 24-48 hours ago?</p>
                <p className="text-gray-700 ml-8">├─ YES → <span className="text-yellow-400 font-bold">CONSIDER ROLLBACK</span></p>
                <p className="text-gray-600 ml-12 text-xs">(Possible but less likely)</p>
                <p className="text-gray-700 ml-8">└─ NO → <span className="text-gray-500 font-bold">DON&apos;T ROLLBACK</span></p>
                <p className="text-gray-600 ml-12 text-xs">(Unlikely related, focus elsewhere)</p>
              </div>
              <div className="pt-3 border-t border-gray-200">
                <p className="text-gray-900 mb-1">Is third-party service showing degradation?</p>
                <p className="text-gray-700 ml-4">└─ YES → <span className="text-gray-500 font-bold">DON&apos;T ROLLBACK</span> (External issue)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decision Path 5: Risky Fix */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-gradient-to-r from-[#b974f4] to-[#ff6b4a] rounded-full flex items-center justify-center text-sm font-bold">5</span>
          Decision Path 5: Risky Fix vs. Safe Approach
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-red-500">
            <p className="text-gray-900 font-bold mb-3">TOTAL OUTAGE (0% functionality)</p>
            <p className="text-[#34d399] font-semibold mb-2">→ BE AGGRESSIVE</p>
            <ul className="text-gray-700 text-sm space-y-1 ml-5">
              <li>✓ You can&apos;t make it worse</li>
              <li>✓ Try fixes with higher risk</li>
              <li>✓ Speed &gt; caution</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-yellow-500">
            <p className="text-gray-900 font-bold mb-3">PARTIAL OUTAGE (some users working)</p>
            <p className="text-yellow-400 font-semibold mb-2">→ BE CAUTIOUS</p>
            <ul className="text-gray-700 text-sm space-y-1 ml-5">
              <li>✓ Test in staging if possible</li>
              <li>✓ Bad fix could impact working users</li>
              <li>✓ Consider off-hours maintenance window</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Decision Path 6: Vendor Engagement */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-gradient-to-r from-[#b974f4] to-[#ff6b4a] rounded-full flex items-center justify-center text-sm font-bold">6</span>
          Decision Path 6: Vendor Engagement
        </h2>
        <div className="bg-gray-50 p-5 rounded-lg">
          <div className="space-y-3 text-sm">
            <p className="text-gray-900 font-semibold">Is the issue potentially in third-party software/infrastructure?</p>
            <div className="ml-4 space-y-2">
              <p className="text-gray-700">├─ YES → Have we ruled out our code/config?</p>
              <div className="ml-8 space-y-2">
                <div>
                  <p className="text-gray-700">├─ YES → <span className="text-[#ff6b4a] font-bold">ENGAGE VENDOR SUPPORT</span></p>
                  <p className="text-gray-600 ml-4 text-xs">(Open ticket immediately)</p>
                  <p className="text-[#b974f4] ml-4 font-semibold">BUT ALSO:</p>
                  <p className="text-gray-700 ml-4">└─→ Continue parallel investigation</p>
                  <p className="text-gray-600 ml-8 text-xs">(Don&apos;t wait for vendor)</p>
                </div>
                <p className="text-gray-700">└─ NO → Continue internal investigation</p>
              </div>
              <p className="text-gray-700">└─ NO → Internal issue, no vendor needed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decision Path 7: Failover */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-gradient-to-r from-[#b974f4] to-[#ff6b4a] rounded-full flex items-center justify-center text-sm font-bold">7</span>
          Decision Path 7: Failover to Backup Systems
        </h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-5 rounded-lg">
            <p className="text-gray-900 font-semibold mb-3">Have we been investigating 2+ hours with no clear resolution path?</p>
            <div className="ml-4 space-y-2 text-sm">
              <p className="text-gray-700">└─ YES → Is this a critical system with backup infrastructure?</p>
              <div className="ml-8 space-y-1">
                <p className="text-gray-700">├─ YES → <span className="text-[#ff6b4a] font-bold">CONSIDER FAILOVER</span></p>
                <p className="text-gray-700 ml-4">├─ Get client approval</p>
                <p className="text-gray-700 ml-4">├─ Get executive approval</p>
                <p className="text-gray-700 ml-4">└─ Confirm failover tested/ready</p>
                <p className="text-gray-700">└─ NO → Continue investigation</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#b974f4]/10 to-[#ff6b4a]/10 p-5 rounded-lg">
            <p className="text-gray-900 font-bold mb-3">Failover Checklist:</p>
            <div className="space-y-2 text-sm">
              {[
                'Client understands risks and approves',
                'Executive approval obtained (if needed)',
                'Backup system verified operational',
                'Data sync status confirmed',
                'Rollback plan if failover fails',
                'Communication plan for transition'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[#ff6b4a]">☐</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decision Path 8: Stuck */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-gradient-to-r from-[#b974f4] to-[#ff6b4a] rounded-full flex items-center justify-center text-sm font-bold">8</span>
          Decision Path 8: Stuck (No Progress After 3-4 Hours)
        </h2>
        <div className="bg-gray-50 p-5 rounded-lg">
          <p className="text-gray-900 font-bold mb-4">If 3-4 hours with no progress - Escalation Options:</p>
          <div className="space-y-4">
            {[
              { num: '1', title: 'External Specialist', items: ['Can we bring in consultant expert in this tech?', 'Cost vs. downtime calculation'] },
              { num: '2', title: 'Vendor Premium Support', items: ['Do we have access to vendor\'s premium support?', 'Engage immediately with severity escalation'] },
              { num: '3', title: 'Temporary Workaround', items: ['Is there a non-ideal but functional workaround?', 'Implement to restore partial service'] },
              { num: '4', title: 'Maintenance Window', items: ['Can we schedule investigation with system down?', 'Allows more invasive troubleshooting'] }
            ].map((option) => (
              <div key={option.num} className="bg-white p-4 rounded border border-gray-200">
                <p className="text-[#b974f4] font-semibold mb-2">Option {option.num}: {option.title}</p>
                <ul className="text-gray-700 text-sm space-y-1 ml-5">
                  {option.items.map((item, i) => (
                    <li key={i}>├─ {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Communication Decision Points */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-[#ff6b4a]">Client Communication Decision Points</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-5 rounded-lg">
            <p className="text-gray-900 font-bold mb-3">ALWAYS update client:</p>
            <ul className="text-gray-700 text-sm space-y-1 ml-5">
              <li>├─ Within 5 minutes of incident start</li>
              <li>├─ Every 30 minutes during investigation</li>
              <li>├─ Immediately when status changes (better or worse)</li>
              <li>└─ When resolution achieved</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg">
            <p className="text-gray-900 font-bold mb-3">IF client is calling repeatedly:</p>
            <ul className="text-gray-700 text-sm space-y-1 ml-5">
              <li>├─ Assign dedicated SPOC (not technical team)</li>
              <li>├─ Increase update frequency to 15 minutes</li>
              <li>└─ Explain need to protect engineer focus</li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-[#b974f4]/10 to-[#ff6b4a]/10 p-5 rounded-lg">
            <p className="text-gray-900 font-bold mb-3">IF no progress to report: STILL UPDATE</p>
            <p className="text-gray-700 text-sm italic">
              &quot;We have tested X, Y, Z. Ruled out A, B. Current theory is C. Next update in 30 min.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Special Cases */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-red-400">Special Case Scenarios</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-red-500">
            <p className="text-red-400 font-bold mb-2">Scenario: Data Loss Suspected</p>
            <p className="text-gray-900 font-semibold mb-2">ANY possibility of data loss?</p>
            <p className="text-gray-700 text-sm mb-2">└─ YES → <span className="text-red-400 font-bold">IMMEDIATE P1 ESCALATION</span></p>
            <ul className="text-gray-700 text-sm space-y-1 ml-8">
              <li>+ Notify client immediately</li>
              <li>+ Engage data recovery specialist</li>
              <li>+ Stop all operations that could overwrite</li>
              <li>+ Document everything for potential forensics</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-red-500">
            <p className="text-red-400 font-bold mb-2">Scenario: Security Breach Suspected</p>
            <p className="text-gray-900 font-semibold mb-2">ANY signs of security breach?</p>
            <p className="text-gray-700 text-sm mb-2">└─ YES → <span className="text-red-400 font-bold">IMMEDIATE P1 ESCALATION</span></p>
            <ul className="text-gray-700 text-sm space-y-1 ml-8">
              <li>+ Follow security incident protocol</li>
              <li>+ Isolate affected systems</li>
              <li>+ Notify security team & client</li>
              <li>+ Preserve logs/evidence</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-orange-500">
            <p className="text-orange-400 font-bold mb-2">Scenario: Multiple Clients Affected</p>
            <p className="text-gray-900 font-semibold mb-2">Is this affecting multiple clients?</p>
            <p className="text-gray-700 text-sm mb-2">└─ YES → Likely platform/infrastructure issue</p>
            <ul className="text-gray-700 text-sm space-y-1 ml-8">
              <li>+ ESCALATE to Platform Engineering</li>
              <li>+ Create master incident channel</li>
              <li>+ Update all affected clients</li>
              <li>+ Consider system-wide status page update</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-r from-[#b974f4] to-[#ff6b4a] rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Summary: Quick Escalation Criteria</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
            <p className="text-gray-900 font-bold mb-2">IMMEDIATE ESCALATION:</p>
            <ul className="text-gray-900 text-sm space-y-1">
              <li>✓ Revenue-generating system down</li>
              <li>✓ Customer-facing with &gt;100 users affected</li>
              <li>✓ Enterprise client with SLA</li>
              <li>✓ Data loss suspected</li>
              <li>✓ Security breach suspected</li>
              <li>✓ Multiple clients affected</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
            <p className="text-gray-900 font-bold mb-2">ESCALATE AFTER 10 MINUTES:</p>
            <ul className="text-gray-900 text-sm space-y-1">
              <li>✓ Root cause unclear</li>
              <li>✓ Multi-system issue</li>
              <li>✓ Requires specialized knowledge</li>
              <li>✓ Standard fixes didn&apos;t work</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
            <p className="text-gray-900 font-bold mb-2">ESCALATE AFTER 1 HOUR:</p>
            <ul className="text-gray-900 text-sm space-y-1">
              <li>✓ No clear progress</li>
              <li>✓ Need to consider rollback</li>
              <li>✓ Client pressure increasing</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
            <p className="text-gray-900 font-bold mb-2">ESCALATE AFTER 2 HOURS:</p>
            <ul className="text-gray-900 text-sm space-y-1">
              <li>✓ Consider failover</li>
              <li>✓ Engage external resources</li>
              <li>✓ Re-evaluate strategy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
        <p className="text-gray-600 text-sm italic">
          This decision tree was generated from Sarah Martinez&apos;s 12 years of field experience.
          It can be used for training, real-time decision support, or integrated into AI systems for automated triage.
        </p>
      </div>
    </div>
  );
}

function TrainingTab() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
        <h2 className="text-2xl font-semibold mb-2">3-Week Crisis Management Training</h2>
        <p className="text-gray-600">New hire onboarding checklist for incident response</p>
      </div>

      {['Week 1: Foundations', 'Week 2: Escalation Protocols', 'Week 3: Advanced Scenarios'].map((week) => (
        <div key={week} className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">{week}</h3>
          <div className="space-y-2">
            {[
              'Shadow 3 escalation calls with senior team members',
              'Review last 5 major incidents and their resolutions',
              'Complete incident response simulation exercises',
              'Demonstrate proper triage and classification',
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
              >
                <div className="w-5 h-5 border-2 border-[#b974f4] rounded flex-shrink-0 mt-0.5"></div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function AIDatasetTab() {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
        <h2 className="text-3xl font-bold mb-3">AI Training Dataset</h2>
        <p className="text-gray-600 mb-4">Structured knowledge export for LLM training and AI agent development</p>
        <div className="flex gap-3">
          <button className="px-5 py-2 bg-gradient-to-r from-[#b974f4] to-[#ff6b4a] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#b974f4]/30 transition-all">
            Download JSON
          </button>
          <button className="px-5 py-2 bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            Export CSV
          </button>
          <button className="px-5 py-2 bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            API Access
          </button>
        </div>
      </div>

      {/* Sub-tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {[
          { id: 'overview', label: 'Overview' },
          { id: 'domains', label: 'Knowledge Domains' },
          { id: 'training', label: 'Training Examples' },
          { id: 'prompts', label: 'Prompt Engineering' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSection(tab.id)}
            className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
              activeSection === tab.id
                ? 'bg-gradient-to-r from-[#b974f4] to-[#ff6b4a] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Overview Section */}
      {activeSection === 'overview' && (
        <div className="space-y-6">
          {/* Metadata */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Dataset Metadata</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: 'Dataset Name', value: 'Crisis Escalation Expert Knowledge' },
                { label: 'Source', value: 'Expert Interview - Sarah Martinez' },
                { label: 'Domain', value: 'IT Services Operations' },
                { label: 'Use Case', value: 'AI-powered incident triage and decision support' },
                { label: 'Expert Experience', value: '12 years' },
                { label: 'Interview Duration', value: '28 minutes' },
                { label: 'Generated Date', value: '2025-10-17' },
                { label: 'Version', value: '1.0' },
              ].map((item) => (
                <div key={item.label} className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-xs text-gray-600 mb-1">{item.label}</div>
                  <div className="text-sm font-semibold text-gray-900">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Expert Profile */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Expert Profile</h3>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Role</div>
                  <div className="text-gray-900 font-medium">Senior Solutions Architect</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Specialization</div>
                  <div className="text-gray-900 font-medium">Crisis Management & Technical Escalation</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Company Type</div>
                  <div className="text-gray-900 font-medium">Mid-size IT Services (250 employees)</div>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-2">Key Expertise</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Incident triage and escalation',
                    'Client communication under pressure',
                    'Technical troubleshooting coordination',
                    'Post-incident analysis',
                  ].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gradient-to-r from-[#b974f4]/10 to-[#ff6b4a]/10 text-gray-900 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Intended Applications */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Intended Applications</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'AI-powered incident triage systems',
                'Chatbot for L1/L2 support engineers',
                'Decision support tools for operations teams',
                'Training simulations for new engineers',
                'Automated playbook generation',
                'Custom LLM fine-tuning for IT operations',
              ].map((app, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-[#b974f4] mt-0.5">✓</span>
                  <span className="text-sm text-gray-700">{app}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Knowledge Domains Section */}
      {activeSection === 'domains' && (
        <div className="space-y-6">
          {/* Incident Severity Assessment */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Incident Severity Assessment</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-5 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">CRITICAL</span>
                  <span className="text-gray-900 font-semibold">Business Impact</span>
                </div>
                <div className="text-sm text-gray-700 mb-3">Indicators:</div>
                <div className="grid md:grid-cols-2 gap-2">
                  {[
                    'Revenue generating system affected',
                    'Customer facing 100+ users',
                    'Enterprise client SLA penalties',
                    'Data loss suspected',
                    'Security breach suspected',
                  ].map((indicator) => (
                    <div key={indicator} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">•</span>
                      {indicator}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">HIGH</span>
                  <span className="text-gray-900 font-semibold">Technical Complexity</span>
                </div>
                <div className="text-sm text-gray-700 mb-3">Indicators:</div>
                <div className="grid md:grid-cols-2 gap-2">
                  {[
                    'Root cause unclear after 10min',
                    'Multi-system issue',
                    'Requires specialized knowledge',
                    'Logs show unfamiliar errors',
                  ].map((indicator) => (
                    <div key={indicator} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-orange-500 mt-0.5">•</span>
                      {indicator}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">HIGH</span>
                  <span className="text-gray-900 font-semibold">Client Tier</span>
                </div>
                <div className="grid md:grid-cols-3 gap-3 mt-3">
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <div className="text-xs text-gray-600 mb-1">Enterprise</div>
                    <div className="text-sm font-semibold text-gray-900">Escalate immediately</div>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <div className="text-xs text-gray-600 mb-1">Strategic</div>
                    <div className="text-sm font-semibold text-gray-900">Escalate proactively</div>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <div className="text-xs text-gray-600 mb-1">Standard</div>
                    <div className="text-sm font-semibold text-gray-900">Escalate if P1/P2</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Communication Protocols */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Crisis Communication Protocols</h3>
            <div className="space-y-4">
              {[
                {
                  principle: 'Set update frequency, not resolution time',
                  rationale: 'Clients accept uncertainty but hate silence',
                  implementation: 'Promise updates every 30min, not fix time',
                },
                {
                  principle: 'Assign single point of contact',
                  rationale: 'Prevents client from interrupting multiple engineers',
                  implementation: 'SPOC handles all client communication',
                },
                {
                  principle: 'Honesty about progress',
                  rationale: 'Silence kills trust faster than bad news',
                  implementation: "Update even when no progress: 'Tested X, ruled out Y, trying Z'",
                },
                {
                  principle: 'Shield technical team',
                  rationale: 'Engineers need focus to solve complex problems',
                  implementation: 'Communication buffer between client and engineers',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-5 rounded-lg border-l-4 border-[#b974f4]">
                  <div className="text-gray-900 font-semibold mb-2">{item.principle}</div>
                  <div className="text-sm text-gray-600 mb-2">
                    <span className="font-semibold">Rationale:</span> {item.rationale}
                  </div>
                  <div className="text-sm text-gray-700">
                    <span className="font-semibold text-[#b974f4]">Implementation:</span> {item.implementation}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Decision Making */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Technical Decision Making Under Pressure</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-5 rounded-lg">
                <div className="text-gray-900 font-semibold mb-3">Rollback vs. Investigate</div>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded border-l-4 border-green-500">
                    <div className="text-sm font-semibold text-gray-900 mb-1">Rollback Immediately</div>
                    <div className="text-sm text-gray-700 mb-1">Condition: Deployment within 24 hours</div>
                    <div className="text-xs text-gray-600">Rationale: High probability deployment caused issue</div>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                    <div className="text-sm font-semibold text-gray-900 mb-1">Consider Rollback</div>
                    <div className="text-sm text-gray-700 mb-1">Condition: Deployment 24-48 hours ago</div>
                    <div className="text-xs text-gray-600">Rationale: Possible but less likely connection</div>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-gray-300">
                    <div className="text-sm font-semibold text-gray-900 mb-1">Don&apos;t Rollback</div>
                    <div className="text-sm text-gray-700 mb-1">Condition: Deployment over 48 hours ago OR third-party degradation</div>
                    <div className="text-xs text-gray-600">Rationale: Unlikely related, wastes time or won&apos;t help external issues</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <div className="text-gray-900 font-semibold mb-3">Risky Fix vs. Safe Approach</div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border-l-4 border-red-500">
                    <div className="text-sm font-semibold text-gray-900 mb-2">Be Aggressive</div>
                    <div className="text-xs text-gray-600 mb-2">Condition: Total outage (0% functionality)</div>
                    <div className="text-sm text-gray-700">Cannot make situation worse. Try fixes with higher risk, prioritize speed.</div>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                    <div className="text-sm font-semibold text-gray-900 mb-2">Be Cautious</div>
                    <div className="text-xs text-gray-600 mb-2">Condition: Partial outage (some users working)</div>
                    <div className="text-sm text-gray-700">Bad fix could impact working users. Test in staging, consider maintenance window.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Mental Models */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Key Mental Models & Principles</h3>
            <div className="space-y-3">
              {[
                {
                  principle: "Don't assume - verify everything",
                  explanation: "Even 'obvious' issues should be verified. Check basics: service running? DNS resolving? Credentials correct?",
                  mistake: 'Assuming the obvious and wasting time on complex troubleshooting',
                },
                {
                  principle: 'Communication is half the job',
                  explanation: "In crisis, silence equals panic. Update even when saying 'still investigating'",
                  mistake: "Going silent when there's no progress, killing client trust",
                },
                {
                  principle: 'Rollback plan before deployment',
                  explanation: 'Every deployment should have tested rollback procedure. In crisis, this saves hours',
                  mistake: 'Deploying without rollback plan, then scrambling during incident',
                },
                {
                  principle: "Know client's business",
                  explanation: "Understand what's critical to THEM, not just technically critical. Minor feature might be their revenue engine",
                  mistake: 'Prioritizing technical severity over business impact',
                },
                {
                  principle: 'Balance analysis with action',
                  explanation: "Form hypothesis quickly and test. Don't spend 3 hours gathering logs without trying anything",
                  mistake: 'Panic-driven random fixes OR analysis paralysis',
                },
                {
                  principle: 'Protect technical team focus',
                  explanation: "Engineers can't troubleshoot while interrupted every 5 minutes. Create communication buffer",
                  mistake: 'Letting clients interrupt engineers constantly',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-r from-[#b974f4]/5 to-[#ff6b4a]/5 p-4 rounded-lg">
                  <div className="text-gray-900 font-semibold mb-2">{idx + 1}. {item.principle}</div>
                  <div className="text-sm text-gray-700 mb-2">{item.explanation}</div>
                  <div className="text-xs text-red-600">Common mistake: {item.mistake}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Training Examples Section */}
      {activeSection === 'training' && (
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Training Examples for AI Systems</h3>
            <p className="text-sm text-gray-600 mb-6">Real-world scenarios with expert decision-making reasoning</p>

            <div className="space-y-6">
              {/* Example 1 */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#b974f4]">
                <div className="text-xs text-[#b974f4] font-semibold mb-2">SCENARIO 1</div>
                <div className="text-gray-900 font-semibold mb-3">Deployment 18 hours ago, P1 incident now</div>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Question:</div>
                    <div className="text-sm text-gray-900">Should we rollback?</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Expert Decision:</div>
                    <div className="text-sm text-gray-900 font-medium">Consider rollback but not immediate</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Reasoning:</div>
                    <div className="text-sm text-gray-700">18 hours is borderline. If no clear cause in 30-60 min, try rollback. But also investigate parallel track</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Key Factors:</div>
                    <div className="flex flex-wrap gap-2">
                      {['Time since deployment', 'Availability of logs', 'Complexity of rollback procedure'].map((factor) => (
                        <span key={factor} className="px-2 py-1 bg-white text-gray-700 rounded text-xs border border-gray-200">
                          {factor}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Example 2 */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#ff6b4a]">
                <div className="text-xs text-[#ff6b4a] font-semibold mb-2">SCENARIO 2</div>
                <div className="text-gray-900 font-semibold mb-3">Total outage, unproven fix available</div>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Question:</div>
                    <div className="text-sm text-gray-900">Should we try the risky fix?</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Expert Decision:</div>
                    <div className="text-sm text-gray-900 font-medium">Yes, be aggressive</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Reasoning:</div>
                    <div className="text-sm text-gray-700">Total outage means we can&apos;t make it worse. Test the fix. Speed matters more than perfect solution</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Key Factors:</div>
                    <div className="flex flex-wrap gap-2">
                      {['Current state (total vs partial)', 'Fix risk level', 'Time pressure'].map((factor) => (
                        <span key={factor} className="px-2 py-1 bg-white text-gray-700 rounded text-xs border border-gray-200">
                          {factor}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Example 3 */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#b974f4]">
                <div className="text-xs text-[#b974f4] font-semibold mb-2">SCENARIO 3</div>
                <div className="text-gray-900 font-semibold mb-3">3 hours no progress, failover available but untested 6 months</div>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Question:</div>
                    <div className="text-sm text-gray-900">Should we failover?</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Expert Decision:</div>
                    <div className="text-sm text-gray-900 font-medium">Conditional - depends on client criticality and testing feasibility</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Reasoning:</div>
                    <div className="text-sm text-gray-700">Need client approval and executive signoff. Failover risk is high if untested. Consider testing failover in parallel while continuing investigation</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Key Factors:</div>
                    <div className="flex flex-wrap gap-2">
                      {['Investigation duration', 'Failover test status', 'Client business impact', 'Approval chain'].map((factor) => (
                        <span key={factor} className="px-2 py-1 bg-white text-gray-700 rounded text-xs border border-gray-200">
                          {factor}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Example 4 */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#ff6b4a]">
                <div className="text-xs text-[#ff6b4a] font-semibold mb-2">SCENARIO 4</div>
                <div className="text-gray-900 font-semibold mb-3">CEO calling every 5 minutes</div>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Question:</div>
                    <div className="text-sm text-gray-900">How to handle?</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Expert Decision:</div>
                    <div className="text-sm text-gray-900 font-medium">Assign senior SPOC for client, increase update frequency, protect engineers</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Reasoning:</div>
                    <div className="text-sm text-gray-700">Client needs to feel heard but engineers need focus. Split responsibilities: one person on communication, team on resolution</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Implementation:</div>
                    <ul className="text-sm text-gray-700 space-y-1 ml-5">
                      <li>• Assign dedicated senior person to client</li>
                      <li>• Update every 15min instead of 30min</li>
                      <li>• Explain need for engineer focus</li>
                      <li>• Keep technical team shielded</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Example 5 */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#b974f4]">
                <div className="text-xs text-[#b974f4] font-semibold mb-2">SCENARIO 5</div>
                <div className="text-gray-900 font-semibold mb-3">Issue appears in third-party API, 3am, limited support</div>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Question:</div>
                    <div className="text-sm text-gray-900">What to do?</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Expert Decision:</div>
                    <div className="text-sm text-gray-900 font-medium">Open vendor ticket immediately AND continue parallel investigation</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Reasoning:</div>
                    <div className="text-sm text-gray-700">Vendor response will be slow, especially off-hours. Don&apos;t wait. Assume it might still be our issue and investigate accordingly</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Implementation:</div>
                    <ul className="text-sm text-gray-700 space-y-1 ml-5">
                      <li>• Open vendor ticket with all details</li>
                      <li>• Continue investigating our code/config</li>
                      <li>• Check vendor status pages</li>
                      <li>• Consider workarounds or fallbacks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Prompt Engineering Section */}
      {activeSection === 'prompts' && (
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Prompt Engineering Guide</h3>
            <p className="text-sm text-gray-600 mb-6">How to use this dataset for AI assistant development</p>

            {/* Use Case */}
            <div className="bg-gradient-to-r from-[#b974f4]/10 to-[#ff6b4a]/10 p-5 rounded-lg mb-6">
              <div className="text-sm text-gray-600 mb-2">Recommended Use Case</div>
              <div className="text-gray-900 font-medium">AI assistant for incident triage</div>
            </div>

            {/* System Prompt Template */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-gray-900">System Prompt Template</h4>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans leading-relaxed">
You are an expert IT incident coordinator with 12 years of experience. Your role is to help engineers make rapid, sound decisions during critical system outages.

Always consider:
• Business impact
• Technical complexity
• Client relationships
• Team coordination

Base your guidance on proven escalation frameworks and crisis communication best practices.
                </pre>
              </div>
            </div>

            {/* Key Context */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-gray-900">Key Context to Include</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Client tier information',
                  'System criticality mapping',
                  'Recent deployment history',
                  'Available team resources',
                  'Time since incident start',
                ].map((item) => (
                  <div key={item} className="bg-gray-50 p-3 rounded-lg flex items-center gap-2">
                    <span className="text-[#b974f4]">→</span>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Example Queries */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-gray-900">Example Queries</h4>
              <div className="space-y-3">
                {[
                  "Client X's production system is down. Error: 'Database connection timeout'. Deployed new feature 6 hours ago. 500 users affected. Should I escalate?",
                  "We've been investigating for 90 minutes with no progress. Issue seems to be in third-party payment gateway. What should we do?",
                  "Client CEO is demanding immediate fix. We have a risky fix available but untested. System is in partial outage (30% users affected). What do you recommend?",
                ].map((query, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#b974f4]">
                    <div className="text-xs text-[#b974f4] font-semibold mb-2">EXAMPLE QUERY {idx + 1}</div>
                    <div className="text-sm text-gray-700 italic">&quot;{query}&quot;</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Integration Recommendations */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-900">Integration Recommendations</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'Monitoring Data', desc: 'Combine with real-time monitoring data' },
                  { title: 'Incident Management', desc: 'Connect to incident systems (Jira, PagerDuty)' },
                  { title: 'Client CRM', desc: 'Integrate with client CRM for tier information' },
                  { title: 'Deployment Tracking', desc: 'Link to deployment tracking systems' },
                  { title: 'Team Availability', desc: 'Connect to team availability/on-call schedules' },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-gray-900 font-semibold mb-1 text-sm">{item.title}</div>
                    <div className="text-gray-600 text-xs">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quality Metadata */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Quality Metadata</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-[#b974f4]/10 to-[#ff6b4a]/10 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Expert Confidence</div>
                <div className="text-2xl font-bold text-gray-900">High</div>
              </div>
              <div className="bg-gradient-to-r from-[#b974f4]/10 to-[#ff6b4a]/10 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Years of Experience</div>
                <div className="text-2xl font-bold text-gray-900">12 years</div>
              </div>
              <div className="bg-gradient-to-r from-[#b974f4]/10 to-[#ff6b4a]/10 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Incidents Managed</div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
              </div>
              <div className="bg-gradient-to-r from-[#b974f4]/10 to-[#ff6b4a]/10 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Client Types Covered</div>
                <div className="text-sm text-gray-900 font-medium mt-2">Enterprise SaaS, IT Services, Technical Infrastructure</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
