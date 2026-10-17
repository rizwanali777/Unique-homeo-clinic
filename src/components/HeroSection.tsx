import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import drJavedImg from '../assets/images/dr_javed_iqbal_1784755478656.jpg';
import {
  Calendar,
  Video,
  Phone,
  Award,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: (type?: 'online_video' | 'clinic_visit') => void;
  onOpenSymptomChecker: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onOpenSymptomChecker,
}) => {
  return (
    <section className="relative overflow-hidden bg-transparent text-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Subtle Mesh Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-900/70 to-emerald-950/85 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-dark text-white text-xs sm:text-sm font-semibold border border-red-500/40 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-red-400" />
              <span>Sharqpur Sharif's Leading Healthcare • <strong className="text-red-300">Unique Homeo Care Center</strong></span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] font-serif-heading">
              Natural Healing.<br />
              <span className="text-emerald-300 underline decoration-red-500/80 underline-offset-8">
                Complete Recovery.
              </span><br />
              Trusted Homeopathic Care.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-emerald-100/90 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Experience personalized, zero side-effect medical consultation at{' '}
              <strong className="text-white font-semibold">Unique Homeo Care Center</strong> under{' '}
              <strong className="text-white font-semibold">Dr. Javed Iqbal</strong> (General Physician,{' '}
              <span className="text-red-300 font-bold border-b border-red-400/50">15+ years experience</span>).
            </p>

            {/* Key Value Bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 max-w-xl mx-auto lg:mx-0 text-left text-xs sm:text-sm font-medium text-emerald-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Side-Effects</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Root-Cause Recovery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Online & In-Clinic</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={() => onOpenBooking('online_video')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-slate-900 hover:bg-emerald-50 text-sm sm:text-base font-bold shadow-xl transition-all flex items-center justify-center gap-2 group border-2 border-emerald-500"
                id="hero-book-online-btn"
              >
                <Video className="w-5 h-5 text-emerald-700" />
                <span>Book Online Consultation</span>
                <ArrowRight className="w-4 h-4 text-red-600 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onOpenBooking('clinic_visit')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white border border-white/30 text-sm sm:text-base font-bold shadow-lg transition-all flex items-center justify-center gap-2"
                id="hero-book-clinic-btn"
              >
                <Calendar className="w-5 h-5 text-white" />
                <span>Book Clinic Appointment</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl glass-dark hover:bg-white/20 text-white border border-white/20 text-sm sm:text-base font-bold transition-all flex items-center justify-center gap-2"
                id="hero-call-now-btn"
              >
                <Phone className="w-5 h-5 text-red-400" />
                <span>Call Direct</span>
              </a>
            </div>

            {/* Symptom Checker Trigger Link */}
            <div className="pt-2">
              <button
                onClick={onOpenSymptomChecker}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-200 hover:text-white transition-colors underline underline-offset-4"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Unsure about your condition? Try our 1-Minute Symptom Guide</span>
              </button>
            </div>

            {/* Location Tag */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-emerald-200/90">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Location: Near Malkana Gate Sharqpur Sharif, Punjab, Pakistan</span>
            </div>

          </div>

          {/* Right Visual Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Backing Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/30 via-red-500/20 to-teal-400/20 rounded-3xl blur-2xl pointer-events-none" />

              {/* Main Photo Card - Dr. Javed Iqbal */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/40 shadow-2xl bg-gradient-to-b from-slate-900/90 to-emerald-950/95 glass-dark p-3">
                <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-emerald-950/40">
                  <img
                    src={drJavedImg}
                    alt="Dr. Javed Iqbal - General Physician & Homeopathy Specialist at Unique Homeo Care Center"
                    width={640}
                    height={800}
                    decoding="async"
                    fetchPriority="high"
                    className="w-full h-[360px] sm:h-[420px] object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-red-600/90 text-white text-xs font-bold border border-white/30 shadow-md flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-white" />
                      <span>15+ Yrs Exp</span>
                    </span>
                    <span className="px-3 py-1 rounded-full glass-dark text-emerald-200 text-xs font-bold border border-emerald-400/40 shadow-md flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Verified Doctor</span>
                    </span>
                  </div>

                  {/* Doctor Info Overlay Box at Bottom */}
                  <div className="absolute bottom-3 left-3 right-3 p-4 rounded-xl glass border border-white/80 shadow-xl text-slate-900">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h2 className="text-lg font-extrabold text-slate-900 font-serif-heading">
                            Dr. Javed Iqbal
                          </h2>
                          <span className="p-0.5 rounded-full bg-emerald-700 text-white">
                            <CheckCircle2 className="w-4 h-4" />
                          </span>
                        </div>
                        <p className="text-xs font-bold text-emerald-900">
                          General Physician & Homeopathy Specialist
                        </p>
                      </div>
                      <span className="text-[10px] px-2.5 py-1 rounded-full bg-red-600 text-white font-extrabold tracking-wide uppercase shadow-xs shrink-0">
                        Lead Doctor
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-700 font-medium mt-1">
                      Unique Homeo Care Center • Sharqpur Sharif
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Key Stats Ribbon */}
        <div className="mt-14 pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {CLINIC_INFO.stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-2xl glass-dark border border-white/20 shadow-xs">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-300 tracking-tight font-serif-heading">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-emerald-100 font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
