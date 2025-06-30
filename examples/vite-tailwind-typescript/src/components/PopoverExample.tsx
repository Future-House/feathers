import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  Checkbox,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@future-house/feathers';
import {
  Bell,
  ListFilter,
  LogOut,
  Mail,
  MessageSquare,
  Ellipsis,
  Settings,
  User,
} from '@future-house/feathers/icons';

export default function PopoverExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Popover Component</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Form Configuration Popover
          </h3>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Configure Settings</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="leading-none font-medium">Settings</h4>
                  <p className="text-muted-foreground text-sm">
                    Configure your application preferences.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="width">Width</Label>
                    <Input
                      id="width"
                      defaultValue="100%"
                      className="col-span-2 h-8"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="maxWidth">Max. width</Label>
                    <Input
                      id="maxWidth"
                      defaultValue="300px"
                      className="col-span-2 h-8"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="height">Height</Label>
                    <Input
                      id="height"
                      defaultValue="25px"
                      className="col-span-2 h-8"
                    />
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            User Actions Popover
          </h3>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                John Doe
                <Ellipsis className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-full">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-muted-foreground text-xs">
                      john@example.com
                    </p>
                  </div>
                </div>
                <div className="space-y-1 border-t pt-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                  >
                    <User className="mr-2 h-4 w-4" />
                    View Profile
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Messages
                  </Button>
                  <div className="border-t pt-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-red-600 hover:text-red-600"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Notifications Popover
          </h3>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  3
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Notifications</h4>
                  <Button variant="ghost" size="sm">
                    Mark all read
                  </Button>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-3 rounded-lg border p-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                      <Mail className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">New message</p>
                      <p className="text-muted-foreground text-xs">
                        You have a new message from Sarah
                      </p>
                      <p className="text-muted-foreground text-xs">
                        2 min ago
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 rounded-lg border p-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                      <User className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">Profile updated</p>
                      <p className="text-muted-foreground text-xs">
                        Your profile has been successfully updated
                      </p>
                      <p className="text-muted-foreground text-xs">
                        1 hour ago
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-t pt-3">
                  <Button variant="ghost" size="sm" className="w-full">
                    View all notifications
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Filter Options Popover
          </h3>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="gap-2">
                <ListFilter className="h-4 w-4" />
                Filter Options
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64">
              <div className="space-y-4">
                <div>
                  <h4 className="mb-3 leading-none font-medium">Filter by</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="active" defaultChecked />
                      <Label htmlFor="active" className="text-sm">
                        Active users
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="inactive" />
                      <Label htmlFor="inactive" className="text-sm">
                        Inactive users
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="pending" />
                      <Label htmlFor="pending" className="text-sm">
                        Pending approval
                      </Label>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 border-t pt-3">
                  <Button size="sm" className="flex-1">
                    Apply
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Reset
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </CardContent>
    </Card>
  );
}