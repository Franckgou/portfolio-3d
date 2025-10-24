type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    education: Required<TSection>;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: 'Franck Tayo — Portfolio',
    fullName: 'Franck Cabrel Tayo Gouonpegne',
    email: 'tayofranck07@gmail.com',
  },
  hero: {
    name: 'Franck Tayo',
    p: ['I build Backend Systems,', 'Distributed Architecture and Scalable Solutions'],
  },
  contact: {
    p: 'Get in touch',
    h2: 'Contact.',
    form: {
      name: {
        span: 'Your Name',
        placeholder: "What's your name?",
      },
      email: { span: 'Your Email', placeholder: "What's your email?" },
      message: {
        span: 'Your Message',
        placeholder: 'What do you want to say?',
      },
    },
  },
  sections: {
    about: {
      p: 'Introduction',
      h2: 'Overview.',
      content: `I'm a Computer Science student at Kennesaw State University graduating in December 2025 with a 4.0 GPA,
      specializing in backend systems and scalable architecture. Currently a Software Engineer Intern at PACI,
      where I architect production systems serving 1,000+ users. I focus on backend infrastructure, distributed systems,
      and data engineering—building reliable, high-performance solutions with technologies like Python, FastAPI,
      PostgreSQL, AWS, and Docker. My work directly improves production platforms with 99.9% uptime, zero-downtime
      migrations, and enterprise-grade error handling.`,
    },
    experience: {
      p: 'What I have done so far',
      h2: 'Work Experience.',
    },
    education: {
      p: 'Academic Excellence & Continuous Learning',
      h2: 'Education.',
      content: `My educational foundation combines rigorous academic excellence at Kennesaw State University 
      with specialized industry training through programs like CodePath's Technical Interview Prep. 
      This dual approach ensures I maintain both theoretical depth and practical readiness for 
      software engineering challenges in today's competitive landscape.`,
    },
    works: {
      p: 'My work',
      h2: 'Projects.',
      content: `My portfolio includes a Movie Recommendation Platform using ML algorithms, 
      a Fake News Detector leveraging NLP, and a Stock Management System. These projects 
      demonstrate my ability to develop scalable solutions, implement machine learning models, 
      and create efficient database systems. Each project showcases different aspects of my 
      technical expertise and problem-solving capabilities.`,
    },
  },
};
