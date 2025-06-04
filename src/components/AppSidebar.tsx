
import { ChartPie, FileText, User, LogOut } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Portfolio",
    icon: ChartPie,
    active: true,
  },
  {
    title: "Analytics",
    icon: FileText,
    active: false,
  },
  {
    title: "Profile",
    icon: User,
    active: false,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-slate-800">
      <SidebarHeader className="border-b border-slate-800 p-6">
        <h2 className="text-xl font-bold gradient-crypto bg-clip-text text-transparent">
          MultiTrack
        </h2>
      </SidebarHeader>
      
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-400">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className={`${item.active ? 'bg-blue-600/20 text-blue-400' : 'text-slate-300 hover:text-white hover:bg-slate-800'}`}
                  >
                    <a href="#" className="flex items-center gap-3">
                      <item.icon size={20} />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t border-slate-800 p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="text-slate-400 hover:text-red-400">
              <a href="#" className="flex items-center gap-3">
                <LogOut size={20} />
                <span>Disconnect</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
