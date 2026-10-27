import { useState } from 'react';
import { motion } from 'framer-motion';
import { eventData } from '../data/event';
import { SectionHeading } from '../components/SectionTag';
import { Reveal } from '../components/Reveal';
import { Calendar, Clock, CheckCircle2, ArrowUpRight, Flame, ShieldAlert } from 'lucide-react';

export function Timeline() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section
      id="timeline"
      aria-label="Event timeline"
      className="relative section-pad overflow-hidden"
    >
      {/* Background radial glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(116,69,166,0.1),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(102,232,195,0.08),transparent_65%)]"
      />

      <div className="container-custom relative z-10">
        <SectionHeading
          index="SEC // 04"
          kicker="Roadmap & Milestones"
          title="EVENT"
          accent="TIMELINE."
          description="Six key milestones guiding teams from registration to grand final demos."
          align="center"
        />

        {/* Milestone Cards in 2 columns or structured progression */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="relative">
            {/* Center line for larger screens */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-gradient-to-b from-[#66E8C3] via-[#7445A6] to-[#66E8C3]/20" />

            <div className="space-y-8 md:space-y-12">
              {eventData.timeline.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <Reveal key={item.id} delay={idx * 0.08} y={20}>
                    <div
                      className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                        isEven ? 'md:flex-row-reverse text-left md:text-right' : 'text-left'
                      }`}
                      onMouseEnter={() => setActiveStep(item.id)}
                      onMouseLeave={() => setActiveStep(null)}
                    >
                      {/* Content Card */}
                      <div className="w-full md:w-1/2">
                        <div className="relative rounded-2xl border border-white/10 bg-[#0e0c1f]/85 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:border-[#66E8C3]/50 hover:shadow-[0_0_30px_rgba(102,232,195,0.1)] group">
                          {/* Badge & Date */}
                          <div
                            className={`flex items-center gap-2 mb-3 ${
                              isEven ? 'justify-start md:justify-end' : 'justify-start'
                            }`}
                          >
                            <span className="font-mono text-[10px] tracking-[0.2em] uppercase px-2.5 py-0.5 rounded-full bg-[#66E8C3]/10 border border-[#66E8C3]/30 text-[#66E8C3] font-semibold">
                              {item.badge}
                            </span>
                            <span className="font-mono text-xs text-[#8E89AA] flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-[#66E8C3]" />
                              {item.date}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-[#66E8C3] transition-colors mb-3">
                            {item.title}
                          </h3>

                          {/* Description */}
                          <p className="text-xs sm:text-sm text-[#B9B4CA] leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Center Node Indicator */}
                      <div className="hidden md:flex relative z-10 w-12 h-12 rounded-full border-2 border-[#66E8C3] bg-[#0d0b1c] items-center justify-center shadow-[0_0_20px_rgba(102,232,195,0.4)] shrink-0">
                        <span className="font-mono text-xs font-bold text-white">
                          0{item.id}
                        </span>
                      </div>

                      {/* Empty spacer for alternating balance */}
                      <div className="hidden md:block w-1/2" />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>

        {/* Fee & Logistics Callout */}
        <div className="mt-16 max-w-3xl mx-auto rounded-xl border border-white/10 bg-white/[0.02] p-6 text-center backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-[#B9B4CA]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#66E8C3]" />
              <span>ROUND 1: 100% FREE ENTRY</span>
            </div>
            <div className="h-4 w-px bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#66E8C3]" />
              <span>ROUND 2: ₹400 PER SHORTLISTED TEAM</span>
            </div>
            <div className="h-4 w-px bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#66E8C3]" />
              <span>MEALS & STAY INCLUDED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
