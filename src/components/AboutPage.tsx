import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import drJavedImg from '../assets/images/dr_javed_iqbal_1784755478656.jpg';
import { 
  ShieldCheck, 
  Award, 
  Heart, 
  Target, 
  CheckCircle2, 
  Users, 
  MapPin, 
  Calendar,
  Sparkles,
  BookOpen
} from 'lucide-react';

interface AboutPageProps {
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="py-12 lg:py-20 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Hero */}
        <div className="glass-dark rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-white/20">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-600/90 text-white text-xs font-bold uppercase tracking-wider border border-white/30">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>Authentic Healthcare Heritage</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-heading tracking-tight">
              About Unique Homeo Care Center
            </h1>
            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal">
              Serving Sharqpur Sharif, Punjab with dedication for over 15 years. Dr. Javed Iqbal combines general medical diagnosis with classic constitutional homeopathy at <strong className="text-white">Unique Homeo Care Center</strong> to restore vitality and complete health.
            </p>
          </div>
        </div>

        {/* Doctor Story & Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center glass rounded-3xl p-8 sm:p-12 border border-white/80 shadow-md">
          
          <div className="lg:col-span-5 text-center">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 mx-auto rounded-full overflow-hidden border-4 border-emerald-600 shadow-xl mb-6">
              <img
                src={drJavedImg}
                alt="Dr. Javed Iqbal - General Physician"
                width={640}
                height={800}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 font-serif-heading">
              Dr. Javed Iqbal
            </h2>
            <p className="text-sm font-bold text-emerald-900">
              General Physician & Homeopathy Specialist
            </p>
            <p className="text-xs text-slate-600 mt-1">
              15+ Years Clinical Practice • Sharqpur Sharif
            </p>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif-heading">
              Our Journey & Healthcare Philosophy
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Founded near Malkana Gate in Sharqpur Sharif, <strong className="text-emerald-900">Unique Homeo Care Center</strong> was established with a singular mission: to provide authentic, evidence-informed natural medical care that addresses the whole person.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Dr. Javed Iqbal began his clinical practice over 15 years ago after seeing countless patients struggle with temporary symptom suppression and drug dependency. By applying individual constitutional homeopathy, Dr. Javed Iqbal has helped thousands achieve long-term, natural recovery.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl glass-subtle border border-white/80 shadow-xs">
                <div className="text-2xl font-extrabold text-emerald-900 font-serif-heading">15+</div>
                <div className="text-xs text-slate-700 font-medium">Years Experience</div>
              </div>
              <div className="p-4 rounded-2xl glass-subtle border border-white/80 shadow-xs">
                <div className="text-2xl font-extrabold text-emerald-900 font-serif-heading">12,000+</div>
                <div className="text-xs text-slate-700 font-medium">Treated Patients</div>
              </div>
            </div>
          </div>

        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="glass p-8 rounded-3xl border border-white/80 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl glass-emerald text-white flex items-center justify-center border border-white/30">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-serif-heading">Our Mission</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              To deliver compassionate, highly personalized, and authentic homeopathic healthcare that eliminates the root cause of chronic and acute illness without toxic side effects, making natural recovery accessible to every family.
            </p>
          </div>

          <div className="glass p-8 rounded-3xl border border-white/80 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl glass-emerald text-white flex items-center justify-center border border-white/30">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-serif-heading">Our Vision</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              To be the premier trusted landmark for homeopathic healthcare in Punjab, Pakistan, recognized for clinical excellence, ethical medical practice, and inspiring holistic lifestyle wellness.
            </p>
          </div>

        </div>

        {/* Core Values */}
        <div className="glass rounded-3xl p-8 sm:p-12 border border-white/80 space-y-8 shadow-md">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif-heading">
              Our Core Principles & Values
            </h3>
            <p className="text-sm text-slate-700">
              Every prescription and consultation at Unique Homeo Care Center is guided by four foundational pillars:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl glass-subtle border border-white/70 space-y-2 shadow-xs">
              <Heart className="w-8 h-8 text-emerald-800" />
              <h4 className="text-base font-bold text-slate-900 font-serif-heading">Patient-First Care</h4>
              <p className="text-xs text-slate-700">Empathetic listening and unhurried consultations that respect patient concerns.</p>
            </div>

            <div className="p-5 rounded-2xl glass-subtle border border-white/70 space-y-2 shadow-xs">
              <Sparkles className="w-8 h-8 text-emerald-800" />
              <h4 className="text-base font-bold text-slate-900 font-serif-heading">Natural Healing</h4>
              <p className="text-xs text-slate-700">Pure homeopathic potencies that stimulate the innate immune system.</p>
            </div>

            <div className="p-5 rounded-2xl glass-subtle border border-white/70 space-y-2 shadow-xs">
              <Award className="w-8 h-8 text-emerald-800" />
              <h4 className="text-base font-bold text-slate-900 font-serif-heading">Ethical Practice</h4>
              <p className="text-xs text-slate-700">Honest prognostic guidance without false medical claims or unrealistic guarantees.</p>
            </div>

            <div className="p-5 rounded-2xl glass-subtle border border-white/70 space-y-2 shadow-xs">
              <Users className="w-8 h-8 text-emerald-800" />
              <h4 className="text-base font-bold text-slate-900 font-serif-heading">Long-term Wellness</h4>
              <p className="text-xs text-slate-700">Preventative lifestyle and dietary guidance alongside constitutional medicine.</p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 rounded-3xl glass-dark text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/20">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-serif-heading">
              Consult Dr. Javed Iqbal Today
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200">
              Visit our clinic near Malkana Gate Sharqpur Sharif or book an online video consultation.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-xl bg-white text-emerald-950 font-bold text-xs sm:text-sm shadow-md hover:bg-emerald-50 transition-colors shrink-0 border border-white/90"
          >
            Book Appointment Now
          </button>
        </div>

      </div>
    </div>
  );
};
