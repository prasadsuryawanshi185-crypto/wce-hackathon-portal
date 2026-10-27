import { eventData } from '../data/event';
import { SectionHeading } from '../components/SectionTag';
import { Reveal } from '../components/Reveal';
import { MapPin, Navigation, Wifi, Coffee, Zap, Shield, Train, Bus, Plane, ExternalLink } from 'lucide-react';

const facilityIcons = [
  Wifi,
  Zap,
  Shield,
  Coffee,
  Navigation,
  MapPin
];

export function Venue() {
  const { venueDetails } = eventData;

  return (
    <section id="venue" aria-label="Venue and Location" className="relative section-pad overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/3 bottom-10 h-[450px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(102,232,195,0.08),transparent_70%)] blur-3xl"
      />

      <div className="container-custom relative z-10">
        <SectionHeading
          index="SEC // 08"
          kicker="Offline Arena"
          title="CAMPUS VENUE &"
          accent="FACILITIES."
          description="Hosted at the historic 90-acre campus of Walchand College of Engineering, Sangli."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Venue Info & Facilities */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-[#0e0c1f]/85 p-7 sm:p-9 backdrop-blur-xl">
                <div className="flex items-center gap-3 text-[#66E8C3] font-mono text-xs uppercase tracking-widest mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>AUTONOMOUS ENGINEERING CAMPUS · ESTD. 1947</span>
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
                  {venueDetails.name}
                </h3>
                <p className="text-sm text-[#B9B4CA] leading-relaxed mb-6">
                  {venueDetails.address}
                </p>

                <a
                  href={venueDetails.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary !py-2.5 !px-5 text-xs font-semibold inline-flex items-center gap-2"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>GET DIRECTIONS ON GOOGLE MAPS</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </Reveal>

            {/* Facilities Grid */}
            <Reveal delay={0.2}>
              <div className="rounded-2xl border border-white/10 bg-[#0e0c1f]/85 p-7 sm:p-9 backdrop-blur-xl">
                <h4 className="font-display font-bold text-xl text-white mb-4">
                  24-Hour Offline Facilities
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {venueDetails.facilities.map((fac, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5"
                    >
                      <div className="p-2 rounded-lg bg-[#66E8C3]/10 text-[#66E8C3] shrink-0">
                        <Zap className="w-4 h-4" />
                      </div>
                      <span className="text-xs text-[#B9B4CA] leading-relaxed">
                        {fac}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Transit Connectivity */}
            <Reveal delay={0.3}>
              <div className="rounded-2xl border border-white/10 bg-[#0e0c1f]/85 p-6 sm:p-7 backdrop-blur-xl">
                <h4 className="font-display font-bold text-lg text-white mb-3">
                  Transit & Connectivity
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {venueDetails.transit.map((tr) => (
                    <div key={tr.mode} className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                      <div className="font-mono text-[11px] text-[#66E8C3] uppercase font-bold mb-1">
                        {tr.mode}
                      </div>
                      <div className="text-[11px] text-[#8E89AA] leading-relaxed">
                        {tr.details}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-5 flex">
            <Reveal delay={0.2} className="w-full">
              <div className="w-full h-full min-h-[380px] lg:min-h-full rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative">
                <iframe
                  title="Walchand College of Engineering Location Map"
                  src="https://maps.google.com/maps?q=Walchand%20College%20of%20Engineering,%20Sangli&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 absolute inset-0 filter invert-[0.9] hue-rotate-[180deg] contrast-[1.1]"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
