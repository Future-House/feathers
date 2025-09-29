import { Alert, AlertTitle, AlertDescription } from '@future-house/feathers';
import {
  Terminal,
  WarningAlt,
  CheckmarkFilled,
  Information,
} from '@future-house/feathers/icons';

export default function AlertExample() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Alert Component</h3>
        <div className="space-y-4">
          {/* Default Alert */}
          <Alert>
            <Terminal />
            <AlertTitle>Terminal Access</AlertTitle>
            <AlertDescription>
              You can access the terminal by clicking the console button in the
              bottom panel.
            </AlertDescription>
          </Alert>

          {/* Destructive Alert */}
          <Alert variant="destructive">
            <WarningAlt />
            <AlertTitle>Connection Error</AlertTitle>
            <AlertDescription>
              Unable to connect to the server. Please check your internet
              connection and try again.
            </AlertDescription>
          </Alert>

          {/* Success Alert (using default variant with custom styling) */}
          <Alert className="border-green-200 bg-green-50">
            <CheckmarkFilled className="text-green-600" />
            <AlertTitle className="text-green-800">Success!</AlertTitle>
            <AlertDescription className="text-green-700">
              Your settings have been saved successfully.
            </AlertDescription>
          </Alert>

          {/* Info Alert */}
          <Alert>
            <InformationclassName="text-blue-600" />
            <AlertTitle>New Feature Available</AlertTitle>
            <AlertDescription>
              Dark mode is now available in your settings. Toggle between light
              and dark themes to customize your experience.
            </AlertDescription>
          </Alert>

          {/* Alert without Icon */}
          <Alert>
            <AlertTitle>Simple Notification</AlertTitle>
            <AlertDescription>
              This is a basic alert without an icon. Perfect for simple
              notifications and messages.
            </AlertDescription>
          </Alert>

          {/* Alert with only Title */}
          <Alert>
            <Information/>
            <AlertTitle>Quick Update</AlertTitle>
          </Alert>

          {/* Alert with complex content */}
          <Alert>
            <Terminal />
            <AlertTitle>System Requirements</AlertTitle>
            <AlertDescription>
              <div className="space-y-2">
                <p>
                  Please ensure your system meets the following requirements:
                </p>
                <ul className="list-inside list-disc space-y-1 text-sm">
                  <li>Node.js version 18 or higher</li>
                  <li>At least 4GB of available RAM</li>
                  <li>Modern web browser with JavaScript enabled</li>
                </ul>
              </div>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
}
