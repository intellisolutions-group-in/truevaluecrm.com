import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Box, Star, Quote } from 'lucide-react';

const TESTIMONIAL_IMAGE =
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80';

export default function SuiteSection() {
  return (
    <section className="bg-gradient-to-b from-warning/5 via-warning/10 to-warning/5 py-16 sm:py-20 relative overflow-hidden" aria-labelledby="suite-heading">
      <div className="absolute inset-0 bg-grid-primary/[0.02] pointer-events-none" aria-hidden />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent text-primary p-3 mb-2 shadow-lg shadow-primary/5">
              <Box className="h-8 w-8" strokeWidth={2} aria-hidden />
            </div>
            <div>
              <p className="text-sm font-bold text-primary uppercase tracking-wider flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary/50 rounded-full" aria-hidden />
                All-in-one suite
              </p>
              <h2 id="suite-heading" className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                TrueValue One
              </h2>
              <p className="mt-3 text-xl font-semibold text-foreground/80">The operating system for business</p>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              Run your entire business on TrueValue with our unified cloud software, designed to help you break down silos between departments and increase organizational efficiency.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 group"
            >
              TRY TRUEVALUE ONE
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden />
            </Link>
          </div>
          <div className="rounded-2xl border border-border bg-gradient-to-br from-card via-card to-muted/30 p-8 shadow-2xl hover:shadow-primary/10 transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors" aria-hidden />
            <div className="relative z-10">
              <Quote className="w-10 h-10 text-primary/20" aria-hidden />
              <blockquote className="mt-4 text-lg text-foreground leading-relaxed font-medium">
                You can be a startup, mid-sized company, or an enterprise—TrueValue One is a boon for all.
              </blockquote>
              <div className="mt-6 flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-warning text-warning" aria-hidden />
                ))}
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-muted ring-2 ring-primary/10">
                  <Image src={TESTIMONIAL_IMAGE} alt="" fill className="object-cover" sizes="56px" />
                </div>
                <div>
                  <cite className="not-italic font-bold text-foreground text-base">Prakarsh G.</cite>
                  <p className="text-sm text-muted-foreground">CFO, Finance Leader</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
