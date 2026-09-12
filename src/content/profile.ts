export interface MetricItem {
  id: string;
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export const PROFILE_DATA = {
  name: "Mohamed Hameesh C",
  title: "Flutter Developer & Product Engineer",
  location: "Kerala, India",
  email: "hameeshkinki@gmail.com",
  phone: "+91 87141 01148",
  tagline:
    "Production cross-platform mobile engineering with clean architecture, multi-tenant isolation, and verified reliability under real device constraints.",
  bio: "Flutter Developer and Product Engineer at Edmento Technologies in Kerala, India. I architect and ship multi-tenant mobile applications with clean architecture, robust security isolation, and role-based access control. Focused on building production systems that scale reliably while balancing security, infrastructure cost, and mobile performance.",
  
  // TODO Constants - Fill these in when URLs/Assets are available
  TODO_PHOTO: "", // Leave empty to use telemetry fallback avatar, or place image at public/hameesh.jpg
  TODO_RESUME_PDF: "/Mohamed-Hameesh-C-Resume.pdf",
  TODO_GITHUB_URL: "", // e.g. "https://github.com/username" (rendered only when populated)
  TODO_LINKEDIN_URL: "", // e.g. "https://linkedin.com/in/username" (rendered only when populated)
  TODO_FORM_ENDPOINT: "", // e.g. "https://formspree.io/f/xxxx" or Resend API endpoint (if empty, falls back to direct mailto)
  
  metrics: [
    {
      id: "exp",
      value: "2+",
      numericValue: 2,
      suffix: "+",
      label: "Years shipping",
      sublabel: "Cross-platform mobile applications in production",
    },
    {
      id: "white-label",
      value: "7+",
      numericValue: 7,
      suffix: "+",
      label: "White-label apps",
      sublabel: "Deployed to production with isolated tenant configs",
    },
    {
      id: "roles",
      value: "10+",
      numericValue: 10,
      suffix: "+",
      label: "Role-based types",
      sublabel: "Supported with dynamic dashboards and security rules",
    },
    {
      id: "stores",
      value: "4",
      numericValue: 4,
      suffix: "",
      label: "Store releases",
      sublabel: "Live on Google Play and Apple App Store",
    },
  ] as MetricItem[],
};
