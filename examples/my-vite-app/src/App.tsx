import { useState } from 'react';
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  ThemeToggle,
} from '@future-house/feathers';
import { Mail, Info } from '@future-house/feathers/icons';
import '@future-house/feathers/index.css';

function App() {
  const [count, setCount] = useState(0);

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
