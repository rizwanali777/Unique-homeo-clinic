export type PageView = 'home' | 'about' | 'services' | 'cases' | 'contact';

export type ConsultationType = 'online_video' | 'whatsapp' | 'clinic_visit' | 'follow_up';

export interface BookingFormData {
  consultationType: ConsultationType;
  patientName: string;
  phone: string;
  age: string;
  gender: 'male' | 'female' | 'child' | 'other';
  city: string;
  preferredDate: string;
  preferredTimeSlot: string;
  healthConcernCategory: string;
  symptomsDescription: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'general' | 'chronic' | 'women_children' | 'skin_allergy' | 'lifestyle';
  description: string;
  commonSymptoms: string[];
  homeopathicApproach: string;
  benefits: string[];
  iconName: string;
}

export interface CaseStudyItem {
  id: string;
  initials: string;
  ageGender: string;
  condition: string;
  duration: string;
  status: 'Complete Recovery' | 'Significant Improvement' | 'Under Maintenance';
  initialSymptoms: string;
  recoveryOutcome: string;
  timelineWeeks: number;
  keyRemedyNotes: string;
  isIllustrative: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  condition: string;
  quote: string;
  rating: number;
  date: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'treatment' | 'consultation' | 'safety';
}
