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
            As a passionate Computer Science student with a perfect 4.0 GPA at Kennesaw State University,
            I bring together academic excellence and practical experience in software development. My journey
            in technology has been marked by continuous learning, innovative problem-solving, and a drive to
            create impactful solutions.
          </p>
          <p className="text-gray-600 text-[17px] leading-[32px]">
            Beyond academics, I'm deeply committed to helping others succeed in their tech journeys. Whether
            it's mentoring fellow students, contributing to open-source projects, or collaborating with
            experienced developers, I believe in the power of community and shared knowledge to drive innovation.
          </p>
        </div>

        {/* Main content */}
        <p className="text-gray-600 max-w-3xl text-[17px] leading-[32px] mb-8">
          {config.sections.about.content}
        </p>

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

            {/* Leadership Achievement */}
            <div className="modern-card p-6">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">👥</span>
                <h4 className="text-gray-700 text-[18px] font-semibold">Collaborative Development</h4>
              </div>
              <p className="text-gray-600 text-[15px] leading-[26px]">
                Currently contributing as a Frontend Developer to the PKF Alumni platform, working alongside
                experienced alumni developers to create meaningful connections between students and graduates
                in the tech industry.
              </p>
            </div>

            {/* Innovation Achievement */}
            <div className="modern-card p-6">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">🚀</span>
                <h4 className="text-gray-700 text-[18px] font-semibold">AI Innovation</h4>
              </div>
              <p className="text-gray-600 text-[15px] leading-[26px]">
                Developed a Movie Recommendation Platform achieving 90% accuracy using advanced machine learning
                algorithms, processing 10,000+ entries with sub-2-second response times, showcasing expertise
                in both AI and performance optimization.
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