import React, { useMemo, useState } from 'react';
import { FAQS_LIST } from '../data/clinicData';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageSquare } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredFaqs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return FAQS_LIST;
    return FAQS_LIST.filter(
      (item) =>
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <section id="faqs" className="py-16 lg:py-24 bg-transparent relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-subtle text-emerald-900 text-xs font-bold uppercase tracking-wider border border-white/60 shadow-xs">
            <HelpCircle className="w-4 h-4 text-emerald-700" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif-heading">
            Got Questions About Homeopathy?
          </h2>
          <p className="text-base text-slate-700 leading-relaxed">
            Find clear, honest answers regarding homeopathic safety, treatment duration, and consultation booking with Dr. Javed Iqbal.
          </p>
        </div>

        {/* Search Input */}
        <div className="mb-8 relative max-w-lg mx-auto">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search questions (e.g., safety, online consultation, duration)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl glass-subtle border border-white/80 text-sm text-slate-800 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white/80 transition-all shadow-xs"
          />
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl glass border border-white/70 overflow-hidden transition-all duration-200 shadow-xs hover:bg-white/70"
              >
                <button
                  onClick={() => setOpenId(isOpen ? '' : faq.id)}
                  className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-emerald-900 transition-colors focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-serif-heading">
                    {faq.question}
                  </span>
                  <div className="p-1 rounded-full bg-emerald-100/80 text-emerald-800 shrink-0 border border-white/80">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-slate-800 leading-relaxed border-t border-white/60 glass-subtle">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <p className="text-center text-sm text-slate-600 py-6">
              No matching questions found. Feel free to contact us directly on WhatsApp!
            </p>
          )}
        </div>

      </div>
    </section>
  );
};
