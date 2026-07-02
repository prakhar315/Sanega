import {
  AlarmSmoke,
  BadgeCheck,
  Building2,
  CarFront,
  CircleGauge,
  ClipboardCheck,
  Construction,
  ConstructionIcon,
  Droplets,
  Factory,
  FireExtinguisher,
  GlassWater,
  GraduationCap,
  Handshake,
  HardHat,
  HeartPulse,
  House,
  Landmark,
  LayoutPanelLeft,
  Orbit,
  Router,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  TimerReset,
  Users,
  Warehouse,
  Wind,
  Wrench,
  Zap,
} from 'lucide-react'

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Divisions', href: '#divisions' },
  { label: 'Products', href: '#products' },
  { label: 'Industries', href: '#industries' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'Contact', href: '#contact' },
]

export const companyStats = [
  { value: '25+', label: 'Years of combined domain experience' },
  { value: '120+', label: 'Projects delivered across sectors' },
  { value: '10', label: 'Industries served with end-to-end support' },
]

export const visionMission = [
  {
    title: 'Our Vision',
    text:
      'To be a trusted national partner for infrastructure delivery and life-safety systems, recognized for disciplined execution, technical depth, and lasting client relationships.',
  },
  {
    title: 'Our Mission',
    text:
      'To plan, engineer, and deliver civil, EPC, fire protection, and safety solutions with uncompromising quality, transparent practices, and a strong commitment to timelines.',
  },
]

export const divisions = [
  {
    key: 'infra',
    title: 'Infrastructure & Construction',
    eyebrow: 'Core Division 01',
    icon: ConstructionIcon,
    summary:
      'Civil construction and EPC delivery for reliable built environments across public, commercial, and industrial projects.',
    services: [
      'Civil works and structural execution',
      'Government buildings and institutional facilities',
      'Roads, paved surfaces, and site development',
      'Turnkey EPC and design-build projects',
      'Industrial sheds and utility structures',
      'Renovation, retrofitting, and expansion works',
    ],
  },
  {
    key: 'fire',
    title: 'Fire Protection & Safety',
    eyebrow: 'Core Division 02',
    icon: ShieldAlert,
    summary:
      'Integrated fire detection, suppression, compliance, and annual maintenance services for safer operations.',
    services: [
      'Hydrant and sprinkler systems',
      'Fire alarm and detection systems',
      'Fire NOC support and compliance readiness',
      'AMC contracts and preventive maintenance',
      'Fire pumps, hose reels, and safety accessories',
      'Emergency response and life-safety audits',
    ],
  },
]

export const products = [
  { name: 'ABC & CO2 Fire Extinguishers', icon: FireExtinguisher, category: 'First response' },
  { name: 'Clean Agent Systems', icon: Wind, category: 'Critical assets' },
  { name: 'Fire Hose Reels', icon: GlassWater, category: 'Rapid suppression' },
  { name: 'Landing / Hydrant Valves', icon: Droplets, category: 'Water-based systems' },
  { name: 'Sprinklers', icon: Orbit, category: 'Automated protection' },
  { name: 'Fire Pumps', icon: CircleGauge, category: 'Pressure systems' },
  { name: 'Fire Alarm Panels', icon: Router, category: 'Detection & control' },
  { name: 'Smoke Detectors', icon: AlarmSmoke, category: 'Life safety' },
  { name: 'Emergency Exit Lights', icon: Zap, category: 'Wayfinding' },
  { name: 'PPE', icon: HardHat, category: 'Site safety' },
]

export const industries = [
  { name: 'Government', icon: Landmark },
  { name: 'Hospitals', icon: HeartPulse },
  { name: 'Education', icon: GraduationCap },
  { name: 'Commercial', icon: Building2 },
  { name: 'Residential', icon: House },
  { name: 'Warehouses', icon: Warehouse },
  { name: 'Hotels', icon: Building2 },
  { name: 'Manufacturing', icon: Factory },
  { name: 'Industrial Plants', icon: Construction },
  { name: 'Malls', icon: CarFront },
]

export const valuePropositions = [
  { title: 'Professional Project Management', icon: ClipboardCheck },
  { title: 'Quality Execution', icon: BadgeCheck },
  { title: 'Safety-Focused Approach', icon: ShieldCheck },
  { title: 'Experienced Team', icon: Users },
  { title: 'Timely Delivery', icon: TimerReset },
  { title: 'Transparent Practices', icon: Sparkles },
  { title: 'Customer-Centric Service', icon: Handshake },
  { title: 'Technical Compliance Readiness', icon: ShieldAlert },
  { title: 'Reliable Post-Delivery Support', icon: Wrench },
]

export const corporateStructure = [
  {
    title: 'SANEGAA GROUP',
    icon: LayoutPanelLeft,
    description: 'Corporate umbrella for integrated delivery.',
    children: [
      'SANEGAA Infra & Safety',
      'SANEGAA Construction',
      'SANEGAA Fire & Safety',
      'SANEGAA MEP',
      'SANEGAA Project Management',
      'SANEGAA AMC Services',
    ],
  },
]

export const contactDetails = {
  phoneNumber: '9415388232',
  whatsappText: 'Hi SANEGAA Team, I am interested in your services.',
  email: 'sanegainfrasafety@gmail.com',
  address: 'Shop No- 2, 1st Floor, Vikashdeep, Lucknow',
  workingHours: 'Mon - Sat | 9:30 AM - 6:30 PM',
  mapLink: 'https://maps.app.goo.gl/bayySqgvkhnQv8c38',
  mapEmbed: 'https://www.google.com/maps?q=Shop%20No-%202,%201st%20Floor,%20Vikashdeep,%20Lucknow&output=embed',
}

export const companyHighlights = [
  'Turnkey EPC and civil works execution',
  'Fire protection design, supply, and commissioning',
  'Compliance-led life safety solutions',
]

export const heroSlides = [
  {
    type: 'image',
    label: 'Fire Safety Systems',
    title: 'Detection, suppression, and compliance for critical sites',
    description:
      'Integrated fire safety delivery for facilities that need dependable protection and ready-to-audit documentation.',
    src: 'https://source.unsplash.com/1600x900/?fire-safety,extinguisher,industrial',
    alt: 'Fire safety equipment and industrial protection context',
  },
  {
    type: 'image',
    label: 'Infrastructure Delivery',
    title: 'Civil execution with disciplined project control',
    description:
      'From EPC coordination to finishing works, the workflow stays aligned with site safety and timely handover.',
    src: 'https://source.unsplash.com/1600x900/?construction-site,engineer,industrial',
    alt: 'Construction and engineering activity on a project site',
  },
  {
    type: 'video',
    label: 'Operational Readiness',
    title: 'Real-time response training and on-site preparedness',
    description:
      'A motion-first slide that reinforces safety drills, response readiness, and day-to-day operational discipline.',
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    poster: 'https://source.unsplash.com/1600x900/?safety-training,team',
    alt: 'Training and safety readiness video preview',
  },
]

export const aboutVisuals = [
  {
    title: 'Fire protection',
    src: 'https://source.unsplash.com/900x700/?fire-fighting,industrial',
    alt: 'Fire protection and response equipment',
  },
  {
    title: 'Project execution',
    src: 'https://source.unsplash.com/900x700/?construction-engineering,site',
    alt: 'Construction execution on an active site',
  },
  {
    title: 'Safety compliance',
    src: 'https://source.unsplash.com/900x700/?industrial-safety,audit',
    alt: 'Industrial safety audit and compliance work',
  },
]