const ProblemSection = () => {
  return <section id="problem" className="relative py-24 lg:py-32 border-t border-border" style={{ backgroundColor: 'hsl(60 30% 97%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Text */}
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4 animate-fade-in">
              Meet Tacivo
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 text-foreground animate-fade-in-up">
              <span className="font-medium">A new kind of </span>
              <br />
              <span className="font-serif italic">knowledge transfer.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 animate-fade-in-delay-1">
              Traditional tools organize what's written. Tacivo captures what never gets documented—the decisions, insights, and expertise that took years to build.
            </p>
            
            {/* Feature list */}
            <div className="space-y-4 animate-fade-in-delay-2">
              {["AI-guided elicitation sessions", "Living knowledge base", "Enterprise-ready security"].map((item, i) => <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  <span className="text-foreground">{item}</span>
                </div>)}
            </div>
          </div>

          {/* Right - AI Elicitation Session Mockup */}
          <div className="relative animate-fade-in-delay-1">
            <div className="rounded-xl bg-card overflow-hidden gradient-border-pastel transition-transform duration-500 hover:scale-[1.02] shadow-lg">
              {/* Browser header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-muted" />
                  <div className="w-3 h-3 rounded-full bg-muted" />
                  <div className="w-3 h-3 rounded-full bg-muted" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded bg-secondary text-xs text-muted-foreground">
                    app.tacivo.com
                  </div>
                </div>
              </div>

              {/* App content mockup */}
              <div className="p-6 space-y-4 bg-background">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-book-cloth/10 flex items-center justify-center">
                    <span className="text-book-cloth font-medium text-sm">AI</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Knowledge Elicitation Session</p>
                    <p className="text-xs text-muted-foreground">With Senior Engineer</p>
                  </div>
                </div>

                {/* Chat bubbles */}
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-book-cloth/20 flex-shrink-0" />
                    <div className="bg-secondary rounded-lg rounded-tl-none px-4 py-2 max-w-[80%]">
                      <p className="text-sm text-foreground">
                        When troubleshooting production issues, what's your first instinct?
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 justify-end">
                    <div className="bg-card border border-border rounded-lg rounded-tr-none px-4 py-2 max-w-[80%]">
                      <p className="text-sm text-foreground">
                        I always check the deployment logs first, then correlate with recent
                        changes...
                      </p>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-muted flex-shrink-0" />
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-book-cloth/20 flex-shrink-0" />
                    <div className="bg-secondary rounded-lg rounded-tl-none px-4 py-2 max-w-[80%]">
                      <p className="text-sm text-foreground">
                        That's valuable. What patterns have you learned to recognize?
                      </p>
                    </div>
                  </div>
                </div>

                {/* Insight tag */}
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-book-cloth/10 text-book-cloth text-xs rounded font-medium border border-book-cloth/20">
                      Insight Captured
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Debugging methodology documented
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProblemSection;