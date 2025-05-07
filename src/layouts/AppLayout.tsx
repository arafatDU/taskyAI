import AppSidebar from "@/components/AppSidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Outlet } from "react-router"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/toaster"


const AppLayout = () => {
  return (
    <>
      <SidebarProvider>
        <TooltipProvider 
          delayDuration={500}
          disableHoverableContent
        >
          <AppSidebar />
          
          <main className="flex-1">
            <Outlet />
          </main>
        </TooltipProvider>
      </SidebarProvider>

      <Toaster />
    </>
  )
}

export default AppLayout
