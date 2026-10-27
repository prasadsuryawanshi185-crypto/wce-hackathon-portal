import { motion } from 'framer-motion';
import { eventData } from '../data/event';
import { ArrowDown, ArrowUpRight, FileText, Sparkles, MapPin, Trophy, ShieldCheck } from 'lucide-react';
import { EASE_OUT_EXPO } from '../lib/easing';
import { HeroScene } from '../three/HeroScene';
import { Countdown } from '../components/Countdown';

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="WCE Hackathon 2026"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-28 lg:pt-32 pb-16"
    >
      {/* Background gradients and visual atmospheric layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(105deg,rgba(13,11,28,0.95)_0%,rgba(18,14,35,0.78)_45%,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(13,11,28,0.85)_0%,transparent_35%,transparent_65%,rgba(13,11,28,0.95)_100%)] lg:hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] w-[720px] h-[720px] rounded-full bg-[radial-gradient(circle,rgba(116,69,166,0.25)_0%,transparent_70%)] blur-3xl z-[0]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(102,232,195,0.16)_0%,transparent_72%)] blur-3xl z-[0]"
      />

      <div className="container-custom relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Hero Text & CTAs */}
        <div className="lg:col-span-7 relative z-20">
          {/* Chapter & Tag badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
            className="mb-5 flex flex-wrap items-center gap-2.5 sm:gap-3"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7445A6]/20 border border-[#7445A6]/40 text-[#66E8C3] font-mono text-[11px] tracking-[0.16em] uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#66E8C3] animate-pulse" />
              {eventData.chapter}
            </span>
            <span className="hidden sm:inline-block h-px w-6 bg-white/20" />
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#B9B4CA]">
              {eventData.symposium}
            </span>
          </motion.div>

          {/* Clean Main Titles */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.1 }}
            className="font-display font-black uppercase text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08] text-white"
          >
            WCE HACKATHON
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#66E8C3] via-[#55DCCB] to-[#7445A6]">
              BUILD WHAT MATTERS.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.2 }}
            className="mt-5 max-w-xl text-[#B9B4CA] text-sm sm:text-base lg:text-lg leading-relaxed font-sans"
          >
            India's premier 24-hour continuous offline student-run engineering crucible at{' '}
            <strong className="text-white font-medium">Walchand College of Engineering, Sangli</strong>.
            Two calibrated tracks, rigorous code audits, and ₹1,00,000+ in bounties.
          </motion.p>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Countdown />
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.4 }}
            className="mt-6 flex flex-wrap items-center gap-3.5"
          >
            <a
              href={eventData.unstopRegistrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary !py-3.5 !px-6 text-xs sm:text-sm font-bold flex items-center gap-2 shadow-[0_0_30px_rgba(102,232,195,0.35)]"
            >
              <Sparkles className="w-4 h-4" />
              <span>REGISTER ON UNSTOP</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={eventData.problemStatementsDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary !py-3.5 !px-5 text-xs sm:text-sm flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#66E8C3]" />
              <span>PROBLEM STATEMENTS (PDF)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/50" />
            </a>

            <a
              href="#timeline"
              className="inline-flex items-center gap-1.5 px-3 py-3 text-xs font-mono tracking-[0.12em] uppercase text-[#B9B4CA] hover:text-white transition-colors"
            >
              <span>SCHEDULE</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl"
          >
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8E89AA]">PRIZE POOL</div>
              <div className="font-display font-bold text-xl sm:text-2xl text-[#66E8C3] mt-0.5">₹1,00,000+</div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8E89AA]">SPRINT FORMAT</div>
              <div className="font-display font-bold text-xl sm:text-2xl text-white mt-0.5">24 Hours</div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8E89AA]">ENTRY FEE</div>
              <div className="font-display font-bold text-xl sm:text-2xl text-white mt-0.5">Round 1 Free</div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8E89AA]">CAMPUS VENUE</div>
              <div className="font-display font-bold text-xl sm:text-2xl text-white mt-0.5">WCE Sangli</div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D Scene / Interactive Visual */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[360px] lg:min-h-[520px]">
          <HeroScene />
        </div>
      </div>
    </section>
  );
}