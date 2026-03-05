export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  billingPeriod: string;
  popular: boolean;
  cta: string;
  features: PricingFeature[];
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small teams getting started with CRM and business tools.',
    price: 14,
    billingPeriod: '/user/month',
    popular: false,
    cta: 'Start Free Trial',
    features: [
      { text: 'Up to 10 users', included: true },
      { text: 'Contact & Lead Management', included: true },
      { text: 'Email Campaigns (500/month)', included: true },
      { text: 'Basic Reporting Dashboard', included: true },
      { text: 'Helpdesk (Email only)', included: true },
      { text: 'Invoicing & Payments', included: true },
      { text: '5 GB Storage', included: true },
      { text: 'Marketing Automation', included: false },
      { text: 'Custom Workflows', included: false },
      { text: 'API Access', included: false },
      { text: 'Priority Support', included: false },
      { text: 'SSO & Advanced Security', included: false },
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'For growing businesses that need advanced automation and integrations.',
    price: 39,
    billingPeriod: '/user/month',
    popular: true,
    cta: 'Start Free Trial',
    features: [
      { text: 'Up to 100 users', included: true },
      { text: 'Contact & Lead Management', included: true },
      { text: 'Email Campaigns (Unlimited)', included: true },
      { text: 'Advanced Reporting & BI', included: true },
      { text: 'Helpdesk (Multi-channel)', included: true },
      { text: 'Invoicing & Subscriptions', included: true },
      { text: '50 GB Storage', included: true },
      { text: 'Marketing Automation', included: true },
      { text: 'Custom Workflows', included: true },
      { text: 'API Access', included: true },
      { text: 'Priority Support', included: false },
      { text: 'SSO & Advanced Security', included: false },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large organizations requiring enterprise-grade security, compliance, and scale.',
    price: 79,
    billingPeriod: '/user/month',
    popular: false,
    cta: 'Contact Sales',
    features: [
      { text: 'Unlimited users', included: true },
      { text: 'Contact & Lead Management', included: true },
      { text: 'Email Campaigns (Unlimited)', included: true },
      { text: 'Advanced Reporting & BI', included: true },
      { text: 'Helpdesk (Multi-channel)', included: true },
      { text: 'Full Billing Suite', included: true },
      { text: 'Unlimited Storage', included: true },
      { text: 'Marketing Automation', included: true },
      { text: 'Custom Workflows', included: true },
      { text: 'API Access', included: true },
      { text: 'Priority Support (24/7)', included: true },
      { text: 'SSO & Advanced Security', included: true },
    ],
  },
];
