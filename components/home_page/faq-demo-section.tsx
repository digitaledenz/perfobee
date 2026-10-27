
"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const faqs = [
  {
    question: "What is PerfoBee CRM?",
    answer:
      "PerfoBee is a customer relationship management software designed to help businesses organize leads, manage customer information and track sales activities.",
  },
  {
    question: "Can I request a product demo?",
    answer:
      "Yes. You can request a demonstration to explore the software and understand how its features can support your workflow.",
  },
  {
    question: "Is PerfoBee suitable for my business?",
    answer:
      "Suitability depends on your business requirements. A product demonstration can help you evaluate whether PerfoBee fits your team and sales process.",
  },
  {
    question: "Can I manage customer leads in PerfoBee?",
    answer:
      "PerfoBee is designed around lead and customer management. Available tools and workflows can be confirmed during your product demonstration.",
  },
  {
    question: "How can I get started?",
    answer:
      "Contact the PerfoBee team to discuss your requirements, arrange a demonstration and learn about the available plans.",
  },
];

export default function FAQDemoSection() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(0);
  const [formNotice, setFormNotice] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Backend integration will be connected later.
    // No form data is transmitted at this stage.
    setFormNotice(true);
  };

  return (
    <section
      id="faq-demo"
      aria-labelledby="faq-heading"
      className="relative isolate overflow-hidden border-t border-[#e7d5c1] bg-[#fffdfa] py-16 dark:border-[#493325] dark:bg-[#110e0c] sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_40%,rgba(202,133,54,.12),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_85%_40%,rgba(165,87,23,.15),transparent_55%)]"
      />

      <div className="mx-auto grid w-full max-w-[1470px] items-start gap-12 px-6 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:px-12">

        {/* LEFT — FAQ */}
        <div className="min-w-0">
          <span className="inline-flex rounded-full border border-[#d7a16a]/40 bg-[#f8ead9] px-5 py-2 text-xs font-semibold uppercase tracking-[.16em] text-[#9c500d] dark:bg-[#432916]/50 dark:text-[#f0ac49]">
            Frequently Asked Questions
          </span>

          <h2
            id="faq-heading"
            className="mt-6 text-4xl font-bold leading-[1.12] tracking-[-.045em] text-[#181512] dark:text-white sm:text-5xl"
          >
            Got Questions?
            <span className="brand-gradient-text mt-2 block">
              We Have Answers.
            </span>
          </h2>

          <p className="mt-5 max-w-lg text-base leading-8 text-stone-600 dark:text-zinc-300">
            Explore common questions about PerfoBee and
            discover how to get started with our CRM software.
          </p>

          {/* FAQ Accordion */}
          <div className="mt-9 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFAQ === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-[border-color,background-color,box-shadow] duration-300 ${
                    isOpen
                      ? "border-[#d4a26b] bg-[#fff6eb] shadow-[0_12px_30px_rgba(126,71,25,.07)] dark:border-[#91602e] dark:bg-[#322318]"
                      : "border-[#e9dacc] bg-white/90 dark:border-[#453328] dark:bg-[#211a16]"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      onClick={() =>
                        setActiveFAQ(isOpen ? null : index)
                      }
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                    >
                      <span className="text-sm font-semibold text-stone-900 dark:text-white sm:text-base">
                        {faq.question}
                      </span>

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#f6e5d0] text-[#a75e16] dark:bg-[#51351f] dark:text-[#f0ac49]">
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={`faq-panel-${index}`}
                    inert={!isOpen}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out motion-reduce:transition-none ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="px-5 pb-6 text-sm leading-7 text-stone-600 dark:text-zinc-300 sm:px-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT — BOOK A DEMO */}
        <div id="book-demo" className="relative min-w-0 scroll-mt-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-5 rounded-full bg-[#cf8b39]/15 blur-3xl dark:bg-[#b76b24]/15"
          />

          <div className="relative overflow-hidden rounded-[30px] border border-[#e7cda9] bg-white p-6 shadow-[0_28px_85px_rgba(114,69,27,.13)] dark:border-[#68472c] dark:bg-[#231a15] dark:shadow-[0_28px_85px_rgba(0,0,0,.3)] sm:p-9">

            {/* Decorative Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#efc187]/20 blur-3xl dark:bg-[#b8732b]/15"
            />

            <div className="relative">
              <div className="mb-6 flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#9c500d] via-[#c57217] to-[#e39124] text-white shadow-[0_12px_30px_rgba(156,80,13,.2)]">
                  <CalendarDays size={26} />
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-[#e6cfb3] bg-[#fff8ef] px-3 py-2 text-xs font-medium text-[#9c500d] dark:border-[#624328] dark:bg-[#392719] dark:text-[#f0ac49]">
                  <Sparkles size={14} />
                  Product Demo
                </span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-[#181512] dark:text-white sm:text-4xl">
                See PerfoBee
                <span className="brand-gradient-text mt-1 block">
                  in Action.
                </span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-stone-600 dark:text-zinc-300">
                Share your details and our team can help
                you explore the right CRM solution.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="demo-name"
                      className="mb-2 block text-xs font-semibold text-stone-700 dark:text-zinc-200"
                    >
                      Full Name *
                    </label>
                    <input
                      id="demo-name"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      required
                      maxLength={100}
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-[#e8d8c5] bg-[#fffcf8] px-4 py-3.5 text-sm text-stone-900 outline-none transition-colors focus:border-[#b96510] focus:ring-2 focus:ring-[#b96510]/15 dark:border-[#604530] dark:bg-[#191411] dark:text-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="demo-phone"
                      className="mb-2 block text-xs font-semibold text-stone-700 dark:text-zinc-200"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="demo-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      maxLength={25}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-[#e8d8c5] bg-[#fffcf8] px-4 py-3.5 text-sm text-stone-900 outline-none transition-colors focus:border-[#b96510] focus:ring-2 focus:ring-[#b96510]/15 dark:border-[#604530] dark:bg-[#191411] dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="demo-email"
                    className="mb-2 block text-xs font-semibold text-stone-700 dark:text-zinc-200"
                  >
                    Business Email *
                  </label>
                  <input
                    id="demo-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-[#e8d8c5] bg-[#fffcf8] px-4 py-3.5 text-sm text-stone-900 outline-none transition-colors focus:border-[#b96510] focus:ring-2 focus:ring-[#b96510]/15 dark:border-[#604530] dark:bg-[#191411] dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="demo-company"
                    className="mb-2 block text-xs font-semibold text-stone-700 dark:text-zinc-200"
                  >
                    Company Name
                  </label>
                  <input
                    id="demo-company"
                    name="company"
                    type="text"
                    maxLength={150}
                    placeholder="Your company"
                    className="w-full rounded-xl border border-[#e8d8c5] bg-[#fffcf8] px-4 py-3.5 text-sm text-stone-900 outline-none transition-colors focus:border-[#b96510] focus:ring-2 focus:ring-[#b96510]/15 dark:border-[#604530] dark:bg-[#191411] dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="demo-message"
                    className="mb-2 block text-xs font-semibold text-stone-700 dark:text-zinc-200"
                  >
                    Your Requirements
                  </label>
                  <textarea
                    id="demo-message"
                    name="message"
                    rows={3}
                    maxLength={1000}
                    placeholder="Tell us what you're looking for..."
                    className="w-full resize-y rounded-xl border border-[#e8d8c5] bg-[#fffcf8] px-4 py-3.5 text-sm text-stone-900 outline-none transition-colors focus:border-[#b96510] focus:ring-2 focus:ring-[#b96510]/15 dark:border-[#604530] dark:bg-[#191411] dark:text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="brand-button flex min-h-14 w-full cursor-pointer items-center justify-center gap-3 rounded-xl text-sm font-semibold sm:text-base"
                >
                  Request a Demo
                  <ArrowUpRight size={19} />
                </button>

                {formNotice && (
                  <p role="status" className="rounded-xl border border-[#e6cfb3] bg-[#fff7eb] p-3 text-sm text-[#875011] dark:border-[#6b492c] dark:bg-[#3a271b] dark:text-[#f0c48b]">
                    This form is a UI preview. Submission
                    is not connected yet, and your details
                    have not been sent.
                  </p>
                )}

                <p className="flex items-start gap-2 text-xs leading-5 text-stone-500 dark:text-zinc-400">
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#b96510]" />
                  Your details will only be sent once the
                  secure form backend is connected.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
