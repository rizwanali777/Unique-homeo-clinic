import React from 'react';
import { WHY_CHOOSE_US_POINTS } from '../data/clinicData';
import { 
  Award, 
  Leaf, 
  UserCheck, 
  BookOpen, 
  Users, 
  BadgeCheck, 
  Target, 
  HeartHandshake,
  ShieldCheck,
  Check
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award className="w-6 h-6 text-emerald-700" />,
  Leaf: <Leaf className="w-6 h-6 text-emerald-700" />,
  UserCheck: <UserCheck className="w-6 h-6 text-emerald-700" />,
  BookOpen: <BookOpen className="w-6 h-6 text-emerald-700" />,
  Users: <Users className="w-6 h-6 text-emerald-700" />,
  BadgeCheck: <BadgeCheck className="w-6 h-6 text-emerald-700" />,
  Target: <Target className="w-6 h-6 text-emerald-700" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-emerald-700" />,
};

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-subtle text-emerald-900 text-xs font-bold uppercase tracking-wider border border-white/60 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Why Choose Unique Homeo Care Center</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif-heading">
            Authentic Natural Care Built on 15+ Years of Trust
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            We offer gentle, root-cause healing tailored to your exact physical and constitutional needs. Discover why families in Sharqpur Sharif trust Dr. Javed Iqbal.
          </p>
        </div>

        {/* 8 Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_POINTS.map((item, index) => (
            <div
              key={index}
              className="glass p-6 rounded-3xl hover:bg-white/70 transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center shadow-xs border border-white/80 group-hover:bg-emerald-700 group-hover:text-white transition-colors mb-5">
                  {iconMap[item.iconName] || <Check className="w-6 h-6" />}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-900 transition-colors font-serif-heading">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-700 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-emerald-100/80 flex items-center gap-1.5 text-xs font-semibold text-emerald-800">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
