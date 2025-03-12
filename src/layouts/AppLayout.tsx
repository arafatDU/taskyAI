import AppSidebar from "@/components/AppSidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Outlet } from "react-router"


const AppLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <div>Applayout</div>
      <Outlet />
    </SidebarProvider>
  )
}

export default AppLayout
