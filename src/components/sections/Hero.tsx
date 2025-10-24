import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { config } from "../../constants/config";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-gradient-to-b from-primary via-secondary to-tertiary overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div
        className={`relative inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-col items-start justify-center z-10`}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <h1 className={styles.heroHeadText}>
            Hi, I'm{' '}
            <span className="gradient-text">
              {config.hero.name}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={`${styles.heroSubText} mt-8 max-w-3xl`}
          >
            {config.hero.p.map((text, index) => (
              <span key={index} className="block">
                {text}
                {index === 0 && <br className="hidden sm:block" />}
              </span>
            ))}
          </motion.p>

          {/* Clean Apple-style CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex gap-4 flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 bg-accent hover:bg-accent-hover rounded-xl text-white font-medium shadow-sm hover:shadow-md transition-all duration-200"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </motion.button>

            <motion.a
              href="/resume.pdf"
              download="Franck_Tayo_Resume.pdf"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-medium shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-medium shadow-sm hover:shadow-md transition-all duration-200"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Quick Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/50 hover:shadow-md transition-shadow duration-200">
              <div className="text-2xl font-bold text-accent mb-1">4.0</div>
              <div className="text-sm text-gray-600">GPA</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/50 hover:shadow-md transition-shadow duration-200">
              <div className="text-2xl font-bold text-accent mb-1">5+</div>
              <div className="text-sm text-gray-600">Projects</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/50 hover:shadow-md transition-shadow duration-200">
              <div className="text-2xl font-bold text-accent mb-1">2</div>
              <div className="text-sm text-gray-600">Internships</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/50 hover:shadow-md transition-shadow duration-200">
              <div className="text-2xl font-bold text-accent mb-1">10+</div>
              <div className="text-sm text-gray-600">Technologies</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Minimal scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about" aria-label="Scroll to about section">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-8 h-12 rounded-full border-2 border-gray-300 flex justify-center items-start p-2"
          >
            <motion.div
              className="w-1.5 h-3 rounded-full bg-accent"
            />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;