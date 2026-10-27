
"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ContactRound,
  KanbanSquare,
  TrendingUp,
  UsersRound,
} from "lucide-react";

const screens = [
  {
    id: "leads",
    label: "Lead Management",
    title: "Every Lead. One Clear View.",
    description:
      "Keep enquiries and follow-ups organized in a single workspace.",
    icon: UsersRound,
  },
  {
    id: "pipeline",
    label: "Sales Pipeline",
    title: "Keep Every Deal Moving.",
    description:
      "Visualize sales opportunities and track their progress.",
    icon: KanbanSquare,
  },
  {
    id: "insights",
    label: "Sales Insights",
    title: "Clarity Behind Every Decision.",
    description:
      "Explore sales activity and understand your pipeline.",
    icon: BarChart3,
  },
] as const;

type ScreenId = (typeof screens)[number]["id"];

const leads = [
  ["AM", "Alex Morgan", "New Enquiry", "New"],
  ["SW", "Sarah Wilson", "Demo Requested", "Contacted"],
  ["JR", "James Robert", "Proposal Discussion", "Qualified"],
];

function PreviewContent({ active }: { active: ScreenId }) {
  if (active === "pipeline") {
    return (
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        {[
          ["New", "04", ["Website enquiry", "New opportunity"]],
          ["In Progress", "03", ["Demo completed", "Proposal review"]],
          ["Won", "02", ["Deal confirmed", "Customer onboarded"]],
        ].map(([title, count, entries], index) => (
          <div
            key={String(title)}
            className="min-w-0 rounded-xl bg-[#faf5ef] p-2 dark:bg-[#27201b] sm:p-3"
          >
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full ${
                  index === 2 ? "bg-emerald-500" : "bg-[#c57217]"
                }`}
              />
              <span className="text-[10px] font-semibold text-stone-800 dark:text-white sm:text-xs">
                {title}
              </span>
              <span className="text-[10px] text-stone-500">
                {String(count)}
              </span>
            </div>

            {(entries as string[]).map((entry) => (
              <div
                key={entry}
                className="mb-2 rounded-lg border border-[#ecddcb] bg-white p-2 shadow-sm dark:border-[#513a29] dark:bg-[#1c1713] sm:p-3"
              >
                <p className="text-[10px] font-medium leading-4 text-stone-800 dark:text-zinc-200 sm:text-xs">
                  {entry}
                </p>
                <div className="mt-3 h-1.5 w-4/5 rounded bg-[#e7c49a]" />
                <div className="mt-2 h-1.5 w-1/2 rounded bg-stone-200 dark:bg-zinc-700" />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  if (active === "insights") {
    return (
      <div className="grid gap-4 sm:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl border border-[#e9d8c5] bg-white p-4 dark:border-[#493728] dark:bg-[#241e19]">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-xs font-semibold text-stone-800 dark:text-white">
              Sales Activity
            </span>
            <TrendingUp size={18} className="text-[#b96510]" />
          </div>

          <div className="flex h-44 items-end gap-2 border-b border-[#ecddcb] pb-1 dark:border-[#493728]">
            {[30, 48, 39, 66, 55, 83, 70, 95].map((height, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-md bg-gradient-to-t from-[#9c500d] via-[#c57217] to-[#f1bb74]"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="mt-3 flex justify-between text-[10px] text-stone-500 dark:text-zinc-400">
            <span>Week 1</span>
            <span>Week 4</span>
            <span>Week 8</span>
          </div>
        </div>

        <div className="space-y-3">
          {[
            ["New Leads", "32"],
            ["Active Deals", "18"],
            ["Completed", "09"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-xl border border-[#e9d8c5] bg-white p-4 dark:border-[#493728] dark:bg-[#241e19]"
            >
              <p className="text-xs text-stone-500 dark:text-zinc-400">
                {label}
              </p>
              <p className="mt-2 text-2xl font-bold text-stone-900 dark:text-white">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-[#eadccc] dark:border-[#493728]">
      <div className="grid grid-cols-[1fr_auto] gap-3 border-b border-[#eadccc] bg-[#faf4ec] px-4 py-3 text-[11px] font-medium text-stone-600 dark:border-[#493728] dark:bg-[#30251d] dark:text-zinc-300 sm:grid-cols-[1.1fr_1fr_auto]">
        <span>Contact</span>
        <span className="hidden sm:block">Activity</span>
        <span>Status</span>
      </div>

      {leads.map(([initials, name, detail, status]) => (
        <div
          key={name}
          className="grid grid-cols-[1fr_auto] items-center gap-3 border-b border-[#eee1d4] bg-white px-3 py-4 last:border-0 dark:border-[#493728] dark:bg-[#241e19] sm:grid-cols-[1.1fr_1fr_auto] sm:px-4"
        >
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f4dfc2] text-[10px] font-bold text-[#9c500d]">
              {initials}
            </div>
            <span className="truncate text-xs font-semibold text-stone-900 dark:text-white">
              {name}
            </span>
          </div>
          <span className="hidden truncate text-xs text-stone-500 dark:text-zinc-400 sm:block">
            {detail}
          </span>
          <span className="rounded-full bg-[#f8e9d7] px-2.5 py-1.5 text-[10px] font-medium text-[#9c500d] dark:bg-[#50321e] dark:text-[#f0ac49]">
            {status}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function CRMShowcase() {
  const [active, setActive] = useState<ScreenId>("leads");
  const selected = screens.find((item) => item.id === active)!;

  return (
    <section
      id="crm-showcase"
      aria-labelledby="showcase-heading"
      className="relative isolate overflow-hidden border-t border-[#e8d7c5] bg-[#fffdf9] py-16 dark:border-[#483324] dark:bg-[#100e0c] sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-[1470px] items-center gap-12 px-6 lg:grid-cols-[1.12fr_.88fr] lg:gap-16 lg:px-12">

        {/* LEFT — Interactive Product Preview */}
        <div className="group relative min-w-0 lg:order-1">
          <div className="pointer-events-none absolute -inset-6 rounded-full bg-[#d8943b]/15 blur-3xl dark:bg-[#b96b22]/15" />

          <div className="relative rounded-[28px] border border-[#e7c9a5] bg-gradient-to-br from-[#fffaf4] to-[#efddc5] p-2 shadow-[0_30px_80px_rgba(123,70,24,.15)] transition-transform duration-500 ease-out motion-safe:hover:-translate-y-1 dark:border-[#684528] dark:from-[#33251b] dark:to-[#181310] dark:shadow-[0_30px_80px_rgba(0,0,0,.35)] sm:p-3">

            <div className="overflow-hidden rounded-[21px] border border-[#eadbca] bg-white dark:border-[#4e3928] dark:bg-[#1b1613]">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between gap-3 border-b border-[#eadbca] px-4 py-4 dark:border-[#493728] sm:px-6">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#c57217]" />
                  <span className="text-sm font-bold text-[#9c500d] dark:text-[#f0ac49]">
                    PerfoBee
                  </span>
                  <span className="hidden text-xs text-stone-400 sm:inline">
                    / Workspace
                  </span>
                </div>
                <span className="rounded-full bg-[#f6e8d6] px-3 py-1.5 text-[10px] font-medium text-[#91500d] dark:bg-[#493020] dark:text-[#f0ac49]">
                  Product Demo
                </span>
              </div>

              <div className="min-h-[330px] p-4 sm:min-h-[370px] sm:p-6">
                <div
                  key={active}
                  className="animate-[showcaseEnter_.35s_ease-out_both] motion-reduce:animate-none"
                >
                  <div className="mb-5 flex items-center gap-2">
                    <selected.icon size={19} className="text-[#bd741e]" />
                    <h3 className="text-base font-semibold text-stone-900 dark:text-white">
                      {selected.label}
                    </h3>
                  </div>
                  <PreviewContent active={active} />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Visual Detail */}
          <div className="pointer-events-none absolute -bottom-5 right-3 hidden items-center gap-2 rounded-2xl border border-[#eac99e] bg-white/95 px-4 py-3 shadow-xl backdrop-blur-xl dark:border-[#684528] dark:bg-[#30221a]/95 sm:flex">
            <CheckCircle2 size={17} className="text-emerald-600" />
            <span className="text-xs font-semibold text-stone-800 dark:text-white">
              Connected CRM Workspace
            </span>
          </div>
        </div>

        {/* RIGHT — Heading + Interactive Tabs */}
        <div className="min-w-0 lg:order-2">
          <span className="inline-flex rounded-full border border-[#d7a16a]/40 bg-[#f8ead9] px-5 py-2 text-xs font-semibold uppercase tracking-[.15em] text-[#9c500d] dark:bg-[#432916]/50 dark:text-[#f0ac49]">
            Explore PerfoBee
          </span>

          <h2
            id="showcase-heading"
            className="mt-6 text-4xl font-bold leading-[1.12] tracking-[-.045em] text-[#181512] dark:text-white sm:text-5xl lg:text-[3.5rem]"
          >
            Your CRM.
            <span className="brand-gradient-text mt-1 block">
              Your Command Center.
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-base leading-8 text-stone-600 dark:text-zinc-300 sm:text-lg">
            Discover a simpler way to organize leads, track
            opportunities and understand your sales journey.
            Select a feature to explore the workspace.
          </p>

          <div
            role="group"
            aria-label="CRM feature previews"
            className="mt-8 space-y-3"
          >
            {screens.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActive(item.id)}
                  className={`flex w-full cursor-pointer items-center gap-4 rounded-2xl border p-4 text-left transition-[background-color,border-color,box-shadow,transform] duration-300 motion-safe:hover:translate-x-1 ${
                    isActive
                      ? "border-[#d8a56c] bg-[#fbefdf] shadow-[0_10px_25px_rgba(143,82,25,.08)] dark:border-[#9b6630] dark:bg-[#3a281b]"
                      : "border-[#ecdcca] bg-white/70 hover:border-[#d6b184] dark:border-[#463527] dark:bg-[#211a16]"
                  }`}
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                      isActive
                        ? "bg-gradient-to-br from-[#9c500d] to-[#e39124] text-white"
                        : "bg-[#f5e4cd] text-[#a35b12] dark:bg-[#49311f] dark:text-[#f0ac49]"
                    }`}
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-stone-900 dark:text-white">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-stone-600 dark:text-zinc-300">
                      {item.description}
                    </span>
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-[#b96510] dark:text-[#f0ac49]"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes showcaseEnter {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
