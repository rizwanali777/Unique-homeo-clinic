import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import drJavedImg from '../assets/images/dr_javed_iqbal_1784755478656.jpg';
import { 
  Award, 
  CheckCircle2, 
  Stethoscope, 
  Heart, 
  ShieldCheck, 
  UserCheck, 
  Calendar,
  Sparkles,
  Phone
} from 'lucide-react';

interface DoctorProfileSectionProps {
  onOpenBooking: () => void;
}

export const DoctorProfileSection: React.FC<DoctorProfileSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="doctor-profile" className="py-16 lg:py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Doctor Portrait Image Container */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 opacity-20 blur-xl pointer-events-none" />

              <div className="relative glass rounded-3xl p-6 shadow-2xl border border-white/70 text-center">
                
                {/* Image Frame */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 mx-auto rounded-full overflow-hidden border-4 border-emerald-600 shadow-md">
                  <img
                    src={drJavedImg}
                    alt="Dr. Javed Iqbal - General Physician & Homeopathy Specialist"
                    width={512}
                    height={512}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Name & Title Card Below */}
                <div className="mt-5 space-y-1">
                  <h3 className="text-2xl font-bold text-slate-900 font-serif-heading">
                    Dr. Javed Iqbal
                  </h3>
                  <p className="text-sm font-bold text-emerald-800">
                    General Physician & Homeopathic Specialist
                  </p>
                  <p className="text-xs text-slate-600 font-medium">
                    15+ Years Clinical Practice • Sharqpur Sharif
                  </p>
                </div>

                {/* Doctor Badges */}
                <div className="mt-4 pt-4 border-t border-white/60 flex items-center justify-center gap-2.5 text-xs font-semibold text-slate-700 flex-wrap">
                  <span className="flex items-center gap-1 bg-emerald-100/90 text-emerald-950 px-3 py-1 rounded-full border border-emerald-300">
                    <Award className="w-3.5 h-3.5 text-emerald-700" />
                    15+ Yrs Exp
                  </span>
                  <span className="flex items-center gap-1 bg-red-100/90 text-red-950 px-3 py-1 rounded-full border border-red-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
                    General Physician
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Bio & Philosophy Text */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-subtle text-slate-900 text-xs font-bold uppercase tracking-wider border border-red-300 shadow-xs">
              <Stethoscope className="w-4 h-4 text-red-600" />
              <span>General Physician & Homeopathy Specialist</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif-heading">
              Dedicated to Natural Healing at <span className="text-emerald-800">Unique Homeo Care Center</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Dr. Javed Iqbal is a highly experienced <strong className="text-slate-900">General Physician and Homeopathy Specialist</strong> with over 15 years of dedicated clinical practice. Operating at <strong className="text-emerald-800">Unique Homeo Care Center</strong> near Malkana Gate in Sharqpur Sharif, Dr. Javed Iqbal has treated thousands of patients suffering from acute and chronic medical conditions.
            </p>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Believing firmly that true medicine should heal the person as a whole rather than merely masking physical symptoms, Dr. Javed combines deep clinical knowledge with empathy and strict medical ethics.
            </p>

            {/* Core Values / Qualifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-2xl glass border border-white/70 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">General Physician Care</h4>
                  <p className="text-xs text-slate-600">Comprehensive medical evaluation & clinical diagnostic protocols.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl glass border border-white/70 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">15+ Years Clinical Expertise</h4>
                  <p className="text-xs text-slate-600">Thousands of successfully managed chronic & acute cases.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl glass border border-white/70 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Personalized Treatment Plans</h4>
                  <p className="text-xs text-slate-600">Remedies selected to match your unique constitutional makeup.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl glass border border-white/70 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Strict Ethical Standards</h4>
                  <p className="text-xs text-slate-600">Transparent guidance with no unrealistic or exaggerated claims.</p>
                </div>
              </div>
            </div>

            {/* Doctor's Quote Block */}
            <div className="p-5 rounded-3xl glass-emerald text-white space-y-2 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                <Sparkles className="w-4 h-4" />
                <span>Doctor's Healing Philosophy</span>
              </div>
              <blockquote className="text-sm sm:text-base italic text-emerald-50 leading-relaxed">
                "Our goal is not temporary suppression of pain, but stimulating the body's natural vital force to achieve complete, lasting health and vitality."
              </blockquote>
              <p className="text-xs font-semibold text-emerald-200 text-right">
                — Dr. Javed Iqbal
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm shadow-lg shadow-emerald-900/20 transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Consult Dr. Javed Iqbal</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="px-5 py-3.5 rounded-xl glass border border-white/80 text-slate-800 font-bold text-sm hover:bg-white/80 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>Call {CLINIC_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
