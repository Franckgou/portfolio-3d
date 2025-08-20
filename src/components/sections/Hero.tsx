import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";

const Hero = () => {
  return (
    <section className={`relative mx-auto h-screen w-full overflow-hidden`}>
      {/* Modern gradient background */}
      <div className="absolute inset-0 mesh-gradient opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-white/50" />
      
      {/* Floating geometric shapes for futuristic feel */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-full blur-xl animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-accent-tertiary/20 to-accent-gradient/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-gradient-to-r from-accent-secondary/20 to-accent-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />

      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        {/* Animated line indicator */}
        <div className="mt-5 flex flex-col items-center justify-center">
          <motion.div 
            className="h-5 w-5 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary shadow-lg shadow-accent-primary/25"
            animate={{
              scale: [1, 1.2, 1],
              boxShadow: [
                "0 0 0 0 rgba(59, 130, 246, 0.7)",
                "0 0 0 10px rgba(59, 130, 246, 0)",
                "0 0 0 0 rgba(59, 130, 246, 0)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="w-1 sm:h-80 h-40 bg-gradient-to-b from-accent-primary via-accent-secondary to-transparent"
            initial={{ height: 0 }}
            animate={{ height: "20rem" }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </div>

        <div className="relative">
          {/* Main heading with enhanced animations */}
          <motion.h1 
            className={`${styles.heroHeadText} relative`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary bg-clip-text text-transparent animate-pulse-slow">
              {config.hero.name}
            </span>
            
            {/* Floating accent behind name */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-lg blur-lg"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.h1>

          {/* Subtext with staggered animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className={`${styles.heroSubText} mt-2 relative`}>
              {config.hero.p[0]}{" "}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-accent-secondary to-accent-tertiary bg-clip-text text-transparent font-semibold">
                {config.hero.p[1]}
              </span>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.a
              href="#about"
              className="bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-neutral-700 font-semibold py-3 px-6 rounded-xl hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Floating tech badges */}
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {['FastAPI', 'React', 'PostgreSQL', 'Python'].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-sm font-medium text-neutral-700 hover:bg-white/30 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 3D Computer Canvas */}
      <div className="relative z-0">
        <ComputersCanvas />
      </div>

      {/* Scroll indicator with modern design */}
      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center z-10">
        <a href="#about">
          <motion.div 
            className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-neutral-300/50 bg-white/20 backdrop-blur-md p-2 hover:border-accent-primary/50 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-gradient-to-b from-accent-primary to-accent-secondary mb-1 h-3 w-3 rounded-full shadow-lg"
            />
          </motion.div>
        </a>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;