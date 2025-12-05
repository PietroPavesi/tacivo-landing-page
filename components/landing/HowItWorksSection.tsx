import { Users, MessageSquare, FileText, Database, Search, ChevronRight, Check, Folder, Share2, Bot, UserPlus, Cpu } from "lucide-react";
const steps = [{
  number: "01",
  title: "Identify Experts",
  description: "Pinpoint key knowledge holders whose expertise is critical to preserve.",
  icon: Users
}, {
  number: "02",
  title: "AI-Guided Sessions",
  description: "Structured conversations adapting to role and context.",
  icon: MessageSquare
}, {
  number: "03",
  title: "Auto-Documentation",
  description: "Knowledge transformed into searchable documentation.",
  icon: FileText
}, {
  number: "04",
  title: "Institutional Memory",
  description: "Tacit knowledge becomes permanent competitive advantage.",
  icon: Database
}, {
  number: "05",
  title: "Knowledge Distribution",
  description: "Share expertise across teams, onboard new hires, and train AI tools or robots with captured knowledge.",
  icon: Share2
}];
const OrgChartMockup = () => <div className="w-full h-full rounded-xl border border-border bg-card overflow-hidden flex flex-col">
    <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/30">
      <span className="text-xs font-medium text-foreground">Expert Identification</span>
      <div className="flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <span className="text-[10px] text-muted-foreground">Scanning</span>
      </div>
    </div>
    <div className="flex-1 p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <Search className="w-3 h-3 text-muted-foreground" />
        <span className="text-xs text-muted-foreground">Analyzing organization...</span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-secondary border border-border mb-2" />
        <div className="w-px h-4 bg-border" />
        <div className="flex gap-6">
          {[1, 2, 3].map(i => <div key={i} className="flex flex-col items-center">
              <div className="w-px h-3 bg-border" />
              <div className={`w-8 h-8 rounded-full border-2 ${i === 2 ? 'bg-primary/20 border-primary' : 'bg-secondary border-border'}`}>
                {i === 2 && <Check className="w-full h-full p-1.5 text-primary" />}
              </div>
            </div>)}
        </div>
        <div className="w-px h-3 bg-border mt-1" />
        <div className="flex gap-4 mt-1">
          {[1, 2].map(i => <div key={i} className="flex flex-col items-center">
              <div className={`w-7 h-7 rounded-full border-2 ${i === 1 ? 'bg-primary/20 border-primary' : 'bg-secondary border-border'}`}>
                {i === 1 && <Check className="w-full h-full p-1.5 text-primary" />}
              </div>
            </div>)}
        </div>
      </div>
      <div className="mt-auto pt-3 border-t border-border flex items-center justify-between">
        <span className="text-[10px] text-muted-foreground">3 critical experts found</span>
        <span className="text-[10px] text-primary">View all →</span>
      </div>
    </div>
  </div>;
const ChatMockup = () => <div className="w-full h-full rounded-xl border border-border bg-card overflow-hidden flex flex-col">
    <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/30">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="text-[10px] text-primary font-medium">AI</span>
        </div>
        <div>
          <p className="text-xs font-medium text-foreground">Knowledge Session</p>
          <p className="text-[10px] text-muted-foreground">With Sarah Chen</p>
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <span className="text-[10px] text-muted-foreground">Recording</span>
      </div>
    </div>
    <div className="flex-1 p-3 space-y-2 overflow-hidden">
      <div className="flex gap-2">
        <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0" />
        <div className="bg-secondary rounded-lg rounded-tl-none px-3 py-2 max-w-[80%]">
          <p className="text-[11px] text-muted-foreground">When troubleshooting production issues, what's your first instinct?</p>
        </div>
      </div>
      <div className="flex gap-2 justify-end">
        <div className="bg-foreground/5 border border-border rounded-lg rounded-tr-none px-3 py-2 max-w-[80%]">
          <p className="text-[11px] text-foreground">I check deployment logs first, then correlate with recent changes...</p>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0" />
        <div className="bg-secondary rounded-lg rounded-tl-none px-3 py-2 max-w-[80%]">
          <p className="text-[11px] text-muted-foreground">What patterns have you learned to recognize?</p>
        </div>
      </div>
    </div>
    <div className="px-3 py-2 border-t border-border">
      <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-primary/10 border border-primary/20">
        <Check className="w-3 h-3 text-primary" />
        <span className="text-[10px] text-primary">Insight captured: Debugging methodology</span>
      </div>
    </div>
  </div>;
const DocumentMockup = () => <div className="w-full h-full rounded-xl border border-border bg-card overflow-hidden flex flex-col">
    <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/30">
      <div className="flex items-center gap-2">
        <FileText className="w-4 h-4 text-foreground" />
        <span className="text-xs font-medium text-foreground">Auto-Generated Doc</span>
      </div>
      <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 border border-green-500/20">Complete</span>
    </div>
    <div className="flex-1 p-4 space-y-3">
      <div>
        <div className="h-3 bg-foreground/80 rounded w-2/3 mb-2" />
        <div className="h-2 bg-secondary rounded w-full mb-1" />
        <div className="h-2 bg-secondary rounded w-5/6 mb-1" />
        <div className="h-2 bg-secondary rounded w-4/5" />
      </div>
      <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1 h-1 rounded-full bg-primary" />
          <span className="text-[10px] text-primary font-medium">Key Insight</span>
        </div>
        <div className="h-2 bg-primary/20 rounded w-full mb-1" />
        <div className="h-2 bg-primary/20 rounded w-3/4" />
      </div>
      <div>
        <div className="h-2 bg-secondary rounded w-full mb-1" />
        <div className="h-2 bg-secondary rounded w-2/3" />
      </div>
    </div>
    <div className="px-4 py-2 border-t border-border flex items-center justify-between">
      <span className="text-[10px] text-muted-foreground">From session with Sarah Chen</span>
      <span className="text-[10px] text-muted-foreground">2 min ago</span>
    </div>
  </div>;
const KnowledgeBaseMockup = () => <div className="w-full h-full rounded-xl border border-border bg-card overflow-hidden flex flex-col">
    <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/30">
      <span className="text-xs font-medium text-foreground">Knowledge Base</span>
      <div className="flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <span className="text-[10px] text-muted-foreground">Live</span>
      </div>
    </div>
    <div className="p-3 border-b border-border">
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-background">
        <Search className="w-3 h-3 text-muted-foreground" />
        <span className="text-[11px] text-muted-foreground">Search knowledge...</span>
      </div>
    </div>
    <div className="flex-1 p-3 space-y-2">
      <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground mb-1">
        <Folder className="w-3 h-3" />
        <span>Engineering / Troubleshooting</span>
      </div>
      {[{
      title: "Production Debugging",
      tag: "Critical"
    }, {
      title: "Migration Best Practices",
      tag: "Process"
    }, {
      title: "Escalation Handling",
      tag: "Support"
    }].map((item, i) => <div key={i} className="flex items-center justify-between p-2 rounded-lg border border-border hover:border-foreground/20 transition-colors">
          <div className="flex items-center gap-2">
            <FileText className="w-3 h-3 text-muted-foreground" />
            <span className="text-[11px] text-foreground">{item.title}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] px-1.5 py-0.5 rounded border border-border text-muted-foreground">{item.tag}</span>
            <ChevronRight className="w-3 h-3 text-muted-foreground" />
          </div>
        </div>)}
    </div>
    <div className="px-3 py-2 border-t border-border flex items-center justify-between text-[10px] text-muted-foreground">
      <span>247 entries</span>
      <span>Updated 2m ago</span>
    </div>
  </div>;

const KnowledgeDistributionMockup = () => <div className="w-full h-full rounded-xl border border-border bg-card overflow-hidden flex flex-col">
    <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/30">
      <span className="text-xs font-medium text-foreground">Knowledge Distribution</span>
      <div className="flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <span className="text-[10px] text-muted-foreground">Active</span>
      </div>
    </div>
    <div className="flex-1 p-4 flex flex-col justify-center">
      {/* Central knowledge hub */}
      <div className="flex items-center justify-center mb-4">
        <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
          <Database className="w-5 h-5 text-primary" />
        </div>
      </div>
      
      {/* Distribution arrows and targets */}
      <div className="flex justify-center gap-4">
        {[
          { icon: Users, label: "Teams", status: "Synced" },
          { icon: UserPlus, label: "New Hires", status: "Training" },
          { icon: Bot, label: "AI Tools", status: "Integrated" },
          { icon: Cpu, label: "Robots", status: "Connected" }
        ].map((target, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div className="w-px h-4 bg-primary/40" />
            <div className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center">
              <target.icon className="w-4 h-4 text-foreground" />
            </div>
            <span className="text-[9px] text-foreground font-medium">{target.label}</span>
            <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-green-500/10 text-green-600 border border-green-500/20">{target.status}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="px-3 py-2 border-t border-border flex items-center justify-between text-[10px] text-muted-foreground">
      <span>4 channels active</span>
      <span className="text-primary">Manage →</span>
    </div>
  </div>;

const mockups = [OrgChartMockup, ChatMockup, DocumentMockup, KnowledgeBaseMockup, KnowledgeDistributionMockup];
const HowItWorksSection = () => {
  return <section id="how-it-works" className="relative border-t border-border" style={{ backgroundColor: 'hsl(60 30% 97%)' }}>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest mb-3 sm:mb-4 animate-fade-in">
            How It Works
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground animate-fade-in-up">
            <span className="font-medium">From expert insights to </span>
            <span className="font-serif italic">Collective Enterprise Knowledge.</span>
          </h2>
        </div>
      </div>

      {/* Full-height scroll sections */}
      {steps.map((step, index) => {
      const MockupComponent = mockups[index];
      return <div key={index} className="min-h-[70vh] sm:min-h-[80vh] flex items-center sticky top-0" style={{
        zIndex: index + 1,
        backgroundColor: 'hsl(60 30% 97%)'
      }}>
            <div className="max-w-5xl mx-auto px-6 lg:px-8 w-full">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
              {/* Card - Square */}
                <div className="w-full max-w-[280px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] p-5 sm:p-6 rounded-xl bg-card flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] gradient-border-pastel">
                  <div>
                    <span className="text-3xl sm:text-4xl font-serif text-muted-foreground/30">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-foreground mb-2 sm:mb-3 transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="text-lg sm:text-xl font-medium text-foreground mb-1.5 sm:mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Mockup - Square */}
                <div className="w-full max-w-[280px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] transition-all duration-500 hover:scale-[1.02] gradient-border-pastel rounded-xl">
                  <MockupComponent />
                </div>
              </div>
            </div>
          </div>;
    })}

      {/* Spacer */}
      <div className="h-16 sm:h-24" />
    </section>;
};
export default HowItWorksSection;