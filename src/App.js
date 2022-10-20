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
<div className='container' style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1604147495798-57beb5d6af73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMHRoZW1lfGVufDB8fDB8fA%3D%3D&w=1000&q=80)', height: '100vh'}}>
  <nav style={{ backgroundColor: 'black', color: 'white', display: 'flex', justifyContent: 'space-evenly'}}>
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
