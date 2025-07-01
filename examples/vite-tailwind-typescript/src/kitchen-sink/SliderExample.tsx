import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Slider,
} from '@future-house/feathers';

export default function SliderExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Slider Component</CardTitle>
        <CardDescription>
          Interactive range input component with smooth thumb interactions and
          support for single values or ranges
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Basic Single Value Slider
          </h3>
          <div className="w-80 space-y-2">
            <Slider defaultValue={[33]} max={100} step={1} />
            <div className="text-muted-foreground flex justify-between text-xs">
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Range Slider (Dual Values)
          </h3>
          <div className="w-80 space-y-2">
            <Slider defaultValue={[25, 75]} max={100} step={1} />
            <div className="text-muted-foreground flex justify-between text-xs">
              <span>Min: 25</span>
              <span>Max: 75</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Custom Step and Range
          </h3>
          <div className="w-80 space-y-2">
            <Slider defaultValue={[20]} min={0} max={50} step={5} />
            <div className="text-muted-foreground flex justify-between text-xs">
              <span>0</span>
              <span>25</span>
              <span>50 (step: 5)</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">Vertical Slider</h3>
          <div className="flex h-48 items-center justify-center">
            <Slider
              defaultValue={[40]}
              max={100}
              step={1}
              orientation="vertical"
              className="h-full"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">Disabled State</h3>
          <div className="w-80">
            <Slider defaultValue={[60]} max={100} step={1} disabled />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">Multiple Thumbs</h3>
          <div className="w-80 space-y-2">
            <Slider defaultValue={[10, 30, 60, 90]} max={100} step={1} />
            <div className="text-muted-foreground text-xs">
              Four values: 10, 30, 60, 90
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Volume Control Example
          </h3>
          <div className="w-80 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm">🔊</span>
              <Slider
                defaultValue={[75]}
                max={100}
                step={1}
                className="flex-1"
              />
              <span className="text-muted-foreground w-8 text-xs">75%</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Price Range Example
          </h3>
          <div className="w-80 space-y-2">
            <Slider defaultValue={[200, 800]} min={0} max={1000} step={50} />
            <div className="text-muted-foreground flex justify-between text-xs">
              <span>$0</span>
              <span>$200 - $800</span>
              <span>$1000</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="mb-2 font-medium">Slider Features:</h4>
          <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm">
            <li>• Single value and range support</li>
            <li>• Customizable min, max, and step values</li>
            <li>• Horizontal and vertical orientations</li>
            <li>• Multiple thumb support</li>
            <li>• Accessible keyboard navigation</li>
            <li>• Smooth animations and interactions</li>
            <li>• Disabled state support</li>
            <li>• Form integration ready</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
