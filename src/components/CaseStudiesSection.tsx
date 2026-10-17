import React, { useState } from 'react';
import { CASE_STUDIES_LIST } from '../data/clinicData';
import { CaseStudyItem } from '../types';
import { 
  FileText, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  Info, 
  Calendar, 
  ShieldCheck,
  User
} from 'lucide-react';

interface CaseStudiesSectionProps {
  onOpenBooking: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenBooking }) => {
  const [selectedCase, setSelectedCase] = useState<CaseStudyItem | null>(null);

  return (
    <section id="cases" className="py-16 lg:py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-subtle text-emerald-900 text-xs font-bold uppercase tracking-wider border border-white/60 shadow-xs">
            <FileText className="w-4 h-4 text-emerald-700" />
            <span>Proven Clinical Success</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif-heading">
            Representative Case Studies & Recovery Timelines
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Real-world clinical examples illustrating how constitutional homeopathy achieves systematic recovery in chronic and stubborn conditions.
          </p>
          
          {/* Important Regulatory Disclaimer Tag */}
          <div className="inline-flex items-center gap-2 p-3 rounded-2xl glass-subtle border border-amber-300/80 text-amber-950 text-xs text-left max-w-2xl mx-auto mt-2">
            <Info className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>Note on Case Studies:</strong> Patient details are anonymized with initials to preserve patient privacy. Case studies illustrate typical clinical progress patterns; individual outcomes vary based on disease duration and health factors.
            </span>
          </div>
        </div>

        {/* Case Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES_LIST.map((caseItem) => (
            <div
              key={caseItem.id}
              className="glass rounded-3xl p-6 sm:p-8 border border-white/70 hover:bg-white/70 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-white/60">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-700 text-white font-extrabold flex items-center justify-center text-lg shadow-md border border-white/80">
                      {caseItem.initials}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900">
                          Patient {caseItem.initials}
                        </span>
                        <span className="text-xs text-slate-600 font-medium">
                          ({caseItem.ageGender})
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-emerald-800">
                        {caseItem.condition}
                      </span>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-emerald-100/90 text-emerald-950 text-xs font-bold border border-white/80 shrink-0 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{caseItem.status}</span>
                  </span>
                </div>

                {/* Duration Badge */}
                <div className="flex items-center gap-2 text-xs text-slate-600 font-medium mb-4">
                  <Clock className="w-4 h-4 text-emerald-700" />
                  <span>Treatment Duration: <strong className="text-slate-900">{caseItem.duration}</strong></span>
                </div>

                {/* Before vs After Comparison Box */}
                <div className="space-y-3 mb-6">
                  <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-200/80 text-xs text-slate-800">
                    <span className="font-bold text-rose-950 block mb-1">
                      Initial Complaint & Symptoms:
                    </span>
                    <p>{caseItem.initialSymptoms}</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-emerald-100/60 border border-white/80 text-xs text-slate-800">
                    <span className="font-bold text-emerald-950 block mb-1">
                      Treatment Outcome & Recovery:
                    </span>
                    <p>{caseItem.recoveryOutcome}</p>
                  </div>
                </div>

                {/* Progress Timeline Indicator */}
                <div className="space-y-1.5 mb-6">
                  <div className="flex justify-between text-xs font-semibold text-slate-700">
                    <span>Clinical Recovery Progress</span>
                    <span className="text-emerald-800 font-bold">100% Target Met</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-200/60 overflow-hidden p-0.5 border border-white/80">
                    <div className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 w-full" />
                  </div>
                </div>

              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-white/60 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-500">
                  Illustrative Clinical Case Study
                </span>
                <button
                  onClick={onOpenBooking}
                  className="px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs flex items-center gap-1.5 shadow-md"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Get Similar Treatment</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
