import React from 'react';
import { Linkedin, Github, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#03050c] text-slate-200 py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-12 mb-12">
          <div className="flex flex-col items-start w-full">
            <div className="flex items-center justify-start space-x-3 mb-2">
              <img src="/assets/logo.webp" alt="" className="h-8 w-8 object-contain" aria-hidden="true" loading="lazy" decoding="async" />
              <div className="font-display font-bold text-2xl tracking-tighter text-slate-100">
                Fabien Thiesset<span className="text-teal-400">.</span>
              </div>
            </div>
            <p className="text-slate-400 text-xs font-mono uppercase tracking-[0.2em] text-left">
              Engagement • Innovation • Bientraitance
            </p>
          </div>

          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/fabien-thiesset" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Profil LinkedIn (nouvel onglet)"
              className="p-4 bg-white/5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl hover:bg-white/10 hover:text-teal-400 transition-all focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none"
            >
              <Linkedin className="w-5 h-5" aria-hidden="true" />
            </a>
            <a 
              href="https://github.com/ThiessetFabien" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Profil GitHub (nouvel onglet)"
              className="p-4 bg-white/5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl hover:bg-white/10 hover:text-teal-400 transition-all focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none"
            >
              <Github className="w-5 h-5" aria-hidden="true" />
            </a>
            <a 
              href="mailto:thiessetfabienpro@gmail.com" 
              aria-label="Envoyer un email"
              className="p-4 bg-white/5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl hover:bg-white/10 hover:text-teal-400 transition-all focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
            </a>
            <a 
              href="https://wa.me/33644026362" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="WhatsApp (nouvel onglet)"
              className="p-4 bg-white/5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl hover:bg-white/10 hover:text-teal-400 transition-all focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
            </a>
            <a 
              href="https://discord.gg/vij157164" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Discord (nouvel onglet)"
              className="p-4 bg-white/5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl hover:bg-white/10 hover:text-teal-400 transition-all focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.419c0 1.334-.947 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.419c0 1.334-.946 2.419-2.157 2.419z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-[10px] uppercase font-bold tracking-widest">
          <div>© 2026 Tous droits réservés</div>
          <div className="italic">Eco-designed with Passion & Intelligence</div>
        </div>
      </div>
    </footer>
  );
}
