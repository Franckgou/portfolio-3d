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
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.5)}
    className="w-full xs:w-[250px]"
  >
    <div className="modern-card group cursor-pointer p-8 h-full flex flex-col items-center justify-center gap-6 hover:scale-[1.02] transition-transform duration-300">
      <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
        <img
          src={icon}
          alt={title}
          className="h-10 w-10 object-contain"
        />
      </div>
      <h3 className="text-center text-[18px] font-semibold text-gray-700">
        {title}
      </h3>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4"
      >
        {/* Personal Summary */}
        <div className="modern-card p-8 mb-8">
          <h3 className="text-gray-700 text-[24px] font-bold mb-4">Personal Summary</h3>
          <p className="text-gray-600 text-[17px] leading-[32px] mb-4">
            I'm a Computer Science student at Kennesaw State University graduating in December 2025 with a 4.0 GPA,
            specializing in backend systems and scalable architecture. I focus on building reliable, high-performance
            solutions using Python, FastAPI, PostgreSQL, AWS, and Docker. My projects achieve real impact: 50,000+ ops/sec
            throughput, 99.9% uptime under load, and zero-downtime migrations.
          </p>
          <p className="text-gray-600 text-[17px] leading-[32px]">
            I'm also an Adobe Student Ambassador and active ColorStack member, committed to making tech accessible and
            supporting underrepresented students. Currently completing CodePath's Technical Interview Prep program and
            preparing for full-time Software Engineer roles starting January 2026, with particular interest in database
            optimization, cloud infrastructure, API development, and high-performance systems.
          </p>
        </div>

        {/* Main content */}
        <p className="text-gray-600 max-w-3xl text-[17px] leading-[32px] mb-8">
          {config.sections.about.content}
        </p>

        {/* Technical Skills Section */}
        <div className="modern-card p-8 mb-8">
          <h3 className="text-gray-700 text-[24px] font-bold mb-6">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Backend */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">⚙️</span>
                <h4 className="text-gray-700 text-[16px] font-semibold">Backend</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Python', 'FastAPI', 'Node.js', 'SQLAlchemy'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-accent/10 text-accent rounded-lg text-[13px] font-medium hover:bg-accent/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">💾</span>
                <h4 className="text-gray-700 text-[16px] font-semibold">Databases</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['PostgreSQL', 'MySQL', 'SQLite', 'Redis'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-accent/10 text-accent rounded-lg text-[13px] font-medium hover:bg-accent/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">☁️</span>
                <h4 className="text-gray-700 text-[16px] font-semibold">Cloud & DevOps</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['AWS (S3, EC2)', 'Docker', 'CI/CD'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-accent/10 text-accent rounded-lg text-[13px] font-medium hover:bg-accent/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* System Design */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🏗️</span>
                <h4 className="text-gray-700 text-[16px] font-semibold">System Design</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Distributed Caching', 'Horizontal Scaling', 'Fault Tolerance'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-accent/10 text-accent rounded-lg text-[13px] font-medium hover:bg-accent/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-secondary rounded-2xl p-8 mb-8">
          <h3 className="text-gray-700 text-[24px] font-bold mb-6">Key Achievements</h3>
          <div className="grid md:grid-cols-2 gap-5">
            {/* Academic Achievement */}
            <div className="modern-card p-6">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">🏆</span>
                <h4 className="text-gray-700 text-[18px] font-semibold">President's List</h4>
              </div>
              <p className="text-gray-600 text-[15px] leading-[26px] mb-3">
                Recognized on the Kennesaw State University President's List for maintaining a perfect 4.0 GPA,
                placing me among the top academic performers at the university.
              </p>
              <a
                href="https://meritpages.com/franckgou"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover transition-colors text-[14px] font-medium inline-flex items-center"
              >
                View Merit Page →
              </a>
            </div>

            {/* Technical Achievement */}
            <div className="modern-card p-6">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">⚡</span>
                <h4 className="text-gray-700 text-[18px] font-semibold">System Migration Excellence</h4>
              </div>
              <p className="text-gray-600 text-[15px] leading-[26px]">
                Successfully automated a complex mailing system migration at Intelligentsia SA, reducing
                processing time by 80% and improving efficiency for over 1,000 user accounts. This project
                demonstrated my ability to optimize enterprise-level systems and deliver measurable impact.
              </p>
            </div>

            {/* Backend Achievement */}
            <div className="modern-card p-6">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">⚙️</span>
                <h4 className="text-gray-700 text-[18px] font-semibold">Backend Systems Architecture</h4>
              </div>
              <p className="text-gray-600 text-[15px] leading-[26px]">
                Currently architecting production backend systems at PACI (pkfalumni.com), building scalable
                infrastructure with PostgreSQL, AWS S3, and FastAPI serving 1,000+ users. Led database migration
                achieving 40% performance improvement and zero data loss.
              </p>
            </div>

            {/* Distributed Systems Achievement */}
            <div className="modern-card p-6">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">🚀</span>
                <h4 className="text-gray-700 text-[18px] font-semibold">High-Performance Systems</h4>
              </div>
              <p className="text-gray-600 text-[15px] leading-[26px]">
                Built CacheGrid, a Redis-inspired distributed cache system handling 50,000+ operations/second
                with sub-10ms P99 latency. Features intelligent eviction policies (LRU/LFU), production-grade
                Python SDK with automatic failover, and Docker deployment for horizontal scaling.
              </p>
            </div>

            {/* Community Leadership */}
            <div className="modern-card p-6">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">🌟</span>
                <h4 className="text-gray-700 text-[18px] font-semibold">Community Leadership</h4>
              </div>
              <p className="text-gray-600 text-[15px] leading-[26px]">
                Active ColorStack member and Adobe Student Ambassador, committed to making tech accessible
                and supporting underrepresented students. Promoting diversity in tech through peer advocacy,
                mentorship, and community engagement while balancing senior Computer Science coursework.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");