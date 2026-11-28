"use client";

import { useVerifyMe } from "@/src/hooks/queries/use-auth.query";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function VerifyUser({
    children,
}: {
    children: React.ReactNode;
}) {
    const verificationQuery = useVerifyMe();
    const router = useRouter();

    useEffect(() => {
        if (verificationQuery.isError) {
            router.replace("/login");
        }
    }, [verificationQuery.isError, router]);

    if (verificationQuery.isPending || verificationQuery.isError) {
        return null;
    }

    return <>{children}</>;
}