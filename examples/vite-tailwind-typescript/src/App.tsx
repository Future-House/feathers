import { useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AspectRatio,
  Badge,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  Button,
  Calendar,
  Card,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  Checkbox,
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  ThemeToggle,
} from '@future-house/feathers';
import {
  Mail,
  Info,
  ChevronDown,
  Users,
  Settings,
  Calendar,
} from '@future-house/feathers/icons';
import '@future-house/feathers/index.css';

function App() {
  const [count, setCount] = useState(0);
  const [checkboxStates, setCheckboxStates] = useState({
    terms: false,
    newsletter: true,
    notifications: 'indeterminate' as boolean | 'indeterminate',
  });
  const [alertAction, setAlertAction] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedRange, setSelectedRange] = useState<
    | {
        from: Date | undefined;
        to: Date | undefined;
      }
    | undefined
  >();

  return (
    <>
      <h1 className="mb-8 text-center">Feathers Component Library Test</h1>
      <ThemeToggle />

      <Card>
        <CardHeader>
          <CardTitle>Breadcrumb Components</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Basic Breadcrumb
            </h3>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              With Custom Separator
            </h3>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>API Reference</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">With Ellipsis</h3>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbEllipsis />
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard/projects">
                    Projects
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>My Project</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Long Navigation Path
            </h3>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard/projects">
                    Projects
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard/projects/my-project">
                    My Project
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Settings</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </CardContent>
      </Card>
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
                  Enable notifications (TODO: supports indeterminate)
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
          <CardTitle>Alert Dialog Components</CardTitle>
          <CardDescription>
            Testing different alert dialog scenarios and interactions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Delete Account</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => setAlertAction('Account deleted')}
                  >
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete Item</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete Item</AlertDialogTitle>
                  <AlertDialogDescription>
                    This item will be permanently removed from your library.
                    This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    onClick={() => setAlertAction('Item deleted')}
                  >
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Save Changes</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Unsaved Changes</AlertDialogTitle>
                  <AlertDialogDescription>
                    You have unsaved changes. Would you like to save them before
                    leaving?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel
                    onClick={() => setAlertAction('Changes discarded')}
                  >
                    Discard
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => setAlertAction('Changes saved')}
                  >
                    Save Changes
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button>Subscribe</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Subscribe to Pro Plan</AlertDialogTitle>
                  <AlertDialogDescription>
                    Upgrade to Pro to unlock premium features including:
                    <br />• Unlimited projects
                    <br />• Priority support
                    <br />• Advanced analytics
                    <br />• Custom integrations
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Maybe Later</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => setAlertAction('Subscribed')}
                  >
                    Subscribe Now
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          {alertAction && (
            <div className="rounded border border-blue-200 bg-blue-50 p-3 text-sm text-blue-800">
              <span className="mr-2">
                <strong>Action taken:</strong> {alertAction}
              </span>
              <button
                onClick={() => setAlertAction('')}
                className="ml-2 text-blue-600 underline hover:no-underline"
              >
                Clear
              </button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Calendar Components</CardTitle>
          <CardDescription>
            Testing different calendar modes and date selection
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700">
                Single Date Selection
              </h3>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
              />
              {selectedDate && (
                <div className="rounded border border-blue-200 bg-blue-50 p-3 text-sm text-blue-800">
                  Selected: {selectedDate.toLocaleDateString()}
                </div>
              )}
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700">
                Date Range Selection
              </h3>
              <Calendar
                mode="range"
                selected={selectedRange}
                onSelect={setSelectedRange}
                className="rounded-md border"
              />
              {selectedRange?.from && (
                <div className="rounded border border-green-200 bg-green-50 p-3 text-sm text-green-800">
                  {selectedRange.to ? (
                    <>
                      From: {selectedRange.from.toLocaleDateString()}
                      <br />
                      To: {selectedRange.to.toLocaleDateString()}
                    </>
                  ) : (
                    <>From: {selectedRange.from.toLocaleDateString()}</>
                  )}
                </div>
              )}
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700">
                Multiple Months Display
              </h3>
              <Calendar
                mode="single"
                numberOfMonths={2}
                className="rounded-md border"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700">
                With Dropdown Navigation
              </h3>
              <Calendar
                mode="single"
                captionLayout="dropdown"
                className="rounded-md border"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AspectRatio Components</CardTitle>
          <CardDescription>
            Testing different aspect ratios for images, videos, and other
            content
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-700">16:9 Video</h3>
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <div className="flex h-full w-full items-center justify-center rounded-md border border-dashed">
                  <span className="text-muted-foreground text-sm">
                    16:9 Aspect Ratio
                  </span>
                </div>
              </AspectRatio>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-700">1:1 Square</h3>
              <AspectRatio ratio={1} className="bg-muted">
                <div className="flex h-full w-full items-center justify-center rounded-md border border-dashed">
                  <span className="text-muted-foreground text-sm">Square</span>
                </div>
              </AspectRatio>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-700">4:3 Classic</h3>
              <AspectRatio ratio={4 / 3} className="bg-muted">
                <div className="flex h-full w-full items-center justify-center rounded-md border border-dashed">
                  <span className="text-muted-foreground text-sm">4:3</span>
                </div>
              </AspectRatio>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Image Gallery with Consistent Aspect Ratios
            </h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {Array.from({ length: 4 }, (_, i) => (
                <AspectRatio key={i} ratio={3 / 4} className="bg-muted">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      [
                        '1588345921523-c2dcdb7f1dcd',
                        '1469474968028-56623f02e42e',
                        '1448375240586-dbc73152c844',
                        '1506905925346-21bda4d32df4',
                      ][i]
                    }?w=400&h=533&dpr=2&q=80`}
                    alt={`Gallery image ${i + 1}`}
                    className="h-full w-full rounded-md object-cover"
                  />
                </AspectRatio>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Card with AspectRatio Header
            </h3>
            <div className="bg-card text-card-foreground max-w-sm overflow-hidden rounded-lg border shadow-sm">
              <AspectRatio ratio={16 / 9}>
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&dpr=2&q=80"
                  alt="Mountain landscape"
                  className="h-full w-full object-cover"
                />
              </AspectRatio>
              <div className="p-4">
                <h4 className="text-lg font-semibold">Mountain View</h4>
                <p className="text-muted-foreground mt-2 text-sm">
                  Beautiful landscape captured in perfect 16:9 aspect ratio.
                </p>
                <Button className="mt-3" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Interactive AspectRatio (asChild)
            </h3>
            <AspectRatio ratio={21 / 9} asChild>
              <button className="bg-muted hover:bg-muted/80 rounded-md transition-colors">
                <div className="flex h-full w-full items-center justify-center rounded-md border border-dashed">
                  <span className="text-muted-foreground text-sm">
                    Click me! (21:9 Ultrawide)
                  </span>
                </div>
              </button>
            </AspectRatio>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Carousel Components</CardTitle>
          <CardDescription>
            Interactive carousel component examples with different
            configurations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Basic Horizontal Carousel
            </h3>
            <Carousel className="mx-auto w-full max-w-xs">
              <CarouselContent>
                {Array.from({ length: 5 }, (_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Multiple Items Per View
            </h3>
            <Carousel
              opts={{
                align: 'start',
              }}
              className="mx-auto w-full max-w-sm"
            >
              <CarouselContent>
                {Array.from({ length: 10 }, (_, index) => (
                  <CarouselItem key={index} className="basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-2xl font-semibold">
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Content Showcase Carousel
            </h3>
            <Carousel className="mx-auto w-full max-w-lg">
              <CarouselContent>
                <CarouselItem>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white">
                        <h3 className="mb-2 text-xl font-bold">Welcome</h3>
                        <p className="text-center">
                          Discover our amazing component library
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center bg-gradient-to-br from-green-500 to-teal-600 p-8 text-white">
                        <h3 className="mb-2 text-xl font-bold">Explore</h3>
                        <p className="text-center">
                          Find the perfect components for your project
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center bg-gradient-to-br from-orange-500 to-red-600 p-8 text-white">
                        <h3 className="mb-2 text-xl font-bold">Get Started</h3>
                        <p className="text-center">
                          Begin building your application today
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Image Gallery Carousel
            </h3>
            <Carousel
              opts={{
                loop: true,
              }}
              className="mx-auto w-full max-w-md"
            >
              <CarouselContent>
                {Array.from({ length: 4 }, (_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-video items-center justify-center rounded-lg bg-slate-200 p-0 dark:bg-slate-700">
                          <div className="text-center">
                            <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-lg bg-slate-300 dark:bg-slate-600">
                              <span className="text-2xl">🖼️</span>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              Image {index + 1}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Collapsible Components</CardTitle>
          <CardDescription>
            Interactive collapsible components for organizing content
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Basic Collapsible
            </h3>
            <Collapsible className="w-[350px] space-y-2">
              <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-sm font-semibold">
                  @peduarte starred 3 repositories
                </h4>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="w-9 p-0">
                    <ChevronDown className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
              <div className="rounded-md border px-4 py-3 font-mono text-sm">
                @radix-ui/primitives
              </div>
              <CollapsibleContent className="space-y-2">
                <div className="rounded-md border px-4 py-3 font-mono text-sm">
                  @radix-ui/colors
                </div>
                <div className="rounded-md border px-4 py-3 font-mono text-sm">
                  @stitches/react
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Settings Menu Example
            </h3>
            <div className="w-[400px] space-y-4">
              <Collapsible className="space-y-2">
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Profile Information
                    </div>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2 pt-4">
                  <div className="bg-muted rounded-md p-4">
                    <p className="text-sm">Name: John Doe</p>
                    <p className="text-sm">Email: john@example.com</p>
                    <p className="text-sm">Role: Administrator</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible className="space-y-2">
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    <div className="flex items-center gap-2">
                      <Settings className="h-4 w-4" />
                      Advanced Settings
                    </div>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2 pt-4">
                  <div className="bg-muted space-y-2 rounded-md p-4">
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Enable notifications</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Auto-save drafts</span>
                    </label>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Event List with Collapsible Details
            </h3>
            <Collapsible defaultOpen className="w-[350px] space-y-2">
              <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-sm font-semibold">Upcoming Events</h4>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="w-9 p-0">
                    <ChevronDown className="h-4 w-4" />
                    <span className="sr-only">Toggle events</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent className="space-y-2">
                <div className="rounded-md border px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">
                      Team Meeting - Tomorrow 2:00 PM
                    </span>
                  </div>
                </div>
                <div className="rounded-md border px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">
                      Project Review - Friday 10:00 AM
                    </span>
                  </div>
                </div>
                <div className="rounded-md border px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">
                      Client Call - Next Monday 3:00 PM
                    </span>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Navigation Menu Style
            </h3>
            <div className="w-[300px] space-y-2">
              <Collapsible className="space-y-2">
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    Team Management
                    <ChevronDown className="ml-auto h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1 pl-6">
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    size="sm"
                  >
                    View Members
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    size="sm"
                  >
                    Add Member
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    size="sm"
                  >
                    Permissions
                  </Button>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible className="space-y-2">
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                    <ChevronDown className="ml-auto h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1 pl-6">
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    size="sm"
                  >
                    General
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    size="sm"
                  >
                    Security
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    size="sm"
                  >
                    Notifications
                  </Button>
                </CollapsibleContent>
              </Collapsible>
            </div>
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
