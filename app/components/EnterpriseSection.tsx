import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Building2, Shield, Headphones, Globe, Quote } from 'lucide-react';

const CITY_IMAGE =
  'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80';

const TESTIMONIAL_AVATAR =
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80';

const ENTERPRISE_BENEFITS = [
  { icon: Shield, label: 'Enterprise Security' },
  { icon: Headphones, label: 'Priority Support' },
  { icon: Globe, label: 'Global Scale' },
];

export default function EnterpriseSection() {
  return (
    <section id="enterprise" className="bg-gradient-to-b from-muted/20 via-muted/30 to-muted/20 py-16 sm:py-20 scroll-mt-20" aria-labelledby="enterprise-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card aspect-[2/1] sm:aspect-[16/9] shadow-2xl hover:shadow-primary/10 transition-shadow group">
              <Image
                src={CITY_IMAGE}
                alt="Enterprise cityscape"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent pointer-events-none" aria-hidden />
              <Quote className="absolute bottom-6 left-6 w-12 h-12 text-background/40" aria-hidden />
            </div>
            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
              <blockquote className="text-foreground text-lg leading-relaxed font-medium">
                With our complete business under control, our productivity is up by 80% in the last year that we have been using TrueValue.
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-muted ring-2 ring-primary/20">
                  <Image src={TESTIMONIAL_AVATAR} alt="" fill className="object-cover" sizes="56px" />
                </div>
                <div>
                  <cite className="not-italic font-bold text-foreground text-base">Thomas John</cite>
                  <p className="text-sm text-muted-foreground">Managing Director, Agappe Diagnostics</p>
                </div>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 mt-4 group"
              >
                READ THE STORY
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden />
              </a>
            </div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent text-primary p-3 shadow-lg shadow-primary/5">
              <Building2 className="h-8 w-8" strokeWidth={2} aria-hidden />
            </div>
            <div>
              <p className="text-sm font-bold text-primary uppercase tracking-wider flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary/50 rounded-full" aria-hidden />
                TrueValue for
              </p>
              <h2 id="enterprise-heading" className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                Enterprise
              </h2>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              Experience the breadth and depth of the TrueValue ecosystem, with the professional services, infrastructure, support, and security that a large business needs. Streamline complex business processes, build strong relationships with your customers, and drive growth at scale.
            </p>

            <div className="grid grid-cols-3 gap-4 py-4">
              {ENTERPRISE_BENEFITS.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.label}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/30 hover:bg-card transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                      <Icon className="w-5 h-5" strokeWidth={2} aria-hidden />
                    </div>
                    <span className="text-xs font-semibold text-foreground text-center">{benefit.label}</span>
                  </div>
                );
              })}
            </div>

            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 group"
            >
              LEARN MORE
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
