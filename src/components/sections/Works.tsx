// Enhanced Works.tsx with comprehensive README-style content
import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion, AnimatePresence } from 'framer-motion';
import { github } from '../../assets';
import { SectionWrapper } from '../../hoc';
import { projects } from '../../constants';
import { fadeIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';
import { TProject } from '../../types';

// Enhanced project data with README-style content
const enhancedProjectData: Record<
  string,
  {
    overview: string;
    keyFeatures: string[];
    technicalHighlights: string[];
    installation: string[];
    usage: string[];
    architecture: string[];
    performance: string[];
    liveDemo?: string;
  }
> = {
  'Restaurant Point of Sale System': {
    overview:
      'A comprehensive full-stack POS system built for modern restaurants, featuring real-time order management, inventory tracking, and secure payment processing. This system streamlines restaurant operations by integrating all essential components from order taking to payment processing.',
    keyFeatures: [
      'Real-time order management with kitchen display integration',
      'Inventory tracking with automated low-stock alerts',
      'Multi-payment processing (Credit/Debit, Cash, Digital wallets)',
      'Staff management with role-based access control',
      'Sales analytics and reporting dashboard',
      'Receipt printing and customer management',
      'Multi-location support with real-time synchronization',
      'Mobile-responsive design for tablets and smartphones',
    ],
    technicalHighlights: [
      'Built with React.js for dynamic user interfaces',
      'Node.js and Express.js backend with RESTful API',
      'MongoDB for flexible data storage and scalability',
      'Socket.io for real-time order updates',
      'Stripe API integration for secure payment processing',
      'JWT authentication and authorization',
      'Docker containerization for easy deployment',
    ],
    installation: [
      'Clone the repository: git clone https://github.com/Franckgou/restaurant-pos-system',
      'Install dependencies: npm install',
      'Set up environment variables for MongoDB, Stripe, and JWT',
      'Run the development server: npm run dev',
      'Access the application at http://localhost:3000',
    ],
    usage: [
      'Create staff accounts with appropriate roles (Admin, Manager, Cashier)',
      'Set up menu items with categories and pricing',
      'Configure payment methods and tax settings',
      'Train staff on order processing and payment handling',
      'Monitor sales through the analytics dashboard',
    ],
    architecture: [
      'Frontend: React with Redux for state management',
      'Backend: Node.js with Express.js framework',
      'Database: MongoDB with Mongoose ODM',
      'Real-time: Socket.io for live updates',
      'Payment: Stripe API for secure transactions',
      'Deployment: Docker containers with nginx reverse proxy',
    ],
    performance: [
      'Handles 1000+ concurrent orders efficiently',
      'Sub-second response times for order processing',
      '99.9% uptime with proper deployment setup',
      'Optimized database queries with indexing',
      'Cached frequently accessed menu data',
    ],
    liveDemo: 'https://your-pos-demo.netlify.app',
  },
  'Movie Recommendation Platform': {
    overview:
      'An advanced machine learning-powered recommendation system that achieves 90% accuracy using TF-IDF and cosine similarity algorithms. The platform processes over 10,000 movie entries to deliver personalized recommendations within 2 seconds.',
    keyFeatures: [
      '90% recommendation accuracy using advanced ML algorithms',
      'Processes 10,000+ movies with sub-2-second response times',
      'Secure user authentication and profile management',
      'Responsive design optimized for all devices',
      'Real-time recommendation updates',
      'Movie rating and review system',
      'Advanced filtering and search capabilities',
      'Personalized watchlist and favorites',
    ],
    technicalHighlights: [
      'TF-IDF (Term Frequency-Inverse Document Frequency) algorithm',
      'Cosine similarity for content-based filtering',
      'React.js frontend with modern hooks and context',
      'Node.js backend with Express.js framework',
      'PostgreSQL database with optimized queries',
      'Python integration for ML model processing',
      'RESTful API design with comprehensive documentation',
    ],
    installation: [
      'Clone: git clone https://github.com/Franckgou/content-recommendation',
      'Install frontend dependencies: cd frontend && npm install',
      'Install backend dependencies: cd backend && npm install',
      'Install Python dependencies: pip install -r requirements.txt',
      'Set up PostgreSQL database and run migrations',
      'Configure environment variables for database and APIs',
    ],
    usage: [
      'Register an account or log in with existing credentials',
      "Rate movies you've watched to improve recommendations",
      'Browse recommended movies based on your preferences',
      'Add movies to your watchlist for later viewing',
      'Explore different genres and categories',
    ],
    architecture: [
      'Frontend: React with modern hooks and context API',
      'Backend: Node.js with Express.js RESTful API',
      'Database: PostgreSQL with complex relationship modeling',
      'ML Engine: Python with scikit-learn and pandas',
      'Caching: Redis for frequently accessed data',
      'Authentication: JWT with secure token management',
    ],
    performance: [
      '90% recommendation accuracy verified through testing',
      'Sub-2-second response times for recommendations',
      'Optimized database queries with proper indexing',
      'Efficient caching strategies for movie data',
      'Scalable architecture supporting 10,000+ concurrent users',
    ],
  },
  'Fake News Detector': {
    overview:
      'An intelligent machine learning web application that leverages Natural Language Processing to detect misinformation. Features real-time analysis capabilities with comprehensive visualization of prediction results and educational insights.',
    keyFeatures: [
      'Real-time fake news detection using advanced NLP',
      'Support for both text input and file upload',
      'Comprehensive visualization of prediction results',
      'Educational insights about news credibility',
      'Batch processing for multiple articles',
      'Confidence score with detailed explanations',
      'Historical analysis and trends',
      'Export results in multiple formats',
    ],
    technicalHighlights: [
      'Natural Language Processing with NLTK and spaCy',
      'Machine Learning models using scikit-learn',
      'Streamlit framework for rapid web development',
      'Text preprocessing and feature extraction',
      'Multiple ML algorithms (SVM, Random Forest, Naive Bayes)',
      'Model ensemble for improved accuracy',
      'Real-time prediction with confidence intervals',
    ],
    installation: [
      'Clone: git clone https://github.com/Franckgou/fake-news-detector',
      'Install dependencies: pip install -r requirements.txt',
      'Download NLTK data: python -c "import nltk; nltk.download(\'all\')"',
      'Train models: python train_models.py',
      'Run the application: streamlit run app.py',
    ],
    usage: [
      'Paste news article text into the input field',
      'Or upload a text file containing the article',
      "Click 'Analyze' to get real-time predictions",
      'Review the confidence score and explanations',
      'Explore the visualization of key indicators',
    ],
    architecture: [
      'Frontend: Streamlit with interactive components',
      'ML Pipeline: scikit-learn with custom preprocessors',
      'NLP: NLTK and spaCy for text analysis',
      'Data Storage: Pandas for data manipulation',
      'Visualization: Matplotlib and Plotly for charts',
      'Model Persistence: Joblib for model serialization',
    ],
    performance: [
      '85%+ accuracy on news classification',
      'Real-time processing for articles up to 10,000 words',
      'Efficient text preprocessing pipeline',
      'Optimized model inference for quick results',
      'Scalable architecture for high-volume analysis',
    ],
  },
  'Enterprise Stock Management System': {
    overview:
      'A comprehensive inventory tracking and management system that revolutionized stock operations, reducing discrepancies by 30% and improving restocking efficiency by 20%. Built for enterprise-scale operations with robust reporting.',
    keyFeatures: [
      'Real-time inventory tracking and updates',
      'Automated reorder points and notifications',
      'Supplier management and communication',
      'Detailed analytics and reporting dashboard',
      'Barcode scanning and QR code support',
      'Multi-location inventory management',
      'Role-based access control for different user types',
      'Integration with existing ERP systems',
    ],
    technicalHighlights: [
      'Java Spring Boot framework for robust backend',
      'Spring Data JPA for database interactions',
      'MySQL database with optimized schema design',
      'Thymeleaf templating for server-side rendering',
      'Spring Security for authentication and authorization',
      'RESTful API design for system integrations',
      'Scheduled tasks for automated operations',
    ],
    installation: [
      'Clone: git clone https://github.com/Franckgou/stock-management-system',
      'Install Java 11+ and Maven',
      'Set up MySQL database and create schema',
      'Configure application.properties with database credentials',
      'Run: mvn spring-boot:run',
      'Access at http://localhost:8080',
    ],
    usage: [
      'Log in with admin credentials to set up initial inventory',
      'Add suppliers and configure reorder points',
      'Use barcode scanner for quick item entry',
      'Monitor stock levels through the dashboard',
      'Generate reports for inventory analysis',
    ],
    architecture: [
      'Backend: Java Spring Boot with MVC pattern',
      'Database: MySQL with normalized schema design',
      'Frontend: Thymeleaf with Bootstrap for responsive UI',
      'Security: Spring Security with role-based access',
      'API: RESTful endpoints for external integrations',
      'Scheduling: Spring Task Scheduler for automated operations',
    ],
    performance: [
      '30% reduction in inventory discrepancies',
      '20% improvement in restocking efficiency',
      'Handles 100,000+ SKUs efficiently',
      'Sub-second response times for stock queries',
      'Optimized database operations with proper indexing',
    ],
  },
};

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,

  tags,
  image,
  sourceCodeLink,
  liveDemo,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'tech' | 'setup'>(
    'overview'
  );
  const [isExpanded, setIsExpanded] = useState(false);

  const projectData = enhancedProjectData[name];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'features', label: 'Features', icon: '⚡' },
    { id: 'tech', label: 'Tech', icon: '🔧' },
    { id: 'setup', label: 'Setup', icon: '🚀' },
  ];

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      className="w-full max-w-[400px]"
    >
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        glareColor="#ffffff"
        glareBorderRadius="20px"
        glareMaxOpacity={0.1}
        className="w-full"
      >
        <motion.div
          className="relative w-full bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] p-[1px] rounded-[20px] shadow-2xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-all duration-500"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
          animate={{
            minHeight: isExpanded ? '800px' : '500px',
          }}
        >
          <div className="bg-gradient-to-br from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.02)] backdrop-blur-lg border border-[rgba(255,255,255,0.1)] rounded-[20px] p-5 h-full flex flex-col">
            {/* Image and basic info */}
            <div className="relative w-full h-[200px] rounded-[16px] overflow-hidden group mb-5">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="flex gap-3 w-full">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={sourceCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white/20 backdrop-blur-sm rounded-full py-2 px-4 flex items-center justify-center cursor-pointer border border-white/30 text-white text-sm font-medium"
                  >
                    <img src={github} alt="github" className="w-4 h-4 mr-2" />
                    View Code
                  </motion.a>

                  {(liveDemo || projectData?.liveDemo) && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={liveDemo || projectData?.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-[#915eff] to-[#4c1d95] rounded-full py-2 px-4 flex items-center justify-center cursor-pointer text-white text-sm font-medium"
                    >
                      🚀 Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </div>

            {/* Project Title and Description */}
            <h3 className="text-white font-bold text-[20px] mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {name}
            </h3>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map(tag => (
                <span
                  key={`${name}-${tag.name}`}
                  className={`text-[11px] font-medium px-2 py-1 rounded-full backdrop-blur-sm border border-white/20 ${tag.color}`}
                >
                  #{tag.name}
                </span>
              ))}
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-1 mb-4 bg-black/20 p-1 rounded-lg">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 py-2 px-2 rounded-md text-xs font-medium transition-all duration-300 flex items-center justify-center gap-1 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-[#915eff] to-[#4c1d95] text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-sm">{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  {activeTab === 'overview' && projectData && (
                    <div className="space-y-3">
                      <p className="text-secondary text-[13px] leading-[18px]">
                        {projectData.overview}
                      </p>
                      {projectData.performance.length > 0 && (
                        <div>
                          <h4 className="text-white font-semibold text-[14px] mb-2 flex items-center gap-2">
                            📈 Performance Metrics
                          </h4>
                          <ul className="space-y-1">
                            {projectData.performance.slice(0, 3).map((metric, idx) => (
                              <li
                                key={idx}
                                className="text-secondary text-[12px] flex items-start gap-2"
                              >
                                <span className="text-[#915eff] mt-1">•</span>
                                {metric}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === 'features' && projectData && (
                    <div>
                      <h4 className="text-white font-semibold text-[14px] mb-3 flex items-center gap-2">
                        ✨ Key Features
                      </h4>
                      <ul className="space-y-2 max-h-[300px] overflow-y-auto">
                        {projectData.keyFeatures.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-secondary text-[12px] flex items-start gap-2 p-2 bg-black/20 rounded-lg"
                          >
                            <span className="text-[#915eff] mt-1 flex-shrink-0">•</span>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeTab === 'tech' && projectData && (
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-white font-semibold text-[14px] mb-3 flex items-center gap-2">
                          🏗️ Architecture
                        </h4>
                        <ul className="space-y-1">
                          {projectData.architecture.map((item, idx) => (
                            <li
                              key={idx}
                              className="text-secondary text-[12px] flex items-start gap-2"
                            >
                              <span className="text-[#4facfe] mt-1">▸</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold text-[14px] mb-2 flex items-center gap-2">
                          💡 Technical Highlights
                        </h4>
                        <ul className="space-y-1">
                          {projectData.technicalHighlights.slice(0, 4).map((highlight, idx) => (
                            <li
                              key={idx}
                              className="text-secondary text-[12px] flex items-start gap-2"
                            >
                              <span className="text-[#f093fb] mt-1">◆</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeTab === 'setup' && projectData && (
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-white font-semibold text-[14px] mb-3 flex items-center gap-2">
                          📦 Installation
                        </h4>
                        <ol className="space-y-2">
                          {projectData.installation.map((step, idx) => (
                            <li
                              key={idx}
                              className="text-secondary text-[12px] flex items-start gap-2"
                            >
                              <span className="text-[#915eff] bg-[#915eff]/20 rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold mt-0.5 flex-shrink-0">
                                {idx + 1}
                              </span>
                              <code className="bg-black/30 px-2 py-1 rounded text-[11px] break-all">
                                {step}
                              </code>
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold text-[14px] mb-2 flex items-center gap-2">
                          🎯 Quick Start
                        </h4>
                        <ul className="space-y-1">
                          {projectData.usage.slice(0, 3).map((step, idx) => (
                            <li
                              key={idx}
                              className="text-secondary text-[12px] flex items-start gap-2"
                            >
                              <span className="text-[#4ade80] mt-1">→</span>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Expand/Collapse Button */}
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 w-full py-2 bg-gradient-to-r from-[#915eff]/20 to-[#4c1d95]/20 backdrop-blur-sm border border-[#915eff]/30 rounded-lg text-[#915eff] text-sm font-medium hover:from-[#915eff]/30 hover:to-[#4c1d95]/30 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isExpanded ? 'Show Less ↑' : 'Show More ↓'}
            </motion.button>
          </div>
        </motion.div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          Each project represents a comprehensive solution with detailed documentation, installation
          guides, and real-world impact metrics. Click through the tabs to explore features,
          technical implementation, and setup instructions.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');
