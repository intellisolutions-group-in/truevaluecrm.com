import { ShieldCheck, Play, Lock, Eye, FileCheck } from 'lucide-react';

const PRIVACY_FEATURES = [
  { icon: Lock, label: 'Data Encryption' },
  { icon: Eye, label: 'No Data Tracking' },
  { icon: FileCheck, label: 'GDPR Compliant' },
];

export default function PrivacySection() {
  return (
    <section className="bg-gradient-to-b from-background to-muted/20 py-16 sm:py-20 border-t border-border relative overflow-hidden" aria-labelledby="privacy-heading">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent text-primary p-5 mb-8 shadow-xl shadow-primary/20 group hover:scale-110 transition-all">
          <ShieldCheck className="h-12 w-12" strokeWidth={2} aria-hidden />
        </div>
        <h2 id="privacy-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
          Your privacy is{' '}
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            our responsibility
          </span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          We believe that trust is paramount in a relationship. We do not own or sell your data, and we most certainly do not bank on advertising-based business models. The only way we make money is from the software license fees you pay us.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {PRIVACY_FEATURES.map((feature) => {
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

        <button
          type="button"
          className="mt-10 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-primary bg-background text-foreground font-semibold text-sm uppercase tracking-wider hover:bg-primary/5 hover:scale-105 shadow-lg hover:shadow-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 group"
          aria-label="Watch privacy video"
        >
          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Play className="h-5 w-5 fill-primary text-primary" aria-hidden />
          </div>
          WATCH VIDEO
        </button>
      </div>
    </section>
  );
}
