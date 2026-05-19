import React, { useEffect, useState } from 'react';
import { ArrowRight, Linkedin, Github, Mail, ChevronDown, HeartPulse, BrainCircuit, MessageCircle, FileText } from 'lucide-react';

export default function Hero({ data }: { data: any }) {
  const [years, setYears] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 21;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setYears(end);
        clearInterval(timer);
      } else {
        setYears(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <header id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0a0f1d]">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-indigo-900/20 rounded-full blur-3xl opacity-30 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-teal-900/20 rounded-full blur-3xl opacity-30 pointer-events-none" aria-hidden="true" />
      
      <div className="section-padding relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal flex flex-col items-start text-left">
            <div className="inline-flex flex-nowrap items-center gap-1.5 sm:gap-2 px-3 py-1.5 bg-white/5 rounded-full mb-6 border border-white/10 max-w-full overflow-hidden">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse flex-shrink-0" aria-hidden="true" />
              <div className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-200 whitespace-nowrap">
                {data.subtitle.split('|').map((part: string, idx: number) => {
                  const cleaned = part.trim();
                  if (idx === 0) {
                    return (
                      <span key={idx} className="flex-shrink-0">
                        <span className="hidden sm:inline">Product </span>Builder JS E-Santé
                      </span>
                    );
                  }
                  if (idx === 1) {
                    return (
                      <React.Fragment key={idx}>
                        <span className="hidden sm:inline opacity-30 text-white/30 flex-shrink-0">|</span>
                        <span className="hidden sm:inline flex-shrink-0">{cleaned}</span>
                      </React.Fragment>
                    );
                  }
                  if (idx === 2) {
                    return (
                      <React.Fragment key={idx}>
                        <span className="opacity-30 text-white/30 flex-shrink-0 hidden sm:inline">|</span>
                        <span className="flex-shrink-0 hidden sm:inline">
                          <span className="hidden sm:inline">Candidat </span>VAP 7<span className="hidden md:inline"> (Niveau 7)</span>
                        </span>
                      </React.Fragment>
                    );
                  }
                  return <span key={idx} className="flex-shrink-0">{cleaned}</span>;
                })}
              </div>
            </div>
            
            <h1 className="heading-primary text-3xl sm:text-5xl md:text-8xl mb-8 leading-[0.9] tracking-tighter">
              {data.title.split('.').map((part: string, i: number) => (
                <span key={i} className="block">
                  {part}{part && '.'}
                </span>
              ))}
            </h1>
            
            <p className="text-slate-200 text-xl md:text-2xl max-w-xl mb-12 font-serif italic leading-relaxed">
              {data.quote}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              <a 
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-teal-500 text-[#0a0f1d] px-8 py-4 min-h-[56px] rounded-xl font-bold hover:bg-teal-400 focus:ring-4 focus:ring-teal-500 transition-all shadow-xl shadow-teal-900/20 group"
              >
                <span>Me contacter</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex items-center space-x-4">
                <a 
                  href="/docs/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-teal-500/10 border border-teal-500/30 text-teal-400 hover:text-teal-300 hover:bg-teal-500/20 hover:border-teal-500/50 transition-all rounded-xl relative group focus:ring-4 focus:ring-teal-500/30"
                  aria-label="Consulter mon CV de Fabien Thiesset au format PDF (nouvel onglet)"
                >
                  <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#0d1628]/95 backdrop-blur-sm border border-teal-500/20 text-teal-400 text-[10px] font-black uppercase tracking-widest px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none shadow-xl shadow-black/50 translate-y-1 group-hover:translate-y-0 z-20">
                    Mon CV (PDF)
                  </span>
                </a>

                <div className="h-8 w-[1px] bg-white/10" aria-hidden="true" />

                <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl text-slate-200 hover:text-teal-400 hover:bg-white/10 transition-all border border-white/5" aria-label="LinkedIn (nouvel onglet)">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl text-slate-200 hover:text-teal-400 hover:bg-white/10 transition-all border border-white/5" aria-label="GitHub (nouvel onglet)">
                  <Github className="w-5 h-5" />
                </a>
                <a href={data.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl text-slate-200 hover:text-teal-400 hover:bg-white/10 transition-all border border-white/5" aria-label="WhatsApp (nouvel onglet)">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a 
                  href={data.contact.discord} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl text-slate-200 hover:text-teal-400 hover:bg-white/10 transition-all border border-white/5" 
                  aria-label="Discord : vij157164 (nouvel onglet)"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.419c0 1.334-.947 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.419c0 1.334-.946 2.419-2.157 2.419z"/>
                  </svg>
                </a>
              </div>

            </div>
          </div>
 
          <div className="relative reveal" style={{ transitionDelay: '200ms' }}>
            <div className="absolute inset-0 bg-teal-500/10 blur-[120px] rounded-full" aria-hidden="true" />
            <div className="relative aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 border border-white/10 rounded-[60px] scale-[1.02]" aria-hidden="true" />
              <div className="absolute inset-0 overflow-hidden rounded-[60px]">
                <picture>
                  <source srcSet="/assets/hero-mobile.webp" media="(max-width: 640px)" />
                  <img 
                    src="/assets/hero.webp" 
                    alt="Portrait de Fabien Thiesset, Expert MedTech & Data" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    fetchPriority="high"
                    decoding="sync"
                    loading="eager"
                  />
                </picture>
              </div>
            </div>
 
            {/* Overlay stats/info */}
            <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 glass p-5 rounded-2xl shadow-xl w-[170px] sm:max-w-[200px] border border-white/10 z-20">
              <div className="flex items-center gap-3 mb-1">
                <HeartPulse className="hidden sm:block w-6 h-6 text-teal-400" aria-hidden="true" />
                <div className="text-xl font-bold font-display text-slate-100">
                  <span>{years}</span>+ Ans
                </div>
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left">Engagement Clinique</div>
            </div>
            <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-6 glass p-5 rounded-2xl shadow-xl w-[170px] sm:max-w-[200px] border border-white/10 z-20">
              <div className="flex items-center gap-3 mb-1">
                <BrainCircuit className="hidden sm:block w-6 h-6 text-teal-400" aria-hidden="true" />
                <div className="text-xl font-bold font-display text-slate-100 uppercase tracking-tighter">IA & Éthique</div>
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left">Bientraitance Numérique</div>
            </div>
          </div>

        </div>
      </div>

      <a 
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 min-w-[44px] min-h-[44px] flex flex-col items-center justify-center space-y-2 text-slate-200 hover:text-teal-400 transition-colors z-20"
        aria-label="Défiler vers la section À propos"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] mb-1">Découvrir</span>
        <ChevronDown className="w-5 h-5 animate-bounce text-teal-400" />
      </a>
    </header>
  );
}
