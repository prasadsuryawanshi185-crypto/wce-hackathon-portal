import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { eventData } from '../data/event';
import { SectionHeading } from '../components/SectionTag';
import { Reveal } from '../components/Reveal';
import { EASE_OUT_EXPO } from '../lib/easing';
import { ArrowUpRight, FileText, CheckCircle2, Sparkles, X, Layers, Download } from 'lucide-react';

const tracks = [
  {
    id: 'novice',
    name: 'Novice Track',
    code: 'TRACK 01',
    audience: '1st & 2nd Year Students',
    badge: 'BEGINNER FRIENDLY',
    description: 'Designed to inspire first-time hackers with mentor-guided domains spanning IoT, FinTech, EdTech, Health, and Sustainability.'
  },
  {
    id: 'expert',
    name: 'Expert Track',
    code: 'TRACK 02',
    audience: '3rd & 4th Year / Senior Hackers',
    badge: 'RESEARCH GRADE',
    description: 'High-caliber systems engineering tackling graph memory isolation, content-addressable MLOps versioning, and zero-hallucination RAG.'
  },
];

export function Challenges() {
  const [active, setActive] = useState('novice');
  const [selectedMission, setSelectedMission] = useState(null);

  const missions = eventData.domains.filter((d) => d.track === active);

  return (
    <section
      id="tracks"
      aria-label="Challenge domains and tracks"
      className="relative section-pad overflow-hidden"
    >
      <div className="container-custom relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <SectionHeading
              index="SEC // 03"
              kicker="Challenge Dossiers"
              title="DUAL CALIBRATED"
              accent="TRACKS."
              description="Engineered problem statements tailored for foundational developers and senior systems architects."
            />
          </div>

          {/* Drive Download Banner */}
          <div className="shrink-0">
            <a
              href={eventData.problemStatementsDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#66E8C3]/50 text-white font-mono text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_25px_rgba(102,232,195,0.2)]"
            >
              <FileText className="w-4 h-4 text-[#66E8C3]" />
              <span>OFFICIAL PROBLEM STATEMENTS (PDF)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#66E8C3]" />
            </a>
          </div>
        </div>

        {/* Track Selection Tabs */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mb-12">
            {tracks.map((t) => {
              const isActive = active === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  aria-pressed={isActive}
                  className={`group relative text-left p-6 sm:p-7 rounded-xl border transition-all duration-400 ${
                    isActive
                      ? 'border-[#66E8C3]/60 bg-[#16122d]/80 shadow-[0_0_30px_rgba(102,232,195,0.15)] ring-1 ring-[#66E8C3]/40'
                      : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-mono text-[11px] tracking-[0.2em] font-bold ${
                        isActive ? 'text-[#66E8C3]' : 'text-[#8E89AA]'
                      }`}
                    >
                      {t.code}
                    </span>
                    <span
                      className={`font-mono text-[10px] tracking-wider px-2.5 py-0.5 rounded-full border ${
                        isActive
                          ? 'border-[#66E8C3]/40 bg-[#66E8C3]/10 text-[#66E8C3]'
                          : 'border-white/10 bg-white/[0.03] text-[#8E89AA]'
                      }`}
                    >
                      {t.badge}
                    </span>
                  </div>

                  <div className="font-display font-bold text-2xl text-white mt-1">
                    {t.name}
                  </div>

                  <div className="font-mono text-xs text-[#B9B4CA] mt-1">
                    {t.audience}
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-[#8E89AA] leading-relaxed">
                    {t.description}
                  </p>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {missions.map((m, i) => (
              <article
                key={m.id}
                className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-[#0e0c1f]/80 p-6 sm:p-7 backdrop-blur-xl hover:border-[#66E8C3]/50 transition-all duration-400 hover:-translate-y-1 shadow-[0_4px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_35px_rgba(102,232,195,0.12)] overflow-hidden"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7445A6]/10 via-transparent to-[#66E8C3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

                <div className="relative z-10">
                  {/* Top Header: Image Illustration & Index */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    {m.image ? (
                      <div className="w-14 h-14 rounded-xl bg-white/[0.04] border border-white/10 p-2 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-[#66E8C3]/40 transition-all duration-300">
                        <img
                          src={m.image}
                          alt={m.title}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-[#66E8C3]/10 border border-[#66E8C3]/30 flex items-center justify-center text-[#66E8C3]">
                        <Layers className="w-5 h-5" />
                      </div>
                    )}

                    <span className="font-mono text-[10px] text-[#66E8C3] tracking-[0.2em] font-semibold bg-[#66E8C3]/10 border border-[#66E8C3]/30 px-2 py-0.5 rounded-full">
                      {active === 'novice' ? `NOV // 0${i + 1}` : `EXP // 0${i + 1}`}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-[#66E8C3] transition-colors leading-snug mb-2">
                    {m.title}
                  </h3>

                  <p className="font-mono text-[11px] text-[#8E89AA] tracking-wider mb-4 leading-relaxed">
                    {m.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#B9B4CA] leading-relaxed mb-6">
                    {m.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {m.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-[#8E89AA]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedMission(m)}
                    className="font-mono text-xs text-[#66E8C3] hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Dossier</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={m.driveLink || eventData.problemStatementsDriveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-[#8E89AA] hover:text-[#66E8C3] transition-colors"
                    title="Open problem statements on Google Drive"
                  >
                    <Download className="w-3 h-3" />
                    <span>PDF</span>
                  </a>
                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Detailed Mission Dossier Modal */}
      <AnimatePresence>
        {selectedMission && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/15 bg-[#120f26] p-6 sm:p-8 shadow-2xl text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMission(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-white/[0.05] border border-white/10 text-[#8E89AA] hover:text-white transition-colors"
                aria-label="Close dossier"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs text-[#66E8C3] tracking-[0.2em] font-bold">
                  {selectedMission.track === 'novice' ? 'NOVICE TRACK DOSSIER' : 'EXPERT TRACK DOSSIER'}
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
                {selectedMission.title}
              </h3>

              <p className="font-mono text-xs text-[#8E89AA] tracking-wider mb-6">
                {selectedMission.tagline}
              </p>

              <div className="space-y-6 text-sm text-[#B9B4CA]">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-white font-semibold mb-2">
                    Scope & Problem Overview
                  </h4>
                  <p className="leading-relaxed bg-black/30 p-4 rounded-xl border border-white/5">
                    {selectedMission.description}
                  </p>
                </div>

                {selectedMission.deliverables && (
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-white font-semibold mb-2">
                      Key Engineering Deliverables
                    </h4>
                    <ul className="space-y-2">
                      {selectedMission.deliverables.map((deliv, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#66E8C3] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedMission.sampleIdeas && (
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-white font-semibold mb-2">
                      Suggested Innovation Pathways
                    </h4>
                    <ul className="space-y-2">
                      {selectedMission.sampleIdeas.map((idea, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Sparkles className="w-4 h-4 text-[#66E8C3] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{idea}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-white font-semibold mb-2">
                    Core Technologies & Keywords
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMission.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={selectedMission.driveLink || eventData.problemStatementsDriveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary !py-2.5 !px-5 text-xs font-bold"
                >
                  <FileText className="w-3.5 h-3.5" />
                  DOWNLOAD OFFICIAL PS (PDF)
                </a>

                <button
                  onClick={() => setSelectedMission(null)}
                  className="px-4 py-2 font-mono text-xs text-[#8E89AA] hover:text-white"
                >
                  Close Dossier
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}