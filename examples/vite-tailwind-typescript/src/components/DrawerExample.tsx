import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@future-house/feathers';
import {
  Menu,
  Settings,
  Plus,
  Pencil,
  Trash2,
} from '@future-house/feathers/icons';

export default function DrawerExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Drawer Components</CardTitle>
        <CardDescription>
          Drawer components for slide-out panels and mobile-friendly navigation
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Drawer direction="bottom">
            <DrawerTrigger asChild>
              <Button variant="outline">Bottom Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Bottom Drawer</DrawerTitle>
                <DrawerDescription>
                  This drawer slides up from the bottom of the screen.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <p className="text-sm">
                  Perfect for mobile interfaces and contextual actions.
                </p>
              </div>
              <DrawerFooter>
                <Button>Action</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          <Drawer direction="left">
            <DrawerTrigger asChild>
              <Button variant="outline">
                <Menu className="mr-2 h-4 w-4" />
                Side Menu
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Navigation Menu</DrawerTitle>
                <DrawerDescription>
                  Browse through different sections.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <nav className="space-y-2">
                  <a
                    href="#"
                    className="hover:bg-accent block rounded px-3 py-2 text-sm"
                  >
                    Dashboard
                  </a>
                  <a
                    href="#"
                    className="hover:bg-accent block rounded px-3 py-2 text-sm"
                  >
                    Projects
                  </a>
                  <a
                    href="#"
                    className="hover:bg-accent block rounded px-3 py-2 text-sm"
                  >
                    Team
                  </a>
                  <a
                    href="#"
                    className="hover:bg-accent block rounded px-3 py-2 text-sm"
                  >
                    Settings
                  </a>
                </nav>
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline" className="w-full">
                    Close Menu
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          <Drawer direction="right">
            <DrawerTrigger asChild>
              <Button>
                <Settings className="mr-2 h-4 w-4" />
                Settings Panel
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Settings</DrawerTitle>
                <DrawerDescription>
                  Configure your preferences.
                </DrawerDescription>
              </DrawerHeader>
              <div className="flex-1 p-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium">Theme</h3>
                    <div className="mt-2 space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="theme"
                          value="light"
                          className="mr-2"
                        />
                        <span className="text-sm">Light mode</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="theme"
                          value="dark"
                          className="mr-2"
                        />
                        <span className="text-sm">Dark mode</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Notifications</h3>
                    <div className="mt-2 space-y-2">
                      <label className="flex items-center">
                        <Checkbox />
                        <span className="ml-2 text-sm">
                          Email notifications
                        </span>
                      </label>
                      <label className="flex items-center">
                        <Checkbox />
                        <span className="ml-2 text-sm">Push notifications</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <DrawerFooter>
                <Button>Save Changes</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          <Drawer direction="top">
            <DrawerTrigger asChild>
              <Button variant="outline">Top Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Top Drawer</DrawerTitle>
                <DrawerDescription>
                  This drawer slides down from the top.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <p className="text-sm">
                  Useful for notifications or announcements.
                </p>
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          <Drawer>
            <DrawerTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Create Item
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Create New Item</DrawerTitle>
                <DrawerDescription>
                  Fill out the form to create a new item.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Item Name</label>
                    <input
                      type="text"
                      placeholder="Enter item name"
                      className="border-input mt-1 w-full rounded border px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Description</label>
                    <textarea
                      placeholder="Enter description"
                      rows={3}
                      className="border-input mt-1 w-full rounded border px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Category</label>
                    <select className="border-input mt-1 w-full rounded border px-3 py-2 text-sm">
                      <option value="">Select category</option>
                      <option value="work">Work</option>
                      <option value="personal">Personal</option>
                      <option value="project">Project</option>
                    </select>
                  </div>
                </div>
              </div>
              <DrawerFooter>
                <Button>Create Item</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Action Sheet</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Available Actions</DrawerTitle>
                <DrawerDescription>
                  Choose an action to perform.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <div className="space-y-2">
                  <button className="hover:bg-accent flex w-full items-center rounded px-3 py-2 text-left">
                    <Pencil className="mr-3 h-4 w-4" />
                    <span>Edit Item</span>
                  </button>
                  <button className="hover:bg-accent flex w-full items-center rounded px-3 py-2 text-left">
                    <Plus className="mr-3 h-4 w-4" />
                    <span>Duplicate</span>
                  </button>
                  <button className="text-destructive hover:bg-destructive/10 flex w-full items-center rounded px-3 py-2 text-left">
                    <Trash2 className="mr-3 h-4 w-4" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline" className="w-full">
                    Cancel
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Drawer Features Demonstrated
          </h3>
          <div className="bg-muted rounded-md p-4 text-sm">
            <ul className="space-y-1">
              <li>• Four directional options: top, bottom, left, right</li>
              <li>• Mobile-friendly slide-out interactions</li>
              <li>• Configurable handle for bottom/top drawers</li>
              <li>• Escape key and backdrop click to close</li>
              <li>• Focus management and accessibility</li>
              <li>• Responsive width and height sizing</li>
              <li>• Header, content, and footer sections</li>
              <li>• Integration with forms and navigation</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
