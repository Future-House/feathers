import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@future-house/feathers';
import {
  Calendar as CalendarIcon,
  Clock,
  Info,
  MapPin,
  Settings,
} from '@future-house/feathers/icons';

export default function HoverCardExample() {
  return (
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
                        The React Framework – created and maintained by @vercel.
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
                      Unlock premium features and advanced capabilities for your
                      projects.
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
                          The platform for frontend developers, providing speed
                          and reliability.
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
                        Our API has rate limits to ensure fair usage across all
                        users.
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
            <h3 className="text-sm font-medium text-gray-700">Custom Timing</h3>
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
                      <h4 className="text-sm font-semibold">Quick Response</h4>
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
  );
}
