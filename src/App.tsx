import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { useSEO } from './hooks/useSEO';

function AppContent() {
  useSEO(); // This will handle dynamic SEO updates
  
  return (
    <div className="w-full h-full min-h-screen flex overflow-hidden bg-white text-gray-900">
      <Sidebar />
      <div className="flex-1 overflow-y-auto pl-20 md:pl-24 lg:pl-28" style={{ scrollbarWidth: 'none' }}>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
