import React, { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showContactBtn, setShowContactBtn] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let requestRunning = false;

    const handleScroll = () => {
      if (!requestRunning) {
        requestRunning = true;
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 50);
          setShowContactBtn(scrollY > 600);

          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          setProgress((scrollY / height) * 100);
          requestRunning = false;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) setIsMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'À propos', href: '#about' },
    { name: 'Parcours', href: '#experience' },
    { name: 'Expertises', href: '#skills' },
    { name: 'Réalisations', href: '#projects' }
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* ─── Navbar bar ─── */}
      <nav
        aria-label="Navigation principale"
        className={cn(
          "fixed top-0 left-0 right-0 z-[60] transition-all duration-300 px-6 border-b",
          isScrolled
            ? "bg-[#0d1628]/90 backdrop-blur-md shadow-lg border-white/8 py-3"
            : "bg-transparent border-transparent py-4"
        )}
      >
        {/* Scroll progress bar */}
        <div
          className="fixed top-0 left-0 h-[3px] bg-teal-500 z-[70] transition-all duration-75 ease-out"
          style={{ width: `${progress}%` }}
        />

        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-3 group relative z-[70]">
            <img
              src="/assets/logo.webp"
              alt="Fabien Thiesset - Lead Developer & Architecte Santé"
              className="h-10 w-10 object-contain brightness-125 contrast-125 group-hover:scale-110 transition-transform"
            />
            <span className="text-xl font-display font-bold tracking-tighter text-slate-100 group-hover:text-teal-400 transition-colors hidden lg:inline">
              Fabien <span className="text-teal-400">Thiesset</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[11px] font-bold uppercase tracking-widest text-slate-300 hover:text-teal-400 transition-colors px-2 py-1"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className={cn(
            "hidden lg:block transition-all duration-500",
            showContactBtn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"
          )}>
            <a
              href="#contact"
              aria-label="Aller à la section contact"
              className="bg-teal-500/10 border border-teal-500/30 text-teal-400 px-6 py-2 min-h-[44px] flex items-center rounded-full text-xs font-bold uppercase tracking-widest hover:bg-teal-500/20 transition-all shadow-lg"
            >
              Me Contacter
            </a>
          </div>

          {/* Mobile/Tablet: CTA + Burger side-by-side */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile CTA — visible when scrolled past hero */}
            <a
              href="#contact"
              aria-label="Aller à la section contact"
              className={cn(
                "bg-teal-500/10 border border-teal-500/30 text-teal-400 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-teal-500/20 transition-all duration-500",
                showContactBtn && !isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
              )}
            >
              Me Contacter
            </a>

            {/* Burger toggle — always shows Menu icon; panel X handles closing */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-[70] p-2 text-slate-100 hover:text-teal-400 transition-colors"
              aria-label="Ouvrir le menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* ─── Mobile/Tablet Overlay ─── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        className={cn(
          "lg:hidden fixed inset-0 z-[65] transition-all duration-500 ease-in-out",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Opaque backdrop — click closes */}
        <div
          className="absolute inset-0 bg-[#0a0f1d]"
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* Menu panel — slides in from right */}
        <div className={cn(
          "absolute top-0 right-0 h-full w-full max-w-sm bg-[#0d1628] border-l border-white/5 shadow-2xl flex flex-col transition-transform duration-500 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          {/* Header row */}
          <div className="flex items-center justify-between px-8 pt-6 pb-4 border-b border-white/5">
            <span className="text-teal-400 text-[10px] font-black uppercase tracking-[0.3em]">Navigation</span>
            <button
              onClick={closeMenu}
              className="p-2 text-slate-400 hover:text-teal-400 hover:bg-white/5 rounded-xl transition-all"
              aria-label="Fermer le menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-1 px-6 pt-8 flex-grow" aria-label="Menu mobile">
            {navLinks.map((item, i) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="group flex items-center justify-between px-4 py-4 rounded-2xl text-xl font-bold text-slate-100 hover:text-teal-400 hover:bg-teal-400/5 transition-all duration-200"
                style={{ transitionDelay: isMenuOpen ? `${i * 50}ms` : '0ms' }}
              >
                <span>{item.name}</span>
                <ChevronRight className="w-5 h-5 text-teal-400/40 group-hover:text-teal-400 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="px-8 pb-12 pt-6 border-t border-white/5">
            <a
              href="#contact"
              onClick={closeMenu}
              className="block w-full text-center bg-teal-500 text-[#0a0f1d] px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest shadow-xl shadow-teal-500/20 hover:bg-teal-400 transition-colors"
            >
              Me Contacter
            </a>
            <p className="text-center text-[10px] text-slate-500 font-mono uppercase tracking-widest mt-4">
              Fabien Thiesset · Health-Tech
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
