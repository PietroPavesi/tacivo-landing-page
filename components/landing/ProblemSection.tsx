import { Search, FileText, Folder, ChevronRight } from "lucide-react";
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

          {/* Right - Knowledge Base Mockup */}
          <div className="relative animate-fade-in-delay-1">
            <div className="rounded-xl bg-card overflow-hidden gradient-border-pastel transition-transform duration-500 hover:scale-[1.02]">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/50">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground">Knowledge Base</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs text-muted-foreground">Live</span>
                </div>
              </div>

              {/* Search bar */}
              <div className="p-4 border-b border-border">
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg border border-border bg-background">
                  <Search className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Search knowledge...</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                {/* Category */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider mb-2">
                  <Folder className="w-3 h-3" />
                  <span>Engineering / Troubleshooting</span>
                </div>

                {/* Knowledge items */}
                {[{
                title: "Production Debugging Methodology",
                expert: "Sarah Chen",
                tags: ["Critical", "Verified"]
              }, {
                title: "Database Migration Best Practices",
                expert: "Marcus Johnson",
                tags: ["Process"]
              }, {
                title: "Client Escalation Handling",
                expert: "Rachel Kim",
                tags: ["Customer Success"]
              }].map((item, i) => <div key={i} className="group flex items-center justify-between p-3 rounded-lg border border-border hover:border-foreground/20 hover:bg-secondary/30 transition-all cursor-pointer">
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.title}</p>
                        <p className="text-xs text-muted-foreground">From {item.expert}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.tags.map((tag, j) => <span key={j} className="text-[10px] px-2 py-0.5 rounded-full border border-border text-muted-foreground">
                          {tag}
                        </span>)}
                      <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>)}

                {/* Stats bar */}
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                  <span>247 knowledge entries</span>
                  <span>Last updated 2 min ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProblemSection;