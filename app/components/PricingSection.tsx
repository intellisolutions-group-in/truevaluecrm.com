import Link from 'next/link';
import { Check, X, ArrowRight, Sparkles } from 'lucide-react';
import { pricingPlans } from '../data/pricing';

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="bg-gradient-to-b from-muted/20 via-background to-muted/20 py-16 sm:py-24 scroll-mt-20"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Simple Pricing</span>
          </div>
          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
          >
            Plans that{' '}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              scale with you
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Start free, upgrade when you&apos;re ready. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-2xl border-2 bg-card overflow-hidden transition-all hover:shadow-xl ${
                plan.popular
                  ? 'border-primary shadow-xl shadow-primary/10 scale-[1.02] md:scale-105'
                  : 'border-border hover:border-primary/30'
              }`}
            >
              {plan.popular && (
                <div className="bg-primary text-primary-foreground text-center py-2 text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed min-h-[40px]">
                  {plan.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-bold text-foreground">${plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.billingPeriod}</span>
                </div>

                <Link
                  href="/register"
                  className={`mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold text-sm rounded-xl transition-all hover:scale-105 ${
                    plan.popular
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25'
                      : 'bg-card border-2 border-border hover:border-primary/50 text-foreground'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-3">
                      {feature.included ? (
                        <div className="shrink-0 mt-0.5 p-0.5 rounded-full bg-success/10">
                          <Check className="w-3.5 h-3.5 text-success" strokeWidth={3} />
                        </div>
                      ) : (
                        <div className="shrink-0 mt-0.5 p-0.5 rounded-full bg-muted">
                          <X className="w-3.5 h-3.5 text-muted-foreground" strokeWidth={3} />
                        </div>
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? 'text-foreground' : 'text-muted-foreground'
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          All plans include a 15-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}
