import { Brain, Database, Lock, Zap, Search, Users } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Guided Elicitation",
    description: "Intelligent conversations that extract tacit knowledge in 30-minute sessions. Captures 10+ years of expertise.",
    tags: ["Adaptive Learning", "Context-Aware", "Role-Based"],
  },
  {
    icon: Database,
    title: "Living Knowledge Base",
    description: "Searchable, actionable system that scales with your organization. Find critical insights in seconds.",
    tags: ["Auto-Indexed", "Version Control", "Cross-Referenced"],
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Enterprise-grade security with audit trails and granular access controls by team and role.",
    tags: ["SOC 2", "SSO", "Audit Logs"],
  },
  {
    icon: Zap,
    title: "API-Ready Integration",
    description: "Connect to custom AI agents and automation. Your knowledge, your systems, seamless integration.",
    tags: ["REST API", "Webhooks", "SDK", "MCP"],
  },
  {
    icon: Search,
    title: "Intelligent Search",
    description: "Natural language search across all captured knowledge. Surface insights before they're needed.",
    tags: ["Semantic Search", "Filters", "Suggestions"],
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share knowledge across teams with built-in workflows. Bridge expertise gaps organization-wide.",
    tags: ["Sharing", "Comments", "Workflows"],
  },
];

const PlatformSection = () => {
  return (
    <section id="platform" className="relative py-16 sm:py-20 lg:py-32 border-t border-border" style={{ backgroundColor: 'hsl(60 30% 97%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest mb-3 sm:mb-4 animate-fade-in">
            Platform
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground animate-fade-in-up">
            <span className="font-medium">AI-powered </span>
            <span className="font-serif italic">knowledge elicitation.</span>
          </h2>
        </div>

        {/* Features grid - outlined cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
              <div
                key={index}
                className="group p-5 sm:p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] gradient-border-pastel"
              >
                {/* Icon */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-border flex items-center justify-center mb-4 sm:mb-5 group-hover:border-foreground/20 transition-colors">
                  <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-sm sm:text-base font-medium text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                  {feature.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {feature.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] sm:text-xs text-muted-foreground px-2 py-0.5 sm:py-1 rounded-full border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
