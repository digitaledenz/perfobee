import {
  ArrowRight,
  Play,
  CheckCircle2,
} from "lucide-react";

import Navbar from "@/components/common/navbar";
import ScrollReveal from "@/components/common/scroll-reveal";
import CRMDashboard from "@/components/home_page/crm-dashboard";
import WhyPerfoBee from "@/components/home_page/why-perfobee";
import FeaturesSection from "@/components/home_page/features-section";
import HowItWorks from "@/components/home_page/how-it-works";
import CRMShowcase from "@/components/home_page/crm-showcase";
import IndustriesSection from "@/components/home_page/industries-section";
import FAQDemoSection from "@/components/home_page/faq-demo-section";
import Footer from "@/components/common/footer";


export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fff8ef] text-foreground dark:bg-[#180d09]">

      {/* Background lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_8%_75%,rgba(204,105,28,0.27),transparent_53%),radial-gradient(ellipse_at_85%_12%,rgba(243,187,104,0.35),transparent_47%)] dark:bg-[radial-gradient(ellipse_at_15%_85%,rgba(190,67,12,0.45),transparent_52%),radial-gradient(ellipse_at_90%_10%,rgba(174,73,23,0.3),transparent_48%)]" />

      {/* Premium outer frame */}
      <div className="relative mx-auto my-4 min-h-[calc(100vh-32px)] max-w-[1530px] overflow-hidden rounded-[25px] border-[8px] border-white/60 bg-white/85 shadow-[0_25px_100px_rgba(143,73,17,0.12)] backdrop-blur-sm dark:border-[#aa5b32]/35 dark:bg-[#15100e]/90 sm:my-8">

        {/* Interior glow */}
        <div className="perfobee-glow pointer-events-none absolute inset-0" />

        <div className="relative z-10">
          <Navbar />

          <main>


            <section className="relative mx-auto grid w-full max-w-[1470px] grid-cols-1 items-center gap-10 px-6 pt-14 pb-16 md:pt-16 md:pb-20 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8 lg:px-12 lg:pt-20 lg:pb-24">


              {/* HERO CONTENT */}
              <ScrollReveal className="relative z-10 min-w-0">
                <div className="relative z-10 min-w-0">

                  <div className="mb-7 inline-flex items-center gap-3 border-x-2 border-[var(--brand-primary)] bg-[#f9ede0] px-5 py-2.5 text-xs font-medium text-[#9c500d] dark:bg-[#402516] dark:text-[#f0ac49] sm:text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-primary)]" />
                    All-in-One CRM Platform
                  </div>

                  <h1 className="max-w-[720px] text-[clamp(2.45rem,4.05vw,4.3rem)] font-bold leading-[1.12] tracking-[-0.055em] text-[#181512] dark:text-white">

                    Grow Your Business

                    <span className="mt-2 block">
                      With{" "}
                      <span className="brand-gradient-text">
                        PerfoBee CRM
                      </span>
                    </span>

                  </h1>

                  <p className="mt-7 max-w-[510px] text-base leading-[1.85] text-stone-600 dark:text-zinc-300 sm:text-lg">
                    Manage leads, build stronger customer relationships,
                    and simplify your sales process with PerfoBee —
                    the smart CRM built for growing businesses.
                  </p>

                  <div className="mt-9 flex flex-wrap items-center gap-4">

                    <a
                      href="#contact"
                      className="brand-button inline-flex min-h-14 items-center justify-center gap-3 rounded-xl px-7 text-sm font-semibold sm:text-base"
                    >
                      Get Started
                      <ArrowRight size={19} />
                    </a>

                    <a
                      href="#demo"
                      className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-[#c57217]/40 bg-white/75 px-7 text-sm font-semibold text-stone-900 transition-colors hover:border-[#c57217] hover:bg-[#fff5e9] dark:bg-white/5 dark:text-white dark:hover:bg-white/10 sm:text-base"
                    >
                      <Play size={17} className="text-[var(--brand-primary)]" />
                      Watch Demo
                    </a>

                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-stone-600 dark:text-zinc-300">

                    <span className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[var(--brand-primary)]" />
                      Simple to use
                    </span>

                    <span className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[var(--brand-primary)]" />
                      Smart lead management
                    </span>

                  </div>

                </div>

              </ScrollReveal>

              {/* FLOATING CRM DASHBOARD */}

              <div className="relative isolate min-w-0 w-full lg:translate-x-3 xl:translate-x-6">

                <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-gradient-to-br from-[#e9b16b]/25 via-[#c57217]/10 to-transparent blur-3xl dark:from-[#b96320]/25 dark:via-[#d1883b]/10" />
                <ScrollReveal>
                  <div className="relative rounded-[26px] bg-gradient-to-br from-white/80 via-[#e8b37b]/40 to-white/50 p-[2px] shadow-[0_30px_85px_rgba(128,73,28,0.13)] dark:from-[#9c551c]/50 dark:via-white/10 dark:to-[#9c551c]/20 dark:shadow-[0_30px_100px_rgba(0,0,0,0.35)]">

                    <CRMDashboard />

                  </div>
                </ScrollReveal>
              </div>

            </section>
            {/* SECTION 2 — WHY PERFOBEE */}
            <WhyPerfoBee />
            {/* SECTION 3 — POWERFUL FEATURES */}
            <FeaturesSection />
            {/* SECTION 4 */}
            <HowItWorks />
            {/* SECTION 5 — PRODUCT SHOWCASE */}
            <CRMShowcase />
            {/* SECTION 6 — INDUSTRIES */}
            <IndustriesSection />
            {/* SECTION 7 — FAQ + BOOK A DEMO */}
            <FAQDemoSection />
          </main>
          {/* COMMON FOOTER */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
