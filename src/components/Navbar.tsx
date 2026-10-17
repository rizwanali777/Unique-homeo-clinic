import React, { useState, useEffect } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { PageView } from '../types';
import {
  Phone,
  MapPin,
  Clock,
  Calendar,
  Menu,
  X,
  MessageSquare,
  ChevronRight,
  Stethoscope,
} from 'lucide-react';

interface NavbarProps {
  activeView: PageView;
  setActiveView: (view: PageView) => void;
  onOpenBooking: () => void;
}

const navItems: { label: string; view: PageView }[] = [
  { label: 'Home', view: 'home' },
  { label: 'Services & Care', view: 'services' },
  { label: 'Dr. Javed Iqbal', view: 'about' },
  { label: 'About Clinic', view: 'about' },
  { label: 'Case Studies', view: 'cases' },
  { label: 'Contact Us', view: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  setActiveView,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const next = window.scrollY > 30;
        setIsScrolled((prev) => (prev === next ? prev : next));
      });
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const handleNavClick = (view: PageView) => {
    setActiveView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-sm transition-all duration-300">
      <div className="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 sm:px-8 border-b border-emerald-900/50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-emerald-200">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Near Malkana Gate Sharqpur Sharif, Punjab</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-emerald-200 border-l border-emerald-800/80 pl-4">
              <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Mon-Sat: 9AM-1PM & 5PM-9PM</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent('Assalam-o-Alaikum Dr. Javed Iqbal, I would like to inquire about a consultation.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-300 hover:text-white transition-colors font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: {CLINIC_INFO.phone}</span>
            </a>
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="hidden sm:flex items-center gap-1.5 text-white font-semibold hover:text-emerald-300"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Call Direct</span>
            </a>
          </div>
        </div>
      </div>

      <nav
        className={`bg-white/75 backdrop-blur-md transition-all duration-300 border-b border-white/80 shadow-sm ${
          isScrolled ? 'py-3 shadow-md bg-white/85' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
            id="nav-logo-button"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-red-600 text-white flex items-center justify-center shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform border border-white/40">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight font-serif-heading">
                  UNIQUE
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-red-600 text-white font-bold shadow-xs">
                  Homeo Care Center
                </span>
              </div>
              <p className="text-[11px] text-slate-600 font-medium tracking-wide">
                Sharqpur Sharif • Dr. Javed Iqbal
              </p>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.view)}
                className={`text-sm font-semibold transition-colors py-1 relative ${
                  activeView === item.view
                    ? 'text-emerald-700 font-bold'
                    : 'text-slate-600 hover:text-emerald-600'
                }`}
              >
                {item.label}
                {activeView === item.view && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full" />
                )}
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="px-3.5 py-2.5 rounded-xl border border-red-200 bg-red-50/50 text-red-700 hover:bg-red-100 hover:border-red-300 text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs"
            >
              <Phone className="w-3.5 h-3.5 text-red-600" />
              <span>Direct Call</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="px-4 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 group border border-emerald-600/50"
              id="header-book-button"
            >
              <Calendar className="w-4 h-4 text-emerald-300 group-hover:scale-110 transition-transform" />
              <span>Book Appointment</span>
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="p-2 bg-emerald-700 text-white rounded-lg text-xs font-bold sm:hidden flex items-center gap-1"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-4 pb-6 mt-2 space-y-3 shadow-xl">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.view)}
                  className={`flex items-center justify-between p-3 rounded-xl text-left text-sm font-medium transition-colors ${
                    activeView === item.view
                      ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-emerald-700 text-white font-bold text-center text-sm shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation Now</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-800 font-semibold text-center text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call +92 301 6076402</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
