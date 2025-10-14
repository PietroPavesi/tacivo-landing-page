import { ArrowRight, Brain, Users, Lock, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

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
              <a href="mailto:hello@tacivo.com?subject=Tacivo Pilot Application" className="px-4 py-2 bg-tacivo-purple text-white text-sm rounded-full hover:bg-tacivo-purple-dark transition-colors">Apply for Pilot</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden">
        {/* Subtle gradient background with your brand colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/40 via-white to-orange-50/30 pointer-events-none"></div>

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
              className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Capture critical expertise before it walks out the door. Build defensible competitive advantage through AI-powered knowledge preservation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <motion.a
                href="#pilot"
                className="inline-flex items-center gap-2 px-8 py-4 bg-tacivo-purple text-white text-base font-medium rounded-full shadow-lg shadow-tacivo-purple/20 hover:shadow-xl hover:shadow-tacivo-purple/30 transition-all"
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
              <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
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
              <div className="text-7xl font-bold text-tacivo-purple mb-4">87%</div>
              <p className="text-xl text-slate-700">
                of companies lose critical expertise every year
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6"
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
              <div className="text-4xl font-bold text-tacivo-orange mb-3">6-12mo</div>
              <p className="text-slate-700 text-lg">Productivity gap after key departures</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-2xl p-8 border border-slate-200/60 hover:border-tacivo-purple/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="text-4xl font-bold text-tacivo-purple mb-3">$2.9M</div>
              <p className="text-slate-700 text-lg">Average cost per lost executive</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-2xl p-8 border border-slate-200/60 hover:border-tacivo-purple/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="text-4xl font-bold text-tacivo-orange mb-3">Forever</div>
              <p className="text-slate-700 text-lg">Strategic context that never gets documented</p>
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
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600">
              Three steps to preserve your institutional intelligence
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-10">
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-gradient-to-br from-tacivo-purple/10 to-tacivo-purple/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8 text-tacivo-purple" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">AI-Guided Capture</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                30-minute conversations that extract expert decision frameworks and strategic insights.
              </p>
            </motion.div>
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-tacivo-orange/10 to-tacivo-orange/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-tacivo-orange" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Auto Documentation</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Transform conversations into playbooks, frameworks, and protocols your team will use.
              </p>
            </motion.div>
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-gradient-to-br from-tacivo-purple/10 to-tacivo-orange/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lock className="w-8 h-8 text-tacivo-purple-dark" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Living Knowledge Base</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Continuously evolving intelligence that grows with your organization.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="outputs" className="py-32 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6">
              Documentation That <span className="text-tacivo-purple">Actually Gets Used</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Transform expert conversations into clear, actionable playbooks
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-2xl p-8 border border-slate-200/60 hover:border-tacivo-purple/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="text-sm font-medium text-tacivo-purple mb-3">Strategic</div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Decision Frameworks</h3>
              <p className="text-slate-600 mb-6">
                M&A playbooks, investment criteria, and strategic trade-offs your leadership uses daily.
              </p>
              <div className="text-sm text-slate-500">
                Example: VP Corporate Development → Due Diligence Playbook
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 border border-slate-200/60 hover:border-tacivo-orange/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="text-sm font-medium text-tacivo-orange mb-3">Operational</div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Crisis Protocols</h3>
              <p className="text-slate-600 mb-6">
                Incident response workflows, escalation paths, and communication templates that save hours.
              </p>
              <div className="text-sm text-slate-500">
                Example: Head of Operations → Crisis Response Playbook
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 border border-slate-200/60 hover:border-tacivo-purple/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="text-sm font-medium text-tacivo-purple mb-3">Commercial</div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Sales Playbooks</h3>
              <p className="text-slate-600 mb-6">
                Negotiation tactics, pricing strategies, and deal qualification criteria that close deals.
              </p>
              <div className="text-sm text-slate-500">
                Example: CRO → Enterprise Negotiation Guide
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scrollable Documentation Types Section */}
      <section className="py-20 px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">More Documentation Types</h3>
            <p className="text-lg text-slate-600">Capture knowledge across every function</p>
          </motion.div>

          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
              <motion.div
                className="flex-shrink-0 w-80 bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200/60 snap-start"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-sm font-medium text-tacivo-purple mb-2">Leadership</div>
                <h4 className="text-xl font-semibold text-slate-900 mb-2">Board Meeting Prep</h4>
                <p className="text-slate-600 text-sm">Key metrics, talking points, and anticipated questions from board members</p>
              </motion.div>

              <motion.div
                className="flex-shrink-0 w-80 bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200/60 snap-start"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
              >
                <div className="text-sm font-medium text-tacivo-orange mb-2">Product</div>
                <h4 className="text-xl font-semibold text-slate-900 mb-2">Feature Prioritization</h4>
                <p className="text-slate-600 text-sm">Framework for deciding what to build next based on impact and effort</p>
              </motion.div>

              <motion.div
                className="flex-shrink-0 w-80 bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200/60 snap-start"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="text-sm font-medium text-tacivo-purple mb-2">Customer Success</div>
                <h4 className="text-xl font-semibold text-slate-900 mb-2">Renewal Playbook</h4>
                <p className="text-slate-600 text-sm">Early warning signals and intervention strategies for at-risk accounts</p>
              </motion.div>

              <motion.div
                className="flex-shrink-0 w-80 bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200/60 snap-start"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <div className="text-sm font-medium text-tacivo-orange mb-2">Engineering</div>
                <h4 className="text-xl font-semibold text-slate-900 mb-2">Architecture Decisions</h4>
                <p className="text-slate-600 text-sm">Technical trade-offs and rationale behind major system design choices</p>
              </motion.div>

              <motion.div
                className="flex-shrink-0 w-80 bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200/60 snap-start"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="text-sm font-medium text-tacivo-purple mb-2">Marketing</div>
                <h4 className="text-xl font-semibold text-slate-900 mb-2">Campaign Playbooks</h4>
                <p className="text-slate-600 text-sm">What messaging works, which channels perform, and budget allocation strategies</p>
              </motion.div>

              <motion.div
                className="flex-shrink-0 w-80 bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200/60 snap-start"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 }}
              >
                <div className="text-sm font-medium text-tacivo-orange mb-2">Finance</div>
                <h4 className="text-xl font-semibold text-slate-900 mb-2">Forecasting Models</h4>
                <p className="text-slate-600 text-sm">Revenue projection methodologies and key assumptions that drive planning</p>
              </motion.div>

              <motion.div
                className="flex-shrink-0 w-80 bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200/60 snap-start"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="text-sm font-medium text-tacivo-purple mb-2">Legal</div>
                <h4 className="text-xl font-semibold text-slate-900 mb-2">Contract Negotiation</h4>
                <p className="text-slate-600 text-sm">Deal terms that are negotiable, red lines, and vendor relationship management</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Measurable <span className="text-tacivo-orange">Impact</span>
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
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">60% Faster Onboarding</h3>
              <p className="text-slate-600">Comprehensive training protocols accelerate new hire productivity</p>
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
              <p className="text-slate-600">Strategic frameworks ensure consistent execution through transitions</p>
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
              <p className="text-slate-600">Succession planning that protects against leadership departures</p>
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
              <p className="text-slate-600">Structured knowledge base powers intelligent automation</p>
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
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-4">
              The Platform
            </h2>
            <p className="text-xl text-slate-600">
              Two powerful tools working together
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
                <img src="/src/assets/2t.svg" alt="tacivo AI" className="h-12" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">tacivo AI</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                AI-guided conversations that extract expert decision frameworks and strategic insights in 30-minute sessions.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-tacivo-purple mt-1 flex-shrink-0" />
                  <span>Adaptive questioning by role and context</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-tacivo-purple mt-1 flex-shrink-0" />
                  <span>Real-time knowledge synthesis</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-tacivo-purple mt-1 flex-shrink-0" />
                  <span>Continuous organizational learning</span>
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
                <img src="/src/assets/3t.svg" alt="tacivo KB" className="h-12" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">tacivo KB</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Living knowledge base that organizes insights into searchable, actionable documentation that evolves with your organization.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-tacivo-orange mt-1 flex-shrink-0" />
                  <span>Intelligent categorization and search</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-tacivo-orange mt-1 flex-shrink-0" />
                  <span>Role-based access controls</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-tacivo-orange mt-1 flex-shrink-0" />
                  <span>API for AI agents and tools</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="pilot" className="relative py-32 px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-5xl md:text-6xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Join Our <span className="text-tacivo-orange">Pilot Program</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Limited to 3 enterprise organizations for November 2025
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
                    <span>90-day enterprise access with support</span>
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
                    <span>Week 1: Setup + first expert session</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-tacivo-purple flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">2</span>
                    </div>
                    <span>Week 2: Documentation delivery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-tacivo-purple flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">→</span>
                    </div>
                    <span>Ongoing: Quarterly knowledge updates</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center pt-8 border-t border-white/20">
              <p className="text-xl text-gray-200 mb-8">Shape the platform with us as a founding pilot partner</p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                whileHover="hover"
              >
                <motion.a
                  href="mailto:hello@tacivo.com?subject=Tacivo Pilot Program Application"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-tacivo-orange text-white rounded-full shadow-lg shadow-tacivo-orange/30 font-medium"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Apply for Pilot Program
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
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-20 px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <img src="/src/assets/1t.svg" alt="Tacivo" className="h-12 mb-6" />
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
                  <a href="mailto:hello@tacivo.com?subject=Tacivo Pilot Program Application" className="text-gray-400 hover:text-tacivo-orange transition-colors text-sm">
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
