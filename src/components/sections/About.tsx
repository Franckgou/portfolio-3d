import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={15}
    tiltMaxAngleY={15}
    glareColor="#3b82f6"
    glareMaxOpacity={0.1}
  >
    <div className="max-w-[280px] w-full xs:w-[280px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="modern-card-gradient hover-lift w-full rounded-2xl p-[2px] group"
      >
        <div className="bg-white/95 backdrop-blur-md flex min-h-[280px] flex-col items-center justify-evenly rounded-2xl px-8 py-6 group-hover:bg-white transition-all duration-300">
          {/* Icon with modern styling */}
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <img
              src={icon}
              alt={title}
              className="h-20 w-20 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          <h3 className="text-center text-[20px] font-bold text-neutral-800 group-hover:bg-gradient-to-r group-hover:from-accent-primary group-hover:to-accent-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            {title}
          </h3>

          {/* Subtle accent line */}
          <div className="w-12 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full opacity-60 group-hover:opacity-100 group-hover:w-16 transition-all duration-300" />
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4"
      >
        {/* Personal Summary with modern card design */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 mb-8 border border-white/20 shadow-card hover:shadow-card-hover transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-2xl flex items-center justify-center">
              <span className="text-2xl">👨‍💻</span>
            </div>
            <h3 className="text-neutral-900 text-[28px] font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Personal Summary
            </h3>
          </div>
          
          <p className="text-neutral-600 text-[17px] leading-[30px] mb-4">
            As a passionate Computer Science student with a perfect 4.0 GPA at Kennesaw State University, 
            I bring together academic excellence and practical experience in backend development and API architecture. 
            My journey in technology has been marked by continuous learning, innovative problem-solving, and a drive to 
            create scalable, efficient solutions.
          </p>
          <p className="text-neutral-600 text-[17px] leading-[30px]">
            Currently serving as a Backend Intern at PKF Alumni Network, I specialize in building robust REST APIs 
            with FastAPI and PostgreSQL. Beyond academics, I'm deeply committed to helping others succeed in their 
            tech journeys through mentoring, open-source contributions, and collaborative development.
          </p>
        </div>

        {/* Main content */}
        <div className="bg-gradient-to-r from-white/60 to-white/40 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/30">
          <p className="text-neutral-700 max-w-3xl text-[17px] leading-[30px] font-medium">
            {config.sections.about.content}
          </p>
        </div>

        {/* Achievements Section with modern grid */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 mb-8 border border-white/20 shadow-card">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-accent-secondary to-accent-tertiary rounded-2xl flex items-center justify-center">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="text-neutral-900 text-[28px] font-bold bg-gradient-to-r from-accent-secondary to-accent-tertiary bg-clip-text text-transparent">
              Key Achievements
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Academic Achievement */}
            <motion.div 
              className="bg-gradient-to-br from-white to-neutral-50 rounded-2xl p-6 border border-neutral-200/50 hover:shadow-lg transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-xl">🎓</span>
                </div>
                <h4 className="text-neutral-800 text-[18px] font-semibold group-hover:text-accent-primary transition-colors duration-300">
                  President's List
                </h4>
              </div>
              <p className="text-neutral-600 text-[15px] leading-[24px] mb-3">
                Recognized on the Kennesaw State University President's List for maintaining a perfect 4.0 GPA, 
                placing me among the top academic performers at the university.
              </p>
              <a 
                href="https://meritpages.com/franckgou" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-accent-primary hover:text-accent-secondary transition-colors text-[14px] font-medium group"
              >
                View Merit Page 
                <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </a>
            </motion.div>

            {/* Technical Achievement */}
            <motion.div 
              className="bg-gradient-to-br from-white to-neutral-50 rounded-2xl p-6 border border-neutral-200/50 hover:shadow-lg transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-xl">⚡</span>
                </div>
                <h4 className="text-neutral-800 text-[18px] font-semibold group-hover:text-accent-primary transition-colors duration-300">
                  System Migration Excellence
                </h4>
              </div>
              <p className="text-neutral-600 text-[15px] leading-[24px]">
                Successfully automated a complex mailing system migration at Intelligentsia SA, reducing 
                processing time by 80% and improving efficiency for over 1,000 user accounts.
              </p>
            </motion.div>

            {/* Leadership Achievement */}
            <motion.div 
              className="bg-gradient-to-br from-white to-neutral-50 rounded-2xl p-6 border border-neutral-200/50 hover:shadow-lg transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-xl">👥</span>
                </div>
                <h4 className="text-neutral-800 text-[18px] font-semibold group-hover:text-accent-primary transition-colors duration-300">
                  Backend Development Leadership
                </h4>
              </div>
              <p className="text-neutral-600 text-[15px] leading-[24px]">
                Currently leading backend development at PKF Alumni platform, architecting REST APIs with FastAPI 
                and collaborating with experienced alumni developers to create meaningful tech connections.
              </p>
            </motion.div>

            {/* Innovation Achievement */}
            <motion.div 
              className="bg-gradient-to-br from-white to-neutral-50 rounded-2xl p-6 border border-neutral-200/50 hover:shadow-lg transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-xl">🚀</span>
                </div>
                <h4 className="text-neutral-800 text-[18px] font-semibold group-hover:text-accent-primary transition-colors duration-300">
                  Full-Stack Innovation
                </h4>
              </div>
              <p className="text-neutral-600 text-[15px] leading-[24px]">
                Developed a comprehensive Restaurant POS Management System with FastAPI backend and a Movie 
                Recommendation Platform achieving 90% accuracy, showcasing expertise across the full technology stack.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Services Cards */}
      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");