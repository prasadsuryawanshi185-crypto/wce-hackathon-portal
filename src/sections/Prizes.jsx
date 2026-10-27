import { eventData } from '../data/event';
import { SectionHeading } from '../components/SectionTag';
import { Reveal } from '../components/Reveal';
import { Trophy, Award, Sparkles, CheckCircle2, ShieldCheck, Palette, Share2, Briefcase } from 'lucide-react';

const icons = {
  winner: Trophy,
  runner1: Award,
  runner2: Award,
  'novice-award': Sparkles,
  'uiux-award': Palette,
  'social-award': Share2,
};

export function Prizes() {
  const podiumPrizes = eventData.prizes.slice(0, 3);
  const specialtyPrizes = eventData.prizes.slice(3);

  return (
    <section id="prizes" aria-label="Prizes and Rewards" className="relative section-pad overflow-hidden">
      {/* Background glow effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(116,69,166,0.18),rgba(102,232,195,0.08)_50%,transparent_75%)] blur-3xl"
      />

      <div className="container-custom relative z-10">
        <SectionHeading
          index="SEC // 05"
          kicker="Bounties & Honors"
          title="PRIZES &"
          accent="REWARDS."
          description="Total cash prize pool and honors exceeding ₹1,00,000+ awaiting the sharpest developers."
        />

        {/* Total Prize Pool Hero Banner */}
        <Reveal delay={0.1}>
          <div className="relative my-10 sm:my-14 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-[#14102c]/90 via-[#0e0c20]/80 to-[#090714]/90 p-8 sm:p-12 text-center backdrop-blur-2xl shadow-[0_0_50px_rgba(116,69,166,0.2)]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#66E8C3]/10 border border-[#66E8C3]/30 font-mono text-xs tracking-[0.2em] text-[#66E8C3] uppercase mb-4 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              TOTAL PRIZE POOL
            </div>

            <h3 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">
              {eventData.totalPrizePool}
            </h3>

            <p className="mt-4 font-mono text-xs sm:text-sm text-[#B9B4CA] max-w-xl mx-auto uppercase tracking-wider">
              Cash bounties, champion trophies, summer internships, and cloud credits
            </p>
          </div>
        </Reveal>

        {/* Podium Top 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {podiumPrizes.map((prize, idx) => {
            const isWinner = prize.rank === '1st';
            return (
              <Reveal key={prize.id} delay={0.15 + idx * 0.1} y={24}>
                <div
                  className={`relative flex flex-col justify-between rounded-2xl border p-7 sm:p-8 backdrop-blur-xl h-full transition-all duration-400 hover:-translate-y-1.5 ${
                    isWinner
                      ? 'border-amber-400/50 bg-[#171333]/90 shadow-[0_0_40px_rgba(251,191,36,0.18)] ring-1 ring-amber-400/30'
                      : 'border-white/10 bg-[#0e0c1f]/80 hover:border-white/20'
                  }`}
                >
                  <div>
                    {/* Header: Rank Badge & Trophy */}
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className={`font-mono text-xs font-bold tracking-widest px-3 py-1 rounded-full border ${
                          isWinner
                            ? 'border-amber-400/40 bg-amber-400/10 text-amber-300'
                            : 'border-white/15 bg-white/[0.04] text-[#B9B4CA]'
                        }`}
                      >
                        {prize.badge}
                      </span>
                      <Trophy
                        className={`w-7 h-7 ${
                          isWinner ? 'text-amber-400' : 'text-[#66E8C3]'
                        }`}
                      />
                    </div>

                    {/* Prize Amount */}
                    <div
                      className={`font-display font-black text-4xl sm:text-5xl leading-none mb-2 ${
                        isWinner
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400'
                          : 'text-white'
                      }`}
                    >
                      {prize.amount}
                    </div>

                    {/* Title & Category */}
                    <h4 className="font-display font-bold text-xl text-white mt-3 mb-1">
                      {prize.title}
                    </h4>

                    <p className="font-mono text-[11px] text-[#66E8C3] tracking-wider uppercase mb-5">
                      {prize.category}
                    </p>

                    <p className="text-xs sm:text-sm text-[#B9B4CA] leading-relaxed mb-6">
                      {prize.description}
                    </p>

                    {/* Perks */}
                    <ul className="space-y-2.5 pt-4 border-t border-white/10">
                      {prize.perks.map((perk, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#c7cfd9]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#66E8C3] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Specialty Awards Grid */}
        <Reveal delay={0.25}>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-10 backdrop-blur-xl">
            <h4 className="font-display font-bold text-2xl text-white mb-2">
              Special Track & Category Awards
            </h4>
            <p className="font-mono text-xs text-[#8E89AA] tracking-wider uppercase mb-8">
              Targeted bounties for design, rookie excellence, and community storytelling
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {specialtyPrizes.map((prize) => {
                const Icon = icons[prize.id] || Sparkles;
                return (
                  <div
                    key={prize.id}
                    className="rounded-xl border border-white/10 bg-[#0e0c1f]/60 p-6 hover:border-[#66E8C3]/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-[#66E8C3]/10 border border-[#66E8C3]/30 text-[#66E8C3]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-mono text-[10px] text-[#8E89AA] uppercase tracking-wider">
                          {prize.badge}
                        </div>
                        <h5 className="font-display font-bold text-lg text-white">
                          {prize.title}
                        </h5>
                      </div>
                    </div>

                    <p className="text-xs text-[#B9B4CA] leading-relaxed mb-4">
                      {prize.description}
                    </p>

                    <div className="font-mono text-xs text-[#66E8C3] font-semibold">
                      {prize.amount}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}