import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { eventData } from '../data/event';
import { Reveal } from '../components/Reveal';
import { ArrowUpRight, CheckCircle2, Send, Mail, User, Building2, Sparkles, FileText, Phone } from 'lucide-react';

const initialForm = { name: '', email: '', college: '', track: 'novice', phone: '' };

export function FinalCTA() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email address';
    if (!form.college.trim()) errs.college = 'College/Institution name is required';
    return errs;
  };

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    try {
      localStorage.setItem(
        'wce_hackathon_interest',
        JSON.stringify({ ...form, timestamp: new Date().toISOString() })
      );
    } catch {
      // ignore local storage restrictions
    }
  };

  return (
    <section
      id="register"
      aria-label="Register and priority access"
      className="relative py-28 sm:py-36 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(116,69,166,0.18),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[radial-gradient(circle,rgba(102,232,195,0.12),transparent_70%)] blur-3xl"
      />

      <div className="container-custom relative z-10 max-w-4xl mx-auto">
        <Reveal className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#66E8C3]/10 border border-[#66E8C3]/30 text-[#66E8C3] font-mono text-xs tracking-widest uppercase mb-6 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            OFFICIAL REGISTRATION ARENA
          </div>

          <h2 className="font-display font-black uppercase tracking-tight text-4xl sm:text-5xl lg:text-6xl text-white">
            Your code can
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#66E8C3] via-[#55DCCB] to-[#7445A6]">
              define the future.
            </span>
          </h2>

          <p className="mt-5 text-[#B9B4CA] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Register directly on Unstop for Round 1 free submission or register your team for priority mentor alerts.
          </p>

          {/* Big Unstop Primary CTA */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={eventData.unstopRegistrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary !py-4 !px-8 text-base font-bold shadow-[0_0_35px_rgba(102,232,195,0.4)] hover:shadow-[0_0_45px_rgba(102,232,195,0.6)]"
            >
              <Sparkles className="w-5 h-5" />
              <span>OFFICIAL REGISTRATION ON UNSTOP</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>

            <a
              href={eventData.problemStatementsDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary !py-4 !px-6 text-sm font-semibold"
            >
              <FileText className="w-4 h-4 text-[#66E8C3]" />
              <span>PROBLEM STATEMENTS PDF</span>
            </a>
          </div>
        </Reveal>

        {/* Priority Updates / Pre-Registration Box */}
        <Reveal delay={0.15}>
          <div className="mt-14 rounded-2xl border border-white/10 bg-[#0e0c1f]/85 p-8 sm:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
              <div>
                <span className="font-mono text-xs text-[#66E8C3] tracking-[0.2em] uppercase font-bold block mb-1">
                  // INSTANT PRIORITY ALERTS
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  Get Problem Statement Updates & Mentor Briefs
                </h3>
              </div>

              <span className="self-start sm:self-auto font-mono text-xs px-3 py-1 rounded-full bg-[#66E8C3]/10 border border-[#66E8C3]/30 text-[#66E8C3]">
                Free Updates
              </span>
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#66E8C3]/15 border border-[#66E8C3]/40 flex items-center justify-center text-[#66E8C3] mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-2xl text-white mb-2">
                    You're On The Priority List!
                  </h4>
                  <p className="text-sm text-[#B9B4CA] max-w-md mx-auto mb-6">
                    We've registered your interest. Make sure to complete your official team profile on Unstop.
                  </p>
                  <a
                    href={eventData.unstopRegistrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary !py-2.5 !px-5 text-xs font-semibold inline-flex items-center gap-2"
                  >
                    <span>Proceed To Unstop Registration</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-xs text-[#8E89AA] uppercase block mb-1.5">
                        Your Full Name
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-[#8E89AA] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          value={form.name}
                          onChange={update('name')}
                          placeholder="e.g. John Doe"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border text-white text-sm outline-none focus:border-[#66E8C3]/50 transition-colors ${
                            errors.name ? 'border-red-400' : 'border-white/10'
                          }`}
                        />
                      </div>
                      {errors.name && (
                        <p className="text-xs text-red-400 mt-1 font-mono">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="font-mono text-xs text-[#8E89AA] uppercase block mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-[#8E89AA] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="email"
                          value={form.email}
                          onChange={update('email')}
                          placeholder="e.g. developer@college.edu"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border text-white text-sm outline-none focus:border-[#66E8C3]/50 transition-colors ${
                            errors.email ? 'border-red-400' : 'border-white/10'
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1 font-mono">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-xs text-[#8E89AA] uppercase block mb-1.5">
                        College / Institution
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-[#8E89AA] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          value={form.college}
                          onChange={update('college')}
                          placeholder="e.g. Walchand College of Engineering"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border text-white text-sm outline-none focus:border-[#66E8C3]/50 transition-colors ${
                            errors.college ? 'border-red-400' : 'border-white/10'
                          }`}
                        />
                      </div>
                      {errors.college && (
                        <p className="text-xs text-red-400 mt-1 font-mono">{errors.college}</p>
                      )}
                    </div>

                    <div>
                      <label className="font-mono text-xs text-[#8E89AA] uppercase block mb-1.5">
                        Preferred Track
                      </label>
                      <select
                        value={form.track}
                        onChange={update('track')}
                        className="w-full px-4 py-3 rounded-xl bg-[#141226] border border-white/10 text-white text-sm outline-none focus:border-[#66E8C3]/50 transition-colors"
                      >
                        <option value="novice">Novice Track (1st & 2nd Year)</option>
                        <option value="expert">Expert Track (3rd & 4th Year+)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="btn btn-primary w-full justify-center !py-3.5 text-sm font-bold flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>SUBMIT PRIORITY REGISTRATION</span>
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}