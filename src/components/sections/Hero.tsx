import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-gradient-to-b from-primary via-primary to-[#0a0a1a]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        />
      </div>

      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <motion.div 
            className="w-5 h-5 rounded-full bg-gradient-to-r from-[#915eff] to-[#4c1d95]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div 
            className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915eff] to-transparent"
            initial={{ height: 0 }}
            animate={{ height: "20rem" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm{' '}
              <motion.span 
                className="bg-gradient-to-r from-[#915eff] via-[#4c1d95] to-[#7c3aed] bg-clip-text text-transparent"
                animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              >
                {config.hero.name}
              </motion.span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            {config.hero.p.map((text, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.3 }}
                className="block"
              >
                {text}
                {index === 0 && <br className="hidden sm:block" />}
              </motion.span>
            ))}
          </motion.div>

          {/* Modern CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex gap-4 flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-[#915eff] to-[#4c1d95] rounded-full text-white font-semibold shadow-lg hover:shadow-[#915eff]/50 transition-all duration-300"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-[#915eff] rounded-full text-[#915eff] font-semibold hover:bg-[#915eff] hover:text-white transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </div>

      <ComputersCanvas />

      {/* Modern scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="w-[35px] h-[64px] rounded-3xl border-4 border-white/30 backdrop-blur-sm bg-white/10 flex justify-center items-start p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-gradient-to-b from-[#915eff] to-[#4c1d95]"
            />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;