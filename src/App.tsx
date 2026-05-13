import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import { Suspense, lazy } from 'react';

const Experience = lazy(() => import('./components/Experience'));
const SkillsSection = lazy(() => import('./components/SkillsSection'));
const Projects = lazy(() => import('./components/Projects'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
import Footer from './components/Footer';

export default function App() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const inlineData = document.getElementById('portfolio-data');
      if (inlineData) {
        const json = JSON.parse(inlineData.textContent || '{}');
        setData(json);
        setLoading(false);
      } else {
        // Fallback to fetch if not inlined
        fetch('/api/data.json')
          .then(res => res.json())
          .then(json => {
            setData(json);
            setLoading(false);
          })
          .catch(err => {
            console.error("Failed to fetch data:", err);
            setLoading(false);
          });
      }
    } catch (e) {
      console.error("Error parsing inline data:", e);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!loading) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
      return () => observer.disconnect();
    }
  }, [loading]);

  if (loading || !data) {
    return (
      <main className="min-h-screen bg-[#0a0f1d] flex items-center justify-center text-teal-400">
        <h1 className="text-2xl font-bold" aria-live="polite">Chargement...</h1>
      </main>
    );
  }

  return (
    <div className="font-sans selection:bg-teal-900 selection:text-teal-100">
      <header>
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-[#0a0f1d] focus:text-teal-400 focus:font-bold focus:rounded-xl focus:shadow-2xl focus:outline-none focus:ring-4 focus:ring-teal-400"
        >
          Passer au contenu principal
        </a>
        <Navbar />
      </header>
      <main id="main-content">
        <Hero data={data.hero} />
        <Story data={data.story} />
        <Suspense fallback={<div className="h-40" />}>
          <Experience data={data.experience} />
          <SkillsSection data={data.skills} />
          <Projects data={data.projects} />
          <Testimonials data={data.testimonials} />
          <Contact mobilityData={data.mobility} />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
