import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MessageSquare, X, Send, PhoneCall, ChevronUp } from 'lucide-react';

const quickQuestions = [
  'Assalam-o-Alaikum, I want to book a consultation with Dr. Javed Iqbal.',
  'What are the clinic opening hours in Sharqpur Sharif?',
  'How does online video consultation work?',
  'Do you treat chronic stomach and skin conditions?',
];

export const QuickWhatsAppFab: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = (msg: string) => {
    window.open(
      `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`,
      '_blank',
      'noopener,noreferrer'
    );
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-3xl glass shadow-2xl border border-white/80 overflow-hidden animate-fadeIn text-slate-800">
          <div className="glass-emerald p-4 text-white flex items-center justify-between border-b border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white text-emerald-800 font-extrabold flex items-center justify-center text-sm shadow-md border border-white/80">
                UHC
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight font-serif-heading">
                  Dr. Javed Iqbal Clinic
                </h4>
                <p className="text-[11px] text-emerald-100 font-medium">
                  WhatsApp Support • +92 301 6076402
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-emerald-100 hover:text-white hover:bg-white/20 transition-colors"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 space-y-3 glass-subtle">
            <div className="p-3 rounded-2xl glass border border-white/80 text-xs text-slate-800 leading-relaxed shadow-xs">
              👋 Assalam-o-Alaikum! Welcome to <strong>Unique Homeo Care Center</strong>. How can Dr. Javed Iqbal help you today?
            </div>

            <div className="space-y-2">
              <p className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                Select a Quick Question:
              </p>
              {quickQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSend(q)}
                  className="w-full text-left p-2.5 rounded-xl glass-subtle hover:bg-white/80 border border-white/70 text-xs text-slate-800 font-medium transition-all flex items-center justify-between group shadow-xs"
                >
                  <span className="line-clamp-2">{q}</span>
                  <Send className="w-3.5 h-3.5 text-emerald-700 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </button>
              ))}
            </div>
          </div>

          <div className="p-3 glass-subtle border-t border-white/60 flex items-center justify-between text-xs">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="text-slate-700 hover:text-emerald-900 font-bold flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-700" />
              <span>Call +92 301 6076402</span>
            </a>
            <span className="text-[10px] text-emerald-900 font-bold glass-subtle px-2 py-0.5 rounded-full border border-white/80">
              Sharqpur Sharif
            </span>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen((open) => !open)}
        className="px-4.5 py-3.5 rounded-full glass-emerald hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-2xl hover:scale-105 transition-all flex items-center gap-2 border-2 border-white/80"
        aria-label="Open WhatsApp Chat"
        aria-expanded={isOpen}
        id="whatsapp-fab-button"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline font-bold">Chat on WhatsApp</span>
      </button>
    </div>
  );
};
