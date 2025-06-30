import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@future-house/feathers';
import {
  ChevronDown,
  Users,
  Settings,
  Calendar as CalendarIcon,
} from '@future-house/feathers/icons';

export default function CollapsibleExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Collapsible Components</CardTitle>
        <CardDescription>
          Interactive collapsible components for organizing content
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Basic Collapsible
          </h3>
          <Collapsible className="w-[350px] space-y-2">
            <div className="flex items-center justify-between space-x-4 px-4">
              <h4 className="text-sm font-semibold">
                @peduarte starred 3 repositories
              </h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="w-9 p-0">
                  <ChevronDown className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              @radix-ui/primitives
            </div>
            <CollapsibleContent className="space-y-2">
              <div className="rounded-md border px-4 py-3 font-mono text-sm">
                @radix-ui/colors
              </div>
              <div className="rounded-md border px-4 py-3 font-mono text-sm">
                @stitches/react
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Settings Menu Example
          </h3>
          <div className="w-[400px] space-y-4">
            <Collapsible className="space-y-2">
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Profile Information
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2 pt-4">
                <div className="bg-muted rounded-md p-4">
                  <p className="text-sm">Name: John Doe</p>
                  <p className="text-sm">Email: john@example.com</p>
                  <p className="text-sm">Role: Administrator</p>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible className="space-y-2">
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  <div className="flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    Advanced Settings
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2 pt-4">
                <div className="bg-muted space-y-2 rounded-md p-4">
                  <label className="flex items-center space-x-2">
                    <Checkbox />
                    <span className="text-sm">Enable notifications</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <Checkbox />
                    <span className="text-sm">Auto-save drafts</span>
                  </label>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Event List with Collapsible Details
          </h3>
          <Collapsible defaultOpen className="w-[350px] space-y-2">
            <div className="flex items-center justify-between space-x-4 px-4">
              <h4 className="text-sm font-semibold">Upcoming Events</h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="w-9 p-0">
                  <ChevronDown className="h-4 w-4" />
                  <span className="sr-only">Toggle events</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2">
              <div className="rounded-md border px-4 py-3">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  <span className="text-sm">
                    Team Meeting - Tomorrow 2:00 PM
                  </span>
                </div>
              </div>
              <div className="rounded-md border px-4 py-3">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  <span className="text-sm">
                    Project Review - Friday 10:00 AM
                  </span>
                </div>
              </div>
              <div className="rounded-md border px-4 py-3">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  <span className="text-sm">
                    Client Call - Next Monday 3:00 PM
                  </span>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Navigation Menu Style
          </h3>
          <div className="w-[300px] space-y-2">
            <Collapsible className="space-y-2">
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Team Management
                  <ChevronDown className="ml-auto h-4 w-4" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1 pl-6">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  size="sm"
                >
                  View Members
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  size="sm"
                >
                  Add Member
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  size="sm"
                >
                  Permissions
                </Button>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible className="space-y-2">
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                  <ChevronDown className="ml-auto h-4 w-4" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1 pl-6">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  size="sm"
                >
                  General
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  size="sm"
                >
                  Security
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  size="sm"
                >
                  Notifications
                </Button>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}