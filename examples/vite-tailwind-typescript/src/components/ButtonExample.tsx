import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  Button,
} from '@future-house/feathers';
import { Mail } from '@future-house/feathers/icons';

export default function ButtonExample() {
  const [count, setCount] = useState(0);

  return (
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
  );
}