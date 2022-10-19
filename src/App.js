import { useState } from 'react';

import './App.css';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';


function renderPage(currentPage) {
  if (currentPage === 'About') {
    return <About />
  }
  if (currentPage === 'Contact') {
    return <Contact />
  }
  if (currentPage === 'Portfolio') {
    return <Portfolio />
  }
  if (currentPage === 'Resume') {
    return <Resume />
  }
};

function App() {
  const [currentPage, setCurrentPage] = useState ('About');
  return (
<div className='container' style={{color: 'black'}}>
  <nav style={{ color: 'black'}}>
    <a onClick={() => setCurrentPage('About')}>
      About
    </a>
    <a onClick={() => setCurrentPage('Contact')}>
      Contact
    </a>
    <a onClick={() => setCurrentPage('Portfolio')}>
      Portfolio
    </a>
    <a onClick={() => setCurrentPage('Resume')}>
      Resume
    </a>
  </nav>
  {renderPage(currentPage)}
</div>
  )
  
}

export default App;
