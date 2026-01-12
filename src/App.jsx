
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Events from './pages/Events';
import About from './pages/about/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Team from './pages/Team';
import Memories from './pages/Memories';
import './index.css';
import Navbar from './components/navbar';

function App() {
  // Set up dark mode by default
  useEffect(() => {
    // Always default to dark theme unless explicitly set to light
    if (localStorage.theme !== 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Routes>
          <Navbar />
          <Route path="/" element={<Landing />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/team" element={<Team />} />
          <Route path="/memories" element={<Memories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
