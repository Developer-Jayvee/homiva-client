import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f7f8f4] text-[#18372e]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 -top-56 size-136 rounded-full bg-[#dcece0]/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-64 -right-48 size-144 rounded-full bg-[#edf0d9]/70 blur-3xl"
      />
      <div className="relative min-h-screen">{children}</div>
    </div>
  );
}
