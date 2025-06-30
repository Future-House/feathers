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
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  Input,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  Label,
  ThemeToggle,
} from '@future-house/feathers';
import {
  Mail,
  Info,
  ChevronDown,
  Users,
  Settings,
  Calendar as CalendarIcon,
  Menu,
  Plus,
  Trash2,
  User,
  Minus,
  CirclePlus,
  Pencil,
  CreditCard,
  Keyboard,
  LifeBuoy,
  LogOut,
  UserPlus,
  Github,
  Cloud,
  MessageSquare,
  MapPin,
  Clock,
  Eye,
  EyeOff,
  Search,
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
  const [dropdownAction, setDropdownAction] = useState<string>('');
  const [statusBarVisible, setStatusBarVisible] = useState(true);
  const [activityBarVisible, setActivityBarVisible] = useState(false);
  const [panelVisible, setPanelVisible] = useState(true);
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState('medium');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    website: '',
    bio: '',
  });
  const [showPassword, setShowPassword] = useState(false);

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
          <CardTitle>Input Components</CardTitle>
          <CardDescription>
            Testing different input types, states, and interactive examples
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700">
                Basic Input Types
              </h3>
              <div className="space-y-3">
                <div>
                  <Label htmlFor="name-input">Text Input</Label>
                  <Input
                    type="text"
                    id="name-input"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={e =>
                      setFormData(prev => ({ ...prev, name: e.target.value }))
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="email-input">Email Input</Label>
                  <Input
                    type="email"
                    id="email-input"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={e =>
                      setFormData(prev => ({ ...prev, email: e.target.value }))
                    }
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Number Input</label>
                  <Input
                    type="number"
                    placeholder="Age"
                    min={1}
                    max={120}
                    value={formData.age}
                    onChange={e =>
                      setFormData(prev => ({ ...prev, age: e.target.value }))
                    }
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">URL Input</label>
                  <Input
                    type="url"
                    placeholder="https://example.com"
                    value={formData.website}
                    onChange={e =>
                      setFormData(prev => ({
                        ...prev,
                        website: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700">
                Enhanced Input Examples
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium">
                    Search with Icon
                  </label>
                  <div className="relative">
                    <Search className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
                    <Input
                      type="search"
                      placeholder="Search..."
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Email with Icon</label>
                  <div className="relative">
                    <Mail className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">
                    Password with Toggle
                  </label>
                  <div className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter password"
                      className="pr-10"
                      value={formData.password}
                      onChange={e =>
                        setFormData(prev => ({
                          ...prev,
                          password: e.target.value,
                        }))
                      }
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-muted-foreground hover:text-foreground absolute top-3 right-3 h-4 w-4"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Required Field</label>
                  <Input
                    type="text"
                    placeholder="This field is required"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700">
                Input States
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium">Default State</label>
                  <Input placeholder="Normal input" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-400">
                    Disabled
                  </label>
                  <Input placeholder="Disabled input" disabled />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-400">
                    Read Only
                  </label>
                  <Input value="Read-only value" readOnly />
                </div>
                <div>
                  <label className="text-sm font-medium">Error State</label>
                  <Input
                    placeholder="Invalid input"
                    aria-invalid="true"
                    className="border-red-500 focus-visible:border-red-600 focus-visible:ring-red-500/20"
                  />
                  <p className="mt-1 text-xs text-red-600">
                    This field has an error
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700">
                File and Date Inputs
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium">File Upload</label>
                  <Input type="file" accept=".jpg,.jpeg,.png,.pdf" />
                </div>
                <div>
                  <label className="text-sm font-medium">Date Picker</label>
                  <Input type="date" />
                </div>
                <div>
                  <label className="text-sm font-medium">Time Picker</label>
                  <Input type="time" />
                </div>
                <div>
                  <label className="text-sm font-medium">Range Input</label>
                  <Input type="range" min="0" max="100" defaultValue="50" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700">
                OTP Input Examples
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium">
                    Basic OTP (6 digits)
                  </label>
                  <div className="flex justify-center">
                    <InputOTP maxLength={6}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Two-Factor Auth</label>
                  <div className="flex justify-center">
                    <InputOTP maxLength={6} pattern="^[0-9]+$">
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">
                    Phone Verification (4 digits)
                  </label>
                  <div className="flex justify-center">
                    <InputOTP
                      maxLength={4}
                      pattern="^[0-9]+$"
                      inputMode="numeric"
                    >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700">
                Label Component Examples
              </h3>
              <div className="space-y-3">
                <div>
                  <Label htmlFor="styled-input">Styled Input with Label</Label>
                  <Input
                    type="text"
                    id="styled-input"
                    placeholder="This input uses the Label component"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms-checkbox" />
                  <Label htmlFor="terms-checkbox">
                    I agree to the terms and conditions
                  </Label>
                </div>
                <div>
                  <Label htmlFor="required-field">
                    Required Field <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="email"
                    id="required-field"
                    placeholder="This field is required"
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="custom-styled"
                    className="font-semibold text-blue-600"
                  >
                    Custom Styled Label
                  </Label>
                  <Input
                    type="text"
                    id="custom-styled"
                    placeholder="Input with custom label styling"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Complete Form Example
            </h3>
            <form
              onSubmit={e => {
                e.preventDefault();
                console.log('Form submitted:', formData);
                alert('Form submitted! Check console for data.');
              }}
              className="max-w-md space-y-4"
            >
              <div>
                <label htmlFor="form-name" className="text-sm font-medium">
                  Full Name *
                </label>
                <Input
                  id="form-name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={e =>
                    setFormData(prev => ({ ...prev, name: e.target.value }))
                  }
                />
              </div>
              <div>
                <label htmlFor="form-email" className="text-sm font-medium">
                  Email Address *
                </label>
                <Input
                  id="form-email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={e =>
                    setFormData(prev => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>
              <div>
                <label htmlFor="form-password" className="text-sm font-medium">
                  Password *
                </label>
                <Input
                  id="form-password"
                  name="password"
                  type="password"
                  placeholder="Enter a secure password"
                  required
                  minLength={8}
                  value={formData.password}
                  onChange={e =>
                    setFormData(prev => ({ ...prev, password: e.target.value }))
                  }
                />
              </div>
              <div>
                <label htmlFor="form-bio" className="text-sm font-medium">
                  Bio (Optional)
                </label>
                <Input
                  id="form-bio"
                  name="bio"
                  type="text"
                  placeholder="Tell us about yourself..."
                  maxLength={200}
                  value={formData.bio}
                  onChange={e =>
                    setFormData(prev => ({ ...prev, bio: e.target.value }))
                  }
                />
                <p className="text-muted-foreground mt-1 text-xs">
                  {formData.bio.length}/200 characters
                </p>
              </div>
              <Button type="submit" className="w-full">
                Submit Form
              </Button>
            </form>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Current Form Data
            </h3>
            <div className="bg-muted rounded border p-4 text-sm">
              <pre className="text-xs whitespace-pre-wrap">
                {JSON.stringify(formData, null, 2)}
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Input Features Demonstrated
            </h3>
            <div className="bg-muted rounded-md p-4 text-sm">
              <ul className="grid grid-cols-1 gap-1 md:grid-cols-2">
                <li>• All HTML input types supported</li>
                <li>• Icon integration with positioning</li>
                <li>• Password visibility toggle</li>
                <li>• Controlled and uncontrolled modes</li>
                <li>• Form validation and required fields</li>
                <li>• Error and success states</li>
                <li>• Disabled and readonly states</li>
                <li>• File upload capabilities</li>
                <li>• Date and time pickers</li>
                <li>• Range sliders</li>
                <li>• Character counting</li>
                <li>• Responsive and accessible design</li>
              </ul>
            </div>
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
                    <CalendarIcon className="h-4 w-4" />
                    <span className="text-sm">
                      Team Meeting - Tomorrow 2:00 PM
                    </span>
                  </div>
                </div>
                <div className="rounded-md border px-4 py-3">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4" />
                    <span className="text-sm">
                      Project Review - Friday 10:00 AM
                    </span>
                  </div>
                </div>
                <div className="rounded-md border px-4 py-3">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4" />
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
          <CardTitle>Dialog Components</CardTitle>
          <CardDescription>
            Modal dialog examples demonstrating different use cases and
            interactions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Basic Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Welcome to Dialog</DialogTitle>
                  <DialogDescription>
                    This is a basic dialog example with a title, description,
                    and action buttons.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-muted-foreground text-sm">
                    Dialog components are perfect for displaying important
                    information, forms, or confirmations that require user
                    attention.
                  </p>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button>Got it</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Application Settings</DialogTitle>
                  <DialogDescription>
                    Configure your application preferences and account settings.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 py-4">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Notifications</h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <Checkbox defaultChecked />
                        <span className="text-sm">Email notifications</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <Checkbox />
                        <span className="text-sm">Push notifications</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <Checkbox defaultChecked />
                        <span className="text-sm">Marketing updates</span>
                      </label>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Appearance</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Theme</label>
                        <select className="border-input mt-1 w-full rounded border px-3 py-2 text-sm">
                          <option>System</option>
                          <option>Light</option>
                          <option>Dark</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Language</label>
                        <select className="border-input mt-1 w-full rounded border px-3 py-2 text-sm">
                          <option>English</option>
                          <option>Spanish</option>
                          <option>French</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button>Save Changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="destructive">Delete Account</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-destructive flex items-center gap-2">
                    ⚠️ Delete Account
                  </DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove all your data from our servers.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <div className="bg-destructive/10 rounded-md p-4">
                    <p className="text-destructive text-sm">
                      <strong>Warning:</strong> Deleting your account will also:
                    </p>
                    <ul className="text-destructive mt-2 list-inside list-disc text-sm">
                      <li>Remove all your projects and files</li>
                      <li>Cancel your subscription</li>
                      <li>Delete your profile information</li>
                    </ul>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Keep Account</Button>
                  </DialogClose>
                  <Button variant="destructive">Delete Forever</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Form
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Contact Us</DialogTitle>
                  <DialogDescription>
                    Send us a message and we&apos;ll get back to you as soon as
                    possible.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="border-input w-full rounded border px-3 py-2 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="border-input w-full rounded border px-3 py-2 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <textarea
                      placeholder="Your message..."
                      rows={4}
                      className="border-input w-full rounded border px-3 py-2 text-sm"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button>Send Message</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Without Close X</Button>
              </DialogTrigger>
              <DialogContent showCloseButton={false}>
                <DialogHeader>
                  <DialogTitle>Required Action</DialogTitle>
                  <DialogDescription>
                    This dialog requires you to make a choice. Notice
                    there&apos;s no X button in the top-right corner.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <div className="rounded-md bg-blue-50 p-4 dark:bg-blue-950">
                    <div className="flex items-center gap-2">
                      <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        You must select one of the options below to proceed.
                      </p>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Option A</Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button>Option B</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Success Message</Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                    <span className="text-2xl">✅</span>
                  </div>
                  <DialogTitle>Success!</DialogTitle>
                  <DialogDescription>
                    Your changes have been saved successfully. All users will
                    see the updates immediately.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="justify-center">
                  <DialogClose asChild>
                    <Button>Continue</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Dialog Features Demonstrated
            </h3>
            <div className="bg-muted rounded-md p-4 text-sm">
              <ul className="space-y-1">
                <li>• Modal overlay with backdrop</li>
                <li>• Configurable close button (showCloseButton prop)</li>
                <li>• Escape key to close</li>
                <li>• Click outside to close (default Dialog behavior)</li>
                <li>• Focus management and accessibility</li>
                <li>• Responsive sizing and positioning</li>
                <li>• Header, content, and footer sections</li>
                <li>• Integration with other components</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Drawer Components</CardTitle>
          <CardDescription>
            Drawer components for slide-out panels and mobile-friendly
            navigation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Drawer direction="bottom">
              <DrawerTrigger asChild>
                <Button variant="outline">Bottom Drawer</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Bottom Drawer</DrawerTitle>
                  <DrawerDescription>
                    This drawer slides up from the bottom of the screen.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                  <p className="text-sm">
                    Perfect for mobile interfaces and contextual actions.
                  </p>
                </div>
                <DrawerFooter>
                  <Button>Action</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

            <Drawer direction="left">
              <DrawerTrigger asChild>
                <Button variant="outline">
                  <Menu className="mr-2 h-4 w-4" />
                  Side Menu
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Navigation Menu</DrawerTitle>
                  <DrawerDescription>
                    Browse through different sections.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                  <nav className="space-y-2">
                    <a
                      href="#"
                      className="hover:bg-accent block rounded px-3 py-2 text-sm"
                    >
                      Dashboard
                    </a>
                    <a
                      href="#"
                      className="hover:bg-accent block rounded px-3 py-2 text-sm"
                    >
                      Projects
                    </a>
                    <a
                      href="#"
                      className="hover:bg-accent block rounded px-3 py-2 text-sm"
                    >
                      Team
                    </a>
                    <a
                      href="#"
                      className="hover:bg-accent block rounded px-3 py-2 text-sm"
                    >
                      Settings
                    </a>
                  </nav>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline" className="w-full">
                      Close Menu
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

            <Drawer direction="right">
              <DrawerTrigger asChild>
                <Button>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings Panel
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Settings</DrawerTitle>
                  <DrawerDescription>
                    Configure your preferences.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="flex-1 p-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium">Theme</h3>
                      <div className="mt-2 space-y-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="theme"
                            value="light"
                            className="mr-2"
                          />
                          <span className="text-sm">Light mode</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="theme"
                            value="dark"
                            className="mr-2"
                          />
                          <span className="text-sm">Dark mode</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Notifications</h3>
                      <div className="mt-2 space-y-2">
                        <label className="flex items-center">
                          <Checkbox />
                          <span className="ml-2 text-sm">
                            Email notifications
                          </span>
                        </label>
                        <label className="flex items-center">
                          <Checkbox />
                          <span className="ml-2 text-sm">
                            Push notifications
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <DrawerFooter>
                  <Button>Save Changes</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

            <Drawer direction="top">
              <DrawerTrigger asChild>
                <Button variant="outline">Top Drawer</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Top Drawer</DrawerTitle>
                  <DrawerDescription>
                    This drawer slides down from the top.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                  <p className="text-sm">
                    Useful for notifications or announcements.
                  </p>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

            <Drawer>
              <DrawerTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Create Item
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Create New Item</DrawerTitle>
                  <DrawerDescription>
                    Fill out the form to create a new item.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Item Name</label>
                      <input
                        type="text"
                        placeholder="Enter item name"
                        className="border-input mt-1 w-full rounded border px-3 py-2 text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Description</label>
                      <textarea
                        placeholder="Enter description"
                        rows={3}
                        className="border-input mt-1 w-full rounded border px-3 py-2 text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Category</label>
                      <select className="border-input mt-1 w-full rounded border px-3 py-2 text-sm">
                        <option value="">Select category</option>
                        <option value="work">Work</option>
                        <option value="personal">Personal</option>
                        <option value="project">Project</option>
                      </select>
                    </div>
                  </div>
                </div>
                <DrawerFooter>
                  <Button>Create Item</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">Action Sheet</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Available Actions</DrawerTitle>
                  <DrawerDescription>
                    Choose an action to perform.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                  <div className="space-y-2">
                    <button className="hover:bg-accent flex w-full items-center rounded px-3 py-2 text-left">
                      <Pencil className="mr-3 h-4 w-4" />
                      <span>Edit Item</span>
                    </button>
                    <button className="hover:bg-accent flex w-full items-center rounded px-3 py-2 text-left">
                      <Plus className="mr-3 h-4 w-4" />
                      <span>Duplicate</span>
                    </button>
                    <button className="text-destructive hover:bg-destructive/10 flex w-full items-center rounded px-3 py-2 text-left">
                      <Trash2 className="mr-3 h-4 w-4" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline" className="w-full">
                      Cancel
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Drawer Features Demonstrated
            </h3>
            <div className="bg-muted rounded-md p-4 text-sm">
              <ul className="space-y-1">
                <li>• Four directional options: top, bottom, left, right</li>
                <li>• Mobile-friendly slide-out interactions</li>
                <li>• Configurable handle for bottom/top drawers</li>
                <li>• Escape key and backdrop click to close</li>
                <li>• Focus management and accessibility</li>
                <li>• Responsive width and height sizing</li>
                <li>• Header, content, and footer sections</li>
                <li>• Integration with forms and navigation</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Dropdown Menu Components</CardTitle>
          <CardDescription>
            Interactive dropdown menu components with various configurations and
            use cases
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700">
                Basic Account Menu
              </h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">My Account</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onSelect={() => setDropdownAction('Profile opened')}
                  >
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onSelect={() => setDropdownAction('Billing opened')}
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onSelect={() => setDropdownAction('Settings opened')}
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Keyboard className="mr-2 h-4 w-4" />
                    <span>Keyboard shortcuts</span>
                    <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onSelect={() => setDropdownAction('Logged out')}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700">
                Preferences with Checkboxes
              </h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">View Options</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={statusBarVisible}
                    onCheckedChange={setStatusBarVisible}
                  >
                    Status Bar
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={activityBarVisible}
                    onCheckedChange={setActivityBarVisible}
                  >
                    Activity Bar
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={panelVisible}
                    onCheckedChange={setPanelVisible}
                  >
                    Panel
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem disabled>
                    <Cloud className="mr-2 h-4 w-4" />
                    <span>API (Disabled)</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700">
                Theme Selection with Radio Groups
              </h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Theme: {theme}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Theme</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={theme}
                    onValueChange={setTheme}
                  >
                    <DropdownMenuRadioItem value="light">
                      Light
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="dark">
                      Dark
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="system">
                      System
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Font Size</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={fontSize}
                    onValueChange={setFontSize}
                  >
                    <DropdownMenuRadioItem value="small">
                      Small
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="medium">
                      Medium
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="large">
                      Large
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700">
                Actions with Submenus
              </h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Actions</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onSelect={() => setDropdownAction('Item edited')}
                  >
                    <Pencil className="mr-2 h-4 w-4" />
                    <span>Edit</span>
                    <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <UserPlus className="mr-2 h-4 w-4" />
                    <span>Share</span>
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <UserPlus className="mr-2 h-4 w-4" />
                      <span>Invite users</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem
                        onSelect={() => setDropdownAction('Email invite sent')}
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        <span>Email</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onSelect={() =>
                          setDropdownAction('Message invite sent')
                        }
                      >
                        <MessageSquare className="mr-2 h-4 w-4" />
                        <span>Message</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <CirclePlus className="mr-2 h-4 w-4" />
                        <span>More...</span>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    variant="destructive"
                    onSelect={() => setDropdownAction('Item deleted')}
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    <span>Delete</span>
                    <DropdownMenuShortcut>⌫</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700">
                Context Menu Style
              </h3>
              <div className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <Minus className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onSelect={() => setDropdownAction('Item edited')}
                    >
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onSelect={() => setDropdownAction('Copy made')}
                    >
                      Make a copy
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onSelect={() => setDropdownAction('Added to favorites')}
                    >
                      Favorite
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      variant="destructive"
                      onSelect={() => setDropdownAction('Item deleted')}
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                Right-click style menu
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700">
                Grouped Navigation
              </h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button>Navigation Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>Personal</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Billing</span>
                      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>Team</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <Users className="mr-2 h-4 w-4" />
                      <span>Team</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <UserPlus className="mr-2 h-4 w-4" />
                      <span>Invite users</span>
                      <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Plus className="mr-2 h-4 w-4" />
                      <span>New Team</span>
                      <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>Support</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <Github className="mr-2 h-4 w-4" />
                      <span>GitHub</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <LifeBuoy className="mr-2 h-4 w-4" />
                      <span>Support</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem disabled>
                      <Cloud className="mr-2 h-4 w-4" />
                      <span>API</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onSelect={() => setDropdownAction('Logged out')}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {dropdownAction && (
            <div className="rounded border border-green-200 bg-green-50 p-3 text-sm text-green-800">
              <span className="mr-2">
                <strong>Action taken:</strong> {dropdownAction}
              </span>
              <button
                onClick={() => setDropdownAction('')}
                className="ml-2 text-green-600 underline hover:no-underline"
              >
                Clear
              </button>
            </div>
          )}

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Current Dropdown States
            </h3>
            <div className="bg-muted rounded-md p-4 text-sm">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-1 font-medium">Appearance Settings:</p>
                  <p>Status Bar: {statusBarVisible ? 'Visible' : 'Hidden'}</p>
                  <p>
                    Activity Bar: {activityBarVisible ? 'Visible' : 'Hidden'}
                  </p>
                  <p>Panel: {panelVisible ? 'Visible' : 'Hidden'}</p>
                </div>
                <div>
                  <p className="mb-1 font-medium">Theme Settings:</p>
                  <p>Theme: {theme}</p>
                  <p>Font Size: {fontSize}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Dropdown Menu Features Demonstrated
            </h3>
            <div className="bg-muted rounded-md p-4 text-sm">
              <ul className="grid grid-cols-1 gap-1 md:grid-cols-2">
                <li>• Basic menu items with icons</li>
                <li>• Keyboard shortcuts display</li>
                <li>• Checkbox items with state</li>
                <li>• Radio group selections</li>
                <li>• Nested submenus</li>
                <li>• Grouped menu sections</li>
                <li>• Disabled menu items</li>
                <li>• Destructive action styling</li>
                <li>• Context menu patterns</li>
                <li>• Custom alignment options</li>
                <li>• Responsive menu widths</li>
                <li>• Full accessibility support</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Hover Card Components</CardTitle>
          <CardDescription>
            Interactive hover card components that display rich content on hover
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700">
                User Profile Card
              </h3>
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm">
                  Hover over the user link to see their profile information:
                </p>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="link">@nextjs</Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <Avatar>
                        <AvatarImage src="https://github.com/vercel.png" />
                        <AvatarFallback>VC</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@nextjs</h4>
                        <p className="text-sm">
                          The React Framework – created and maintained by
                          @vercel.
                        </p>
                        <div className="flex items-center pt-2">
                          <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                          <span className="text-muted-foreground text-xs">
                            Joined December 2021
                          </span>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700">
                Quick Info Card
              </h3>
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm">
                  Simple hover card for additional context:
                </p>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="outline">Project Status</Button>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">Project Details</h4>
                      <p className="text-muted-foreground text-sm">
                        This project is currently in active development with the
                        latest updates.
                      </p>
                      <div className="flex items-center pt-2">
                        <Clock className="mr-2 h-4 w-4 opacity-70" />
                        <span className="text-muted-foreground text-xs">
                          Updated 2 hours ago
                        </span>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700">
                Product Showcase
              </h3>
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm">
                  Feature overview with pricing:
                </p>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button>Pro Plan</Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-96">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-semibold">Pro Plan</h4>
                        <span className="text-2xl font-bold">$29/mo</span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Unlock premium features and advanced capabilities for
                        your projects.
                      </p>
                      <div className="space-y-2">
                        <h5 className="text-sm font-medium">
                          Features included:
                        </h5>
                        <ul className="text-muted-foreground space-y-1 text-xs">
                          <li>• Unlimited projects</li>
                          <li>• Advanced analytics</li>
                          <li>• Priority support</li>
                          <li>• Custom integrations</li>
                          <li>• Team collaboration tools</li>
                        </ul>
                      </div>
                      <div className="pt-2">
                        <Button size="sm" className="w-full">
                          Upgrade Now
                        </Button>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700">
                Team Member Card
              </h3>
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm">
                  Hover over team member avatars:
                </p>
                <div className="flex space-x-2">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="ghost" className="p-0">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>SC</AvatarFallback>
                        </Avatar>
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex justify-between space-x-4">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>SC</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold">shadcn</h4>
                          <p className="text-sm">
                            Building beautiful, accessible user interfaces with
                            React and Tailwind CSS.
                          </p>
                          <div className="flex items-center pt-2">
                            <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                            <span className="text-muted-foreground text-xs">
                              Joined March 2021
                            </span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="mr-2 h-4 w-4 opacity-70" />
                            <span className="text-muted-foreground text-xs">
                              United Kingdom
                            </span>
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>

                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="ghost" className="p-0">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="https://github.com/vercel.png" />
                          <AvatarFallback>VC</AvatarFallback>
                        </Avatar>
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex justify-between space-x-4">
                        <Avatar>
                          <AvatarImage src="https://github.com/vercel.png" />
                          <AvatarFallback>VC</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold">Vercel</h4>
                          <p className="text-sm">
                            The platform for frontend developers, providing
                            speed and reliability.
                          </p>
                          <div className="flex items-center pt-2">
                            <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                            <span className="text-muted-foreground text-xs">
                              Founded 2015
                            </span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="mr-2 h-4 w-4 opacity-70" />
                            <span className="text-muted-foreground text-xs">
                              San Francisco, CA
                            </span>
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700">
                Help & Documentation
              </h3>
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm">
                  Contextual help information:
                </p>
                <div className="space-y-2">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <Info className="mr-2 h-4 w-4" />
                        API Rate Limits
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">Rate Limiting</h4>
                        <p className="text-muted-foreground text-sm">
                          Our API has rate limits to ensure fair usage across
                          all users.
                        </p>
                        <div className="text-muted-foreground space-y-1 text-xs">
                          <p>• Free tier: 100 requests/hour</p>
                          <p>• Pro tier: 1,000 requests/hour</p>
                          <p>• Enterprise: Custom limits</p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>

                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <Settings className="mr-2 h-4 w-4" />
                        Configuration
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">Setup Guide</h4>
                        <p className="text-muted-foreground text-sm">
                          Quick steps to configure your application settings.
                        </p>
                        <div className="text-muted-foreground space-y-1 text-xs">
                          <p>1. Create API key</p>
                          <p>2. Set environment variables</p>
                          <p>3. Configure webhooks</p>
                          <p>4. Test connection</p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700">
                Custom Timing
              </h3>
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm">
                  Different hover delays:
                </p>
                <div className="space-y-2">
                  <HoverCard openDelay={100} closeDelay={50}>
                    <HoverCardTrigger asChild>
                      <Button variant="outline" size="sm">
                        Fast (100ms)
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">
                          Quick Response
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          Opens and closes quickly for rapid interactions.
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>

                  <HoverCard openDelay={1000} closeDelay={500}>
                    <HoverCardTrigger asChild>
                      <Button variant="outline" size="sm">
                        Slow (1000ms)
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">
                          Deliberate Hover
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          Requires intentional hovering to prevent accidental
                          triggers.
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Hover Card Features Demonstrated
            </h3>
            <div className="bg-muted rounded-md p-4 text-sm">
              <ul className="grid grid-cols-1 gap-1 md:grid-cols-2">
                <li>• Rich content with avatars and metadata</li>
                <li>• Customizable open and close delays</li>
                <li>• Multiple positioning options</li>
                <li>• Responsive content sizing</li>
                <li>• Integration with other components</li>
                <li>• Profile and user information display</li>
                <li>• Product showcases with pricing</li>
                <li>• Help and documentation tooltips</li>
                <li>• Team member information cards</li>
                <li>• Contextual information overlays</li>
                <li>• Accessibility and keyboard support</li>
                <li>• Smooth animations and transitions</li>
              </ul>
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
