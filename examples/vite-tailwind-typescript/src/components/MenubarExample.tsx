import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
  MenubarShortcut,
} from '@future-house/feathers';

export default function MenubarExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Menubar Component</CardTitle>
        <CardDescription>
          Desktop application-style menu bar with dropdowns, shortcuts, and
          nested menus
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Application Menubar
          </h3>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New File
                  <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Open File
                  <MenubarShortcut>⌘O</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Save
                  <MenubarShortcut>⌘S</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Copy
                  <MenubarShortcut>⌘C</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Paste
                  <MenubarShortcut>⌘V</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Zoom In</MenubarItem>
                <MenubarItem>Zoom Out</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Full Screen</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Help</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Documentation</MenubarItem>
                <MenubarItem>Support</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>About</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Simple Menubar
          </h3>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Actions</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>New</MenubarItem>
                <MenubarItem>Edit</MenubarItem>
                <MenubarItem>Delete</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Settings</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Preferences</MenubarItem>
                <MenubarItem>Account</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </CardContent>
    </Card>
  );
}