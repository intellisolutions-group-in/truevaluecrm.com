import { ArrowRight, Sparkles, Brain, Zap, TrendingUp } from 'lucide-react';

const AI_FEATURES = [
  { icon: Brain, label: 'Smart Insights' },
  { icon: Zap, label: 'Automated Actions' },
  { icon: TrendingUp, label: 'Predictive Analytics' },
];

export default function AISection() {
  return (
    <section className="bg-gradient-to-b from-background via-primary/5 to-background py-16 sm:py-20 relative overflow-hidden" aria-labelledby="ai-heading">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent text-primary p-4 mb-8 shadow-xl shadow-primary/20 animate-pulse">
          <Sparkles className="h-10 w-10" strokeWidth={2} aria-hidden />
        </div>
        <h2 id="ai-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
          Multiply the impact of your workforce with our{' '}
          <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
            powerful AI assistant
          </span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Built into the fabric of the TrueValue app ecosystem, our AI makes recommendations, generates insights, and takes action based on the full context of your business operations.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {AI_FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.label}
                className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 hover:bg-card transition-all group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <Icon className="w-6 h-6" strokeWidth={2} aria-hidden />
                </div>
                <span className="text-sm font-semibold text-foreground">{feature.label}</span>
              </div>
            );
          })}
        </div>

        <a
          href="#products-ecosystem"
          className="mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 group"
        >
          EXPLORE AI CAPABILITIES
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden />
        </a>
      </div>
    </section>
  );
}
