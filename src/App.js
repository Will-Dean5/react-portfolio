import { useState } from 'react';

import './App.css';
import About from '.componets/pages/About';
import Portfolio from '.componets/pages/Portfolio';
import Contact from '.componets/pages/Contact';
import Resume from '.componets/pages/Resume';


function App() {
  const [currentPage, setCurrentPage] = useState ('About');
  if (currentPage === 'About') {
    <About />
  }
  if (currentPage === 'Contact') {
    <Contact />
  }
  if (currentPage === 'Portfolio') {
    <Portfolio />
  }
  if (currentPage === 'Resume') {
    <Resume />
  }
}

export default App;
