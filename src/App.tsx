import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full top-0 z-50 bg-transparent backdrop-blur-md border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img src="/assets/13.svg" alt="Tacivo" className="h-10" />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-m text-gray-900 hover:text-tacivo-purple-dark transition-colors">How it Works</a>
              <a href="#benefits" className="text-m text-gray-900 hover:text-tacivo-orange-dark transition-colors">Benefits</a>
              <a href="#platform" className="text-m text-gray-900 hover:text-tacivo-purple-dark transition-colors">Platform</a>
              <a href="#pilot" className="text-m text-gray-900 hover:text-tacivo-orange-dark transition-colors">Pilot Program</a>
              <a href="mailto:hello@tacivo.com?subject=Tacivo Pilot Application" className="px-4 py-2 bg-tacivo-purple text-white text-sm rounded-full hover:bg-tacivo-purple-dark transition-colors">Apply for Pilot</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden">
        {/* Hero background image */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: "url('/hero-bg.avif')" }}
        ></div>

        {/* Subtle gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-tacivo-purple-dark via-white to-orange-50 pointer-events-none"
          style={{ opacity: 0.30 }}  // Sets overall overlay to 60% opacity
        ></div>


        {/* Content */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-6xl md:text-7xl lg:text-[72px] font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Transform Expert Knowledge Into Institutional Intelligence
            </motion.h1>
            <motion.p
              className="text-2xl md:text-2xl text-slate-900 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Capture critical expertise before it walks out the door. Build defensible competitive advantage through tacivo AI-powered knowledge platform.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <motion.a
                href="#pilot"
                className="inline-flex items-center gap-2 px-8 py-4 bg-tacivo-purple text-white text-base text-m rounded-full shadow-lg shadow-tacivo-purple/20 hover:shadow-xl hover:shadow-tacivo-purple/30 transition-all"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Preserving Knowledge
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </div>

      </section>


      <section className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                Your Most <span className="text-tacivo-purple">Defensible Asset</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                While competitors adopt the same AI tools, your institutional knowledge remains irreplaceable. The decisions, insights, and expertise built over years can't be copied.
              </p>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-tacivo-purple/5 to-tacivo-orange/5 rounded-3xl p-12 border border-tacivo-purple/10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="text-7xl font-bold text-tacivo-purple mb-4">80%</div>
              <p className="text-xl text-slate-700">
                of critical expertise is undocumented tacit knowledge

              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            className="text-5xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            What's at <span className="text-tacivo-orange">Stake</span>
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600 mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            When senior leaders leave, critical decision frameworks and hard-won insights vanish. The cost isn't just time—it's competitive advantage.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-2xl p-8 border border-slate-200/60 hover:border-tacivo-purple/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="text-4xl font-bold text-tacivo-orange mb-3">$47M</div>
              <p className="text-slate-700 text-lg">Lost annually from inefficient knowledge sharing</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-2xl p-8 border border-slate-200/60 hover:border-tacivo-purple/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="text-4xl font-bold text-tacivo-orange mb-3">56%</div>
              <p className="text-slate-700 text-lg">Of retiring workers are in key leadership positions</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-2xl p-8 border border-slate-200/60 hover:border-tacivo-purple/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="text-4xl font-bold text-tacivo-orange mb-3">42%</div>
              <p className="text-slate-700 text-lg">Of role skills known only by current person</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="platform" className="py-32 px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl md:text-6xl font-semibold tracking-tight mb-6 pb-2
              bg-[linear-gradient(to_right,#b974f4,#5d3d89,#8f3528,#ff6b4a,#8f3528,#5d3d89,#b974f4)] 
              bg-[length:200%_100%] 
              bg-clip-text text-transparent 
              animate-shimmer">
              Introducing tacivo Platform
            </h2>



            <p className="text-xl text-slate-600">
              AI-powered knowledge elicitation, in a living knowledge base
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white rounded-3xl p-10 border border-slate-200/60 hover:border-tacivo-purple/30 transition-all"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="mb-6">
                <img src="/assets/2t.svg" alt="tacivo AI" className="h-12" />
              </div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                AI-guided conversations that extract capture tacit knowledge in 30-minute sessions, generating valuable documentation.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-tacivo-purple mt-1 flex-shrink-0" />
                  <span>Captures 10+ years of expertise in under an hour</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-tacivo-purple mt-1 flex-shrink-0" />
                  <span>Adapts questions based on role and industry context</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-tacivo-purple mt-1 flex-shrink-0" />
                  <span>Generates ready-to-use documentation automatically</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-tacivo-purple mt-1 flex-shrink-0" />
                  <span>Guided by proven knowledge elicitation frameworks</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-white rounded-3xl p-10 border border-slate-200/60 hover:border-tacivo-orange/30 transition-all"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="mb-6">
                <img src="/assets/3t.svg" alt="tacivo KB" className="h-12" />
              </div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                A living knowledge system that scales with your organization. Searchable, actionable, and enterprise-ready.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-tacivo-orange mt-1 flex-shrink-0" />
                  <span>Find critical insights in seconds, not days</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-tacivo-orange mt-1 flex-shrink-0" />
                  <span>API-ready for custom AI agents and automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-tacivo-orange mt-1 flex-shrink-0" />
                  <span>Enterprise-grade security with audit trails</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-tacivo-orange mt-1 flex-shrink-0" />
                  <span>Granular access controls by team and role</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600">
              Four steps to preserve your institutional intelligence
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-sm font-medium text-tacivo-purple mb-3">Step 0</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">You Define the Focus</h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Identify which departments, experts, or knowledge areas are critical—whether facing retirement, restructuring, or scaling.
              </p>
            </motion.div>
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-sm font-medium text-tacivo-orange mb-3">Step 1</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">AI-Guided Conversation</h3>
              <p className="text-base text-slate-600 leading-relaxed">
                30-minute conversation with tacivo AI. No forms, no surveys—just natural knowledge sharing.
              </p>
            </motion.div>
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-sm font-medium text-tacivo-purple mb-3">Step 2</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Automated Documentation</h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Conversations become useful playbooks, datasets, and AI-ready intelligence—no manual processing required.
              </p>
            </motion.div>
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-sm font-medium text-tacivo-orange mb-3">Step 3</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Living Knowledge Base</h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Knowledge evolves in tacivo KB. New hires access context. AI systems train on expertise. Decisions draw on collective intelligence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

{/* Beyond Documented Knowledge Section */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-slate-200/60"
          >
            {/* Background image inside the box */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url(/image.avif)' }}
            >
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-900/50 to-black/45"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">
                Beyond Documented Knowledge
              </h2>

              <p className="text-lg md:text-xl font-semibold text-tacivo-orange mb-6 leading-tight">
                Enterprise AI has a blind spot: 80% of expertise is never documented.
              </p>

              <p className="text-base text-gray-200 mb-6 leading-relaxed">
                Tools like Copilot search your existing documents. But they can't access the tacit knowledge in experts' heads—judgment calls, contextual decisions, exception handling.
              </p>

              <p className="text-lg font-semibold text-white mb-4">
                Tacivo fills the gap:
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="text-lg text-tacivo-orange">✓</div>
                  <div>
                    <span className="font-semibold text-white">Expert Intelligence</span>
                    <span className="text-gray-300"> - Playbooks that preserve institutional wisdom</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-lg text-tacivo-orange">✓</div>
                  <div>
                    <span className="font-semibold text-white">AI-Ready Knowledge</span>
                    <span className="text-gray-300"> - Structured data that powers custom agents</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-lg text-tacivo-orange">✓</div>
                  <div>
                    <span className="font-semibold text-white">Compounding Value</span>
                    <span className="text-gray-300"> - Every conversation makes your system smarter</span>
                  </div>
                </div>
              </div>

              <p className="text-base text-gray-200 font-medium border-t border-white/20 pt-4">
                Traditional tools organize what's written. Tacivo captures what never gets documented.
              </p>
            </div>
          </motion.div>
        </div>
      </section>


      <section id="benefits" className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            className="text-5xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Real <span className="text-tacivo-orange">Impact</span>
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600 mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Organizations that systematically capture knowledge gain decisive advantages
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="text-left bg-gradient-to-br from-tacivo-purple/5 to-transparent rounded-2xl p-8 border border-tacivo-purple/10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ArrowRight className="w-6 h-6 text-tacivo-purple mb-4" />
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">70% Faster Onboarding</h3>
              <p className="text-slate-600">Training protocols accelerate new hire productivity</p>
            </motion.div>

            <motion.div
              className="text-left bg-gradient-to-br from-tacivo-orange/5 to-transparent rounded-2xl p-8 border border-tacivo-orange/10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ArrowRight className="w-6 h-6 text-tacivo-orange mb-4" />
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">Decision Continuity</h3>
              <p className="text-slate-600">Documented frameworks ensure consistent execution</p>
            </motion.div>

            <motion.div
              className="text-left bg-gradient-to-br from-tacivo-purple/5 to-transparent rounded-2xl p-8 border border-tacivo-purple/10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ArrowRight className="w-6 h-6 text-tacivo-purple mb-4" />
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">Reduced Risk</h3>
              <p className="text-slate-600">Protection against leadership transitions and attrition</p>
            </motion.div>

            <motion.div
              className="text-left bg-gradient-to-br from-tacivo-orange/5 to-transparent rounded-2xl p-8 border border-tacivo-orange/10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <ArrowRight className="w-6 h-6 text-tacivo-orange mb-4" />
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">AI-Ready Intelligence</h3>
              <p className="text-slate-600">Structured knowledge powers AI agents and automation</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative text-white overflow-hidden">
        {/* Continuous background image for entire section */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: "url('/footer-bg.avif')" }}
        ></div>

        {/* Progressive gradient overlay - lighter at top, darker at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-gray-900/80 to-black/90 pointer-events-none"></div>

        {/* Pilot Section Content */}
        <div id="pilot" className="relative py-32 px-6 lg:px-8 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-5xl md:text-5xl font-semibold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-tacivo-orange">Founding Partner</span> Program
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              5 organizations for Q1 2026
            </motion.p>

            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 mb-8 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid md:grid-cols-2 gap-8 text-left mb-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">What You Get</h3>
                  <ul className="space-y-3 text-gray-200">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-tacivo-orange mt-1 flex-shrink-0" />
                      <span>Knowledge capture from 2 senior experts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-tacivo-orange mt-1 flex-shrink-0" />
                      <span>Custom documentation templates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-tacivo-orange mt-1 flex-shrink-0" />
                      <span>Platform features tailored to your needs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-tacivo-orange mt-1 flex-shrink-0" />
                      <span>Direct input on product roadmap</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-tacivo-orange mt-1 flex-shrink-0" />
                      <span>120-day enterprise access with support</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Timeline</h3>
                  <ul className="space-y-3 text-gray-200">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-tacivo-purple flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs font-bold">1</span>
                      </div>
                      <span>Week 1: Strategy & Processes definition</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-tacivo-purple flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs font-bold">2</span>
                      </div>
                      <span>Week 2-4: Initial knowledge capture & Outputs delivery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-tacivo-purple flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs font-bold">3</span>
                      </div>
                      <span>Ongoing: Monthly knowledge updates & Knowledge Base setup</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center pt-8 border-t border-white/20">
                <p className="text-xl text-gray-200 mb-8">Shape the platform with us as a founding partner</p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
                  whileHover="hover"
                >
                  <motion.a
                    href="mailto:hello@tacivo.com?subject=Tacivo Founding Partner Application"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-tacivo-orange text-white rounded-full shadow-lg shadow-tacivo-orange/30 font-medium"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Apply for Partnership
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="mailto:hello@tacivo.com?subject=Tacivo Sales Inquiry"
                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-full hover:bg-white/10 transition-colors font-medium"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact Sales
                  </motion.a>
                </motion.div>
                <p className="text-sm text-gray-400">Investment: €5,000 for 120-day commitment</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="relative py-20 px-6 lg:px-8 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              <div className="md:col-span-2">
                <img src="/assets/14.svg" alt="Tacivo" className="h-10 mb-5" />
                <p className="text-gray-400 text-base leading-relaxed max-w-md">
                  Transform expert knowledge into institutional intelligence. Preserve critical expertise and build defensible competitive advantage.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-4">Product</h3>
                <ul className="space-y-3">
                  <li><a href="#how-it-works" className="text-gray-400 hover:text-tacivo-purple transition-colors text-sm">How it Works</a></li>
                  <li><a href="#benefits" className="text-gray-400 hover:text-tacivo-purple transition-colors text-sm">Benefits</a></li>
                  <li><a href="#platform" className="text-gray-400 hover:text-tacivo-purple transition-colors text-sm">Platform</a></li>
                  <li><a href="#pilot" className="text-gray-400 hover:text-tacivo-purple transition-colors text-sm">Pilot Program</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-4">Contact</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="mailto:hello@tacivo.com" className="text-gray-400 hover:text-tacivo-orange transition-colors text-sm">
                      hello@tacivo.com
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@tacivo.com?subject=Tacivo Demo Request" className="text-gray-400 hover:text-tacivo-orange transition-colors text-sm">
                      Book a Demo
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@tacivo.com?subject=Tacivo Founding Partner Application" className="text-gray-400 hover:text-tacivo-orange transition-colors text-sm">
                      Apply for Partnership
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
        </div>
      </section>
    </div>
  );
}

export default App;
