import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Twitter, Facebook, Youtube, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const FOOTER_LINKS = {
  'Apps and Extensions': [
    'Mobile Apps',
    'Desktop Apps',
    'Developer Center',
    'Google Workspace Integration',
    'Microsoft 365 Integration',
    'Product Integrations',
    'Browser Extensions',
  ],
  Learn: [
    'Training and Certification',
    'Academy',
    'Blog',
    'Knowledge Base',
    'Newsletter',
  ],
  Community: [
    'User Community',
    'Customer Stories',
    'Work With a Partner',
    'Affiliate Program',
  ],
  Company: [
    'About Us',
    'Our Story',
    'Press',
    'Events',
    'Careers',
  ],
};

const LEGAL_LINKS = [
  'Contact Us',
  'Security',
  'Compliance',
  'Terms of Service',
  'Privacy Policy',
  'Cookie Policy',
  'GDPR Compliance',
];

const SOCIAL_LINKS = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="font-bold text-foreground text-sm mb-4">
                  {heading}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((label) => (
                    <li key={label}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="font-bold text-foreground text-sm mb-4">
                Contact Sales
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="tel:18001031123"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    1800 103 1123
                  </a>
                </li>
                <li>
                  <a
                    href="tel:18005723535"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    1800 572 3535
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:sales@truevalue.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    sales@truevalue.com
                  </a>
                </li>
              </ul>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href="#"
                  className="text-sm font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded group"
                >
                  Support
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded group"
                >
                  Talk to Concierge
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex justify-center items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-card border border-border hover:border-primary/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" strokeWidth={2} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            {LEGAL_LINKS.map((label, index) => (
              <div key={label} className="flex items-center gap-4">
                <a
                  href="#"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  {label}
                </a>
                {index < LEGAL_LINKS.length - 1 && (
                  <span className="text-border">|</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-foreground text-background py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="group">
              <Image
                src="/logo-full.png"
                alt="TrueValue CRM"
                width={120}
                height={32}
                className="h-7 w-auto invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </Link>
            <span className="hidden sm:inline text-background/50">•</span>
            <p className="text-sm text-background/80 text-center">
              © {new Date().getFullYear()}, TrueValue Corporation Pvt. Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
