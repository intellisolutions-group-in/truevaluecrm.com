'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronDown,
  Search,
  Handshake,
  Building2,
  ChevronRight,
  X,
  LayoutGrid,
  BarChart3,
  Users,
  FileSpreadsheet,
  Megaphone,
  ShoppingCart,
  Headphones,
  Wallet,
  Mail,
  Briefcase,
  Scale,
  Shield,
  FolderKanban,
  Code2,
  Cpu,
  Package,
  Globe,
  CreditCard,
  MessageSquare,
  FileSignature,
  MapPin,
  Calendar,
  TrendingUp,
  Share2,
  ListChecks,
  Workflow,
  Layout,
  Video,
  Target,
  FileText,
  Link2,
  UsersRound,
  Send,
  CalendarDays,
  BookOpen,
  Receipt,
  HelpCircle,
  Monitor,
  Truck,
  Scan,
  FolderOpen,
  MessageCircle,
  GraduationCap,
  Inbox,
  Table,
  Book,
  Presentation,
  ListTodo,
  Clock,
  Sparkles,
  Lock,
  FolderTree,
  Bot,
  FlaskConical,
  Key,
  Wrench,
  Bug,
  GitBranch,
  Database,
  Activity,
  type LucideIcon,
} from 'lucide-react';

type ProductTabId = 'apps' | 'suites' | 'truevalue-one' | 'marketplace';

const PRODUCT_TABS: { id: ProductTabId; label: string }[] = [
  { id: 'apps', label: 'Apps' },
  { id: 'suites', label: 'Suites' },
  { id: 'truevalue-one', label: 'TrueValue One' },
  { id: 'marketplace', label: 'Marketplace' },
];

type ProductCategoryId =
  | 'recent'
  | 'sales'
  | 'marketing'
  | 'commerce-pos'
  | 'service'
  | 'finance'
  | 'email-storage-collab'
  | 'hr'
  | 'legal'
  | 'security-it'
  | 'bi-analytics'
  | 'project-mgmt'
  | 'developer'
  | 'iot'
  | 'erp';

interface ProductCard {
  id: string;
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
  iconClass: string;
  tag?: 'NEW' | 'SUITES' | 'FREE';
}

const PRODUCT_CATEGORIES: { id: ProductCategoryId; label: string; products: ProductCard[] }[] = [
  {
    id: 'recent',
    label: 'Recent Launches',
    products: [
      { id: 'erp', name: 'ERP', description: 'ERP software built for businesses to run faster and smarter operations.', href: '#products-erp', icon: Package, iconClass: 'text-primary' },
      { id: 'procurement', name: 'Procurement', description: 'Complete source-to-pay platform to transform your procurement into a growth engine.', href: '#products-procurement', icon: ShoppingCart, iconClass: 'text-primary' },
      { id: 'truevalue-spend', name: 'TrueValue Spend', description: 'Manage and control every business spend from a single unified platform.', href: '#products-spend', icon: Wallet, iconClass: 'text-primary' },
      { id: 'truevalue-mcp', name: 'TrueValue MCP', description: 'Make apps agent-ready, build agentic workflows, and get work done with prompts.', href: '#products-mcp', icon: Cpu, iconClass: 'text-primary' },
      { id: 'pos', name: 'POS', description: 'Modern retail POS to sell better, manage your entire business, and join the digital revolution.', href: '#products-pos', icon: ShoppingCart, iconClass: 'text-secondary-foreground' },
      { id: 'truevalue-domains', name: 'TrueValue Domains', description: 'Easy domain registration, transfer, and secured DNS management.', href: '#products-domains', icon: Globe, iconClass: 'text-primary' },
      { id: 'truevalue-payments', name: 'TrueValue Payments', description: 'Unified payment solution built for all businesses.', href: '#products-payments', icon: CreditCard, iconClass: 'text-primary' },
      { id: 'truevalue-research-studio', name: 'TrueValue Research Studio', description: 'Cloud-based qualitative data analysis tool.', href: '#products-research-studio', icon: BarChart3, iconClass: 'text-secondary-foreground' },
      { id: 'truevalue-projects-plus', name: 'TrueValue Projects Plus', description: 'Unified project management platform for intelligent, data-driven work.', href: '#products-projects-plus', icon: FolderKanban, iconClass: 'text-primary', tag: 'SUITES' },
      { id: 'truevalue-dap', name: 'TrueValue DAP', description: 'Platform to simplify software adoption with in-product guidance.', href: '#products-dap', icon: MessageSquare, iconClass: 'text-primary', tag: 'SUITES' },
    ],
  },
  {
    id: 'sales',
    label: 'Sales',
    products: [
      { id: 'crm', name: 'CRM', description: 'Comprehensive CRM platform for customer-facing teams.', href: '#products-crm', icon: LayoutGrid, iconClass: 'text-primary' },
      { id: 'bigin', name: 'Bigin', description: 'Simple CRM for small businesses moving from spreadsheets.', href: '#products-bigin', icon: Users, iconClass: 'text-primary' },
      { id: 'sign', name: 'Sign', description: 'Digital signature app for businesses.', href: '#products-sign', icon: FileSignature, iconClass: 'text-primary' },
      { id: 'salesiq', name: 'SalesIQ', description: 'Live chat app to engage and convert website visitors.', href: '#products-salesiq', icon: MessageSquare, iconClass: 'text-primary' },
      { id: 'forms', name: 'Forms', description: 'Build online forms for every business need.', href: '#products-forms', icon: FileSpreadsheet, iconClass: 'text-primary' },
      { id: 'routeiq', name: 'RouteIQ', description: 'Comprehensive sales map visualization and optimal route planning solution.', href: '#products-routeiq', icon: MapPin, iconClass: 'text-primary' },
      { id: 'pos-sales', name: 'POS', description: 'Modern retail POS to sell better, manage your entire business, and join the digital revolution.', href: '#products-pos', icon: ShoppingCart, iconClass: 'text-secondary-foreground', tag: 'NEW' },
      { id: 'bookings', name: 'Bookings', description: 'Appointment scheduling app for consultations with customers.', href: '#products-bookings', icon: Calendar, iconClass: 'text-primary' },
      { id: 'thrive', name: 'Thrive', description: 'Loyalty platform to reward, retain, and grow your customer base.', href: '#products-thrive', icon: TrendingUp, iconClass: 'text-primary' },
      { id: 'dap', name: 'DAP', description: 'Platform to simplify software adoption with in-product guidance.', href: '#products-dap', icon: MessageSquare, iconClass: 'text-primary', tag: 'NEW' },
      { id: 'crm-plus', name: 'CRM Plus', description: 'Unified platform to deliver top-notch customer experience.', href: '#products-crm-plus', icon: LayoutGrid, iconClass: 'text-primary', tag: 'SUITES' },
    ],
  },
  {
    id: 'marketing',
    label: 'Marketing',
    products: [
      { id: 'campaigns', name: 'Campaigns', description: 'Create, send, and track targeted email campaigns that drive sales.', href: '#products-campaigns', icon: Megaphone, iconClass: 'text-primary' },
      { id: 'sign-marketing', name: 'Sign', description: 'Digital signature app for businesses.', href: '#products-sign', icon: FileSignature, iconClass: 'text-primary' },
      { id: 'salesiq-marketing', name: 'SalesIQ', description: 'Live chat app to engage and convert website visitors.', href: '#products-salesiq', icon: MessageSquare, iconClass: 'text-primary' },
      { id: 'forms-marketing', name: 'Forms', description: 'Build online forms for every business need.', href: '#products-forms', icon: FileSpreadsheet, iconClass: 'text-primary' },
      { id: 'backstage', name: 'Backstage', description: 'End-to-end event management software.', href: '#products-backstage', icon: CalendarDays, iconClass: 'text-primary' },
      { id: 'social', name: 'Social', description: 'All-in-one social media management software.', href: '#products-social', icon: Share2, iconClass: 'text-primary' },
      { id: 'survey', name: 'Survey', description: 'Design surveys to reach and interact with your audience.', href: '#products-survey', icon: ListChecks, iconClass: 'text-primary' },
      { id: 'marketing-automation', name: 'Marketing Automation', description: 'All-in-one marketing automation software.', href: '#products-marketing-automation', icon: Workflow, iconClass: 'text-primary' },
      { id: 'sites', name: 'Sites', description: 'Online website builder with extensive customisation options.', href: '#products-sites', icon: Layout, iconClass: 'text-primary' },
      { id: 'webinar', name: 'Webinar', description: 'Webinar platform for webcasting online webinars.', href: '#products-webinar', icon: Video, iconClass: 'text-primary' },
      { id: 'pagesense', name: 'PageSense', description: 'Website conversion optimization and personalisation platform.', href: '#products-pagesense', icon: Target, iconClass: 'text-primary' },
      { id: 'landingpage', name: 'LandingPage', description: 'Smart landing page builder to increase conversion rates.', href: '#products-landingpage', icon: FileText, iconClass: 'text-primary' },
      { id: 'leadchain', name: 'LeadChain', description: 'Sync, manage, and convert leads across channels seamlessly.', href: '#products-leadchain', icon: Link2, iconClass: 'text-primary' },
      { id: 'domains-marketing', name: 'Domains', description: 'Easy domain registration, transfer, and secured DNS management.', href: '#products-domains', icon: Globe, iconClass: 'text-primary', tag: 'NEW' },
      { id: 'communityspaces', name: 'CommunitySpaces', description: 'Online community platform for individuals and businesses to grow their network and brand.', href: '#products-communityspaces', icon: UsersRound, iconClass: 'text-primary' },
      { id: 'publish', name: 'Publish', description: 'Manage all your local business listings on a single platform.', href: '#products-publish', icon: Send, iconClass: 'text-primary' },
      { id: 'thrive-marketing', name: 'Thrive', description: 'Loyalty platform to reward, retain, and grow your customer base.', href: '#products-thrive', icon: TrendingUp, iconClass: 'text-primary' },
      { id: 'marketing-plus', name: 'Marketing Plus', description: 'Unified marketing platform for marketing teams.', href: '#products-marketing-plus', icon: Megaphone, iconClass: 'text-primary', tag: 'SUITES' },
    ],
  },
  {
    id: 'commerce-pos',
    label: 'Commerce and POS',
    products: [
      { id: 'commerce', name: 'Commerce', description: 'eCommerce platform to manage and market your online store.', href: '#products-commerce', icon: ShoppingCart, iconClass: 'text-primary' },
      { id: 'pos-commerce', name: 'POS', description: 'Modern retail POS to sell better, manage your entire business, and join the digital revolution.', href: '#products-pos', icon: ShoppingCart, iconClass: 'text-secondary-foreground', tag: 'NEW' },
    ],
  },
  {
    id: 'service',
    label: 'Service',
    products: [
      { id: 'desk', name: 'Desk', description: 'Helpdesk software to deliver great customer support.', href: '#products-desk', icon: HelpCircle, iconClass: 'text-primary' },
      { id: 'assist', name: 'Assist', description: 'Remote support and unattended remote access software.', href: '#products-assist', icon: Monitor, iconClass: 'text-primary' },
      { id: 'salesiq-service', name: 'SalesIQ', description: 'Live chat app to engage and convert website visitors.', href: '#products-salesiq', icon: MessageSquare, iconClass: 'text-primary' },
      { id: 'bookings-service', name: 'Bookings', description: 'Appointment scheduling app for consultations with customers.', href: '#products-bookings', icon: Calendar, iconClass: 'text-primary' },
      { id: 'fsm', name: 'FSM', description: 'End-to-end field service management platform for service businesses.', href: '#products-fsm', icon: Truck, iconClass: 'text-primary' },
      { id: 'lens', name: 'Lens', description: 'Interactive remote assistance software with augmented reality.', href: '#products-lens', icon: Scan, iconClass: 'text-primary' },
      { id: 'service-plus', name: 'Service Plus', description: 'Unified platform for customer service and support teams.', href: '#products-service-plus', icon: Headphones, iconClass: 'text-primary', tag: 'SUITES' },
    ],
  },
  {
    id: 'finance',
    label: 'Finance',
    products: [
      { id: 'books', name: 'Books', description: 'Powerful accounting platform for growing businesses.', href: '#products-books', icon: BookOpen, iconClass: 'text-primary' },
      { id: 'payroll', name: 'Payroll', description: 'Effortless payroll processing software for businesses.', href: '#products-payroll', icon: Wallet, iconClass: 'text-primary' },
      { id: 'expense', name: 'Expense', description: 'Effortless expense reporting platform.', href: '#products-expense', icon: Receipt, iconClass: 'text-primary' },
      { id: 'inventory', name: 'Inventory', description: 'Powerful stock management and inventory control software.', href: '#products-inventory', icon: Package, iconClass: 'text-primary' },
      { id: 'sign-finance', name: 'Sign', description: 'Digital signature app for businesses.', href: '#products-sign', icon: FileSignature, iconClass: 'text-primary' },
      { id: 'billing', name: 'Billing', description: 'End-to-end billing solution for your business.', href: '#products-billing', icon: CreditCard, iconClass: 'text-primary' },
      { id: 'commerce-finance', name: 'Commerce', description: 'eCommerce platform to manage and market your online store.', href: '#products-commerce', icon: ShoppingCart, iconClass: 'text-primary' },
      { id: 'invoice', name: 'Invoice', description: '100% Free invoicing solution.', href: '#products-invoice', icon: FileText, iconClass: 'text-primary', tag: 'FREE' },
      { id: 'practice', name: 'Practice', description: 'Practice management software for accounting firms.', href: '#products-practice', icon: Briefcase, iconClass: 'text-primary' },
      { id: 'checkout', name: 'Checkout', description: 'Collect payments online with custom branded pages.', href: '#products-checkout', icon: CreditCard, iconClass: 'text-secondary-foreground' },
      { id: 'payments-finance', name: 'Payments', description: 'Unified payment solution built for all businesses.', href: '#products-payments', icon: CreditCard, iconClass: 'text-primary', tag: 'NEW' },
      { id: 'spend', name: 'Spend', description: 'Manage and control every business spend from a single unified platform.', href: '#products-spend', icon: Wallet, iconClass: 'text-primary', tag: 'NEW' },
      { id: 'erp-finance', name: 'ERP', description: 'ERP software built for businesses to run faster and smarter operations.', href: '#products-erp', icon: Package, iconClass: 'text-primary', tag: 'NEW' },
      { id: 'procurement-finance', name: 'Procurement', description: 'Complete source-to-pay platform to transform your procurement into a growth engine.', href: '#products-procurement', icon: ShoppingCart, iconClass: 'text-primary', tag: 'NEW' },
      { id: 'finance-plus', name: 'Finance Plus', description: 'All-in-one suite to manage your operations and finances.', href: '#products-finance-plus', icon: BookOpen, iconClass: 'text-primary', tag: 'SUITES' },
    ],
  },
  {
    id: 'email-storage-collab',
    label: 'Email, Storage, and Collaboration',
    products: [
      { id: 'mail', name: 'Mail', description: 'Secure email service for teams of all sizes.', href: '#products-mail', icon: Mail, iconClass: 'text-primary' },
      { id: 'sign-collab', name: 'Sign', description: 'Digital signature app for businesses.', href: '#products-sign', icon: FileSignature, iconClass: 'text-primary' },
      { id: 'workdrive', name: 'WorkDrive', description: 'Online file management for teams.', href: '#products-workdrive', icon: FolderOpen, iconClass: 'text-primary' },
      { id: 'connect', name: 'Connect', description: 'Employee experience platform to communicate, engage, and build positive employee relations.', href: '#products-connect', icon: UsersRound, iconClass: 'text-primary' },
      { id: 'cliq', name: 'Cliq', description: 'Stay in touch with teams no matter where you are.', href: '#products-cliq', icon: MessageCircle, iconClass: 'text-primary' },
      { id: 'meeting', name: 'Meeting', description: 'Online meeting software for all your video conferencing & webinar needs.', href: '#products-meeting', icon: Video, iconClass: 'text-primary' },
      { id: 'learn', name: 'Learn', description: 'Knowledge and learning management platform.', href: '#products-learn', icon: GraduationCap, iconClass: 'text-primary' },
      { id: 'teaminbox', name: 'TeamInbox', description: 'Shared inboxes for teams.', href: '#products-teaminbox', icon: Inbox, iconClass: 'text-primary' },
      { id: 'writer', name: 'Writer', description: 'Word processor for focused writing and discussions.', href: '#products-writer', icon: FileText, iconClass: 'text-primary' },
      { id: 'tables', name: 'Tables', description: 'Modern spreadsheet-database hybrid to organize work and data.', href: '#products-tables', icon: Table, iconClass: 'text-primary' },
      { id: 'notebook', name: 'Notebook', description: 'Beautiful home for all your notes.', href: '#products-notebook', icon: Book, iconClass: 'text-primary' },
      { id: 'show', name: 'Show', description: 'Create, edit, and share slides with a sleek presentation app.', href: '#products-show', icon: Presentation, iconClass: 'text-primary' },
      { id: 'sheet', name: 'Sheet', description: 'Spreadsheet software for collaborative teams.', href: '#products-sheet', icon: FileSpreadsheet, iconClass: 'text-primary' },
      { id: 'calendar-collab', name: 'Calendar', description: 'Online business calendar to manage events and schedule appointments.', href: '#products-calendar', icon: Calendar, iconClass: 'text-secondary-foreground' },
      { id: 'todo', name: 'ToDo', description: 'Collaborative task management for individuals and teams.', href: '#products-todo', icon: ListTodo, iconClass: 'text-primary' },
      { id: 'workplace', name: 'Workplace', description: 'Application suite built to improve team productivity and collaboration.', href: '#products-workplace', icon: LayoutGrid, iconClass: 'text-primary', tag: 'SUITES' },
    ],
  },
  {
    id: 'hr',
    label: 'Human Resources',
    products: [
      { id: 'people', name: 'People', description: 'Organize, automate, and simplify your HR processes.', href: '#products-people', icon: Users, iconClass: 'text-primary' },
      { id: 'payroll-hr', name: 'Payroll', description: 'Effortless payroll processing software for businesses.', href: '#products-payroll', icon: Wallet, iconClass: 'text-primary' },
      { id: 'expense-hr', name: 'Expense', description: 'Effortless expense reporting platform.', href: '#products-expense', icon: Receipt, iconClass: 'text-primary' },
      { id: 'recruit', name: 'Recruit', description: 'Intuitive recruiting platform built to provide hiring solutions.', href: '#products-recruit', icon: Users, iconClass: 'text-secondary-foreground' },
      { id: 'workerly', name: 'Workerly', description: 'Manage temporary staffing with an employee scheduling solution.', href: '#products-workerly', icon: Calendar, iconClass: 'text-primary' },
      { id: 'shifts', name: 'Shifts', description: 'Employee scheduling and time tracking app.', href: '#products-shifts', icon: Clock, iconClass: 'text-primary' },
      { id: 'people-plus', name: 'People Plus', description: 'Comprehensive HR platform for seamless employee experiences.', href: '#products-people-plus', icon: Briefcase, iconClass: 'text-primary', tag: 'SUITES' },
    ],
  },
  {
    id: 'legal',
    label: 'Legal',
    products: [
      { id: 'sign-legal', name: 'Sign', description: 'Digital signature app for businesses.', href: '#products-sign', icon: FileSignature, iconClass: 'text-primary' },
      { id: 'contracts', name: 'Contracts', description: 'Comprehensive contract lifecycle management software.', href: '#products-contracts', icon: Scale, iconClass: 'text-primary' },
    ],
  },
  {
    id: 'security-it',
    label: 'Security and IT Management',
    products: [
      { id: 'creator', name: 'Creator', description: 'AI-powered platform to build custom business apps.', href: '#products-creator', icon: Sparkles, iconClass: 'text-primary' },
      { id: 'assist-it', name: 'Assist', description: 'Remote support and unattended remote access software.', href: '#products-assist', icon: Monitor, iconClass: 'text-primary' },
      { id: 'vault', name: 'Vault', description: 'Online password manager for teams.', href: '#products-vault', icon: Lock, iconClass: 'text-primary' },
      { id: 'eprotect', name: 'eProtect', description: 'Comprehensive email security and archiving for every business.', href: '#products-eprotect', icon: Shield, iconClass: 'text-primary' },
      { id: 'directory', name: 'Directory', description: 'Workforce identity and access management solution for cloud businesses.', href: '#products-directory', icon: FolderTree, iconClass: 'text-primary' },
      { id: 'catalyst', name: 'Catalyst', description: 'Pro-code platform to build and deploy your apps.', href: '#products-catalyst', icon: Code2, iconClass: 'text-primary' },
      { id: 'rpa', name: 'RPA', description: 'Automate manual, tedious, and repetitive tasks easily.', href: '#products-rpa', icon: Bot, iconClass: 'text-primary' },
      { id: 'qengine', name: 'QEngine', description: 'Test automation software to build, manage, execute, and report testcases.', href: '#products-qengine', icon: FlaskConical, iconClass: 'text-primary' },
      { id: 'lens-it', name: 'Lens', description: 'Interactive remote assistance software with augmented reality.', href: '#products-lens', icon: Scan, iconClass: 'text-primary' },
      { id: 'oneauth', name: 'OneAuth', description: 'Secure multi-factor authenticator (MFA) for all your online accounts.', href: '#products-oneauth', icon: Key, iconClass: 'text-primary', tag: 'FREE' },
      { id: 'toolkit', name: 'Toolkit', description: 'Complete resource for any admin-related lookup queries.', href: '#products-toolkit', icon: Wrench, iconClass: 'text-primary' },
    ],
  },
  {
    id: 'bi-analytics',
    label: 'BI and Analytics',
    products: [
      { id: 'analytics', name: 'Analytics', description: 'Modern self-service BI and analytics platform.', href: '#products-analytics', icon: BarChart3, iconClass: 'text-primary' },
      { id: 'iot-bi', name: 'IoT', description: 'Harnessing IoT analytics for real-time operational intelligence.', href: '#products-iot', icon: Cpu, iconClass: 'text-primary' },
      { id: 'dataprep', name: 'DataPrep', description: 'AI-powered ETL tool for effective data integration and movement.', href: '#products-dataprep', icon: Database, iconClass: 'text-primary' },
      { id: 'embedded-bi', name: 'Embedded BI', description: 'Embedded analytics and white label BI solutions, tailored for your needs.', href: '#products-embedded-bi', icon: BarChart3, iconClass: 'text-secondary-foreground' },
      { id: 'ai-dashboard', name: 'AI Dashboard Generator', description: 'AI-powered dashboard creation for instant insights with zero setup.', href: '#products-ai-dashboard-generator', icon: Sparkles, iconClass: 'text-primary', tag: 'FREE' },
    ],
  },
  {
    id: 'project-mgmt',
    label: 'Project Management',
    products: [
      { id: 'projects', name: 'Projects', description: 'Manage, track, and collaborate on projects with teams.', href: '#products-projects', icon: FolderKanban, iconClass: 'text-primary' },
      { id: 'sprints', name: 'Sprints', description: 'Planning and tracking tool for scrum teams.', href: '#products-sprints', icon: FolderKanban, iconClass: 'text-secondary-foreground' },
      { id: 'bugtracker', name: 'BugTracker', description: 'Automatic bug tracking software for managing bugs.', href: '#products-bugtracker', icon: Bug, iconClass: 'text-primary' },
      { id: 'dap-pm', name: 'DAP', description: 'Platform to simplify software adoption with in-product guidance.', href: '#products-dap', icon: MessageSquare, iconClass: 'text-primary', tag: 'NEW' },
      { id: 'projects-plus', name: 'Projects Plus', description: 'Unified project management platform for intelligent, data-driven work.', href: '#products-projects-plus', icon: FolderKanban, iconClass: 'text-primary', tag: 'SUITES' },
    ],
  },
  {
    id: 'developer',
    label: 'Developer Platforms',
    products: [
      { id: 'creator-dev', name: 'Creator', description: 'AI-powered platform to build custom business apps.', href: '#products-creator', icon: Sparkles, iconClass: 'text-primary' },
      { id: 'iot-dev', name: 'IoT', description: 'Build, deploy, and scale IoT solutions for connected businesses.', href: '#products-iot', icon: Cpu, iconClass: 'text-primary' },
      { id: 'flow', name: 'Flow', description: 'Automate business workflows by creating smart integrations.', href: '#products-flow', icon: GitBranch, iconClass: 'text-primary' },
      { id: 'catalyst-dev', name: 'Catalyst', description: 'Pro-code platform to build and deploy your apps.', href: '#products-catalyst', icon: Code2, iconClass: 'text-primary' },
      { id: 'dataprep-dev', name: 'DataPrep', description: 'AI-powered ETL tool for effective data integration and movement.', href: '#products-dataprep', icon: Database, iconClass: 'text-primary' },
      { id: 'tables-dev', name: 'Tables', description: 'Modern spreadsheet-database hybrid to organize work and data.', href: '#products-tables', icon: Table, iconClass: 'text-primary' },
      { id: 'rpa-dev', name: 'RPA', description: 'Automate manual, tedious, and repetitive tasks easily.', href: '#products-rpa', icon: Bot, iconClass: 'text-primary' },
      { id: 'qengine-dev', name: 'QEngine', description: 'Test automation software to build, manage, execute, and report testcases.', href: '#products-qengine', icon: FlaskConical, iconClass: 'text-primary' },
      { id: 'apptics', name: 'Apptics', description: 'Application analytics for all apps.', href: '#products-apptics', icon: Activity, iconClass: 'text-primary' },
      { id: 'mcp', name: 'MCP', description: 'Make apps agent-ready, build agentic workflows, and get work done with prompts.', href: '#products-mcp', icon: Cpu, iconClass: 'text-primary', tag: 'NEW' },
    ],
  },
  {
    id: 'iot',
    label: 'IoT',
    products: [
      { id: 'iot', name: 'IoT', description: 'Low-code IoT platform and solutions for connected businesses.', href: '#products-iot', icon: Cpu, iconClass: 'text-primary' },
    ],
  },
  {
    id: 'erp',
    label: 'ERP',
    products: [
      { id: 'erp-cat', name: 'ERP', description: 'ERP software built for businesses to run faster and smarter operations.', href: '#products-erp', icon: Package, iconClass: 'text-primary', tag: 'NEW' },
    ],
  },
];

const SUITE_PRODUCTS: ProductCard[] = [
  { id: 'crm-plus', name: 'CRM Plus', description: 'Unified platform to deliver top-notch customer experience.', href: '#suites-crm-plus', icon: LayoutGrid, iconClass: 'text-primary' },
  { id: 'service-plus', name: 'Service Plus', description: 'Unified platform for customer service and support teams.', href: '#suites-service-plus', icon: Headphones, iconClass: 'text-primary' },
  { id: 'finance-plus', name: 'Finance Plus', description: 'All-in-one suite to manage your operations and finances.', href: '#suites-finance-plus', icon: BookOpen, iconClass: 'text-primary' },
  { id: 'people-plus', name: 'People Plus', description: 'Comprehensive HR platform for seamless employee experiences.', href: '#suites-people-plus', icon: Users, iconClass: 'text-primary' },
  { id: 'workplace', name: 'Workplace', description: 'Application suite built to improve team productivity and collaboration.', href: '#suites-workplace', icon: LayoutGrid, iconClass: 'text-primary' },
  { id: 'marketing-plus', name: 'Marketing Plus', description: 'Unified marketing platform for marketing teams.', href: '#suites-marketing-plus', icon: Megaphone, iconClass: 'text-primary' },
  { id: 'projects-plus', name: 'Projects Plus', description: 'Unified project management platform for intelligent, data-driven work.', href: '#suites-projects-plus', icon: FolderKanban, iconClass: 'text-primary' },
];

const NAV_DROPDOWNS: Record<string, { label: string; href: string }[]> = {
  Customers: [
    { label: 'Customer Stories', href: '#customers-stories' },
    { label: 'User Community', href: '#customers-community' },
    { label: 'Training and Certification', href: '#customers-training' },
    { label: 'Affiliate Program', href: '#customers-affiliate' },
  ],
};

const PARTNERS_CARDS = [
  {
    title: 'Work with a Partner',
    description: 'Find and work with a partner to get expert help in every step of your journey.',
    linkText: 'Work with a Partner',
    href: '#partners-find',
    icon: Handshake,
    iconClass: 'text-primary',
  },
  {
    title: 'Become a Partner',
    description: 'Scale your business by helping our users worldwide get the best out of our platform.',
    linkText: 'Become a Partner',
    href: '#partners-become',
    icon: Building2,
    iconClass: 'text-secondary-foreground',
  },
];

const RESOURCES_SECTIONS = {
  LEARN: [
    { label: 'Security Solutions', href: '#resources-security' },
    { label: 'Developer Center', href: '#resources-developer' },
    { label: 'Blog', href: '#resources-blog' },
    { label: 'Zia', href: '#resources-zia' },
    { label: 'Newsletter', href: '#resources-newsletter' },
    { label: 'The Long Game', href: '#resources-long-game' },
  ],
  SUPPORT: [
    { label: 'Knowledge Base', href: '#resources-knowledge-base' },
    { label: 'Concierge', href: '#resources-concierge' },
    { label: 'Contact Us', href: '#resources-contact' },
  ],
};

const NAV_ORDER = ['Products', 'Enterprise', 'Customers', 'Partners', 'Resources'] as const;

export default function StaticNavbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [productsTab, setProductsTab] = useState<ProductTabId>('apps');
  const [productsCategory, setProductsCategory] = useState<ProductCategoryId>('recent');
  const [productsSearch, setProductsSearch] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const productsSearchRef = useRef<HTMLInputElement>(null);
  const closeDropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimeout = () => {
    if (closeDropdownTimeoutRef.current) {
      clearTimeout(closeDropdownTimeoutRef.current);
      closeDropdownTimeoutRef.current = null;
    }
  };
  const scheduleClose = () => {
    clearCloseTimeout();
    closeDropdownTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSearchOpen(false);
    };
    if (searchOpen) {
      document.addEventListener('keydown', onEscape);
      return () => document.removeEventListener('keydown', onEscape);
    }
  }, [searchOpen]);

  useEffect(() => {
    if (openDropdown === 'Products') productsSearchRef.current?.focus();
  }, [openDropdown]);

  return (
    <nav className="fixed w-full bg-background border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/logo-full.png"
                alt="TrueValue CRM"
                width={160}
                height={45}
                className="h-9 w-auto group-hover:opacity-90 transition-opacity"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center gap-8">
              {NAV_ORDER.map((key) =>
                key !== 'Enterprise' ? (
                  <div
                    key={key}
                    className="relative"
                    onMouseEnter={() => {
                      clearCloseTimeout();
                      setOpenDropdown(key);
                      if (key === 'Products') setProductsSearch('');
                    }}
                    onMouseLeave={() => (key === 'Products' ? scheduleClose() : setOpenDropdown(null))}
                  >
                    <button
                      type="button"
                      className="flex items-center gap-1 text-foreground hover:text-primary font-medium text-sm transition-colors"
                    >
                      {key}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === key ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === key && (
                      key === 'Products' ? (
                        <div
                          className="fixed left-0 right-0 top-16 z-30 bg-popover border-b border-border shadow-lg max-h-[calc(100vh-4rem)] flex flex-col"
                          onMouseEnter={clearCloseTimeout}
                          onMouseLeave={scheduleClose}
                        >
                          <div className="flex items-center justify-between gap-4 px-6 py-3 border-b border-border shrink-0">
                            <div className="flex items-center gap-6">
                              {PRODUCT_TABS.map((tab) => (
                                <button
                                  key={tab.id}
                                  type="button"
                                  onClick={() => setProductsTab(tab.id)}
                                  className={`relative pb-1 text-sm font-medium transition-colors ${
                                    productsTab === tab.id
                                      ? 'text-primary'
                                      : 'text-muted-foreground hover:text-foreground'
                                  }`}
                                >
                                  {tab.label}
                                  {productsTab === tab.id && (
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                                  )}
                                </button>
                              ))}
                            </div>
                            <div className="flex items-center gap-4">
                              <Link
                                href="#products-ecosystem"
                                onClick={() => setOpenDropdown(null)}
                                className="text-sm font-medium text-primary hover:underline"
                              >
                                EXPLORE ALL PRODUCTS <ChevronRight className="w-4 h-4 inline" />
                              </Link>
                              <button
                                type="button"
                                onClick={() => setOpenDropdown(null)}
                                className="p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted transition-colors"
                                aria-label="Close products menu"
                              >
                                <X className="w-5 h-5" />
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-1 min-h-0 overflow-hidden">
                            {productsTab === 'apps' ? (
                              <>
                                <div className="w-56 sm:w-64 shrink-0 border-r border-border flex flex-col overflow-hidden">
                                  <div className="p-3 border-b border-border">
                                    <div className="flex items-center gap-2 rounded-md border border-input bg-background px-3 py-2">
                                      <Search className="w-4 h-4 text-muted-foreground shrink-0" />
                                      <input
                                        ref={productsSearchRef}
                                        type="search"
                                        placeholder="I'm looking for..."
                                        value={productsSearch}
                                        onChange={(e) => setProductsSearch(e.target.value)}
                                        className="flex-1 min-w-0 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                                      />
                                    </div>
                                  </div>
                                  <nav className="flex-1 overflow-y-auto p-2">
                                    {PRODUCT_CATEGORIES.map((cat) => {
                                      const isActive = productsCategory === cat.id;
                                      return (
                                        <button
                                          key={cat.id}
                                          type="button"
                                          onClick={() => setProductsCategory(cat.id)}
                                          onMouseEnter={() => setProductsCategory(cat.id)}
                                          className={`flex w-full items-center justify-between gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors ${
                                            isActive
                                              ? 'bg-primary/10 text-primary font-medium'
                                              : 'text-foreground hover:bg-muted'
                                          }`}
                                        >
                                          {cat.label}
                                          {isActive && <ChevronRight className="w-4 h-4 shrink-0" />}
                                        </button>
                                      );
                                    })}
                                  </nav>
                                  <div className="p-3 border-t border-border shrink-0">
                                    <Link
                                      href="#products-ecosystem"
                                      onClick={() => setOpenDropdown(null)}
                                      className="flex w-full items-center justify-center gap-1.5 rounded-md bg-primary/10 px-3 py-2.5 text-sm font-semibold text-primary hover:bg-primary/20 transition-colors"
                                    >
                                      EXPLORE ALL PRODUCTS <ChevronRight className="w-4 h-4" />
                                    </Link>
                                  </div>
                                </div>
                                <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                                  {(() => {
                                    const category = PRODUCT_CATEGORIES.find((c) => c.id === productsCategory);
                                    if (!category) return null;
                                    const filtered = productsSearch.trim()
                                      ? category.products.filter(
                                          (p) =>
                                            p.name.toLowerCase().includes(productsSearch.toLowerCase()) ||
                                            p.description.toLowerCase().includes(productsSearch.toLowerCase())
                                        )
                                      : category.products;
                                    return (
                                      <>
                                        <h3 className="text-base sm:text-lg font-semibold text-foreground mb-4">{category.label}</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                                          {filtered.map((product) => {
                                            const Icon = product.icon;
                                            return (
                                              <button
                                                key={product.id}
                                                type="button"
                                                onClick={() => setOpenDropdown(null)}
                                                className="flex flex-col p-3 sm:p-4 rounded-lg border border-border bg-card hover:border-primary/30 hover:bg-muted transition-colors group text-left"
                                              >
                                                <div className="flex items-center gap-2 mb-2">
                                                  {product.tag && (
                                                    <span
                                                      className={`text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded ${
                                                        product.tag === 'NEW'
                                                          ? 'bg-success/20 text-success'
                                                          : product.tag === 'FREE'
                                                            ? 'bg-muted text-muted-foreground'
                                                            : 'bg-primary/10 text-primary'
                                                      }`}
                                                    >
                                                      {product.tag}
                                                    </span>
                                                  )}
                                                  <div className={product.iconClass}>
                                                    <Icon className="w-6 sm:w-8 h-6 sm:h-8" strokeWidth={1.5} />
                                                  </div>
                                                </div>
                                                <span className="text-xs text-muted-foreground">TrueValue</span>
                                                <h4 className="font-semibold text-foreground text-sm mb-1">{product.name}</h4>
                                                <p className="text-xs text-muted-foreground mb-3 line-clamp-2 flex-1">
                                                  {product.description}
                                                </p>
                                                <span className="text-sm font-medium text-primary group-hover:underline inline-flex items-center gap-0.5">
                                                  TRY NOW <ChevronRight className="w-4 h-4" />
                                                </span>
                                              </button>
                                            );
                                          })}
                                        </div>
                                      </>
                                    );
                                  })()}
                                </div>
                              </>
                            ) : productsTab === 'suites' ? (
                              <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
                                  {SUITE_PRODUCTS.map((suite) => {
                                    const Icon = suite.icon;
                                    return (
                                      <button
                                        key={suite.id}
                                        type="button"
                                        onClick={() => setOpenDropdown(null)}
                                        className="flex flex-col p-4 sm:p-6 rounded-xl border-2 border-border bg-card hover:border-primary/30 hover:bg-muted hover:shadow-lg transition-all group text-left"
                                      >
                                        <div className={`mb-4 ${suite.iconClass}`}>
                                          <Icon className="w-8 sm:w-10 h-8 sm:h-10" strokeWidth={1.5} />
                                        </div>
                                        <h4 className="font-bold text-foreground text-sm sm:text-base mb-2">{suite.name}</h4>
                                        <p className="text-xs sm:text-sm text-muted-foreground mb-4 line-clamp-3 flex-1 leading-relaxed">
                                          {suite.description}
                                        </p>
                                        <span className="text-sm font-semibold text-primary group-hover:underline inline-flex items-center gap-1">
                                          TRY NOW <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            ) : productsTab === 'truevalue-one' ? (
                              <div className="flex-1 overflow-hidden bg-primary">
                                <div className="h-full flex flex-col lg:flex-row items-center px-6 sm:px-8 lg:px-12 py-6 sm:py-8 gap-6 lg:gap-8">
                                  <div className="flex-1 max-w-2xl text-center lg:text-left">
                                    <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-primary-foreground/80 mb-3">
                                      <Package className="w-4 h-4" />
                                      All-in-one suite
                                    </div>
                                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-3 sm:mb-4">TrueValue One</h3>
                                    <p className="text-base sm:text-lg lg:text-xl font-semibold text-primary-foreground/95 mb-3 sm:mb-4">The Operating System for Business</p>
                                    <p className="text-sm sm:text-base text-primary-foreground/85 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                      Run your entire business on TrueValue with our unified cloud software, designed to help you break down silos between departments and increase organizational efficiency.
                                    </p>
                                    <button
                                      type="button"
                                      onClick={() => setOpenDropdown(null)}
                                      className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold text-xs sm:text-sm uppercase rounded-md shadow-lg transition-colors"
                                    >
                                      TRY TRUEVALUE ONE
                                      <ChevronRight className="w-4 h-4" />
                                    </button>
                                  </div>
                                  <div className="flex-1 flex items-center justify-center lg:block">
                                    <div className="relative w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64">
                                      <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="relative">
                                          <div className="w-32 sm:w-40 lg:w-48 h-32 sm:h-40 lg:h-48 bg-primary-foreground/20 backdrop-blur-sm rounded-3xl transform rotate-12 shadow-2xl border-2 border-primary-foreground/30" />
                                          <div className="absolute -top-6 sm:-top-8 -right-6 sm:-right-8 w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 bg-primary-foreground/15 backdrop-blur-sm rounded-2xl transform -rotate-12 border-2 border-primary-foreground/20" />
                                          <div className="absolute top-3 sm:top-4 -left-6 sm:-left-8 grid grid-cols-3 gap-1.5 sm:gap-2">
                                            {[LayoutGrid, Mail, Users, BookOpen, FolderKanban, Megaphone, BarChart3, ShoppingCart, Headphones].map((Icon, i) => (
                                              <div key={i} className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 bg-card rounded-lg flex items-center justify-center shadow-md border border-border">
                                                <Icon className="w-3 sm:w-3.5 lg:w-4 h-3 sm:h-3.5 lg:h-4 text-primary" />
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : productsTab === 'marketplace' ? (
                              <div className="flex-1 overflow-y-auto p-6 sm:p-8 lg:p-12 bg-muted/30">
                                <div className="max-w-5xl mx-auto">
                                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                    <div className="text-center lg:text-left">
                                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4 border border-primary/20">
                                        <Package className="w-4 h-4 text-primary" />
                                        <span className="text-xs sm:text-sm font-semibold text-primary">TrueValue Marketplace</span>
                                      </div>
                                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">TrueValue Marketplace</h3>
                                      <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                                        With over 2000 ready-to-use extensions across 40+ categories, connect your favorite business tools with the TrueValue products you already use.
                                      </p>
                                      <button
                                        type="button"
                                        onClick={() => setOpenDropdown(null)}
                                        className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs sm:text-sm uppercase rounded-md shadow-lg transition-colors"
                                      >
                                        EXPLORE MARKETPLACE
                                        <ChevronRight className="w-4 h-4" />
                                      </button>
                                    </div>
                                    <div>
                                      <div className="grid grid-cols-4 gap-3 sm:gap-4">
                                        {[Mail, Database, FileText, Globe, CreditCard, Video, MessageCircle, Calendar, ShoppingCart, BarChart3, Users, FolderKanban, Code2, Sparkles, Shield, Cpu].map((Icon, index) => (
                                          <div key={index} className="aspect-square bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary/30 hover:shadow-md transition-all cursor-pointer group">
                                            <Icon className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-primary group-hover:scale-110 transition-transform" />
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      ) : (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-popover rounded-lg shadow-lg border border-border z-30 overflow-hidden">
                        {key === 'Partners' ? (
                          <div className="flex p-4 gap-6 min-w-[420px]">
                            {PARTNERS_CARDS.map((card) => {
                              const Icon = card.icon;
                              return (
                                <Link
                                  key={card.title}
                                  href={card.href}
                                  className="flex-1 p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-muted/30 transition-colors group"
                                >
                                  <div className={`flex items-center gap-2 mb-2 ${card.iconClass}`}>
                                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                                  </div>
                                  <h4 className="font-semibold text-foreground text-sm mb-1">{card.title}</h4>
                                  <p className="text-xs text-muted-foreground mb-3 leading-snug">{card.description}</p>
                                  <span className="text-sm font-medium text-primary group-hover:underline inline-flex items-center gap-0.5">
                                    {card.linkText.toUpperCase()}
                                    <ChevronRight className="w-4 h-4" />
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        ) : key === 'Resources' ? (
                          <div className="flex p-4 gap-8 min-w-[360px]">
                            <div>
                              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Learn</h4>
                              <ul className="space-y-1.5">
                                {RESOURCES_SECTIONS.LEARN.map((item) => (
                                  <li key={item.label}>
                                    <Link href={item.href} className="text-sm text-foreground hover:text-primary transition-colors">
                                      {item.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Support</h4>
                              <ul className="space-y-1.5">
                                {RESOURCES_SECTIONS.SUPPORT.map((item) => (
                                  <li key={item.label}>
                                    <Link href={item.href} className="text-sm text-foreground hover:text-primary transition-colors">
                                      {item.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ) : (
                          <div className="py-2 min-w-[200px]">
                            {(NAV_DROPDOWNS[key] ?? []).map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                      )
                    )}
                  </div>
                ) : (
                  <Link
                    key={key}
                    href="#enterprise"
                    className="text-foreground hover:text-primary font-medium text-sm transition-colors"
                  >
                    {key}
                  </Link>
                )
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="p-2 text-foreground hover:text-primary transition-colors rounded-full hover:bg-muted/50"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {searchOpen && (
              <>
                <div
                  className="fixed inset-0 bg-foreground/50 z-[100]"
                  onClick={() => setSearchOpen(false)}
                  aria-hidden
                />
                <div className="fixed inset-0 z-[101] flex items-start justify-center pt-[15vh] px-4 pointer-events-none">
                  <div
                    className="w-full max-w-xl bg-popover rounded-lg shadow-xl border border-border p-4 pointer-events-auto"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center gap-3">
                      <Search className="w-5 h-5 text-muted-foreground shrink-0" />
                      <input
                        ref={searchInputRef}
                        type="search"
                        placeholder="Search..."
                        className="flex-1 min-w-0 border-0 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 text-base"
                        onKeyDown={(e) => e.key === 'Escape' && setSearchOpen(false)}
                      />
                      <button
                        type="button"
                        onClick={() => setSearchOpen(false)}
                        className="p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/50"
                        aria-label="Close search"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}

            <Link
              href="/login"
              className="px-4 py-2 rounded-md border border-border text-foreground hover:border-primary hover:text-primary font-medium text-sm transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm transition-colors"
            >
              Sign up now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
