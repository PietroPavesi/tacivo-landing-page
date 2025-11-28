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
    <section id="platform" className="relative py-24 lg:py-32 border-t border-border" style={{ backgroundColor: 'hsl(60 30% 97%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4 animate-fade-in">
            Platform
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground animate-fade-in-up">
            <span className="font-medium">AI-powered </span>
            <span className="font-serif italic">knowledge elicitation.</span>
          </h2>
        </div>

        {/* Features grid - outlined cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] gradient-border-pastel"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg border border-border flex items-center justify-center mb-5 group-hover:border-foreground/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-base font-medium text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {feature.tags.map((tag, i) => (
                    <span key={i} className="text-xs text-muted-foreground px-2 py-1 rounded-full border border-border">
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
