export type BottleneckType =
  | 'AWARENESS'
  | 'LEAD_QUALITY'
  | 'LEAD_VOLUME'
  | 'FOLLOW_UP'
  | 'CONVERSION'
  | 'RETENTION';

export interface BottleneckInfo {
  id: BottleneckType;
  label: string;
  symptom: string;
  coreIssue: string;
  xlncSolution: string;
  metricImpact: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  dealSize: string;
  challenge: string;
  solution: string;
  result: string;
  keyMetric: string;
  metricLabel: string;
  timeframe: string;
  quote: string;
  author: string;
  role: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  verifiedResult: string;
  dealValue: string;
  image?: string;
  channel?: string;
}

export interface BookingFormData {
  businessName: string;
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  dealSize: string;
  monthlyRevenue: string;
  primaryBottleneck: string;
  selectedDate: string;
  selectedTime: string;
  notes: string;
}

export interface WorkVideo {
  id: number | string;
  title: string;
  client?: string;
  category?: string;
  videoId: string;
  embedUrl: string;
  thumbnailUrl: string;
}
