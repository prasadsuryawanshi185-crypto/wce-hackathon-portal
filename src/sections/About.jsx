import { eventData } from '../data/event';
import { Reveal } from '../components/Reveal';
import { ShieldCheck, Award, Zap, Code, Users } from 'lucide-react';

export function About() {
  return (
    <section
      id="about"
      aria-label="About WCE Hackathon 2026"
      className="relative section-pad overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(116,69,166,0.1),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(102,232,195,0.06),transparent_65%)]"
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs text-[#66E8C3] tracking-[0.2em] font-bold">
                  SEC // 01
                </span>
                <span className="h-px w-12 bg-gradient-to-r from-[#66E8C3] to-transparent" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#8E89AA]">
                  The Crucible & Heritage
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15]">
                Where engineering discipline meets{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#66E8C3] via-[#55DCCB] to-[#7445A6]">
                  raw ambition.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-[#B9B4CA] text-base sm:text-lg leading-relaxed">
                WCE Hackathon is the flagship 24-hour continuous offline engineering sprint of the{' '}
                <strong className="text-white">VISION National-Level Technical Symposium</strong>, organized by
                the <strong className="text-white">WCE ACM Student Chapter</strong> at Walchand College of
                Engineering, Sangli.
              </p>
              <p className="mt-4 text-[#8E89AA] text-sm sm:text-base leading-relaxed">
                We bridge junior talent and senior systems innovators through dual calibrated tracks. From IoT microcontrollers and fintech architectures to state-of-the-art vector memory graphs, teams prototype solutions that tackle tangible, high-consequence problems.
              </p>
            </Reveal>

            {/* Institutional Credentials */}
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-3.5 px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#66E8C3]/50 transition-colors">
                  <img src="/logos/wce-logo.svg" alt="WCE Sangli" className="w-10 h-10 object-contain" />
                  <div>
                    <div className="text-white font-bold text-xs tracking-wider">WALCHAND COLLEGE</div>
                    <div className="font-mono text-[10px] text-[#8E89AA] tracking-widest mt-0.5">ESTABLISHED 1947</div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#66E8C3]/50 transition-colors">
                  <img src="/logos/acm-logo.png" alt="WCE ACM Student Chapter" className="w-10 h-10 object-contain" />
                  <div>
                    <div className="text-white font-bold text-xs tracking-wider">WCE ACM CHAPTER</div>
                    <div className="font-mono text-[10px] text-[#66E8C3] tracking-widest mt-0.5">CHARTERED 2016</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Key Stats Grid */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {eventData.stats.map((s, i) => (
                <Reveal key={s.label} delay={0.1 + i * 0.08} y={20}>
                  <div className="relative rounded-2xl border border-white/10 bg-[#0e0c1f]/85 p-6 backdrop-blur-xl group hover:border-[#66E8C3]/40 transition-all duration-300">
                    <div className="font-display font-black text-3xl sm:text-4xl text-white group-hover:text-[#66E8C3] transition-colors">
                      {s.value}
                    </div>
                    <div className="font-mono text-[10px] font-bold text-[#66E8C3] tracking-widest mt-1">
                      {s.unit}
                    </div>
                    <div className="text-xs text-[#8E89AA] leading-relaxed mt-2">
                      {s.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}