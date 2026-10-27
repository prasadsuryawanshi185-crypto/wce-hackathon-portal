import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { eventData } from '../data/event';
import { Menu, X, ArrowUpRight, FileText, ExternalLink, Trophy, Calendar, MapPin, Sparkles } from 'lucide-react';
import { EASE_OUT_EXPO } from '../lib/easing';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const ids = eventData.navItems.map((i) => i.id);
      const pos = window.scrollY + 280;
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= pos) {
          setActive(ids[i]);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.1 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#090814]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent border-b border-transparent py-5'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo Group */}
          <a
            href="#hero"
            className="flex items-center gap-3 group"
            aria-label="WCE Hackathon — home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 p-1.5 group-hover:border-[#66E8C3]/50 transition-colors">
              <img
                src="/logos/hackathon-logo.png"
                alt="WCE Hackathon"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="font-display font-bold text-sm tracking-[0.14em] text-white uppercase leading-none group-hover:text-[#66E8C3] transition-colors">
                WCE HACKATHON
              </div>
              <div className="font-mono text-[10px] text-[#8E89AA] tracking-[0.2em] mt-1 flex items-center gap-1.5">
                <span>{eventData.edition}</span>
                <span className="w-1 h-1 rounded-full bg-[#66E8C3]" />
                <span className="text-[#66E8C3]">WCE ACM SC</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav
            className="hidden xl:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md"
            aria-label="Primary navigation"
          >
            {eventData.navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-full font-mono text-[11px] tracking-[0.08em] uppercase shrink-0 transition-all duration-300 ${
                  active === item.id
                    ? 'text-white bg-[#7445A6]/40 border border-[#66E8C3]/40 shadow-[0_0_15px_rgba(102,232,195,0.2)]'
                    : 'text-[#B9B4CA] hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={eventData.problemStatementsDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg font-mono text-[11px] tracking-[0.1em] uppercase text-[#B9B4CA] border border-white/10 hover:border-[#66E8C3]/50 hover:text-white transition-all bg-white/[0.02]"
            >
              <FileText className="w-3.5 h-3.5 text-[#66E8C3]" />
              <span>PS Dossier</span>
            </a>

            <a
              href={eventData.unstopRegistrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary !py-2 !px-4 text-xs font-semibold shadow-[0_0_20px_rgba(102,232,195,0.3)] hover:shadow-[0_0_25px_rgba(102,232,195,0.5)]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>REGISTER ON UNSTOP</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setOpen(true)}
              className="xl:hidden p-2 text-[#B9B4CA] hover:text-white border border-white/10 rounded-lg bg-white/[0.02] transition-colors"
              aria-label="Open mobile menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 xl:hidden bg-black/80 backdrop-blur-2xl flex flex-col"
          >
            <div className="container-custom flex items-center justify-between py-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <img
                  src="/logos/hackathon-logo.png"
                  alt="WCE Hackathon"
                  className="w-8 h-8 object-contain"
                />
                <div className="font-display font-bold text-sm text-white">
                  WCE HACKATHON {eventData.edition}
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="p-2 text-white/70 hover:text-white border border-white/10 rounded-lg"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
              <nav className="space-y-2">
                {eventData.navItems.map((item, idx) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="block py-3 px-4 rounded-xl font-display text-lg font-semibold text-white/90 hover:text-[#66E8C3] hover:bg-white/[0.04] transition-all border border-transparent hover:border-white/10"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-8 space-y-3 pt-6 border-t border-white/10">
                <a
                  href={eventData.unstopRegistrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full justify-center !py-3.5 text-center font-bold"
                >
                  REGISTER ON UNSTOP
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={eventData.problemStatementsDriveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-full justify-center !py-3 text-center"
                >
                  <FileText className="w-4 h-4 text-[#66E8C3]" />
                  DOWNLOAD PROBLEM STATEMENTS
                </a>

                <div className="pt-4 text-center font-mono text-[11px] text-[#8E89AA]">
                  WCE ACM Student Chapter · Sangli
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}