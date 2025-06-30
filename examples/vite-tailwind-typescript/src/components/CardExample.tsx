import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@future-house/feathers';

export default function CardExample() {
  return (
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
  );
}