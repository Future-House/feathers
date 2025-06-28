import { useState } from 'react';
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  Checkbox,
  ThemeToggle,
} from '@future-house/feathers';
import { Mail, Info } from '@future-house/feathers/icons';
import '@future-house/feathers/index.css';

function App() {
  const [count, setCount] = useState(0);
  const [checkboxStates, setCheckboxStates] = useState({
    terms: false,
    newsletter: true,
    notifications: 'indeterminate' as boolean | 'indeterminate',
  });

  return (
    <>
      <h1 className="mb-8 text-center">Feathers Component Library Test</h1>
      <ThemeToggle />
      <Card>
        <CardHeader>
          <CardTitle>Button Components</CardTitle>
          <CardDescription>
            Testing different button variants and sizes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => setCount(count => count + 1)}>
              Default: {count}
            </Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button>
              <Mail />
              With Icon
            </Button>
            <Button variant="outline">
              With Icon
              <Mail />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Badge Components</CardTitle>
          <CardDescription>Testing different badge variants</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="secondary">
              <Info className="mr-1 h-3 w-3" />
              Info
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Checkbox Components</CardTitle>
          <CardDescription>
            Testing different checkbox states and interactions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={checkboxStates.terms}
                onCheckedChange={checked =>
                  setCheckboxStates(prev => ({
                    ...prev,
                    terms: checked === true,
                  }))
                }
              />
              <label
                htmlFor="terms"
                className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="newsletter"
                checked={checkboxStates.newsletter}
                onCheckedChange={checked =>
                  setCheckboxStates(prev => ({
                    ...prev,
                    newsletter: checked === true,
                  }))
                }
              />
              <label
                htmlFor="newsletter"
                className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Subscribe to newsletter
              </label>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="notifications"
                  checked={checkboxStates.notifications}
                  onCheckedChange={checked =>
                    setCheckboxStates(prev => ({
                      ...prev,
                      notifications: checked,
                    }))
                  }
                />
                <label
                  htmlFor="notifications"
                  className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Enable notifications (supports indeterminate)
                </label>
              </div>
              <div className="ml-6 flex gap-1">
                <button
                  onClick={() =>
                    setCheckboxStates(prev => ({
                      ...prev,
                      notifications: true,
                    }))
                  }
                  className="rounded border px-2 py-1 text-xs hover:bg-gray-50"
                >
                  Check
                </button>
                <button
                  onClick={() =>
                    setCheckboxStates(prev => ({
                      ...prev,
                      notifications: false,
                    }))
                  }
                  className="rounded border px-2 py-1 text-xs hover:bg-gray-50"
                >
                  Uncheck
                </button>
                <button
                  onClick={() =>
                    setCheckboxStates(prev => ({
                      ...prev,
                      notifications: 'indeterminate',
                    }))
                  }
                  className="rounded border px-2 py-1 text-xs hover:bg-gray-50"
                >
                  Indeterminate
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="disabled" disabled />
              <label
                htmlFor="disabled"
                className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Disabled checkbox
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="disabled-checked" disabled defaultChecked />
              <label
                htmlFor="disabled-checked"
                className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Disabled checked checkbox
              </label>
            </div>
          </div>

          <div className="rounded border p-3 text-xs text-gray-600">
            <p className="mb-1 font-medium">Current states:</p>
            <p>Terms: {checkboxStates.terms ? 'Accepted' : 'Not accepted'}</p>
            <p>
              Newsletter:{' '}
              {checkboxStates.newsletter ? 'Subscribed' : 'Not subscribed'}
            </p>
            <p>
              Notifications:{' '}
              {checkboxStates.notifications === 'indeterminate'
                ? 'Indeterminate'
                : checkboxStates.notifications
                  ? 'Enabled'
                  : 'Disabled'}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Card Components</CardTitle>
          <CardDescription>
            This card demonstrates the card component structure
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            This is the card content area. The card component includes header,
            content, and other sections for organizing information.
          </p>
        </CardContent>
      </Card>
    </>
  );
}

export default App;
