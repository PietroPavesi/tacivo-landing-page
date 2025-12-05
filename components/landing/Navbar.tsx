'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo13 from "@/public/assets/logo/svg/13.svg";
import logo15 from "@/public/assets/logo/svg/15.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-dark border-b border-slate-light transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-14' : 'h-16 lg:h-20'}`}>
          {/* Logo */}
          <a href="/" className="flex items-center w-[100px] sm:w-[140px]">
            <img
              src={isScrolled ? logo15.src : logo13.src}
              alt="Tacivo"
              className={`transition-all duration-300 ${isScrolled ? 'h-10 sm:h-12' : 'h-16 sm:h-20'}`}
            />
          </a>

          {/* Desktop Navigation Links */}
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

          {/* Desktop CTA Button */}
          <Button
            variant="ghost"
            size="default"
            className="hidden md:flex border border-slate-light text-ivory-light hover:text-ivory-light hover:bg-ivory-light/10 hover:border-book-cloth bg-transparent"
            asChild
          >
            <a href="mailto:hello@tacivo.com?subject=Demo Request&body=Hi Tacivo team,%0D%0A%0D%0AI'd like to schedule a demo to learn more about how Tacivo can help capture and preserve our organization's tacit knowledge.%0D%0A%0D%0AThank you!">
              Book a demo
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMobileMenuClick}
            className="md:hidden p-2 text-cloud-medium hover:text-ivory-light transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 border-t border-slate-light' : 'max-h-0'
        }`}
      >
        <div className="px-4 sm:px-6 py-4 space-y-3 bg-slate-dark">
          {["Platform", "How It Works"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              onClick={closeMobileMenu}
              className="block py-2 text-sm text-cloud-medium hover:text-ivory-light transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="/resources"
            onClick={closeMobileMenu}
            className="block py-2 text-sm text-cloud-medium hover:text-ivory-light transition-colors"
          >
            Resources
          </a>
          <a
            href="/partners"
            onClick={closeMobileMenu}
            className="block py-2 text-sm text-cloud-medium hover:text-ivory-light transition-colors"
          >
            Partners
          </a>
          <div className="pt-3">
            <Button
              variant="ghost"
              size="default"
              className="w-full border border-slate-light text-ivory-light hover:text-ivory-light hover:bg-ivory-light/10 hover:border-book-cloth bg-transparent"
              asChild
            >
              <a href="mailto:hello@tacivo.com?subject=Demo Request&body=Hi Tacivo team,%0D%0A%0D%0AI'd like to schedule a demo to learn more about how Tacivo can help capture and preserve our organization's tacit knowledge.%0D%0A%0D%0AThank you!">
                Book a demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
