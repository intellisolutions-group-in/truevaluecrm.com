import type { LucideIcon } from 'lucide-react';
import {
  LayoutGrid,
  Users,
  TrendingUp,
  Megaphone,
  Mail,
  FileText,
  HelpCircle,
  MessageCircle,
  ListChecks,
  CreditCard,
  Receipt,
  Wallet,
  BarChart3,
  PieChart,
} from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  iconClass: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    id: 'sales',
    name: 'Sales',
    products: [
      {
        id: 'crm',
        name: 'TrueValue CRM',
        description: 'Manage leads, contacts, and deals in one powerful CRM platform built for customer-facing teams.',
        icon: LayoutGrid,
        iconClass: 'text-primary',
      },
      {
        id: 'lead-manager',
        name: 'Lead Manager',
        description: 'Capture, qualify, and nurture leads from multiple channels with intelligent scoring and routing.',
        icon: Users,
        iconClass: 'text-primary',
      },
      {
        id: 'sales-pipeline',
        name: 'Sales Pipeline',
        description: 'Visualize your entire sales process with customizable pipelines, forecasting, and deal tracking.',
        icon: TrendingUp,
        iconClass: 'text-primary',
      },
    ],
  },
  {
    id: 'marketing',
    name: 'Marketing',
    products: [
      {
        id: 'marketing-automation',
        name: 'Marketing Automation',
        description: 'Design multi-channel marketing workflows with triggers, conditions, and automated follow-ups.',
        icon: Megaphone,
        iconClass: 'text-primary',
      },
      {
        id: 'email-campaigns',
        name: 'Email Campaigns',
        description: 'Create, send, and track targeted email campaigns with drag-and-drop templates and A/B testing.',
        icon: Mail,
        iconClass: 'text-primary',
      },
      {
        id: 'landing-page-builder',
        name: 'Landing Page Builder',
        description: 'Build high-converting landing pages with a visual editor, templates, and built-in analytics.',
        icon: FileText,
        iconClass: 'text-primary',
      },
    ],
  },
  {
    id: 'support',
    name: 'Customer Support',
    products: [
      {
        id: 'helpdesk',
        name: 'Helpdesk',
        description: 'Deliver exceptional customer support with a powerful ticketing system and knowledge base.',
        icon: HelpCircle,
        iconClass: 'text-primary',
      },
      {
        id: 'live-chat',
        name: 'Live Chat',
        description: 'Engage website visitors in real-time with proactive chat, chatbots, and visitor tracking.',
        icon: MessageCircle,
        iconClass: 'text-primary',
      },
      {
        id: 'ticket-management',
        name: 'Ticket Management',
        description: 'Organize, prioritize, and resolve customer tickets with SLA management and automation rules.',
        icon: ListChecks,
        iconClass: 'text-primary',
      },
    ],
  },
  {
    id: 'operations',
    name: 'Business Operations',
    products: [
      {
        id: 'invoicing',
        name: 'Invoicing',
        description: 'Create professional invoices, automate billing, and track payments with ease.',
        icon: Receipt,
        iconClass: 'text-primary',
      },
      {
        id: 'subscription-management',
        name: 'Subscription Management',
        description: 'Manage recurring billing, plan changes, and subscription lifecycle from a single dashboard.',
        icon: CreditCard,
        iconClass: 'text-primary',
      },
      {
        id: 'payments',
        name: 'Payments',
        description: 'Accept payments globally with a unified payment gateway supporting multiple currencies.',
        icon: Wallet,
        iconClass: 'text-primary',
      },
    ],
  },
  {
    id: 'analytics',
    name: 'Analytics',
    products: [
      {
        id: 'business-intelligence',
        name: 'Business Intelligence',
        description: 'Transform raw data into actionable insights with interactive dashboards and custom reports.',
        icon: BarChart3,
        iconClass: 'text-primary',
      },
      {
        id: 'reporting-dashboard',
        name: 'Reporting Dashboard',
        description: 'Monitor KPIs in real-time with customizable dashboards, scheduled reports, and data exports.',
        icon: PieChart,
        iconClass: 'text-primary',
      },
    ],
  },
];
