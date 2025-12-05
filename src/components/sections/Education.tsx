import { motion } from 'framer-motion';
import { styles } from '../../constants/styles';
import { fadeIn } from '../../utils/motion';
import { Header } from '../atoms/Header';
import { config } from '../../constants/config';
import { SectionWrapper } from '../../hoc';

interface EducationCardProps {
  index: number;
  institution: string;
  program: string;
  period: string;
  details: string[];
  achievements?: string[];
  skills?: string[];
  gpa?: string;
  icon?: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  index,
  institution,
  program,
  period,
  details,
  achievements,
  skills,
  gpa,
  icon,
}) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.2, 0.5)}
    className="modern-card w-full p-8 xs:w-[400px] lg:w-[450px]"
  >
    <div className="flex items-center mb-4">
      {icon && <span className="text-3xl mr-3">{icon}</span>}
      <div>
        <h3 className="text-[22px] font-bold text-gray-700">{institution}</h3>
        <p className="text-gray-500 text-[14px]">{period}</p>
      </div>
    </div>

    <p className="text-[18px] font-semibold text-accent mb-3">{program}</p>

    {gpa && (
      <div className="bg-green-50 rounded-lg p-3 mb-4 border border-green-200">
        <p className="text-green-700 font-semibold text-[16px]">🏆 {gpa}</p>
      </div>
    )}

    <div className="space-y-4">
      {details.map((detail, idx) => (
        <p key={idx} className="text-gray-600 text-[15px] leading-[26px]">
          {detail}
        </p>
      ))}
    </div>

    {achievements && achievements.length > 0 && (
      <div className="mt-4">
        <h4 className="text-[16px] font-semibold text-gray-700 mb-2">🎯 Key Achievements:</h4>
        <ul className="text-gray-600 text-[14px] list-disc pl-5 space-y-1">
          {achievements.map((achievement, idx) => (
            <li key={idx}>{achievement}</li>
          ))}
        </ul>
      </div>
    )}

    {skills && skills.length > 0 && (
      <div className="mt-4">
        <h4 className="text-[16px] font-semibold text-gray-700 mb-2">💡 Skills Developed:</h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[12px] font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    )}
  </motion.div>
);

const Education = () => {
  const educationData = [
    {
      institution: 'Kennesaw State University',
      program: 'Bachelor of Science in Computer Science',
      period: 'Aug 2021 - May 2026',
      gpa: "GPA: 4.0 (President's List)",
      icon: '🎓',
      details: [
        'Pursuing a comprehensive Computer Science degree with focus on software engineering, algorithms, and artificial intelligence.',
        'Maintaining perfect academic performance while actively engaging in practical projects and internships.',
      ],
      achievements: [
        "President's List recognition for academic excellence",
        'Perfect 4.0 GPA throughout academic career',
        'Active participation in computer science projects and research',
      ],
      skills: [
        'Data Structures & Algorithms',
        'Operating Systems',
        'Database Systems',
        'Web Development',
        'Artificial Intelligence',
        'Big Data Analytics',
        'Cryptography',
        'Software Engineering',
        'Distributed Systems',
      ],
    },
    {
      institution: 'CodePath',
      program: 'Technical Interview Prep Program',
      period: 'Feb 2025 - May 2025',
      icon: '💻',
      details: [
        'Completed a rigorous, hands-on technical interview preparation course designed for aspiring software engineers.',
        'Emphasized mastery of algorithms, data structures, and structured problem-solving strategies through intensive practice.',
        'Gained in-depth experience with recursion, divide and conquer techniques, binary search, and other core algorithmic paradigms.',
      ],
      achievements: [
        'Successfully applied the UMPIRE method (Understand, Match, Plan, Implement, Review, Evaluate)',
        'Participated to tackle real-world coding interview problems',
        'Collaborated in peer learning sessions and participated in timed coding challenges',
        'Simulated real interview environments to build confidence and technical communication skills',
      ],
      skills: [
        'Data Structures',
        'Algorithms',
        'Software Engineering Foundations',
        'Collaborative Problem Solving',
        'Technical Interview Skills',
        'UMPIRE Method',
        'Binary Search',
        'Recursion',
        'Divide & Conquer',
      ],
    },
  ];

  return (
    <div className="mt-12 rounded-2xl bg-secondary">
      <div className={`${styles.padding} rounded-2xl bg-gradient-subtle min-h-[300px]`}>
        <Header useMotion={true} {...config.sections.education} />

        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="text-gray-600 mt-4 max-w-3xl text-[17px] leading-[32px]"
        >
          My educational journey combines rigorous academic excellence with practical,
          industry-focused training. From maintaining a perfect GPA at university to completing
          specialized technical interview preparation, I continuously invest in developing both
          theoretical knowledge and practical skills essential for software engineering success.
        </motion.p>
      </div>

      <div
        className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 max-sm:justify-center lg:justify-start`}
      >
        {educationData.map((education, index) => (
          <EducationCard key={index} index={index} {...education} />
        ))}
      </div>

      {/* Additional Learning Section */}
      <div className={`${styles.paddingX} pb-14`}>
        <motion.div variants={fadeIn('up', 'spring', 0.5, 0.75)} className="modern-card p-8">
          <h3 className="text-gray-700 text-[20px] font-bold mb-4">
            🚀 Continuous Learning Philosophy
          </h3>
          <p className="text-gray-600 text-[15px] leading-[26px] mb-4">
            Beyond formal education, I believe in continuous skill development through hands-on
            projects, industry-standard practices, and staying current with emerging technologies.
            My approach combines academic rigor with practical application, ensuring I'm prepared
            for real-world software engineering challenges.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-50 rounded-xl p-5">
              <h4 className="text-[16px] font-semibold text-accent mb-2">📚 Academic Excellence</h4>
              <p className="text-gray-600 text-[14px] leading-[22px]">
                Maintaining a perfect 4.0 GPA while engaging in challenging coursework across
                multiple CS disciplines
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              <h4 className="text-[16px] font-semibold text-accent mb-2">
                🔧 Practical Application
              </h4>
              <p className="text-gray-600 text-[14px] leading-[22px]">
                Applying theoretical knowledge through internships, personal projects, and
                collaborative development work
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Education, 'education');
