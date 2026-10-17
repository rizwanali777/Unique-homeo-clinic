import { lazy, memo, Suspense, useCallback, useState, type ComponentType } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { PageView, ConsultationType } from './types';
import { Navbar as NavbarView } from './components/Navbar';
import { HeroSection as HeroSectionView } from './components/HeroSection';
import { AppointmentModal as AppointmentModalView } from './components/AppointmentModal';
import { SymptomCheckerModal as SymptomCheckerModalView } from './components/SymptomCheckerModal';
import { QuickWhatsAppFab as QuickWhatsAppFabView } from './components/QuickWhatsAppFab';
import { Footer as FooterView } from './components/Footer';

const Navbar = memo(NavbarView);
const HeroSection = memo(HeroSectionView);
const AppointmentModal = memo(AppointmentModalView);
const SymptomCheckerModal = memo(SymptomCheckerModalView);
const QuickWhatsAppFab = memo(QuickWhatsAppFabView);
const Footer = memo(FooterView);

function lazyNamed<P>(
  loader: () => Promise<Record<string, ComponentType<P>>>,
  exportName: string,
) {
  return lazy(async () => {
    const loaded = await loader();
    return { default: memo(loaded[exportName]) };
  });
}

const WhyChooseUsSection = lazyNamed(
  () => import('./components/WhyChooseUsSection'),
  'WhyChooseUsSection',
);
const DoctorProfileSection = lazyNamed<{ onOpenBooking: () => void }>(
  () => import('./components/DoctorProfileSection'),
  'DoctorProfileSection',
);
const ServicesSection = lazyNamed<{ onOpenBooking: () => void }>(
  () => import('./components/ServicesSection'),
  'ServicesSection',
);
const TreatmentProcessSection = lazyNamed<{ onOpenBooking: () => void }>(
  () => import('./components/TreatmentProcessSection'),
  'TreatmentProcessSection',
);
const CaseStudiesSection = lazyNamed<{ onOpenBooking: () => void }>(
  () => import('./components/CaseStudiesSection'),
  'CaseStudiesSection',
);
const OnlineConsultationSection = lazyNamed<{
  onOpenBooking: (type?: ConsultationType) => void;
}>(
  () => import('./components/OnlineConsultationSection'),
  'OnlineConsultationSection',
);
const TestimonialsSection = lazyNamed(
  () => import('./components/TestimonialsSection'),
  'TestimonialsSection',
);
const FaqSection = lazyNamed(() => import('./components/FaqSection'), 'FaqSection');
const AboutPage = lazyNamed<{ onOpenBooking: () => void }>(
  () => import('./components/AboutPage'),
  'AboutPage',
);
const ContactPage = lazyNamed<{ onOpenBooking: () => void }>(
  () => import('./components/ContactPage'),
  'ContactPage',
);

function SectionFallback() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16" aria-hidden="true">
      <div className="h-40 rounded-3xl bg-white/50 animate-pulse" />
    </div>
  );
}

export default function App() {
  const [activeView, setActiveView] = useState<PageView>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialType, setBookingInitialType] = useState<ConsultationType>('online_video');
  const [bookingConcern, setBookingConcern] = useState('General Physician Consultation');
  const [symptomCheckerOpen, setSymptomCheckerOpen] = useState(false);

  const handleOpenBooking = useCallback((type: ConsultationType = 'online_video') => {
    setBookingInitialType(type);
    setBookingConcern('General Physician Consultation');
    setBookingModalOpen(true);
  }, []);

  const handleBookFromService = useCallback((serviceTitle: string) => {
    setBookingInitialType('online_video');
    setBookingConcern(serviceTitle);
    setBookingModalOpen(true);
  }, []);

  const openOnlineBooking = useCallback(() => handleOpenBooking('online_video'), [handleOpenBooking]);
  const openClinicBooking = useCallback(() => handleOpenBooking('clinic_visit'), [handleOpenBooking]);
  const openHeroBooking = useCallback(
    (type?: ConsultationType) => handleOpenBooking(type || 'online_video'),
    [handleOpenBooking],
  );
  const openSymptomChecker = useCallback(() => setSymptomCheckerOpen(true), []);
  const closeBooking = useCallback(() => setBookingModalOpen(false), []);
  const closeSymptomChecker = useCallback(() => setSymptomCheckerOpen(false), []);

  return (
    <div className="min-h-screen bg-transparent flex flex-col selection:bg-emerald-700 selection:text-white relative">
      <div className="mesh-bg" />

      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenBooking={openOnlineBooking}
      />

      <main className="flex-1">
        {activeView === 'home' && (
          <>
            <HeroSection
              onOpenBooking={openHeroBooking}
              onOpenSymptomChecker={openSymptomChecker}
            />
            <Suspense fallback={<SectionFallback />}>
              <WhyChooseUsSection />
              <DoctorProfileSection onOpenBooking={openClinicBooking} />
              <ServicesSection onOpenBooking={openOnlineBooking} />
              <TreatmentProcessSection onOpenBooking={openOnlineBooking} />
              <CaseStudiesSection onOpenBooking={openOnlineBooking} />
              <OnlineConsultationSection onOpenBooking={openHeroBooking} />
              <TestimonialsSection />
              <FaqSection />
            </Suspense>
          </>
        )}

        {activeView === 'services' && (
          <Suspense fallback={<SectionFallback />}>
            <ServicesSection onOpenBooking={openOnlineBooking} />
            <TreatmentProcessSection onOpenBooking={openOnlineBooking} />
            <OnlineConsultationSection onOpenBooking={openHeroBooking} />
          </Suspense>
        )}

        {activeView === 'about' && (
          <Suspense fallback={<SectionFallback />}>
            <AboutPage onOpenBooking={openOnlineBooking} />
          </Suspense>
        )}

        {activeView === 'cases' && (
          <Suspense fallback={<SectionFallback />}>
            <CaseStudiesSection onOpenBooking={openOnlineBooking} />
            <TestimonialsSection />
          </Suspense>
        )}

        {activeView === 'contact' && (
          <Suspense fallback={<SectionFallback />}>
            <ContactPage onOpenBooking={openClinicBooking} />
          </Suspense>
        )}
      </main>

      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={closeBooking}
        initialType={bookingInitialType}
        initialConcern={bookingConcern}
      />

      <SymptomCheckerModal
        isOpen={symptomCheckerOpen}
        onClose={closeSymptomChecker}
        onBookService={handleBookFromService}
      />

      <QuickWhatsAppFab />

      <Footer setActiveView={setActiveView} onOpenBooking={openOnlineBooking} />
      
      <SpeedInsights />
    </div>
  );
}
