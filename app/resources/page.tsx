'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, FileText, Video, Lightbulb } from "lucide-react";
import Link from 'next/link';

const ResourcesPage = () => {
  const resources = [
    {
      category: "Guides",
      icon: BookOpen,
      items: [
        {
          title: "Introduction to Tacit Knowledge",
          description: "Learn about tacit knowledge, why it matters, and how organizations lose it every day.",
          type: "Article",
          readTime: "8 min read"
        },
        {
          title: "Knowledge Elicitation Best Practices",
          description: "A comprehensive guide to capturing expert knowledge through AI-powered conversations.",
          type: "Guide",
          readTime: "12 min read"
        },
        {
          title: "SECI Model Explained",
          description: "Understanding the Socialization, Externalization, Combination, and Internalization framework.",
          type: "Article",
          readTime: "6 min read"
        }
      ]
    },
    {
      category: "Case Studies",
      icon: FileText,
      items: [
        {
          title: "Manufacturing Excellence Preserved",
          description: "How a Fortune 500 manufacturer captured 30 years of tribal knowledge before retirement wave.",
          type: "Case Study",
          readTime: "10 min read"
        },
        {
          title: "Scaling Consulting Expertise",
          description: "Professional services firm reduces onboarding time by 60% with structured knowledge capture.",
          type: "Case Study",
          readTime: "8 min read"
        }
      ]
    },
    {
      category: "Videos",
      icon: Video,
      items: [
        {
          title: "Product Demo",
          description: "See Tacivo in action with a walkthrough of key features and workflows.",
          type: "Video",
          readTime: "5 min watch"
        },
        {
          title: "Expert Interview Series",
          description: "Conversations with knowledge management leaders about preserving organizational intelligence.",
          type: "Video Series",
          readTime: "Various"
        }
      ]
    },
    {
      category: "Insights",
      icon: Lightbulb,
      items: [
        {
          title: "The Cost of Lost Knowledge",
          description: "Research-backed analysis of the financial impact when experienced employees leave.",
          type: "Whitepaper",
          readTime: "15 min read"
        },
        {
          title: "AI and Knowledge Management",
          description: "How artificial intelligence is transforming enterprise knowledge capture and retrieval.",
          type: "Article",
          readTime: "10 min read"
        }
      ]
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
          {/* Hero Section */}
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight tracking-tight text-slate-900 mb-6">
              Resources for <span className="text-book-cloth italic">Knowledge Leaders</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Explore our collection of guides, case studies, and insights on tacit knowledge management,
              organizational learning, and preserving expert expertise.
            </p>
          </div>

          {/* Resources Grid */}
          <div className="space-y-16">
            {resources.map((section) => {
              const Icon = section.icon;
              return (
                <div key={section.category}>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-lg bg-book-cloth/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-book-cloth" />
                    </div>
                    <h2 className="text-3xl font-serif text-slate-900">{section.category}</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {section.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="group bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 hover:shadow-lg hover:border-book-cloth/30 transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <span className="text-xs font-medium text-book-cloth uppercase tracking-wider">
                            {item.type}
                          </span>
                          <span className="text-xs text-slate-500">{item.readTime}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-book-cloth transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-2 text-book-cloth text-sm font-medium">
                          <span>Coming Soon</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-br from-book-cloth/5 to-kraft/10 rounded-3xl p-12 border border-book-cloth/20">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-serif text-slate-900 mb-4">
                Ready to preserve your organization's knowledge?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Join forward-thinking organizations that are capturing and leveraging their expert tacit knowledge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-slate-dark hover:bg-white/90 group transition-transform duration-300 hover:scale-105"
                  asChild
                >
                  <a href="mailto:hello@tacivo.com?subject=Demo Request&body=Hi Tacivo team,%0D%0A%0D%0AI'd like to schedule a demo to learn more about how Tacivo can help capture and preserve our organization's tacit knowledge.%0D%0A%0D%0AThank you!">
                    Schedule a Demo
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="border border-book-cloth text-book-cloth hover:bg-book-cloth/10 group transition-transform duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="/partners">
                    Become a Partner
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
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
              <Link href="/partners" className="text-sm text-slate-600 hover:text-book-cloth transition-colors">
                Partners
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResourcesPage;
