import Link from 'next/link';
import { ArrowRight, Sparkles, Rocket } from 'lucide-react';

export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-muted/30 via-muted/50 to-muted/30 py-20 sm:py-28 relative overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-bounce">
          <Rocket className="w-4 h-4" />
          <span>Start Your Journey</span>
        </div>

        <h2 id="cta-heading" className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
          <span className="block">Ready to do your</span>
          <span className="block mt-2 bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
            best work?
          </span>
        </h2>

        <p className="mt-6 text-xl sm:text-2xl text-muted-foreground font-medium">
          Let&apos;s get you started.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/register"
            className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base uppercase tracking-wide rounded-xl shadow-2xl shadow-primary/30 hover:shadow-primary/40 hover:scale-105 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Sparkles className="h-5 w-5" aria-hidden />
            SIGN UP NOW
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden />
          </Link>

          <a
            href="#products-ecosystem"
            className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-background border-2 border-border hover:border-primary/50 text-foreground font-bold text-base uppercase tracking-wide rounded-xl hover:scale-105 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            VIEW PRODUCTS
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden />
          </a>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          No credit card required · Free forever plan available · 15-day trial
        </p>
      </div>
    </section>
  );
}
