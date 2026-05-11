import React from 'react';
import { BrainCircuit, Database, Smartphone, Globe, HeartPulse, GraduationCap, Calendar, Briefcase, ShieldCheck, Cpu } from 'lucide-react';

const getIcon = (type: string) => {
  switch(type) {
    case 'brain': return <BrainCircuit className="w-5 h-5" aria-hidden="true" />;
    case 'database': return <Database className="w-5 h-5" aria-hidden="true" />;
    case 'smartphone': return <Smartphone className="w-5 h-5" aria-hidden="true" />;
    case 'globe': return <Globe className="w-5 h-5" aria-hidden="true" />;
    case 'heart': return <HeartPulse className="w-5 h-5" aria-hidden="true" />;
    case 'shield': return <ShieldCheck className="w-5 h-5" aria-hidden="true" />;
    case 'cpu': return <Cpu className="w-5 h-5" aria-hidden="true" />;
    default: return <Briefcase className="w-5 h-5" aria-hidden="true" />;
  }
};

export default function Experience({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section id="experience" role="region" aria-labelledby="experience-title" className="bg-[#131b2f] relative border-t border-white/5">
      <div className="section-padding">
        <h2 id="experience-title" className="font-display text-4xl font-bold text-slate-100 mb-16 text-center">
          Parcours & <span className="text-teal-400">Evolution</span>.
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience Column */}
          <div className="reveal">
            <div className="flex items-center space-x-3 mb-10">
              <div className="p-2 bg-indigo-900 text-teal-400 rounded-lg border border-indigo-700/50"><Briefcase className="w-6 h-6" aria-hidden="true" /></div>
              <h3 className="text-2xl font-bold text-slate-100">Expérience Professionnelle</h3>
            </div>
            <div className="space-y-8 relative before:absolute before:left-[21px] before:top-0 before:bottom-0 before:w-px before:bg-white/10">
              {data.work.map((exp: any, i: number) => (
                <article key={i} className="relative pl-14 reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="absolute left-0 top-1 p-2 bg-[#131b2f] border border-white/20 rounded-full z-10 shadow-sm text-teal-400">
                    {getIcon(exp.iconType)}
                  </div>
                  <div className="bg-[#0a0f1d] p-6 rounded-2xl border border-white/5 shadow-lg transition-all hover:border-teal-500/30">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal-200 bg-teal-900/50 px-2 py-1 rounded-md border border-teal-500/20 w-fit">{exp.tag}</span>
                      <span className="text-xs font-mono text-slate-400 font-bold sm:text-right">{exp.date}</span>
                    </div>
                    <h4 className="font-bold text-slate-100 text-xl sm:text-2xl mb-1">{exp.title}</h4>
                    <p className="text-teal-400 font-bold text-sm mb-4">{exp.company} • {exp.location}</p>
                    <p className="text-slate-100 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '300ms' }}>
            <div className="flex items-center space-x-3 mb-10">
              <div className="p-2 bg-teal-900 text-teal-400 rounded-lg border border-teal-700/50"><GraduationCap className="w-6 h-6" aria-hidden="true" /></div>
              <h3 className="text-2xl font-bold text-slate-100">Formation & Diplômes</h3>
            </div>
            <div className="space-y-6">
              {data.education.map((edu: any, i: number) => (
                <article 
                  key={i}
                  className="p-6 rounded-2xl border-l-[6px] border-teal-600 bg-[#0a0f1d] shadow-lg border border-white/5 hover:border-r-teal-500/30 transition-all reveal"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                    <div className="text-xs font-bold text-teal-400 uppercase tracking-widest flex items-center">
                      <Calendar className="w-3 h-3 mr-2" aria-hidden="true" /> {edu.date}
                    </div>
                  </div>
                  <h4 className="font-bold text-slate-100 text-xl sm:text-2xl mb-1">{edu.title}</h4>
                  <p className="text-indigo-300 font-bold text-sm mb-2">{edu.company}</p>
                  <p className="text-slate-100 text-sm italic">{edu.description}</p>
                </article>
              ))}
              
              <div className="mt-8 p-8 bg-indigo-950/40 rounded-[2rem] text-white border border-indigo-900/50 shadow-inner">
                <h4 className="font-bold mb-6 flex items-center text-xl"><BrainCircuit className="w-6 h-6 mr-3 text-teal-400" aria-hidden="true" /> Atouts Web & Data</h4>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "Node.js", "Python", "SQL", "PostgreSQL", "BI", "Scrum Master"].map((skill) => (
                    <span key={skill} className="px-4 py-1.5 bg-white/5 rounded-full text-xs font-bold border border-white/10 text-teal-100">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
