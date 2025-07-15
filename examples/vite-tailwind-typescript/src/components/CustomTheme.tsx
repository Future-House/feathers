import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Badge,
} from '@future-house/feathers';

function CustomTheme() {
  return (
    <div className="space-y-8">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold">Custom Theme</h1>
        <p className="text-muted-foreground mt-2">
          Explore the Feathers preset colors and learn how to customize themes
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">New Colors</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Success</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="bg-success hover:bg-success/80 w-full">
                success
              </Button>
              <Badge variant="outline" className="border-success text-success">
                Success
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Warning</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="bg-warning hover:bg-warning/80 w-full">
                warning
              </Button>
              <Badge variant="outline" className="border-warning text-warning">
                Warning
              </Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Theme Customization</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Overriding via CSS Variables</CardTitle>
              <CardDescription>
                You can define new colors via CSS variables in your own
                application.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted overflow-x-auto rounded-md p-4 text-sm">
                {`@import 'tailwindcss';
@import '@future-house/feathers/index.css';

/* Custom theme */
@theme inline {
  --color-success: var(--success);
  --color-success-foreground: var(--success-foreground);
  --color-warning: var(--warning);
  --color-warning-foreground: var(--warning-foreground);
}

:root {
  --success: #1f7a1f;
  --success-foreground: #ffffff;
  --warning: #d77812;
  --warning-foreground:  #ffffff;
  /* You can also override pre-existing theme variables */
  --radius: 1.5rem;
}

.dark {
  --success: #269c26;
  --success-foreground: #ffffff;
  --warning: #fa8c16;
  --warning-foreground:  #ffffff;
  /* You can also override pre-existing theme variables */
  --radius: 2rem;
}
`}
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default CustomTheme;
