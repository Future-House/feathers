import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@future-house/feathers';

export default function ResizableExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resizable Panel Groups</CardTitle>
        <CardDescription>
          Interactive resizable layouts with drag handles and keyboard
          navigation
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Horizontal Layout
          </h3>
          <div className="h-[300px] w-full">
            <ResizablePanelGroup
              direction="horizontal"
              className="min-h-[200px] max-w-md rounded-lg border"
            >
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-4">
                  <Card className="w-full">
                    <CardHeader>
                      <CardTitle className="text-sm">Left Panel</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs">
                      <p className="text-muted-foreground">
                        Drag the handle to resize this panel
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-4">
                  <Card className="w-full">
                    <CardHeader>
                      <CardTitle className="text-sm">Right Panel</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs">
                      <p className="text-muted-foreground">
                        This panel adjusts automatically
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Nested Layout with Sidebar
          </h3>
          <div className="h-[400px] w-full">
            <ResizablePanelGroup
              direction="horizontal"
              className="min-h-[200px] max-w-2xl rounded-lg border"
            >
              <ResizablePanel defaultSize={25} minSize={15} collapsible>
                <div className="flex h-full items-center justify-center p-4">
                  <Card className="w-full">
                    <CardHeader>
                      <CardTitle className="text-sm">Sidebar</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs">
                      <p className="text-muted-foreground">
                        Navigation sidebar (collapsible)
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={75}>
                <ResizablePanelGroup direction="vertical">
                  <ResizablePanel defaultSize={60}>
                    <div className="flex h-full items-center justify-center p-4">
                      <Card className="w-full">
                        <CardHeader>
                          <CardTitle className="text-sm">
                            Main Content
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="text-xs">
                          <p className="text-muted-foreground">
                            Primary content area with nested vertical layout
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={40}>
                    <div className="flex h-full items-center justify-center p-4">
                      <Card className="w-full">
                        <CardHeader>
                          <CardTitle className="text-sm">
                            Details Panel
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="text-xs">
                          <p className="text-muted-foreground">
                            Additional details and information
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>

        <div className="bg-muted rounded-md p-4 text-sm">
          <h4 className="mb-2 font-medium">Resizable Panel Features:</h4>
          <ul className="grid grid-cols-1 gap-1 md:grid-cols-2">
            <li>• Drag-to-resize with mouse or touch</li>
            <li>• Keyboard navigation support</li>
            <li>• Horizontal and vertical layouts</li>
            <li>• Nested panel groups</li>
            <li>• Collapsible panels</li>
            <li>• Minimum and maximum size constraints</li>
            <li>• Optional visual grip handles</li>
            <li>• Automatic state persistence</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}