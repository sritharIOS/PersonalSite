// Central content file — edit this to update the site's text.
// Fill in the placeholder URLs below with your real profile links.

export interface Profile {
  name: string
  title: string
  subtitle: string
  location: string
  email: string
  phone: string
  links: {
    linkedin: string
    github: string
    medium: string
  }
  resumeFile: string
  tagline: string
  summary: string
}

export interface Stat {
  label: string
  value: string
}

export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  title: string
  company: string
  timeframe: string
  problem: string
  approach: string[]
  impact: string
  tags: string[]
  links: ProjectLink[]
  screenshots?: string[]
  diagram?: boolean
}

export interface ExperienceItem {
  company: string
  location: string
  role: string
  dates: string
  skills: string
  bullets: string[]
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface EducationItem {
  degree: string
  school: string
  dates: string
}

export interface CertificationItem {
  name: string
  dates: string
}

export const profile: Profile = {
  name: 'Srithar Rajendran',
  title: 'Full Stack Staff Software Engineer',
  subtitle: 'React Native, React & Distributed Systems',
  location: 'Boulder, United States',
  email: 'srithar21@gmail.com',
  phone: '682-307-9577',
  links: {
    linkedin: 'https://linkedin.com/in/REPLACE_ME',
    github: 'https://github.com/srithar21',
    medium: 'https://medium.com/@REPLACE_ME',
  },
  resumeFile: '/resume.pdf',
  tagline:
    '14+ years turning regulated, high-stakes ideas — banking, lending, mortgage — into products people actually trust.',
  summary:
    "I've spent my career at the intersection of mobile and backend: the kind of work where a bug isn't just annoying, it's someone's mortgage payment or bank transfer. I got my start as an iOS engineer at TCS, then spent 14 years moving up through lead and staff roles — most recently as a founding mobile engineer at a FinTech startup, where I built the mobile, web, and API strategy from zero. Lately I've been deep in agentic AI: designing MCP-based workflows that let LLMs make real, multi-step decisions across enterprise systems. I care a lot about the unglamorous stuff — test coverage, security, CI/CD — because that's what lets you move fast without breaking someone's finances.",
}

export const stats: Stat[] = [
  { label: 'Years of experience', value: '14+' },
  { label: 'Users served (Mr. Cooper app)', value: '3M+' },
  { label: 'App Store rating uplift (CPB)', value: '2.0 → 4.5' },
  { label: 'Test coverage growth (Elevate)', value: '52% → 80%+' },
]

// Project case studies — the heart of the portfolio. Each one tells a short
// problem → approach → impact story instead of a resume bullet dump.
export const projects: Project[] = [
  {
    title: 'Swell — a neobank, built from zero',
    company: 'Swell Financial — Founding Mobile Engineer',
    timeframe: '2022 – 2025',
    problem:
      "Swell set out to build a mobile-first neobank — a Series A-funded startup backed by Elevate Credit and Central Pacific Bank — with no existing mobile codebase and a 300,000-person waitlist waiting to convert into real customers.",
    approach: [
      'Joined as a founding engineer and architected the app greenfield in React Native, owning security, delivery, and App Store release end-to-end.',
      'Led integrations with Mastercard, Persona (KYC/IDV), Atomic (Direct Deposit), and Finicity for secure onboarding.',
      'Shipped the Swell Cash + Credit bundle experience — a no-fee deposit account and line of credit designed to work together.',
    ],
    impact: 'Helped Swell close a $10M Series A and launch its mobile-first neobank platform.',
    tags: ['React Native', 'Neobank', 'Series A', 'FinTech'],
    links: [
      { label: 'Series A coverage — Built In Colorado', url: 'https://www.builtincolorado.com/articles/swell-raises-10m-series-a-hiring' },
    ],
    screenshots: ['/projects/swell-home.png', '/projects/swell-bundle.png'],
  },
  {
    title: 'Turning one app into a white-label platform',
    company: 'Elevate Credit — Staff Mobile Platform Engineer',
    timeframe: '2022 – 2025',
    problem:
      "After Swell launched, Elevate needed to support multiple financial brands from one codebase. The app was tightly coupled to a single product, so every new brand meant duplicating the entire build — slow, expensive, and hard to keep consistent.",
    approach: [
      'Designed a modular architecture separating business logic (auth, navigation, networking) from a brand configuration layer (theme, copy, feature flags).',
      'Integrated ContentStack CMS so brand admins could update colors, logos, typography, and feature visibility at runtime — no app release required.',
      'Built a reusable, theme-aware component library and centralized theme engine, so every brand shared the same components but rendered its own identity.',
      'Added feature flags so product teams could ship brand-specific features (loan products, promos, payment methods) independently.',
    ],
    impact: 'Unit test coverage grew from 52% to 80%+, shipping a regulated credit product used by real customers.',
    tags: ['React Native', 'ContentStack CMS', 'Redux', 'White-Label'],
    links: [],
    diagram: true,
  },
  {
    title: 'Modernizing a mortgage app for 3 million people',
    company: 'Mr. Cooper Mortgage — Mobile Applications Lead',
    timeframe: '2016 – 2020',
    problem:
      'The mortgage servicing app was built on an aging Objective-C codebase with a legacy MVCP architecture, serving over 3 million users who needed a reliable way to manage their mortgage.',
    approach: [
      'Migrated the architecture from MVCP to VIPER and modernized the entire codebase from Objective-C to Swift.',
      'Built an on-device financial assistant using TensorFlow Lite, NLP, and Siri voice commands for hands-free document scanning.',
      'Led the secure migration of all 3 million users from Okta to Azure B2C using OAuth 2.0 with zero downtime.',
    ],
    impact: 'Shipped a faster, more stable app for 3M+ users while modernizing the entire engineering foundation underneath it.',
    tags: ['Swift', 'VIPER', 'TensorFlow Lite', 'Azure B2C'],
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/us/app/mr-cooper/id1114621467' },
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.mrcooper.apollo.beta&hl=en_US' },
    ],
    screenshots: ['/projects/mrcooper-payments.png'],
  },
  {
    title: 'Turning a 2.0-star app into a 4.5-star app',
    company: 'Central Pacific Bank — Principal Software Engineer, Mobile',
    timeframe: '2020 – 2022',
    problem:
      "Central Pacific Bank's mobile app had a 2.0 App Store rating, weak UX, and performance problems that were driving customers away.",
    approach: [
      'Led a full mobile app and website rebrand as Principal Engineer, rebuilding UX and performance from the ground up.',
      'Designed and shipped core banking flows: Instant Transfers, Card Management, Transactions, and External Transfers.',
      'Architected Azure-based AI identity agents that improved verification accuracy and cut agent handling time.',
    ],
    impact: 'App Store rating climbed from 2.0 to 4.5 — a direct result of the rebuild.',
    tags: ['React Native', 'Azure', 'AI Agents'],
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/us/app/central-pacific-bank/id1515820749' },
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.mobile.cpb&hl=en_US' },
    ],
    screenshots: ['/projects/cpb-payments.png', '/projects/cpb-transfers.png'],
  },
  {
    title: 'Teaching AI agents to run a supply chain',
    company: 'Ascendion — Fullstack Senior Software Engineer',
    timeframe: '2025 – Present',
    problem:
      'Enterprise supply chain and warehouse teams needed inventory, vendor, and shipment decisions automated across multiple distribution centers — without losing human oversight.',
    approach: [
      'Designed MCP-based AI agent workflows that connect LLMs to enterprise APIs for context-aware, multi-step decisions.',
      'Built Spring Boot/Kotlin microservices for inventory disposition, vendor routing, and shipment processing.',
      'Implemented Kafka event pipelines with retry logic and dead-letter queues for reliable, high-volume processing.',
    ],
    impact: 'Automated multi-step operational decisions that previously required manual review across distribution centers.',
    tags: ['MCP', 'LLM Tool-Calling', 'Kafka', 'Spring Boot'],
    links: [],
  },
  {
    title: 'Confiora — family awareness, built solo',
    company: 'Confiora — Independent Build',
    timeframe: 'Personal Project',
    problem:
      'Families lose track of the things that matter most in a crisis — passport and license expiry dates, shared home details, who has access to what. Wanted to build a private, Apple-native way to keep a family "ready" without a team behind me.',
    approach: [
      'Designed and built the entire stack independently: NestJS backend, SwiftUI app, Prisma ORM, and CloudKit sync.',
      'Built a Family Awareness score that tracks Home, Recurring, and Invite completeness, with clear next-best-steps when something is missing.',
      'Added Smart Alerts for passport, visa, license, and other important family dates, plus Apple-account Family Sharing for secure multi-member access.',
      'Used Claude, OpenAI Codex, and GitHub Copilot throughout design, implementation, and testing to move faster solo — no team, no handoffs.',
    ],
    impact: 'Shipped a complete, privacy-first product solo — architecture through App Store-ready UX — validating a fast AI-assisted solo build workflow.',
    tags: ['NestJS', 'SwiftUI', 'Prisma', 'CloudKit', 'AI-Assisted Dev'],
    links: [],
    screenshots: ['/projects/confiora-dashboard.png', '/projects/confiora-onboarding.png'],
  },
]

export const experience: ExperienceItem[] = [
  {
    company: 'Ascendion Inc',
    location: 'Remote',
    role: 'Fullstack Senior Software Engineer (Contract)',
    dates: 'Sept 2025 – Present',
    skills:
      'Next.js, React, TypeScript, React Native, Spring Boot, Kotlin, PostgreSQL, SQL Server, Kafka, RabbitMQ, Monorepo (TurboRepo, pnpm), Prisma, Flyway, Docker, GitHub Actions, TanStack Query, Jest',
    bullets: [
      'Built Next.js, React, and React Native apps for enterprise supply chain operations across multiple distribution centers.',
      'Designed MCP-based AI agent workflows to automate inventory, vendor, and supply chain decisions.',
      'Scaled Spring Boot/Kotlin microservices for inventory, vendor routing, and shipment processing.',
      'Built Kafka event pipelines with retry logic and DLQs for high-volume, fault-tolerant processing.',
    ],
  },
  {
    company: 'Elevate Credit, Inc',
    location: 'Dallas (Remote)',
    role: 'Staff Mobile Platform Engineer — React Native',
    dates: 'Mar 2022 – Sept 2025',
    skills:
      'React Native, Expo, TypeScript, Kotlin, Swift/Objective-C, GraphQL, REST APIs, WebSockets, Azure Functions, Azure B2C, CI/CD, Datadog, Jest, Detox, Maestro, XCTest, TanStack Query',
    bullets: [
      'Reported directly to CTOs and SVPs, owning mobile architecture and delivery strategy for FinTech and Banking platforms.',
      'Architected and launched a greenfield mobile-first digital banking platform in React Native.',
      'Led integrations with Mastercard, Atomic, Persona, and Finicity for secure onboarding.',
      'Rebuilt a single-tenant app into a white-label, multi-tenant platform with dynamic branding.',
      'Grew unit test coverage from 52% to 80%+ by establishing TDD practices.',
    ],
  },
  {
    company: 'Central Pacific Bank',
    location: 'Boulder',
    role: 'Principal Software Engineer — Mobile',
    dates: 'Oct 2020 – Feb 2022',
    skills:
      'React Native, TypeScript, Next.js, React, Express.js, Spring Boot, Azure, CI/CD, SendGrid, Twilio',
    bullets: [
      'Led a full mobile app and website rebrand as Principal Engineer, raising App Store rating from 2.0 to 4.5.',
      'Built core banking flows: Instant Transfers, Transactions, Card Management, External Transfers.',
      'Architected Azure-based AI identity agents, improving verification accuracy and handling time.',
      'Led and mentored a team of junior developers.',
    ],
  },
  {
    company: 'Mr. Cooper Mortgage',
    location: 'Coppell',
    role: 'Mobile Applications Lead',
    dates: 'Mar 2016 – Sept 2020',
    skills: 'Swift, Objective-C, Java, TDD, XCTest, Jenkins, VIPER, TensorFlow, NLP, Ruby on Rails',
    bullets: [
      "Led iOS and Android architecture for Mr. Cooper's Mortgage Servicing App, serving 3M+ users.",
      'Migrated architecture from MVCP to VIPER; modernized Objective-C to Swift across all screens.',
      'Built an on-device financial assistant using TensorFlow Lite, NLP, and Siri voice commands.',
      'Led secure migration of 3 million users from Okta to Azure B2C.',
    ],
  },
  {
    company: 'Ivy Mobility Solutions Ltd',
    location: 'Chennai',
    role: 'Lead iOS Engineer',
    dates: 'Aug 2013 – Mar 2016',
    skills: 'Objective-C, MVC Architecture, SaaS (B2B), SQLite',
    bullets: [
      'Led a team of 8 iOS engineers delivering a scalable B2B product for Healthcare and Retail clients.',
      'Built white-label iPad apps, optimizing login performance for 100k+ transactions per login.',
      'Delivered digital signature capture and SOAP-based Siebel CRM integration.',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    location: 'Chennai',
    role: 'iOS Engineer',
    dates: 'Mar 2011 – Aug 2013',
    skills: 'Objective-C, MVC Architecture, CoreData',
    bullets: [
      'Built the CARE iPad/iPhone app for Boston Scientific, helping sales reps manage patients and inventory.',
      'Integrated with SAP CRM and R/3 using JSON REST services; led a team of 2 developers.',
      'Delivered offline sync (v1.0) and real-time Data Change Notification sync (v1.1).',
    ],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'Mobile & Frontend',
    skills: ['React Native', 'TypeScript', 'React', 'Next.js', 'Swift', 'Kotlin', 'SwiftUI', 'Expo'],
  },
  {
    category: 'Backend & Data',
    skills: ['Express.js', 'Spring Boot', 'NestJS', 'PostgreSQL', 'SQL Server', 'Prisma', 'GraphQL', 'REST APIs'],
  },
  {
    category: 'Cloud & Infrastructure',
    skills: ['Azure', 'Azure B2C', 'API Management', 'Kafka', 'RabbitMQ', 'Docker', 'CI/CD', 'GitHub Actions'],
  },
  {
    category: 'AI & Agentic Engineering',
    skills: ['MCP', 'LangChain', 'Prompt Engineering', 'Azure OpenAI', 'TensorFlow', 'Core ML', 'Claude', 'GitHub Copilot'],
  },
  {
    category: 'Quality & Security',
    skills: ['TDD', 'Jest', 'Detox', 'XCTest', 'OWASP', 'SAST/DAST', 'PCI DSS', 'Passkeys'],
  },
  {
    category: 'Architecture',
    skills: ['Monorepo (TurboRepo)', 'Microservices', 'Event-Driven Architecture', 'White-Label / Multi-Tenant'],
  },
]

export const education: EducationItem[] = [
  {
    degree: 'Masters in Computer Application',
    school: 'Anna University',
    dates: '2007 – Jun 2010',
  },
  {
    degree: 'Bachelor of Computer Science',
    school: 'Thiruvalluvar Govt Arts and Science College, Rasipuram',
    dates: 'May 2004 – Jun 2007',
  },
]

export const certifications: CertificationItem[] = [
  {
    name: 'AZ-900: Azure Cloud Services and Fundamentals',
    dates: 'Dec 2023',
  },
  {
    name: 'Leading with Vision — LinkedIn Learning',
    dates: 'Apr 2023',
  },
]

export const expertiseAreas: string[] = [
  'React Native & TypeScript',
  'Test Driven Development',
  'White-Label, Feature Flags',
  'Native iOS & Objective-C',
  'Performance Optimization',
  'Azure Cloud',
  'React',
  'Analytics & Monitoring',
  'Native & Turbo Modules',
  'Mentoring',
]
