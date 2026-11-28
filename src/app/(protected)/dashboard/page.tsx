import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  CircleHelp,
  ClipboardList,
  Users,
} from "lucide-react";
import { Button } from "@/src/components/ui/button";

const properties = [
  { name: "Willow Creek Cottage", address: "214 Willow Creek Ln, Portland, OR", status: "Occupied", rent: "$2,450", initials: "WC", color: "bg-[#e2ecdc] text-[#45634a]" },
  { name: "The Juniper Apartment", address: "8 Juniper St, Portland, OR", status: "Available", rent: "$1,850", initials: "JA", color: "bg-[#f0e9d8] text-[#8a7041]" },
  { name: "Maple House", address: "61 Maple Ave, Beaverton, OR", status: "Occupied", rent: "$2,100", initials: "MH", color: "bg-[#e5e9f1] text-[#59677f]" },
];

const stats = [
  { label: "Total properties", value: "8", note: "+2 this year", trend: "up" },
  { label: "Occupied units", value: "7 / 8", note: "87.5% occupancy", trend: "up" },
  { label: "Monthly income", value: "$14,250", note: "+8.2% this month", trend: "up" },
  { label: "Open requests", value: "3", note: "1 needs attention", trend: "down" },
];

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-360 px-5 py-8 sm:px-8 lg:px-10">
      <section className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 flex items-center gap-2 text-sm text-[#849087]">
            <CalendarDays aria-hidden="true" className="size-4" />
            Saturday, November 28, 2026
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-[#234535] sm:text-[2rem]">
            Good morning, Alex <span aria-hidden="true">☀️</span>
          </h1>
          <p className="mt-2 text-sm text-[#7c887e]">Here&apos;s what&apos;s happening with your properties today.</p>
        </div>
        <Button className="w-fit border-[#dfe5dc] bg-white text-[#315d43] hover:bg-[#f3f6f1]" variant="outline">
          <CircleHelp />
          Help center
        </Button>
      </section>

      <section aria-label="Property overview" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <article className="rounded-2xl border border-[#e9ece5] bg-white p-5 shadow-[0_2px_12px_rgb(30_57_38/3%)]" key={stat.label}>
            <p className="text-sm text-[#849087]">{stat.label}</p>
            <div className="mt-4 flex items-end justify-between gap-2">
              <p className="text-[1.7rem] font-semibold tracking-tight text-[#263a2e]">{stat.value}</p>
              <span className={`mb-1 inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-medium ${stat.trend === "up" ? "bg-[#edf4eb] text-[#507452]" : "bg-[#f7f0e8] text-[#a47849]"}`}>
                {stat.trend === "up" ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
                {stat.note}
              </span>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-7 grid gap-6 xl:grid-cols-[minmax(0,1.65fr)_minmax(280px,0.8fr)]">
        <div className="overflow-hidden rounded-2xl border border-[#e9ece5] bg-white shadow-[0_2px_12px_rgb(30_57_38/3%)]">
          <div className="flex items-center justify-between border-b border-[#eef0ea] px-5 py-5 sm:px-6">
            <div>
              <h2 className="font-semibold text-[#263a2e]">Your properties</h2>
              <p className="mt-1 text-xs text-[#89948a]">A quick look at your portfolio</p>
            </div>
            <Button className="text-[#41684b]" size="sm" variant="ghost">View all</Button>
          </div>
          <div className="divide-y divide-[#eef0ea]">
            {properties.map((property) => (
              <article className="flex items-center gap-3 px-5 py-4 sm:gap-4 sm:px-6" key={property.name}>
                <div className={`flex size-11 shrink-0 items-center justify-center rounded-xl text-xs font-semibold ${property.color}`}>
                  {property.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-medium text-[#304438]">{property.name}</h3>
                  <p className="mt-1 truncate text-xs text-[#8a958b]">{property.address}</p>
                </div>
                <span className={`hidden rounded-full px-2.5 py-1 text-[11px] font-medium sm:inline-flex ${property.status === "Occupied" ? "bg-[#edf4eb] text-[#507452]" : "bg-[#f7f0e8] text-[#a47849]"}`}>
                  {property.status}
                </span>
                <p className="w-19 text-right text-sm font-medium text-[#34473a]">
                  {property.rent}<span className="block text-[10px] font-normal text-[#9aa39a]">/ month</span>
                </p>
              </article>
            ))}
          </div>
        </div>

        <aside className="rounded-2xl border border-[#e9ece5] bg-white p-5 shadow-[0_2px_12px_rgb(30_57_38/3%)] sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-[#263a2e]">Coming up</h2>
              <p className="mt-1 text-xs text-[#89948a]">Your next few to-dos</p>
            </div>
            <button aria-label="More upcoming items" className="rounded-lg p-2 text-[#89948a] hover:bg-[#f6f7f3]" type="button">
              <ChevronDown aria-hidden="true" className="size-4" />
            </button>
          </div>
          <div className="mt-5 space-y-4">
            <div className="flex gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#f5efe3] text-[#987b46]">
                <CalendarDays aria-hidden="true" className="size-4.5" />
              </div>
              <div className="min-w-0 flex-1 border-b border-[#eef0ea] pb-4">
                <p className="text-sm font-medium text-[#34473a]">Rent collection</p>
                <p className="mt-1 text-xs leading-5 text-[#89948a]">Juniper Apartment · Due Dec 1</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#eaf0e8] text-[#527054]">
                <ClipboardList aria-hidden="true" className="size-4.5" />
              </div>
              <div className="min-w-0 flex-1 border-b border-[#eef0ea] pb-4">
                <p className="text-sm font-medium text-[#34473a]">Review maintenance request</p>
                <p className="mt-1 text-xs leading-5 text-[#89948a]">Maple House · Leaky kitchen faucet</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#edf0f5] text-[#65718a]">
                <Users aria-hidden="true" className="size-4.5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-[#34473a]">New tenant application</p>
                <p className="mt-1 text-xs leading-5 text-[#89948a]">Willow Creek Cottage · Received today</p>
              </div>
            </div>
          </div>
          <Button className="mt-5 w-full border-[#e5e9e2] text-[#527054]" variant="outline">See all tasks</Button>
        </aside>
      </section>
    </div>
  );
}