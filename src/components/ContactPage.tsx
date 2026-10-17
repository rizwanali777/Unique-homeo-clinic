import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Building2, 
  ShieldCheck,
  Calendar
} from 'lucide-react';

interface ContactPageProps {
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    phone: '',
    subject: 'Appointment Query',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="py-12 lg:py-20 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-subtle text-red-700 text-xs font-bold uppercase tracking-wider border border-red-200 shadow-xs">
            <MapPin className="w-4 h-4 text-red-600" />
            <span>Visit or Contact Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 font-serif-heading tracking-tight">
            Contact Unique Homeo Care Center
          </h1>
          <p className="text-base text-slate-700 leading-relaxed">
            We are here to answer your questions and assist with scheduling your consultation with Dr. Javed Iqbal.
          </p>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Address Card */}
          <div className="glass p-6 rounded-3xl border border-white/80 shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl glass-emerald text-white flex items-center justify-center border border-white/30">
                <MapPin className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-slate-900 font-serif-heading">Clinic Address</h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Near Malkana Gate Sharqpur Sharif,<br />
                District Sheikhupura, Punjab, Pakistan
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/60 text-xs font-semibold text-emerald-900">
              Landmark: Malkana Gate Main Market
            </div>
          </div>

          {/* Phone & WhatsApp Card */}
          <div className="glass p-6 rounded-3xl border border-white/80 shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl glass-emerald text-white flex items-center justify-center border border-white/30">
                <Phone className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-slate-900 font-serif-heading">Phone & WhatsApp</h2>
              <p className="text-sm font-bold text-slate-900">
                {CLINIC_INFO.phone}
              </p>
              <p className="text-xs text-slate-600">
                Direct calls & instant WhatsApp message support available daily.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/60 flex items-center gap-2">
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="px-3.5 py-1.5 rounded-xl bg-emerald-800 text-white font-bold text-xs shadow-xs hover:bg-emerald-900 transition-colors"
              >
                Call Now
              </a>
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl glass-subtle border border-white/80 text-emerald-950 font-bold text-xs hover:bg-white/80 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Clinic Hours Card */}
          <div className="glass p-6 rounded-3xl border border-white/80 shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl glass-emerald text-white flex items-center justify-center border border-white/30">
                <Clock className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-slate-900 font-serif-heading">Consultation Hours</h2>
              <div className="text-xs space-y-1 text-slate-700">
                <p><strong>Mon – Sat:</strong> Morning 9:00 AM – 1:00 PM</p>
                <p><strong>Mon – Sat:</strong> Evening 5:00 PM – 9:00 PM</p>
                <p><strong>Sunday:</strong> 10:00 AM – 2:00 PM (Appointments)</p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-white/60 text-xs font-semibold text-emerald-900">
              Walk-ins and Appointments Welcome
            </div>
          </div>

        </div>

        {/* Map & Quick Contact Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive Styled Google Map Mock / Frame */}
          <div className="lg:col-span-7 glass rounded-3xl p-6 border border-white/80 shadow-md space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900 font-serif-heading flex items-center gap-2">
                <Building2 className="w-5 h-5 text-emerald-800" />
                <span>Sharqpur Sharif Clinic Location Map</span>
              </h2>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full glass-subtle text-emerald-950 border border-white/80">
                Near Malkana Gate
              </span>
            </div>

            {/* Visual Map Representation */}
            <div className="relative w-full h-80 rounded-2xl overflow-hidden border border-white/80 glass-subtle flex flex-col items-center justify-center text-center p-6 space-y-4">
              
              {/* Stylized Leaflet / Map graphics */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:16px_16px]" />

              <div className="relative z-10 w-16 h-16 rounded-full glass-emerald text-white flex items-center justify-center shadow-2xl animate-bounce border border-white/60">
                <MapPin className="w-8 h-8" />
              </div>

              <div className="relative z-10 max-w-sm glass border border-white/90 p-4 rounded-2xl shadow-lg text-slate-800 space-y-1">
                <h3 className="font-bold text-sm font-serif-heading text-emerald-950">
                  Unique Homeo Care Center
                </h3>
                <p className="text-xs text-slate-700">
                  Near Malkana Gate Sharqpur Sharif, Punjab
                </p>
                <p className="text-[11px] font-bold text-emerald-800">
                  Dr. Javed Iqbal • +92 301 6076402
                </p>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Malkana Gate Sharqpur Sharif Punjab Pakistan')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 px-4 py-2 rounded-xl glass-emerald text-white text-xs font-bold shadow-md hover:bg-emerald-900 transition-colors flex items-center gap-1.5 border border-white/30"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Open in Google Maps Directions</span>
              </a>

            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-5 glass rounded-3xl p-6 sm:p-8 border border-white/80 shadow-md space-y-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900 font-serif-heading">
                Send a Direct Message
              </h2>
              <p className="text-xs text-slate-600">
                Have a health question or inquiry for Dr. Javed Iqbal?
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl glass-subtle border border-white/80 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-700 mx-auto" />
                <h3 className="text-base font-bold text-emerald-950">Message Received!</h3>
                <p className="text-xs text-slate-700">
                  Thank you for reaching out to Unique Homeopathic Clinic. Dr. Javed Iqbal's staff will respond shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-emerald-800 text-white font-bold text-xs shadow-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariq Mehmood"
                    value={contactData.name}
                    onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl glass-subtle border border-white/80 text-xs text-slate-800 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 300 1234567"
                    value={contactData.phone}
                    onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl glass-subtle border border-white/80 text-xs text-slate-800 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. Online consultation inquiry"
                    value={contactData.subject}
                    onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl glass-subtle border border-white/80 text-xs text-slate-800 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Message *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Write your health question or details here..."
                    value={contactData.message}
                    onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl glass-subtle border border-white/80 text-xs text-slate-800 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}

            <div className="pt-3 border-t border-white/60">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 rounded-xl glass-subtle border border-white/80 text-emerald-950 font-bold text-xs hover:bg-white/80 transition-colors flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Or Book Consultation Directly</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
