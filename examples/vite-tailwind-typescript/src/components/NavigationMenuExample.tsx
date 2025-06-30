import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@future-house/feathers';
import {
  House,
  FileText,
  ShoppingCart,
  CircleQuestionMark,
} from '@future-house/feathers/icons';

export default function NavigationMenuExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>NavigationMenu Component</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Website Navigation
          </h3>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md"
                          href="/"
                        >
                          <House className="h-6 w-6" />
                          <div className="mt-4 mb-2 text-lg font-medium">
                            Welcome
                          </div>
                          <p className="text-muted-foreground text-sm leading-tight">
                            Get started with our component library and build
                            amazing interfaces.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="/docs"
                          className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                        >
                          <div className="text-sm leading-none font-medium">
                            Introduction
                          </div>
                          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                            Learn about our design system and component
                            architecture.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="/docs/installation"
                          className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                        >
                          <div className="text-sm leading-none font-medium">
                            Installation
                          </div>
                          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                            How to install and configure the library.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="/components/button"
                          className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                        >
                          <div className="text-sm leading-none font-medium">
                            Button
                          </div>
                          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                            Customizable button components for actions.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="/components/card"
                          className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                        >
                          <div className="text-sm leading-none font-medium">
                            Card
                          </div>
                          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                            Flexible containers for content organization.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="/components/dialog"
                          className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                        >
                          <div className="text-sm leading-none font-medium">
                            Dialog
                          </div>
                          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                            Modal dialogs for user interactions.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="/components/navigation"
                          className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                        >
                          <div className="text-sm leading-none font-medium">
                            Navigation
                          </div>
                          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                            Navigation components for site structure.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/docs"
                  className="group bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Documentation
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            E-commerce Navigation
          </h3>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <div>
                      <h4 className="mb-2 leading-none font-medium">
                        Categories
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="/electronics"
                              className="hover:bg-accent block rounded-md p-2 select-none"
                            >
                              Electronics
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="/clothing"
                              className="hover:bg-accent block rounded-md p-2 select-none"
                            >
                              Clothing
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="/books"
                              className="hover:bg-accent block rounded-md p-2 select-none"
                            >
                              Books
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 leading-none font-medium">
                        Featured
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="/sale"
                              className="hover:bg-accent block rounded-md p-2 select-none"
                            >
                              Sale Items
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="/new"
                              className="hover:bg-accent block rounded-md p-2 select-none"
                            >
                              New Arrivals
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className="group bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/cart"
                  className="group bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Cart
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/support"
                  className="group bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  <CircleQuestionMark className="mr-2 h-4 w-4" />
                  Support
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </CardContent>
    </Card>
  );
}