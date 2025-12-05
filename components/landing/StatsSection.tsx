const StatsSection = () => {
  return <section className="relative py-16 sm:py-20 lg:py-32" style={{ backgroundColor: 'hsl(60 30% 97%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section intro */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest mb-3 sm:mb-4 animate-fade-in">
            Your Opportunity Risk
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground animate-fade-in-up">
            <span className="font-medium">Building the </span>
            <span className="font-serif italic">Tacit Knowledge Advantage</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-delay-1">
            In a world where AI commoditizes intelligence, expert tacit knowledge becomes your{" "}
            <span className="text-book-cloth font-medium">
              competitive moat
            </span>
            .{" "}
            <span className="text-foreground font-semibold">Don't lose it.</span>
          </p>
        </div>

        {/* Stats grid - outlined cards */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="p-6 sm:p-8 lg:p-12 rounded-2xl bg-ivory-dark book-cloth-border transition-all duration-300 hover:scale-[1.02]">
            <span className="block text-5xl sm:text-6xl lg:text-7xl font-serif text-foreground mb-3 sm:mb-4">
              80%
            </span>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Of critical expertise is undocumented tacit knowledge locked in experts' heads
            </p>
          </div>
          <div className="p-6 sm:p-8 lg:p-12 rounded-2xl bg-ivory-dark book-cloth-border transition-all duration-300 hover:scale-[1.02]">
            <span className="block text-5xl sm:text-6xl lg:text-7xl font-serif text-foreground mb-3 sm:mb-4">
              56%
            </span>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Of retiring workers hold key leadership positions. When they leave, competitive advantage walks out with them.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default StatsSection;