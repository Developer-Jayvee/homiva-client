"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import {
  Bell,
  Building2,
  ChevronDown,
  ChevronLeft,
  ClipboardList,
  House,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  Plus,
  Search,
  Settings2,
  Users,
} from "lucide-react";
import { Button } from "@/src/components/ui/button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@/src/components/ui/popover";
import { authService } from "@/src/services/auth.service";
import VerifyUser from "./_components/verifiy-user";
import { useLogoutMutation } from "@/src/hooks/mutations/use-auth.mutation";

const navigation = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Properties", href: "/properties", icon: House, count: "8" },
  { label: "Tenants", href: "/tenants", icon: Users },
  {
    label: "Applications",
    href: "/applications",
    icon: ClipboardList,
    count: "3",
  },
  { label: "Messages", href: "/messages", icon: MessageSquare, count: "2" },
];

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [logoutOpen, setLogoutOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [logoutError, setLogoutError] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const queryClient = useQueryClient();
  const activeItem = navigation.find(({ href }) => pathname.startsWith(href));
  const handleLogout = async () => {
    setIsLoggingOut(true);
    setLogoutError("");

    try {
      await authService.logout();
      queryClient.clear();
      router.replace("/login");
    } catch {
      setLogoutError("Unable to log out. Please try again.");
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <VerifyUser>
      <div className="min-h-screen bg-[#f7f8f4] text-[#24352b]">
        <div className="flex min-h-screen">
          <aside
            className={`flex shrink-0 flex-col border-r border-[#e8ebe3] bg-white transition-[width] duration-200 ${collapsed ? "w-19" : "w-64"}`}
          >
            <div
              className={`flex h-19 items-center border-b border-[#eef0ea] ${collapsed ? "justify-center px-3" : "justify-between px-5"}`}
            >
              <Link
                aria-label="Homiva dashboard"
                className="flex items-center gap-3 overflow-hidden"
                href="/dashboard"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#244a38] text-white">
                  <Building2 aria-hidden="true" className="size-5" />
                </span>
                {!collapsed && (
                  <span className="min-w-0">
                    <span className="block font-semibold tracking-tight text-[#234535]">
                      homiva
                    </span>
                    <span className="block text-[11px] text-[#8b978c]">
                      PROPERTY MANAGER
                    </span>
                  </span>
                )}
              </Link>
              {!collapsed && (
                <Button
                  aria-label="Collapse navigation"
                  className="text-[#7b887e]"
                  onClick={() => setCollapsed(true)}
                  size="icon"
                  variant="ghost"
                >
                  <ChevronLeft />
                </Button>
              )}
            </div>

            {collapsed && (
              <Button
                aria-label="Expand navigation"
                className="mx-auto mt-3 text-[#7b887e]"
                onClick={() => setCollapsed(false)}
                size="icon"
                variant="ghost"
              >
                <Menu />
              </Button>
            )}

            <div className={`mt-7 ${collapsed ? "px-2" : "px-4"}`}>
              {!collapsed && (
                <p className="mb-3 px-3 text-[10px] font-semibold tracking-[0.16em] text-[#a2aaa1]">
                  WORKSPACE
                </p>
              )}
              <nav aria-label="Main navigation" className="space-y-1">
                {navigation.map(({ label, href, icon: Icon, count }) => {
                  const active = pathname.startsWith(href);
                  return (
                    <Link
                      aria-current={active ? "page" : undefined}
                      aria-label={collapsed ? label : undefined}
                      className={`flex h-11 items-center gap-3 rounded-xl text-sm transition-colors ${
                        active
                          ? "bg-[#edf3ec] font-medium text-[#315d43]"
                          : "text-[#758078] hover:bg-[#f6f7f3] hover:text-[#315d43]"
                      } ${collapsed ? "justify-center px-2" : "px-3"}`}
                      href={href}
                      key={href}
                      title={collapsed ? label : undefined}
                    >
                      <Icon aria-hidden="true" className="size-4.5 shrink-0" />
                      {!collapsed && <span className="flex-1">{label}</span>}
                      {!collapsed && count && (
                        <span className="rounded-md bg-white px-2 py-0.5 text-xs text-[#7b887e]">
                          {count}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className={`mt-8 ${collapsed ? "px-2" : "px-4"}`}>
              {!collapsed && (
                <p className="mb-3 px-3 text-[10px] font-semibold tracking-[0.16em] text-[#a2aaa1]">
                  PREFERENCES
                </p>
              )}
              <Link
                aria-label={collapsed ? "Settings" : undefined}
                className={`flex h-11 items-center gap-3 rounded-xl text-sm text-[#758078] transition-colors hover:bg-[#f6f7f3] hover:text-[#315d43] ${collapsed ? "justify-center px-2" : "px-3"}`}
                href="/settings"
                title={collapsed ? "Settings" : undefined}
              >
                <Settings2 aria-hidden="true" className="size-4.5 shrink-0" />
                {!collapsed && <span>Settings</span>}
              </Link>
            </div>

            <div
              className={`mt-auto border-t border-[#eef0ea] p-4 ${collapsed ? "flex justify-center" : ""}`}
            >
              <Popover open={logoutOpen} onOpenChange={setLogoutOpen}>
                <PopoverTrigger
                  aria-label="Open account menu"
                  className={`flex w-full items-center gap-3 rounded-xl text-left outline-none transition-colors hover:bg-[#f6f7f3] focus-visible:ring-2 focus-visible:ring-[#739477] ${collapsed ? "justify-center p-1" : "p-2"}`}
                  onClick={() => setLogoutError("")}
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#e8eee5] text-sm font-semibold text-[#45634a]">
                    AM
                  </span>
                  {!collapsed && (
                    <>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium">
                          Alex Morgan
                        </span>
                        <span className="block truncate text-xs text-[#8b978c]">
                          Property owner
                        </span>
                      </span>
                      <ChevronDown
                        aria-hidden="true"
                        className="size-4 text-[#8b978c]"
                      />
                    </>
                  )}
                </PopoverTrigger>
                <PopoverContent align="start" side="right" className="p-4">
                  <PopoverTitle className="text-sm font-semibold">
                    Sign out of Homiva?
                  </PopoverTitle>
                  <PopoverDescription className="mt-1 text-xs leading-5 text-[#7c887e]">
                    You can sign back in at any time.
                  </PopoverDescription>
                  {logoutError && (
                    <p className="mt-3 text-xs text-red-700" role="alert">
                      {logoutError}
                    </p>
                  )}
                  <div className="mt-4 flex justify-end gap-2">
                    <PopoverClose
                      className="inline-flex h-8 items-center justify-center rounded-lg border border-[#e5e9e2] px-3 text-xs font-medium text-[#68766c] transition-colors hover:bg-[#f6f7f3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#739477]"
                      disabled={isLoggingOut}
                    >
                      Cancel
                    </PopoverClose>
                    <Button
                      className="bg-[#a4473d] text-white hover:bg-[#893a32]"
                      disabled={isLoggingOut}
                      onClick={handleLogout}
                      size="sm"
                    >
                      <LogOut aria-hidden="true" />
                      {isLoggingOut ? "Signing out…" : "Log out"}
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </aside>

          <div className="min-w-0 flex-1">
            <header className="flex h-19 items-center justify-between border-b border-[#e8ebe3] bg-white/80 px-5 sm:px-8">
              <div className="flex items-center gap-3">
                <Button
                  aria-label={
                    collapsed ? "Expand navigation" : "Collapse navigation"
                  }
                  className="text-[#6f7d73]"
                  onClick={() => setCollapsed((value) => !value)}
                  size="icon"
                  variant="ghost"
                >
                  <Menu />
                </Button>
                <div className="hidden h-6 w-px bg-[#e8ebe3] sm:block" />
                <p className="hidden text-sm text-[#89948a] sm:block">
                  Workspace /
                </p>
                <p className="text-sm font-medium">
                  {activeItem?.label ?? "Settings"}
                </p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Button
                  aria-label="Search"
                  className="text-[#6f7d73]"
                  size="icon"
                  variant="ghost"
                >
                  <Search />
                </Button>
                <Button
                  aria-label="Notifications"
                  className="relative text-[#6f7d73]"
                  size="icon"
                  variant="ghost"
                >
                  <Bell />
                  <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-[#c58360] ring-2 ring-white" />
                </Button>
                <Button
                  aria-label="Add property"
                  className="bg-[#315d43] text-white hover:bg-[#244a38] sm:hidden"
                  size="icon"
                >
                  <Plus />
                </Button>
              </div>
            </header>
            <main className="min-w-0">{children}</main>
          </div>
        </div>
      </div>
    </VerifyUser>
  );
}
