import { useState } from 'react';

import './App.css';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


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
