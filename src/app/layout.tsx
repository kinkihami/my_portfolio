import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { ScrollProgress } from "@/components/chrome/ScrollProgress";
import { CustomCursor } from "@/components/chrome/CustomCursor";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Hameesh C — Flutter Developer & Product Engineer",
  description:
    "Production cross-platform mobile engineering with clean architecture, multi-tenant isolation, and verified reliability under real constraints.",
  keywords: [
    "Mohamed Hameesh C",
    "Flutter Developer",
    "Product Engineer",
    "Mobile Engineer",
    "Multi-tenant Architecture",
    "Clean Architecture",
    "Kerala",
    "India",
  ],
  authors: [{ name: "Mohamed Hameesh C" }],
  creator: "Mohamed Hameesh C",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hameesh.dev",
    title: "Mohamed Hameesh C — Flutter Developer & Product Engineer",
    description:
      "Production cross-platform mobile engineering with clean architecture, multi-tenant isolation, and verified reliability.",
    siteName: "Mohamed Hameesh C Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Hameesh C — Flutter Developer & Product Engineer",
    description:
      "Production cross-platform mobile engineering with clean architecture, multi-tenant isolation, and verified reliability.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#04060C",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="bg-[#04060C] text-[#E2E8F0] antialiased selection:bg-cyan-500/30 selection:text-white relative min-h-screen font-sans">
        <SmoothScrollProvider>
          <ScrollProgress />
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
