import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import Works from '@/components/Works';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
