import { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

type Page = 'home' | 'about' | 'projects' | 'skills' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <MainContent />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return <MainContent />;
    }
  };

  return (
    <div className="w-full h-full min-h-screen flex overflow-hidden bg-white text-gray-900">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="flex-1 overflow-y-auto pl-20 md:pl-24 lg:pl-28" style={{ scrollbarWidth: 'none' }}>
        {renderPage()}
      </div>
    </div>
  );
}
