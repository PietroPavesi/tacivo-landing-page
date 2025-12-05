'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const PartnersPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/partners', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit application');
      }

      // Redirect to success page
      router.push('/partners/success');
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-slate-dark border-b border-slate-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <Link href="/" className="flex items-center w-[140px]">
              <img src="/assets/logo/svg/13.svg" alt="Tacivo" className="h-20" />
            </Link>
            <Link
              href="/"
              className="text-sm text-cloud-medium hover:text-ivory-light transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left - Information */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight tracking-tight text-slate-900 mb-6">
                Become a <span className="text-book-cloth italic">Founding Partner</span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Join us in shaping the future of enterprise knowledge management.
                Our founding partners get exclusive benefits and early access.
              </p>

              {/* Benefits */}
              <div className="space-y-6 mb-12">
                <h2 className="text-2xl font-serif text-slate-900 mb-4">Partnership Benefits</h2>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-book-cloth/10 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-book-cloth" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Early Access</h3>
                    <p className="text-slate-600">
                      Get exclusive access to new features before general release and help shape product direction.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-book-cloth/10 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-book-cloth" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Preferred Pricing</h3>
                    <p className="text-slate-600">
                      Lock in special pricing as a founding partner, guaranteed for the lifetime of your partnership.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-book-cloth/10 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-book-cloth" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Dedicated Support</h3>
                    <p className="text-slate-600">
                      Direct line to our founding team with priority support and personalized onboarding.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-book-cloth/10 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-book-cloth" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Co-Creation Opportunity</h3>
                    <p className="text-slate-600">
                      Collaborate with us to build features tailored to your organization's specific needs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-book-cloth/10 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-book-cloth" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Strategic Partnership</h3>
                    <p className="text-slate-600">
                      Join an exclusive community of forward-thinking organizations driving innovation in knowledge management.
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial Placeholder */}
              <div className="bg-book-cloth/5 rounded-2xl p-6 border border-book-cloth/20">
                <p className="text-slate-700 mb-4 italic">
                  "Tacivo is transforming how we capture and share expertise across our global teams. Being a founding partner means we're at the forefront of this revolution."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-book-cloth/20" />
                  <div>
                    <p className="font-semibold text-slate-900">Partner Organization</p>
                    <p className="text-sm text-slate-600">Enterprise</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Application Form */}
            <div className="lg:pl-8">
              <div className="bg-white rounded-3xl shadow-xl border border-slate-200/60 p-8 sticky top-32">
                <h2 className="text-2xl font-serif text-slate-900 mb-2">
                  Apply for Partnership
                </h2>
                <p className="text-slate-600 mb-6">
                  Fill out the form below and we'll be in touch within 48 hours.
                </p>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-green-800 text-sm">
                      Thank you! Your application has been submitted. We'll be in touch soon.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-red-800 text-sm">
                      There was an error submitting your application. Please try again or email us directly at hello@tacivo.com.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-book-cloth focus:border-transparent outline-none transition bg-background"
                      placeholder="John Smith"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-book-cloth focus:border-transparent outline-none transition bg-background"
                      placeholder="john@company.com"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-book-cloth focus:border-transparent outline-none transition bg-background"
                      placeholder="Acme Inc."
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Tell us about your interest (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-book-cloth focus:border-transparent outline-none transition resize-none bg-background"
                      placeholder="Tell us about your organization and why you're interested in becoming a founding partner..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-book-cloth text-white hover:bg-book-cloth/90 group transition-transform duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      'Submitting...'
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-slate-500 text-center">
                    By submitting, you agree to be contacted by our team about the founding partner program.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-600">
              © 2025 Tacivo. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="mailto:hello@tacivo.com" className="text-sm text-slate-600 hover:text-book-cloth transition-colors">
                Contact
              </a>
              <Link href="/" className="text-sm text-slate-600 hover:text-book-cloth transition-colors">
                Home
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PartnersPage;
