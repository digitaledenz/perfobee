import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, CirclePlay, MoveUpRight, TrendingUp } from "lucide-react";
import ScrollReveal from "@/components/common/scroll-reveal";

const smallFeatures = [
  {
    number: "02 / CUSTOMER RELATIONSHIPS",
    title: "Every relationship, in focus.",
    description: "Keep the customer journey easy to follow, from first conversation to follow-up.",
    className: "bg-[#f8eee2] dark:bg-[#27201a]",
    deco: "contacts",
  },
  {
    number: "03 / SALES VISIBILITY",
    title: "See your next opportunity.",
    description: "Give your team a clearer view of leads, activities and pipeline progress.",
    className: "bg-[#fffaf3] dark:bg-[#1e1916]",
    deco: "chart",
  },
] as const;

export default function FeaturesSection() {
  return (
    <section id="features" aria-labelledby="features-title" className="relative isolate overflow-hidden border-t border-[#ead9c6] bg-[#fffdf9] py-16 dark:border-[#443226] dark:bg-[#120f0e] sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[450px] w-[min(100%,1100px)] -translate-x-1/2 rounded-full bg-[#e4b376]/10 blur-3xl dark:bg-[#c07a32]/10" />
      <div className="mx-auto w-full max-w-[1470px] px-6 lg:px-12">
        <ScrollReveal>
          <div className="mb-10 grid gap-6 md:grid-cols-2 md:items-end md:gap-12 lg:mb-12">
            <div>
              <span className="inline-flex rounded-full border border-[#d5a16b]/40 bg-[#f9ead8] px-4 py-2 text-xs font-semibold tracking-[.13em] text-[#9c500d] dark:bg-[#40291a] dark:text-[#f0ac49]">EXPLORE PERFOBEE</span>
              <h2 id="features-title" className="mt-5 text-[clamp(2.2rem,4vw,3.6rem)] font-bold leading-[1.08] tracking-[-.05em] text-[#181512] dark:text-white">Built to help you<br/><span className="brand-gradient-text">move forward.</span></h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-stone-600 dark:text-zinc-300 sm:text-lg md:pb-2 lg:pl-8">From your first lead to your next sale, explore a connected CRM experience designed around the way teams work.</p>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 lg:grid-cols-12">
          <article className="group relative isolate min-w-0 overflow-hidden rounded-[30px] border border-[#e7d3bc] bg-gradient-to-br from-[#fff7ed] via-[#f9e9d5] to-[#f0d2ad] p-6 shadow-[0_20px_60px_rgba(119,71,30,.09)] transition-[box-shadow,transform] duration-500 hover:-translate-y-1 hover:shadow-[0_30px_75px_rgba(119,71,30,.16)] motion-reduce:transform-none dark:border-[#5a3926] dark:from-[#292019] dark:via-[#1c1714] dark:to-[#382319] sm:p-9 lg:col-span-12 lg:min-h-[520px] lg:p-12">
            <div className="pointer-events-none absolute -right-28 -top-24 -z-10 h-96 w-96 rounded-full bg-[#d78e36]/25 blur-3xl dark:bg-[#a75d20]/20" />
            <div className="grid h-full items-center gap-10 lg:grid-cols-[minmax(0,.75fr)_minmax(0,1.25fr)] lg:gap-12">
              <div className="relative z-10 max-w-lg">
                <p className="text-xs font-semibold tracking-[.17em] text-[#9c500d] dark:text-[#f0ac49]">01 / AN ORGANIZED WORKSPACE</p>
                <h3 className="mt-5 text-3xl font-bold leading-[1.12] tracking-[-.04em] text-[#211812] dark:text-white sm:text-4xl lg:text-[3.25rem]">Your entire sales picture.<br/><span className="brand-gradient-text">Beautifully connected.</span></h3>
                <p className="mt-6 text-sm leading-7 text-[#69574a] dark:text-[#d4c0b0] sm:text-base">A clearer way to explore leads, relationships, activity and sales performance — all from one place.</p>
                <Link href="/features" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#9c500d] px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:transform-none dark:bg-[#c17a27]">Explore Features <ArrowUpRight size={17}/></Link>
                <p className="mt-5 text-xs text-[#816e60] dark:text-[#ac9888]">Illustrative product preview</p>
              </div>
              <div className="relative isolate min-w-0 [perspective:1100px]">
                <div className="pointer-events-none absolute inset-x-8 bottom-[-10px] top-12 -z-10 rounded-[35px] bg-[#ad682a]/25 blur-[35px] dark:bg-black/50" />
                <div className="relative overflow-hidden rounded-[22px] border border-white/80 bg-white shadow-[0_32px_70px_rgba(98,54,22,.24)] transition-transform duration-700 ease-out [transform:rotateY(-6deg)_rotateX(3deg)] group-hover:[transform:rotateY(-2deg)_rotateX(0deg)_translateY(-7px)] motion-reduce:transform-none dark:border-[#6a4630] dark:bg-[#1d1714] dark:shadow-[0_32px_70px_rgba(0,0,0,.55)]">
                  <div className="flex items-center gap-1.5 border-b border-[#e9ddd0] bg-white/95 px-4 py-3 dark:border-[#4c3425] dark:bg-[#211a16]"><span className="h-2.5 w-2.5 rounded-full bg-[#d2a070]"/><span className="h-2.5 w-2.5 rounded-full bg-[#e6c69d]"/><span className="h-2.5 w-2.5 rounded-full bg-[#c2d7bc]"/><span className="ml-auto text-[10px] font-medium text-[#9c500d] dark:text-[#e5a048]">PerfoBee · Preview</span></div>
                  <Image src="/features/dashboard-light.webp" alt="Illustrative PerfoBee CRM dashboard visual showing sales overview and pipeline" width={707} height={724} sizes="(max-width: 1024px) 90vw, 50vw" className="h-auto w-full dark:hidden" />
                  <Image src="/features/dashboard-dark.webp" alt="Illustrative dark theme CRM dashboard visual" width={1290} height={1040} sizes="(max-width: 1024px) 90vw, 50vw" className="hidden h-auto w-full dark:block" />
                </div>
                <div className="pointer-events-none absolute -bottom-4 -left-4 hidden items-center gap-2 rounded-2xl border border-[#e4caad] bg-white/95 px-4 py-3 text-sm font-semibold text-[#9c500d] shadow-[0_12px_35px_rgba(96,56,26,.16)] backdrop-blur-sm sm:flex dark:border-[#5b402a] dark:bg-[#302319]/95 dark:text-[#f0ac49]"><TrendingUp size={17}/> See the bigger picture</div>
              </div>
            </div>
          </article>

          {smallFeatures.map((feature, index) => (
            <article key={feature.title} className={`group relative isolate flex min-h-[345px] min-w-0 flex-col justify-between overflow-hidden rounded-[28px] border border-[#ead8c4] p-7 shadow-[0_10px_36px_rgba(111,69,36,.06)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(111,69,36,.12)] motion-reduce:transform-none dark:border-[#463326] sm:p-9 lg:col-span-6 ${feature.className}`}>
              <div className="relative z-10 max-w-sm">
                <p className="text-xs font-semibold tracking-[.15em] text-[#9c500d] dark:text-[#e9a050]">{feature.number}</p>
                <h3 className="mt-4 text-2xl font-bold tracking-[-.035em] text-[#211812] dark:text-white sm:text-3xl">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#776456] dark:text-[#d5c0af]">{feature.description}</p>
              </div>
              {index === 0 ? (
                <div aria-hidden="true" className="relative mt-10 flex max-w-[430px] flex-col gap-2 [perspective:800px]">
                  {["New lead received","Customer follow-up","Proposal ready"].map((name,i)=><div key={name} className="flex items-center gap-3 rounded-2xl border border-[#e8d1b3] bg-white/90 p-3 shadow-[0_9px_25px_rgba(105,59,23,.08)] transition-transform duration-500 group-hover:translate-x-2 dark:border-[#60432e] dark:bg-[#34261d]" style={{marginLeft:`${i*15}px`}}><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f4dfc3] text-[#ac6417] dark:bg-[#5c3a23] dark:text-[#f0ac49]"><Check size={18}/></span><span className="text-xs font-semibold text-[#4a3729] dark:text-[#f4e5d6]">{name}</span><MoveUpRight size={15} className="ml-auto text-[#b57429]"/></div>)}
                </div>
              ) : (
                <div aria-hidden="true" className="relative mt-8 flex h-[135px] items-end gap-3 rounded-2xl border border-[#ead3b5] bg-white/80 px-5 pb-5 pt-8 dark:border-[#5a3d29] dark:bg-[#2d211a]">
                  {[36,55,42,70,62,85,100,78,96].map((v,i)=><div key={i} className="flex-1 origin-bottom rounded-t-lg bg-gradient-to-t from-[#9c500d] to-[#e7aa57] transition-transform duration-700 group-hover:scale-y-110" style={{height:`${v}%`}} />)}
                  <span className="absolute right-5 top-3 flex items-center gap-1 text-xs font-semibold text-[#9c500d] dark:text-[#efaa51]"><CirclePlay size={14}/> Sales snapshot</span>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
