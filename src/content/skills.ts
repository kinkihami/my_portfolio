export interface SkillGroup {
  id: string;
  category: string;
  tag: string;
  items: string[];
  featured?: boolean;
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "languages",
    category: "Languages",
    tag: "CORE_SYNTAX",
    items: ["Dart", "JavaScript", "PHP", "HTML5", "CSS3"],
    featured: true,
  },
  {
    id: "mobile",
    category: "Mobile Core",
    tag: "CLIENT_PLATFORM",
    items: ["Flutter", "Android", "Firebase"],
    featured: true,
  },
  {
    id: "architecture",
    category: "Architecture & State",
    tag: "SYSTEM_DESIGN",
    items: [
      "Clean Architecture",
      "MVVM",
      "BLoC / Cubit",
      "Provider",
      "Riverpod",
      "GetX",
      "Dependency Injection (GetIt)",
    ],
  },
  {
    id: "backend-apis",
    category: "Backend & APIs",
    tag: "NETWORKING",
    items: [
      "REST APIs",
      "Dio",
      "Retrofit",
      "WebSockets",
      "Firebase Cloud Messaging (FCM)",
    ],
  },
  {
    id: "data-storage",
    category: "Data & Storage",
    tag: "PERSISTENCE",
    items: ["Firebase", "SQLite / Sqflite", "Hive", "Shared Preferences"],
  },
  {
    id: "security",
    category: "Security & Isolation",
    tag: "HARDENING",
    items: [
      "Multi-tenant access isolation",
      "Runtime Application Self-Protection (RASP)",
      "Secure local token storage",
    ],
  },
  {
    id: "maps-native",
    category: "Maps & Native Platform",
    tag: "INTEGRATION",
    items: [
      "Google Maps SDK",
      "Live location tracking",
      "Native Android integrations",
      "Home-screen widgets",
    ],
  },
  {
    id: "tools-ops",
    category: "Tools & Deployment",
    tag: "TOOLCHAIN",
    items: [
      "Git",
      "Shell scripting",
      "Figma",
      "Google Play Console",
      "App Store Connect",
    ],
  },
];
