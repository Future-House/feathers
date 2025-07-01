import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Checkbox,
} from '@future-house/feathers';

export default function SheetExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sheet Component</CardTitle>
        <CardDescription>
          Slide-out panels that appear from any side of the screen for
          additional content or actions
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Basic Sheet Examples
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">From Right</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Edit Profile</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when
                    you&apos;re done.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="name" className="text-right">
                      Name
                    </label>
                    <Input
                      id="name"
                      defaultValue="Pedro Duarte"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="username" className="text-right">
                      Username
                    </label>
                    <Input
                      id="username"
                      defaultValue="@peduarte"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button type="submit">Save changes</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">From Left</Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                  <SheetDescription>
                    Navigate through different sections of the app.
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-4 py-4">
                  <Button variant="ghost" className="justify-start">
                    Dashboard
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    Projects
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    Settings
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    Help
                  </Button>
                </div>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">From Top</Button>
              </SheetTrigger>
              <SheetContent side="top">
                <SheetHeader>
                  <SheetTitle>Notifications</SheetTitle>
                  <SheetDescription>
                    You have 3 unread notifications.
                  </SheetDescription>
                </SheetHeader>
                <div className="space-y-4 py-4">
                  <div className="rounded-md border p-3">
                    <p className="text-sm font-medium">New message</p>
                    <p className="text-xs text-gray-500">2 minutes ago</p>
                  </div>
                  <div className="rounded-md border p-3">
                    <p className="text-sm font-medium">System update</p>
                    <p className="text-xs text-gray-500">1 hour ago</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">From Bottom</Button>
              </SheetTrigger>
              <SheetContent side="bottom">
                <SheetHeader>
                  <SheetTitle>Quick Actions</SheetTitle>
                  <SheetDescription>
                    Perform common actions quickly.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid grid-cols-2 gap-4 py-4">
                  <Button variant="outline">Share</Button>
                  <Button variant="outline">Copy Link</Button>
                  <Button variant="outline">Download</Button>
                  <Button variant="outline">Print</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Complex Sheet Example
          </h3>
          <Sheet>
            <SheetTrigger asChild>
              <Button>Open Settings</Button>
            </SheetTrigger>
            <SheetContent className="sm:max-w-md">
              <SheetHeader>
                <SheetTitle>Account Settings</SheetTitle>
                <SheetDescription>
                  Manage your account preferences and profile information.
                </SheetDescription>
              </SheetHeader>
              <div className="space-y-6 py-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Display Name</label>
                  <Input placeholder="Enter your display name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Theme</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Notifications</label>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="email-notifications" />
                    <label
                      htmlFor="email-notifications"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email notifications
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="push-notifications" />
                    <label
                      htmlFor="push-notifications"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Push notifications
                    </label>
                  </div>
                </div>
              </div>
              <SheetFooter className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                <SheetClose asChild>
                  <Button variant="outline">Cancel</Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button>Save Changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        <div className="bg-muted rounded-md p-4 text-sm">
          <h4 className="mb-2 font-medium">Sheet Features:</h4>
          <ul className="grid grid-cols-1 gap-1 md:grid-cols-2">
            <li>• Slides from any side (top, right, bottom, left)</li>
            <li>• Accessible keyboard navigation</li>
            <li>• Focus management and trapping</li>
            <li>• Customizable sizes and positions</li>
            <li>• Built-in close functionality</li>
            <li>• Portal rendering for z-index control</li>
            <li>• Smooth animations and transitions</li>
            <li>• Works with forms and complex content</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
