import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@future-house/feathers';
import { Settings, Email, Information } from '@future-house/feathers/icons';

export default function DialogExample() {
  return (
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
                  This is a basic dialog example with a title, description, and
                  action buttons.
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
                <Email className="mr-2 h-4 w-4" />
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
                  This dialog requires you to make a choice. Notice there&apos;s
                  no X button in the top-right corner.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <div className="rounded-md bg-blue-50 p-4 dark:bg-blue-950">
                  <div className="flex items-center gap-2">
                    <Information className="h-4 w-4 text-blue-600 dark:text-blue-400" />
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
                  Your changes have been saved successfully. All users will see
                  the updates immediately.
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
  );
}
