import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  Toggle,
} from '@future-house/feathers';
import {
  Bell,
  Eye,
  ListFilter,
  Mail,
  Search,
  Settings,
  User,
} from '@future-house/feathers/icons';

export default function ToggleExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Toggle Components</CardTitle>
        <CardDescription>
          Interactive toggle buttons with multiple variants and states for UI
          controls
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Basic Toggle Examples
            </h3>
            <div className="space-y-3">
              <div>
                <p className="mb-2 text-sm font-medium">Default Toggle</p>
                <Toggle aria-label="Toggle bold">Toggle Me</Toggle>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium">With Icon</p>
                <Toggle aria-label="Toggle bold">
                  <Bell />
                </Toggle>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium">Icon with Text</p>
                <Toggle aria-label="Toggle notifications">
                  <Bell />
                  Notifications
                </Toggle>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Toggle Variants
            </h3>
            <div className="space-y-3">
              <div>
                <p className="mb-2 text-sm font-medium">Default Variant</p>
                <div className="flex items-center gap-2">
                  <Toggle variant="default" aria-label="Bold">
                    <Bell />
                  </Toggle>
                  <Toggle
                    variant="default"
                    defaultPressed
                    aria-label="Italic"
                  >
                    <Mail />
                  </Toggle>
                </div>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium">Outline Variant</p>
                <div className="flex items-center gap-2">
                  <Toggle variant="outline" aria-label="Bold">
                    <Bell />
                  </Toggle>
                  <Toggle
                    variant="outline"
                    defaultPressed
                    aria-label="Italic"
                  >
                    <Mail />
                  </Toggle>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Toggle Sizes
            </h3>
            <div className="space-y-3">
              <div>
                <p className="mb-2 text-sm font-medium">Small</p>
                <Toggle size="sm" aria-label="Small toggle">
                  <Bell />
                </Toggle>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium">Default</p>
                <Toggle size="default" aria-label="Default toggle">
                  <Bell />
                </Toggle>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium">Large</p>
                <Toggle size="lg" aria-label="Large toggle">
                  <Bell />
                </Toggle>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Toggle States
            </h3>
            <div className="space-y-3">
              <div>
                <p className="mb-2 text-sm font-medium">Normal</p>
                <Toggle aria-label="Normal toggle">
                  <Bell />
                </Toggle>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium">Pressed</p>
                <Toggle defaultPressed aria-label="Pressed toggle">
                  <Bell />
                </Toggle>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-400">
                  Disabled
                </p>
                <Toggle disabled aria-label="Disabled toggle">
                  <Bell />
                </Toggle>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-400">
                  Disabled Pressed
                </p>
                <Toggle
                  disabled
                  defaultPressed
                  aria-label="Disabled pressed toggle"
                >
                  <Bell />
                </Toggle>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Text Formatting Toolbar Example
          </h3>
          <div className="flex items-center gap-1 rounded-md border p-2">
            <Toggle variant="outline" aria-label="Toggle bold">
              <Bell />
            </Toggle>
            <Toggle variant="outline" aria-label="Toggle italic">
              <Mail />
            </Toggle>
            <Toggle variant="outline" aria-label="Toggle underline">
              <User />
            </Toggle>
            <div className="mx-1 h-6 w-px bg-gray-300" />
            <Toggle variant="outline" aria-label="Align left">
              <Settings />
            </Toggle>
            <Toggle variant="outline" aria-label="Align center">
              <Search />
            </Toggle>
            <Toggle variant="outline" aria-label="Align right">
              <ListFilter />
            </Toggle>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Settings Panel Example
          </h3>
          <div className="space-y-3 rounded-md border p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Email Notifications</p>
                <p className="text-xs text-gray-500">Receive email updates</p>
              </div>
              <Toggle defaultPressed aria-label="Toggle email notifications">
                <Mail />
              </Toggle>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Push Notifications</p>
                <p className="text-xs text-gray-500">
                  Receive push notifications
                </p>
              </div>
              <Toggle aria-label="Toggle push notifications">
                <Bell />
              </Toggle>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Dark Mode</p>
                <p className="text-xs text-gray-500">Enable dark theme</p>
              </div>
              <Toggle aria-label="Toggle dark mode">
                <Eye />
              </Toggle>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}