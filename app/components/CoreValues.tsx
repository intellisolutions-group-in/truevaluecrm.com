import { ArrowRight, Handshake, Search, Users, Lightbulb } from 'lucide-react';

const VALUES = [
  {
    heading: 'Long-term commitment',
    description:
      "30+ years of running a profitable organization gives us a good sense of challenges that a growing business faces. We take pride in running a sustainable business that's powered by you, our customer.",
    icon: Handshake,
    iconClass: 'text-primary',
  },
  {
    heading: 'Focus on research and development',
    description:
      "Software is our craft and we back it up with our relentless investments in R&D. So much so that we prefer to own the entire technology stack, including running our data centers globally.",
    icon: Lightbulb,
    iconClass: 'text-primary',
  },
  {
    heading: 'Customer-first philosophy',
    description:
      "In all these years, it's our customers' trust and goodwill that has helped us establish a strong position in the market. No matter the size of your business, we're here to help you grow.",
    icon: Users,
    iconClass: 'text-primary',
  },
];

export default function CoreValues() {
  return (
    <section className="bg-gradient-to-b from-background via-muted/20 to-background py-16 sm:py-20" aria-labelledby="values-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Search className="w-4 h-4" />
            <span>Our Values</span>
          </div>
          <h2
            id="values-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
          >
            The core values and principles{' '}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              that drive us
            </span>
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {VALUES.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.heading}
                className="group text-center p-8 rounded-2xl bg-card/50 border border-border hover:border-primary/30 hover:bg-card hover:shadow-xl hover:shadow-primary/10 transition-all hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-5 ${value.iconClass} group-hover:scale-110 group-hover:from-primary/30 transition-all shadow-lg shadow-primary/10`}
                  aria-hidden
                >
                  <Icon className="h-8 w-8" strokeWidth={2} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground group-hover:text-primary transition-colors">{value.heading}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 group"
          >
            READ OUR STORY
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
