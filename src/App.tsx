import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export type PageType = 'home' | 'about' | 'skills' | 'projects' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onNavigate={setCurrentPage} />;
      case 'about':
        return (
          <div className="space-y-20">
            <About />
            <Skills />
          </div>
        );
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="relative z-10 min-h-screen flex flex-col">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      
      {/* Global Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-green-500/8 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 -right-40 w-96 h-96 bg-emerald-400/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-green-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-teal-500/4 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}