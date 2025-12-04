'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, MessageCircle, Rocket, ArrowRight, Home } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PartnerSuccessPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const nextSteps = [
    {
      icon: CheckCircle,
      title: 'Application Received',
      description: "We've received your founding partner application and a confirmation email has been sent to your inbox.",
      timeline: 'Completed',
      color: 'text-emerald-600'
    },
    {
      icon: MessageCircle,
      title: 'Team Review',
      description: 'Our team will carefully review your application and assess how Tacivo can best serve your organization.',
      timeline: 'Within 24 hours',
      color: 'text-blue-600'
    },
    {
      icon: Calendar,
      title: 'Discovery Call',
      description: "We'll reach out to schedule a call to discuss the partnership opportunity and explore your specific needs.",
      timeline: '1-2 business days',
      color: 'text-purple-600'
    },
    {
      icon: Rocket,
      title: 'Partnership Launch',
      description: "Once aligned, we'll onboard you as a founding partner with exclusive benefits and direct access to our team.",
      timeline: '1-2 weeks',
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-slate-dark border-b border-slate-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <Link href="/" className="flex items-center w-[140px]">
              <img src="/assets/logo/svg/13.svg" alt="Tacivo" className="h-20" />
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-32">
        {/* Success Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-8 h-8 bg-emerald-500/10 border-2 border-emerald-500 rounded-full mb-6"
          >
            <CheckCircle className="w-4 h-4 text-emerald-500" />
          </motion.div>

          <h1 className="text-2xl md:text-4xl font-serif text-slate-900 mb-4">
            Thank You for Applying!
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Your founding partner application has been successfully submitted.
            We're excited about the opportunity to work together.
          </p>
        </motion.div>

        {/* Next Steps Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-serif text-slate-900 mb-8 text-center">What Happens Next?</h2>

          <div className="space-y-6">
            {nextSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 ${step.color} bg-book-cloth/10 rounded-lg flex items-center justify-center`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                      <span className="text-sm text-slate-600 font-medium whitespace-nowrap ml-4">
                        {step.timeline}
                      </span>
                    </div>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Reminder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="bg-book-cloth/5 border border-book-cloth/20 rounded-2xl p-8 mb-8"
        >
          <h3 className="text-2xl font-serif text-slate-900 mb-4">Founding Partner Benefits</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-book-cloth flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-slate-900 font-medium">Priority Access</p>
                <p className="text-slate-600 text-sm">Be first to access new features and updates</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-book-cloth flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-slate-900 font-medium">Special Pricing</p>
                <p className="text-slate-600 text-sm">Lifetime discount on all plans</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-book-cloth flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-slate-900 font-medium">Direct Support</p>
                <p className="text-slate-600 text-sm">Dedicated support channel with our team</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-book-cloth flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-slate-900 font-medium">Shape the Product</p>
                <p className="text-slate-600 text-sm">Influence roadmap and feature development</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-book-cloth hover:bg-book-cloth/90 text-white group"
            asChild
          >
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-slate-300 text-slate-900 hover:bg-slate-50 group"
            asChild
          >
            <a href="mailto:hello@tacivo.com">
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact Us Directly
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="text-center mt-12 text-slate-600"
        >
          <p className="mb-2">
            Have questions in the meantime?
          </p>
          <p>
            Reach out to us at{' '}
            <a href="mailto:hello@tacivo.com" className="text-book-cloth hover:text-book-cloth-dark underline">
              hello@tacivo.com
            </a>
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 mt-16">
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
}
