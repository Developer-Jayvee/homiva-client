"use client";

import Link from "next/link";
import { ArrowRight, House, ShieldCheck, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/src/components/ui/button";
import { AuthIllustrationPanel } from "@/src/components/auth/auth-illustration-panel";

export default function OtpPage() {
  const [digits, setDigits] = useState<string[]>(Array(6).fill(""));
  const [message, setMessage] = useState("");
  const [seconds, setSeconds] = useState(30);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (seconds <= 0) return;

    const timer = window.setInterval(() => {
      setSeconds((current) => {
        if (current <= 1) {
          window.clearInterval(timer);
          return 0;
        }
        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [seconds > 0]);

  const updateDigit = (index: number, value: string) => {
    const digit = value.replace(/[^0-9]/g, "").slice(-1);
    setDigits((current) => {
      const next = [...current];
      next[index] = digit;
      return next;
    });

    if (digit && index < 5) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (event.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (event.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const pasted = event.clipboardData
      .getData("text")
      .replace(/[^0-9]/g, "")
      .slice(0, 6);

    if (!pasted) return;

    setDigits((current) => {
      const next = [...current];
      pasted.split("").forEach((digit, index) => {
        next[index] = digit;
      });
      return next;
    });
    inputRefs.current[Math.min(pasted.length, 6) - 1]?.focus();
  };

  const resendCode = () => {
    if (seconds > 0) return;
    setMessage("A new verification code has been sent.");
    setSeconds(30);
  };

  const verifyCode = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (digits.some((digit) => !digit)) {
      setMessage("Please enter all 6 digits.");
      return;
    }

    setMessage("");
  };

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
              One last little step
            </div>

            <h1 className="text-[2.4rem] font-semibold leading-[1.08] tracking-[-0.055em] text-[#18372e] sm:text-[2.8rem]">
              Verify your
              <br />
              <span className="text-[#7b9b7c]">account.</span>
            </h1>
            <p className="mt-4 max-w-sm text-[0.98rem] leading-7 text-[#738078]">
              Enter the 6-digit code we sent to keep your Homiva account secure.
            </p>

            <form className="mt-9 space-y-5" onSubmit={verifyCode}>
              <fieldset>
                <legend className="mb-3 text-sm font-medium text-[#2c4439]">
                  Verification code
                </legend>
                <div className="grid grid-cols-6 gap-2 sm:gap-3">
                  {digits.map((digit, index) => (
                    <input
                      key={index}
                      ref={(element) => {
                        inputRefs.current[index] = element;
                      }}
                      id={`otp-${index}`}
                      name={`otp-${index}`}
                      type="text"
                      inputMode="numeric"
                      autoComplete={index === 0 ? "one-time-code" : "off"}
                      pattern="[0-9]*"
                      maxLength={1}
                      value={digit}
                      aria-label={`Digit ${index + 1} of 6`}
                      onChange={(event) => updateDigit(index, event.target.value)}
                      onKeyDown={(event) => handleKeyDown(index, event)}
                      onPaste={handlePaste}
                      className="h-14 w-full rounded-xl border border-[#dfe5dc] bg-white/85 text-center text-xl font-semibold text-[#18372e] shadow-[0_2px_8px_rgb(24_55_46/3%)] outline-none transition hover:border-[#bdcdbd] focus:border-[#739477] focus:ring-4 focus:ring-[#739477]/15 sm:h-16"
                    />
                  ))}
                </div>
              </fieldset>

              <Button
                type="submit"
                className="h-13.5 w-full rounded-xl bg-[#234b3b] text-[0.95rem] font-semibold text-white shadow-[0_8px_18px_rgb(35_75_59/16%)] transition hover:bg-[#183d2e]"
              >
                Verify code
                <ArrowRight aria-hidden="true" className="ml-1 size-4" />
              </Button>

              <p
                role="alert"
                aria-live="polite"
                className="min-h-5 text-center text-sm leading-5 text-[#69776e]"
              >
                {message}
              </p>
            </form>

            <div className="mt-2 flex items-center justify-center gap-2 text-sm text-[#77837a]">
              <span>Didn&apos;t receive the code?</span>
              <button
                type="button"
                onClick={resendCode}
                disabled={seconds > 0}
                className="rounded font-semibold text-[#3d684d] transition hover:text-[#234b3b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#739477] disabled:cursor-not-allowed disabled:text-[#a0aaa1]"
              >
                {seconds > 0 ? `Resend in ${seconds}s` : "Resend code"}
              </button>
            </div>

            <div className="mt-7 flex items-center gap-4 text-xs text-[#a0aaa1]">
              <span className="h-px flex-1 bg-[#e2e8df]" />
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck aria-hidden="true" className="size-3.5" />
                SECURE VERIFICATION
              </span>
              <span className="h-px flex-1 bg-[#e2e8df]" />
            </div>

            <p className="mt-7 text-center text-sm text-[#77837a]">
              Back to{" "}
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
