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
        <h1 className="text-3xl">Custom Theme</h1>
        <p className="text-muted-foreground mt-2">
          Explore the Feathers preset colors and learn how to customize themes
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Custom App Colors</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Success</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="bg-brand/50 hover:bg-brand/40 dark:bg-brand/80 dark:hover:bg-brand/70 w-full">
                Brand
              </Button>
              <Badge variant="outline" className="border-brand text-brand">
                Brand
              </Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <div className="dark:bg-background flex h-[calc(100vh-2rem)] flex-col overflow-hidden lg:flex-row">
          <div className="flex h-full flex-1 flex-col lg:w-1/2 lg:flex-none">
            <span>xl - lime</span>
            <span>md - violet</span>
            <span>default - amber</span>
            <div className="size-8 bg-amber-400 md:bg-violet-600 xl:bg-lime-500"></div>
          </div>
          <div className="flex-1 border-l-2 bg-neutral-200 p-6 lg:sticky lg:top-0 lg:h-[calc(100vh-2rem)] lg:w-1/2 lg:overflow-y-auto dark:bg-neutral-900">
            Testing some flex classes
            <br/>
            lg - row
            <br/>
            default - col
          </div>
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
