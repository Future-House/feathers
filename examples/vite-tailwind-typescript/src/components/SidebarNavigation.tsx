import { Link } from 'react-router-dom';
import { House, Package2, Palette } from '@future-house/feathers/icons';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  ThemeToggle,
} from '@future-house/feathers';

function SidebarNavigation() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 p-4">
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate text-lg font-semibold">
              @futurehouse/feathers
            </span>
            <span className="truncate text-xs">Component Library</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/">
                    <House className="h-4 w-4" />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/kitchen-sink">
                    <Package2 className="h-4 w-4" />
                    <span>Kitchen Sink</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/custom-theme">
                    <Palette className="h-4 w-4" />
                    <span>Custom Theme</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="ml-auto">
          <ThemeToggle variant="dropdown" />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export default SidebarNavigation;
