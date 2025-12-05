'use client';

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";

const rotatingWords = ["Codify", "Preserve", "Leverage"];

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-dark relative min-h-screen pt-20 overflow-hidden">
      {/* Background pattern - dot grid like mues.ai */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-2/3 h-full opacity-40">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 25%) 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }}
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          {/* Left - Content */}
          <div className="max-w-xl">
            {/* Main headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6 sm:mb-8 animate-fade-in">
              <span className="inline-block overflow-hidden h-[1.2em] align-bottom">
                <span
                  className={`inline-block font-serif italic text-white transition-all duration-300 ${
                    isAnimating ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'
                  }`}
                >
                  {rotatingWords[currentWordIndex]}
                </span>
              </span>
              <br />
              <span className="font-medium text-white">your expert tacit knowledge</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[hsl(0,0%,60%)] mb-8 sm:mb-10 leading-relaxed animate-fade-in-delay-1">
              Your experts hold irreplaceable knowledge. Tacivo AI
captures and transforms it into collective enterprise intelligence, accessible to
teams, new hires, and AI systems instantly, for ever.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 animate-fade-in-delay-2">
              <Button
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto border border-slate-light text-ivory-light hover:text-ivory-light hover:bg-ivory-light/10 hover:border-book-cloth bg-transparent group transition-transform duration-300 hover:scale-105"
                asChild
              >
                <a href="mailto:hello@tacivo.com?subject=Demo Request&body=Hi Tacivo team,%0D%0A%0D%0AI'd like to schedule a demo to learn more about how Tacivo can help capture and preserve our organization's tacit knowledge.%0D%0A%0D%0AThank you!">
                  Book a demo
                  </a>
              </Button>
              <Button
                size="lg"
                className="w-full sm:w-auto !bg-book-cloth text-white hover:!bg-book-cloth/90 group transition-transform duration-300 hover:scale-105"
                asChild
              >
                <Link href="/partners">
                  Become Founding Partner
                  </Link>
              </Button>
            </div>

            {/* Trust logos */}
            <div className="mt-12 sm:mt-16 lg:mt-20 pt-6 sm:pt-8 border-t border-[hsl(0,0%,15%)] animate-fade-in-delay-2">
              <p className="text-xs text-[hsl(0,0%,40%)] mb-4 sm:mb-6 uppercase tracking-widest">
                Built on proven knowledge frameworks
              </p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[hsl(0,0%,35%)]">
                <span className="text-xs sm:text-sm">SECI Model</span>
                <span className="text-xs sm:text-sm">Cognitive Task Analysis</span>
                <span className="text-xs sm:text-sm">Expert Elicitation</span>
              </div>
            </div>
          </div>

          {/* Right - Document Cards */}
          <div className="relative lg:pl-8 animate-fade-in-delay-1 items-center justify-center hidden lg:flex">
            <div className="relative w-full max-w-md h-[450px]">
              {/* Card 3 - Top Right (Sales Best Practice) */}
              <div className="absolute top-0 left-0 right-0 h-[160px] rounded-2xl bg-gradient-to-br from-[hsl(0,0%,14%)] to-[hsl(0,0%,10%)] border border-[hsl(0,0%,25%)] p-5 shadow-2xl transform rotate-[6deg] translate-x-8 translate-y-[-30px] opacity-90 transition-all duration-500 hover:rotate-[8deg] hover:translate-y-[-60px] hover:opacity-100 z-10">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-kraft/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-kraft text-base">💼</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-0.5">Enterprise Sales Negotiation</h3>
                    <p className="text-[hsl(0,0%,55%)] text-xs">From David Martinez, VP Sales</p>
                  </div>
                </div>
                <p className="text-[hsl(0,0%,65%)] text-xs leading-relaxed mb-2">
                  For enterprise deals over $500K, involve legal early. Focus on business value, not features...
                </p>
                <div className="flex gap-2">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-kraft/20 text-kraft border border-kraft/30">Best Practice</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[hsl(0,0%,15%)] text-[hsl(0,0%,60%)]">Sales</span>
                </div>
              </div>

              {/* Card 2 - Top Left (Engineering Best Practice) */}
              <div className="absolute top-0 left-0 right-0 h-[160px] rounded-2xl bg-gradient-to-br from-[hsl(0,0%,14%)] to-[hsl(0,0%,10%)] border border-[hsl(0,0%,25%)] p-5 shadow-2xl transform rotate-[-6deg] translate-x-[-32px] translate-y-[50px] opacity-90 transition-all duration-500 hover:rotate-[-8deg] hover:translate-y-[16px] hover:opacity-100 z-10">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-book-cloth/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-book-cloth text-base">⚙️</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-0.5">Code Review Best Practices</h3>
                    <p className="text-[hsl(0,0%,55%)] text-xs">From Marcus Johnson, Tech Lead</p>
                  </div>
                </div>
                <p className="text-[hsl(0,0%,65%)] text-xs leading-relaxed mb-2">
                  Review for intent first, syntax second. Ask questions rather than making demands...
                </p>
                <div className="flex gap-2">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-book-cloth/20 text-book-cloth border border-book-cloth/30">Best Practice</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[hsl(0,0%,15%)] text-[hsl(0,0%,60%)]">Engineering</span>
                </div>
              </div>

              {/* Card 1 - Front (moved down) */}
              <div className="absolute top-0 left-0 right-0 h-[180px] rounded-2xl bg-gradient-to-br from-[hsl(0,0%,16%)] to-[hsl(0,0%,12%)] border border-book-cloth/30 p-5 shadow-2xl transform rotate-0 translate-y-[140px] transition-all duration-500 hover:scale-105 hover:shadow-book-cloth/20 z-20">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-book-cloth/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-book-cloth text-base">🔧</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-0.5">Production Debugging Methodology</h3>
                    <p className="text-[hsl(0,0%,50%)] text-xs">From Sarah Chen, Principal Engineer</p>
                  </div>
                </div>
                <p className="text-[hsl(0,0%,65%)] text-xs leading-relaxed mb-2">
                  When troubleshooting production issues, I always check the deployment logs first,
                  then correlate with recent changes. Look for patterns...
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-book-cloth/20 text-book-cloth border border-book-cloth/30">Verified</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[hsl(0,0%,15%)] text-[hsl(0,0%,60%)]">Troubleshooting</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[hsl(0,0%,15%)] text-[hsl(0,0%,60%)]">Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
