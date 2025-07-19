import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
  toast,
} from '@future-house/feathers';

export default function SonnerExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sonner/Toaster Component</CardTitle>
        <CardDescription>
          An opinionated toast component for React. A toast is a subtle
          notification commonly found in modern interfaces.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Basic Toast Types
          </h3>
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => toast('Default toast')}>Default</Button>
            <Button onClick={() => toast.success('Success message!')}>
              Success
            </Button>
            <Button onClick={() => toast.error('Error occurred!')}>
              Error
            </Button>
            <Button onClick={() => toast.warning('Warning message!')}>
              Warning
            </Button>
            <Button onClick={() => toast.info('Info message!')}>Info</Button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Toast with Description
          </h3>
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() =>
                toast('Event scheduled', {
                  description:
                    'Your meeting has been scheduled for tomorrow at 9:00 AM',
                })
              }
            >
              With Description
            </Button>
            <Button
              onClick={() =>
                toast.success('Changes saved!', {
                  description:
                    'Your preferences have been updated successfully',
                })
              }
            >
              Success with Description
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Interactive Toasts
          </h3>
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() =>
                toast('File uploaded', {
                  action: {
                    label: 'View',
                    onClick: () => console.log('View clicked'),
                  },
                })
              }
            >
              With Action
            </Button>
            <Button
              onClick={() =>
                toast('Delete file?', {
                  description: 'This action cannot be undone',
                  action: {
                    label: 'Delete',
                    onClick: () => console.log('Deleted'),
                  },
                  cancel: {
                    label: 'Cancel',
                    onClick: () => console.log('Cancelled'),
                  },
                })
              }
            >
              With Cancel
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">Custom Duration</h3>
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => toast('Quick message', { duration: 1000 })}>
              1 Second
            </Button>
            <Button onClick={() => toast('Long message', { duration: 10000 })}>
              10 Seconds
            </Button>
            <Button
              onClick={() =>
                toast('Persistent message', { duration: Infinity })
              }
            >
              Persistent
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Promise Handling
          </h3>
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => {
                const myPromise = (): Promise<{ name: string }> =>
                  new Promise(resolve =>
                    setTimeout(() => resolve({ name: 'Sonner' }), 2000)
                  );

                toast.promise(myPromise, {
                  loading: 'Loading...',
                  success: (data: { name: string }) =>
                    `${data.name} loaded successfully!`,
                  error: 'Error occurred',
                });
              }}
            >
              Promise Toast
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">Loading States</h3>
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => {
                const toastId = toast.loading('Uploading file...');
                setTimeout(() => {
                  toast.success('File uploaded!', { id: toastId });
                }, 2000);
              }}
            >
              Loading to Success
            </Button>
            <Button
              onClick={() => {
                const toastId = toast.loading('Processing...');
                setTimeout(() => {
                  toast.error('Processing failed!', { id: toastId });
                }, 2000);
              }}
            >
              Loading to Error
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="mb-2 font-medium">Sonner Features:</h4>
          <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm">
            <li>• Multiple toast types (success, error, warning, info)</li>
            <li>• Action buttons and descriptions</li>
            <li>• Promise handling with loading states</li>
            <li>• Customizable duration and positioning</li>
            <li>• Rich colors and close buttons</li>
            <li>• Keyboard shortcuts and accessibility</li>
            <li>• Theme-aware styling</li>
            <li>• Expandable and stackable toasts</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
