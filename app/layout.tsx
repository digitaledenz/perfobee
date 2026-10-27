
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "../components/common/theme-provider";
import ScrollProgress from "../components/common/scroll-progress";
import FloatingControls from "../components/common/floating-controls";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PerfoBee | Smart CRM Software",
  description:
    "PerfoBee CRM helps businesses manage leads, customers, sales pipelines, and workflows in one powerful platform.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="perfobee-theme"
          disableTransitionOnChange
        >
          <ScrollProgress />
          <FloatingControls />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
