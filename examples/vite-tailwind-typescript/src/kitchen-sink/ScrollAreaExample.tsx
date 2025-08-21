import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ScrollArea,
  ScrollBar,
} from '@future-house/feathers';

export default function ScrollAreaExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Scroll Area Component</CardTitle>
        <CardDescription>
          Custom styled scrollbars for cross-browser consistency and better UX
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Basic Vertical Scroll
          </h3>
          <ScrollArea className="h-72 w-48 rounded-md border">
            <div className="p-4">
              <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
              {Array.from({ length: 50 }).map((_, i) => (
                <div key={i} className="text-sm">
                  Tag {i + 1}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Horizontal Scroll
          </h3>
          <ScrollArea className="w-96 rounded-md border whitespace-nowrap">
            <div className="flex w-max space-x-4 p-4">
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={i}
                  className="flex h-16 w-24 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-slate-50"
                >
                  <span className="text-xs font-medium">Item {i + 1}</span>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">Chat Messages</h3>
          <Card className="w-80">
            <CardHeader>
              <CardTitle className="text-base">Recent Messages</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-64 px-4 pb-4">
                <div className="space-y-3">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="flex flex-col space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-semibold">
                          {i % 3 === 0
                            ? 'Alice'
                            : i % 3 === 1
                              ? 'Bob'
                              : 'Charlie'}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {Math.floor(Math.random() * 12) + 1}:
                          {String(Math.floor(Math.random() * 60)).padStart(
                            2,
                            '0'
                          )}
                          {Math.random() > 0.5 ? 'AM' : 'PM'}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Message {i + 1}: This is some example chat content that
                        demonstrates scrolling.
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted rounded-md p-4 text-sm">
          <h4 className="mb-2 font-medium">ScrollArea Features:</h4>
          <ul className="grid grid-cols-1 gap-1 md:grid-cols-2">
            <li>• Custom styled scrollbars</li>
            <li>• Cross-browser consistency</li>
            <li>• Horizontal and vertical scrolling</li>
            <li>• Keyboard navigation support</li>
            <li>• Touch-friendly scrolling</li>
            <li>• Customizable scroll behavior</li>
            <li>• Nested scroll areas support</li>
            <li>• Accessibility compliant</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
