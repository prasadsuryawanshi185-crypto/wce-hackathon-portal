import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { eventData } from '../data/event';
import { Flame, Clock, Sparkles } from 'lucide-react';

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isLive: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      // Calculate target date relative to March 20, 2026 or a future cycle
      const target = new Date(eventData.targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isLive: true,
        });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds, isLive: false });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'DAYS', value: String(timeLeft.days).padStart(2, '0') },
    { label: 'HOURS', value: String(timeLeft.hours).padStart(2, '0') },
    { label: 'MINUTES', value: String(timeLeft.minutes).padStart(2, '0') },
    { label: 'SECONDS', value: String(timeLeft.seconds).padStart(2, '0') },
  ];

  return (
    <div className="relative inline-block w-full max-w-2xl my-6">
      {/* Background card with cyber styling */}
      <div className="relative glass-panel tech-corners rounded-xl p-4 sm:p-6 border border-white/10 bg-[#0e0d1d]/80 backdrop-blur-xl overflow-hidden shadow-[0_0_40px_rgba(116,69,166,0.15)]">
        {/* Glow gradients */}
        <div className="absolute -top-16 -left-16 w-32 h-32 bg-[#66E8C3]/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-[#7445A6]/25 rounded-full blur-2xl pointer-events-none" />

        {/* Top header row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 sm:mb-5 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#66E8C3] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#66E8C3]" />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#66E8C3] font-semibold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              ROUND 2 SPRINT COUNTDOWN
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#B9B4CA] px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10">
              OFFLINE CRUCIBLE
            </span>
          </div>
        </div>

        {/* Units Grid */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
          {timeUnits.map((unit, idx) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative rounded-lg bg-black/40 border border-white/5 p-2.5 sm:p-4 group hover:border-[#66E8C3]/30 transition-colors"
            >
              <div className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-[#F7F5FF] to-[#B9B4CA]">
                {unit.value}
              </div>
              <div className="font-mono text-[9px] sm:text-[11px] uppercase tracking-[0.22em] text-[#66E8C3] mt-2 font-medium">
                {unit.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sub-bar */}
        <div className="mt-4 pt-3 flex flex-wrap items-center justify-between text-xs text-[#8E89AA] font-mono border-t border-white/5 gap-2">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#66E8C3]" />
            24 Hours Continuous Coding & Mentorship
          </span>
          <span className="text-[#66E8C3] font-medium">
            20-21 MARCH · WCE SANGLI
          </span>
        </div>
      </div>
    </div>
  );
}
