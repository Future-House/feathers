import {
  Badge,
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from '@future-house/feathers';
import { Information } from '@future-house/feathers/icons';

function BadgeExample() {
  return (
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
            <Information className="mr-1 h-3 w-3" />
            Info
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}

export default BadgeExample;
