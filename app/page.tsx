'use client';

import { ArrowRight, Menu, X } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.30)']
  );
  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ['0px 0px 0px rgba(0, 0, 0, 0)', '0px 4px 20px rgba(0, 0, 0, 0.05)']
  );

  return (
    <div className="min-h-screen bg-white">
      <motion.nav
        className="fixed w-full top-0 z-50 backdrop-blur-md border-b border-gray-100/50"
        style={{
          backgroundColor: headerBg,
          boxShadow: headerShadow
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/assets/loop-logos/loop-logo.svg" alt="Tacivo" className="h-10" />
            </motion.div>

            {/* Desktop Menu */}
            <motion.div
              className="hidden md:flex items-center gap-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.a
                href="#how-it-works"
                className="text-m text-gray-900 hover:text-tacivo-purple-dark transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                How it Works
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-tacivo-purple-dark group-hover:w-full transition-all duration-300"></span>
              </motion.a>
              <motion.a
                href="#benefits"
                className="text-m text-gray-900 hover:text-tacivo-orange-dark transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                Benefits
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-tacivo-orange-dark group-hover:w-full transition-all duration-300"></span>
              </motion.a>
              <motion.a
                href="#platform"
                className="text-m text-gray-900 hover:text-tacivo-purple-dark transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                Platform
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-tacivo-purple-dark group-hover:w-full transition-all duration-300"></span>
              </motion.a>
              <motion.a
                href="#pilot"
                className="text-m text-gray-900 hover:text-tacivo-orange-dark transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                Pilot Program
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-tacivo-orange-dark group-hover:w-full transition-all duration-300"></span>
              </motion.a>
              <motion.a
                href="mailto:hello@tacivo.com?subject=Tacivo Pilot Application"
                className="px-4 py-2 bg-gradient-to-r from-tacivo-purple via-tacivo-orange to-tacivo-purple bg-[length:200%_100%] text-white text-sm rounded-full shadow-lg shadow-tacivo-purple/20 hover:shadow-xl hover:shadow-tacivo-purple/30 transition-all"
                style={{ animation: 'shimmer 5s linear infinite' }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply for Pilot
              </motion.a>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            className="md:hidden overflow-hidden"
            initial={false}
            animate={{ height: mobileMenuOpen ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-4 space-y-4">
              <a
                href="#how-it-works"
                className="block text-gray-900 hover:text-tacivo-purple-dark transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How it Works
              </a>
              <a
                href="#benefits"
                className="block text-gray-900 hover:text-tacivo-orange-dark transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Benefits
              </a>
              <a
                href="#platform"
                className="block text-gray-900 hover:text-tacivo-purple-dark transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Platform
              </a>
              <a
                href="#pilot"
                className="block text-gray-900 hover:text-tacivo-orange-dark transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pilot Program
              </a>
              <a
                href="mailto:hello@tacivo.com?subject=Tacivo Pilot Application"
                className="block w-full text-center px-4 py-2 bg-gradient-to-r from-tacivo-purple via-tacivo-orange to-tacivo-purple bg-[length:200%_100%] text-white text-sm rounded-full shadow-lg shadow-tacivo-purple/20"
                style={{ animation: 'shimmer 5s linear infinite' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Apply for Pilot
              </a>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20">
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
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[72px] font-normal tracking-tight text-slate-800 mb-4 sm:mb-6 leading-[1.15] sm:leading-[1.1] px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Transform Expert Knowledge Into Institutional Intelligence
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-slate-900 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2"
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
                className="relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-tacivo-purple via-tacivo-orange to-tacivo-purple bg-[length:200%_100%] text-white text-sm sm:text-base font-medium rounded-full shadow-lg shadow-tacivo-purple/20 hover:shadow-xl hover:shadow-tacivo-purple/30 transition-all overflow-hidden group"
                style={{
                  animation: 'shimmer 5s linear infinite'
                }}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Start Preserving Knowledge</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
              </motion.a>
            </motion.div>
          </div>
        </div>

      </section>


      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-slate-900 mb-4 sm:mb-6 leading-tight">
                Your Most <span className="text-tacivo-purple">Defensible Asset</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed">
                While competitors adopt the same AI tools, your institutional knowledge remains irreplaceable. The decisions, insights, and expertise built over years can't be copied.
              </p>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-tacivo-purple/5 to-tacivo-orange/5 rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 border border-tacivo-purple/10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal text-tacivo-purple mb-3 sm:mb-4">80%</div>
              <p className="text-lg sm:text-xl text-slate-700">
                of critical expertise is undocumented tacit knowledge

              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-slate-900 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            What's at <span className="text-tacivo-orange">Stake</span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-slate-600 mb-10 sm:mb-14 md:mb-16 max-w-3xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            When senior leaders leave, critical decision frameworks and hard-won insights vanish. The cost isn't just time: it's competitive advantage.
          </motion.p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <motion.div
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-200/60 hover:border-tacivo-purple/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="font-serif text-3xl sm:text-4xl font-normal text-tacivo-orange mb-2 sm:mb-3">$47M</div>
              <p className="text-slate-700 text-sm sm:text-base md:text-lg">Lost annually from inefficient knowledge sharing</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-200/60 hover:border-tacivo-purple/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="font-serif text-3xl sm:text-4xl font-normal text-tacivo-orange mb-2 sm:mb-3">56%</div>
              <p className="text-slate-700 text-sm sm:text-base md:text-lg">Of retiring workers are in key leadership positions</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-200/60 hover:border-tacivo-purple/30 transition-colors sm:col-span-2 md:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="font-serif text-3xl sm:text-4xl font-normal text-tacivo-orange mb-2 sm:mb-3">42%</div>
              <p className="text-slate-700 text-sm sm:text-base md:text-lg">Of role skills known only by current person</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="platform" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight mb-4 sm:mb-6 pb-2
              bg-[linear-gradient(to_right,#b974f4,#5d3d89,#8f3528,#ff6b4a,#8f3528,#5d3d89,#b974f4)]
              bg-[length:200%_100%]
              bg-clip-text text-transparent
              animate-shimmer px-2">
              Introducing the tacivo Platform
            </h2>



            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-2">
              AI-powered knowledge elicitation, in a living knowledge base
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            <motion.div
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/60 hover:border-tacivo-purple/30 transition-all"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="mb-4 sm:mb-6">
                <img src="/assets/loop-logos/loop-logo-AI.svg" alt="tacivo AI" className="h-10 sm:h-12" />
              </div>
              <p className="text-base sm:text-lg text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                AI-guided conversations that capture tacit knowledge in 30-minute sessions, generating valuable documentation.
              </p>
              <ul className="space-y-2 sm:space-y-3 text-slate-700 text-sm sm:text-base">
                <li className="flex items-start gap-2 sm:gap-3">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-tacivo-purple mt-0.5 sm:mt-1 flex-shrink-0" />
                  <span>Captures 10+ years of expertise in under an hour</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-tacivo-purple mt-0.5 sm:mt-1 flex-shrink-0" />
                  <span>Adapts questions based on role and industry context</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-tacivo-purple mt-0.5 sm:mt-1 flex-shrink-0" />
                  <span>Generates ready-to-use documentation automatically</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-tacivo-purple mt-0.5 sm:mt-1 flex-shrink-0" />
                  <span>Guided by proven knowledge elicitation frameworks</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/60 hover:border-tacivo-orange/30 transition-all"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="mb-4 sm:mb-6">
                <img src="/assets/loop-logos/loop-logo-KB.svg" alt="tacivo KB" className="h-10 sm:h-12" />
              </div>
              <p className="text-base sm:text-lg text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                A living knowledge system that scales with your organization. Searchable, actionable, and enterprise-ready.
              </p>
              <ul className="space-y-2 sm:space-y-3 text-slate-700 text-sm sm:text-base">
                <li className="flex items-start gap-2 sm:gap-3">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-tacivo-orange mt-0.5 sm:mt-1 flex-shrink-0" />
                  <span>Find critical insights in seconds, not days</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-tacivo-orange mt-0.5 sm:mt-1 flex-shrink-0" />
                  <span>API-ready for custom AI agents and automation</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-tacivo-orange mt-0.5 sm:mt-1 flex-shrink-0" />
                  <span>Enterprise-grade security with audit trails</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-tacivo-orange mt-0.5 sm:mt-1 flex-shrink-0" />
                  <span>Granular access controls by team and role</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-slate-900 mb-3 sm:mb-4">
              How It Works
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-2">
              Four steps to preserve your institutional intelligence
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <motion.div
              className="relative bg-gradient-to-br from-tacivo-purple/5 to-transparent rounded-2xl p-6 border border-tacivo-purple/20 hover:border-tacivo-purple/40 transition-all group hover:shadow-lg hover:shadow-tacivo-purple/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-tacivo-purple/10 flex items-center justify-center text-2xl font-bold text-tacivo-purple group-hover:scale-110 transition-transform">
                0
              </div>
              <div className="text-sm font-semibold text-tacivo-purple mb-3 uppercase tracking-wide">Step 0</div>
              <h3 className="font-serif text-xl font-normal text-slate-900 mb-3 pr-12">You Define the Focus</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Identify which departments, experts, or knowledge areas are critical; whether facing retirement, restructuring, or scaling.
              </p>
            </motion.div>

            <motion.div
              className="relative bg-gradient-to-br from-tacivo-orange/5 to-transparent rounded-2xl p-6 border border-tacivo-orange/20 hover:border-tacivo-orange/40 transition-all group hover:shadow-lg hover:shadow-tacivo-orange/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-tacivo-orange/10 flex items-center justify-center text-2xl font-bold text-tacivo-orange group-hover:scale-110 transition-transform">
                1
              </div>
              <div className="text-sm font-semibold text-tacivo-orange mb-3 uppercase tracking-wide">Step 1</div>
              <h3 className="font-serif text-xl font-normal text-slate-900 mb-3 pr-12">AI-Guided Conversation</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                30-minute conversation with tacivo AI. No forms, no surveys. Just natural knowledge transfer.
              </p>
            </motion.div>

            <motion.div
              className="relative bg-gradient-to-br from-tacivo-purple/5 to-transparent rounded-2xl p-6 border border-tacivo-purple/20 hover:border-tacivo-purple/40 transition-all group hover:shadow-lg hover:shadow-tacivo-purple/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-tacivo-purple/10 flex items-center justify-center text-2xl font-bold text-tacivo-purple group-hover:scale-110 transition-transform">
                2
              </div>
              <div className="text-sm font-semibold text-tacivo-purple mb-3 uppercase tracking-wide">Step 2</div>
              <h3 className="font-serif text-xl font-normal text-slate-900 mb-3 pr-12">Automated Documentation</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Conversations become playbooks, datasets, and AI-ready intelligence. No manual processing required.
              </p>
            </motion.div>

            <motion.div
              className="relative bg-gradient-to-br from-tacivo-orange/5 to-transparent rounded-2xl p-6 border border-tacivo-orange/20 hover:border-tacivo-orange/40 transition-all group hover:shadow-lg hover:shadow-tacivo-orange/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-tacivo-orange/10 flex items-center justify-center text-2xl font-bold text-tacivo-orange group-hover:scale-110 transition-transform">
                3
              </div>
              <div className="text-sm font-semibold text-tacivo-orange mb-3 uppercase tracking-wide">Step 3</div>
              <h3 className="font-serif text-xl font-normal text-slate-900 mb-3 pr-12">Living Knowledge Base</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Knowledge evolves in tacivo KB. New hires access context. AI systems train on expertise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

{/* Beyond Documented Knowledge Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200/60"
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
            <div className="relative z-10 p-6 sm:p-8 md:p-10">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-normal tracking-tight text-white mb-3 sm:mb-4">
                Beyond Documented Knowledge
              </h2>

              <p className="text-base sm:text-lg md:text-xl font-semibold text-tacivo-orange mb-4 sm:mb-6 leading-tight">
                Enterprise AI has a blind spot: 80% of expertise is never documented.
              </p>

              <p className="text-sm sm:text-base text-gray-200 mb-4 sm:mb-6 leading-relaxed">
                Tools like Copilot search your existing documents. But they can't access the tacit knowledge in experts' heads: judgment calls, contextual decisions, exception handling. In a world where ChatGPT answers everything publicly knowable, the only sustainable advantage is what your people know that AI doesn't.
              </p>

              <p className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                Tacivo fills the gap: while AI commoditizes public knowledge, Tacivo protects your edge.
              </p>

              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="text-base sm:text-lg text-tacivo-orange flex-shrink-0">✓</div>
                  <div className="text-sm sm:text-base">
                    <span className="font-semibold text-white">Expert Intelligence</span>
                    <span className="text-gray-300"> - Preserve your team's tacit expertise </span>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="text-base sm:text-lg text-tacivo-orange flex-shrink-0">✓</div>
                  <div className="text-sm sm:text-base">
                    <span className="font-semibold text-white">AI-Ready Knowledge</span>
                    <span className="text-gray-300"> - Structured data that powers custom AI agents</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="text-base sm:text-lg text-tacivo-orange flex-shrink-0">✓</div>
                  <div className="text-sm sm:text-base">
                    <span className="font-semibold text-white">Compounding Value</span>
                    <span className="text-gray-300"> - Every conversation makes your system smarter</span>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-200 font-medium border-t border-white/20 pt-3 sm:pt-4">
                Traditional tools organize what's written. Tacivo captures what never gets documented.
              </p>
            </div>
          </motion.div>
        </div>
      </section>


      <section id="benefits" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-slate-900 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Real <span className="text-tacivo-orange">Impact</span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-slate-600 mb-10 sm:mb-14 md:mb-16 max-w-3xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Organizations that systematically capture knowledge gain decisive advantages
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            <motion.div
              className="text-left bg-gradient-to-br from-tacivo-purple/5 to-transparent rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-tacivo-purple/10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-tacivo-purple mb-3 sm:mb-4" />
              <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-normal text-slate-900 mb-1 sm:mb-2">70% Faster Onboarding</h3>
              <p className="text-sm sm:text-base text-slate-600">Training protocols accelerate new hire productivity</p>
            </motion.div>

            <motion.div
              className="text-left bg-gradient-to-br from-tacivo-orange/5 to-transparent rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-tacivo-orange/10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-tacivo-orange mb-3 sm:mb-4" />
              <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-normal text-slate-900 mb-1 sm:mb-2">Decision Continuity</h3>
              <p className="text-sm sm:text-base text-slate-600">Documented frameworks ensure consistent execution</p>
            </motion.div>

            <motion.div
              className="text-left bg-gradient-to-br from-tacivo-purple/5 to-transparent rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-tacivo-purple/10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-tacivo-purple mb-3 sm:mb-4" />
              <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-normal text-slate-900 mb-1 sm:mb-2">Reduced Risk</h3>
              <p className="text-sm sm:text-base text-slate-600">Protection against leadership transitions and attrition</p>
            </motion.div>

            <motion.div
              className="text-left bg-gradient-to-br from-tacivo-orange/5 to-transparent rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-tacivo-orange/10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-tacivo-orange mb-3 sm:mb-4" />
              <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-normal text-slate-900 mb-1 sm:mb-2">AI-Ready Intelligence</h3>
              <p className="text-sm sm:text-base text-slate-600">Structured knowledge powers AI agents and automation</p>
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
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-gray-900/60 to-black/70 pointer-events-none"></div>

        {/* Pilot Section Content */}
        <div id="pilot" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-tacivo-orange">Founding Partner</span> Program
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              5 organizations for Q1 2026
            </motion.p>

            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-6 sm:mb-8 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 text-left mb-6 sm:mb-8">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-normal mb-3 sm:mb-4">What You Get</h3>
                  <ul className="space-y-2 sm:space-y-3 text-gray-200 text-sm sm:text-base">
                    <li className="flex items-start gap-2 sm:gap-3">
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-tacivo-orange mt-0.5 sm:mt-1 flex-shrink-0" />
                      <span>Knowledge capture from 2 senior experts</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-tacivo-orange mt-0.5 sm:mt-1 flex-shrink-0" />
                      <span>Custom documentation templates</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-tacivo-orange mt-0.5 sm:mt-1 flex-shrink-0" />
                      <span>Platform features tailored to your needs</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-tacivo-orange mt-0.5 sm:mt-1 flex-shrink-0" />
                      <span>Direct input on product roadmap</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-tacivo-orange mt-0.5 sm:mt-1 flex-shrink-0" />
                      <span>120-day enterprise access with support</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-normal mb-3 sm:mb-4">Timeline</h3>
                  <ul className="space-y-2 sm:space-y-3 text-gray-200 text-sm sm:text-base">
                    <li className="flex items-start gap-2 sm:gap-3">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-tacivo-purple flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                        <span className="text-[10px] sm:text-xs font-bold">1</span>
                      </div>
                      <span>Week 1: Strategy & Processes definition</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-tacivo-purple flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                        <span className="text-[10px] sm:text-xs font-bold">2</span>
                      </div>
                      <span>Week 2-4: Initial knowledge capture & Outputs delivery</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-tacivo-purple flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                        <span className="text-[10px] sm:text-xs font-bold">3</span>
                      </div>
                      <span>Ongoing: Monthly knowledge updates & Knowledge Base setup</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center pt-6 sm:pt-8 border-t border-white/20">
                <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8">Shape the platform with us as a founding partner</p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-4 sm:mb-6"
                  whileHover="hover"
                >
                  <motion.a
                    href="mailto:hello@tacivo.com?subject=Tacivo Founding Partner Application"
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-tacivo-orange text-white rounded-full shadow-lg shadow-tacivo-orange/30 font-medium text-sm sm:text-base"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Apply for Partnership
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                  <motion.a
                    href="mailto:hello@tacivo.com?subject=Tacivo Sales Inquiry"
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white rounded-full hover:bg-white/10 transition-colors font-medium text-sm sm:text-base"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact Sales
                  </motion.a>
                </motion.div>
                <p className="text-xs sm:text-sm text-gray-400">Investment: €5,000 for 120-day commitment</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
              <div className="sm:col-span-2">
                <img src="/assets/loop-logos/loop-logo-white.svg" alt="Tacivo" className="h-8 sm:h-10 mb-4 sm:mb-5" />
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md">
                  Transform expert knowledge into institutional intelligence. Preserve critical expertise and build defensible competitive advantage.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-sm sm:text-base font-normal text-white mb-3 sm:mb-4">Product</h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li><a href="#how-it-works" className="text-gray-400 hover:text-tacivo-purple transition-colors text-xs sm:text-sm">How it Works</a></li>
                  <li><a href="#benefits" className="text-gray-400 hover:text-tacivo-purple transition-colors text-xs sm:text-sm">Benefits</a></li>
                  <li><a href="#platform" className="text-gray-400 hover:text-tacivo-purple transition-colors text-xs sm:text-sm">Platform</a></li>
                  <li><a href="#pilot" className="text-gray-400 hover:text-tacivo-purple transition-colors text-xs sm:text-sm">Pilot Program</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-sm sm:text-base font-normal text-white mb-3 sm:mb-4">Contact</h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li>
                    <a href="mailto:hello@tacivo.com" className="text-gray-400 hover:text-tacivo-orange transition-colors text-xs sm:text-sm">
                      hello@tacivo.com
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@tacivo.com?subject=Tacivo Demo Request" className="text-gray-400 hover:text-tacivo-orange transition-colors text-xs sm:text-sm">
                      Book a Demo
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@tacivo.com?subject=Tacivo Founding Partner Application" className="text-gray-400 hover:text-tacivo-orange transition-colors text-xs sm:text-sm">
                      Apply for Partnership
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-6 sm:pt-8 border-t border-gray-800">
              <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
                <p className="text-xs sm:text-sm text-gray-500 text-center md:text-left">
                  © 2025 Tacivo. Building the Tacit Knowledge Advantage.
                </p>
                <div className="flex items-center gap-4 sm:gap-6">
                  <a href="#" className="text-xs sm:text-sm text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</a>
                  <a href="#" className="text-xs sm:text-sm text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
