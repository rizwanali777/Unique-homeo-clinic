import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { ConsultationType } from '../types';
import {
  Video,
  MessageSquare,
  Building2,
  RefreshCw,
  CheckCircle2,
  Calendar,
  Globe,
} from 'lucide-react';

interface OnlineConsultationSectionProps {
  onOpenBooking: (type?: ConsultationType) => void;
}

const modes: {
  id: ConsultationType;
  title: string;
  badge: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  ctaText: string;
  whatsappText: string;
}[] = [
    {
      id: 'online_video',
      title: 'Video Consultation',
      badge: 'Most Popular for Outstation',
      description: 'Face-to-face detailed online video session with Dr. Javed Iqbal from the comfort of your home.',
      features: ['In-depth case taking', 'Prescription PDF sent via WhatsApp', 'Medicine delivered via courier'],
      icon: <Video className="w-6 h-6 text-emerald-800" />,
      ctaText: 'Book Video Call',
      whatsappText: 'Assalam-o-Alaikum Dr. Javed Iqbal, I am interested in a Video Consultation.',
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp Consultation',
      badge: 'Quick & Convenient',
      description: 'Send voice notes, past lab reports, and symptom photos directly to Dr. Javed Iqbal.',
      features: ['Voice & chat communication', 'Report evaluation', 'Prescription dispatched'],
      icon: <MessageSquare className="w-6 h-6 text-emerald-800" />,
      ctaText: 'Start WhatsApp Chat',
      whatsappText: 'Assalam-o-Alaikum Dr. Javed Iqbal, I am interested in a WhatsApp Consultation.',
    },
    {
      id: 'clinic_visit',
      title: 'In-Clinic Visit',
      badge: 'Sharqpur Sharif Location',
      description: 'Direct physical consultation at Unique Homeo Care Center near Malkana Gate.',
      features: ['Physical diagnostic examination', 'On-the-spot medicine dispensing', 'Personalized guidance'],
      icon: <Building2 className="w-6 h-6 text-emerald-800" />,
      ctaText: 'Book Clinic Visit',
      whatsappText: 'Assalam-o-Alaikum Dr. Javed Iqbal, I am interested in an In-Clinic Visit.',
    },
    {
      id: 'follow_up',
      title: 'Follow-Up Consultation',
      badge: 'For Existing Patients',
      description: 'Evaluate treatment progress, adjust potencies, and refine your homeopathic recovery plan.',
      features: ['Progress review', 'Potency adjustment', 'Ongoing support'],
      icon: <RefreshCw className="w-6 h-6 text-emerald-800" />,
      ctaText: 'Book Follow-Up',
      whatsappText: 'Assalam-o-Alaikum Dr. Javed Iqbal, I am interested in a Follow-Up Consultation.',
    },
  ];

export const OnlineConsultationSection: React.FC<OnlineConsultationSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 lg:py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-subtle text-emerald-900 text-xs font-bold uppercase tracking-wider border border-white/60 shadow-xs">
            <Globe className="w-4 h-4 text-emerald-700" />
            <span>Healthcare Accessible Anywhere</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif-heading">
            Choose Your Preferred Consultation Mode
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Whether you are located in Sharqpur Sharif, Lahore, Sheikhupura, or abroad, Dr. Javed Iqbal is available to provide expert natural care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modes.map((mode) => (
            <div
              key={mode.id}
              className="p-6 rounded-3xl glass hover:bg-white/70 border border-white/70 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center shadow-xs border border-white/80 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                    {mode.icon}
                  </div>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-100/90 text-emerald-950 border border-white/80">
                    {mode.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-900 transition-colors font-serif-heading">
                  {mode.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                  {mode.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {mode.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={() => onOpenBooking(mode.id)}
                  className="w-full py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{mode.ctaText}</span>
                </button>

                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(mode.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl glass-subtle border border-white/80 text-emerald-950 hover:bg-white/80 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
