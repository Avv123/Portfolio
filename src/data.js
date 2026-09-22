export const profile = {
  name: 'Aryaman Vishnoi',
  role: 'Software Engineer',
  focus: 'Go & Distributed Systems',
  location: 'Gurugram, India',
  email: 'aryamanvishnoi2003@gmail.com',
  tagline:
    "I build backend systems that don't fall over — billing pipelines, real-time analytics, and observability platforms, mostly in Go.",
  bio: [
    "I'm a software engineer at Omniful, building production backend systems in Go for billing, analytics, and supply-chain operations.",
    "The problems I enjoy most only show up under real load — a retry that shouldn't double-charge a tenant, a batch job that needs to recover cleanly from a partial failure, a query pattern that's fine at 10 tenants and falls over at 100. Most of my work has been chasing down and designing around exactly those edges.",
    "I'm just as interested in the data side of things: keeping numbers consistent across services that were never built to agree with each other, and building the alerting that tells you the moment they don't.",
    "Outside of work, I've solved 1,500+ algorithmic problems across coding platforms and hold a Specialist rank on Codeforces — that foundation shows up in how I debug production issues and design efficient systems.",
  ],
}

export const socials = [
  { label: 'GitHub', href: 'https://github.com/Avv123', handle: '@Avv123' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aryaman-vishnoi-827502229/',
    handle: 'aryaman-vishnoi',
  },
  { label: 'LeetCode', href: 'https://leetcode.com/u/av68762/', handle: 'av68762' },
  { label: 'Codeforces', href: 'https://codeforces.com/profile/av1602', handle: 'av1602 · Specialist' },
  { label: 'CodeChef', href: 'https://www.codechef.com/users/arya_162', handle: 'arya_162' },
  { label: 'Codolio', href: 'https://codolio.com/profile/Arya', handle: 'Arya' },
]

export const experience = [
  {
    company: 'Omniful AI',
    role: 'Software Developer',
    period: 'Jul 2025 — Present',
    location: 'Gurugram, India',
    points: [
      'Spearheaded architecture and development of the Billing Service for 100+ enterprise tenants, processing 100K+ billable operational records/month across orders, shipments, and warehouse receipts, at 99.9% uptime.',
      'Reduced bill-generation time by 70% by replacing sequential synchronous processing with an event-driven fan-out/fan-in workflow over AWS SQS, using 12+ async workers to pull data from 11 external services in parallel.',
      'Eliminated per-item N+1 database queries through batch fetching and Redis caching, cutting redundant DB queries by 40%.',
      'Owned the Analytics & Reporting Service, powering real-time dashboards and 30+ reports across 9 business verticals for 100+ tenants.',
      'Engineered a CDC pipeline (Estuary + Kafka → Tinybird/ClickHouse) ingesting 5M+ events/day.',
      'Built an automated data-consistency alerting system reconciling MongoDB, PostgreSQL, and Tinybird, improving detection time by 95%.',
    ],
    tags: ['Go', 'AWS SQS', 'Redis', 'Kafka', 'ClickHouse', 'PostgreSQL', 'MongoDB'],
  },
  {
    company: 'Omniful AI',
    role: 'Software Developer Intern',
    period: 'Jan 2025 — Jun 2025',
    location: 'Gurugram, India',
    points: [
      'Built a Go code generator converting JSON Schemas into typed structs with validation tags, plus JSON Schema Draft 7 validation for schema files and runtime event payloads.',
      'Developed a YAML-backed event registry tracking event versions and producer/consumer metadata, with a CLI to register new event types end-to-end in a single command.',
      'Added Slack support to the Notification Service, letting internal services submit messages through an API for asynchronous, worker-based delivery to configured channels.',
    ],
    tags: ['Go', 'JSON Schema', 'CLI Tooling', 'Slack API'],
  },
]

export const projects = [
  {
    name: 'PulseLens',
    subtitle: 'Multi-tenant observability platform',
    description:
      'Enterprise-grade observability suite unifying logs, metrics, and traces for multi-tenant telemetry. Decoupled Go microservices with a centralized control plane for strict tenant isolation, a Kafka-backed ingestion pipeline for high-throughput writes, and a rule-based alerting engine with Slack/webhook/email notifications.',
    highlights: [
      'Chaos-drill testing simulating Kafka/DB outages to verify automated recovery',
      'ClickHouse-backed query engine for real-time telemetry analytics',
      'Backup/restore verification baked into the validation suite',
    ],
    stack: ['Go', 'React', 'Kafka', 'ClickHouse', 'PostgreSQL', 'Redis', 'Docker'],
    href: 'https://github.com/Avv123/Multi-Tenant-Observability-Platform',
    year: '2026',
  },
  {
    name: 'job-alerts',
    subtitle: 'Self-hosted job monitor on GitHub Actions',
    description:
      'A free job-opening monitor that needs no server: it runs on a GitHub Actions schedule, checks company career pages every 6 hours across Greenhouse/Lever/Ashby/Workday/SmartRecruiters, filters by keyword/seniority/experience/location, and emails only genuinely new postings — scored and tiered by fit.',
    highlights: [
      'ATS-aware fetchers plus a Playwright fallback for career pages with no public API',
      'State tracked and committed per company so nothing is ever emailed twice',
      'Per-company health tracking to catch silently broken scrapers',
    ],
    stack: ['Python', 'Playwright', 'GitHub Actions', 'Resend API'],
    href: 'https://github.com/Avv123/job-alerts',
    year: '2025',
    meta: 'MIT · 2 stars',
  },
  {
    name: 'idempo',
    subtitle: 'Idempotency middleware for Go, stdlib-only',
    description:
      'A dependency-free Go middleware that makes any HTTP POST endpoint safe to retry. A request replaying an earlier Idempotency-Key gets the original response back — even if the retry races the original request or arrives after it already succeeded or failed.',
    highlights: [
      'Handles concurrent retries via in-flight request coordination, not just cache lookups',
      'Configurable fingerprinting, namespacing per tenant, and cacheable-status rules',
      'DESIGN.md documents the reasoning behind every decision, including rejected alternatives',
    ],
    stack: ['Go', 'net/http'],
    href: 'https://github.com/Avv123/idempo',
    year: '2025',
  },
]

export const skills = [
  { group: 'Languages', items: ['Go', 'C++', 'Python', 'JavaScript', 'SQL'] },
  { group: 'Frameworks & Runtimes', items: ['Django', 'Node.js', 'Express.js', 'React'] },
  { group: 'Databases & Caching', items: ['MongoDB', 'PostgreSQL', 'ClickHouse', 'Redis'] },
  { group: 'Messaging & Data', items: ['Kafka', 'AWS SQS', 'Tinybird', 'Estuary'] },
  { group: 'Cloud & Tools', items: ['AWS (S3)', 'Docker', 'Git', 'Linux', 'New Relic'] },
]

export const achievements = [
  { stat: '1,500+', label: 'problems solved across coding platforms' },
  { stat: '42 / 3,393', label: 'rank in GeeksForGeeks Job-a-thon 2023' },
  { stat: 'Specialist', label: 'rank on Codeforces' },
  { stat: 'Runner-up', label: 'Hyperverge Hackathon 2024' },
]

export const education = {
  school: 'Jaypee Institute of Information Technology',
  degree: 'B.Tech in Computer Science',
  detail: 'CGPA: 8.0 / 10',
  period: '2021 — 2025',
  location: 'Noida, Uttar Pradesh',
}
