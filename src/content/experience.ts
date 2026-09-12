export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  isCurrent?: boolean;
  summary: string;
  highlights: string[];
  tech: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  mode: string;
  period: string;
  status: string;
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "edmento",
    role: "Flutter Developer & Product Engineer",
    company: "Edmento Technologies",
    location: "Kerala, India",
    period: "June 2025 – Present",
    isCurrent: true,
    summary:
      "Leading mobile architecture and product engineering across multi-tenant enterprise education platforms, white-label distributions, and real-time logistics systems.",
    highlights: [
      "Architected and shipped Edmento Resolve across 7+ white-label instances supporting 10+ role dashboards",
      "Engineered the Edmento School Bus Management platform with live GPS tracking and fraud-resistant odometer audits",
      "Developed Edmento Mini Apps for rapid in-app micro-workflows",
      "Contributing to Edmento AI, an in-development SaaS platform for AI-powered learning tools",
    ],
    tech: [
      "Flutter",
      "Dart",
      "Dio",
      "WebSockets",
      "Clean Architecture",
      "BLoC",
      "Google Maps SDK",
      "FCM",
    ],
  },
  {
    id: "tl-tech",
    role: "Flutter Developer",
    company: "TL Technologies",
    location: "Kerala, India",
    period: "October 2024 – June 2025",
    summary:
      "Developed on-demand dispatch applications and marketplace mobile experiences with background location services and state management.",
    highlights: [
      "Shipped Frosty Business delivery partner app on Google Play with order acceptance and payout tracking",
      "Contributed core modules to Frosty Foods consumer food and grocery ordering app",
      "Engineered service booking and multi-role account switching for Every Home US marketplace",
    ],
    tech: ["Flutter", "Dart", "Provider", "Riverpod", "REST APIs", "Background Services"],
  },
  {
    id: "cyra",
    role: "Flutter Developer Intern",
    company: "Cyra Learnings",
    location: "Tirur, Malappuram",
    period: "March 2024 – September 2024",
    summary:
      "Built cross-platform Flutter applications integrating Firebase real-time data, state management patterns, and backend integrations.",
    highlights: [
      "Implemented MVVM patterns using GetX, Riverpod, and Provider",
      "Integrated Firebase real-time database, authentication, and push notifications (FCM)",
      "Designed UI/UX wireframes in Figma and integrated custom PHP backend endpoints",
    ],
    tech: ["Flutter", "Dart", "Firebase", "GetX", "Riverpod", "Provider", "PHP", "Figma"],
  },
];

export const EDUCATION: EducationItem = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "Manipal University Jaipur",
  mode: "Online",
  period: "Jan 2026 – Expected 2029",
  status: "In Progress",
};
