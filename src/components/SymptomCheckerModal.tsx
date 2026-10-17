import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/clinicData';
import { X, Sparkles, Calendar, CheckCircle2, ArrowRight, Stethoscope } from 'lucide-react';

interface SymptomCheckerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookService: (serviceName: string) => void;
}

export const SymptomCheckerModal: React.FC<SymptomCheckerModalProps> = ({
  isOpen,
  onClose,
  onBookService,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(SERVICES_LIST[0].id);

  const currentService =
    SERVICES_LIST.find((s) => s.id === selectedCategory) || SERVICES_LIST[0];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md animate-fadeIn">
      <div className="glass rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-white/80 text-slate-800">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/70 text-slate-700 hover:bg-white transition-colors"
          aria-label="Close symptom guide"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-bold text-amber-900 glass-subtle px-3.5 py-1 rounded-full w-fit mb-3 border border-amber-300/60 shadow-xs">
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>Interactive Homeopathic Triage Guide</span>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 font-serif-heading mb-1">
          1-Minute Symptom & Specialty Finder
        </h2>
        <p className="text-xs text-slate-600 mb-6">
          Select your primary health concern to explore Dr. Javed Iqbal's natural homeopathic care approach.
        </p>

        <div className="flex flex-wrap gap-2 mb-6 max-h-36 overflow-y-auto p-2.5 glass-subtle rounded-2xl border border-white/80">
          {SERVICES_LIST.map((srv) => (
            <button
              key={srv.id}
              onClick={() => setSelectedCategory(srv.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === srv.id
                  ? 'bg-emerald-800 text-white shadow-sm border border-white/80'
                  : 'glass-subtle text-slate-800 border border-white/70 hover:bg-white/80'
              }`}
            >
              {srv.title}
            </button>
          ))}
        </div>

        <div className="p-5 rounded-2xl glass-subtle border border-white/80 space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-bold text-slate-900 font-serif-heading">
              {currentService.title}
            </h3>
            <span className="text-xs font-bold text-emerald-950 glass-emerald px-3 py-1 rounded-full border border-white/80 text-white shrink-0">
              Natural Recovery Protocol
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
            {currentService.description}
          </p>

          <div>
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
              Homeopathic Target Approach:
            </span>
            <p className="text-xs sm:text-sm text-emerald-950 font-medium glass-subtle p-3 rounded-xl border border-white/80 leading-relaxed">
              {currentService.homeopathicApproach}
            </p>
          </div>

          <div>
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
              Common Key Symptoms Addressed:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {currentService.commonSymptoms.map((sym) => (
                <span
                  key={sym}
                  className="text-xs px-2.5 py-1 rounded-lg glass text-slate-800 font-semibold border border-white/80"
                >
                  ✓ {sym}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/60 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            Close Guide
          </button>

          <button
            onClick={() => {
              onClose();
              onBookService(currentService.title);
            }}
            className="px-6 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Consultation for {currentService.title}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
