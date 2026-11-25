import { KeyRound, ShieldCheck } from "lucide-react";

export function AuthIllustrationPanel() {
  return (
    <aside className="relative hidden min-h-0 flex-col overflow-hidden rounded-[2rem] bg-[#1d4435] p-8 text-white shadow-[0_28px_70px_rgb(31_63_48/16%)] lg:flex xl:p-12">
      <div
        aria-hidden="true"
        className="absolute -right-28 -top-24 size-112 rounded-full border border-white/10"
      />
      <div
        aria-hidden="true"
        className="absolute -right-12 -top-8 size-92 rounded-full border border-white/10"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-44 -left-36 size-128 rounded-full bg-[#56785b]/30 blur-3xl"
      />

      <div className="relative z-10 flex items-center gap-2 text-sm font-medium text-[#d4e4d3]">
        <ShieldCheck aria-hidden="true" className="size-4.25" />
        A more thoughtful way to find home
      </div>

      <div className="relative z-10 mt-8 max-w-lg xl:mt-10">
        <h2 className="text-[2.5rem] font-medium leading-[1.12] tracking-tighter xl:text-[3.1rem]">
          Make room for
          <br />
          <span className="font-serif italic text-[#c2d5a5]">what feels</span>
          <br />
          like you.
        </h2>
        <p className="mt-5 max-w-sm text-[0.95rem] leading-7 text-[#d0ddd1]/75">
          Your next chapter starts with a place that fits the way you want to
          live.
        </p>
      </div>

      <div className="relative z-10 flex min-h-0 flex-1 items-end justify-center pt-6">
        <div className="absolute bottom-1 left-1/2 h-40 w-[82%] -translate-x-1/2 rounded-[50%] bg-[#b9c898]/15 blur-2xl" />
        <div className="relative w-full max-w-110">
          <div className="absolute -top-10 left-[13%] size-[4.3rem] rounded-full bg-[#d5ddae] shadow-[0_0_70px_rgb(213_221_174/25%)]" />
          <div className="relative mx-auto h-54.5 max-h-[28vh] w-[82%] rounded-t-[46%] border border-white/15 bg-linear-to-b from-[#6d8d69] to-[#365b48] shadow-[0_22px_55px_rgb(8_30_21/30%)]">
            <div className="absolute -top-11 left-1/2 h-20 w-[72%] -translate-x-1/2 rotate-45 rounded-tl-[14px] border-l border-t border-white/15 bg-[#789476]" />
            <div className="absolute inset-x-0 bottom-0 top-[38%] rounded-t-[34%] bg-linear-to-b from-[#749171] to-[#42674f]" />
            <div className="absolute bottom-0 left-1/2 h-28 w-17.5 -translate-x-1/2 rounded-t-full border border-white/15 bg-[#294d3b]">
              <div className="absolute bottom-5 right-3 size-1.5 rounded-full bg-[#c4d2a4]" />
            </div>
            <div className="absolute bottom-19 left-[18%] size-12 rounded-t-full border border-white/20 bg-[#d5d9b3]/20" />
            <div className="absolute bottom-19 right-[18%] size-12 rounded-t-full border border-white/20 bg-[#d5d9b3]/20" />
          </div>
          <div className="absolute -bottom-1 left-1/2 h-5 w-[94%] -translate-x-1/2 rounded-[50%] bg-[#c2d5a5]/15 blur-md" />
        </div>
      </div>

      <div className="relative z-10 mt-6 flex shrink-0 items-end justify-between gap-6 border-t border-white/15 pt-4">
        <div>
          <p className="text-sm font-medium text-[#e4ece1]">
            A place to begin again
          </p>
          <p className="mt-1 text-xs text-[#c2d2c3]/65">
            Thoughtfully found. Happily lived.
          </p>
        </div>
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-[#d2dfc9]">
          <KeyRound aria-hidden="true" className="size-4" />
        </span>
      </div>
    </aside>
  );
}
