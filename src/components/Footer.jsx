import { eventData } from '../data/event';
import { Reveal } from './Reveal';
import { ArrowUp, ExternalLink, MapPin, Mail, Phone, Globe, FileText, Sparkles } from 'lucide-react';

const socialIcons = {
  youtube: (
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  ),
  instagram: (
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
  ),
  twitter: (
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  ),
  linkedin: (
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  ),
};

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/10 bg-[#07060f] overflow-hidden pt-16 pb-12">
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(102,232,195,0.08),transparent_70%)]"
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <img src="/logos/wce-logo.svg" alt="WCE Sangli" className="h-9 object-contain" />
              <div className="w-px h-7 bg-white/20" />
              <img src="/logos/acm-logo.png" alt="WCE ACM SC" className="h-9 object-contain" />
              <div className="w-px h-7 bg-white/20" />
              <img src="/logos/hackathon-logo.png" alt="WCE Hackathon" className="h-9 object-contain" />
            </div>

            <div className="font-display font-extrabold text-2xl text-white tracking-tight">
              {eventData.name}
            </div>
            <div className="font-mono text-xs text-[#66E8C3] tracking-[0.2em] uppercase mt-1 mb-4">
              {eventData.tagline}
            </div>

            <p className="text-xs sm:text-sm text-[#8E89AA] leading-relaxed max-w-sm mb-6">
              24-hour national-level offline hackathon under the VISION symposium, hosted at Walchand College of Engineering, Sangli.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {Object.entries(eventData.socials).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WCE ACM ${key}`}
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#66E8C3]/50 hover:text-[#66E8C3] hover:bg-[#66E8C3]/5 transition-all text-[#B9B4CA]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    {socialIcons[key]}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <div className="font-mono text-xs uppercase tracking-widest text-white font-bold mb-4">
              Navigation
            </div>
            <ul className="space-y-2 text-xs font-mono">
              {eventData.navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-[#8E89AA] hover:text-[#66E8C3] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Leads Column */}
          <div className="lg:col-span-4">
            <div className="font-mono text-xs uppercase tracking-widest text-white font-bold mb-4">
              Official Contact
            </div>

            <div className="space-y-3 text-xs text-[#B9B4CA] mb-6">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#66E8C3] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Walchand College of Engineering, A/P Vishrambag, Sangli, Maharashtra 416415
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#66E8C3] shrink-0" />
                <a href={`mailto:${eventData.contactEmail}`} className="hover:text-white">
                  {eventData.contactEmail}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#66E8C3] shrink-0" />
                <a href="mailto:wcehackathon@walchandsangli.ac.in" className="hover:text-white">
                  wcehackathon@walchandsangli.ac.in
                </a>
              </div>
            </div>

            <div className="font-mono text-[11px] text-[#8E89AA] uppercase tracking-wider mb-2">
              Student Coordinators:
            </div>
            <div className="space-y-1.5 font-mono text-xs">
              {eventData.leads.map((lead) => (
                <div key={lead.name} className="flex items-center justify-between text-[#B9B4CA]">
                  <span>{lead.name} ({lead.role})</span>
                  <a href={`tel:${lead.phone.replace(/\s+/g, '')}`} className="text-[#66E8C3] hover:underline">
                    {lead.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#8E89AA]">
          <div>
            © {new Date().getFullYear()} WCE ACM Student Chapter. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href={eventData.unstopRegistrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#66E8C3] hover:underline flex items-center gap-1"
            >
              <span>Register on Unstop</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={scrollTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}