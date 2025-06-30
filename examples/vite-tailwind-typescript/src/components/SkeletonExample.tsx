import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Skeleton,
} from '@future-house/feathers';

export default function SkeletonExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Skeleton Component</CardTitle>
        <CardDescription>
          Placeholder loading states with smooth pulsing animation to indicate
          content is being loaded
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Basic Skeleton Shapes
          </h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">Text Lines</p>
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[150px]" />
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">Avatar</p>
              <Skeleton className="h-12 w-12 rounded-full" />
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">Card</p>
              <Skeleton className="h-32 w-full rounded-lg" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Card Loading Example
          </h3>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            List Loading Example
          </h3>
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center space-x-4">
                <Skeleton className="h-8 w-8 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-3 w-[200px]" />
                  <Skeleton className="h-3 w-[150px]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Different Sizes & Shapes
          </h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Skeleton className="h-2 w-[100px]" />
              <span className="text-muted-foreground text-xs">Small</span>
            </div>
            <div className="flex items-center gap-4">
              <Skeleton className="h-4 w-[200px]" />
              <span className="text-muted-foreground text-xs">Medium</span>
            </div>
            <div className="flex items-center gap-4">
              <Skeleton className="h-6 w-[300px]" />
              <span className="text-muted-foreground text-xs">Large</span>
            </div>
            <div className="flex items-center gap-4">
              <Skeleton className="h-20 w-20 rounded-lg" />
              <span className="text-muted-foreground text-xs">Square</span>
            </div>
            <div className="flex items-center gap-4">
              <Skeleton className="h-16 w-16 rounded-full" />
              <span className="text-muted-foreground text-xs">Circle</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="mb-2 font-medium">Skeleton Features:</h4>
          <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm">
            <li>• Smooth pulsing animation</li>
            <li>• Customizable dimensions</li>
            <li>• Multiple shape support</li>
            <li>• Flexible sizing with Tailwind</li>
            <li>• Accessible loading states</li>
            <li>• Reduced perceived load times</li>
            <li>• Consistent visual feedback</li>
            <li>• Easy integration</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}