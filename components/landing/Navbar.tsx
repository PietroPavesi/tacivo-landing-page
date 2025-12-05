'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo13 from "@/public/assets/logo/svg/13.svg";
import logo15 from "@/public/assets/logo/svg/15.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-dark border-b border-slate-light transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-14' : 'h-16 lg:h-20'}`}>
          {/* Logo */}
          <a href="/" className="flex items-center w-[140px]">
            <img
              src={isScrolled ? logo15.src : logo13.src}
              alt="Tacivo"
              className={`transition-all duration-300 ${isScrolled ? 'h-12' : 'h-20'}`}
            />
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {["Platform", "How It Works"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                className="relative text-sm text-cloud-medium hover:text-ivory-light transition-colors duration-200 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-book-cloth after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {item}
              </a>
            ))}
            <a
              href="/resources"
              className="relative text-sm text-cloud-medium hover:text-ivory-light transition-colors duration-200 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-book-cloth after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Resources
            </a>
            <a
              href="/partners"
              className="relative text-sm text-cloud-medium hover:text-ivory-light transition-colors duration-200 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-book-cloth after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Partners
            </a>
          </div>

          {/* CTA */}
          <Button
            variant="ghost"
            size="default"
            className="border border-slate-light text-ivory-light hover:text-ivory-light hover:bg-ivory-light/10 hover:border-book-cloth bg-transparent"
            asChild
          >
            <a href="mailto:hello@tacivo.com?subject=Demo Request&body=Hi Tacivo team,%0D%0A%0D%0AI'd like to schedule a demo to learn more about how Tacivo can help capture and preserve our organization's tacit knowledge.%0D%0A%0D%0AThank you!">
              Book a demo
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
