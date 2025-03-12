import AppSidebar from "@/components/AppSidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Outlet } from "react-router"
import { TooltipProvider } from "@/components/ui/tooltip"


const AppLayout = () => {
  return (
    <SidebarProvider>
      <TooltipProvider 
        delayDuration={500}
        disableHoverableContent
      >
        <AppSidebar />
        <SidebarTrigger />
        <div>Applayout</div>
        <Outlet />
      </TooltipProvider>
    </SidebarProvider>
  )
}

export default AppLayout
