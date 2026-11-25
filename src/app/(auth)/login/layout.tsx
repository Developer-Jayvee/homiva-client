import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Log in | Homiva",
  description: "Log in to your Homiva account and find your place.",
};

export default function LoginLayout({ children }: { children: ReactNode }) {
  return children;
}
