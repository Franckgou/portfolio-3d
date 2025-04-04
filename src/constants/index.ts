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
      'Automated mailing system migration, reducing processing time by 80% using Python and Node.js',
      'Developed server management tools, boosting efficiency by 25% for over 1,000 user accounts',
      'Led deployment of scalable migration solutions for enterprise-level systems',
      'Conducted technical presentations enhancing cross-team communication',
    ],
  },
  {
    title: 'Frontend Developer',
    companyName: 'PKF Alumni App',
    icon: pkf, // Add PKF logo to assets
    iconBg: '#E6DEDD',
    date: 'December 2024 - March 2025',
    points: [
      'Designed and implemented alumni cards feature using React.js and modern frontend technologies',
      'Collaborated with a team of experienced alumni developers to create a platform connecting students with graduates',
      'Self-learned React.js through documentation and online resources while meeting project deadlines',
      'Successfully balanced project responsibilities with academic commitments and part-time work through effective scheduling',
      'Contributed to the development of https://pkfalumni.com/ through regular code reviews and pull requests',
    ],
  },
];

const projects: TProject[] = [
  {
    name: 'Movie Recommendation Platform',
    description:
      'Advanced recommendation system achieving 90% accuracy using TF-IDF and cosine similarity. Features secure user authentication, responsive UI, and processes 10,000+ movie entries for personalized recommendations within 2 seconds.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'nodejs', color: 'green-text-gradient' },
      { name: 'postgresql', color: 'pink-text-gradient' },
      { name: 'python', color: 'orange-text-gradient' },
    ],
    image: movieRecommender,
    sourceCodeLink: 'https://github.com/Franckgou/content-recommendation',
  },
  {
    name: 'Fake News Detector',
    description:
      'Machine learning-based web application that detects fake news using Natural Language Processing. Features real-time analysis, support for text input and file upload, and visualization of prediction results.',
    tags: [
      { name: 'python', color: 'blue-text-gradient' },
      { name: 'streamlit', color: 'green-text-gradient' },
      { name: 'machine-learning', color: 'pink-text-gradient' },
    ],
    image: fakeNewsDetector,
    sourceCodeLink: 'https://github.com/Franckgou/fake-news-detector',
  },
  {
    name: 'Stock Management System',
    description:
      'Comprehensive inventory tracking system that reduced discrepancies by 30% and improved restocking efficiency by 20%. Features automated stock updates and alerts for 50,000-item inventory with real-time dashboards.',
    tags: [
      { name: 'java', color: 'blue-text-gradient' },
      { name: 'mysql', color: 'green-text-gradient' },
      { name: 'dashboard', color: 'pink-text-gradient' },
    ],
    image: stockManager,
    sourceCodeLink: 'https://github.com/Franckgou/',
  },
];

export { services, technologies, experiences, projects };
