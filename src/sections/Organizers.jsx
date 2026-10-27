import { eventData } from '../data/event';
import { SectionHeading } from '../components/SectionTag';
import { Reveal } from '../components/Reveal';
import { Phone, Mail, Award, Shield, User, ExternalLink } from 'lucide-react';

export function Organizers() {
  return (
    <section id="organizers" aria-label="Organizing Committee & Leadership" className="relative section-pad overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 top-1/3 h-[450px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(116,69,166,0.12),transparent_70%)] blur-3xl"
      />

      <div className="container-custom relative z-10">
        <SectionHeading
          index="SEC // 06"
          kicker="Leadership & Governance"
          title="ORGANIZING"
          accent="COMMITTEE."
          description="Visionary institutional mentors and dedicated student chapter leadership powering WCE Hackathon."
        />

        {/* Patrons & Advisory Grid */}
        <div className="mt-12 mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#66E8C3] font-bold">
              // INSTITUTIONAL PATRONS & DEANS
            </span>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventData.patrons.map((patron, i) => (
              <Reveal key={patron.name} delay={i * 0.08} y={20}>
                <div className="group relative rounded-2xl border border-white/10 bg-[#0e0c1f]/80 p-7 backdrop-blur-xl hover:border-[#66E8C3]/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7445A6]/30 to-[#66E8C3]/20 border border-white/10 flex items-center justify-center text-[#66E8C3] font-bold text-lg">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] tracking-widest uppercase text-[#66E8C3] px-2 py-0.5 rounded-full bg-[#66E8C3]/10 border border-[#66E8C3]/30">
                        {patron.badge}
                      </span>
                      <h4 className="font-display font-bold text-xl text-white mt-1 group-hover:text-[#66E8C3] transition-colors">
                        {patron.name}
                      </h4>
                    </div>
                  </div>

                  <div className="font-mono text-xs text-white/90 font-medium mb-1">
                    {patron.role}
                  </div>
                  <div className="text-xs text-[#8E89AA] leading-relaxed">
                    {patron.org}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Student Coordinators / Chapter Leads */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#66E8C3] font-bold">
              // STUDENT CONVENORS & CHAPTER LEADS
            </span>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventData.leads.map((lead, i) => (
              <Reveal key={lead.name} delay={0.2 + i * 0.08} y={20}>
                <div className="group relative rounded-2xl border border-white/10 bg-[#0e0c1f]/80 p-7 backdrop-blur-xl hover:border-[#66E8C3]/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#66E8C3]/20 to-[#7445A6]/30 border border-white/10 flex items-center justify-center text-[#66E8C3] font-bold text-lg">
                      <User className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] tracking-widest uppercase text-[#B9B4CA] px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/10">
                        {lead.role}
                      </span>
                      <h4 className="font-display font-bold text-xl text-white mt-1 group-hover:text-[#66E8C3] transition-colors">
                        {lead.name}
                      </h4>
                    </div>
                  </div>

                  <div className="text-xs text-[#8E89AA] mb-4">
                    {lead.org}
                  </div>

                  {lead.phone && (
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <a
                        href={`tel:${lead.phone.replace(/\s+/g, '')}`}
                        className="inline-flex items-center gap-2 font-mono text-xs text-[#66E8C3] hover:underline"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>{lead.phone}</span>
                      </a>

                      <a
                        href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-mono text-[#8E89AA] hover:text-white"
                      >
                        WhatsApp
                      </a>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
