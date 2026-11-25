import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Create an account | Homiva",
  description: "Create a Homiva account for yourself and your organization.",
};

export default function RegisterLayout({ children }: { children: ReactNode }) {
  return children;
}
