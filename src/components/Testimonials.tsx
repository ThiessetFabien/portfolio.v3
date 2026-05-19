import { Quote } from 'lucide-react';

export default function Testimonials({ data }: { data: any[] }) {
  if (!data) return null;

  return (
    <section id="testimonials" role="region" aria-labelledby="testimonials-title" className="bg-[#0a0f1d] border-t border-white/5 overflow-hidden">
      <div className="section-padding">
        <div className="mb-16 text-center">
          <h2 id="testimonials-title" className="heading-primary text-3xl sm:text-4xl mb-4">
            Confiance & <span className="text-teal-400 italic serif">Recommandations</span>.
          </h2>
          <p className="text-slate-200 max-w-2xl mx-auto italic font-medium">Ceux avec qui j'ai eu le plaisir de collaborer témoignent de mon engagement et de ma vision hybride.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {data.map((t, i) => (
            <div 
              key={i}
              className="bg-[#131b2f]/50 p-8 rounded-[32px] border border-white/5 relative group hover:border-teal-500/30 transition-all duration-500 reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-teal-400/10 group-hover:text-teal-400/20 transition-colors" aria-hidden="true" />
              <div className="relative z-10">
                <p className="text-slate-100 leading-relaxed mb-8 italic serif text-lg">
                  "{t.content}"
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div>
                    <h3 className="font-bold text-slate-100">{t.name}</h3>
                    <p className="text-xs text-slate-300 font-mono uppercase tracking-widest">{t.role}</p>
                  </div>
                  <div className="text-[10px] font-bold text-teal-400 uppercase tracking-tighter">
                    {t.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
