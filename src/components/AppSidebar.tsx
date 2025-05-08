import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Logo from "@/components/Logo"
import { Link, useLocation } from "react-router"
import { cn } from "@/lib/utils"
import { UserButton } from "@clerk/clerk-react"
import { ChevronRight, CirclePlus, Plus } from "lucide-react"

import { SIDEBAR_LINKS } from "@/constants"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

import { useSidebar } from "@/components/ui/sidebar"

import TaskFormDialog from "@/components/TaskFormDialog"

const AppSidebar = () => {

  const location = useLocation();
  const { isMobile, setOpenMobile } = useSidebar();

  return (
    <Sidebar>
      <SidebarHeader>
        <Link 
        to="/app/inbox"
        className="p-2"
        >
          <Logo />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Task create button */}
              <SidebarMenuItem>
                <TaskFormDialog>
                  <SidebarMenuButton className="!text-primary">
                    <CirclePlus /> Add Task
                  </SidebarMenuButton>
                </TaskFormDialog>
              </SidebarMenuItem>

              {/* Sidebar links */}
                {
                SIDEBAR_LINKS.map((item, index) => (
                  <SidebarMenuItem key={index}>
                  <SidebarMenuButton 
                    asChild 
                    className={cn(
                      "hover:bg-accent-foreground/10",
                      location.pathname === item.href && "bg-accent-foreground/10",
                      
                    )}
                    onClick={() => {
                      if (isMobile) {
                        setOpenMobile(false);
                      }
                    }}
                  >
                    <Link to={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>

                  <SidebarMenuBadge>0</SidebarMenuBadge>
                  </SidebarMenuItem>
                ))
                }
            </SidebarMenu>
          </SidebarGroupContent>
        <SidebarGroup />

        {/* All projects */}
        <Collapsible 
          defaultOpen 
          className="group/collapsible"
        >
          <SidebarGroup>
            <SidebarGroupLabel 
              asChild
              className="text-muted-foreground text-sm
              text-sidebar-foreground hover:bg-primary/10 hover:text-white"
            >
              <CollapsibleTrigger >
                <ChevronRight className="me-2 transition-transform 
                group-data-[state=open]/collapsible:rotate-90" /> 
                Projects
              </CollapsibleTrigger>
            </SidebarGroupLabel>

            <Tooltip>
              <TooltipTrigger asChild>
                <SidebarGroupAction aria-label="Add Project">
                  <Plus /> 
                </SidebarGroupAction>
              </TooltipTrigger>

              <TooltipContent side="right">
                Add Project
              </TooltipContent>
            </Tooltip>
            

            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <p className="text-muted-foreground text-sm p-2">
                      Click + to add some projects
                    </p>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        
      </SidebarContent>
      <SidebarFooter>
        <UserButton 
          showName
          appearance={{
            elements: {
              rootBox: 'w-full',
              userButtonTrigger: '!shadow-none w-full justify-start p-2 rounded-md hover:bg-primary/10',
              userButtonBox: 'flex-row-reverse shadow-none gap-2',
              userButtonOuterIdentifier: 'ps-0',
              popoverBox: 'pointer-events-auto',
            },
          }}
        />
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
