'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="section-dark relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 text-white animate-fade-in">
              <span className="font-medium">Don't let your competitive </span>
              <span className="font-serif italic">advantage walk out.</span>
            </h2>
            <p className="text-lg text-cloud-medium mb-8 animate-fade-in-delay-1">
              Start capturing, preserving, and leveraging your organization's most valuable asset.
            </p>
            <Button
              size="lg"
              className="bg-white text-slate-dark hover:bg-white/90 group transition-transform duration-300 hover:scale-105 animate-fade-in-delay-2"
              asChild
            >
              <a href="mailto:hello@tacivo.com?subject=Demo Request&body=Hi Tacivo team,%0D%0A%0D%0AI'd like to schedule a demo to learn more about how Tacivo can help capture and preserve our organization's tacit knowledge.%0D%0A%0D%0AThank you!">
                Schedule a demo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Right - Founding Partner CTA */}
          <div className="lg:pl-16 animate-fade-in-delay-1">
            <div className="p-8 rounded-xl gradient-border-pastel-dark space-y-6 transition-transform duration-300 hover:scale-[1.02]">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Shape the platform with us</h3>
                <p className="text-cloud-medium mb-6">
                  Join as a founding partner and influence the future of tacit knowledge preservation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="!bg-book-cloth text-white hover:!bg-book-cloth/90 group transition-transform duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="/partners">
                    Apply for Partnership
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
