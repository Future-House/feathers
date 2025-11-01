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
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Badge,
  ThemeToggle,
} from '@future-house/feathers';
import {
  Home,
  Package,
  Settings,
  UserMultiple,
  ChevronRight,
  Add,
  UserAvatar,
  Terminal,
  OverflowMenuVertical,
  Notification,
  Calendar,
  Search,
  Email,
  Folder,
  Document,
  Archive,
  TrashCan,
} from '@future-house/feathers/icons';

function DemoSidebar() {
  return (
    <Sidebar id="demo-sidebar" className="relative">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                    <Terminal className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">Feathers Inc</span>
                    <span className="truncate text-xs">Enterprise</span>
                  </div>
                  <OverflowMenuVertical className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                align="start"
                side="bottom"
                sideOffset={4}
              >
                <DropdownMenuItem className="gap-2 p-2">
                  <div className="flex size-6 items-center justify-center rounded-sm border">
                    <Terminal className="size-4 shrink-0" />
                  </div>
                  Feathers Inc
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2 p-2">
                  <div className="flex size-6 items-center justify-center rounded-sm border">
                    <Add className="size-4 shrink-0" />
                  </div>
                  Add Team
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="House">
                <Home />
                <span>House</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Users">
                <UserMultiple />
                <span>Users</span>
                <Badge className="ml-auto">12</Badge>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Messages">
                <Email />
                <span>Messages</span>
                <Badge variant="destructive" className="ml-auto">
                  3
                </Badge>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarMenu>
            <Collapsible asChild defaultOpen>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Design System">
                  <a href="#">
                    <Package />
                    <span>Design System</span>
                  </a>
                </SidebarMenuButton>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    variant="outline"
                    size="sm"
                    className="ml-auto"
                  >
                    <ChevronRight className="transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <a href="#">
                          <Document />
                          <span>Documentation</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <a href="#">
                          <Package />
                          <span>Components</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <a href="#">
                          <Settings />
                          <span>Configuration</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>

            <Collapsible asChild>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Marketing Site">
                  <a href="#">
                    <Folder />
                    <span>Marketing Site</span>
                  </a>
                </SidebarMenuButton>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    variant="outline"
                    size="sm"
                    className="ml-auto"
                  >
                    <ChevronRight className="transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <a href="#">
                          <Document />
                          <span>Landing Page</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <a href="#">
                          <Document />
                          <span>Pricing</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>Recent</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Calendar />
                <span>Meeting Notes</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Search />
                <span>Search Results</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Notification />
                <span>Notifications</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <UserAvatar />
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">John Doe</span>
                    <span className="truncate text-xs">john@example.com</span>
                  </div>
                  <OverflowMenuVertical className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuItem>
                  <Settings />
                  Account
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Archive />
                  Billing
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <TrashCan />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

function DemoContent() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
      </div>
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min">
        <div className="p-4">
          <h2 className="text-lg font-semibold">Dashboard Content</h2>
          <p className="text-muted-foreground text-sm">
            This is the main content area. The sidebar can be toggled using the
            trigger button or the keyboard shortcut (⌘B on Mac, Ctrl+B on
            Windows/Linux).
          </p>
        </div>
      </div>
    </div>
  );
}

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
        <div className="bg-background h-[600px] overflow-hidden rounded-lg border">
          <SidebarProvider>
            <div className="flex h-full w-full">
              <DemoSidebar />
              <SidebarInset className="flex flex-col">
                <header className="bg-background flex h-12 shrink-0 items-center gap-2 border-b px-4">
                  <SidebarTrigger className="-ml-1" />
                  <div className="ml-auto">
                    <ThemeToggle />
                  </div>
                </header>
                <main className="flex-1 overflow-auto">
                  <DemoContent />
                </main>
              </SidebarInset>
            </div>
          </SidebarProvider>
        </div>
        <div className="text-muted-foreground mt-4 text-sm">
          <p>
            <strong>Features:</strong> Collapsible to icon mode, tooltips on
            hover, keyboard shortcut (Ctrl/Cmd + B), responsive mobile design,
            badge notifications, nested menu support, customizable variants, and
            synchronized dark/light theme support.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
