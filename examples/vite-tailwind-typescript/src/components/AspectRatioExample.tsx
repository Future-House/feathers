import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  AspectRatio,
  Button,
} from '@future-house/feathers';

export default function AspectRatioExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AspectRatio Components</CardTitle>
        <CardDescription>
          Testing different aspect ratios for images, videos, and other content
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
  );
}
