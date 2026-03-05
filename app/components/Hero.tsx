import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, LayoutGrid, Mail, BookOpen, Users, FolderKanban, Sparkles } from 'lucide-react';

const FEATURED_APPS = [
  {
    name: 'CRM',
    description: 'Comprehensive CRM platform for customer-facing teams.',
    href: '#products-ecosystem',
    icon: LayoutGrid,
    iconClass: 'text-primary',
  },
  {
    name: 'Mail',
    description: 'Secure email service for teams of all sizes.',
    href: '#products-ecosystem',
    icon: Mail,
    iconClass: 'text-primary',
  },
  {
    name: 'Books',
    description: 'Powerful accounting platform for growing businesses.',
    href: '#products-ecosystem',
    icon: BookOpen,
    iconClass: 'text-primary',
  },
  {
    name: 'People',
    description: 'Organize, automate, and simplify your HR processes.',
    href: '#products-ecosystem',
    icon: Users,
    iconClass: 'text-primary',
  },
  {
    name: 'Projects',
    description: 'Manage, track, and collaborate on projects with teams.',
    href: '#products-ecosystem',
    icon: FolderKanban,
    iconClass: 'text-primary',
  },
];

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80';

export default function Hero() {
  return (
    <section
      className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-gradient-to-b from-muted/30 via-background to-background"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-48 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Business Suite</span>
            </div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[3.5rem] font-bold tracking-tight text-foreground leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150"
            >
              <span className="block bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Your life&apos;s work,
              </span>
              <span className="block mt-2">
                <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                  powered by our life&apos;s work
                </span>
              </span>
              <span className="block mt-4 w-20 sm:w-24 h-1.5 bg-gradient-to-r from-primary to-primary/50 rounded-full" aria-hidden />
            </h1>

            <p className="mt-8 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              A unique and powerful software suite to transform the way you work. Designed for businesses of all sizes, built by a company that values your privacy.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <Link
                href="/register"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm sm:text-base rounded-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                GET STARTED FOR FREE
                <ArrowRight className="h-4 w-4 shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden />
              </Link>
              <a
                href="#products-ecosystem"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-background border-2 border-border hover:border-primary/50 text-foreground font-semibold text-sm sm:text-base rounded-lg transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                EXPLORE PRODUCTS
                <ArrowRight className="h-4 w-4 shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden />
              </a>
            </div>

            <div className="mt-12 lg:mt-16 relative overflow-hidden rounded-2xl border border-border bg-muted/30 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700 group hover:shadow-primary/10 transition-shadow">
              <div className="aspect-[16/10] sm:aspect-[2/1] relative">
                <Image
                  src={HERO_IMAGE}
                  alt="Team collaborating at a table with laptops"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" aria-hidden />
                <div className="absolute inset-0 ring-1 ring-inset ring-border rounded-2xl pointer-events-none" aria-hidden />
              </div>
            </div>
          </div>

          <div id="products" className="lg:col-span-5 order-1 lg:order-2 animate-in fade-in slide-in-from-right-4 duration-700 delay-300 scroll-mt-20">
            <div className="lg:sticky lg:top-24 rounded-2xl border border-border bg-card/50 backdrop-blur-sm shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="px-6 py-5 border-b border-border bg-gradient-to-r from-muted/30 to-muted/10">
                <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Featured Apps
                </h2>
              </div>
              <ul className="divide-y divide-border" role="list">
                {FEATURED_APPS.map((app) => {
                  const Icon = app.icon;
                  return (
                    <li key={app.name}>
                      <a
                        href={app.href}
                        className="flex items-start gap-4 px-6 py-4 text-left hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent active:bg-muted/50 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                      >
                        <span className={`shrink-0 mt-0.5 rounded-lg p-2 bg-primary/10 ${app.iconClass} group-hover:bg-primary/20 group-hover:scale-110 transition-all`} aria-hidden>
                          <Icon className="w-5 h-5" strokeWidth={2} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <span className="font-semibold text-foreground text-sm block group-hover:text-primary transition-colors">{app.name}</span>
                          <span className="text-xs text-muted-foreground mt-1 block leading-snug">{app.description}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0 mt-1.5 group-hover:text-primary group-hover:translate-x-1 transition-all" aria-hidden />
                      </a>
                    </li>
                  );
                })}
              </ul>
              <div className="px-6 py-5 border-t border-border bg-gradient-to-r from-muted/10 to-muted/30">
                <a
                  href="#products-ecosystem"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded group"
                >
                  EXPLORE ALL PRODUCTS
                  <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
