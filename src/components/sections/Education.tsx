import { motion } from 'framer-motion';
import { styles } from '../../constants/styles';
import { fadeIn } from '../../utils/motion';
import { Header } from '../atoms/Header';
import { config } from '../../constants/config';
import { SectionWrapper } from '../../hoc';

const EducationCard: React.FC<{ index: number }> = ({ index }) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className="bg-black-200 w-full rounded-3xl p-10 xs:w-[320px]"
  >
    <div className="mt-1">
      <h3 className="text-[24px] font-bold text-white">Kennesaw State University</h3>
      <p className="text-secondary mt-2 text-[16px]">Bachelor of Science in Computer Science</p>
      <p className="text-secondary mt-1">Expected Graduation: December 2025</p>
      <p className="text-white mt-2">GPA: 4.0</p>

      <div className="mt-4">
        <h4 className="text-[18px] font-semibold text-white">Relevant Coursework:</h4>
        <ul className="text-secondary mt-2 list-disc pl-5">
          <li>Data Structures and Algorithms</li>
          <li>Operating Systems</li>
          <li>Databases</li>
          <li>Web Development</li>
          <li>Artificial Intelligence</li>
          <li>Big Data</li>
          <li>Cryptography</li>
        </ul>
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <div className="mt-12 rounded-[20px] bg-black-100">
      <div className={`${styles.padding} rounded-2xl bg-tertiary min-h-[300px]`}>
        <Header useMotion={true} {...config.sections.education} />
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 max-sm:justify-center`}>
        <EducationCard index={0} />
      </div>
    </div>
  );
};

export default SectionWrapper(Education, 'education');
