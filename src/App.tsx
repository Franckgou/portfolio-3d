import { BrowserRouter } from 'react-router-dom';

import {
  About,
  Contact,
  Experience,
  Education, // Changed from Feedbacks
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components';
import { useEffect } from 'react';
import { config } from './constants/config';

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <div className="bg-gradient-subtle">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Education /> {/* Changed from Feedbacks */}
        <div className="relative z-0 bg-secondary">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
