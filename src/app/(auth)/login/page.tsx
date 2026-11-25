"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, Eye, EyeOff, House, Sparkles } from "lucide-react";
import { AuthIllustrationPanel } from "@/src/components/auth/auth-illustration-panel";
import { AuthTextField } from "@/src/components/auth/auth-text-field";
import { Button } from "@/src/components/ui/button";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Sign-in isn’t connected yet. Your details haven’t been sent.");
  }

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

            <form className="mt-9 space-y-5" onSubmit={handleSubmit}>
              <AuthTextField
                id="email"
                name="email"
                label="Email address"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
              />
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <label htmlFor="password" className="text-sm font-medium text-[#2c4439]">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setMessage("Password reset isn’t available yet.")}
                    className="rounded text-sm font-medium text-[#66846c] transition hover:text-[#294b39] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#739477]"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    required
                    className="h-13.5 w-full rounded-xl border border-[#dfe5dc] bg-white/85 px-4 pr-12 text-[0.95rem] text-[#18372e] shadow-[0_2px_8px_rgb(24_55_46/3%)] outline-none transition placeholder:text-[#a7b0a8] hover:border-[#bdcdbd] focus:border-[#739477] focus:ring-4 focus:ring-[#739477]/15"
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    aria-pressed={showPassword}
                    onClick={() => setShowPassword((visible) => !visible)}
                    className="absolute inset-y-0 right-0 flex w-12 items-center justify-center rounded-r-xl text-[#87948a] transition hover:text-[#385a46] focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[#739477]"
                  >
                    {showPassword ? (
                      <EyeOff aria-hidden="true" className="size-4.5" />
                    ) : (
                      <Eye aria-hidden="true" className="size-4.5" />
                    )}
                  </button>
                </div>
              </div>

              <label className="flex w-fit cursor-pointer items-center gap-2.5 py-1 text-sm text-[#69776e]">
                <input
                  name="remember"
                  type="checkbox"
                  className="size-4 rounded border-[#cbd6ca] accent-[#315d45] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#739477]"
                />
                Keep me signed in
              </label>
              <Button
                type="submit"
                className="h-13.5 w-full rounded-xl bg-[#234b3b] text-[0.95rem] font-semibold text-white shadow-[0_8px_18px_rgb(35_75_59/16%)] transition hover:bg-[#183d2e]"
              >
                Sign in <ArrowRight aria-hidden="true" className="ml-1 size-4" />
              </Button>
              <p
                aria-live="polite"
                className="flex h-10 items-center justify-center px-2 text-center text-sm leading-5 text-[#718078]"
              >
                {message}
              </p>
            </form>

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
