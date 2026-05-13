import React, { useState, useRef } from 'react';
import { ArrowRight, Lock, RotateCcw, BrainCircuit, Lightbulb, Rocket, BarChart3, ChevronRight, Info, Github, Globe } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Projects({ data }: { data: any }) {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (flippedIndex === index) return;
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20; // Max 10-15 degrees
    const rotateY = (centerX - x) / 20;
    
    card.style.setProperty('--rotateX', `${rotateX}deg`);
    card.style.setProperty('--rotateY', `${rotateY}deg`);
    card.style.setProperty('--glareX', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--glareY', `${(y / rect.height) * 100}%`);
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    card.style.setProperty('--rotateX', '0deg');
    card.style.setProperty('--rotateY', '0deg');
  };

  if (!data) return null;

  return (
    <section id="projects" className="bg-[#131b2f] border-t border-white/5 relative overflow-hidden">
      <div className="section-padding">
        <div className="mb-16">
          <h2 className="heading-primary text-4xl mb-4 text-center">
            Impact & <span className="text-teal-400 italic serif">Réalisations</span>.
          </h2>
          <p className="text-slate-200 text-center max-w-2xl mx-auto italic font-medium">Des projets où la performance technique se mesure à la valeur ajoutée humaine.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((p: any, i: number) => (
            <div 
              key={i} 
              className="relative h-[500px] md:h-[540px] group"
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseLeave={() => handleMouseLeave(i)}
              ref={(el) => (cardRefs.current[i] = el)}
            >
              <div
                className="w-full h-full perspective-2000"
                onClick={() => p.bmad && setFlippedIndex(flippedIndex === i ? null : i)}
                style={{
                  transform: flippedIndex === i ? 'none' : 'rotateX(var(--rotateX, 0deg)) rotateY(var(--rotateY, 0deg))',
                  transition: flippedIndex === i ? 'all 0.7s ease' : 'transform 0.1s ease-out',
                } as React.CSSProperties}
              >
              <article 
                className={cn(
                  "relative w-full h-full transition-all duration-700 preserve-3d cursor-pointer transform-gpu",
                  flippedIndex === i ? "rotate-y-180" : ""
                )}
                role="button"
                tabIndex={0}
                aria-expanded={flippedIndex === i}
                aria-label={`Étude de cas du projet ${p.title}. Cliquez pour voir les détails.`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setFlippedIndex(flippedIndex === i ? null : i);
                  }
                }}
              >
                {/* Front Face */}
                <div className="absolute inset-0 backface-hidden bg-[#0a0f1d] rounded-[32px] overflow-hidden shadow-lg flex flex-col h-full">
                  {/* Dedicated crisp border to prevent 3D subpixel bleeding */}
                  <div className="absolute inset-0 rounded-[32px] border border-white/5 pointer-events-none z-50" />
                  {/* Dynamic Glare Effect */}
                  <div 
                    className="absolute inset-0 pointer-events-none z-30 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at var(--glareX, 50%) var(--glareY, 50%), rgba(255,255,255,0.4) 0%, transparent 60%)`
                    } as React.CSSProperties}
                  />
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <img 
                      src={p.image} 
                      alt={`Capture d'écran du projet ${p.title}`} 
                      className="w-full h-full object-cover opacity-80 mix-blend-screen group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" 
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] to-transparent opacity-80" />
                    
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {p.confidential && (
                        <span className="px-3 py-1 bg-amber-500/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-amber-200 border border-amber-500/30 flex items-center gap-1">
                          <Lock className="w-3 h-3" />
                          Confidentiel
                        </span>
                      )}
                      {p.tags.map((tag: string) => (
                        <span key={tag} className="px-3 py-1 bg-[#131b2f]/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-teal-200 border border-white/10">{tag}</span>
                      ))}
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d] to-transparent transform-gpu">
                      <h3 className="text-2xl font-bold text-slate-100 mb-1 group-hover:text-teal-400 transition-colors">
                        {p.title}
                      </h3>
                      <div className="text-teal-400/80 text-[10px] font-bold uppercase tracking-widest mb-4">
                        {p.role}
                      </div>
                      
                      {/* Fixed height container for description to ensure perfectly aligned titles across all cards */}
                      <div className="h-[140px] md:h-[110px] mb-6">
                        <p className="text-slate-300 text-sm leading-relaxed italic">"{p.desc}"</p>
                      </div>
                      
                      <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                        {p.bmad ? (
                          <div className="flex items-center space-x-2 text-teal-400/60 text-[9px] font-bold uppercase tracking-widest group-hover:text-teal-400 transition-colors">
                            <Info className="w-3 h-3" />
                            <span>Expertise Technique & Impact</span>
                          </div>
                        ) : (
                          <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Aperçu Restreint</div>
                        )}
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-teal-400 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Face (Case Study) */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#131b2f] rounded-[32px] overflow-hidden shadow-2xl flex flex-col p-7 md:p-8">
                  {/* Dedicated crisp border */}
                  <div className="absolute inset-0 rounded-[32px] border border-teal-500/30 pointer-events-none z-50" />
                  <div className="flex items-center justify-between mb-4 md:mb-6">
                    <h3 className="text-xl font-bold text-teal-400">{p.title}</h3>
                    <RotateCcw className="w-4 h-4 text-teal-400/50" />
                  </div>

                  {p.bmad ? (
                    <div className="space-y-3 md:space-y-4 flex-grow overflow-y-auto custom-scrollbar pr-2">
                      {[
                        { icon: <Lightbulb className="w-4 h-4 text-amber-400" />, color: "bg-amber-400/10", border: "border-amber-400/20", text: p.bmad.need },
                        { icon: <BrainCircuit className="w-4 h-4 text-indigo-400" />, color: "bg-indigo-400/10", border: "border-indigo-400/20", text: p.bmad.method },
                        { icon: <Rocket className="w-4 h-4 text-teal-400" />, color: "bg-teal-400/10", border: "border-teal-400/20", text: p.bmad.action },
                        { icon: <BarChart3 className="w-4 h-4 text-pink-400" />, color: "bg-pink-400/10", border: "border-pink-400/20", text: p.bmad.data },
                      ].map((item, idx) => (
                        <div key={idx} className="flex gap-3 md:gap-4 items-start">
                          <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border", item.color, item.border)}>
                            {item.icon}
                          </div>
                          <p className="text-[10px] md:text-[11px] text-slate-200 leading-relaxed font-medium">
                            {item.text}
                          </p>
                        </div>
                      ))}

                      <div className="pt-4 md:pt-6 border-t border-white/10 mt-auto">
                        {p.links && (
                          <div className="flex flex-wrap gap-3 mb-4">
                            {p.links.map((link: any) => (
                              <a 
                                key={link.name} 
                                href={link.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-[10px] font-bold text-teal-400 hover:text-white transition-colors flex items-center gap-1.5 underline decoration-teal-400/30 underline-offset-4 min-h-[32px] px-1"
                                aria-label={`${link.name} du projet ${p.title} (nouvel onglet)`}
                                onClick={(e) => e.stopPropagation()}
                              >
                                {link.name === 'Frontend' || link.name === 'Backend' ? <Github className="w-3 h-3" /> : <Globe className="w-3 h-3" />}
                                {link.name}
                              </a>
                            ))}
                          </div>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {p.bmad.tech.map((t: string) => (
                            <span key={t} className="px-2.5 py-1 bg-teal-400/10 rounded-md text-[9px] font-bold text-teal-300 border border-teal-400/20 uppercase tracking-wider">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                  ) : (
                    <div className="flex-grow flex items-center justify-center text-slate-400 text-sm italic">
                      Détails confidentiels ou en cours de rédaction.
                    </div>
                  )}

                  <div className="mt-4 md:mt-6">
                    <a 
                      href="#contact" 
                      className="w-full py-3 bg-teal-400 text-[#0a0f1d] rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-teal-300 transition-all shadow-lg shadow-teal-900/40 active:scale-95"
                      onClick={(e) => {
                        e.stopPropagation();
                        const contact = document.getElementById('contact');
                        contact?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Recruter ce profil <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


