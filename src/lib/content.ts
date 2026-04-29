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
  eyebrow: 'data · ml · inference',
  tagline: 'I turn messy data into systems you can bet on.',
  subhead:
    'Pipelines, analytics, and agentic workflows — instrumented end to end for teams that need speed without gambling on correctness.',
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

export type Greeting = { greeting: string; language: string }

export const greetings: Greeting[] = [
  { greeting: 'Hello', language: 'English' },
  { greeting: 'Hola', language: 'Spanish' },
  { greeting: 'Bonjour', language: 'French' },
  { greeting: 'Hallo', language: 'German' },
  { greeting: 'Ciao', language: 'Italian' },
  { greeting: 'Ola', language: 'Portuguese' },
  { greeting: 'Privet', language: 'Russian' },
  { greeting: 'Konnichiwa', language: 'Japanese' },
  { greeting: 'Ni hao', language: 'Mandarin' },
  { greeting: 'Annyeonghaseyo', language: 'Korean' },
  { greeting: 'Marhaba', language: 'Arabic' },
  { greeting: 'Namaste', language: 'Hindi' },
  { greeting: 'Namaskar', language: 'Odia' },
  { greeting: 'Hej', language: 'Swedish' },
  { greeting: 'Hei', language: 'Norwegian' },
  { greeting: 'Merhaba', language: 'Turkish' },
  { greeting: 'Yassas', language: 'Greek' },
  { greeting: 'Salam', language: 'Persian' },
  { greeting: 'Shalom', language: 'Hebrew' },
  { greeting: 'Jambo', language: 'Swahili' },
  { greeting: 'Aloha', language: 'Hawaiian' },
  { greeting: 'Sawasdee', language: 'Thai' },
  { greeting: 'Xin chao', language: 'Vietnamese' },
  { greeting: 'Kamusta', language: 'Filipino' },
  { greeting: 'Halo', language: 'Indonesian' },
  { greeting: 'Bula', language: 'Fijian' },
  { greeting: 'Szia', language: 'Hungarian' },
  { greeting: 'Dzien dobry', language: 'Polish' },
  { greeting: 'God dag', language: 'Danish' },
  { greeting: 'Salaam', language: 'Urdu' },
]

// Top-line metrics for the telemetry strip — pulled from real role achievements.
export type Telemetry = {
  label: string
  value: string
  unit: string
  caption: string
}

export const telemetry: Telemetry[] = [
  { label: 'PEAK_THROUGHPUT', value: '20', unit: 'M/day', caption: 'ELMS events → BigQuery' },
  { label: 'LATENCY_REDUCED', value: '750', unit: 'ms', caption: 'platform API p50' },
  { label: 'ONBOARDING_CUT', value: '90', unit: '%', caption: 'source intake cycle' },
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

// Core stack — rendered as a numbered 01–15 mono list.
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
    summary: 'Leading enterprise cloud modernization and event-driven data quality delivery.',
    metrics: [
      { value: 'GCP', caption: 'ground→cloud POC' },
      { value: 'ICEBERG', caption: 'lakehouse curation' },
    ],
    achievements: [
      'Leading a GCP migration proof-of-concept for enterprise Ground-to-Cloud strategy.',
      'Building Airflow + Dataflow quality pipelines triggered from SQL Server to GCS drops, curating trusted Iceberg lakehouse data.',
    ],
    technologies: ['GCP', 'Airflow', 'Dataflow', 'Pub/Sub', 'Apache Iceberg'],
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
      'Streamed 20M+ ELMS events/day into BigQuery for analytics across 230 programs.',
      'Optimized 119-table ingestion runtime from 6 hours to 45 minutes using CDC + validation.',
      'Built RAG tooling for 100K+ survey responses, reducing review timelines from 5 to 2 days.',
    ],
    technologies: ['BigQuery', 'Pub/Sub', 'Dataflow', 'LangChain', 'Elasticsearch', 'Python'],
  },
  {
    id: 'tiger-analytics',
    index: '02',
    company: 'Tiger Analytics',
    position: 'Senior Software Engineer — Data Platform',
    duration: 'Jul 2021 – Jul 2023',
    location: 'Chennai, India',
    summary: 'Led delivery of a self-serve data fabric used by Fortune 500 clients.',
    metrics: [
      { value: '6', caption: 'enterprise clients' },
      { value: '90%', caption: 'onboarding cycle cut' },
      { value: '750ms', caption: 'API latency reduced' },
    ],
    achievements: [
      'Built a multi-tenant data fabric across AWS and GCP for 6 enterprise clients.',
      'Reduced source onboarding cycle time by 90% with standardized ingestion and compliance controls.',
      'Improved platform API performance with a 750ms median latency reduction.',
    ],
    technologies: ['AWS', 'Spark', 'Airflow', 'FastAPI', 'Kubernetes', 'DataHub'],
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
      'Migrated Hadoop jobs to Databricks, processing 10GB/day telemetry from 45 IoT sites.',
      'Enabled incremental forecasting pipelines with 15-minute prediction freshness.',
      'Improved ML iteration speed by 33% through MLflow integration.',
    ],
    technologies: ['Databricks', 'Spark', 'Kafka', 'Delta Lake', 'MLflow'],
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
    'Ingestion, lakehouse, transforms, semantic layer, BI, and an AI copilot — collapsed into a single desktop binary. Built for the operator, not the platform team.',
  technologies: ['Rust', 'Tauri', 'React', 'DataFusion', 'DuckDB', 'Iceberg'],
  highlights: [
    'Connect any source, land as Iceberg or Delta in your own object store',
    'Ask in plain English — get a plan, SQL draft, and citable answer',
    'Every agent mutation is reviewable — humans approve before anything runs',
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

// EXIF-style metadata is illustrative — the photos are real, lens/aperture strings are styling.
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
  id: 'phone' | 'email' | 'linkedin' | 'github'
  label: string
  display: string
  href: string
  command: string
}

export const contactLinks: ContactLink[] = [
  {
    id: 'phone',
    label: 'PHONE',
    display: '+1 (240) 495-9874',
    href: 'tel:+12404959874',
    command: 'dial',
  },
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
  body: 'Open to consulting, full-time roles, and tight collaborations on data platforms and AI systems — async-first, with clear milestones and measurable exits.',
}

export const footerCopy = {
  copyright: `© ${new Date().getFullYear()} Sagar Das`,
  deps: 'next · react · typescript · tailwind · framer-motion',
}
