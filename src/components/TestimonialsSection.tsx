import React, { useState } from 'react';
import { TESTIMONIALS_LIST } from '../data/clinicData';
import { TestimonialItem } from '../types';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  User, 
  MapPin, 
  MessageSquarePlus, 
  X, 
  Send,
  Info
} from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [reviews, setReviews] = useState<TestimonialItem[]>(TESTIMONIALS_LIST);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    location: '',
    condition: '',
    quote: '',
    rating: 5,
  });
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.quote) return;

    const created: TestimonialItem = {
      id: `rev-${Date.now()}`,
      name: newReview.name,
      location: newReview.location || 'Sharqpur Sharif',
      condition: newReview.condition || 'General Health',
      quote: newReview.quote,
      rating: newReview.rating,
      date: 'Just now',
      verified: true,
    };

    setReviews([created, ...reviews]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setShowAddModal(false);
      setNewReview({ name: '', location: '', condition: '', quote: '', rating: 5 });
    }, 2000);
  };

  return (
    <section className="py-16 lg:py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-subtle text-emerald-900 text-xs font-bold uppercase tracking-wider border border-white/60 shadow-xs">
            <Quote className="w-4 h-4 text-emerald-700" />
            <span>Patient Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif-heading">
            Words of Trust from Satisfied Patients
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Read authentic feedback from individuals and families who experienced natural recovery at Unique Homeopathic Clinic.
          </p>

          <div className="flex items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs shadow-md transition-all"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Share Your Recovery Experience</span>
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="glass rounded-3xl p-6 border border-white/70 hover:bg-white/70 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 fill-current ${
                        i < item.rating ? 'text-amber-500' : 'text-slate-300'
                      }`}
                    />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-800 italic leading-relaxed mb-6 font-serif-heading">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/60 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1">
                    <span>{item.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                  </h3>
                  <div className="flex items-center gap-2 text-[11px] text-slate-600 font-medium">
                    <span className="flex items-center gap-0.5">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {item.location}
                    </span>
                    <span>•</span>
                    <span className="text-emerald-800 font-semibold">{item.condition}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Sample content note */}
        <p className="text-center text-[11px] text-slate-500 mt-8">
          * Representative patient testimonials published with patient consent.
        </p>

      </div>

      {/* Write Review Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md animate-fadeIn">
          <div className="glass rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-white/80 text-slate-800">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/70 text-slate-700 hover:bg-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-slate-900 mb-1 font-serif-heading">
              Share Your Feedback
            </h3>
            <p className="text-xs text-slate-600 mb-6">
              Your feedback helps other patients find authentic natural homeopathic care.
            </p>

            {submittedMessage ? (
              <div className="p-6 rounded-2xl glass-subtle border border-white/80 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-700 mx-auto" />
                <h4 className="text-base font-bold text-emerald-950">Thank You!</h4>
                <p className="text-xs text-emerald-800">
                  Your review has been successfully submitted to Unique Homeopathic Clinic.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Muhammad Aslam"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl glass-subtle border border-white/80 text-xs text-slate-800 placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">City / Location</label>
                    <input
                      type="text"
                      placeholder="Sharqpur Sharif"
                      value={newReview.location}
                      onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl glass-subtle border border-white/80 text-xs text-slate-800 placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">Condition Treated</label>
                    <input
                      type="text"
                      placeholder="e.g. Gastritis"
                      value={newReview.condition}
                      onChange={(e) => setNewReview({ ...newReview, condition: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl glass-subtle border border-white/80 text-xs text-slate-800 placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Rating</label>
                  <select
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 rounded-xl glass-subtle border border-white/80 text-xs text-slate-800 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5/5 Excellent)</option>
                    <option value={4}>⭐⭐⭐⭐ (4/5 Very Good)</option>
                    <option value={3}>⭐⭐⭐ (3/5 Good)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Your Review / Experience *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe your health experience with Dr. Javed Iqbal..."
                    value={newReview.quote}
                    onChange={(e) => setNewReview({ ...newReview, quote: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl glass-subtle border border-white/80 text-xs text-slate-800 placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-emerald-800 text-white font-bold text-xs shadow-md hover:bg-emerald-900 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Review</span>
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
