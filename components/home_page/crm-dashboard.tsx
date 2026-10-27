
import {
  LayoutDashboard,
  Users,
  Contact,
  Handshake,
  CalendarDays,
  BarChart3,
  Search,
  Bell,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";

const menu = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Leads", icon: Users },
  { name: "Contacts", icon: Contact },
  { name: "Deals", icon: Handshake },
  { name: "Calendar", icon: CalendarDays },
  { name: "Reports", icon: BarChart3 },
];

const stats = [
  { label: "Total Leads", value: "1,248", growth: "+12%" },
  { label: "Active Deals", value: "320", growth: "+8%" },
  { label: "Revenue", value: "$86.4K", growth: "+24%" },
  { label: "Conversion", value: "12.5%", growth: "+3%" },
];

const bars = [25, 38, 32, 53, 44, 68, 57, 76, 62, 90, 72, 100];

const pipeline = [
  { name: "New Leads", value: 80, color: "#c57217" },
  { name: "Contacted", value: 60, color: "#db912e" },
  { name: "Qualified", value: 45, color: "#e9b052" },
  { name: "Closed Won", value: 70, color: "#369d73" },
];

export default function CRMDashboard() {
  return (
    <div className="dashboard-float relative w-full">
      <div className="overflow-hidden rounded-[22px] border border-[#e8d8c9] bg-white shadow-[0_30px_90px_rgba(102,57,21,0.18)] dark:border-[#4a3426] dark:bg-[#171513] dark:shadow-[0_30px_90px_rgba(0,0,0,0.5)]">

        <div className="flex min-h-[480px]">

          {/* Sidebar */}
          <aside className="hidden w-[145px] shrink-0 border-r border-stone-200 bg-[#faf7f3] p-4 dark:border-zinc-800 dark:bg-[#1e1a17] sm:block">
            <div className="brand-gradient-text mb-9 text-lg font-bold">
              PerfoBee
            </div>

            <div className="space-y-2">
              {menu.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.name}
                    className={`flex items-center gap-2 rounded-lg px-2 py-2.5 text-[11px] ${
                      index === 0
                        ? "bg-[#f8e8d6] font-semibold text-[#9c500d] dark:bg-[#503019] dark:text-[#f0ac49]"
                        : "text-stone-600 dark:text-zinc-400"
                    }`}
                  >
                    <Icon size={14} />
                    {item.name}
                  </div>
                );
              })}
            </div>
          </aside>

          {/* Main dashboard */}
          <div className="min-w-0 flex-1 bg-white p-4 dark:bg-[#171513] sm:p-5">

            {/* Top */}
            <div className="mb-7 flex items-center justify-between gap-3 border-b border-stone-100 pb-4 dark:border-zinc-800">
              <div>
                <p className="text-sm font-bold text-stone-900 dark:text-white">
                  Sales Dashboard
                </p>
                <p className="mt-1 text-[10px] text-stone-500 dark:text-zinc-400">
                  Welcome back, Alex!
                </p>
              </div>

              <div className="flex items-center gap-3 text-stone-500 dark:text-zinc-400">
                <Search size={15} />
                <Bell size={15} />
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3dfc4] text-xs font-semibold text-[#9c500d]">
                  AC
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-stone-200 bg-white p-3 dark:border-zinc-800 dark:bg-[#211d1a]"
                >
                  <p className="text-[10px] text-stone-500 dark:text-zinc-400">
                    {item.label}
                  </p>

                  <p className="mt-2 text-lg font-bold text-stone-900 dark:text-white">
                    {item.value}
                  </p>

                  <div className="mt-2 flex items-center gap-1 text-[10px] font-medium text-emerald-600">
                    <TrendingUp size={12} />
                    {item.growth}
                  </div>
                </div>
              ))}
            </div>

            {/* Analytics */}
            <div className="mt-4 grid gap-3 lg:grid-cols-[1.2fr_1fr]">

              {/* Chart */}
              <div className="rounded-xl border border-stone-200 p-4 dark:border-zinc-800">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-stone-900 dark:text-white">
                    Sales Overview
                  </p>
                  <ArrowUpRight size={14} className="text-[#c57217]" />
                </div>

                <div className="mt-5 flex h-36 items-end gap-2 border-b border-stone-200 dark:border-zinc-700">
                  {bars.map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t bg-gradient-to-t from-[#a75a15] to-[#efb15e]"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>

                <div className="mt-2 flex justify-between text-[9px] text-stone-400">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                </div>
              </div>

              {/* Pipeline */}
              <div className="rounded-xl border border-stone-200 p-4 dark:border-zinc-800">
                <p className="mb-5 text-xs font-semibold text-stone-900 dark:text-white">
                  Deal Pipeline
                </p>

                <div className="space-y-5">
                  {pipeline.map((item) => (
                    <div key={item.name}>
                      <div className="mb-2 flex justify-between text-[10px] text-stone-600 dark:text-zinc-300">
                        <span>{item.name}</span>
                        <span>{item.value}%</span>
                      </div>

                      <div className="h-1.5 rounded-full bg-stone-100 dark:bg-zinc-800">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${item.value}%`,
                            backgroundColor: item.color,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-4 rounded-xl border border-stone-200 p-4 dark:border-zinc-800">
              <p className="text-xs font-semibold text-stone-900 dark:text-white">
                Recent Activities
              </p>

              <div className="mt-3 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f8e8d6] text-[#9c500d]">
                    <Users size={13} />
                  </div>
                  <span className="text-[10px] text-stone-600 dark:text-zinc-300">
                    New lead added
                  </span>
                </div>

                <span className="text-[10px] text-stone-400">
                  2 min ago
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
