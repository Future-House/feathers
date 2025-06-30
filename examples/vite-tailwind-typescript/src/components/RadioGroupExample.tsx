import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Label,
  RadioGroup,
  RadioGroupItem,
} from '@future-house/feathers';

export default function RadioGroupExample() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [notificationFrequency, setNotificationFrequency] = useState('daily');

  return (
    <Card>
      <CardHeader>
        <CardTitle>RadioGroup Component</CardTitle>
        <CardDescription>
          Selection controls for mutually exclusive options with proper
          accessibility
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Payment Method Selection
          </h3>
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="card" id="card-example" />
              <Label
                htmlFor="card-example"
                className="flex items-center gap-2 font-normal"
              >
                💳 Credit Card
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="paypal" id="paypal-example" />
              <Label
                htmlFor="paypal-example"
                className="flex items-center gap-2 font-normal"
              >
                🅿️ PayPal
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="apple" id="apple-example" />
              <Label
                htmlFor="apple-example"
                className="flex items-center gap-2 font-normal"
              >
                🍎 Apple Pay
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="google" id="google-example" />
              <Label
                htmlFor="google-example"
                className="flex items-center gap-2 font-normal"
              >
                🌐 Google Pay
              </Label>
            </div>
          </RadioGroup>
          <p className="text-muted-foreground text-sm">
            Selected payment method: <strong>{paymentMethod}</strong>
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Notification Settings
          </h3>
          <RadioGroup
            value={notificationFrequency}
            onValueChange={setNotificationFrequency}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="immediate" id="immediate-example" />
              <Label htmlFor="immediate-example" className="font-normal">
                <div className="grid gap-1.5 leading-none">
                  <div>Immediate</div>
                  <div className="text-muted-foreground text-xs">
                    Get notified as soon as something happens
                  </div>
                </div>
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="daily" id="daily-example" />
              <Label htmlFor="daily-example" className="font-normal">
                <div className="grid gap-1.5 leading-none">
                  <div>Daily digest</div>
                  <div className="text-muted-foreground text-xs">
                    A summary of all activities sent once a day
                  </div>
                </div>
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="weekly" id="weekly-example" />
              <Label htmlFor="weekly-example" className="font-normal">
                <div className="grid gap-1.5 leading-none">
                  <div>Weekly summary</div>
                  <div className="text-muted-foreground text-xs">
                    A comprehensive report sent every week
                  </div>
                </div>
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="never" id="never-example" />
              <Label htmlFor="never-example" className="font-normal">
                <div className="grid gap-1.5 leading-none">
                  <div>Never</div>
                  <div className="text-muted-foreground text-xs">
                    Disable all notifications
                  </div>
                </div>
              </Label>
            </div>
          </RadioGroup>
          <p className="text-muted-foreground text-sm">
            Notification frequency: <strong>{notificationFrequency}</strong>
          </p>
        </div>

        <div className="bg-muted rounded-md p-4 text-sm">
          <h4 className="mb-2 font-medium">RadioGroup Features:</h4>
          <ul className="grid grid-cols-1 gap-1 md:grid-cols-2">
            <li>• Mutually exclusive selection</li>
            <li>• Keyboard navigation support</li>
            <li>• Customizable styling</li>
            <li>• Proper accessibility attributes</li>
            <li>• Controlled and uncontrolled modes</li>
            <li>• Individual item disable states</li>
            <li>• Horizontal and vertical orientation</li>
            <li>• Form integration support</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}