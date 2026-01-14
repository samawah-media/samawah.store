import type { Metadata, Viewport } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { samawahFont } from "@/lib/fonts";

// ========================================
// Root Layout - App Shell
// ========================================

/**
 * Viewport configuration for optimal mobile experience
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F7F5F0' }, // Samawah Beige
    { media: '(prefers-color-scheme: dark)', color: '#062759' }, // Samawah Navy
  ],
};

/**
 * Metadata for SEO and social sharing
 */
export const metadata: Metadata = {
  title: {
    default: "متجر سماوة - متجر إبداعي، لإثراء المحتوى ونشر الثقافة والمعرفة",
    template: "%s | متجر سماوة",
  },
  description: "متجر إبداعي، لإثراء المحتوى ونشر الثقافة والمعرفة. نقدم مجلة هدنة والفعاليات الثقافية والتقارير البحثية.",
  keywords: ["مجلة هدنة", "سماوة", "متجر ثقافي", "مجلات سعودية", "فعاليات ثقافية", "تقارير بحثية"],
  authors: [{ name: "سماوة" }],
  creator: "سماوة",
  publisher: "سماوة",
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/favicon.ico",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    siteName: "متجر سماوة",
    title: "متجر سماوة - متجر إبداعي، لإثراء المحتوى ونشر الثقافة والمعرفة",
    description: "متجر إبداعي، لإثراء المحتوى ونشر الثقافة والمعرفة. نقدم مجلة هدنة والفعاليات الثقافية والتقارير البحثية.",
    images: [
      {
        url: "/images/favicon.ico",
        width: 512,
        height: 512,
        alt: "متجر سماوة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "متجر سماوة - متجر إبداعي، لإثراء المحتوى ونشر الثقافة والمعرفة",
    description: "متجر إبداعي، لإثراء المحتوى ونشر الثقافة والمعرفة. نقدم مجلة هدنة والفعاليات الثقافية والتقارير البحثية.",
    images: ["/images/favicon.ico"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="ar" dir="rtl" className={samawahFont.variable} suppressHydrationWarning>
      <head>
        {/* Apple Mobile Web App Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="سماوة" />

        {/* MS Tile */}
        <meta name="msapplication-TileColor" content="#062759" />
      </head>
      <body className="font-samawah antialiased bg-samawah-beige text-samawah-grey flex flex-col min-h-screen overflow-x-hidden">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-[100] focus:bg-samawah-navy focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          تخطي إلى المحتوى الرئيسي
        </a>

        <Header />

        <main id="main-content" className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
