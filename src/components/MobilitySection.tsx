import { MapPin, Navigation, Clock } from 'lucide-react';

export default function MobilitySection({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section id="mobility" role="region" aria-labelledby="mobility-title" className="bg-[#050813] border-t border-white/5 overflow-hidden">
      <div className="section-padding">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 reveal">
            <div>
              <h2 id="mobility-title" className="heading-primary text-4xl mb-6">
                Ancrage Territorial & <span className="text-teal-400 italic serif">Mobilité</span>.
              </h2>
              <p className="text-slate-200 text-lg leading-relaxed mb-8">
                Basé à <span className="text-slate-100 font-bold">{data.center}</span>, je privilégie une <span className="text-teal-400 font-bold">présence sur site</span> dans un rayon de {data.perimeter} pour une collaboration immersive et réactive au cœur de vos équipes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.zones.map((zone: string, i: number) => (
                <div key={zone} className="flex items-center space-x-3 p-4 bg-[#131b2f]/50 rounded-2xl border border-white/5 reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                  <MapPin className="w-5 h-5 text-teal-400" />
                  <span className="text-slate-100 font-medium">{zone}</span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-teal-500/10 rounded-3xl border border-teal-500/30 flex items-start space-x-4">
              <Navigation className="w-6 h-6 text-teal-400 mt-1" />
              <p className="text-slate-100 text-sm font-medium italic">
                "{data.details}"
              </p>
            </div>
          </div>

          <div className="relative reveal" style={{ transitionDelay: '300ms' }}>
            {/* Abstract Connectivity Network (Rethought from Map) */}
            <div className="aspect-square relative bg-[#0a0f1d] rounded-[40px] border border-white/5 overflow-hidden p-4 flex items-center justify-center">
              <div className="absolute inset-0 bg-teal-500/5 blur-3xl rounded-full" />
              
              {/* Background Data Grid */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #2dd4bf 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

              <svg viewBox="0 0 400 400" className="w-full h-full relative z-0" aria-hidden="true">
                {/* Central Hub (Douai) Pulse */}
                <circle cx="200" cy="200" r="100" fill="none" stroke="rgba(45, 212, 191, 0.1)" strokeWidth="1" className="animate-pulse" />
                <circle cx="200" cy="200" r="60" fill="none" stroke="rgba(45, 212, 191, 0.2)" strokeWidth="1" />
                
                {/* Network Connections */}
                <g stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none">
                  <path d="M200,200 L200,100" strokeDasharray="100" />
                  <path d="M200,200 L120,280" strokeDasharray="100" />
                  <path d="M200,200 L280,280" strokeDasharray="100" />
                  <path d="M200,200 L120,200" strokeDasharray="100" />
                  <path d="M200,200 L300,150" strokeDasharray="100" />
                </g>

                {/* Nodes */}
                <circle cx="200" cy="200" r="8" fill="#2dd4bf" />
                <circle cx="200" cy="100" r="4" fill="#1e293b" stroke="#2dd4bf" strokeWidth="2" />
                <circle cx="120" cy="280" r="4" fill="#1e293b" stroke="#2dd4bf" strokeWidth="2" />
                <circle cx="280" cy="280" r="4" fill="#1e293b" stroke="#2dd4bf" strokeWidth="2" />
                <circle cx="120" cy="200" r="4" fill="#1e293b" stroke="#2dd4bf" strokeWidth="2" />
                <circle cx="300" cy="150" r="4" fill="#1e293b" stroke="#2dd4bf" strokeWidth="2" />
              </svg>

              {/* Labels with improved visibility */}
              <div className="absolute top-[180px] left-[200px] -translate-x-1/2 -translate-y-full mb-4 z-20 flex flex-col items-center">
                <span className="px-3 py-1 bg-teal-400 text-[#0a0f1d] font-black text-xs rounded-full shadow-2xl border border-white/20 whitespace-nowrap">
                  DOUAI (HUB CENTRAL)
                </span>
              </div>

              <div className="absolute top-[85px] left-[200px] -translate-x-1/2 flex flex-col items-center">
                <span className="text-xs font-bold text-slate-100 uppercase tracking-widest bg-[#131b2f] px-2 py-0.5 rounded border border-white/5">Lille</span>
              </div>

              <div className="absolute top-[290px] left-[100px] -translate-x-1/2 flex flex-col items-center">
                <span className="text-xs font-bold text-slate-100 uppercase tracking-widest bg-[#131b2f] px-2 py-0.5 rounded border border-white/5">Arras</span>
              </div>

              <div className="absolute top-[290px] left-[300px] -translate-x-1/2 flex flex-col items-center">
                <span className="text-xs font-bold text-slate-100 uppercase tracking-widest bg-[#131b2f] px-2 py-0.5 rounded border border-white/5">Valenciennes</span>
              </div>

              <div className="absolute top-[200px] left-[85px] -translate-x-full flex flex-col items-center mr-2">
                <span className="text-xs font-bold text-slate-100 uppercase tracking-widest bg-[#131b2f] px-2 py-0.5 rounded border border-white/5">Lens</span>
              </div>

              <div className="absolute top-[140px] left-[310px] flex flex-col items-center">
                <span className="text-xs font-bold text-slate-100 uppercase tracking-widest bg-[#131b2f] px-2 py-0.5 rounded border border-white/5">Cambrai</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 glass px-6 py-4 rounded-2xl flex items-center space-x-3 border border-teal-500/20">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-slate-200 tracking-wide uppercase">Présence terrain</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
