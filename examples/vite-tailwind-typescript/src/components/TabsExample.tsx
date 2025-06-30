import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Label,
  Input,
  Button,
} from '@future-house/feathers';

export default function TabsExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tabs Components</CardTitle>
        <CardDescription>
          A set of layered sections of content—known as tab panels—that are
          displayed one at a time
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Basic Tabs Example</h4>
          <Tabs defaultValue="overview" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-2">
              <Card>
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                  <CardDescription>
                    View your project overview and key metrics.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    This is the overview tab content. Here you would see
                    important metrics and summaries.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-2">
              <Card>
                <CardHeader>
                  <CardTitle>Analytics</CardTitle>
                  <CardDescription>
                    Detailed analytics and performance metrics.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Analytics content would go here with charts and data
                    visualizations.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="settings" className="space-y-2">
              <Card>
                <CardHeader>
                  <CardTitle>Settings</CardTitle>
                  <CardDescription>
                    Configure your preferences and options.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="tab-name">Project Name</Label>
                      <Input id="tab-name" placeholder="Enter project name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tab-description">Description</Label>
                      <Input
                        id="tab-description"
                        placeholder="Project description"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-medium">Account Settings Tabs</h4>
          <Tabs defaultValue="account" className="w-[500px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="space-y-2">
              <Card>
                <CardHeader>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>
                    Make changes to your account here. Click save when
                    you&apos;re done.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="account-name">Name</Label>
                    <Input id="account-name" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="@peduarte" />
                  </div>
                  <Button>Save changes</Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="password" className="space-y-2">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you&apos;ll be
                    logged out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="current-password">Current password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="new-password">New password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <Button>Save password</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="bg-muted rounded-md p-4 text-sm">
          <h4 className="mb-2 font-medium">Tabs Features:</h4>
          <ul className="grid grid-cols-1 gap-1 md:grid-cols-2">
            <li>• Multiple orientations (horizontal/vertical)</li>
            <li>• Keyboard navigation with arrow keys</li>
            <li>• Automatic and manual activation modes</li>
            <li>• Disabled tabs support</li>
            <li>• Controlled and uncontrolled state</li>
            <li>• Accessible with proper ARIA attributes</li>
            <li>• Customizable styling and animations</li>
            <li>• Built with Radix UI primitives</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}