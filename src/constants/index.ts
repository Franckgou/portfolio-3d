import type { TNavLink, TService, TTechnology, TExperience, TProject } from '../types';
import restaurantPOS from '../assets/projects/content-recommendation.png';
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  reactjs,
  nodejs,
  git,
  python,
  java,
  django,
  postgresql,
  mysql,
  aws,
  intelligentsia,
  movieRecommender,
  fakeNewsDetector,
  stockManager,
  pkf,
  adobe,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Backend Engineer',
    icon: backend,
  },
  {
    title: 'Systems Architect',
    icon: web,
  },
  {
    title: 'Database Engineer',
    icon: creator,
  },
  {
    title: 'Cloud & DevOps',
    icon: mobile,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React',
    icon: reactjs,
  },
  {
    name: 'Node.js',
    icon: nodejs,
  },
  {
    name: 'Django',
    icon: django,
  },
  {
    name: 'PostgreSQL',
    icon: postgresql,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'AWS',
    icon: aws,
  },
];

const experiences: TExperience[] = [
  {
    title: 'Software Engineer Intern',
    companyName: 'PACI (PKF Alumni Network)',
    icon: pkf,
    iconBg: '#E6DEDD',
    date: 'December 2024 - Present',
    points: [
      'Architected end-to-end resume review platform with PostgreSQL schema design, role-based access control, and AWS S3 integration handling 1,000+ file uploads with comprehensive validation',
      'Led critical database migration from SQLite to PostgreSQL achieving zero data loss, 40% performance improvement, and reduced initialization time from hours to seconds through Python automation with SQLAlchemy ORM',
      'Implemented FastAPI RESTful endpoints with JWT authentication, multi-part file upload support, comprehensive error handling, and input validation using Pydantic',
      'Optimized backend performance through PostgreSQL query optimization, connection pooling, advanced indexing strategies, and efficient data access patterns',
      'Established production-grade deployment pipeline with Docker containerization, Alembic migrations for zero-downtime deployments, and CI/CD automation',
      'Collaborated with cross-functional teams to deliver scalable backend solutions serving 1,000+ users at pkfalumni.com while maintaining high code quality standards',
    ],
  },
  {
    title: 'Adobe Student Ambassador',
    companyName: 'Adobe & Kennesaw State University',
    icon: adobe,
    iconBg: '#FF0000',
    date: 'August 2024 - Present',
    points: [
      'Selected as Adobe Student Ambassador to represent Adobe Creative Cloud on campus and promote creative tools to fellow students',
      'Lead social media engagement and peer-to-peer advocacy initiatives, sharing experiences using Adobe products for technical documentation, presentations, and project showcases',
      'Demonstrate how creative tools complement technical skills, helping students discover the intersection of design and development',
      'Actively participate in the Adobe Ambassador network nationwide, exchanging ideas and staying updated on new Adobe features and student resources',
      'Balance ambassador responsibilities with senior Computer Science coursework while strengthening skills in product advocacy, digital marketing, and community engagement',
    ],
  },
  {
    title: 'Software Engineer Intern',
    companyName: 'Intelligentsia SA',
    icon: intelligentsia,
    iconBg: '#383E56',
    date: 'June 2023 - August 2023',
    points: [
      'Spearheaded complete automation of legacy mailing system migration using Python and Node.js, transforming manual processes into efficient automated workflows',
      'Achieved remarkable 80% reduction in processing time through strategic optimization and implementation of streamlined migration algorithms',
      'Developed comprehensive server management tools that boosted operational efficiency by 25% for enterprise infrastructure serving 1,000+ active user accounts',
      'Led cross-functional deployment of scalable migration solutions, ensuring zero downtime during critical system transitions',
      'Conducted technical presentations and knowledge transfer sessions, significantly enhancing cross-team communication and collaboration',
      'Implemented robust error handling and data validation mechanisms, achieving 95% system reliability improvement',
    ],
  },
];

const projects: TProject[] = [
  {
    name: 'CacheGrid',
    description:
      'High-performance distributed in-memory cache system built with Python and FastAPI. Achieves 50,000+ operations/second with sub-10ms P99 latency. Features multiple eviction policies (LRU, LFU, TTL), comprehensive monitoring, Docker support, and seamless horizontal scaling. Designed for production workloads with 99.9% availability.',
    tags: [
      { name: 'python', color: 'blue-text-gradient' },
      { name: 'fastapi', color: 'green-text-gradient' },
      { name: 'docker', color: 'pink-text-gradient' },
      { name: 'redis', color: 'orange-text-gradient' },
      { name: 'asyncio', color: 'blue-text-gradient' },
      { name: 'caching', color: 'green-text-gradient' },
    ],
    image: restaurantPOS, // Temporary - will update with proper image
    sourceCodeLink: 'https://github.com/Franckgou/cachegrid',
    features: [
      '50,000+ operations/second throughput with sub-10ms P99 latency',
      'Multiple eviction policies: LRU, LFU, TTL-based, size-based',
      'Comprehensive metrics and health monitoring',
      'Docker and Docker Compose support for easy deployment',
      'Python async client SDK with automatic failover',
      'Batch operations for improved performance',
      'RESTful API with interactive Swagger documentation',
      'Memory management with configurable limits',
    ],
  },
  {
    name: 'Restaurant Point of Sale System',
    description:
      'Robust backend API for a modern Restaurant Point-of-Sale system built with FastAPI and PostgreSQL. Features secure authentication, role-based access control, employee management, and comprehensive API documentation. Designed to replace legacy systems with a scalable, high-performance architecture.',
    tags: [
      { name: 'python', color: 'blue-text-gradient' },
      { name: 'fastapi', color: 'green-text-gradient' },
      { name: 'postgresql', color: 'pink-text-gradient' },
      { name: 'sqlalchemy', color: 'orange-text-gradient' },
      { name: 'pydantic', color: 'blue-text-gradient' },
      { name: 'jwt', color: 'green-text-gradient' },
    ],
    image: restaurantPOS,
    sourceCodeLink: 'https://github.com/Franckgou/restaurant-pos-system',
    features: [
      'FastAPI high-performance web framework for building APIs',
      'PostgreSQL relational database with SQLAlchemy ORM',
      'JWT authentication with secure password hashing (Bcrypt)',
      'Role-based access control (Manager, Waiter, Cook, Busboy)',
      'Comprehensive employee management CRUD operations',
      'Interactive API documentation with Swagger UI',
      'Database migrations with Alembic',
      'Pydantic data validation and settings management',
    ],
  },
  {
    name: 'Movie Recommendation Platform',
    description:
      'Advanced recommendation system achieving 90% accuracy using TF-IDF and cosine similarity algorithms. Features secure user authentication, responsive UI, and efficiently processes 10,000+ movie entries for personalized recommendations within 2 seconds. Demonstrates expertise in machine learning, full-stack development, and performance optimization.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'nodejs', color: 'green-text-gradient' },
      { name: 'postgresql', color: 'pink-text-gradient' },
      { name: 'python', color: 'orange-text-gradient' },
      { name: 'machine-learning', color: 'blue-text-gradient' },
    ],
    image: movieRecommender,
    sourceCodeLink: 'https://github.com/Franckgou/content-recommendation',
  },
  {
    name: 'Fake News Detector',
    description:
      'Intelligent machine learning-based web application leveraging Natural Language Processing to detect misinformation. Features real-time analysis capabilities, support for both text input and file upload, comprehensive visualization of prediction results, and educational insights about news credibility assessment.',
    tags: [
      { name: 'python', color: 'blue-text-gradient' },
      { name: 'streamlit', color: 'green-text-gradient' },
      { name: 'machine-learning', color: 'pink-text-gradient' },
      { name: 'nlp', color: 'orange-text-gradient' },
    ],
    image: fakeNewsDetector,
    sourceCodeLink: 'https://github.com/Franckgou/fake-news-detector',
  },
  {
    name: 'Enterprise Stock Management System',
    description:
      'Comprehensive inventory tracking and management system that revolutionized stock operations by reducing discrepancies by 30% and improving restocking efficiency by 20%. Handles 50,000-item inventory with automated stock updates, intelligent alerts, and real-time analytical dashboards for data-driven decision making.',
    tags: [
      { name: 'java', color: 'blue-text-gradient' },
      { name: 'mysql', color: 'green-text-gradient' },
      { name: 'dashboard', color: 'pink-text-gradient' },
      { name: 'enterprise', color: 'orange-text-gradient' },
    ],
    image: stockManager,
    sourceCodeLink: 'https://github.com/Franckgou/',
  },
];

export { services, technologies, experiences, projects };
