import { Code2, Database, BrainCircuit, Cpu } from 'lucide-react';

const getIcon = (type: string) => {
  switch(type) {
    case 'code': return <Code2 className="text-teal-400" />;
    case 'database': return <Database className="text-indigo-400" />;
    case 'brain': return <BrainCircuit className="text-orange-400" />;
    case 'cpu': return <Cpu className="text-slate-400" />;
    default: return <Code2 className="text-teal-400" />;
  }
};

export default function SkillsSection({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section id="skills" role="region" aria-labelledby="skills-title" className="bg-[#0a0f1d] text-slate-300 overflow-hidden relative border-t border-white/5">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
          <div>
            <h2 id="skills-title" className="heading-primary text-3xl sm:text-4xl mb-4">
              Mes <span className="text-teal-400 italic serif">Expertises</span>.
            </h2>
            <p className="text-slate-200 max-w-lg font-medium">Un mélange unique où chaque compétence technique est guidée par une valeur humaine profonde.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-slate-100">Français (Maternel)</div>
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-slate-100">Anglais (Intermédiaire)</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((cat: any, i: number) => (
            <div 
              key={i}
              className="group p-8 rounded-3xl border border-white/5 bg-[#131b2f] hover:bg-[#1a2540] hover:shadow-2xl hover:border-teal-500/30 transition-all focus-within:ring-2 focus-within:ring-teal-400 reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="p-3 bg-[#0a0f1d] border border-white/10 rounded-2xl shadow-sm mb-6 inline-block group-hover:scale-110 transition-transform" aria-hidden="true">
                {getIcon(cat.iconType)}
              </div>
              <h3 className="text-lg font-bold mb-6 text-slate-100">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.skills.map((skill: string) => (
                  <li key={skill} className="flex items-center text-sm text-slate-200 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-2" aria-hidden="true" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
