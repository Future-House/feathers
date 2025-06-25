import { useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  Badge,
} from '@future-house/feathers';
import { Mail, Info } from '@future-house/feathers/icons';
// import '@future-house/feathers/lib/styles/index.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mb-8 flex justify-center gap-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 className="mb-8">Feathers Component Library Test</h1>

      <div className="mx-auto max-w-2xl space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Button Components</CardTitle>
            <CardDescription>Testing different button variants and sizes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button onClick={() => setCount(count => count + 1)}>Default: {count}</Button>
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
            <CardDescription>This card demonstrates the card component structure</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              This is the card content area. The card component includes header, content, and other
              sections for organizing information.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default App;
