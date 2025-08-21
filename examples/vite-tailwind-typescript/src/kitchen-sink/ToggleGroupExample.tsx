import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  ToggleGroup,
  ToggleGroupItem,
} from '@future-house/feathers';
import { Mail, User, Settings } from '@future-house/feathers/icons';

export default function ToggleGroupExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>ToggleGroup Components</CardTitle>
        <CardDescription>
          Toggle groups allow users to select one or multiple options from a
          group of toggle buttons
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Single Selection Groups
            </h3>
            <div className="space-y-3">
              <div>
                <p className="mb-2 text-sm font-medium">Text Alignment</p>
                <ToggleGroup type="single" defaultValue="center">
                  <ToggleGroupItem value="left" aria-label="Align left">
                    Left
                  </ToggleGroupItem>
                  <ToggleGroupItem value="center" aria-label="Align center">
                    Center
                  </ToggleGroupItem>
                  <ToggleGroupItem value="right" aria-label="Align right">
                    Right
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium">With Icons</p>
                <ToggleGroup type="single" variant="outline">
                  <ToggleGroupItem value="mail" aria-label="Mail">
                    <Mail />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="user" aria-label="User">
                    <User />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="settings" aria-label="Settings">
                    <Settings />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Multiple Selection Groups
            </h3>
            <div className="space-y-3">
              <div>
                <p className="mb-2 text-sm font-medium">Text Formatting</p>
                <ToggleGroup type="multiple" variant="outline">
                  <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <b>B</b>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="italic" aria-label="Toggle italic">
                    <i>I</i>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="underline"
                    aria-label="Toggle underline"
                  >
                    <u>U</u>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium">Features</p>
                <ToggleGroup type="multiple" defaultValue={['mail', 'user']}>
                  <ToggleGroupItem
                    value="mail"
                    aria-label="Email notifications"
                  >
                    <Mail />
                    Email
                  </ToggleGroupItem>
                  <ToggleGroupItem value="user" aria-label="User profile">
                    <User />
                    Profile
                  </ToggleGroupItem>
                  <ToggleGroupItem value="settings" aria-label="Settings">
                    <Settings />
                    Settings
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Sizes and Variants
            </h3>
            <div className="space-y-3">
              <div>
                <p className="mb-2 text-sm font-medium">Small Size</p>
                <ToggleGroup type="single" size="sm" variant="outline">
                  <ToggleGroupItem value="1">1</ToggleGroupItem>
                  <ToggleGroupItem value="2">2</ToggleGroupItem>
                  <ToggleGroupItem value="3">3</ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium">Default Size</p>
                <ToggleGroup type="single" size="default" variant="outline">
                  <ToggleGroupItem value="1">1</ToggleGroupItem>
                  <ToggleGroupItem value="2">2</ToggleGroupItem>
                  <ToggleGroupItem value="3">3</ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium">Large Size</p>
                <ToggleGroup type="single" size="lg" variant="outline">
                  <ToggleGroupItem value="1">1</ToggleGroupItem>
                  <ToggleGroupItem value="2">2</ToggleGroupItem>
                  <ToggleGroupItem value="3">3</ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              States and Disabled
            </h3>
            <div className="space-y-3">
              <div>
                <p className="mb-2 text-sm font-medium">Normal</p>
                <ToggleGroup type="single" variant="outline">
                  <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
                  <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
                  <ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-400">
                  Entire Group Disabled
                </p>
                <ToggleGroup type="single" variant="outline" disabled>
                  <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
                  <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
                  <ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium">
                  Individual Item Disabled
                </p>
                <ToggleGroup type="single" variant="outline">
                  <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
                  <ToggleGroupItem value="option2" disabled>
                    Option 2 (Disabled)
                  </ToggleGroupItem>
                  <ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Real-world Examples
          </h3>
          <div className="space-y-4">
            <div>
              <p className="mb-2 text-sm font-medium">Text Editor Toolbar</p>
              <div className="flex items-center gap-4 rounded-md border p-2">
                <ToggleGroup type="multiple" variant="outline">
                  <ToggleGroupItem value="bold" aria-label="Bold">
                    <b>B</b>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="italic" aria-label="Italic">
                    <i>I</i>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="underline" aria-label="Underline">
                    <u>U</u>
                  </ToggleGroupItem>
                </ToggleGroup>
                <div className="h-6 w-px bg-gray-300" />
                <ToggleGroup
                  type="single"
                  variant="outline"
                  defaultValue="left"
                >
                  <ToggleGroupItem value="left" aria-label="Align left">
                    Left
                  </ToggleGroupItem>
                  <ToggleGroupItem value="center" aria-label="Align center">
                    Center
                  </ToggleGroupItem>
                  <ToggleGroupItem value="right" aria-label="Align right">
                    Right
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium">View Options</p>
              <ToggleGroup type="single" variant="outline" defaultValue="grid">
                <ToggleGroupItem value="list" aria-label="List view">
                  List View
                </ToggleGroupItem>
                <ToggleGroupItem value="grid" aria-label="Grid view">
                  Grid View
                </ToggleGroupItem>
                <ToggleGroupItem value="card" aria-label="Card view">
                  Card View
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
