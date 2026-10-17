import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { PageView } from '../types';
import {
  Stethoscope,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  ChevronRight,
  Heart,
  ShieldCheck,
} from 'lucide-react';

interface FooterProps {
  setActiveView: (view: PageView) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveView, onOpenBooking }) => {
  return (
    <footer className="mt-12 glass-dark text-slate-200 pt-16 pb-8 border-t border-white/20 rounded-t-3xl relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 via-emerald-700 to-red-600 text-white flex items-center justify-center shadow-md border border-white/20">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight font-serif-heading">
                  UNIQUE
                </span>
                <span className="text-xs ml-1.5 px-2.5 py-0.5 rounded-full bg-red-600 text-white font-bold shadow-xs">
                  Homeo Care Center
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Providing authentic, non-toxic homeopathic diagnosis and treatment focused on complete, long-term recovery under Dr. Javed Iqbal (General Physician & Homeopathy Specialist, 15+ Yrs Exp).
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md transition-colors border border-white/20"
              >
                Book Appointment
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-serif-heading">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    setActiveView('home');
                    window.scrollTo(0, 0);
                  }}
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1 text-slate-300"
                >
                  <ChevronRight className="w-3 h-3 text-emerald-400" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveView('services');
                    window.scrollTo(0, 0);
                  }}
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1 text-slate-300"
                >
                  <ChevronRight className="w-3 h-3 text-emerald-400" />
                  <span>Homeopathic Services</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveView('about');
                    window.scrollTo(0, 0);
                  }}
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1 text-slate-300"
                >
                  <ChevronRight className="w-3 h-3 text-emerald-400" />
                  <span>Dr. Javed Iqbal Profile</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveView('cases');
                    window.scrollTo(0, 0);
                  }}
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1 text-slate-300"
                >
                  <ChevronRight className="w-3 h-3 text-emerald-400" />
                  <span>Case Studies</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveView('contact');
                    window.scrollTo(0, 0);
                  }}
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1 text-slate-300"
                >
                  <ChevronRight className="w-3 h-3 text-emerald-400" />
                  <span>Clinic Address & Map</span>
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-serif-heading">
              Contact Sharqpur Clinic
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Near Malkana Gate Sharqpur Sharif, Punjab, Pakistan</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="hover:text-emerald-300 font-bold">
                  {CLINIC_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent('Assalam-o-Alaikum Dr. Javed Iqbal, I would like to inquire about a consultation.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 font-bold"
                >
                  WhatsApp Direct Chat
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-serif-heading">
              Clinic Working Hours
            </h3>
            <div className="text-xs space-y-1.5 text-slate-300">
              <div className="flex items-center gap-1.5 text-emerald-300 font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>Monday – Saturday:</span>
              </div>
              <p>Morning: 9:00 AM – 1:00 PM</p>
              <p>Evening: 5:00 PM – 9:00 PM</p>
              <div className="pt-1 text-emerald-300 font-semibold">Sunday:</div>
              <p>10:00 AM – 2:00 PM (By Appointment)</p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 text-[11px] text-slate-400 space-y-2">
          <p className="font-semibold text-slate-300">Search Tags:</p>
          <p className="leading-relaxed">
            Unique Homeo Care Center Sharqpur Sharif • Dr Javed Iqbal Homeopath • General Physician Sharqpur • Online Homeopathy Consultation Pakistan • Natural Homeopathic Treatment Punjab • Chronic Disease Recovery • Safe Homeopathic Medicine
          </p>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
          <p className="max-w-2xl text-[11px] leading-relaxed">
            <strong>Medical Disclaimer:</strong> Information provided on this website is for educational and consultation inquiry purposes. Homeopathic treatment aims for constitutional holistic healing; individual recovery timelines vary depending on disease duration.
          </p>
          <p className="shrink-0">
            © {new Date().getFullYear()} Unique Homeo Care Center. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
