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
    p: ['I develop Backend APIs,', 'Full Stack Applications & ML Solutions'],
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
      content: `I'm a Computer Science student at Kennesaw State University with a perfect 4.0 GPA, 
      specializing in backend development, API design, and full-stack applications. Currently working as a 
      Backend Intern at PKF Alumni Network, where I architect REST APIs using FastAPI and PostgreSQL. 
      My expertise spans Python, Java, JavaScript, and modern frameworks including React, Node.js, and Django. 
      I excel at building scalable systems, implementing secure authentication, and creating efficient database solutions.`,
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
      content: `My portfolio showcases diverse technical expertise through projects like a comprehensive 
      Restaurant POS Management System with FastAPI backend, a Movie Recommendation Platform using ML algorithms, 
      a Fake News Detector leveraging NLP, and an Enterprise Stock Management System. These projects 
      demonstrate my ability to architect scalable backend systems, implement machine learning models, 
      design secure APIs, and create efficient database solutions across various technology stacks.`,
    },
  },
};