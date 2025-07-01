import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
} from '@future-house/feathers';

export default function SeparatorExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Separator Component</CardTitle>
        <CardDescription>
          Simple visual dividers to organize content sections with accessibility
          support
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Basic Horizontal Separator
          </h3>
          <div className="w-64 space-y-4">
            <div className="space-y-1">
              <h4 className="text-sm leading-none font-medium">
                Radix Primitives
              </h4>
              <p className="text-muted-foreground text-sm">
                An open-source UI component library.
              </p>
            </div>
            <Separator />
            <div className="space-y-1">
              <h4 className="text-sm leading-none font-medium">Installation</h4>
              <p className="text-muted-foreground text-sm">
                Install the component via your package manager.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Vertical Separators
          </h3>
          <div className="flex items-center space-x-4 text-sm">
            <div>Blog</div>
            <Separator orientation="vertical" className="h-4" />
            <div>Docs</div>
            <Separator orientation="vertical" className="h-4" />
            <div>Source</div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">In Navigation</h3>
          <nav className="flex items-center space-x-1 text-sm font-medium">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Home
            </a>
            <Separator orientation="vertical" className="h-4" />
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Products
            </a>
            <Separator orientation="vertical" className="h-4" />
            <a href="#" className="text-muted-foreground hover:text-foreground">
              About
            </a>
            <Separator orientation="vertical" className="h-4" />
            <a href="#" className="text-foreground">
              Contact
            </a>
          </nav>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">Custom Styling</h3>
          <div className="w-64 space-y-6">
            <div className="space-y-1">
              <h4 className="text-sm leading-none font-medium">
                Default Separator
              </h4>
              <p className="text-muted-foreground text-sm">
                Standard border styling
              </p>
            </div>
            <Separator />

            <div className="space-y-1">
              <h4 className="text-sm leading-none font-medium">
                Colored Separator
              </h4>
              <p className="text-muted-foreground text-sm">
                Custom color and thickness
              </p>
            </div>
            <Separator className="h-0.5 bg-red-500" />

            <div className="space-y-1">
              <h4 className="text-sm leading-none font-medium">
                Dashed Separator
              </h4>
              <p className="text-muted-foreground text-sm">
                Dashed border style
              </p>
            </div>
            <Separator className="h-0 border-t border-dashed border-gray-300 bg-transparent" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">In Card Layout</h3>
          <div className="bg-card text-card-foreground w-80 rounded-lg border shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl leading-none font-semibold tracking-tight">
                Account Settings
              </h3>
              <p className="text-muted-foreground text-sm">
                Manage your account preferences
              </p>
            </div>
            <div className="space-y-4 p-6 pt-0">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Profile Information</h4>
                <p className="text-muted-foreground text-sm">
                  Update your personal details
                </p>
              </div>

              <Separator />

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Security</h4>
                <p className="text-muted-foreground text-sm">
                  Password and authentication settings
                </p>
              </div>

              <Separator />

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Notifications</h4>
                <p className="text-muted-foreground text-sm">
                  Manage your notification preferences
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-muted rounded-md p-4 text-sm">
          <h4 className="mb-2 font-medium">Separator Features:</h4>
          <ul className="grid grid-cols-1 gap-1 md:grid-cols-2">
            <li>• Accessible by default</li>
            <li>• Horizontal and vertical orientations</li>
            <li>• Decorative and semantic usage</li>
            <li>• Custom styling support</li>
            <li>• Flexible spacing control</li>
            <li>• Screen reader friendly</li>
            <li>• Lightweight implementation</li>
            <li>• Cross-browser consistency</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
