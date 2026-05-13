import React from 'react';

export default function Story({ data }: { data: any }) {
  if (!data) return null;
  
  return (
    <section id="about" role="region" aria-labelledby="story-title" className="bg-[#0a0f1d] overflow-hidden border-t border-white/5">
      <div className="section-padding">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-16 gap-10">
          <div className="max-w-xl">
            <h2 id="story-title" className="heading-primary text-3xl md:text-4xl mb-6">
              Ma <br /><span className="text-teal-400 text-4xl md:text-5xl">Vision</span>.
            </h2>
            <div className="h-1 w-16 bg-teal-800 mb-6" />
            <p className="text-slate-200 text-lg md:text-xl leading-relaxed border-l-2 border-teal-500/20 pl-6">
              "L'expertise n'est rien sans l'engagement. La technique n'est rien sans l'éthique."
            </p>
          </div>
          <div className="lg:max-w-sm w-full bg-white/5 p-6 rounded-3xl border border-white/10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-500 mb-6">Mes Valeurs Clés</p>
            <div className="flex flex-wrap gap-2">
              {data.values.map((v: any) => (
                <div key={v.name} className="flex items-center space-x-2 px-3 py-1.5 bg-white/5 border border-white/5 rounded-full hover:border-teal-500/30 transition-all">
                  <span className="text-sm" aria-hidden="true">{v.icon}</span>
                  <span className="text-xs font-bold text-slate-200 uppercase tracking-tight">{v.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {data.manifesto.map((item: any, i: number) => (
            <div key={item.id} className="group p-8 rounded-3xl bg-[#131b2f]/40 border border-white/5 hover:border-teal-500/20 transition-all duration-500 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl font-display font-bold text-teal-700 transition-colors group-hover:text-teal-400/40">
                  {item.id}
                </span>
                <div className="w-8 h-px bg-white/10" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-4 group-hover:text-teal-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-300 leading-relaxed text-base md:text-lg flex-grow font-medium">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
