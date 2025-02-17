"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home, User } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "User",
    url: "/dashboard/user",
    icon: User,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="bg-blue-50">
        <SidebarHeader>
          <Link href="/dashboard">App Sidebar</Link>
        </SidebarHeader>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className="flex items-center gap-2">
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-blue-50">
        <Button
          variant="outline"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Log Out
        </Button>
        <div className="text-xs text-center mb-5">
          © {new Date().getFullYear()} Your Company
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
