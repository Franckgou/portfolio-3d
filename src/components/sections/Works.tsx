import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        glareColor="#3b82f6"
        glareMaxOpacity={0.15}
        scale={1.02}
      >
        <div className="bg-white/80 backdrop-blur-lg w-full rounded-3xl p-6 sm:w-[360px] border border-white/20 shadow-card hover:shadow-card-hover transition-all duration-500 group hover:bg-white/90">
          {/* Project Image Container */}
          <div className="relative h-[230px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Action buttons overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <motion.div
                onClick={() => window.open(sourceCodeLink, "_blank")}
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl bg-white/90 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={github}
                  alt="github"
                  className="h-6 w-6 object-contain"
                />
              </motion.div>
            </div>

            {/* Project type badge */}
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 backdrop-blur-md text-neutral-700 text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                {tags[0]?.name || 'Project'}
              </span>
            </div>
          </div>

          {/* Project Content */}
          <div className="mt-6">
            <h3 className="text-[24px] font-bold text-neutral-900 group-hover:bg-gradient-to-r group-hover:from-accent-primary group-hover:to-accent-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              {name}
            </h3>
            <p className="text-neutral-600 mt-3 text-[14px] leading-[22px] line-clamp-4">
              {description}
            </p>
          </div>

          {/* Tech Stack Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <motion.span
                key={tag.name}
                className={`text-[12px] font-medium px-3 py-1 rounded-full bg-gradient-to-r ${
                  tag.color === 'blue-text-gradient' ? 'from-blue-100 to-blue-200 text-blue-700' :
                  tag.color === 'green-text-gradient' ? 'from-green-100 to-green-200 text-green-700' :
                  tag.color === 'pink-text-gradient' ? 'from-pink-100 to-pink-200 text-pink-700' :
                  tag.color === 'orange-text-gradient' ? 'from-orange-100 to-orange-200 text-orange-700' :
                  tag.color === 'purple-text-gradient' ? 'from-purple-100 to-purple-200 text-purple-700' :
                  tag.color === 'cyan-text-gradient' ? 'from-cyan-100 to-cyan-200 text-cyan-700' :
                  'from-neutral-100 to-neutral-200 text-neutral-700'
                } border border-white/30 hover:scale-105 transition-transform duration-200`}
                whileHover={{ scale: 1.05 }}
              >
                #{tag.name}
              </motion.span>
            ))}
          </div>

          {/* Bottom action area */}
          <div className="mt-6 pt-4 border-t border-neutral-200/50">
            <motion.button
              onClick={() => window.open(sourceCodeLink, "_blank")}
              className="w-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold py-3 px-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img src={github} alt="github" className="h-4 w-4" />
              View Source Code
            </motion.button>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/30"
        >
          <p className="text-neutral-700 mt-3 max-w-3xl text-[17px] leading-[30px] font-medium">
            {config.sections.works.content}
          </p>
        </motion.div>
      </div>

      {/* Featured Project Highlight */}
      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        className="mt-12 bg-gradient-to-r from-accent-primary/5 via-accent-secondary/5 to-accent-tertiary/5 backdrop-blur-md rounded-3xl p-8 border border-white/20"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-2xl flex items-center justify-center">
            <span className="text-2xl">⭐</span>
          </div>
          <h3 className="text-neutral-900 text-[24px] font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
            Featured Project: Restaurant POS Management System
          </h3>
        </div>
        <p className="text-neutral-700 text-[16px] leading-[28px] max-w-4xl">
          My latest project showcases comprehensive backend architecture with FastAPI, implementing secure authentication,
          role-based access control, and scalable database design. This system demonstrates my expertise in building
          enterprise-level applications with modern development practices.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="mt-20 flex flex-wrap gap-8 justify-center lg:justify-start">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className="mt-16 text-center"
      >
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/20 inline-block">
          <h4 className="text-neutral-900 text-[20px] font-bold mb-4">
            Interested in Collaboration?
          </h4>
          <p className="text-neutral-600 text-[16px] mb-6 max-