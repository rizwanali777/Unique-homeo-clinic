import React from 'react';
import { 
  CalendarCheck, 
  FileSearch, 
  Pill, 
  HeartPulse, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

interface TreatmentProcessSectionProps {
  onOpenBooking: () => void;
}

export const TreatmentProcessSection: React.FC<TreatmentProcessSectionProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      number: '01',
      title: 'Book Appointment',
      subtitle: 'Online or In-Clinic',
      description: 'Choose your convenient mode: In-person visit at Sharqpur Sharif or WhatsApp / Video consultation from anywhere in Pakistan or abroad.',
      icon: <CalendarCheck className="w-7 h-7 text-emerald-800" />,
      detail: 'Instant slot selection & confirmation',
    },
    {
      number: '02',
      title: 'Detailed Diagnosis',
      subtitle: '360° Case-Taking',
      description: 'Dr. Javed Iqbal conducts an in-depth clinical consultation evaluating your physical symptoms, mental stressors, medical history, and modalities.',
      icon: <FileSearch className="w-7 h-7 text-emerald-800" />,
      detail: 'Personalized constitutional analysis',
    },
    {
      number: '03',
      title: 'Personalized Medicine',
      subtitle: 'Pure Homeopathic Potencies',
      description: 'Custom-dispensed natural homeopathic remedies matched specifically to your body constitution and disease stage.',
      icon: <Pill className="w-7 h-7 text-emerald-800" />,
      detail: '100% non-toxic & zero side-effects',
    },
    {
      number: '04',
      title: 'Complete Recovery',
      subtitle: 'Follow-Up & Wellness',
      description: 'Continuous monitoring until complete symptom resolution and vitality restoration, preventing future recurrence.',
      icon: <HeartPulse className="w-7 h-7 text-emerald-800" />,
      detail: 'Long-term health monitoring',
    },
  ];

  return (
    <section id="treatment-process" className="py-16 lg:py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-subtle text-emerald-900 text-xs font-bold uppercase tracking-wider border border-white/60 shadow-xs">
            <Sparkles className="w-4 h-4 text-emerald-700" />
            <span>Our Systematic Approach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif-heading">
            4-Step Journey to Complete Natural Recovery
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Our evidence-informed homeopathic methodology guarantees structured diagnosis, individualized remedy selection, and persistent follow-up.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col justify-between">
              
              <div className="glass rounded-3xl p-6 hover:bg-white/70 transition-all duration-300 relative group h-full flex flex-col justify-between shadow-xs hover:shadow-xl">
                
                {/* Step Number Pill */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center shadow-xs border border-white/80 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                      {step.icon}
                    </div>
                    <span className="text-2xl font-extrabold text-emerald-800/40 group-hover:text-emerald-800 transition-colors font-serif-heading">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-emerald-900 transition-colors font-serif-heading">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-800 mb-3">
                    {step.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/60 flex items-center gap-1.5 text-xs font-semibold text-emerald-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{step.detail}</span>
                </div>

              </div>

              {/* Connecting Desktop Arrow */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2 z-10 text-emerald-600/70">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}

            </div>
          ))}

        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 p-8 rounded-3xl glass-emerald text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl border border-white/30">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-serif-heading">
              Ready to Start Your Natural Recovery?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100">
              Consult Dr. Javed Iqbal today for personalized homeopathic care.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3.5 rounded-2xl bg-white text-emerald-950 hover:bg-emerald-50 font-bold text-sm shadow-xl transition-all shrink-0 flex items-center gap-2"
          >
            <span>Begin Step 1: Book Consultation</span>
            <ArrowRight className="w-4 h-4 text-emerald-800" />
          </button>
        </div>

      </div>
    </section>
  );
};
