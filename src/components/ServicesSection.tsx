import React, { useMemo, useState } from 'react';
import { SERVICES_LIST } from '../data/clinicData';
import { ServiceItem } from '../types';
import { 
  Stethoscope, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  X,
  Calendar,
  Activity,
  Zap,
  Heart,
  Baby,
  ShieldAlert,
  Wind,
  Feather,
  Sun,
  Smile,
  TrendingUp,
  Moon,
  Shield
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenBooking: () => void;
}

const iconComponentMap: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope className="w-6 h-6 text-emerald-700" />,
  Activity: <Activity className="w-6 h-6 text-emerald-700" />,
  Zap: <Zap className="w-6 h-6 text-emerald-700" />,
  Heart: <Heart className="w-6 h-6 text-emerald-700" />,
  Baby: <Baby className="w-6 h-6 text-emerald-700" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6 text-emerald-700" />,
  Sparkles: <Sparkles className="w-6 h-6 text-emerald-700" />,
  Wind: <Wind className="w-6 h-6 text-emerald-700" />,
  Feather: <Feather className="w-6 h-6 text-emerald-700" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-700" />,
  Sun: <Sun className="w-6 h-6 text-emerald-700" />,
  Smile: <Smile className="w-6 h-6 text-emerald-700" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-emerald-700" />,
  Moon: <Moon className="w-6 h-6 text-emerald-700" />,
  Shield: <Shield className="w-6 h-6 text-emerald-700" />,
};

const categories = [
  { id: 'all', label: 'All Treatments' },
  { id: 'general', label: 'General & Acute' },
  { id: 'chronic', label: 'Chronic & Respiratory' },
  { id: 'women_children', label: "Women & Children" },
  { id: 'skin_allergy', label: 'Skin & Allergies' },
  { id: 'lifestyle', label: 'Lifestyle & Mental' },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filteredServices = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return SERVICES_LIST.filter((service) => {
      const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
      if (!query) return matchesCategory;
      const matchesSearch =
        service.title.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        service.commonSymptoms.some((symptom) => symptom.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="services" className="py-16 lg:py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-subtle text-emerald-900 text-xs font-bold uppercase tracking-wider border border-white/60 shadow-xs">
            <Stethoscope className="w-4 h-4 text-emerald-700" />
            <span>Comprehensive Medical Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif-heading">
            Specialized Homeopathic Treatments
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Dr. Javed Iqbal treats a wide spectrum of health conditions using pure, non-toxic, individualized homeopathic remedies designed to achieve lasting wellness.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mb-10 space-y-4">
          
          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search symptom, disease, e.g. Migraine, PCOD, Eczema..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl glass-subtle border border-white/80 text-sm text-slate-800 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white/80 shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 text-xs font-bold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-emerald-800 text-white shadow-md'
                    : 'glass-subtle text-slate-700 hover:bg-white/80 border border-white/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass rounded-3xl p-6 hover:bg-white/70 transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center border border-white/80 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                    {iconComponentMap[service.iconName] || <Stethoscope className="w-6 h-6" />}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/70 text-emerald-900 border border-white/80">
                    Homeopathic Care
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-emerald-900 transition-colors font-serif-heading">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-emerald-800 mb-3">
                  {service.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-700 line-clamp-3 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Symptoms Badges */}
                <div className="space-y-1 mb-4">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Common Indications:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.commonSymptoms.slice(0, 3).map((sym, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded-lg bg-emerald-100/70 text-emerald-900 font-medium border border-white/80"
                      >
                        • {sym}
                      </span>
                    ))}
                    {service.commonSymptoms.length > 3 && (
                      <span className="text-[11px] px-1.5 py-0.5 text-slate-500 font-medium">
                        +{service.commonSymptoms.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/60 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 group/btn"
                >
                  <span>Read Treatment Approach</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-700 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenBooking}
                  className="p-2 rounded-xl bg-emerald-100/80 text-emerald-800 hover:bg-emerald-700 hover:text-white transition-colors border border-white/80"
                  title="Book consultation for this service"
                >
                  <Calendar className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 glass rounded-3xl border border-white/70 p-8 space-y-3 max-w-lg mx-auto">
            <p className="text-base font-semibold text-slate-800">
              No matching health condition found for "{searchQuery}".
            </p>
            <p className="text-xs text-slate-600">
              Dr. Javed Iqbal treats all acute and chronic ailments. Please contact us directly or book a general consultation.
            </p>
            <button
              onClick={onOpenBooking}
              className="mt-2 px-5 py-2.5 rounded-xl bg-emerald-800 text-white font-bold text-xs shadow-md"
            >
              Book General Consultation
            </button>
          </div>
        )}

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md animate-fadeIn">
          <div className="glass rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-white/80 text-slate-800">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/70 text-slate-700 hover:bg-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-md">
                {iconComponentMap[selectedService.iconName] || <Stethoscope className="w-6 h-6" />}
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  Homeopathic Care Overview
                </span>
                <h3 className="text-2xl font-bold text-slate-900 font-serif-heading">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-700 mb-6 leading-relaxed">
              {selectedService.description}
            </p>

            <div className="space-y-6">
              
              {/* Homeopathic Approach */}
              <div className="p-4 rounded-2xl glass-subtle border border-white/80">
                <h4 className="text-sm font-bold text-emerald-950 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-700" />
                  <span>Dr. Javed Iqbal's Homeopathic Approach</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  {selectedService.homeopathicApproach}
                </p>
              </div>

              {/* Symptoms Addressed */}
              <div>
                <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                  Symptoms & Conditions Addressed:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.commonSymptoms.map((sym, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-800 bg-white/60 p-2.5 rounded-xl border border-white/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>{sym}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Patient Benefits */}
              <div>
                <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                  Key Benefits of Treatment:
                </h4>
                <ul className="space-y-2">
                  {selectedService.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800">
                      <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="mt-8 pt-6 border-t border-white/60 flex items-center justify-between gap-4">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-white/60"
              >
                Close Window
              </button>

              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenBooking();
                }}
                className="px-6 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation for {selectedService.title}</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
