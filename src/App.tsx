import { ArrowRight, Brain, Users, Lock, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full top-0 z-50 bg-transparent backdrop-blur-md border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img src="/src/assets/1t.svg" alt="Tacivo" className="h-10" />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">How it Works</a>
              <a href="#benefits" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Benefits</a>
              <a href="#platform" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Platform</a>
              <a href="#pilot" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Pilot Program</a>
              <a href="mailto:hello@tacivo.com?subject=Tacivo Pilot Application" className="px-4 py-2 bg-gray-900 text-white text-sm rounded-full hover:bg-gray-800 transition-colors">Apply for Pilot</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-gray-900 mb-6">
              Transform Expert Knowledge<br />
              Into <span className="font-medium">Institutional Intelligence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 font-light leading-relaxed">
              Preserve critical expertise, accelerate decision-making, and build defensible competitive advantage through AI-powered knowledge capture
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#pilot" className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
                See Pilot Program Details
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="mailto:hello@tacivo.com?subject=Tacivo Demo Request" className="inline-flex items-center gap-2 px-8 py-4 border border-gray-200 text-gray-900 rounded-full hover:border-gray-300 transition-colors">
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-6">
                Institutional Knowledge:<br />
                <span className="font-medium">Your Most Defensible Asset</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                While competitors adopt the same AI tools, your proprietary knowledge remains your sustainable differentiator. The nuanced decisions, hard-won customer insights, and contextual expertise that took years to develop cannot be replicated.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Organizations that systematically capture and operationalize their institutional knowledge today will maintain decisive advantages as AI commoditizes generic capabilities. The window to establish this moat is limited.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-12 shadow-sm">
              <div className="text-6xl font-light text-gray-900 mb-4">87%</div>
              <p className="text-xl text-gray-600">
                of companies lose critical expertise every year
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-6">
              The High Cost of<br />
              <span className="font-medium">Knowledge Loss</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Business Impact</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">—</span>
                  <span>6-12 month productivity gaps during leadership transitions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">—</span>
                  <span>Recurring operational inefficiencies from lost process knowledge</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">—</span>
                  <span>Failed AI implementations lacking organizational context</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">—</span>
                  <span>Erosion of competitive differentiation through attrition</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Critical Assets at Risk</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">—</span>
                  <span>Strategic rationale behind key decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">—</span>
                  <span>Complex scenario handling and edge case protocols</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">—</span>
                  <span>Deep customer intelligence and relationship dynamics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">—</span>
                  <span>Proven operational efficiencies and workarounds</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-6">
              How <span className="font-medium">tacivo</span> Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade knowledge capture that scales across your organization
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Intelligent Knowledge Extraction</h3>
              <p className="text-gray-600 leading-relaxed">
                Structured AI-guided sessions systematically capture expert decision frameworks, strategic insights, and operational knowledge in 30-minute conversations.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Automated Documentation Generation</h3>
              <p className="text-gray-600 leading-relaxed">
                Transform conversations into actionable assets: decision frameworks, process documentation, and training protocols that integrate seamlessly with your existing workflows.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Living Knowledge Infrastructure</h3>
              <p className="text-gray-600 leading-relaxed">
                Continuously evolving knowledge base that captures insights from major decisions and projects, building institutional intelligence that appreciates over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="outputs" className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-6">
              Documentation <span className="font-medium">That Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform expert conversations into production-ready assets your team will actually use
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 p-6 border-b border-blue-200">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">M&A Due Diligence Playbook</h3>
                    <p className="text-sm text-blue-700">Strategic Decision Framework</p>
                  </div>
                  <div className="px-2 py-1 bg-blue-200 rounded text-xs font-medium text-blue-800">Critical</div>
                </div>
                <p className="text-xs text-gray-600">Captured from: VP Corporate Development • 15 years experience</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className="text-xs font-bold text-white">1</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Strategic Fit Assessment</p>
                      <p className="text-xs text-gray-600 leading-relaxed">Does this acquisition defend or expand our moat? Look beyond revenue synergies.</p>
                    </div>
                  </div>
                  <div className="ml-10 space-y-1.5 border-l-2 border-blue-200 pl-4 py-1">
                    <div className="flex items-start gap-2">
                      <span className="text-blue-600 text-xs mt-0.5">→</span>
                      <p className="text-xs text-gray-700">Market position: Does it close competitive gaps?</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-600 text-xs mt-0.5">→</span>
                      <p className="text-xs text-gray-700">Talent acquisition: Are key people likely to stay?</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-600 text-xs mt-0.5">→</span>
                      <p className="text-xs text-gray-700">Tech stack: Integration complexity vs. value</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className="text-xs font-bold text-white">2</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Cultural Due Diligence</p>
                      <p className="text-xs text-gray-600 leading-relaxed">Most deals fail here. Assess leadership alignment in first 3 meetings.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className="text-xs font-bold text-white">3</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Red Flag Checklist</p>
                      <p className="text-xs text-gray-600 leading-relaxed">Walk away signals that override financial attractiveness</p>
                    </div>
                  </div>
                  <div className="ml-10 bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-xs font-medium text-red-900 mb-1">⛔ Deal Breakers:</p>
                    <p className="text-xs text-red-800">Founder unwilling to stay 12mo+ • Customer concentration &gt;40% • Undisclosed litigation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-br from-emerald-50 via-green-100 to-teal-100 p-6 border-b border-green-200">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Crisis Response Protocol</h3>
                    <p className="text-sm text-green-700">Operational Playbook</p>
                  </div>
                  <div className="px-2 py-1 bg-green-200 rounded text-xs font-medium text-green-800">Live Doc</div>
                </div>
                <p className="text-xs text-gray-600">Captured from: Head of Operations • 8 incidents handled</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-r-lg p-4">
                  <h4 className="text-sm font-bold text-red-900 mb-2 flex items-center gap-2">
                    <span className="text-lg">🚨</span>
                    First 15 Minutes (Critical Window)
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-0.5">1.</span>
                      <span><strong>Activate war room:</strong> Slack #incident-response + Zoom bridge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-0.5">2.</span>
                      <span><strong>Assign incident commander:</strong> Most senior eng available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-0.5">3.</span>
                      <span><strong>Status page update:</strong> "Investigating" within 5 min</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-900">Stakeholder Communication Triggers</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-yellow-50 rounded-lg p-2 border border-yellow-200">
                      <p className="text-xs font-medium text-yellow-900 mb-1">Major (30 min)</p>
                      <p className="text-xs text-yellow-800">CEO, COO, affected customers</p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-2 border border-orange-200">
                      <p className="text-xs font-medium text-orange-900 mb-1">Critical (10 min)</p>
                      <p className="text-xs text-orange-800">+ Board chair, PR team, legal</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-xs font-semibold text-blue-900 mb-2">💡 Learned the Hard Way:</p>
                  <p className="text-xs text-blue-800 leading-relaxed">"Over-communicate internally. Assume everyone needs more context. Silent teams make wrong assumptions during incidents."</p>
                </div>

                <div className="pt-2 border-t border-gray-200">
                  <p className="text-xs text-gray-500">Updated: 2 weeks ago • Used in: 3 incidents this quarter</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-br from-purple-50 via-violet-100 to-fuchsia-100 p-6 border-b border-purple-200">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Enterprise Sales Negotiation</h3>
                    <p className="text-sm text-purple-700">Strategic Knowledge Base</p>
                  </div>
                  <div className="px-2 py-1 bg-purple-200 rounded text-xs font-medium text-purple-800">Proven</div>
                </div>
                <p className="text-xs text-gray-600">Captured from: CRO • $40M+ in closed deals</p>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span>🎯</span>
                    Pricing Anchoring Strategy
                  </h4>
                  <div className="bg-purple-50 rounded-lg p-3 space-y-2">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-medium text-gray-700">Initial Offer:</span>
                      <span className="text-xs font-bold text-purple-900">List price (no discount)</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-medium text-gray-700">First Concession:</span>
                      <span className="text-xs font-bold text-purple-900">10% for 3-year commit</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-medium text-gray-700">Final (if needed):</span>
                      <span className="text-xs font-bold text-purple-900">15% max + case study</span>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-amber-400 bg-amber-50 rounded-r-lg p-3">
                  <h4 className="text-sm font-semibold text-amber-900 mb-2">⚠️ When to Walk Away</h4>
                  <ul className="space-y-1 text-xs text-amber-800">
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5">•</span>
                      <span>Requesting &gt;20% discount without multi-year commit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5">•</span>
                      <span>No executive sponsor identified after 3 meetings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5">•</span>
                      <span>Asking for custom features pre-close (scope creep)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Negotiation Leverage Tactics</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-purple-600 text-sm mt-0.5">→</span>
                      <p className="text-xs text-gray-700"><strong>Scarcity:</strong> "Implementation slots filling for Q1"</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-600 text-sm mt-0.5">→</span>
                      <p className="text-xs text-gray-700"><strong>Social proof:</strong> Name-drop similar company in their vertical</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-600 text-sm mt-0.5">→</span>
                      <p className="text-xs text-gray-700"><strong>Value framing:</strong> Cost per user per day (pennies)</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-200 flex items-center justify-between">
                  <p className="text-xs text-gray-500">Win rate: 67% when followed</p>
                  <p className="text-xs font-medium text-purple-600">$8.2M attributed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-6">
                Measurable Business Outcomes
              </h2>
              <ul className="space-y-4 text-lg text-gray-600">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                  <span><strong>60% faster onboarding</strong> with comprehensive training protocols</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                  <span><strong>Decision continuity</strong> through documented strategic frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                  <span><strong>Reduced operational risk</strong> from succession and attrition</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                  <span><strong>AI-ready knowledge base</strong> for intelligent automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                  <span><strong>Compounding institutional advantage</strong> that grows with your organization</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gray-900 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-gray-400 ml-2">tacivo AI - Knowledge Capture Session</span>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Brain className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-gray-100 rounded-lg p-3">
                        <p className="text-sm text-gray-700">Tell me about your decision-making process when handling complex customer escalations.</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 justify-end">
                    <div className="flex-1 max-w-md">
                      <div className="bg-blue-600 text-white rounded-lg p-3">
                        <p className="text-sm">First, I assess the severity level and business impact. For enterprise clients, I involve account management within 2 hours...</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-gray-600" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gray-900 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-gray-400 ml-2">tacivo Knowledge Base</span>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    <div className="border-l-4 border-blue-600 pl-4 py-2">
                      <h4 className="text-sm font-medium text-gray-900">Customer Escalation Protocol</h4>
                      <p className="text-xs text-gray-600 mt-1">Decision framework • Updated 2 days ago</p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-4 py-2">
                      <h4 className="text-sm font-medium text-gray-900">Enterprise Client Onboarding</h4>
                      <p className="text-xs text-gray-600 mt-1">Process guide • Updated 1 week ago</p>
                    </div>
                    <div className="border-l-4 border-purple-600 pl-4 py-2">
                      <h4 className="text-sm font-medium text-gray-900">Technical Architecture Decisions</h4>
                      <p className="text-xs text-gray-600 mt-1">Strategic rationale • Updated 2 weeks ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-6">
              The <span className="font-medium">tacivo</span> Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Two powerful tools working together to capture, organize, and operationalize your institutional knowledge
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="mb-6">
                <img src="/src/assets/2t.svg" alt="tacivo AI" className="h-12" />
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your intelligent knowledge extraction partner. Conducts structured conversations with your experts, asking the right questions to surface critical insights, decision frameworks, and tacit knowledge that typically remains undocumented.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">—</span>
                  <span>Adaptive questioning based on role and context</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">—</span>
                  <span>Real-time knowledge synthesis and validation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">—</span>
                  <span>Continuous learning from your organization</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="mb-6">
                <img src="/src/assets/3t.svg" alt="tacivo KB" className="h-12" />
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your living knowledge base. Automatically organizes captured insights into searchable, actionable documentation. Decision trees, process guides, and strategic frameworks that evolve with your organization.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">—</span>
                  <span>Intelligent categorization and cross-referencing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">—</span>
                  <span>Role-based access and personalized views</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">—</span>
                  <span>API integration for AI agents and tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="pilot" className="py-20 px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Strategic Pilot Program <span className="font-medium">Now Accepting Applications</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Limited to 3 qualifying enterprise organizations for November 2025
          </p>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
            <div className="grid md:grid-cols-2 gap-8 text-left mb-8">
              <div>
                <h3 className="text-xl font-medium mb-4">Co-Building Partnership</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-500 mt-1">—</span>
                    <span>Knowledge capture from 2 senior experts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-500 mt-1">—</span>
                    <span>Custom-built documentation templates for your workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-500 mt-1">—</span>
                    <span>Platform features tailored to your organization's needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-500 mt-1">—</span>
                    <span>Direct input on product roadmap and priorities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-500 mt-1">—</span>
                    <span>90-day enterprise platform access with dedicated support</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Timeline</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-500 mt-1">—</span>
                    <span>Week 1: Setup + first expert session</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-500 mt-1">—</span>
                    <span>Week 2: Documentation delivery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-500 mt-1">—</span>
                    <span>Ongoing: Quarterly knowledge updates</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center pt-8 border-t border-white/10">
              <p className="text-xl text-gray-300 mb-8">Shape the platform with us as a founding pilot partner</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:hello@tacivo.com?subject=Tacivo Pilot Program Application" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors">
                  Apply for Pilot Program
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="mailto:hello@tacivo.com?subject=Tacivo Sales Inquiry" className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/5 transition-colors">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            Strategic advantage accrues to organizations that systematically preserve institutional knowledge. Act before critical expertise transitions.
          </p>
        </div>
      </section>

      <footer className="py-16 px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <img src="/src/assets/1t.svg" alt="Tacivo" className="h-12 mb-6" />
              <p className="text-gray-400 text-sm leading-relaxed">
                Transform expert knowledge into institutional intelligence. Preserve critical expertise and build defensible competitive advantage.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm">How it Works</a></li>
                <li><a href="#benefits" className="text-gray-400 hover:text-white transition-colors text-sm">Benefits</a></li>
                <li><a href="#platform" className="text-gray-400 hover:text-white transition-colors text-sm">Platform</a></li>
                <li><a href="#pilot" className="text-gray-400 hover:text-white transition-colors text-sm">Pilot Program</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:hello@tacivo.com" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                    <span>hello@tacivo.com</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@tacivo.com?subject=Tacivo Demo Request" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Book a Demo
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@tacivo.com?subject=Tacivo Pilot Program Application" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Apply for Pilot
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                © 2025 Tacivo. Building the Tacit Knowledge Advantage.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</a>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
