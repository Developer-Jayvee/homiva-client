import Link from "next/link";
import {  House, Sparkles } from "lucide-react";
import { AuthIllustrationPanel } from "@/src/components/auth/auth-illustration-panel";
import LoginForm from "./_component/login-form";

export default function LoginPage() {


  return (
    <main className="mx-auto grid min-h-screen w-full max-w-360 grid-cols-1 gap-8 px-5 py-5 sm:px-8 sm:py-8 lg:h-dvh lg:min-h-0 lg:grid-cols-[1fr_0.95fr] lg:gap-10 lg:overflow-hidden lg:px-12 lg:py-8">
      <section className="flex flex-col px-1 sm:px-5 lg:min-h-0 lg:px-8">
        <Link
          href="/"
          aria-label="Homiva home"
          className="flex w-fit items-center gap-2.5 rounded-lg text-[#18372e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3c735c]"
        >
          <span className="flex size-10 items-center justify-center rounded-[14px] bg-[#234b3b] text-white shadow-sm">
            <House aria-hidden="true" className="size-4.75" strokeWidth={2.2} />
          </span>
          <span className="text-[1.2rem] font-semibold tracking-[-0.06em]">
            homiva<span className="text-[#78a27d]">.</span>
          </span>
        </Link>

        <div className="flex flex-1 items-center justify-center py-14 sm:py-20 lg:min-h-0 lg:py-0">
          <div className="w-full max-w-105">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#dce6db] bg-white/70 px-3 py-1.5 text-xs font-medium text-[#557261] shadow-[0_2px_8px_rgb(24_55_46/4%)]">
              <Sparkles aria-hidden="true" className="size-3.5 text-[#8ba36f]" />
              A little closer to home
            </div>
            <h1 className="text-[2.4rem] font-semibold leading-[1.08] tracking-[-0.055em] text-[#18372e] sm:text-[2.8rem]">
              Welcome
              <br />
              <span className="text-[#7b9b7c]">back.</span>
            </h1>
            <p className="mt-4 max-w-sm text-[0.98rem] leading-7 text-[#738078]">
              Sign in to pick up where you left off and make yourself at home.
            </p>

            <LoginForm/>

            <div className="mt-7 flex items-center gap-4 text-xs text-[#a0aaa1]">
              <span className="h-px flex-1 bg-[#e2e8df]" />
              <span>YOUR HOME JOURNEY, MADE SIMPLE</span>
              <span className="h-px flex-1 bg-[#e2e8df]" />
            </div>
            <p className="mt-7 text-center text-sm text-[#77837a]">
              New to Homiva?{" "}
              <Link
                href="/register"
                className="rounded font-semibold text-[#3d684d] transition hover:text-[#234b3b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#739477]"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>

        <p className="pb-1 text-center text-xs text-[#9aa59b] lg:text-left">
          © 2026 Homiva. Made for finding your place.
        </p>
      </section>
      <AuthIllustrationPanel />
    </main>
  );
}
