export const COMPANY = {
  name: "Tathagata Technology",
  shortName: "Tathagata",
  tagline: "Transforming ideas into digital reality.",
  description:
    "Tathagata Technology is a digital product engineering partner in Ahmedabad. From AI systems to high-performance web and mobile applications, we design and engineer digital products built for growth.",
  emailGeneral: "info@tathagatatechnology.in",
  emailSales: "sales@tathagatatechnology.in",
  phone: "+91 75750 96359",
  phoneHref: "tel:+917575096359",
  whatsapp: "https://wa.me/917575096359",
  address: "611, I Square Corporate Park, Science City, Ahmedabad, Gujarat 380060",
  hours: "Mon - Sat: 11AM - 7PM",
  linkedin: "https://in.linkedin.com/company/tathagatatechnology",
  instagram: "https://www.instagram.com/tathagatatechnology",
  logo: "/logo-wide.svg",
  founded: "2025",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/product", label: "Product" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export type Service = {
  slug: string;
  title: string;
  summary: string;
  points: string[];
  benefits: string[];
  stack: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    summary:
      "We build fast, responsive websites that look great on any device. Using modern frameworks like React, Next.js, WordPress, and Framer, we create custom web applications that load quickly, rank well on Google, and convert visitors into customers.",
    points: [
      "Full-stack web development",
      "E-commerce solutions",
      "Progressive web apps",
      "API integration",
      "CMS development",
      "Website maintenance",
    ],
    benefits: [
      "Sites load in under 2 seconds",
      "Google-friendly SEO built-in",
      "Works on mobile & desktop",
      "Grows with your business",
    ],
    stack: ["React", "Next.js", "WordPress", "Framer", "Node.js"],
  },
  {
    slug: "mobile-development",
    title: "Mobile Development",
    summary:
      "We create mobile apps that work on both iPhone and Android from a single codebase. This means lower costs for you and faster delivery — without sacrificing quality or user experience.",
    points: [
      "React Native apps",
      "iOS development",
      "Android development",
      "App store optimization",
      "UI/UX design",
      "App maintenance",
    ],
    benefits: [
      "One app for both platforms",
      "Launch in 3–4 weeks",
      "Native speed and feel",
      "Ongoing support included",
    ],
    stack: ["React Native", "iOS", "Android", "Firebase"],
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    summary:
      "We integrate artificial intelligence into your existing systems — automating repetitive tasks, answering customer questions 24/7, and uncovering insights from your data that you would otherwise miss.",
    points: [
      "Machine learning",
      "Natural language processing",
      "Computer vision",
      "Predictive analytics",
      "Chatbot development",
      "AI integration",
    ],
    benefits: [
      "Cut manual work by 50%+",
      "Instant answers for customers",
      "Smarter business decisions",
      "Stay ahead of competitors",
    ],
    stack: ["Python", "LLMs", "Django", "OpenAI"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    summary:
      "SEO, PPC, content strategy, and data-driven campaigns to grow your online presence — and turn traffic into revenue.",
    points: [
      "Search engine optimization",
      "PPC advertising",
      "Content strategy",
      "Data-driven campaigns",
    ],
    benefits: [
      "Rank higher on Google",
      "Measurable campaign ROI",
      "Content that converts",
      "Decisions backed by data",
    ],
    stack: ["SEO", "PPC", "Analytics", "Content"],
  },
  {
    slug: "custom-software",
    title: "Custom Software Development",
    summary:
      "Tailored internal tools, dashboards, and digital products engineered around exactly how your business runs.",
    points: [
      "Internal tools & dashboards",
      "API development & integration",
      "Cloud infrastructure",
      "Maintenance & support",
    ],
    benefits: [
      "Built around your workflow",
      "Secure & reliable by default",
      "Quality assured before delivery",
      "30 days of free support after launch",
    ],
    stack: ["Node.js", "Python", "PostgreSQL", "Docker"],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  result: string;
  description: string;
  stack: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "pixel-ideas-partnership",
    title: "Partnered Delivery with Pixel Ideas",
    category: "Outsourcing Partner",
    result: "On time, measurable results",
    description:
      "Our outsourcing and collaboration partner for technology projects. Pixel Ideas connects us with opportunities while we provide full-cycle development services including website, application, and digital product development.",
    stack: ["Web", "Mobile", "Marketing"],
  },
  {
    slug: "ecommerce-solutions",
    title: "E-commerce Solutions",
    category: "Web Development",
    result: "Loads in under 2 seconds",
    description:
      "Full-stack online stores with fast checkouts, payment integrations, and Google-friendly SEO built in from day one.",
    stack: ["Next.js", "Shopify", "SEO"],
  },
  {
    slug: "cross-platform-apps",
    title: "Cross-Platform Mobile Apps",
    category: "Mobile Development",
    result: "Launch in 3–4 weeks",
    description:
      "One codebase for iPhone and Android with native speed and feel — plus store optimization and ongoing support.",
    stack: ["React Native", "Firebase"],
  },
  {
    slug: "ai-integrations",
    title: "AI Integrations for Business",
    category: "AI Solutions",
    result: "Cut manual work by 50%+",
    description:
      "Chatbots, predictive analytics, and intelligent automation integrated into existing systems — answering customers 24/7.",
    stack: ["Python", "LLMs", "Django"],
  },
  {
    slug: "growth-campaigns",
    title: "SEO & Growth Campaigns",
    category: "Digital Marketing",
    result: "Rank higher, convert more",
    description:
      "Data-driven SEO, PPC, and content strategy that grows online presence and turns traffic into revenue.",
    stack: ["SEO", "PPC", "Analytics"],
  },
  {
    slug: "business-websites",
    title: "Business Websites that Convert",
    category: "Web Development",
    result: "Mobile & desktop ready",
    description:
      "Responsive marketing sites and PWAs for healthcare, finance, e-commerce, education, real estate, logistics, and startups.",
    stack: ["React", "WordPress", "Framer"],
  },
];

export type ProductDetail = {
  slug: string;
  name: string;
  tag: string;
  headline: string;
  body: string;
  bullets: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  stats: { value: string; unit: string; sub: string }[];
  features: { h: string; p: string }[];
  audience: string[];
  faqs: { q: string; a: string }[];
};

export const PRODUCTS: ProductDetail[] = [
  {
    slug: "cartpos",
    name: "CartPOS",
    tag: "Retail billing app",
    headline: "Billing, inventory and GST invoices — at the counter in seconds.",
    body: "CartPOS is a fast point-of-sale app for Indian retail shops, cafes and pharmacies. Bill customers, track stock, print GST invoices and accept UPI — even when the internet drops.",
    bullets: ["30-second GST billing", "Offline-first counter mode", "UPI + cash + card payments"],
    metaTitle: "CartPOS — Fast GST Billing & POS App for Retail Shops",
    metaDescription:
      "CartPOS by Tathagata Technology: offline-first POS billing app with GST invoices, inventory tracking and UPI payments for retail shops, cafes and pharmacies.",
    keywords: ["POS billing app India", "GST billing software", "retail POS app", "inventory management app", "UPI billing", "CartPOS"],
    stats: [
      { value: "30", unit: "sec bills", sub: "Average time to complete a counter bill" },
      { value: "100", unit: "% offline", sub: "Billing works with zero internet" },
      { value: "GST", unit: "ready", sub: "GST invoices, returns-ready reports" },
      { value: "UPI", unit: "+ more", sub: "UPI, cash, card and split payments" },
    ],
    features: [
      { h: "Counter billing", p: "Barcode, search or quick-tap billing. Prints and WhatsApps the receipt before the customer blinks." },
      { h: "GST invoices", p: "GST-ready tax invoices with HSN codes, plus GSTR-friendly sales reports every month." },
      { h: "Inventory tracking", p: "Stock in, stock out, low-stock alerts. Know what to reorder without counting shelves." },
      { h: "Offline-first", p: "Power cut or dead Wi-Fi? Keep billing. Everything syncs when you are back online." },
      { h: "Staff & shifts", p: "Cashier logins, shift summaries and end-of-day collection reports per counter." },
      { h: "Owner dashboard", p: "Daily sales, top items and dead stock — on your phone, from anywhere." },
    ],
    audience: ["Kirana & retail shops", "Cafes & bakeries", "Pharmacies", "Salons & multi-counter stores"],
    faqs: [
      { q: "Does CartPOS work without internet?", a: "Yes. Billing, printing and stock updates all work offline and sync automatically when you reconnect." },
      { q: "Is CartPOS GST compliant?", a: "Yes. It generates GST tax invoices with HSN codes and exports sales reports your CA can file with." },
      { q: "What hardware do I need?", a: "Any Android phone or tablet, plus an optional Bluetooth printer and barcode scanner." },
      { q: "Can I see sales from home?", a: "Yes. The owner dashboard shows live sales, top items and collections on your phone." },
    ],
  },
  {
    slug: "hrms",
    name: "HRMS Suite",
    tag: "HR web + mobile app",
    headline: "Attendance, payroll and leave — web for HR, app for everyone.",
    body: "HRMS Suite is a complete HR platform: a powerful web console for HR teams plus a mobile app for employees. Attendance with selfie check-in, leave approvals, payroll slips and company announcements in one place.",
    bullets: ["Web console + employee app", "Selfie attendance with location", "Payroll slips & leave flow"],
    metaTitle: "HRMS Suite — HRMS Web App with Employee Mobile App",
    metaDescription:
      "HRMS Suite by Tathagata Technology: HR web console plus employee mobile app with selfie attendance, leave approvals, payroll slips and announcements.",
    keywords: ["HRMS software India", "HRMS web application", "employee mobile app", "attendance management system", "payroll software", "leave management", "HRMS Suite"],
    stats: [
      { value: "2", unit: "platforms", sub: "Web console for HR, app for staff" },
      { value: "10", unit: "sec check-in", sub: "Selfie attendance with location tag" },
      { value: "1", unit: "tap leaves", sub: "Apply, approve and track balances" },
      { value: "0", unit: "registers", sub: "Digital records replace paper files" },
    ],
    features: [
      { h: "Web console for HR", p: "Employees, shifts, holidays, policies and full reports — everything HR needs on desktop." },
      { h: "Employee mobile app", p: "Check in, apply leave, download slips and read announcements from one app." },
      { h: "Selfie attendance", p: "Photo check-in with GPS location and shift rules. No biometric hardware needed." },
      { h: "Leave management", p: "Balances, approvals and holiday calendars. Managers approve in one tap." },
      { h: "Payroll slips", p: "Salary structure, monthly slips and Form 16-ready records employees download themselves." },
      { h: "Announcements", p: "Push company news, policy updates and payslip alerts straight to every phone." },
    ],
    audience: ["SMEs with 10–500 staff", "Retail chains & field teams", "Schools & hospitals", "Agencies with shift workers"],
    faqs: [
      { q: "Is there really both a web app and a mobile app?", a: "Yes. HR works on the web console; employees use the Android/iOS app for attendance, leaves and slips." },
      { q: "How does attendance work without machines?", a: "Employees check in with a selfie. GPS location and shift timings are recorded automatically." },
      { q: "Can it handle our leave policy?", a: "Yes. Earned, sick and casual leaves with custom balances, carry-forward rules and approval chains." },
      { q: "Is our salary data safe?", a: "Yes. Role-based access means employees only see their own data, on encrypted cloud servers." },
    ],
  },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  readTime: string;
  body: string[];
};

export const POSTS: Post[] = [
  {
    slug: "nextjs-vs-wordpress-2026",
    title: "Next.js vs WordPress in 2026: what SMBs should pick",
    excerpt: "Speed, SEO, security, and cost — a practical decision guide for business owners, not developers.",
    date: "Sep 12, 2026",
    tag: "Web",
    readTime: "6 min read",
    body: [
      "Most small businesses don't need a debate about frameworks — they need a site that loads fast, ranks, and is cheap to maintain.",
      "Choose Next.js when speed, custom UX, and scale matter. Choose WordPress when your team must publish daily with zero dev help.",
      "Our rule: marketing + product in Next.js, blog editing via a headless CMS. You get both worlds. That is exactly how we build client sites at Tathagata.",
    ],
  },
  {
    slug: "cloud-cost-mistakes",
    title: "5 AWS cost mistakes we fix in almost every audit",
    excerpt: "Oversized EC2, missing lifecycle rules, no alerts — and how we cut one clinic's bill by 42%.",
    date: "Aug 28, 2026",
    tag: "Cloud",
    readTime: "5 min read",
    body: [
      "Untracked NAT gateways, always-on dev servers, and S3 without lifecycle rules are the top offenders we see.",
      "Start with Cost Explorer alerts, right-size with Compute Optimizer, and move static assets to S3 + CloudFront.",
      "Need a second pair of eyes? Our audit pays for itself — write to sales@tathagatatechnology.in.",
    ],
  },
  {
    slug: "ai-support-inbox",
    title: "How we triage info@ + sales@ inboxes with AI",
    excerpt: "A lightweight pipeline that classifies, drafts replies, and keeps humans in control.",
    date: "Aug 10, 2026",
    tag: "AI",
    readTime: "7 min read",
    body: [
      "Volume kills response time. We classify every inbound message into sales, support, or spam before a human sees it.",
      "An LLM drafts a reply from templates + past tickets. Staff approve or edit in one click.",
      "Result: faster replies, no missed quotes, and a clean audit trail for every lead.",
    ],
  },
];

export const IMAGES = {
  team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
  desk: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
  cloud: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",
  mobile: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
  ux: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop",
  office: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600&auto=format&fit=crop",
};

export const CLIENTS = [
  { mark: "PI", name: "Pixel Ideas" },
];

export const PARTNER = {
  name: "Pixel Ideas",
  role: "Outsourcing & collaboration partner",
  quote:
    "Tathagata Technology is our trusted tech partner for outsourcing. Together we deliver end-to-end web and marketing solutions for our clients — on time and with measurable results.",
  author: "Varun Gahoi",
  authorRole: "Co-Founder, Pixel Ideas",
};

export const TESTIMONIALS = [
  {
    quote:
      "Tathagata Technology transformed our vision into a powerful financial advisory website. Their expertise in Next.js and custom software development delivered a sleek, professional platform that perfectly represents our brand. Highly recommend their team for quality web solutions.",
    name: "Kandarp Barot",
    role: "Founder, Finmarg Advisory Services",
    project: "Finmarg Advisory Website",
    img: "",
  },
  {
    quote:
      "Tathagata Technology is our trusted tech partner for outsourcing. Together we deliver end-to-end web and marketing solutions for our clients — on time and with measurable results.",
    name: "Varun Gahoi",
    role: "Co-Founder, Pixel Ideas",
    project: "Partnered Delivery & Outsourcing",
    img: "",
  },
];

export const INDUSTRIES = [
  {
    name: "Healthcare",
    challenge: "Reaching patients online while keeping trust and compliance intact.",
    fix: "Fast, SEO-ready websites and tools built for healthcare workflows.",
  },
  {
    name: "Finance",
    challenge: "Explaining complex services in a way visitors act on.",
    fix: "Clear, conversion-focused web platforms with secure foundations.",
  },
  {
    name: "E-commerce",
    challenge: "Slow stores and drop-offs at checkout.",
    fix: "Sub-2-second storefronts with payments and SEO built in.",
  },
  {
    name: "Education",
    challenge: "Turning visitors into admissions.",
    fix: "Marketing sites, funnels, and content that bring in students.",
  },
  {
    name: "Real Estate",
    challenge: "Standing out in a crowded listings market.",
    fix: "Showcase sites with lead capture that actually converts.",
  },
  {
    name: "Logistics",
    challenge: "Manual coordination eating margins.",
    fix: "Dashboards, integrations, and automation that cut busywork.",
  },
  {
    name: "Startups",
    challenge: "Shipping fast on a startup budget.",
    fix: "One codebase for web and mobile, live in weeks — not quarters.",
  },
];
export const TECHNOLOGIES_ROW_A = [
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Three.js", slug: "threedotjs" },
  { name: "Angular", slug: "angular" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Python", slug: "python" },
  { name: "Express", slug: "express" },
  { name: "Django", slug: "django" },
  { name: "Android", slug: "android" },
  { name: "React Native", slug: "react" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Supabase", slug: "supabase" },
  { name: "Firebase", slug: "firebase" },
  { name: "Docker", slug: "docker" },
  { name: "Shopify", slug: "shopify" },
  { name: "WordPress", slug: "wordpress" },
  { name: "Framer", slug: "framer" },
  { name: "Webflow", slug: "webflow" },
  { name: "Redis", slug: "redis" },
];

export const TECHNOLOGIES_ROW_B = [
  { name: "Redis", slug: "redis" },
  { name: "Webflow", slug: "webflow" },
  { name: "Framer", slug: "framer" },
  { name: "WordPress", slug: "wordpress" },
  { name: "Shopify", slug: "shopify" },
  { name: "Docker", slug: "docker" },
  { name: "Firebase", slug: "firebase" },
  { name: "Supabase", slug: "supabase" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "React Native", slug: "react" },
  { name: "Android", slug: "android" },
  { name: "Django", slug: "django" },
  { name: "Express", slug: "express" },
  { name: "Python", slug: "python" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Angular", slug: "angular" },
  { name: "Three.js", slug: "threedotjs" },
  { name: "TypeScript", slug: "typescript" },
  { name: "JavaScript", slug: "javascript" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "React", slug: "react" },
];

export const JOURNEY = [
  {
    year: "2025",
    chip: "info" as const,
    title: "The Beginning — Two Passionate Minds Unite",
    text: "One technical expert and one marketing strategist came together with a shared vision: to transform businesses through innovative technology solutions. Tathagata was founded.",
  },
  {
    year: "2025",
    chip: "pass" as const,
    title: "First Big Win — Landing Our First Major Project",
    text: "We secured our first big project. It taught us invaluable lessons about client expectations, project scaling, and delivering enterprise-level solutions.",
  },
  {
    year: "2025",
    chip: "pass" as const,
    title: "Learning & Growth — Challenges Made Us Stronger",
    text: "Like many startups, we faced setbacks and downfalls. Each challenge became a learning opportunity, strengthening our resolve and refining our approach.",
  },
  {
    year: "2025",
    chip: "active" as const,
    title: "Strategic Partnerships — Collaborating with Industry Leaders",
    text: "The turning point came when we partnered with Pixel Ideas and other key collaborators. These partnerships transformed our capabilities — 4+ projects delivered.",
  },
];

export const STATS = [
  { value: "11+", label: "Projects completed" },
  { value: "6+", label: "Happy clients" },
  { value: "2+", label: "Countries served" },
  { value: "18+", label: "Portfolio projects" },
];

export const VALUES = [
  {
    title: "Client Focus",
    text: "We prioritize your goals and work tirelessly to exceed expectations.",
  },
  {
    title: "Innovation",
    text: "We embrace new technologies and creative solutions to solve complex problems.",
  },
  {
    title: "Passion",
    text: "We love what we do and it shows in every project we deliver.",
  },
  {
    title: "Excellence",
    text: "We strive for perfection in every detail of our work.",
  },
];

export const MISSION = {
  title: "Empowering Businesses Through Technology",
  body: "We strive to democratize advanced technology, making it accessible and beneficial for businesses everywhere. Our mission is to help organizations unlock their full potential through innovative digital solutions.",
  points: [
    "Deliver exceptional quality in every project",
    "Maintain transparent communication",
    "Build long-term partnerships",
    "Stay ahead of technology trends",
  ],
};

export const ADVANTAGES = [
  {
    title: "Fast Delivery",
    text: "Most projects delivered in 4–8 weeks. We hit deadlines because we plan ahead.",
  },
  {
    title: "Secure & Reliable",
    text: "Your data stays safe with enterprise-grade security and backups.",
  },
  {
    title: "Quality Assured",
    text: "Every project passes through rigorous testing before delivery.",
  },
  {
    title: "Support Included",
    text: "30 days of free support after launch. We stay available long-term.",
  },
];

export const FAQS = [
  {
    q: "What web development services do you offer?",
    a: "Custom web applications, e-commerce platforms, Progressive Web Apps (PWA), API integrations, CMS development (WordPress), and website maintenance — across React, Next.js, Node.js, and modern web technologies.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Most projects are delivered in 4–8 weeks. We plan ahead and hit deadlines — and every launch includes 30 days of free support.",
  },
  {
    q: "Which industries do you work with?",
    a: "Healthcare, finance, e-commerce, education, real estate, logistics, and startups. Our team adapts to each industry's unique requirements.",
  },
];

export const BUDGETS = [
  "Under INR10K",
  "INR10K – INR25K",
  "INR25K – INR50K",
  "INR50K – INR100K",
  "INR100K+",
];

export const PROCESS = [
  { step: "01", title: "Discover", text: "30-min call, goals, scope, and fixed quote. No jargon." },
  { step: "02", title: "Design", text: "Wireframes first, then UI in your brand. You approve every screen." },
  { step: "03", title: "Build", text: "Weekly demos on staging. Clean Next.js + TypeScript code." },
  { step: "04", title: "Launch & care", text: "Deploy, analytics, training, and AMC support." },
];
