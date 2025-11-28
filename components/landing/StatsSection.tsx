const StatsSection = () => {
  return <section className="relative py-24 lg:py-32" style={{ backgroundColor: 'hsl(60 30% 97%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section intro */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4 animate-fade-in">
            Your Opportunity - Risk
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground animate-fade-in-up">
            <span className="font-medium">Building the </span>
            <span className="font-serif italic">Tacit Knowledge Advantage</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed animate-fade-in-delay-1">
            In a world where AI answers everything publicly knowable, your institutional knowledge becomes your{" "}
            <span className="text-book-cloth font-medium">
              competitive moat
            </span>
            .{" "}
            <span className="text-foreground font-semibold">Don't lose it.</span>
          </p>
        </div>

        {/* Stats grid - outlined cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-10 lg:p-12 rounded-2xl bg-ivory-dark book-cloth-border transition-all duration-300 hover:scale-[1.02]">
            <span className="block text-6xl lg:text-7xl font-serif text-foreground mb-4">
              80%
            </span>
            <p className="text-muted-foreground leading-relaxed">
              Of critical expertise is undocumented tacit knowledge locked in experts' heads
            </p>
          </div>
          <div className="p-10 lg:p-12 rounded-2xl bg-ivory-dark book-cloth-border transition-all duration-300 hover:scale-[1.02]">
            <span className="block text-6xl lg:text-7xl font-serif text-foreground mb-4">
              56%
            </span>
            <p className="text-muted-foreground leading-relaxed">
              Of retiring workers hold key leadership positions. When they leave, competitive advantage walks out with them.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default StatsSection;