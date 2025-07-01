import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from '@future-house/feathers';
import {
  House,
  Inbox,
  Calendar,
  Search,
  Settings,
  User,
  Plus,
  Ellipsis,
  File,
  Folder,
} from '@future-house/feathers/icons';

export default function SidebarExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sidebar Component</CardTitle>
        <CardDescription>
          A comprehensive sidebar with collapsible states, nested menus, and
          responsive design
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[600px] rounded-lg border">
          <SidebarProvider>
            <div className="flex h-full w-full">
              <Sidebar collapsible="icon">
                <SidebarHeader>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton size="lg" asChild>
                        <a href="#">
                          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                            <House className="size-4" />
                          </div>
                          <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-semibold">
                              Feathers UI
                            </span>
                            <span className="truncate text-xs">
                              Component Library
                            </span>
                          </div>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarHeader>
                <SidebarContent>
                  <SidebarGroup>
                    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton tooltip="Dashboard" asChild>
                          <a href="#">
                            <House />
                            <span>Dashboard</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton tooltip="Inbox" asChild>
                          <a href="#">
                            <Inbox />
                            <span>Inbox</span>
                            <SidebarMenuBadge>12</SidebarMenuBadge>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton tooltip="Calendar" asChild>
                          <a href="#">
                            <Calendar />
                            <span>Calendar</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton tooltip="Search" asChild>
                          <a href="#">
                            <Search />
                            <span>Search</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroup>
                  <SidebarSeparator />
                  <SidebarGroup>
                    <SidebarGroupLabel>Projects</SidebarGroupLabel>
                    <SidebarGroupAction>
                      <Plus />
                      <span className="sr-only">Add Project</span>
                    </SidebarGroupAction>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton tooltip="Design System" asChild>
                          <a href="#">
                            <Folder />
                            <span>Design System</span>
                          </a>
                        </SidebarMenuButton>
                        <SidebarMenuAction showOnHover>
                          <Ellipsis />
                          <span className="sr-only">More</span>
                        </SidebarMenuAction>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton tooltip="Website" asChild>
                          <a href="#">
                            <File />
                            <span>Website</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroup>
                </SidebarContent>
                <SidebarFooter>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip="Settings" asChild>
                        <a href="#">
                          <Settings />
                          <span>Settings</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip="User Profile" asChild>
                        <a href="#">
                          <User />
                          <span>John Doe</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarFooter>
              </Sidebar>
              <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                  <SidebarTrigger className="-ml-1" />
                  <div className="bg-border mx-2 h-4 w-px" />
                  <h1 className="text-lg font-semibold">Sidebar Demo</h1>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4">
                  <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                    <div className="bg-muted/50 aspect-video rounded-xl" />
                    <div className="bg-muted/50 aspect-video rounded-xl" />
                  </div>
                  <div className="bg-muted/50 min-h-[100px] flex-1 rounded-xl" />
                </div>
              </SidebarInset>
              <SidebarRail />
            </div>
          </SidebarProvider>
        </div>
        <div className="text-muted-foreground mt-4 text-sm">
          <p>
            <strong>Features:</strong> Collapsible to icon mode, tooltips on
            hover, keyboard shortcut (Ctrl/Cmd + B), responsive mobile design,
            badge notifications, nested menu support, and customizable variants.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
