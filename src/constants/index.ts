import type { TNavLink, TService, TTechnology, TExperience, TProject } from '../types';

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
    title: 'Software Engineer',
    icon: web,
  },
  {
    title: 'Full Stack Developer',
    icon: mobile,
  },
  {
    title: 'Machine Learning Engineer',
    icon: backend,
  },
  {
    title: 'Database Developer',
    icon: creator,
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
    title: 'Intern Software Engineer',
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
      'Implemented robust error handling and data validation mechanisms, achieving 95% system reliability improvement'
    ],
  },
  {
    title: 'Frontend Developer',
    companyName: 'PKF Alumni Network',
    icon: pkf,
    iconBg: '#E6DEDD',
    date: 'December 2024 - March 2025',
    points: [
      'Architected and implemented innovative alumni cards feature using React.js and modern frontend technologies, creating an intuitive user experience',
      'Collaborated effectively with a diverse team of experienced alumni developers to build a comprehensive platform connecting students with industry graduates',
      'Demonstrated exceptional self-learning capabilities by mastering React.js through documentation, online resources, and hands-on practice while meeting strict project deadlines',
      'Successfully balanced multiple responsibilities including project development, academic commitments (4.0 GPA maintenance), and part-time work through strategic time management',
      'Contributed significantly to the development of https://pkfalumni.com/ through regular code reviews, pull requests, and adherence to best practices',
      'Implemented responsive design principles ensuring optimal user experience across all device types and screen sizes'
    ],
  },
];

const projects: TProject[] = [
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