import { eventData } from '../data/event';
import { SectionHeading } from '../components/SectionTag';
import { Reveal } from '../components/Reveal';
import { ArrowUpRight, Building2, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';

export function Sponsors() {
  const { poweredBy, titleSponsor, organizer, institution } = eventData.sponsors;

  return (
    <section id="sponsors" aria-label="Sponsors and Partners" className="relative section-pad overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(102,232,195,0.06),transparent_60%)]"
      />

      <div className="container-custom relative z-10">
        <SectionHeading
          index="SEC // 07"
          kicker="Ecosystem & Partners"
          title="SPONSORS &"
          accent="ORGANIZERS."
          description="Powered by industry leaders and backed by seven decades of autonomous engineering pedigree."
        />

        {/* Featured Key Partners Banner (Unstop & Zenteiq) */}
        <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Powered By Unstop */}
          <Reveal delay={0.1}>
            <div className="group relative rounded-2xl border border-white/10 bg-[#0e0c1f]/85 p-8 sm:p-10 backdrop-blur-xl h-full flex flex-col justify-between hover:border-[#66E8C3]/50 transition-all duration-300">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#66E8C3] font-bold block mb-6">
                  // OFFICIAL ENGAGEMENT PLATFORM
                </span>

                <div className="h-24 sm:h-28 flex items-center justify-center bg-white/[0.03] border border-white/10 rounded-xl p-4 mb-6 group-hover:border-[#66E8C3]/30 transition-colors">
                  <img
                    src={poweredBy.logo}
                    alt={poweredBy.name}
                    className="max-h-full max-w-[200px] object-contain rounded-lg"
                  />
                </div>

                <h3 className="font-display font-bold text-2xl text-white mb-2">
                  Powered By {poweredBy.name}
                </h3>
                <p className="text-sm text-[#B9B4CA] leading-relaxed mb-6">
                  {poweredBy.description}
                </p>
              </div>

              <a
                href={poweredBy.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary !py-2.5 !px-4 text-xs font-semibold self-start"
              >
                <span>Visit {poweredBy.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </Reveal>

          {/* Title Sponsor Zenteiq */}
          <Reveal delay={0.18}>
            <div className="group relative rounded-2xl border border-white/10 bg-[#0e0c1f]/85 p-8 sm:p-10 backdrop-blur-xl h-full flex flex-col justify-between hover:border-[#66E8C3]/50 transition-all duration-300">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#66E8C3] font-bold block mb-6">
                  // PROUD SPONSOR
                </span>

                <div className="h-24 sm:h-28 flex items-center justify-center bg-white/[0.03] border border-white/10 rounded-xl p-4 mb-6 group-hover:border-[#66E8C3]/30 transition-colors">
                  <img
                    src={titleSponsor.logo}
                    alt={titleSponsor.name}
                    className="max-h-full max-w-[220px] object-contain"
                  />
                </div>

                <h3 className="font-display font-bold text-2xl text-white mb-2">
                  {titleSponsor.name}
                </h3>
                <p className="text-sm text-[#B9B4CA] leading-relaxed mb-6">
                  {titleSponsor.description}
                </p>
              </div>

              <a
                href={titleSponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary !py-2.5 !px-4 text-xs font-semibold self-start"
              >
                <span>Explore {titleSponsor.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Organized By Institutional Pedigree Banner */}
        <Reveal delay={0.25}>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-10 backdrop-blur-xl my-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-white/[0.04] border border-white/10 p-3 flex items-center justify-center shrink-0">
                  <img src={organizer.logo} alt={organizer.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#66E8C3]">
                    ORGANIZING STUDENT CHAPTER
                  </span>
                  <h4 className="font-display font-bold text-xl sm:text-2xl text-white mt-1">
                    {organizer.name}
                  </h4>
                  <p className="text-xs text-[#8E89AA] mt-1">
                    {organizer.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-white/[0.04] border border-white/10 p-3 flex items-center justify-center shrink-0">
                  <img src={institution.logo} alt={institution.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#66E8C3]">
                    HOST INSTITUTION
                  </span>
                  <h4 className="font-display font-bold text-xl sm:text-2xl text-white mt-1">
                    {institution.name}
                  </h4>
                  <p className="text-xs text-[#8E89AA] mt-1">
                    {institution.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Sponsorship Opportunities Grid */}
        <div className="mt-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h4 className="font-display font-bold text-2xl text-white mb-2">
              Partner With WCE Hackathon
            </h4>
            <p className="font-mono text-xs text-[#8E89AA] uppercase tracking-wider">
              Connect your brand and developer tools with 500+ top engineering candidates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventData.sponsorshipTiers.map((tier, i) => (
              <Reveal key={tier.tier} delay={i * 0.08} y={20}>
                <div className="rounded-2xl border border-white/10 bg-[#0e0c1f]/70 p-7 h-full flex flex-col justify-between hover:border-[#66E8C3]/40 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[#66E8C3]">
                        {tier.badge}
                      </span>
                      <span className="text-xs font-mono text-[#8E89AA]">{tier.status}</span>
                    </div>

                    <h5 className="font-display font-bold text-xl text-white mb-4">
                      {tier.tier}
                    </h5>

                    <ul className="space-y-3 mb-6">
                      {tier.perks.map((perk, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-[#B9B4CA]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#66E8C3] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`mailto:${eventData.contactEmail}?subject=Sponsorship%20Inquiry%20-%20${encodeURIComponent(tier.tier)}`}
                    className="pt-4 border-t border-white/10 font-mono text-xs text-[#66E8C3] hover:underline flex items-center justify-between"
                  >
                    <span>Request Prospectus</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}