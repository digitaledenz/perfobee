
import {
    ArrowRight,
    ArrowUpRight,
    Check,
    CircleCheck,
    ContactRound,
    TrendingUp,
} from "lucide-react";

import ScrollReveal from "@/components/common/scroll-reveal";

const stages = [
    {
        number: "01",
        title: "Capture Every Opportunity",
        description:
            "Bring new enquiries and customer information into an organized sales workspace.",
        tag: "Lead Capture",
    },
    {
        number: "02",
        title: "Move Deals Forward",
        description:
            "Keep your pipeline organized, manage follow-ups and track every opportunity.",
        tag: "Sales Pipeline",
    },
    {
        number: "03",
        title: "Turn Leads into Growth",
        description:
            "Follow your sales progress and build stronger customer relationships.",
        tag: "Sales Insights",
    },
];

function LeadPreview() {
    return (
        <div className="relative mx-auto w-full max-w-[340px]">
            <div className="absolute -inset-5 rounded-full bg-[#da9b50]/20 blur-3xl dark:bg-[#bb6d1d]/15" />

            <div className="relative rotate-[-3deg] rounded-2xl border border-[#e9d5be] bg-white p-4 shadow-[0_22px_50px_rgba(120,65,22,.15)] transition-transform duration-500 group-hover:rotate-0 group-hover:-translate-y-2 motion-reduce:transition-none dark:border-[#60432c] dark:bg-[#282019]">
                <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-semibold text-stone-900 dark:text-white">
                        New Leads
                    </span>
                    <span className="rounded-full bg-[#f9ebd9] px-2 py-1 text-[10px] text-[#9c500d] dark:bg-[#53341d] dark:text-[#f0ac49]">
                        CRM Preview
                    </span>
                </div>

                {[
                    ["AM", "Alex Morgan", "Website Enquiry"],
                    ["SW", "Sarah Wilson", "Product Enquiry"],
                    ["JR", "James Robert", "Demo Request"],
                ].map(([initials, name, detail], index) => (
                    <div
                        key={name}
                        className="mb-2 flex items-center gap-3 rounded-xl border border-[#efe4d7] bg-[#fffcf8] p-3 last:mb-0 dark:border-[#503a29] dark:bg-[#211a15]"
                    >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f7dfbf] to-[#deb078] text-[11px] font-bold text-[#88470f]">
                            {initials}
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="truncate text-xs font-semibold text-stone-800 dark:text-white">
                                {name}
                            </p>
                            <p className="truncate text-[10px] text-stone-500 dark:text-zinc-400">
                                {detail}
                            </p>
                        </div>

                        {index === 0 && (
                            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                        )}
                    </div>
                ))}
            </div>

            <div className="absolute -right-2 -top-5 z-10 flex items-center gap-2 rounded-xl border border-[#efd1a9] bg-white px-3 py-2 shadow-xl transition-transform duration-500 group-hover:-translate-y-2 motion-reduce:transition-none dark:border-[#654528] dark:bg-[#342319] sm:-right-5">
                <ContactRound size={15} className="text-[#b96510]" />
                <span className="text-[10px] font-semibold text-stone-800 dark:text-white">
                    New enquiry
                </span>
            </div>
        </div>
    );
}

function PipelinePreview() {
    return (
        <div className="relative mx-auto w-full max-w-[360px]">
            <div className="absolute -inset-5 rounded-full bg-[#da9b50]/20 blur-3xl dark:bg-[#bb6d1d]/15" />

            <div className="relative rotate-[2deg] rounded-2xl border border-[#e9d5be] bg-white p-4 shadow-[0_22px_50px_rgba(120,65,22,.15)] transition-transform duration-500 group-hover:rotate-0 group-hover:-translate-y-2 motion-reduce:transition-none dark:border-[#60432c] dark:bg-[#282019]">
                <div className="mb-4 flex justify-between text-xs font-semibold text-stone-900 dark:text-white">
                    <span>Deal Pipeline</span>
                    <span className="text-[#b96510]">Overview</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                    {[
                        { name: "New", count: "08", color: "#d9a365" },
                        { name: "Active", count: "05", color: "#c57217" },
                        { name: "Won", count: "03", color: "#318c70" },
                    ].map((column) => (
                        <div key={column.name} className="min-w-0">
                            <div className="mb-2 flex items-center gap-1">
                                <span
                                    className="h-2 w-2 shrink-0 rounded-full"
                                    style={{ background: column.color }}
                                />
                                <span className="truncate text-[10px] font-medium text-stone-700 dark:text-zinc-300">
                                    {column.name}
                                </span>
                            </div>

                            <div className="space-y-2">
                                {[0, 1].map((item) => (
                                    <div
                                        key={item}
                                        className="rounded-lg border border-[#eee1d1] bg-[#fffcf8] p-2 dark:border-[#543b28] dark:bg-[#201913]"
                                    >
                                        <span className="text-[11px] font-bold text-stone-900 dark:text-white">
                                            {column.count}
                                        </span>
                                        <div className="mt-2 h-1 w-full rounded bg-[#e6c9a4] dark:bg-[#70502f]" />
                                        <div className="mt-1.5 h-1 w-2/3 rounded bg-stone-200 dark:bg-zinc-700" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute -bottom-4 right-3 z-10 flex items-center gap-2 rounded-xl border border-[#efd1a9] bg-white px-3 py-2 shadow-xl dark:border-[#654528] dark:bg-[#342319]">
                <CircleCheck size={16} className="text-emerald-600" />
                <span className="text-[10px] font-semibold text-stone-800 dark:text-white">
                    Pipeline updated
                </span>
            </div>
        </div>
    );
}

function GrowthPreview() {
    return (
        <div className="relative mx-auto w-full max-w-[340px]">
            <div className="absolute -inset-5 rounded-full bg-[#da9b50]/20 blur-3xl dark:bg-[#bb6d1d]/15" />

            <div className="relative rotate-[-2deg] rounded-2xl border border-[#e9d5be] bg-white p-4 shadow-[0_22px_50px_rgba(120,65,22,.15)] transition-transform duration-500 group-hover:rotate-0 group-hover:-translate-y-2 motion-reduce:transition-none dark:border-[#60432c] dark:bg-[#282019]">
                <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-semibold text-stone-900 dark:text-white">
                        Sales Overview
                    </span>
                    <TrendingUp size={17} className="text-[#bd7522]" />
                </div>

                <div className="mb-4 flex items-end gap-2">
                    <strong className="text-3xl text-stone-900 dark:text-white">
                        72%
                    </strong>
                    <span className="pb-1 text-[10px] text-stone-500 dark:text-zinc-400">
                        Demo performance
                    </span>
                </div>

                <div className="flex h-32 items-end gap-2 border-b border-[#e9d8c5] dark:border-[#60432c]">
                    {[34, 48, 42, 59, 54, 75, 67, 91].map((height, index) => (
                        <div
                            key={index}
                            className="flex-1 rounded-t-md bg-gradient-to-t from-[#9c500d] via-[#c57217] to-[#efb66c] transition-[filter] duration-300 group-hover:brightness-110"
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

            <div className="absolute -right-2 -top-4 z-10 flex items-center gap-2 rounded-xl border border-[#efd1a9] bg-white px-3 py-2 shadow-xl dark:border-[#654528] dark:bg-[#342319] sm:-right-5">
                <Check size={15} className="text-emerald-600" />
                <span className="text-[10px] font-semibold text-stone-800 dark:text-white">
                    Deal closed
                </span>
            </div>
        </div>
    );
}

export default function HowItWorks() {
    return (
        <section
            id="how-it-works"
            aria-labelledby="how-it-works-heading"
            className="relative isolate overflow-hidden border-t border-[#e8d6c2] bg-[#f9f5ef] py-16 dark:border-[#493325] dark:bg-[#19130f] sm:py-20 lg:py-24"
        >
            {/* Ambient lighting */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_10%_20%,rgba(224,164,91,.12),transparent_45%),radial-gradient(ellipse_at_88%_90%,rgba(189,107,32,.10),transparent_48%)] dark:bg-[radial-gradient(ellipse_at_80%_40%,rgba(173,91,27,.12),transparent_55%)]"
            />

            <div className="mx-auto w-full max-w-[1470px] px-6 lg:px-12">
                {/* Heading */}

                {/* Center Aligned Section Heading */}
                <ScrollReveal>
                    <div className="mx-auto mb-12 max-w-[820px] text-center sm:mb-14">

                        {/* Section Badge */}
                        <span className="inline-flex rounded-full border border-[#d7a16a]/40 bg-[#f8ead9] px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#9c500d] dark:bg-[#432916]/50 dark:text-[#f0ac49]">
                            How PerfoBee Works
                        </span>

                        {/* Heading */}
                        <h2
                            id="how-it-works-heading"
                            className="mt-6 text-4xl font-bold leading-[1.12] tracking-[-0.045em] text-[#181512] dark:text-white sm:text-5xl lg:text-[3.5rem]"
                        >
                            From First Lead to
                            <span className="brand-gradient-text mt-2 block">
                                Lasting Growth.
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mx-auto mt-6 max-w-[640px] text-base leading-8 text-stone-600 dark:text-zinc-300 sm:text-lg">
                            A simple way to organize opportunities, manage customer
                            relationships and keep your sales journey moving forward.
                        </p>

                    </div>
                </ScrollReveal>


                {/* Connecting steps */}
                <div className="relative">
                    <div
                        aria-hidden="true"
                        className="absolute left-[16%] right-[16%] top-8 hidden h-px bg-gradient-to-r from-transparent via-[#c57217]/60 to-transparent lg:block"
                    />

                    <div className="grid gap-5 lg:grid-cols-3">
                        {stages.map((stage, index) => (
                            <article
                                key={stage.number}
                                className="group relative min-w-0 overflow-hidden rounded-[28px] border border-[#e7d5c1] bg-white/90 p-5 shadow-[0_18px_50px_rgba(107,65,26,.06)] transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1.5 hover:border-[#ce9a60] hover:shadow-[0_28px_65px_rgba(107,65,26,.14)] motion-reduce:transform-none dark:border-[#50392a] dark:bg-[#241c17] dark:hover:border-[#9c652e] sm:p-7"
                            >
                                {/* Stage number */}
                                <div className="mb-6 flex items-center justify-between">
                                    <span className="brand-gradient-text text-4xl font-bold tracking-tight">
                                        {stage.number}
                                    </span>
                                    <div className="flex items-center gap-2 text-xs font-medium text-[#9c500d] dark:text-[#f0ac49]">
                                        {stage.tag}
                                        {index < 2 ? (
                                            <ArrowRight size={16} />
                                        ) : (
                                            <ArrowUpRight size={16} />
                                        )}
                                    </div>
                                </div>

                                {/* 3D-style UI preview */}
                                <div className="relative flex min-h-[255px] items-center justify-center overflow-hidden rounded-[22px] border border-[#efe2d0] bg-gradient-to-br from-[#fffaf3] via-[#f7e9d5] to-[#ead4b5] px-6 py-9 dark:border-[#5a3b26] dark:from-[#30241b] dark:via-[#49301b] dark:to-[#211914]">
                                    {index === 0 && <LeadPreview />}
                                    {index === 1 && <PipelinePreview />}
                                    {index === 2 && <GrowthPreview />}
                                </div>

                                <div className="pt-7">
                                    <h3 className="text-xl font-semibold tracking-tight text-[#181512] dark:text-white sm:text-2xl">
                                        {stage.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-zinc-300">
                                        {stage.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Bottom message */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-center text-sm text-stone-600 dark:text-zinc-300">
                    <CircleCheck size={19} className="text-[#b96510] dark:text-[#f0ac49]" />
                    One connected workflow. A clearer way to manage sales.
                </div>
            </div>
        </section>
    );
}
