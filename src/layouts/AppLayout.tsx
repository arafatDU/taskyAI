import AppSidebar from "@/components/AppSidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Outlet, useNavigation } from "react-router"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"


const AppLayout = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading' && !navigation.formData;
  return (
    <>
      <SidebarProvider>
        <TooltipProvider 
          delayDuration={500}
          disableHoverableContent
        >
          <AppSidebar />
          
          <main className={cn("flex-1", 
            isLoading && "pointer-events-none opacity-50",
          )}>
            <Outlet />
          </main>
        </TooltipProvider>
      </SidebarProvider>

      <Toaster />
    </>
  )
}

export default AppLayout
