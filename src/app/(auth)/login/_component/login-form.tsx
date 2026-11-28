"use client";

import { AuthTextField } from "@/src/components/auth/auth-text-field";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginFormData, loginSchema } from "@/src/types/auth/request.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "@/src/hooks/mutations/use-auth.mutation";
import { getApiErrorMessage } from "@/src/lib/helpers/errors";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const loginMutation = useLoginMutation();
  const router = useRouter()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = async (data: LoginFormData) => {
    setMessage("");

    try {
      const response = await loginMutation.mutateAsync(data);

      
      if (response?.status === false || response?.error) {
        setMessage(getApiErrorMessage(response));
      }

      return router.replace('otp')
    } catch (error) {
      setMessage(getApiErrorMessage(error));
    }
  };

  return (
    <>
      <form className="mt-9 space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <AuthTextField
          id="email"
          label="Email address"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : ""}
          {...register("email")}
        />
        {errors.email?.message && (
          <p id="email-error" role="alert" className="-mt-3 text-sm text-red-600">
            {errors.email.message}
          </p>
        )}
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-3">
            <label
              htmlFor="password"
              className="text-sm font-medium text-[#2c4439]"
            >
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
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Enter your password"
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? "password-error" : undefined}
              className={`h-13.5 w-full rounded-xl border bg-white/85 px-4 pr-12 text-[0.95rem] text-[#18372e] shadow-[0_2px_8px_rgb(24_55_46/3%)] outline-none transition placeholder:text-[#a7b0a8] hover:border-[#bdcdbd] focus:ring-4 ${errors.password ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : "border-[#dfe5dc] focus:border-[#739477] focus:ring-[#739477]/15"}`}
              {...register("password")}
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
          {errors.password?.message && (
            <p id="password-error" role="alert" className="text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
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
          disabled={loginMutation.isPending}
          className="h-13.5 w-full rounded-xl bg-[#234b3b]"
        >
          {loginMutation.isPending ? "Signing in..." : "Sign in"}
          <ArrowRight aria-hidden="true" className="ml-1 size-4" />
        </Button>
        <p
          role="alert"
          aria-live="assertive"
          className="flex h-10 items-center justify-center px-2 text-center text-sm leading-5 text-red-600"
        >
          {message}
        </p>
      </form>
    </>
  );
}
