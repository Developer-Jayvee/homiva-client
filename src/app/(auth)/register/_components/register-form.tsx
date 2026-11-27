"use client";

import { AuthTextField } from "@/src/components/auth/auth-text-field";
import { Button } from "@/src/components/ui/button";
import { useRegisterMutation } from "@/src/hooks/mutations/use-auth.mutation";
import { getApiErrorMessage } from "@/src/lib/helpers/errors";
import {
  RegisterFormData,
  registerSchema,
} from "@/src/types/auth/request.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const router = useRouter()
  const [message, setMessage] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterFormData>({ resolver: zodResolver(registerSchema) });
  const registerMutation = useRegisterMutation();

  const onSubmit = async (data: RegisterFormData) => {
    setMessage("");
    try {
      const response = await registerMutation.mutateAsync(data);
      if (response?.status === false || response?.error) {
        setMessage(getApiErrorMessage(response));
      } else {
        router.replace('login')
      } 
      
    } catch (error) {
      setMessage(getApiErrorMessage(error));
    }
  };

  return (
    <>
      <form className="mt-6 space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="space-y-3.5">
          <legend className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#68816e]">
            Your information
          </legend>
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <AuthTextField
              id="first-name"
              label="First name"
              autoComplete="given-name"
              placeholder="First name"
              {...register("first_name")}
            />
            {errors.first_name?.message && (
              <p
                id="email-error"
                role="alert"
                className="-mt-3 text-sm text-red-600"
              >
                {errors.first_name.message}
              </p>
            )}
            <AuthTextField
              id="last-name"
              label="Last name"
              autoComplete="family-name"
              placeholder="Last name"
              {...register("last_name")}
            />
            {errors.last_name?.message && (
              <p
                id="email-error"
                role="alert"
                className="-mt-3 text-sm text-red-600"
              >
                {errors.last_name.message}
              </p>
            )}
            <AuthTextField
              id="address"
              label="Address"
              autoComplete="street-address"
              placeholder="Street address"
              containerClassName="sm:col-span-2"
              {...register("address")}
            />
            {errors.address?.message && (
              <p
                id="email-error"
                role="alert"
                className="-mt-3 text-sm text-red-600"
              >
                {errors.address.message}
              </p>
            )}
            <AuthTextField
              id="email"
              label="Email address"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              {...register("email")}
            />
            {errors.email?.message && (
              <p
                id="email-error"
                role="alert"
                className="-mt-3 text-sm text-red-600"
              >
                {errors.email.message}
              </p>
            )}
            <AuthTextField
              id="contact-number"
              label="Contact number"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="Your phone number"
              {...register("contact_no")}
            />
            {errors.contact_no?.message && (
              <p
                id="email-error"
                role="alert"
                className="-mt-3 text-sm text-red-600"
              >
                {errors.contact_no.message}
              </p>
            )}
          </div>
        </fieldset>

        <fieldset className="space-y-3.5 border-t border-[#e1e8df] pt-4">
          <legend className="mb-3 pt-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#68816e]">
            Organization information
          </legend>
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <AuthTextField
              id="organization-name"
              label="Organization name"
              autoComplete="organization"
              placeholder="Organization name"
              {...register("organization.name")}
            />
            {errors.organization?.name?.message && (
              <p
                id="email-error"
                role="alert"
                className="-mt-3 text-sm text-red-600"
              >
                {errors.organization?.name.message}
              </p>
            )}
            <AuthTextField
              id="organization-address"
              label="Organization address"
              autoComplete="street-address"
              placeholder="Organization street address"
              {...register("organization.address")}
            />
            {errors.organization?.address?.message && (
              <p
                id="email-error"
                role="alert"
                className="-mt-3 text-sm text-red-600"
              >
                {errors.organization?.address.message}
              </p>
            )}
            <AuthTextField
              id="organization-contact-number"
              label="Organization contact number"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="Organization phone number"
              containerClassName="sm:col-span-2"
              {...register("organization.contact_no")}
            />
            {errors.organization?.contact_no?.message && (
              <p
                id="email-error"
                role="alert"
                className="-mt-3 text-sm text-red-600"
              >
                {errors.organization?.contact_no.message}
              </p>
            )}
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
