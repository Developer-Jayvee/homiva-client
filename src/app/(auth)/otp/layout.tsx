"use client"
import { useOtpEligibility } from "@/src/hooks/queries/use-otp.query";
import { useRouter } from "next/navigation";
import React from "react";


export default function OtpLayout({ children } : { children: React.ReactNode}) {
    const otpEligibilityQuery = useOtpEligibility();

    const router = useRouter();

    if(otpEligibilityQuery.error) {
        router.replace('login');
    }

    return children;
}