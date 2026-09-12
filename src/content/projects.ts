export interface PrimaryProject {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  category: string;
  note: string;
  highlights: string[];
  stack: string[];
  playStoreUrl?: string;
  appStoreUrl?: string;
  webUrl?: string;
  screenshotSlot?: string;
  accentHue?: string;
}

export interface SecondaryProject {
  id: string;
  code: string;
  title: string;
  dates: string;
  stack: string[];
  summary: string;
  tags: string[];
}

export const PRIMARY_PROJECTS: PrimaryProject[] = [
  {
    id: "edmento-resolve",
    code: "PRJ_RESOLVE_01",
    title: "Edmento Resolve",
    subtitle: "AI-integrated multi-tenant school management platform",
    category: "Production Enterprise Platform",
    note: "Architected and shipped a multi-tenant platform with 10+ role-based dashboards, deployed across 7+ white-label applications. Identified and mitigated a cross-tenant authentication vulnerability via school_id header injection with server-side validation enforcing strict tenant isolation. Re-architected the auth response model from a flat role structure to a school-to-roles hierarchy, enabling a single identity across multiple institutions. Delivered modules for real-time timetables, attendance, assessments, substitution management, online fee payments, Google Meet, and WebSocket chat.",
    highlights: [
      "10+ role-based dashboards across 7+ white-label applications",
      "Resolved cross-tenant auth vulnerability with school_id header isolation",
      "Re-engineered auth model to school-to-roles hierarchy for multi-institution users",
      "Shipped real-time timetables, attendance, assessments, fee payments, and WebSocket chat",
    ],
    stack: [
      "Flutter",
      "Dart",
      "Dio",
      "WebSockets",
      "FCM",
      "Clean Architecture",
      "BLoC",
    ],
    playStoreUrl: "TODO_PLAY_URL_RESOLVE",
    appStoreUrl: "TODO_APPSTORE_URL_RESOLVE",
    screenshotSlot: "public/projects/resolve.png",
    accentHue: "amber",
  },
  {
    id: "edmento-bus",
    code: "PRJ_TRANS_02",
    title: "Edmento School Bus Management",
    subtitle: "Live GPS fleet tracking and logistics operations",
    category: "Fleet Telemetry & Tracking",
    note: "Live GPS bus tracking connecting parents, drivers, and school administrators in real time. Built automated fee reminders, driver/student leave tracking, transport attendance, and route management. Designed a fraud-resistant, cost-efficient mileage verification workflow for outsourced transport vehicles: replaced continuous GPS streaming and cloud AI-OCR processing with driver-submitted odometer photo uploads plus manual verification, eliminating cloud inference costs and mobile battery drain.",
    highlights: [
      "Real-time GPS bus tracking connecting parents, drivers, and administrators",
      "Automated fee reminders, route management, and transport attendance workflows",
      "Engineered fraud-resistant odometer photo audit workflow over costly continuous GPS/AI-OCR",
      "Optimized battery consumption on low-end driver hardware",
    ],
    stack: [
      "Flutter",
      "Dart",
      "Google Maps SDK",
      "Live Geolocation",
      "FCM",
      "Clean Architecture",
    ],
    playStoreUrl: "TODO_PLAY_URL_BUS",
    appStoreUrl: "TODO_APPSTORE_URL_BUS",
    screenshotSlot: "public/projects/bus.png",
    accentHue: "amber",
  },
  {
    id: "frosty-business",
    code: "PRJ_LOGIS_03",
    title: "Frosty Business",
    subtitle: "Delivery partner operations and fulfillment platform (TL Technologies)",
    category: "Logistics & On-Demand Dispatch",
    note: "Built delivery partner operations application handling real-time order acceptance, dispatch management, background live location updates, and earnings/payout tracking. Also contributed cross-functional modules to Frosty Foods, the consumer-facing food and grocery ordering application.",
    highlights: [
      "Real-time order acceptance, dispatch workflows, and route optimization",
      "Background live location tracking and dispatch telemetry",
      "Transparent payout and earnings tracking for delivery fleets",
      "Cross-contributed to Frosty Foods consumer ordering platform",
    ],
    stack: [
      "Flutter",
      "Dart",
      "REST APIs",
      "Live Tracking",
      "Provider",
      "Android Background Services",
    ],
    playStoreUrl: "TODO_PLAY_URL_FROSTY",
    screenshotSlot: "public/projects/frosty.png",
    accentHue: "amber",
  },
  {
    id: "every-home",
    code: "PRJ_MKTP_04",
    title: "Every Home",
    subtitle: "US home services and hardware marketplace (TL Technologies)",
    category: "Services Marketplace",
    note: "Developed core mobile modules for on-demand home service booking, scheduling coordination, and seamless multi-role account switching between service consumers and verified service providers.",
    highlights: [
      "On-demand home service booking workflows and schedule coordination",
      "Multi-role account switching between service consumers and contractors",
      "Modular Clean Architecture with Riverpod state management",
    ],
    stack: ["Flutter", "Dart", "REST APIs", "Riverpod", "Clean Architecture"],
    screenshotSlot: "public/projects/everyhome.png",
    accentHue: "amber",
  },
];

export const SECONDARY_PROJECTS: SecondaryProject[] = [
  {
    id: "sales-lead-tracker",
    code: "MOD_REC_05",
    title: "Sales Lead & Call Recording Tracker",
    dates: "Jul 2026",
    stack: ["Flutter", "Native Android", "Dart"],
    summary:
      "Lead and contact management with call-recording workflows; integrated native Android audio capture and storage to eliminate third-party paid API dependencies.",
    tags: ["Native Android", "Audio Capture", "Cost Reduction"],
  },
  {
    id: "posterify",
    code: "APP_POSTER_06",
    title: "Posterify",
    dates: "Aug – Sep 2024",
    stack: ["Flutter", "PHP", "Provider", "Razorpay"],
    summary:
      "MVVM with Provider state management; Razorpay integration for in-app purchases, template licensing, and premium subscription tiers.",
    tags: ["MVVM", "Razorpay", "E-Commerce"],
  },
  {
    id: "dils-trading",
    code: "DASH_DILS_07",
    title: "DilsTrading",
    dates: "Jul – Aug 2024",
    stack: ["PHP", "JavaScript", "CSS"],
    summary:
      "Admin management dashboard for product catalogs, categorized inventory, and customer orders with dynamic JavaScript-driven interactions.",
    tags: ["Admin Dashboard", "Inventory", "PHP/JS"],
  },
];
