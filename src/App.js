import React from 'react';

import { BrowserRouter, Route} from 'react-router-dom';
import Toolbar from './Components/Navigation/Toolbar/Toolbar';
import Projects from './Components/Projects/Projects';
import Articles from './Components/Articles';
import About from './Components/About/About';
import PersonalInfo from './Components/PersonalInfo/PersonalInfo';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import Education from './Components/Education/Education';
import Certifications from './Components/Certifications/Certifications';
import './App.css';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        {/* Routes */}
        <Route exact path='/' />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/articles' component={Articles} />
        <Route exact path='/about' component={About} />
      </div>
      <Toolbar />
      <PersonalInfo />
      <About/>
      <Education />
      <Certifications />
      <WorkExperience />
      <Projects />
      <Contact />
    </BrowserRouter>
  );
}

export default App;
