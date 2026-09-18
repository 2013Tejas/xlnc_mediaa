import { BottleneckInfo, CaseStudy, Testimonial, WorkVideo } from './types';

export const BOTTLENECK_DATA: BottleneckInfo[] = [
  {
    id: 'AWARENESS',
    label: 'Awareness',
    symptom: 'Ideal clients don’t know you exist; you rely heavily on random word-of-mouth.',
    coreIssue: 'Lack of focused, high-intent market presence. Marketing is sporadic or invisible to decision-makers.',
    xlncSolution: 'We engineer precision distribution channels targeting high-value decision-makers with authoritative messaging.',
    metricImpact: 'Predictable high-intent impressions reaching pre-qualified prospects monthly.'
  },
  {
    id: 'LEAD_QUALITY',
    label: 'Lead Quality',
    symptom: 'You get inquiries, but prospects are price-sensitive or lack the budget for high-ticket services.',
    coreIssue: 'Loose targeting and unvetted lead captures that invite unqualified volume instead of qualified buyers.',
    xlncSolution: 'We install friction-based qualification intake funnels and positioning assets that filter for serious buyers with real budget.',
    metricImpact: 'Average client value increases while qualification rate rises to >75%.'
  },
  {
    id: 'LEAD_VOLUME',
    label: 'Lead Volume',
    symptom: 'You convert well, but your pipeline has too few new opportunities entering each month.',
    coreIssue: 'Unscaled or un-diversified acquisition channels causing dry spells between contracts.',
    xlncSolution: 'We scale high-performing acquisition channels and activate multi-channel touchpoints to stabilize new enquiry volume.',
    metricImpact: 'Steady, predictable flow of 15–40+ high-ticket opportunities every single month.'
  },
  {
    id: 'FOLLOW_UP',
    label: 'Follow-Up Velocity',
    symptom: 'Leads cool off before speaking with you; inquiries sit uncontacted for hours or days.',
    coreIssue: 'Manual outreach delays and lack of automated, personalized response protocols.',
    xlncSolution: 'We deploy rapid-response protocols (<5 min response time) with automated multi-channel nurturing and scheduling.',
    metricImpact: 'Show-up rates jump by 35%–50% and ghosting rates drop drastically.'
  },
  {
    id: 'CONVERSION',
    label: 'Consultation Conversion',
    symptom: 'Plenty of discovery calls happen, but proposals stall out in indecision or price friction.',
    coreIssue: 'Disjointed pre-call framing and absence of authority assets delivered prior to the meeting.',
    xlncSolution: 'We construct pre-call indoctrination sequences, proof packets, and consultative conversion frameworks.',
    metricImpact: 'Discovery-to-close rates improve consistently without resorting to discounting.'
  },
  {
    id: 'RETENTION',
    label: 'Expansion & Retention',
    symptom: 'Acquired clients churn or do not refer, forcing constant restart of customer acquisition.',
    coreIssue: 'Disconnection between onboarding expectations and systematic relationship reinforcement.',
    xlncSolution: 'We streamline the post-close onboarding bridge and retention communication architecture.',
    metricImpact: 'Higher lifetime value (LTV) and organic compounding customer introductions.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'apex-architecture',
    client: 'Apex Commercial Studio',
    industry: 'Commercial Architecture & Master Planning',
    dealSize: '$25,000 – $80,000 / project',
    challenge: 'Relied 90% on developer word-of-mouth. Experienced severe pipeline swings where 3 great months were followed by 4 dry months.',
    solution: 'Engineered an institutional acquisition pipeline targeting commercial property developers, backed by a 4-step portfolio qualification intake.',
    result: 'Generated 28 qualified developer inquiries in 90 days, closing 4 major commercial projects and building a $640k active pipeline.',
    keyMetric: '+$640,000',
    metricLabel: 'Contract Pipeline in 90 Days',
    timeframe: '90 Days',
    quote: 'Before XLNC, we were perpetually anxious about where our next quarter would come from. Now we have an actual predictable system bringing serious property developers to our table.',
    author: 'Marcus Vance',
    role: 'Managing Principal'
  },
  {
    id: 'vanguard-advisory',
    client: 'Vanguard Strategy Partners',
    industry: 'B2B Executive Advisory & Turnaround',
    dealSize: '$15,000 – $45,000 retainer',
    challenge: 'Burned budget on generic LinkedIn and Meta ads generating tire-kickers and low-level managers who couldn’t authorize five-figure advisory fees.',
    solution: 'Re-architected messaging around C-suite bottleneck diagnostics. Installed calendar triage filtering out non-decision makers before scheduling.',
    result: 'Shifted from 80% tire-kickers to a 3.8x increase in vetted C-suite discovery calls, converting 6 new enterprise retainers in 4 months.',
    keyMetric: '3.8x',
    metricLabel: 'Vetted Executive Consultations',
    timeframe: '120 Days',
    quote: 'They didn’t just send us random leads. They fixed our entire upfront qualification. Every call on my calendar now has budget and decision-making power.',
    author: 'Elena Rostova',
    role: 'Founding Partner'
  },
  {
    id: 'elevate-clinic',
    client: 'Elevate Regenerative Medicine',
    industry: 'Specialty Medical & Longevity Practice',
    dealSize: '$4,500 – $18,000 treatment packages',
    challenge: 'Inquiries submitted after 6 PM were sitting untouched until mid-next-day. Over 68% of inquiries never booked or showed up to their initial consultation.',
    solution: 'Installed instant conversational intake protocols with 3-minute automated SMS/WhatsApp nurturing, personalized video introduction, and calendar hold.',
    result: 'First contact time dropped from 14 hours to 4 minutes. Consultation show-up rate increased from 41% to 84%, generating 31 new enrolled patients in month two.',
    keyMetric: '84%',
    metricLabel: 'Consultation Show-Up Rate (up from 41%)',
    timeframe: '60 Days',
    quote: 'We thought we needed more ad spend. XLNC showed us we were simply burning the patients who were already reaching out. The revenue impact was almost immediate.',
    author: 'Dr. Julian Thorne',
    role: 'Clinical Director'
  }
];

export const CLIENT_SCREENSHOTS = [
  {
    id: 'nikhil-sir',
    clientName: 'NIKHIL SIR',
    displayName: 'Nikhil Sir',
    sequenceNumber: '01',
    role: 'Client Partner',
    company: 'NIKHIL SIR',
    chatGroup: 'XLNC x Nikhil Sir',
    messagePreview: 'Verified client acquisition results & campaign execution.',
    time: 'Verified Proof',
    impactTag: 'Client Acquisition & Scale',
    screenshotUrl: '/assets/testimonials/Nikhil%20sir.webp',
    mobileScreenshotUrl: '/assets/testimonials/Nikhil%20sir-mobile.webp',
    fallbackUrl: '/assets/testimonials/Nikhil%20sir.png',
    width: 1206,
    height: 1446,
    keyTakeaway: 'Predictable high-intent customer acquisition and consistent campaign ROI.'
  },
  {
    id: 'sportygen',
    clientName: 'SPORTYGEN',
    displayName: 'Sportygen',
    sequenceNumber: '02',
    role: 'Growth Lead & Partner',
    company: 'SPORTYGEN',
    chatGroup: 'XLNC x Sportygen!',
    messagePreview: 'Really appreciate all the effort. Results look very promising n great to see improvement in the campaign.',
    time: '12:12 PM',
    impactTag: 'Campaign Breakthrough & Scale',
    screenshotUrl: '/assets/testimonials/Sportygen.webp',
    mobileScreenshotUrl: '/assets/testimonials/Sportygen-mobile.webp',
    fallbackUrl: '/assets/testimonials/Sportygen.png',
    width: 1108,
    height: 1600,
    keyTakeaway: 'Dramatic uplift in booked inquiries and high-intent customer acquisition.'
  },
  {
    id: 'match-point',
    clientName: 'MATCH POINT',
    displayName: 'Match Point',
    sequenceNumber: '03',
    role: 'Academy Director & Founder',
    company: 'MATCH POINT',
    chatGroup: 'XLNC X MatchPoint Badm...',
    messagePreview: 'Impressed by your good work, I will refer you more work. Keep it up.',
    time: '1:04 AM',
    impactTag: 'High-Value Inquiries & Referrals',
    screenshotUrl: '/assets/testimonials/Match%20point.webp',
    mobileScreenshotUrl: '/assets/testimonials/Match%20point-mobile.webp',
    fallbackUrl: '/assets/testimonials/Match%20point.png',
    width: 1206,
    height: 1364,
    keyTakeaway: 'Consistent qualified bookings generated immediate client trust and referral expansion.'
  },
  {
    id: 'salman-bhai',
    clientName: 'SALMAN BHAI',
    displayName: 'Salman Bhai',
    sequenceNumber: '04',
    role: 'Client Partner',
    company: 'SALMAN BHAI',
    chatGroup: 'XLNC x Salman Bhai',
    messagePreview: 'Verified client communication & ongoing campaign pipeline.',
    time: 'Verified Proof',
    impactTag: 'Qualified Lead Flow',
    screenshotUrl: '/assets/testimonials/salman%20bhai.webp',
    mobileScreenshotUrl: '/assets/testimonials/salman%20bhai-mobile.webp',
    fallbackUrl: '/assets/testimonials/salman%20bhai.png',
    width: 994,
    height: 1600,
    keyTakeaway: 'Dependable customer acquisition flow and optimized audience targeting.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'nikhil-sir-chat',
    name: 'Nikhil sir',
    role: 'Client Partner',
    company: 'Nikhil sir',
    quote: 'Verified direct customer acquisition proof and campaign performance.',
    verifiedResult: 'Predictable Customer Acquisition',
    dealValue: 'Performance Marketing Scale',
    image: '/assets/testimonials/Nikhil%20sir.webp',
    channel: 'Verified WhatsApp Chat'
  },
  {
    id: 'sportygen-chat',
    name: 'Sportygen',
    role: 'Growth & Operations',
    company: 'Sportygen',
    quote: 'Really appreciate all the effort. Results look very promising and great to see improvement in the campaign.',
    verifiedResult: 'Consistent Enrolment Surge Across Campaigns',
    dealValue: 'Arena Packages & Training Bookings',
    image: '/assets/testimonials/Sportygen.webp',
    channel: 'Verified WhatsApp Chat'
  },
  {
    id: 'matchpoint-chat',
    name: 'Match point',
    role: 'Academy Director',
    company: 'Match point',
    quote: 'Impressed by your good work, I will refer you more work. Keep it up.',
    verifiedResult: 'High-Ticket Player Enquiries & Direct Referral',
    dealValue: 'Facility & Membership Retention',
    image: '/assets/testimonials/Match%20point.webp',
    channel: 'Verified WhatsApp Chat'
  },
  {
    id: 'salman-bhai-chat',
    name: 'salman bhai',
    role: 'Client Partner',
    company: 'salman bhai',
    quote: 'Direct customer acquisition results and verified campaign communication.',
    verifiedResult: 'Consistent Inquiries & Conversion Pipeline',
    dealValue: 'Growth Campaign Pipeline',
    image: '/assets/testimonials/salman%20bhai.webp',
    channel: 'Verified WhatsApp Chat'
  },
  {
    id: '1',
    name: 'Harrison Gray',
    role: 'Founder & CEO',
    company: 'Gray & Co. Wealth Advisory',
    quote: 'The difference between an agency that runs ads and a team that understands client acquisition is night and day. XLNC structured our entire journey from high-net-worth impression to closed mandate.',
    verifiedResult: '+$1.2M in advisory assets managed in Q1',
    dealValue: 'Average client: $18,000/yr',
    channel: 'Client Executive Review'
  },
  {
    id: '2',
    name: 'Sophia Lindqvist',
    role: 'Co-Founder',
    company: 'Stratos Engineering Consultancy',
    quote: 'We don’t have a sales team of twenty people. We need every inquiry to be high signal. XLNC’s acquisition engine filters out the noise and brings us ready-to-buy enterprise partners.',
    verifiedResult: '14 Enterprise Contracts Closed',
    dealValue: 'Average engagement: $35,000',
    channel: 'Client Executive Review'
  },
  {
    id: '3',
    name: 'David Chen',
    role: 'Managing Director',
    company: 'Kensington Legal & Tax Group',
    quote: 'Most agencies promise leads and deliver useless spreadsheets. XLNC looked at our response speed, our consultation show-up rate, and our intake friction. Our business is finally predictable.',
    verifiedResult: '4.2x ROAS across high-ticket mandates',
    dealValue: 'Average retainer: $12,500',
    channel: 'Client Executive Review'
  }
];

export const FAQS = [
  {
    question: 'What type of businesses do you work with?',
    answer: 'We work with high-ticket service businesses that want to create a more consistent and effective way to acquire customers.'
  },
  {
    question: 'Do you only run ads?',
    answer: 'No. Advertising may be part of the strategy, but XLNC looks at the broader customer journey—from attracting prospects to helping convert enquiries.'
  },
  {
    question: 'Do you guarantee a specific number of customers?',
    answer: "No. Results depend on multiple factors, including the market, offer, sales process and the business's ability to handle new customers. XLNC focuses on building and improving the systems that generate and convert customer opportunities."
  },
  {
    question: 'Do you work with businesses in any industry?',
    answer: 'XLNC focuses primarily on high-ticket service businesses where improving customer acquisition can have a meaningful impact on growth.'
  },
  {
    question: 'How do we get started?',
    answer: "Book a Growth Call. We'll first understand your business, goals and current situation before determining whether we're the right fit to work together."
  }
];

export const WORK_VIDEOS: WorkVideo[] = [
  {
    id: 1,
    title: '',
    videoId: '6aaaf3abef37684c945f7741',
    embedUrl: 'https://play.gumlet.io/embed/6aaaf3abef37684c945f7741',
    thumbnailUrl: 'https://video.gumlet.io/6aaaf0ad4b9588fb8c42027c/6aaaf3abef37684c945f7741/thumbnail-1-0.png?v=1789589644221'
  },
  {
    id: 2,
    title: '',
    videoId: '6aaaf3abef37684c945f7744',
    embedUrl: 'https://play.gumlet.io/embed/6aaaf3abef37684c945f7744',
    thumbnailUrl: 'https://video.gumlet.io/6aaaf0ad4b9588fb8c42027c/6aaaf3abef37684c945f7744/thumbnail-1-0.png?v=1789589636203'
  },
  {
    id: 3,
    title: '',
    videoId: '6aaaf36a4b9588fb8c4211cd',
    embedUrl: 'https://play.gumlet.io/embed/6aaaf36a4b9588fb8c4211cd',
    thumbnailUrl: 'https://video.gumlet.io/6aaaf0ad4b9588fb8c42027c/6aaaf36a4b9588fb8c4211cd/thumbnail-1-0.png?v=1789589654043'
  },
  {
    id: 4,
    title: '',
    videoId: '6aaaf36a490dbfc4f4a8f9fc',
    embedUrl: 'https://play.gumlet.io/embed/6aaaf36a490dbfc4f4a8f9fc',
    thumbnailUrl: 'https://video.gumlet.io/6aaaf0ad4b9588fb8c42027c/6aaaf36a490dbfc4f4a8f9fc/thumbnail-1-0.png?v=1789589654043'
  },
  {
    id: 5,
    title: '',
    videoId: '6aaaf3ab4b9588fb8c421339',
    embedUrl: 'https://play.gumlet.io/embed/6aaaf3ab4b9588fb8c421339',
    thumbnailUrl: 'https://video.gumlet.io/6aaaf0ad4b9588fb8c42027c/6aaaf3ab4b9588fb8c421339/thumbnail-1-0.png?v=1789589617876'
  }
  // Easily extendable with videos 6, 7 and 8 here
];
