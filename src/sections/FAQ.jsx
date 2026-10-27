import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { eventData } from '../data/event';
import { SectionHeading } from '../components/SectionTag';
import { Reveal } from '../components/Reveal';
import { EASE_OUT_EXPO } from '../lib/easing';
import { ChevronDown, HelpCircle, Search, Mail, Phone } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Questions' },
  { id: 'general', label: 'General' },
  { id: 'tracks', label: 'Tracks' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'fees', label: 'Fees & Rules' },
  { id: 'logistics', label: 'Logistics' },
];

function FaqItem({ item, index, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const contentId = `faq-c-${index}`;
  const headerId = `faq-h-${index}`;

  return (
    <div
      className={`relative rounded-xl border transition-all duration-300 overflow-hidden ${
        open
          ? 'border-[#66E8C3]/40 bg-[#16122d]/85 shadow-[0_0_20px_rgba(102,232,195,0.08)]'
          : 'border-white/10 bg-[#0e0c1f]/60 hover:border-white/20'
      }`}
    >
      <h3>
        <button
          id={headerId}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={contentId}
          className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
        >
          <div className="flex items-center gap-3.5">
            <HelpCircle
              className={`w-5 h-5 shrink-0 transition-colors duration-300 ${
                open ? 'text-[#66E8C3]' : 'text-[#8E89AA]'
              }`}
            />
            <span
              className={`font-display font-semibold text-base sm:text-lg transition-colors duration-300 ${
                open ? 'text-[#66E8C3]' : 'text-white'
              }`}
            >
              {item.question}
            </span>
          </div>
          <ChevronDown
            className={`w-5 h-5 shrink-0 text-[#8E89AA] transition-transform duration-300 ${
              open ? 'rotate-180 text-[#66E8C3]' : ''
            }`}
          />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={contentId}
            role="region"
            aria-labelledby={headerId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
          >
            <div className="px-5 sm:px-6 pb-6 text-sm text-[#B9B4CA] leading-relaxed border-t border-white/5 pt-4">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return eventData.faqs.filter((f) => {
      const matchesCategory = category === 'all' || f.category === category;
      const matchesSearch =
        search.trim() === '' ||
        f.question.toLowerCase().includes(search.toLowerCase()) ||
        f.answer.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="relative section-pad overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(116,69,166,0.08),transparent_60%)]"
      />

      <div className="container-custom relative z-10">
        <SectionHeading
          index="SEC // 09"
          kicker="Knowledge Base"
          title="FREQUENTLY ASKED"
          accent="QUESTIONS."
          description="Everything you need to know about eligibility, tracks, offline rules, and logistics."
        />

        {/* Search and Category Filters */}
        <Reveal delay={0.08}>
          <div className="my-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full font-mono text-xs tracking-wider uppercase transition-all ${
                    category === cat.id
                      ? 'bg-[#66E8C3]/20 border border-[#66E8C3]/50 text-[#66E8C3] font-semibold'
                      : 'bg-white/[0.03] border border-white/10 text-[#8E89AA] hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#8E89AA] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search questions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs font-mono placeholder:text-[#8E89AA] outline-none focus:border-[#66E8C3]/50 transition-colors"
              />
            </div>
          </div>
        </Reveal>

        {/* FAQ Accordion List */}
        <div className="space-y-3 max-w-4xl mx-auto">
          {filtered.length > 0 ? (
            filtered.map((item, i) => (
              <FaqItem
                key={item.question}
                item={item}
                index={i}
                defaultOpen={i === 0 && search === '' && category === 'all'}
              />
            ))
          ) : (
            <div className="text-center py-12 rounded-xl border border-white/10 bg-white/[0.02]">
              <p className="font-mono text-sm text-[#8E89AA]">
                No questions found matching your search.
              </p>
            </div>
          )}
        </div>

        {/* Direct Contact Help Banner */}
        <Reveal delay={0.2}>
          <div className="mt-14 max-w-4xl mx-auto rounded-2xl border border-white/10 bg-[#0e0c1f]/80 p-6 sm:p-8 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-display font-bold text-xl text-white mb-1">
                Still have unanswered questions?
              </h4>
              <p className="text-xs text-[#8E89AA]">
                Our student coordinators and technical committee are available round the clock.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${eventData.contactEmail}`}
                className="btn btn-secondary !py-2.5 !px-4 text-xs font-mono"
              >
                <Mail className="w-3.5 h-3.5 text-[#66E8C3]" />
                <span>EMAIL US</span>
              </a>

              <a
                href="tel:+918459039945"
                className="btn btn-primary !py-2.5 !px-4 text-xs font-mono"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>CALL COORDINATOR</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}