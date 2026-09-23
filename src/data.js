export const profile = {
  name: 'Daniel Iyanuoluwa Akande',
  handle: '"Leinad"',
  role: 'Backend engineer building the systems under agricultural marketplaces and exam platforms — and a final-year aerospace engineering student at Obafemi Awolowo University.',
  desc: "Results-driven backend engineer with a track record across hackathons, bootcamps and production systems: RESTful APIs, relational schemas, and services that hold up under load. Currently sole backend developer on AgroBridge and picking up frontend engineering to round out the stack.",
}

export const projects = [
  {
    coord: 'A.01',
    name: 'AgroBridge',
    status: 'In development',
    role: 'Backend Developer · Co-Founder & Technical Lead',
    desc: 'A multi-role agricultural marketplace for Nigerian farmers, buyers and agents, running in parallel over the web and USSD. Built the auth system, a Redis-backed USSD flow engine with role-specific dashboards, escrow payments, delivery logistics with fee calculation, price-alert cron jobs, and an ML-backed price prediction module.',
    stack: ['Node.js', 'TypeScript', 'Express', 'PostgreSQL / Prisma', 'Redis', "Africa's Talking", 'Paystack + Pandascrow', 'OpenRouteService'],
    link: null,
  },
  {
    coord: 'A.02',
    name: 'AFCF Online Quiz',
    status: 'Live',
    role: 'Full-stack developer',
    desc: 'A timed exam platform built for aspirants sitting a specific school exam. Server-enforced exam timing, subject-combination-based question pulls, an admin console for scheduling exams and managing questions, a scoreboard with Billboard-style rank-trend arrows, and an in-exam calculator added after student feedback.',
    stack: ['TypeScript', 'Node.js', 'Express', 'MongoDB', 'Google Forms API'],
    link: { label: 'afcf-online-quiz.vercel.app', url: 'https://afcf-online-quiz.vercel.app' },
  },
  {
    coord: 'A.03',
    name: 'Logirate',
    status: 'Techcrush Cohort 2',
    role: 'Backend developer',
    desc: 'A logistics rate management platform handling multi-variable cargo rate calculations. Engineered the backend service logic, designed and implemented APIs for rate calculations and database operations, and optimized queries for efficient retrieval and updates of shipping rate records. Later extended into a mobile platform for real-time transport fare comparisons across operators.',
    stack: ['Node.js', 'Express.js', 'PostgreSQL', 'REST APIs'],
    link: null,
  },
  {
    coord: 'A.04',
    name: 'To-Do List Web Application',
    status: 'Personal project',
    role: 'Full-stack developer',
    desc: 'A full-stack task management application with secure user authentication and state synchronization. Designed relational database schemas in PostgreSQL and built scalable Express.js endpoints for high-throughput CRUD operations.',
    stack: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL'],
    link: null,
  },
]

// Styled on the page as a drawing's revision history
export const revisions = [
  { rev: '07', date: 'Sep 2026 —', desc: 'Frontend Development Student, TechCrush Cohort 9 — responsive design, modern JS frameworks, UI engineering.' },
  { rev: '06', date: 'Jul 2026 —', desc: 'Backend Developer · Co-Founder & Technical Lead, AgroBridge — auth, USSD engine, escrow payments, logistics, price prediction.' },
  { rev: '05', date: 'May–Jul 2026', desc: 'Backend Development, TechCrush Buildathon 2.0 — core backend architecture for AgroBridge across web, mobile and USSD.' },
  { rev: '04', date: 'Aug–Nov 2025', desc: 'Artificial Intelligence Student, TechCrush Cohort 3 — computer vision pipelines and ML classifiers detecting Fall Armyworm infestations.' },
  { rev: '03', date: 'Mar–Jul 2025', desc: 'Backend Development Student, TechCrush Cohort 2 — backend microservices and DB integration for the LogiRate mobile platform.' },
  { rev: '02', date: 'Aug–Dec 2024', desc: 'Backend Development Student, LevelUp — high-performance service APIs, dynamic blog site, RESTful endpoint work.' },
  { rev: '01', date: '2021–2024', desc: 'Software Development Intern, Microlab (OAU) — object-oriented Python applications, game logic algorithms, state management.' },
]

export const stack = [
  { item: 'TypeScript / JavaScript', cat: 'Language', note: 'Primary languages across all backend work' },
  { item: 'Python', cat: 'Language', note: 'OOP applications, ML classification pipelines' },
  { item: 'Go', cat: 'Language', note: 'Learning toward platform / infra engineering' },
  { item: 'Node.js + Express', cat: 'Backend', note: 'Modular architecture, src/modules/{feature}' },
  { item: 'PostgreSQL + Prisma', cat: 'Data', note: 'Hosted on Supabase; query optimization' },
  { item: 'MongoDB / SQLite', cat: 'Data', note: 'Used across quiz platform and smaller projects' },
  { item: 'Redis (Upstash)', cat: 'Infra', note: 'Session storage, USSD state machine' },
  { item: "Africa's Talking", cat: 'Integration', note: 'USSD + SMS channel' },
  { item: 'Paystack + Pandascrow', cat: 'Integration', note: 'Payments and escrow' },
  { item: 'OpenRouteService', cat: 'Integration', note: 'Geocoding, delivery logistics' },
  { item: 'React', cat: 'Frontend', note: 'Learning full-stack via AgroBridge and TechCrush Cohort 9' },
  { item: 'Git, GitHub, VS Code, Postman', cat: 'Tooling', note: 'Debugging and performance tuning' },
  { item: 'Render + Supabase Storage', cat: 'Deploy / Infra', note: 'Free-tier hosting, image storage' },
]

export const education = [
  {
    label: 'B.Sc. Aerospace Engineering',
    org: 'Obafemi Awolowo University, Ile-Ife',
    note: 'Expected graduation 2027 · Aerodynamics, Computational Fluid Dynamics, Aircraft Design, CAD',
  },
  {
    label: 'High School',
    org: 'Ambassadors College, Ile-Ife',
    note: 'Graduated 2021 · 7 Distinctions, 2 Credits (O-Level)',
  },
]

export const certifications = [
  'Backend Development Certification — LevelUp Bootcamp',
  'Backend Software Engineering Certification — TechCrush Cohort 2',
  'Artificial Intelligence & Machine Learning Certification — TechCrush Cohort 3',
]

// Lighter secondary work, kept off the main resume-facing sections
export const otherWork = [
  { name: 'TechScope', desc: 'Africa/global tech blog on Blogger with a custom HTML design system, including the "How Your Phone Works" explainer series.' },
  { name: 'Simplr', desc: 'Faceless Instagram content brand across Fashion, Tech, Organization and Lifestyle pillars.' },
]

export const contact = {
  email: 'danielakande33@gmail.com',
  phone: '+234 906 602 4558',
  github: { label: 'github.com/leinadiyanu', url: 'https://github.com/leinadiyanu' },
  linkedin: { label: 'Daniel Akande', url: 'https://linkedin.com/in/' },
  location: 'Ile-Ife, Osun State, Nigeria',
}
