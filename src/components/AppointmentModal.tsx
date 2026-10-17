import React, { useEffect, useRef, useState } from 'react';
import { CLINIC_INFO, SERVICES_LIST } from '../data/clinicData';
import { BookingFormData, ConsultationType } from '../types';
import {
  X,
  Video,
  MessageSquare,
  Building2,
  CheckCircle2,
  Send,
  ShieldCheck,
  FileText,
  Calendar,
  Clock,
  User,
  Phone,
  MapPin,
} from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: ConsultationType;
  initialConcern?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialType = 'online_video',
  initialConcern = '',
}) => {
  const wasOpen = useRef(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<BookingFormData>({
    consultationType: initialType,
    patientName: '',
    phone: '',
    age: '',
    gender: 'male',
    city: 'Sharqpur Sharif',
    preferredDate: new Date().toISOString().split('T')[0],
    preferredTimeSlot: '10:00 AM - 12:00 PM',
    healthConcernCategory: 'General Physician Consultation',
    symptomsDescription: '',
  });
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (isOpen && !wasOpen.current) {
      setStep(1);
      setBookingRef('');
      setFormData((prev) => ({
        ...prev,
        consultationType: initialType,
        healthConcernCategory: initialConcern || prev.healthConcernCategory,
      }));
    }
    wasOpen.current = isOpen;
  }, [isOpen, initialType, initialConcern]);

  if (!isOpen) return null;

  const updateField = <K extends keyof BookingFormData>(key: K, value: BookingFormData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleTypeSelect = (type: ConsultationType) => {
    updateField('consultationType', type);
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingRef(`UHC-${Math.floor(100000 + Math.random() * 900000)}`);
    setStep(3);
  };

  const getWhatsAppMessage = () => {
    return `*APPOINTMENT BOOKING REQUEST*
*Ref Code:* ${bookingRef}
*Patient Name:* ${formData.patientName}
*Phone:* ${formData.phone}
*Age/Gender:* ${formData.age} yrs / ${formData.gender}
*Location:* ${formData.city}
*Type:* ${formData.consultationType.toUpperCase()}
*Date:* ${formData.preferredDate} (${formData.preferredTimeSlot})
*Health Concern:* ${formData.healthConcernCategory}
*Symptoms:* ${formData.symptomsDescription || 'N/A'}

Assalam-o-Alaikum Dr. Javed Iqbal, please confirm my consultation slot.`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md animate-fadeIn">
      <div className="glass rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-white/80 text-slate-800">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/70 text-slate-700 hover:bg-white transition-colors"
          id="modal-close-button"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-subtle text-emerald-900 text-xs font-bold uppercase tracking-wider mb-2 border border-white/80">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Unique Homeo Care Center</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 font-serif-heading">
            Book Appointment with Dr. Javed Iqbal
          </h2>
          <p className="text-xs text-slate-600 font-medium">
            15+ Years Experience • Sharqpur Sharif & Online
          </p>
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Step 1: Choose Consultation Mode
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleTypeSelect('online_video')}
                className={`p-4 rounded-2xl text-left transition-all ${
                  formData.consultationType === 'online_video'
                    ? 'glass-emerald border border-white/80 text-white shadow-md'
                    : 'glass-subtle border border-white/70 hover:bg-white/80'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-white/80 text-emerald-800 flex items-center justify-center mb-3">
                  <Video className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold">Video Consultation</h3>
                <p className="text-xs opacity-80 mt-1">Live online face-to-face consultation via video call.</p>
              </button>

              <button
                type="button"
                onClick={() => handleTypeSelect('whatsapp')}
                className={`p-4 rounded-2xl text-left transition-all ${
                  formData.consultationType === 'whatsapp'
                    ? 'glass-emerald border border-white/80 text-white shadow-md'
                    : 'glass-subtle border border-white/70 hover:bg-white/80'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-white/80 text-emerald-800 flex items-center justify-center mb-3">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold">WhatsApp Chat</h3>
                <p className="text-xs opacity-80 mt-1">Voice notes, symptom photos & report evaluation.</p>
              </button>

              <button
                type="button"
                onClick={() => handleTypeSelect('clinic_visit')}
                className={`p-4 rounded-2xl text-left transition-all ${
                  formData.consultationType === 'clinic_visit'
                    ? 'glass-emerald border border-white/80 text-white shadow-md'
                    : 'glass-subtle border border-white/70 hover:bg-white/80'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-white/80 text-emerald-800 flex items-center justify-center mb-3">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold">Clinic Visit (Sharqpur)</h3>
                <p className="text-xs opacity-80 mt-1">In-person physical visit near Malkana Gate.</p>
              </button>

              <button
                type="button"
                onClick={() => handleTypeSelect('follow_up')}
                className={`p-4 rounded-2xl text-left transition-all ${
                  formData.consultationType === 'follow_up'
                    ? 'glass-emerald border border-white/80 text-white shadow-md'
                    : 'glass-subtle border border-white/70 hover:bg-white/80'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-white/80 text-emerald-800 flex items-center justify-center mb-3">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold">Follow-Up Review</h3>
                <p className="text-xs opacity-80 mt-1">For registered patients checking progress.</p>
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/60">
              <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                Step 2: Patient Details ({formData.consultationType.replace('_', ' ').toUpperCase()})
              </span>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-slate-600 underline font-semibold hover:text-emerald-800"
              >
                Change Mode
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Full Patient Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Muhammad Ali"
                  value={formData.patientName}
                  onChange={(e) => updateField('patientName', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl glass-subtle border border-white/80 text-xs text-slate-800 placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">WhatsApp / Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+92 300 1234567"
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl glass-subtle border border-white/80 text-xs text-slate-800 placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Age (Years) *</label>
                <input
                  type="number"
                  required
                  placeholder="35"
                  value={formData.age}
                  onChange={(e) => updateField('age', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl glass-subtle border border-white/80 text-xs text-slate-800 placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Gender *</label>
                <select
                  value={formData.gender}
                  onChange={(e) => updateField('gender', e.target.value as BookingFormData['gender'])}
                  className="w-full px-3 py-2.5 rounded-xl glass-subtle border border-white/80 text-xs text-slate-800 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="child">Child / Infant</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">City / Town *</label>
                <input
                  type="text"
                  required
                  placeholder="Sharqpur"
                  value={formData.city}
                  onChange={(e) => updateField('city', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl glass-subtle border border-white/80 text-xs text-slate-800 placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Health Specialty Concern</label>
                <select
                  value={formData.healthConcernCategory}
                  onChange={(e) => updateField('healthConcernCategory', e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl glass-subtle border border-white/80 text-xs text-slate-800 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                >
                  {SERVICES_LIST.map((srv) => (
                    <option key={srv.id} value={srv.title}>{srv.title}</option>
                  ))}
                  <option value="Other Ailment">Other Acute or Chronic Condition</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Preferred Date</label>
                <input
                  type="date"
                  required
                  value={formData.preferredDate}
                  onChange={(e) => updateField('preferredDate', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl glass-subtle border border-white/80 text-xs text-slate-800 placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">Preferred Time Slot</label>
              <select
                value={formData.preferredTimeSlot}
                onChange={(e) => updateField('preferredTimeSlot', e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl glass-subtle border border-white/80 text-xs text-slate-800 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
              >
                <option value="10:00 AM - 12:00 PM">Morning (10:00 AM - 12:00 PM)</option>
                <option value="12:00 PM - 01:00 PM">Afternoon (12:00 PM - 01:00 PM)</option>
                <option value="05:00 PM - 07:00 PM">Evening (05:00 PM - 07:00 PM)</option>
                <option value="07:00 PM - 09:00 PM">Night (07:00 PM - 09:00 PM)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">Brief Description of Symptoms / Duration</label>
              <textarea
                rows={2}
                placeholder="Describe your main complaint, how long you've had it, any prior treatment..."
                value={formData.symptomsDescription}
                onChange={(e) => updateField('symptomsDescription', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl glass-subtle border border-white/80 text-xs text-slate-800 placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 mt-2"
              id="confirm-booking-btn"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-300" />
              <span>Confirm & Generate Booking Ticket</span>
            </button>
          </form>
        )}

        {step === 3 && (
          <div className="text-center space-y-6 py-2">
            <div className="w-16 h-16 rounded-full bg-emerald-700 text-white flex items-center justify-center mx-auto shadow-md border border-white/80">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-900 uppercase tracking-widest glass-subtle px-3.5 py-1 rounded-full border border-white/80">
                Ticket Ref: {bookingRef}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-serif-heading mt-3">
                Booking Details Generated!
              </h3>
              <p className="text-xs text-slate-700 max-w-sm mx-auto mt-1">
                Your consultation request for <strong>{formData.patientName}</strong> is ready. Connect directly with Dr. Javed Iqbal on WhatsApp to finalize your slot time.
              </p>
            </div>

            <div className="p-4 rounded-2xl glass-subtle border border-white/80 text-left text-xs space-y-2">
              <div className="flex justify-between border-b border-white/60 pb-1.5">
                <span className="text-slate-600 font-medium">Patient:</span>
                <span className="font-bold text-slate-900">{formData.patientName} ({formData.age} yrs)</span>
              </div>
              <div className="flex justify-between border-b border-white/60 pb-1.5">
                <span className="text-slate-600 font-medium">Mode:</span>
                <span className="font-bold text-emerald-800">{formData.consultationType.replace('_', ' ').toUpperCase()}</span>
              </div>
              <div className="flex justify-between border-b border-white/60 pb-1.5">
                <span className="text-slate-600 font-medium">Requested Date:</span>
                <span className="font-bold text-slate-900">{formData.preferredDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 font-medium">Clinic Phone:</span>
                <span className="font-bold text-slate-900">{CLINIC_INFO.phone}</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(getWhatsAppMessage())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm shadow-xl transition-all flex items-center justify-center gap-2"
                id="send-whatsapp-booking-btn"
              >
                <Send className="w-4 h-4" />
                <span>Send Ticket to Dr. Javed Iqbal on WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl text-slate-700 font-semibold text-xs hover:bg-white/60"
              >
                Close & Return to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
