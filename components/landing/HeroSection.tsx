'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Content */}
          <div className="max-w-xl">
            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-8 animate-fade-in">
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
            <p className="text-lg text-[hsl(0,0%,60%)] mb-10 leading-relaxed animate-fade-in-delay-1">
              Your experts hold irreplaceable knowledge. Tacivo AI
captures and transforms it into collective enterprise intelligence, accessible to 
teams, new hires, and AI systems instantly, for ever.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in-delay-2">
              <Button
                variant="ghost"
                size="lg"
                className="border border-slate-light text-ivory-light hover:text-ivory-light hover:bg-ivory-light/10 hover:border-book-cloth bg-transparent group transition-transform duration-300 hover:scale-105"
                asChild
              >
                <a href="mailto:hello@tacivo.com?subject=Demo Request&body=Hi Tacivo team,%0D%0A%0D%0AI'd like to schedule a demo to learn more about how Tacivo can help capture and preserve our organization's tacit knowledge.%0D%0A%0D%0AThank you!">
                  Book a demo
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                className="!bg-book-cloth text-white hover:!bg-book-cloth/90 group transition-transform duration-300 hover:scale-105"
                asChild
              >
                <Link href="/partners">
                  Become Founding Partner
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Trust logos */}
            <div className="mt-20 pt-8 border-t border-[hsl(0,0%,15%)] animate-fade-in-delay-2">
              <p className="text-xs text-[hsl(0,0%,40%)] mb-6 uppercase tracking-widest">
                Built on proven knowledge frameworks
              </p>
              <div className="flex flex-wrap items-center gap-6 text-[hsl(0,0%,35%)]">
                <span className="text-sm">SECI Model</span>
                <span className="text-sm">Cognitive Task Analysis</span>
                <span className="text-sm">Expert Elicitation</span>
              </div>
            </div>
          </div>

          {/* Right - Product Visual */}
          <div className="relative lg:pl-8 animate-fade-in-delay-1">
            <div className="relative rounded-xl bg-[hsl(0,0%,6%)] overflow-hidden gradient-border-pastel-dark transition-transform duration-500 hover:scale-[1.02]">
              {/* Browser header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[hsl(0,0%,15%)] bg-[hsl(0,0%,5%)]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[hsl(0,0%,20%)]" />
                  <div className="w-3 h-3 rounded-full bg-[hsl(0,0%,20%)]" />
                  <div className="w-3 h-3 rounded-full bg-[hsl(0,0%,20%)]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded bg-[hsl(0,0%,10%)] text-xs text-[hsl(0,0%,50%)]">
                    tacivo.app
                  </div>
                </div>
              </div>

              {/* App content mockup */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[hsl(0,0%,15%)] flex items-center justify-center">
                    <span className="text-white font-medium text-sm">AI</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Knowledge Elicitation Session</p>
                    <p className="text-xs text-[hsl(0,0%,50%)]">With Senior Engineer</p>
                  </div>
                </div>

                {/* Chat bubbles */}
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-[hsl(0,0%,20%)] flex-shrink-0" />
                    <div className="bg-[hsl(0,0%,12%)] rounded-lg rounded-tl-none px-4 py-2 max-w-[80%]">
                      <p className="text-sm text-[hsl(0,0%,60%)]">
                        When troubleshooting production issues, what's your first instinct?
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 justify-end">
                    <div className="bg-[hsl(0,0%,18%)] border border-[hsl(0,0%,25%)] rounded-lg rounded-tr-none px-4 py-2 max-w-[80%]">
                      <p className="text-sm text-white">
                        I always check the deployment logs first, then correlate with recent
                        changes...
                      </p>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-[hsl(0,0%,25%)] flex-shrink-0" />
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-[hsl(0,0%,20%)] flex-shrink-0" />
                    <div className="bg-[hsl(0,0%,12%)] rounded-lg rounded-tl-none px-4 py-2 max-w-[80%]">
                      <p className="text-sm text-[hsl(0,0%,60%)]">
                        That's valuable. What patterns have you learned to recognize?
                      </p>
                    </div>
                  </div>
                </div>

                {/* Insight tag */}
                <div className="mt-4 pt-4 border-t border-[hsl(0,0%,15%)]">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-[hsl(0,0%,15%)] text-white text-xs rounded font-medium">
                      Insight Captured
                    </span>
                    <span className="text-xs text-[hsl(0,0%,50%)]">
                      Debugging methodology documented
                    </span>
                  </div>
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
