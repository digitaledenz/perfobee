
import {
    ArrowUpRight,
    ChartNoAxesCombined,
    Clock3,
    LayoutDashboard,
    TrendingUp,
    UsersRound,
    Workflow,
} from "lucide-react";

const benefits = [
    {
        title: "Stay Organized",
        description:
            "Keep customer information, conversations and sales activities easy to manage.",
        icon: UsersRound,
    },
    {
        title: "Save Valuable Time",
        description:
            "Simplify day-to-day sales processes and spend more time building relationships.",
        icon: Clock3,
    },
    {
        title: "Track Sales Progress",
        description:
            "Get a clearer view of your leads, opportunities and sales performance.",
        icon: ChartNoAxesCombined,
    },
    {
        title: "Grow with Confidence",
        description:
            "Build a more organized sales process as your business grows.",
        icon: TrendingUp,
    },
];

export default function WhyPerfoBee() {
    return (

        <section
            id="why-perfobee"
            aria-labelledby="why-perfobee-heading"
            className="relative isolate w-full overflow-hidden border-t border-[#e9d6bf] bg-[#faf6f0] py-16 dark:border-[#473326] dark:bg-[#191410] sm:py-20 lg:py-24"
        >
            {/* Soft background lighting */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_20%,rgba(198,113,34,0.10),transparent_45%),radial-gradient(ellipse_at_10%_85%,rgba(222,170,105,0.12),transparent_45%)] dark:bg-[radial-gradient(ellipse_at_80%_20%,rgba(198,113,34,0.12),transparent_50%)]"
            />

            <div className="mx-auto w-full max-w-[1470px] px-6 lg:px-12">

                {/* Section Heading */}

                {/* Section Heading — Left & Right Layout */}
                <div className="mb-10 grid items-end gap-6 md:grid-cols-2 md:gap-12 lg:mb-12">

                    {/* Left Side — Badge & Heading */}
                    <div className="min-w-0">

                        <span className="inline-flex rounded-full border border-[#d7a16a]/40 bg-[#f8ead9] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#9c500d] dark:bg-[#432916]/50 dark:text-[#f0ac49]">
                            Why PerfoBee?
                        </span>

                        <h2
                            id="why-perfobee-heading"
                            className="mt-5 text-4xl font-bold leading-[1.1] tracking-[-0.045em] text-[#181512] dark:text-white sm:text-5xl lg:text-[3.5rem]"
                        >
                            Smarter CRM.
                            <span className="brand-gradient-text mt-1 block">
                                Simpler Growth.
                            </span>
                        </h2>

                    </div>

                    {/* Right Side — Description */}
                    <div className="min-w-0 md:pb-2 lg:pl-10">

                        <p className="max-w-xl text-base leading-8 text-stone-600 dark:text-zinc-300 sm:text-lg">
                            Bring your customer relationships and sales activities
                            together with a simpler way to work. PerfoBee helps
                            businesses stay organized, track opportunities, and
                            manage their sales journey more efficiently.
                        </p>

                    </div>

                </div>


                {/* Bento Grid */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

                    {/* Featured Bento Card */}
                    <div className="group relative overflow-hidden rounded-[26px] border border-[#eadac8] bg-white p-7 shadow-[0_15px_45px_rgba(127,79,38,0.05)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(127,79,38,0.12)] dark:border-[#443226] dark:bg-[#211b17] md:col-span-2 lg:col-span-2 lg:row-span-2">

                        <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-[#e6ac63]/20 blur-3xl dark:bg-[#bd711b]/15" />

                        <div className="relative flex h-full min-h-[320px] flex-col justify-between">
                            <div>

                                <div className="relative mb-7 flex h-14 w-14 items-center justify-center rounded-[18px] bg-gradient-to-br from-[#9c500d] via-[#c57217] to-[#e39124] text-white shadow-[0_10px_24px_rgba(181,101,16,0.22)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-3">
                                    <LayoutDashboard size={26} strokeWidth={1.8} />
                                    <div className="pointer-events-none absolute inset-[1px] rounded-[17px] border border-white/20" />
                                </div>


                                <h3 className="text-2xl font-semibold tracking-tight text-stone-900 dark:text-white">
                                    Everything in One Place
                                </h3>

                                <p className="mt-4 max-w-sm text-sm leading-7 text-stone-600 dark:text-zinc-300">
                                    Keep your leads, contacts and sales
                                    activities connected in a single,
                                    organized workspace.
                                </p>
                            </div>

                            {/* Decorative mini dashboard */}
                            <div className="relative mt-8 rounded-2xl border border-[#eadac8] bg-[#fffcf8] p-4 shadow-sm dark:border-[#493324] dark:bg-[#171311]">
                                <div className="mb-4 flex items-center justify-between">
                                    <span className="text-xs font-semibold text-stone-800 dark:text-white">
                                        Sales Workspace
                                    </span>
                                    <Workflow size={17} className="text-[#c57217]" />
                                </div>

                                <div className="grid grid-cols-3 gap-2">
                                    {[
                                        { label: "Leads", icon: UsersRound },
                                        { label: "Pipeline", icon: TrendingUp },
                                        { label: "Reports", icon: ChartNoAxesCombined },
                                    ].map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <div
                                                key={item.label}
                                                className="flex flex-col items-center gap-2 rounded-xl border border-[#f0e2d3] bg-white px-2 py-4 dark:border-[#493324] dark:bg-[#241c17]"
                                            >
                                                <Icon size={20} className="text-[#c57217]" />
                                                <span className="text-[11px] font-medium text-stone-700 dark:text-zinc-200">
                                                    {item.label}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Four Benefit Cards */}
                    {benefits.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="group relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-[26px] border border-[#eadac8] bg-white p-6 shadow-[0_15px_45px_rgba(127,79,38,0.05)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(127,79,38,0.12)] dark:border-[#443226] dark:bg-[#211b17]"
                            >
                                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#e9b574]/15 blur-2xl dark:bg-[#bd711b]/10" />

                                <div className="relative flex items-start justify-between">

                                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[#e9c395] bg-gradient-to-br from-[#fff4e4] to-[#f2d8b3] text-[#a65c12] shadow-[0_8px_20px_rgba(156,80,13,0.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_12px_26px_rgba(156,80,13,0.16)] dark:border-[#70451f] dark:from-[#51331d] dark:to-[#2c211a] dark:text-[#f0ac49]">
                                        <Icon size={24} strokeWidth={1.7} />
                                    </div>

                                    <ArrowUpRight
                                        size={19}
                                        className="text-[#bf8a50] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />
                                </div>

                                <div className="relative mt-7">
                                    <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-zinc-300">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}
