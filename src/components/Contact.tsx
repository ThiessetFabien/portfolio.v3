import React from 'react';
import { HeartPulse, BrainCircuit, ArrowRight, MapPin, Mail } from 'lucide-react';

export default function Contact({ mobilityData }: { mobilityData: any }) {
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage(null);
    
    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      'bot-field': formData.get('bot-field'),
    };
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      
      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus('success');
      } else {
        console.error('Erreur API Contact:', response.status, data);
        setErrorMessage(data.error || 'Une erreur est survenue lors de l\'envoi.');
        throw new Error(data.error || 'Erreur serveur');
      }
    } catch (error) {
      console.error('Erreur soumission:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" role="region" aria-labelledby="contact-title" className="bg-[#050813] text-white relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[20vw] font-bold opacity-[0.02] pointer-events-none select-none text-teal-400" aria-hidden="true">
        PROXIMITÉ
      </div>
      
      <div className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 rounded-full mb-8 border border-white/10">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-400">Collaborons</span>
            </div>
            <h2 id="contact-title" className="heading-primary text-5xl md:text-7xl mb-8 leading-tight">
              Choisir un expert qui <br /><span className="text-teal-400 italic serif underline decoration-teal-400/50 underline-offset-8">comprend vos enjeux</span>.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: Identity & Mobility */}
            <div className="space-y-10 reveal">
              {/* Hybrid Pillars */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-6 bg-[#0a0f1d]/50 rounded-2xl border border-white/5 hover:border-teal-400/30 transition-colors group">
                  <HeartPulse className="w-6 h-6 text-teal-400 mb-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <h3 className="font-bold text-slate-100 text-sm mb-2">Culture Médicale</h3>
                  <p className="text-slate-400 text-[11px] leading-relaxed italic">17 ans d'immersion clinique pour des solutions qui ont du sens.</p>
                </div>
                <div className="p-6 bg-[#0a0f1d]/50 rounded-2xl border border-white/5 hover:border-teal-400/30 transition-colors group">
                  <BrainCircuit className="w-6 h-6 text-teal-400 mb-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <h3 className="font-bold text-slate-100 text-sm mb-2">Expertise Tech</h3>
                  <p className="text-slate-400 text-[11px] leading-relaxed italic">Une rigueur de développement au service de la performance data.</p>
                </div>
              </div>

              {/* Harmonized Mobility Card */}
              <div className="p-6 bg-[#0a0f1d]/50 rounded-2xl border border-white/5 hover:border-teal-400/30 transition-all group/mobility relative overflow-hidden min-h-[160px] flex items-center">
                <div className="relative z-10 w-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center group-hover/mobility:scale-110 transition-transform">
                      <MapPin className="w-5 h-5 text-teal-400" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-100 text-sm">Ancrage & Mobilité</h3>
                      <p className="text-teal-400 text-[10px] font-black uppercase tracking-widest">Hauts-de-France</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {mobilityData.zones.map((tag: string) => (
                      <span key={tag} className="px-3 py-1 bg-[#131b2f]/90 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-teal-200 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-slate-400 text-[11px] leading-relaxed italic">
                    {mobilityData.details}
                  </p>
                </div>
              </div>

              {/* Email direct */}
              <a
                href="mailto:thiessetfabienpro@gmail.com"
                className="flex items-center space-x-3 p-5 bg-[#0a0f1d]/50 rounded-2xl border border-white/5 hover:border-teal-400/30 transition-all group/email"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center flex-shrink-0 group-hover/email:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-teal-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Contact direct</p>
                  <p className="text-slate-100 text-sm font-medium group-hover/email:text-teal-400 transition-colors">thiessetfabienpro@gmail.com</p>
                </div>
              </a>
            </div>

            {/* Form Column */}
            <div className="reveal" style={{ transitionDelay: '200ms' }}>
              {status === 'success' ? (
                <div className="bg-teal-500/10 p-12 rounded-3xl border border-teal-500/30 text-center backdrop-blur-xl">
                  <div className="w-20 h-20 bg-teal-500 text-[#0a0f1d] rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(45,212,191,0.4)]">
                    <HeartPulse className="w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-100 mb-4">Message reçu !</h2>
                  <p className="text-slate-300 text-lg">Merci. Je traiterai votre demande sous 24h avec la plus grande attention.</p>
                  <button onClick={() => setStatus('idle')} className="mt-10 text-teal-400 font-bold hover:text-white transition-colors flex items-center justify-center mx-auto space-x-2">
                    <ArrowRight className="w-4 h-4 rotate-180" />
                    <span>Envoyer un autre message</span>
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit}
                  className="bg-[#131b2f]/80 backdrop-blur-xl p-8 md:p-10 rounded-[40px] border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden group/form"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 blur-3xl pointer-events-none group-hover/form:bg-teal-500/10 transition-colors duration-700" />
                  
                  {/* Honeypot anti-spam */}
                  <p className="hidden" aria-hidden="true">
                    <label>Ne pas remplir : <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Nom Complet</label>
                      <input required type="text" id="name" name="name" autoComplete="name" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-5 py-4 text-slate-100 focus:outline-none focus:border-teal-400/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-teal-400/30 transition-all placeholder-slate-600 font-medium" placeholder="Ex: Jean Dupont" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Email Professionnel</label>
                      <input required type="email" id="email" name="email" autoComplete="email" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-5 py-4 text-slate-100 focus:outline-none focus:border-teal-400/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-teal-400/30 transition-all placeholder-slate-600 font-medium" placeholder="jean@entreprise.com" />
                    </div>
                  </div>
                  <div className="mb-8 space-y-2">
                    <label htmlFor="message" className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Votre Projet / Enjeux</label>
                    <textarea required id="message" name="message" rows={4} className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-5 py-4 text-slate-100 focus:outline-none focus:border-teal-400/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-teal-400/30 transition-all resize-none placeholder-slate-600 font-medium leading-relaxed" placeholder="Décrivez brièvement vos besoins en MedTech ou Data..."></textarea>
                  </div>
                  
                  {/* Mention RGPD obligatorie */}
                  <div className="mb-8 flex items-start space-x-3">
                    <input required type="checkbox" id="rgpd" name="rgpd" className="mt-1 w-4 h-4 rounded border-white/10 bg-white/[0.03] text-teal-500 focus:ring-teal-500/50 accent-teal-500 cursor-pointer" />
                    <label htmlFor="rgpd" className="text-[11px] text-slate-400 leading-relaxed italic cursor-pointer">
                      En soumettant ce formulaire, j'accepte que les informations saisies soient exploitées exclusivement dans le cadre de ma demande de contact. Aucune donnée n'est stockée en base de données.
                    </label>
                  </div>
                  
                  {status === 'error' && (
                    <p className="text-red-400 text-xs mb-6 font-bold text-center">
                      {errorMessage || "Une erreur est survenue lors de l'envoi. Veuillez réessayer."}
                    </p>
                  )}

                  <button 
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center space-x-3 bg-teal-500 text-[#0a0f1d] px-8 py-5 rounded-2xl font-black hover:bg-teal-400 disabled:opacity-50 transition-all shadow-[0_15px_30px_-5px_rgba(45,212,191,0.4)] hover:shadow-[0_20px_40px_-5px_rgba(45,212,191,0.5)] group/btn active:scale-[0.98]"
                  >
                    <span className="uppercase tracking-[0.2em] text-xs">{status === 'submitting' ? 'Transmission...' : 'Envoyer ma proposition'}</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
