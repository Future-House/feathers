import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@future-house/feathers';

function Content() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome to Feathers
        </h1>
        <p className="text-muted-foreground">
          A modern React component library built on top of <code>@shadcn</code>,
          using TypeScript, Tailwind CSS, and Radix UI primitives.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Components</CardTitle>
            <CardDescription>
              Explore our collection of accessible, customizable components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Built with Radix UI primitives for maximum accessibility and
              customization.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>TypeScript First</CardTitle>
            <CardDescription>
              Fully typed components with excellent developer experience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              IntelliSense, type safety, and auto-completion out of the box.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tailwind CSS</CardTitle>
            <CardDescription>
              Modern styling with utility-first CSS framework
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Customizable design system with dark mode support.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Content;
