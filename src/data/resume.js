// Central content file — edit this to update the site's text.
// Fill in the placeholder URLs below with your real profile links.

export const profile = {
  name: 'Srithar Rajendran',
  title: 'Full Stack Staff Software Engineer',
  subtitle: 'React Native, React & Distributed Systems',
  location: 'Boulder, United States',
  email: 'srithar.mobiletech@gmail.com',
  phone: '682-313-3698',
  links: {
    linkedin: 'https://linkedin.com/in/REPLACE_ME',
    github: 'https://github.com/srithar21',
    medium: 'https://medium.com/@REPLACE_ME',
  },
  resumeFile: '/resume.pdf',
  summary:
    "Full-Stack Staff Software Engineer with 14+ years of experience delivering scalable mobile applications, web platforms, microservices, and Azure-based cloud architectures across FinTech, Mortgage, Small-Dollar Lending, Supply Chain, SaaS, and Neobanking domains. As a founding member of a FinTech startup, I led the mobile, web, and API strategy, successfully launching a secure, mobile-first banking platform. I bring deep expertise in building high-performance cross-platform and native applications, designing scalable solutions, and delivering products in highly regulated environments. I have hands-on experience building Agentic AI solutions, including MCP-based AI agent workflows that integrate LLMs, enterprise APIs, and tool orchestration to automate business processes. A strong advocate for engineering excellence, I specialize in Application Security, Test-Driven Development, and CI/CD Automation.",
}

export const stats = [
  { label: 'Years of experience', value: '14+' },
  { label: 'Users served (Mr. Cooper app)', value: '3M+' },
  { label: 'App Store rating uplift (CPB)', value: '2.0 → 4.5' },
  { label: 'Test coverage growth (Elevate)', value: '52% → 80%+' },
]

export const highlights = [
  {
    title: 'Founding Mobile Engineer, FinTech Startup',
    description:
      'Built and scaled the mobile engineering function at a Series A FinTech startup, architecting and launching a mobile-first banking and credit platform with Mastercard, plus Predictive Analytics, NLP, and AI/ML integrations (React Native).',
    tags: ['React Native', 'Mastercard', 'AI/ML', '0→1'],
  },
  {
    title: 'Mr. Cooper Mortgage App — 3M+ Users',
    description:
      'Led iOS and Android architecture for a mortgage servicing platform serving 3M+ users. Migrated architecture from MVCP to VIPER, modernized Objective-C to Swift, and led secure migration of 3M users from Okta to Azure B2C.',
    tags: ['Swift', 'Java', 'VIPER', 'Azure B2C'],
  },
  {
    title: 'Central Pacific Bank Rebrand — Rating 2.0 → 4.5',
    description:
      "Led a major mobile app and website rebranding initiative as Principal Engineer, improving UX and performance and raising the App Store rating from 2.0 to 4.5. Delivered Instant Transfers, Card Management, and Azure-based AI identity agents.",
    tags: ['React Native', 'Azure', 'AI Agents'],
  },
  {
    title: 'MCP-Based AI Agent Workflows',
    description:
      'Designed and implemented Model Context Protocol (MCP) AI agent workflows integrating LLMs, enterprise APIs, and tool orchestration to automate inventory, vendor, and supply chain decisions through context-aware, multi-step reasoning.',
    tags: ['MCP', 'LLM Tool-Calling', 'Agentic AI'],
  },
  {
    title: 'Multi-Tenant Monorepo Architecture',
    description:
      'Designed a modular Monorepo using Vercel TurboRepo and pnpm (Drizzle, Hono), standardizing code sharing, build orchestration, and type-safe contracts across React Native, Next.js, and backend apps. Migrated a single-tenant credit app to a white-label, multi-tenant architecture.',
    tags: ['TurboRepo', 'pnpm', 'White-Label'],
  },
  {
    title: 'Confora — Independent Product Build',
    description:
      'Independently designed, architected, and launched Confora using NestJS, SwiftUI, Prisma, and CloudKit — leveraging Copilot, OpenAI Codex, Claude, and ChatGPT to drive end-to-end execution across mobile architecture, UX, backend, and delivery.',
    tags: ['NestJS', 'SwiftUI', 'Prisma', 'AI-Assisted Dev'],
  },
]

export const experience = [
  {
    company: 'Ascendion Inc',
    location: 'Remote',
    role: 'Fullstack Senior Software Engineer (Contract)',
    dates: 'Sept 2025 – Present',
    skills:
      'Next.js, React, TypeScript, React Native, Spring Boot, Kotlin, PostgreSQL, SQL Server, Kafka, RabbitMQ, Monorepo (TurboRepo, pnpm), Prisma, Flyway, Docker, GitHub Actions, TanStack Query, Jest',
    bullets: [
      'Designed and developed scalable Next.js, React, and React Native applications supporting enterprise supply chain and warehouse operations used across multiple distribution centers.',
      'Designed and implemented MCP-based AI agent workflows integrating LLMs, enterprise APIs, and tool orchestration to automate inventory management, vendor operations, and supply chain processes.',
      'Built modern Next.js applications leveraging Server Components, SSR, CSR, API Routes, and optimized data-fetching strategies.',
      'Built and scaled Spring Boot/Kotlin microservices supporting inventory disposition, vendor routing, shipment processing, and operational workflows.',
      'Developed Kafka producers/consumers for high-volume inventory and shipment event processing, with retry strategies, DLQs, and reconciliation workflows.',
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
      'Reported directly to CTOs and SVPs, owning mobile architecture, delivery strategy, and engineering execution across FinTech and Banking platforms.',
      'Architected and launched a greenfield mobile-first digital banking platform using React Native, leading architecture, security, and App Store releases.',
      'Led integrations with Mastercard, Atomic (Direct Deposit), Persona (KYC/IDV), and Finicity (Bank Verification) for secure onboarding and banking workflows.',
      'Transformed a single-tenant application into a scalable multi-tenant (white-label) platform with dynamic branding and feature flags.',
      'Delivered an ML-powered transaction categorization engine using BERT embeddings, improving financial insights and customer engagement.',
      'Established TDD practices, increasing unit test coverage from 52% to 80%+.',
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
      'Led a major mobile app and website rebranding initiative as Principal Engineer, raising App Store rating from 2.0 to 4.5.',
      'Designed and implemented core banking functionality including Instant Transfers, Transactions, Card Management, and External Transfers via REST APIs.',
      'Architected and integrated Azure-based AI agents, significantly enhancing identity verification accuracy and reducing agent handling time.',
      'Led and mentored a team of junior developers, ensuring on-time delivery and high code quality standards.',
    ],
  },
  {
    company: 'Mr. Cooper Mortgage',
    location: 'Coppell',
    role: 'Mobile Applications Lead',
    dates: 'Mar 2016 – Sept 2020',
    skills: 'Swift, Objective-C, Java, TDD, XCTest, Jenkins, VIPER, TensorFlow, NLP, Ruby on Rails',
    bullets: [
      "Led iOS and Android architecture and development for Mr. Cooper's Mortgage Servicing App, serving 3M+ users.",
      'Migrated architecture from MVCP to VIPER; modernized the codebase from Objective-C to Swift across all screens.',
      'Developed an on-device financial assistant using TensorFlow Lite, NLP, and Siri voice commands for hands-free document scanning.',
      'Led the secure migration of 3 million users from Okta to Azure B2C using OAuth 2.0.',
      'Implemented a custom Jenkins CI/CD pipeline and introduced A/B testing via Firebase Remote Config.',
    ],
  },
  {
    company: 'Ivy Mobility Solutions Ltd',
    location: 'Chennai',
    role: 'Lead iOS Engineer',
    dates: 'Aug 2013 – Mar 2016',
    skills: 'Objective-C, MVC Architecture, SaaS (B2B), SQLite',
    bullets: [
      'Led and managed a team of 8 iOS engineers delivering a scalable B2B iOS product for Healthcare and Retail clients.',
      'Developed white-label iPad apps with custom branding, optimizing login performance for 100k+ transactions per login.',
      'Delivered digital signature capture, SOAP-based Siebel CRM integration, and multi-region localization.',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    location: 'Chennai',
    role: 'iOS Engineer',
    dates: 'Mar 2011 – Aug 2013',
    skills: 'Objective-C, MVC Architecture, CoreData',
    bullets: [
      'Developed the CARE iPad/iPhone app for Boston Scientific, enabling Neuromodulation sales reps to manage activities, patients, and inventory.',
      'Integrated with SAP CRM and R/3 using JSON REST services; led a team of 2 developers.',
      'Delivered on-demand sync (v1.0) and Data Change Notification sync (v1.1) approaches.',
    ],
  },
]

export const skillGroups = [
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

export const education = [
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

export const certifications = [
  {
    name: 'AZ-900: Azure Cloud Services and Fundamentals',
    dates: 'Dec 2023',
  },
  {
    name: 'Leading with Vision — LinkedIn Learning',
    dates: 'Apr 2023',
  },
]

export const expertiseAreas = [
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
