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
  summary: string[]
}

export interface Stat {
  label: string
  value: string
}

export interface ProjectLink {
  label: string
  url: string
}

export interface BeyondWork {
  image: string
  headline: string
  body: string
}

export interface Project {
  slug: string
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
  pipeline?: boolean
  logos?: string[]
  image?: string
  companyLogo?: string
  ratingUplift?: { before: number; after: number }
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
  location: 'Boulder, Colorado, United States',
  email: 'srithar21@gmail.com',
  phone: '682-307-9577',
  links: {
    linkedin: 'https://linkedin.com/in/REPLACE_ME',
    github: 'https://github.com/srithar21',
    medium: 'https://medium.com/@srithar21',
  },
  resumeFile: '/resume.pdf',
  tagline:
    'Specializing in AI, fintech, and enterprise platforms powering millions of users.',
  summary: [
    "I've spent my career at the intersection of mobile and backend: the kind of work where a bug isn't just annoying, it's someone's mortgage payment or bank transfer. I got my start as an iOS engineer at TCS, then spent 14 years moving up through lead and staff roles, building high-performing teams along the way — most recently as a founding mobile engineer at a FinTech startup, where I built the mobile, web, and API strategy from zero.",
    "I'm just as comfortable on the backend — deep in Azure cloud architecture and distributed systems, building Kafka and RabbitMQ event pipelines that keep high-volume, regulated systems reliable at scale, and architecting push notification infrastructure from scratch that reaches 3 million customers.",
    "I've got a polyglot mindset: Express.js, Spring Boot, Salesforce/DocuSign integrations, Azure Bot Services — I pick the right stack for the problem rather than forcing everything through one.",
    "Lately I've been deep in agentic AI: designing MCP-based workflows that let LLMs make real, multi-step decisions across enterprise systems. I also lean hard on AI-assisted development day to day — Claude, OpenAI Codex, and GitHub Copilot are part of how I design, implement, test, and document, not just something I bolt on at the end.",
    "I'm also a test-driven development purist — I'd rather write the test first and the feature second. It's not a checkbox for me; it's how I've built every team I've led, from raising unit test coverage across every team to the automation frameworks that back it up. I care a lot about the unglamorous stuff — test coverage, security, CI/CD — because that's what lets you move fast without breaking someone's finances.",
  ],
}

export const stats: Stat[] = [
  { label: 'Years of experience', value: '14+' },
  { label: 'Users', value: '3M+' },
  { label: 'App Store rating uplift (CPB)', value: '2.0 → 4.9' },
  { label: 'Brands shipped from one codebase', value: '8' },
  { label: 'Products Built from Scratch', value: '2' },
  { label: 'Series A Launch (Swell)', value: '$10M' },
]

// Shown right in the hero so the core stack is the first thing a visitor sees.
export const primarySkills: string[] = [
  'React Native',
  'Native iOS',
  'Android',
  'TypeScript',
  'React',
  'Express.js',
  'Spring Boot',
  'Azure Cloud',
  'Kafka & RabbitMQ',
  'Agentic AI (MCP)',
  'TDD',
  'White-Label Architecture',
  'TurboRepo',
  'pnpm',
]

// Project case studies — the heart of the portfolio. Each one tells a short
// problem → approach → impact story instead of a resume bullet dump.
export const projects: Project[] = [
  {
    slug: 'swell',
    title: 'Swell — a neobank startup, built from zero',
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
    companyLogo: '/logos/swell.png',
  },
  {
    slug: 'white-label-platform',
    title: 'Turning one small-loan app into a white-label platform',
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
    companyLogo: '/logos/elevate.png',
  },
  {
    slug: 'mr-cooper',
    title: 'Modernizing the Mr. Cooper mortgage app for 3 million people',
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
    companyLogo: '/logos/mrcooper.png',
  },
  {
    slug: 'central-pacific-bank',
    title: 'Turning a 2.0-star banking app into a 4.9-star app',
    company: 'Central Pacific Bank — Principal Software Engineer, Mobile',
    timeframe: '2020 – 2022',
    problem:
      "Central Pacific Bank's mobile app had a 2.0 App Store rating, weak UX, and performance problems that were driving customers away.",
    approach: [
      'Led a full mobile app and website rebrand as Principal Engineer, rebuilding UX and performance from the ground up.',
      'Designed and shipped core banking flows: Instant Transfers, Card Management, Transactions, and External Transfers.',
      'Architected Azure-based AI identity agents that improved verification accuracy and cut agent handling time.',
      'Built a Microsoft Teams app on Azure Bot Services that sends one-time codes to verify customers live during support calls — a polyglot stack spanning Express.js, Spring Boot, Twilio, SendGrid, and SQL Server.',
      'Integrated Salesforce with DocuSign to automate document generation and e-signature workflows for customer agreements.',
    ],
    impact: 'App Store rating climbed from 2.0 to 4.9 — a direct result of the rebuild.',
    ratingUplift: { before: 2.0, after: 4.9 },
    tags: ['React Native', 'Azure', 'AI Agents'],
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/us/app/central-pacific-bank/id1515820749' },
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.mobile.cpb&hl=en_US' },
    ],
    screenshots: ['/projects/cpb-payments.png', '/projects/cpb-transfers.png'],
    companyLogo: '/logos/cpb.png',
  },
  {
    slug: 'ivy-mobility',
    title: 'One iPad codebase, eight enterprise B2B clients',
    company: 'Ivy Mobility Solutions — Lead iOS Engineer',
    timeframe: '2013 – 2016',
    problem:
      'Ivy Mobility sold the same B2B iPad product to multiple Healthcare and Retail clients, but each client needed their own branding, and every release had to go out through iOS Enterprise distribution rather than the public App Store.',
    approach: [
      'Led a team of 8 iOS engineers, designing a white-label architecture that powered every branded client app from one shared Objective-C/MVC codebase.',
      'Optimized login and local data performance with multithreading and SQLite, supporting 100k+ transactions per login.',
      'Managed iOS Enterprise releases end to end — provisioning, licensing, and deployment across each client\'s own distribution environment.',
      'Delivered digital signature capture and SOAP-based Siebel CRM integration for enterprise workflows.',
    ],
    impact: 'One codebase served 8 branded enterprise clients — new clients launched through configuration and Enterprise provisioning, not a rebuild.',
    tags: ['Objective-C', 'White-Label', 'iOS Enterprise', 'SQLite'],
    links: [],
    image: '/projects/ivy-enterprise-ipad.png',
    companyLogo: '/logos/ivy-mobility.png',
  },
  {
    slug: 'testing-culture',
    title: 'Building a testing culture across mobile and web',
    company: 'Across Elevate, Central Pacific Bank, and Mr. Cooper',
    timeframe: '2016 – Present',
    problem:
      'Manual QA and flaky releases across React Native, iOS, and Android apps slowed delivery and made every release a gamble — teams needed confidence that shipping wouldn\'t break production.',
    approach: [
      'Established TDD (unit, E2E, and integration) as a non-negotiable practice using Jest, React Testing Library, Detox, Maestro, and XCTest.',
      'Built Appium and Selenium cross-platform automation frameworks from scratch, covering native and web surfaces.',
      'Deployed automation at scale on device clouds — BrowserStack, SauceLabs, and LambdaTest — fully wired into Azure DevOps, GitHub Actions, and Fastlane.',
      'Made TDD a team habit, not just a personal one — coached engineers through code reviews and testing standards until it was the default way of working.',
    ],
    impact: 'Grew unit test coverage from 52% to 80%+ at Elevate, and cut crashes and regressions across every team that adopted the practice.',
    tags: ['TDD', 'Jest', 'Detox', 'Maestro', 'Appium', 'Selenium'],
    links: [],
    pipeline: true,
  },
  {
    slug: 'ai-agents-supply-chain',
    title: 'Building AI agents for enterprise supply chains',
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
    image: '/projects/ascendion-ai-agent.png',
    companyLogo: '/logos/ascendion.png',
  },
  {
    slug: 'confiora',
    title: 'Building a privacy-first iOS product from scratch',
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
    links: [{ label: 'App Store', url: 'https://apps.apple.com/us/app/confiora/id6767693371' }],
    screenshots: ['/projects/confiora-dashboard.png', '/projects/confiora-onboarding.png'],
    companyLogo: '/logos/confiora.png',
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
      'React Native, TypeScript, Next.js, React, Express.js, Spring Boot, Azure, Azure Bot Services, CI/CD, SendGrid, Twilio, Salesforce, DocuSign',
    bullets: [
      'Led a full mobile app and website rebrand as Principal Engineer, raising App Store rating from 2.0 to 4.9.',
      'Built core banking flows: Instant Transfers, Transactions, Card Management, External Transfers.',
      'Architected Azure-based AI identity agents, improving verification accuracy and handling time.',
      'Built a Teams app on Azure Bot Services for live customer OTP verification during support calls.',
      'Integrated Salesforce with DocuSign to automate document generation and e-signature workflows.',
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
    skills: 'Objective-C, MVC Architecture, SaaS (B2B), White-Label Architecture, iOS Enterprise Distribution, SQLite',
    bullets: [
      'Led a team of 8 iOS engineers delivering a scalable B2B product for Healthcare and Retail clients.',
      'Designed a white-label architecture powering multiple branded iPad apps from one shared Objective-C/MVC codebase, optimizing login performance for 100k+ transactions per login.',
      'Managed iOS Enterprise releases and App Store distribution — provisioning, licensing, and deployment across diverse client environments.',
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
    category: 'Industries & Domains',
    skills: [
      'FinTech',
      'Neobanking',
      'Banking',
      'Mortgage',
      'Small-Dollar Lending',
      'Supply Chain / Warehousing',
      'Healthcare & Retail (B2B)',
      'SaaS',
    ],
  },
  {
    category: 'Mobile & Frontend',
    skills: ['React Native', 'TypeScript', 'React', 'Next.js', 'Swift', 'Kotlin', 'SwiftUI', 'Expo (EAS)'],
  },
  {
    category: 'Backend & Data',
    skills: ['Express.js', 'Spring Boot', 'NestJS', 'PostgreSQL', 'SQL Server', 'Prisma', 'GraphQL', 'REST APIs', 'Salesforce', 'DocuSign'],
  },
  {
    category: 'Cloud & Infrastructure',
    skills: [
      'Azure',
      'Azure B2C',
      'Azure Bot Services',
      'API Management',
      'Kafka',
      'RabbitMQ',
      'Docker',
      'CI/CD',
      'GitHub Actions',
      'Azure DevOps',
      'App Center',
    ],
  },
  {
    category: 'AI & Agentic Engineering',
    skills: ['MCP', 'LangChain', 'Prompt Engineering', 'Azure OpenAI', 'TensorFlow', 'Core ML', 'Claude', 'GitHub Copilot'],
  },
  {
    category: 'Testing & QA',
    skills: [
      'TDD (Unit, E2E, Integration)',
      'Jest',
      'React Testing Library',
      'Detox',
      'Maestro',
      'XCTest',
      'Appium',
      'Selenium',
      'BrowserStack',
      'SauceLabs',
      'LambdaTest',
    ],
  },
  {
    category: 'Observability & Monitoring',
    skills: ['Firebase Crashlytics', 'Google Analytics', 'Datadog', 'New Relic', 'Azure Application Insights'],
  },
  {
    category: 'Security & Compliance',
    skills: ['OWASP', 'SAST/DAST', 'PCI DSS', 'Passkeys'],
  },
  {
    category: 'Architecture',
    skills: [
      'Monorepo',
      'TurboRepo',
      'pnpm',
      'Microservices',
      'Event-Driven Architecture',
      'White-Label / Multi-Tenant',
    ],
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
  'Test Driven Development',
  'React Native & TypeScript',
  'White-Label, Feature Flags',
  'Native iOS & Objective-C',
  'Performance Optimization',
  'Azure Cloud',
  'React',
  'Analytics & Monitoring',
  'Native & Turbo Modules',
  'Mentoring',
]

export const beyondWork: BeyondWork = {
  image: '/about/cricket-team.png',
  headline: 'Founder & Captain',
  body: "Leadership isn't just a work thing for me — I founded and captain a cricket team, and we've won two tournaments so far.",
}
