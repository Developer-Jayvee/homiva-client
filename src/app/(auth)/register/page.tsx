"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, House, Sparkles } from "lucide-react";
import { AuthIllustrationPanel } from "@/src/components/auth/auth-illustration-panel";
import { AuthTextField } from "@/src/components/auth/auth-text-field";
import { Button } from "@/src/components/ui/button";

export default function RegisterPage() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Registration isn’t connected yet. Your details haven’t been sent.");
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

        <div className="scrollbar-hidden flex flex-1 items-center justify-center py-10 lg:min-h-0 lg:items-start lg:overflow-y-auto lg:overscroll-contain lg:py-5">
          <div className="w-full max-w-105">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dce6db] bg-white/70 px-3 py-1.5 text-xs font-medium text-[#557261] shadow-[0_2px_8px_rgb(24_55_46/4%)]">
              <Sparkles aria-hidden="true" className="size-3.5 text-[#8ba36f]" />
              Find your place with Homiva
            </div>
            <h1 className="text-[2.4rem] font-semibold leading-[1.08] tracking-[-0.055em] text-[#18372e] sm:text-[2.8rem]">
              Let’s get you
              <br />
              <span className="text-[#7b9b7c]">settled in.</span>
            </h1>
            <p className="mt-3 max-w-sm text-[0.98rem] leading-7 text-[#738078]">
              Tell us a little about you and your organization to get started.
            </p>

            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
              <fieldset className="space-y-3.5">
                <legend className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#68816e]">
                  Your information
                </legend>
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <AuthTextField
                    id="first-name"
                    name="firstName"
                    label="First name"
                    autoComplete="given-name"
                    placeholder="First name"
                    required
                  />
                  <AuthTextField
                    id="last-name"
                    name="lastName"
                    label="Last name"
                    autoComplete="family-name"
                    placeholder="Last name"
                    required
                  />
                  <AuthTextField
                    id="address"
                    name="address"
                    label="Address"
                    autoComplete="street-address"
                    placeholder="Street address"
                    containerClassName="sm:col-span-2"
                    required
                  />
                  <AuthTextField
                    id="email"
                    name="email"
                    label="Email address"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                  />
                  <AuthTextField
                    id="contact-number"
                    name="contactNumber"
                    label="Contact number"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="Your phone number"
                    required
                  />
                </div>
              </fieldset>

              <fieldset className="space-y-3.5 border-t border-[#e1e8df] pt-4">
                <legend className="mb-3 pt-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#68816e]">
                  Organization information
                </legend>
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <AuthTextField
                    id="organization-name"
                    name="organizationName"
                    label="Organization name"
                    autoComplete="organization"
                    placeholder="Organization name"
                    required
                  />
                  <AuthTextField
                    id="organization-address"
                    name="organizationAddress"
                    label="Organization address"
                    autoComplete="street-address"
                    placeholder="Organization street address"
                    required
                  />
                  <AuthTextField
                    id="organization-contact-number"
                    name="organizationContactNumber"
                    label="Organization contact number"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="Organization phone number"
                    containerClassName="sm:col-span-2"
                    required
                  />
                </div>
              </fieldset>

              <Button
                type="submit"
                className="h-13.5 w-full rounded-xl bg-[#234b3b] text-[0.95rem] font-semibold text-white shadow-[0_8px_18px_rgb(35_75_59/16%)] transition hover:bg-[#183d2e]"
              >
                Create account
                <ArrowRight aria-hidden="true" className="ml-1 size-4" />
              </Button>
              <p
                aria-live="polite"
                className="flex h-10 items-center justify-center px-2 text-center text-sm leading-5 text-[#718078]"
              >
                {message}
              </p>
            </form>

            <p className="mt-1 text-center text-sm text-[#77837a]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="rounded font-semibold text-[#3d684d] transition hover:text-[#234b3b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#739477]"
              >
                Sign in
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
