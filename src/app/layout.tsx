import type { Metadata } from "next";
import { Geist, Geist_Mono, Fira_Code } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lei Zhou | Ph.D. Data Scientist - GenAI & Agentic Systems",
  description:
    "Ph.D. Data Scientist with 6+ years of experience building scalable ML systems. Specializing in Production GenAI and Agentic Applications.",
  keywords: [
    "Data Scientist",
    "Machine Learning",
    "GenAI",
    "LLM",
    "Agentic Systems",
    "Python",
    "FastAPI",
    "RAG",
  ],
  authors: [{ name: "Lei Zhou" }],
  openGraph: {
    title: "Lei Zhou | Ph.D. Data Scientist",
    description:
      "Building Production GenAI & Agentic Applications",
    url: "https://leizhou.dev",
    siteName: "Lei Zhou Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lei Zhou | Ph.D. Data Scientist",
    description: "Building Production GenAI & Agentic Applications",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${firaCode.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
