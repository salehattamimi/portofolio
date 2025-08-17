import { auth } from "@/auth";
import { AppSidebar } from "./components/app-sidebar"

import {
  SidebarInset,
  SidebarProvider
} from "@/components/ui/sidebar"

export default async function SidebarPage({ children }: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <SidebarProvider>
      <AppSidebar session={session} />
      <SidebarInset>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
