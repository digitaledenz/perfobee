import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/common/scroll-reveal";

const industries = [
  {
    number: "01",
    title: "Sales Teams",
    description:
      "Keep opportunities, follow-ups and customer interactions organized.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=82",
    tags: ["Lead Tracking", "Sales Pipeline"],
  },
  {
    number: "02",
    title: "Growing Businesses",
    description:
      "Build a clear customer management process as your business expands.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1100&q=82",
    tags: ["Customer Records", "Team Workflow"],
  },
  {
    number: "03",
    title: "Real Estate Teams",
    description:
      "Organize property enquiries, customer conversations and follow-ups.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1100&q=82",
    tags: ["Enquiries", "Follow-ups"],
  },
  {
    number: "04",
    title: "Customer-Focused Teams",
    description:
      "Maintain stronger relationships with organized customer information.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1100&q=82",
    tags: ["Contacts", "Activities"],
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="relative isolate overflow-hidden border-t border-[#e7d5c1] bg-[#faf6f0] py-16 dark:border-[#493325] dark:bg-[#191410] sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1470px] px-6 lg:px-12">

        {/* Center Heading */}
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-[790px] text-center">
            <span className="inline-flex rounded-full border border-[#d7a16a]/40 bg-[#f8ead9] px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#9c500d] dark:bg-[#432916]/50 dark:text-[#f0ac49]">
              Built for Growing Teams
            </span>

            <h2
              id="industries-heading"
              className="mt-6 text-4xl font-bold leading-[1.12] tracking-[-0.045em] text-[#181512] dark:text-white sm:text-5xl lg:text-[3.5rem]"
            >
              One CRM.
              <span className="brand-gradient-text mt-2 block">
                Many Possibilities.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[650px] text-base leading-8 text-stone-600 dark:text-zinc-300 sm:text-lg">
              Whether you manage leads, serve customers or
              grow a sales team, keep your important
              business relationships connected.
            </p>
          </div>
        </ScrollReveal>

        {/* Industry Image Cards */}
        <div className="grid gap-5 md:grid-cols-2">

          {industries.map((industry) => (
            <article
              key={industry.number}
              className="group relative isolate min-h-[365px] overflow-hidden rounded-[28px] border border-white/15 bg-[#39281c] shadow-[0_18px_55px_rgba(80,45,20,0.12)] transition-[transform,box-shadow] duration-500 ease-out hover:shadow-[0_28px_70px_rgba(80,45,20,0.22)] motion-safe:hover:-translate-y-1.5 sm:min-h-[415px]"
            >
              {/* Background Photo */}
              <div
                role="img"
                aria-label={`${industry.title} workspace`}
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
                style={{
                  backgroundImage: `url("${industry.image}")`,
                }}
              />

              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#160e0a]/95 via-[#2e1a10]/50 to-black/10" />

              {/* Copper Glow */}
              <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[#c57217]/25 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />

              {/* Card Top */}
              <div className="absolute inset-x-0 top-0 flex items-start justify-between p-6 sm:p-8">
                <span className="rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-semibold tracking-widest text-white backdrop-blur-lg">
                  {industry.number}
                </span>

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-lg transition-[background-color,transform] duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-[#b96510]">
                  <ArrowUpRight size={21} />
                </div>
              </div>

              {/* Card Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="max-w-[460px]">
                  <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {industry.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-7 text-white/85 sm:text-base">
                    {industry.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {industry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
