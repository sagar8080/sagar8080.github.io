// Single source of truth for portfolio content.
// All synthwave components read from here so copy changes only happen in one place.

export type Profile = {
  name: string
  handle: string
  role: string
  eyebrow: string
  tagline: string
  subhead: string
  resumeUrl: string
  status: {
    label: string
    available: boolean
  }
}

export const profile: Profile = {
  name: 'Sagar Das',
  handle: '~/sagar',
  role: 'Data & AI Engineer',
  eyebrow: 'data platforms · ai engineering · trusted workflows',
  tagline:
    'I build scalable data platforms and AI infrastructure for trusted enterprise workflows.',
  subhead:
    'Python, SQL, Spark, Beam, Kafka, Airflow, Iceberg, BigQuery, Rust, TypeScript, RAG, vector search, and agentic AI systems.',
  resumeUrl: '/resume.pdf',
  status: {
    label: 'ACCEPTING_NEW_PROJECTS',
    available: true,
  },
}

export const heroHighlights = [
  'Pipelines you can replay and audit',
  'RAG with eval hooks, not vibes',
  'Failure modes handled before scale',
] as const

export type Greeting = {
  greeting: string // romanized form for accessibility
  native?: string // native script (when different from the romanization)
  language: string
}

// Forty greetings. Used by the homepage hero cycler. Where the script differs
// from the romanization, both are stored so the cycler can show the native
// form prominently and the romanization as the small label.
export const greetings: Greeting[] = [
  { greeting: 'Hello', language: 'English' },
  { greeting: 'Hola', language: 'Spanish' },
  { greeting: 'Bonjour', language: 'French' },
  { greeting: 'Hallo', language: 'German' },
  { greeting: 'Ciao', language: 'Italian' },
  { greeting: 'Olá', language: 'Portuguese' },
  { greeting: 'Privet', native: 'Привет', language: 'Russian' },
  { greeting: 'Konnichiwa', native: 'こんにちは', language: 'Japanese' },
  { greeting: 'Nǐ hǎo', native: '你好', language: 'Mandarin' },
  { greeting: 'Annyeonghaseyo', native: '안녕하세요', language: 'Korean' },
  { greeting: 'Marhaba', native: 'مرحبا', language: 'Arabic' },
  { greeting: 'Namaste', native: 'नमस्ते', language: 'Hindi' },
  { greeting: 'Namaskar', native: 'ନମସ୍କାର', language: 'Odia' },
  { greeting: 'Vanakkam', native: 'வணக்கம்', language: 'Tamil' },
  { greeting: 'Nomoshkar', native: 'নমস্কার', language: 'Bengali' },
  { greeting: 'Sat Sri Akal', native: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ', language: 'Punjabi' },
  { greeting: 'Namaste', native: 'નમસ્તે', language: 'Gujarati' },
  { greeting: 'Swagat', native: 'ಸ್ವಾಗತ', language: 'Kannada' },
  { greeting: 'Swagatam', native: 'స్వాగతం', language: 'Telugu' },
  { greeting: 'Hej', language: 'Swedish' },
  { greeting: 'Hei', language: 'Norwegian' },
  { greeting: 'Moi', language: 'Finnish' },
  { greeting: 'Halló', language: 'Icelandic' },
  { greeting: 'God dag', language: 'Danish' },
  { greeting: 'Dzień dobry', language: 'Polish' },
  { greeting: 'Szia', language: 'Hungarian' },
  { greeting: 'Ahoj', language: 'Czech' },
  { greeting: 'Zdravo', language: 'Croatian' },
  { greeting: 'Zdravey', native: 'Здравей', language: 'Bulgarian' },
  { greeting: 'Yassas', native: 'Γεια σας', language: 'Greek' },
  { greeting: 'Merhaba', language: 'Turkish' },
  { greeting: 'Salam', native: 'سلام', language: 'Persian' },
  { greeting: 'Shalom', native: 'שלום', language: 'Hebrew' },
  { greeting: 'Jambo', language: 'Swahili' },
  { greeting: 'Sawubona', language: 'Zulu' },
  { greeting: 'Sawasdee', native: 'สวัสดี', language: 'Thai' },
  { greeting: 'Xin chào', language: 'Vietnamese' },
  { greeting: 'Halo', language: 'Indonesian' },
  { greeting: 'Kamusta', language: 'Filipino' },
  { greeting: 'Aloha', language: 'Hawaiian' },
]

// Top-line metrics for the telemetry strip. Pulled from real role achievements.
export type Telemetry = {
  label: string
  value: string
  unit: string
  caption: string
}

export const telemetry: Telemetry[] = [
  { label: 'LEGACY_MODERNIZATION', value: '900+', unit: '', caption: 'Java modules → Spark + Beam' },
  { label: 'STREAMING_SCALE', value: '20', unit: 'M/day', caption: 'events into BigQuery' },
  { label: 'DATASETS_ONBOARDED', value: '35+', unit: '', caption: 'financial datasets → lakehouse' },
  { label: 'INGEST_RUNTIME', value: '6h→45m', unit: '', caption: '119-table CDC + validation' },
]

// Navigation: anchor → label. Labels are uppercase short codes for the status bar.
export type NavLink = { href: string; label: string; long: string }

export const navLinks: NavLink[] = [
  { href: '#hero', label: 'HOME', long: 'Home' },
  { href: '#capabilities', label: 'CAPS', long: 'Capabilities' },
  { href: '#stack', label: 'STACK', long: 'Stack' },
  { href: '#log', label: 'LOG', long: 'Experience' },
  { href: '#work', label: 'WORK', long: 'Projects' },
  { href: '#offline', label: 'OFFLINE', long: 'Photography' },
  { href: '#connect', label: 'CONNECT', long: 'Contact' },
]

// Capability domains rendered as mini SVG diagrams (later component will swap on `diagram`).
export type CapabilityDomain = {
  id: string
  index: string
  title: string
  subtitle: string
  diagram: 'pipeline' | 'rag' | 'opsloop'
  tools: string[]
}

export const capabilityDomains: CapabilityDomain[] = [
  {
    id: 'data-platforms',
    index: '01',
    title: 'Data Platforms',
    subtitle: 'Streaming, warehousing, and lakehouse foundations',
    diagram: 'pipeline',
    tools: ['BigQuery', 'Redshift', 'Postgres', 'Kafka', 'Spark', 'Airflow', 'Apache Iceberg'],
  },
  {
    id: 'ai-engineering',
    index: '02',
    title: 'AI Engineering',
    subtitle: 'RAG workflows, retrieval systems, and model ops',
    diagram: 'rag',
    tools: ['LangChain', 'RAG', 'Vector Search', 'Elasticsearch', 'Prompt Engineering', 'Evaluation Pipelines'],
  },
  {
    id: 'platform-reliability',
    index: '03',
    title: 'Platform Reliability',
    subtitle: 'Infrastructure, deployment, and observability',
    diagram: 'opsloop',
    tools: ['Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Data Observability', 'Security Controls'],
  },
]

// Core stack. Rendered as a numbered 01–15 mono list.
export const coreStack: string[] = [
  'Python',
  'SQL',
  'Rust',
  'FastAPI',
  'Spark',
  'Airflow',
  'Kafka',
  'BigQuery',
  'Postgres',
  'Elasticsearch',
  'Docker',
  'Kubernetes',
  'Terraform',
  'LangChain',
  'RAG',
]

export type MethodGroup = { id: string; title: string; items: string[] }

export const methodGroups: MethodGroup[] = [
  {
    id: 'core',
    title: 'Core Engineering',
    items: [
      'Data Structures & Algorithms',
      'Distributed Systems',
      'MLOps',
      'CI/CD Pipelines',
      'GitOps',
      'REST APIs',
      'Backend Development',
      'Server Side Programming',
    ],
  },
  {
    id: 'architecture',
    title: 'Data Architecture',
    items: [
      'Data Lakehouse Architecture',
      'Data Mesh',
      'Data Governance',
      'ETL/ELT Pipelines',
      'Real-time Data Processing',
      'Data Warehousing',
      'Data Cataloging',
      'Streaming Analytics',
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & ML',
    items: [
      'RAG Systems',
      'Vector Databases',
      'Fine-tuning',
      'Prompt Engineering',
      'Model Deployment & Monitoring',
      'Feature Engineering',
      'Automated Machine Learning',
      'Explainable AI',
    ],
  },
  {
    id: 'advanced',
    title: 'Advanced Systems',
    items: [
      'Event-Driven Architecture',
      'Data Observability',
      'Data Security',
      'Federated Learning',
      'Edge Computing',
      'IoT Data Integration',
      'Data Quality',
      'Metadata Management',
    ],
  },
]

export type Metric = { value: string; caption: string }

export type ExperienceEntry = {
  id: string
  index: string
  company: string
  position: string
  duration: string
  location: string
  summary: string
  metrics?: Metric[]
  achievements: string[]
  technologies: string[]
}

export const experience: ExperienceEntry[] = [
  {
    id: 'wells-fargo-capgemini',
    index: '00',
    company: 'Wells Fargo · via Capgemini America Inc.',
    position: 'Data Engineer',
    duration: 'Oct 2025 – Present',
    location: 'Charlotte, NC',
    summary: 'Leading GenAI-assisted modernization, lakehouse architecture, and event-driven ingestion for regulated financial data.',
    metrics: [
      { value: '900+', caption: 'Java modules migrated' },
      { value: '35+', caption: 'financial datasets' },
      { value: '20+ yrs', caption: 'reporting context' },
    ],
    achievements: [
      'Led a GenAI-assisted modernization initiative using GitHub Copilot to migrate 900+ legacy Java modules into Spark and Apache Beam pipelines in roughly 7 months versus a 2+ year manual rewrite estimate.',
      'Architected an Apache Iceberg + BigQuery lakehouse for an on-prem-to-GCP migration POC, onboarding 35+ financial datasets with SAR/CSAR compliance considerations.',
      'Built event-driven ingestion on GCS, Airflow, and Dataflow with schema enforcement, DQ checks, curated lakehouse outputs, and a BigQuery semantic layer over 20+ years of financial data.',
    ],
    technologies: ['GCP', 'GitHub Copilot', 'Apache Beam', 'Spark', 'Airflow', 'Dataflow', 'BigQuery', 'Apache Iceberg'],
  },
  {
    id: 'umd-data-specialist',
    index: '01',
    company: 'University of Maryland',
    position: 'Data Specialist',
    duration: 'Sep 2023 – May 2025',
    location: 'College Park, MD',
    summary: 'Built high-throughput analytics and AI systems for academic operations and research.',
    metrics: [
      { value: '20M/day', caption: 'ELMS events → BQ' },
      { value: '6h→45m', caption: '119-table CDC' },
      { value: '5d→2d', caption: 'survey RAG review' },
    ],
    achievements: [
      'Engineered a Pub/Sub + Dataflow streaming pipeline ingesting 20M+ daily ELMS events into BigQuery for real-time Superset dashboards tracking 15 KPIs across 230 academic programs.',
      'Overhauled 119 Redshift ingestion workflows in Python, SQL, and AWS with CDC and validation, cutting runtime from 6 hours to 45 minutes.',
      'Prepared an LLM-powered RAG POC over 100K+ open-ended survey responses using Python, LangChain, and Elasticsearch, reducing qualitative review effort by 60%.',
    ],
    technologies: ['BigQuery', 'Pub/Sub', 'Dataflow', 'LangChain', 'Elasticsearch', 'Python'],
  },
  {
    id: 'tiger-analytics',
    index: '02',
    company: 'Tiger Analytics',
    position: 'Senior Software Engineer. Data Platform',
    duration: 'Jul 2021 – Jul 2023',
    location: 'Chennai, India',
    summary: 'Led delivery of a self-serve data fabric used by Fortune 500 clients.',
    metrics: [
      { value: '6', caption: 'enterprise clients' },
      { value: '75%', caption: 'onboarding time cut' },
      { value: '85+', caption: 'analysts + ML engineers' },
    ],
    achievements: [
      'Led a 7-engineer team building a self-serve AWS data platform that enabled data mesh adoption across 6 enterprise clients.',
      'Designed an Apache Iceberg lakehouse on S3 with Glue Catalog, schema evolution, ACID transactions, and time-travel queries for reproducible ML training datasets and historical analytics.',
      'Developed Airbyte/Airflow batch and streaming ingestion with CDC, encryption, Macie PII detection, and a Spark + Deequ DQ framework with 30+ rules, reducing onboarding time by 75% and blocking 85% of bad data before downstream ML.',
      'Shipped FastAPI microservices on Kubernetes exposing ELT orchestration as self-serve REST APIs for 85+ analysts and ML engineers.',
    ],
    technologies: ['AWS', 'Spark', 'Airflow', 'Airbyte', 'FastAPI', 'Kubernetes', 'Apache Iceberg', 'Deequ'],
  },
  {
    id: 'xenonstack',
    index: '03',
    company: 'Xenonstack Pvt. Limited',
    position: 'Intern & Software Engineer',
    duration: 'Jan 2019 – Nov 2019',
    location: 'Chandigarh, India',
    summary: 'Built the data engineering foundation for realtime analytics and MLOps workflows.',
    metrics: [
      { value: '10GB/day', caption: '45 IoT sites' },
      { value: '15min', caption: 'forecast freshness' },
      { value: '33%', caption: 'MLOps iteration ↑' },
    ],
    achievements: [
      'Delivered Spark + Kafka pipelines processing 10GB/day of IoT telemetry from 45 geo-distributed sites into a medallion Delta Lake.',
      'Enabled incremental forecasting pipelines with 15-minute prediction freshness.',
      'Improved ML iteration speed by 33% through MLflow integration.',
    ],
    technologies: ['Databricks', 'Spark', 'Kafka', 'Delta Lake', 'MLflow'],
  },
]

// ── Education ───────────────────────────────────────────────────────────────
// Placeholders. Edit degree names, institutions, and dates to match your record.

export type EducationEntry = {
  id: string
  institution: string
  degree: string
  focus?: string
  location: string
  duration: string
  highlights?: string[]
}

export const education: EducationEntry[] = [
  {
    id: 'umd-ms',
    institution: 'University of Maryland. College Park',
    degree: 'Master of Information Management',
    location: 'College Park, MD',
    duration: 'Aug 2023 – May 2025',
    highlights: [
      'Graduate assistantship as Data Specialist. Built analytics + AI systems across 230 academic programs.',
      'Coursework: distributed systems, retrieval, applied ML, data governance.',
    ],
  },
  {
    id: 'undergrad',
    institution: 'Panjab University, Chandigarh',
    degree: 'B.E. Information Technology',
    location: 'India',
    duration: '2015 – 2019',
  },
]

export type ProjectCategory = 'DATA_ENG' | 'AI' | 'ML' | 'PLATFORM'

export type Project = {
  id: string
  index: string
  title: string
  description: string
  image: string
  impact: string
  category: ProjectCategory
  categoryLabel: string
  technologies: string[]
  github: string
}

export const projects: Project[] = [
  {
    id: 'data-fusion',
    index: '01',
    title: 'BigQuery Analytics Fabric',
    description:
      'Streaming-first data platform design for large-scale analytics with governance and observability.',
    image: '/gcp.jpg',
    impact: '20M+ daily events',
    category: 'DATA_ENG',
    categoryLabel: 'Data Engineering',
    technologies: ['Google Cloud', 'Dataflow', 'BigQuery', 'Python', 'Pub/Sub'],
    github: 'https://github.com/sagar8080/data-fusion-engineering',
  },
  {
    id: 'semantic-search',
    index: '02',
    title: 'Intelligent Record Management',
    description:
      'RAG-powered document intelligence stack for semantic retrieval and decision support.',
    image: '/doc_processing.jpg',
    impact: '100K+ docs processed',
    category: 'AI',
    categoryLabel: 'AI Systems',
    technologies: ['Python', 'NLP', 'Elasticsearch', 'FastAPI', 'LangChain'],
    github: 'https://github.com/sagar8080/semantic-search-system',
  },
  {
    id: 'loan-prediction',
    index: '03',
    title: 'Loan Default Prediction',
    description:
      'End-to-end ML workflow for risk prediction with explainable features and reproducible training.',
    image: '/ml_pipeline.jpg',
    impact: 'Faster underwriting decisions',
    category: 'ML',
    categoryLabel: 'Machine Learning',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'MLflow'],
    github: 'https://github.com/sagar8080/loan-default-prediction',
  },
  {
    id: 'fintech-analytics',
    index: '04',
    title: 'Fintech Data Prep Engine',
    description:
      'Batch and incremental ETL framework for financial metrics and operations reporting.',
    image: '/coding.jpg',
    impact: 'Reliable recurring analytics',
    category: 'DATA_ENG',
    categoryLabel: 'Data Engineering',
    technologies: ['Apache Spark', 'AWS', 'Python', 'Airflow'],
    github: 'https://github.com/sagar8080/data-prep-for-fintech-loan-analytics',
  },
  {
    id: 'eks-monitoring',
    index: '05',
    title: 'EKS Monitoring Stack',
    description:
      'Kubernetes observability system with metrics, dashboards, and alert policy automation.',
    image: '/kubernetes.jpg',
    impact: 'Operational visibility',
    category: 'PLATFORM',
    categoryLabel: 'Platform',
    technologies: ['Kubernetes', 'Prometheus', 'Grafana', 'AWS'],
    github: 'https://github.com/sagar8080/eks-and-monitoring',
  },
  {
    id: 'sports-analytics',
    index: '06',
    title: 'Sports Analytics Lab',
    description:
      'Exploratory analytics environment for performance prediction and model experimentation.',
    image: '/sports_analytics.jpg',
    impact: 'Predictive insights',
    category: 'ML',
    categoryLabel: 'Machine Learning',
    technologies: ['Python', 'Pandas', 'Tableau', 'Statistics'],
    github: 'https://www.kaggle.com/code/sagardas96/das-inst627-fall-2023',
  },
]

export const projectFilters: { id: ProjectCategory | 'ALL'; label: string }[] = [
  { id: 'ALL', label: 'ALL' },
  { id: 'DATA_ENG', label: 'DATA_ENG' },
  { id: 'AI', label: 'AI' },
  { id: 'ML', label: 'ML' },
  { id: 'PLATFORM', label: 'PLATFORM' },
]

export type DownloadFile = {
  url: string
  filename: string
  label: string
}

export type PlatformDownload = {
  platform: 'macOS' | 'Linux' | 'Windows'
  files: DownloadFile[]
}

export type FeaturedProject = {
  id: string
  status: string
  title: string
  subtitle: string
  description: string
  technologies: string[]
  highlights: string[]
  downloads: PlatformDownload[]
}

export const featuredProject: FeaturedProject = {
  id: 'pulseql',
  status: 'v1.0.0',
  title: 'PulseQL',
  subtitle: 'The data lifecycle, in one app.',
  description:
    'A governed data workspace for teams that want AI-assisted analysis with review, privacy, and operational trust.',
  technologies: ['Desktop app', 'Governed AI', 'Reviewable workflows'],
  highlights: [
    'Ask questions in plain English and keep the work reviewable',
    'Promote useful outputs into reusable team artifacts',
    'Keep public details focused on workflow and product value',
  ],
  downloads: [
    {
      platform: 'macOS',
      files: [
        { label: '.dmg', filename: 'pulseDesktop_1.0.0_universal.dmg', url: 'https://pub-08fea510099447418d6efca50e163284.r2.dev/pulseql-release/v1.0.0/pulseDesktop_1.0.0_universal.dmg' },
      ],
    },
    {
      platform: 'Windows',
      files: [
        { label: '.exe', filename: 'pulseDesktop_1.0.0_x64-setup.exe', url: 'https://pub-08fea510099447418d6efca50e163284.r2.dev/pulseql-release/v1.0.0/pulseDesktop_1.0.0_x64-setup.exe' },
        { label: '.msi', filename: 'pulseDesktop_1.0.0_x64_en-US.msi', url: 'https://pub-08fea510099447418d6efca50e163284.r2.dev/pulseql-release/v1.0.0/pulseDesktop_1.0.0_x64_en-US.msi' },
      ],
    },
    {
      platform: 'Linux',
      files: [
        { label: '.deb', filename: 'pulseDesktop_1.0.0_amd64.deb', url: 'https://pub-08fea510099447418d6efca50e163284.r2.dev/pulseql-release/v1.0.0/pulseDesktop_1.0.0_amd64.deb' },
        { label: '.rpm', filename: 'pulseDesktop-1.0.0-1.x86_64.rpm', url: 'https://pub-08fea510099447418d6efca50e163284.r2.dev/pulseql-release/v1.0.0/pulseDesktop-1.0.0-1.x86_64.rpm' },
        { label: '.AppImage', filename: 'pulseDesktop_1.0.0_amd64.AppImage', url: 'https://pub-08fea510099447418d6efca50e163284.r2.dev/pulseql-release/v1.0.0/pulseDesktop_1.0.0_amd64.AppImage' },
      ],
    },
  ],
}

export type Photo = {
  src: string
  caption: string
  meta: string
}

// EXIF-style metadata is illustrative. The photos are real, lens/aperture strings are styling.
export const photos: Photo[] = [
  { src: '/photography/1.jpeg', caption: 'Olympus EM 10', meta: '35mm · f/1.8 · iso400' },
  { src: '/photography/2.jpeg', caption: 'Olympus EM 10', meta: '50mm · f/2.0 · iso200' },
  { src: '/photography/3.jpeg', caption: 'Olympus EM 10', meta: '24mm · f/4.0 · iso800' },
  { src: '/photography/4.jpeg', caption: 'Olympus EM 10', meta: '85mm · f/1.8 · iso100' },
  { src: '/photography/5.jpeg', caption: 'Olympus EM 10', meta: '35mm · f/2.8 · iso400' },
  { src: '/photography/6.jpeg', caption: 'Olympus EM 10', meta: '50mm · f/1.4 · iso200' },
  { src: '/photography/7.jpeg', caption: 'Olympus EM 10', meta: '28mm · f/4.0 · iso100' },
  { src: '/photography/8.jpeg', caption: 'Olympus EM 10', meta: '35mm · f/2.8 · iso400' },
  { src: '/photography/9.jpeg', caption: 'Olympus EM 10', meta: '50mm · f/2.0 · iso200' },
  { src: '/photography/10.jpeg', caption: 'Olympus EM 10', meta: '24mm · f/8.0 · iso100' },
  { src: '/photography/11.jpeg', caption: 'Olympus EM 10', meta: '85mm · f/1.8 · iso800' },
  { src: '/photography/12.jpeg', caption: 'Olympus EM 10', meta: '35mm · f/2.8 · iso400' },
  { src: '/photography/13.jpeg', caption: 'Olympus EM 10', meta: '50mm · f/1.8 · iso200' },
]

export type ContactLink = {
  id: 'email' | 'linkedin' | 'github'
  label: string
  display: string
  href: string
  command: string
}

export const contactLinks: ContactLink[] = [
  {
    id: 'email',
    label: 'EMAIL',
    display: 'sagardas.work@gmail.com',
    href: 'mailto:sagardas.work@gmail.com',
    command: 'mailto',
  },
  {
    id: 'linkedin',
    label: 'LINKEDIN',
    display: 'linkedin.com/in/sagardas08',
    href: 'https://linkedin.com/in/sagardas08',
    command: 'open',
  },
  {
    id: 'github',
    label: 'GITHUB',
    display: 'github.com/sagar8080',
    href: 'https://github.com/sagar8080',
    command: 'open',
  },
]

export const contactCopy = {
  title: "LET'S SHIP SOMETHING DEFENSIBLE",
  body: 'Open to consulting, full-time roles, and tight collaborations on data platforms and AI systems. Async-first, with clear milestones and measurable exits.',
}

export const footerCopy = {
  copyright: `© ${new Date().getFullYear()} Sagar Das`,
  deps: 'next · react · typescript · tailwind · framer-motion',
}
