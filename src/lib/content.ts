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
  { label: 'STREAMING_SCALE', value: '20M+', unit: '/day', caption: 'Live learning-platform events streamed into BigQuery' },
  { label: 'EMAIL_FRESHNESS', value: '65', unit: '%', caption: 'Improvement in email-data freshness' },
  { label: 'GOVERNANCE_GUARDRAILS', value: '43', unit: '', caption: 'Governance guardrails for sensitive email records' },
  { label: 'ONBOARDING_TIME', value: '4 days', unit: '→ hours', caption: 'Data onboarding turnaround' },
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
    id: 'quantiphi',
    index: '00',
    company: 'Quantiphi Inc.',
    position: 'Senior Data Engineer',
    duration: 'Aug 2026 – Present',
    location: 'Boston, MA',
    summary: 'Data infrastructure for healthcare retrieval and AI workflows.',
    achievements: [
      'Building the data foundation for a healthcare RAG platform. Bringing clinical, operational, and knowledge content into Cloud Storage and BigQuery, with lineage, access controls, and vector indexes for retrieval.',
      'Developing multi-step agents with LangGraph, FastAPI, Vertex AI, and Cloud Run. Adding tool calling, memory, audit logs, and human approvals so teams can review what the agents do.',
    ],
    technologies: ['Python', 'Cloud Storage', 'BigQuery', 'Dataflow', 'Vertex AI', 'LangGraph', 'FastAPI', 'Cloud Run'],
  },
  {
    id: 'wells-fargo-capgemini',
    index: '01',
    company: 'Wells Fargo · via Capgemini America',
    position: 'Data Engineer',
    duration: 'Oct 2025 – Aug 2026',
    location: 'Charlotte, NC',
    summary: 'Cloud data engineering for regulated email records.',
    metrics: [
      { value: '65%', caption: 'improvement in data freshness' },
      { value: '43', caption: 'email governance guardrails' },
      { value: '20', caption: 'teams with on-demand access' },
    ],
    achievements: [
      'Moved on-premises batch email governance to Google Cloud, giving 20 downstream teams on-demand access.',
      'Connected Pub/Sub and Dataflow with Airflow and Cloud Functions for near-real-time email ingestion. Tuned autoscaling, batching, and message acknowledgments, improving data freshness by 65%.',
      'Added 43 guardrails for PII, legal, finance, and cybersecurity requirements using redaction, exclusion, and audit tagging.',
      'Helped build a layered lakehouse with BigQuery, Spark, and Apache Iceberg, serving 14 teams across three domains and refreshing 20+ views hourly.',
      'Stabilized Spark loads across 10 workstreams by fixing skew, memory pressure, shuffle spills, and schema drift.',
    ],
    technologies: ['Pub/Sub', 'Dataflow', 'Airflow', 'Cloud Functions', 'BigQuery', 'Spark', 'Apache Iceberg'],
  },
  {
    id: 'umd-data-specialist',
    index: '02',
    company: 'University of Maryland',
    position: 'Data Specialist',
    duration: 'Sep 2023 – May 2025',
    location: 'College Park, MD',
    summary: 'Data pipelines and retrieval tools for academic operations.',
    metrics: [
      { value: '20M+/day', caption: 'live learning-platform events' },
      { value: '12+', caption: 'departments using a shared data source' },
      { value: '100K+', caption: 'survey responses in a retrieval prototype' },
    ],
    achievements: [
      'Streamed 20M+ live learning-platform events daily into BigQuery, creating a shared data source for 12+ departments.',
      'Replaced weekly snapshots with hourly incremental loads using Parquet, Amazon S3, and Redshift, reducing data latency from days to hours.',
      'Built a retrieval-augmented generation (RAG) prototype over 100K+ survey responses. Used semantic chunking, retrieval, and knowledge graphs to surface themes and quotes, reducing manual review.',
    ],
    technologies: ['Google Cloud', 'BigQuery', 'Parquet', 'Amazon S3', 'Redshift'],
  },
  {
    id: 'tiger-analytics',
    index: '03',
    company: 'Tiger Analytics',
    position: 'Senior Software Engineer — Data Engineering',
    duration: 'Jul 2021 – Jul 2023',
    location: 'Chennai, India',
    summary: 'Self-serve data infrastructure for enterprise clients.',
    metrics: [
      { value: '6', caption: 'enterprise clients' },
      { value: '30+', caption: 'data quality rules' },
      { value: '4 days → hours', caption: 'data onboarding turnaround' },
    ],
    achievements: [
      'Worked with a senior architect from design through rollout on a cloud data platform adopted by six enterprise clients over two years.',
      'Built containerized FastAPI services behind a self-service interface, using Elastic Load Balancing and API Gateway to connect ingestion, source configuration, and asset monitoring.',
      'Built a data quality engine with Scala, Spark, and Deequ. Added 30+ business rules and dashboards that made anomalies easier to find and investigate.',
      'Built an Apache Iceberg lakehouse on S3 with AWS Glue. Used partition pruning, compaction, and type 2 slowly changing dimensions for Athena queries and QuickSight reporting.',
      'Built metadata-driven ingestion with PostgreSQL, Airbyte, Airflow, and Spark, cutting data onboarding from four days to hours.',
    ],
    technologies: ['FastAPI', 'AWS', 'Scala', 'Spark', 'Deequ', 'Apache Iceberg', 'PostgreSQL', 'Airbyte', 'Airflow'],
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
      'Graduate assistantship as Data Specialist.',
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

export type FeaturedProject = {
  id: string
  status: string
  title: string
  subtitle: string
  description: string
  technologies: string[]
  highlights: string[]
}

export const featuredProject: FeaturedProject = {
  id: 'kivi',
  status: 'In development · macOS first',
  title: 'Kivi',
  subtitle: 'Delegate the work. Keep the evidence.',
  description:
    'A local-first workbench for delegated data, AI, and ML work, designed to carry objectives through investigation, execution, verification, and recovery.',
  technologies: ['Rust', 'TypeScript', 'Local-first'],
  highlights: [
    'Keep objectives, approvals, and evidence connected across sessions',
    'Bound delegated work with explicit permissions and budgets',
    'Verify outcomes before treating the work as complete',
  ],
}

export type Photo = {
  src: string
  preview: string
  caption: string
}

export const photos: Photo[] = [
  'Ferris wheel',
  'Autumn roadside',
  'Open water',
  'Lakeside dock',
  'Manhattan Bridge',
  'On approach',
  'Through the window',
  'Lower Manhattan',
  'The small door',
  'Fireworks',
  'Last light at the airport',
  'A walk in the woods',
  'Snow along the road',
  'Outside the Tonight Show',
  'Tree-lined path',
  'Macy’s on 34th Street',
  'The corner newsstand',
  'At the top of the stairs',
  'Red stone facade',
  'Under the railing',
].map((caption, index) => ({
  src: `/photography/${index + 1}.jpeg`,
  preview: `/portfolio/${index + 1}.webp`,
  caption,
}))

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

