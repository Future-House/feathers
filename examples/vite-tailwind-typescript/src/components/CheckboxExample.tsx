import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Checkbox,
} from '@future-house/feathers';

export default function CheckboxExample() {
  const [checkboxStates, setCheckboxStates] = useState({
    terms: false,
    newsletter: true,
    notifications: 'indeterminate' as boolean | 'indeterminate',
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Checkbox Components</CardTitle>
        <CardDescription>
          Testing different checkbox states and interactions
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={checkboxStates.terms}
              onCheckedChange={checked =>
                setCheckboxStates(prev => ({
                  ...prev,
                  terms: checked === true,
                }))
              }
            />
            <label
              htmlFor="terms"
              className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="newsletter"
              checked={checkboxStates.newsletter}
              onCheckedChange={checked =>
                setCheckboxStates(prev => ({
                  ...prev,
                  newsletter: checked === true,
                }))
              }
            />
            <label
              htmlFor="newsletter"
              className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Subscribe to newsletter
            </label>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="notifications"
                checked={checkboxStates.notifications}
                onCheckedChange={checked =>
                  setCheckboxStates(prev => ({
                    ...prev,
                    notifications: checked,
                  }))
                }
              />
              <label
                htmlFor="notifications"
                className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Enable notifications (TODO: supports indeterminate)
              </label>
            </div>
            <div className="ml-6 flex gap-1">
              <button
                onClick={() =>
                  setCheckboxStates(prev => ({
                    ...prev,
                    notifications: true,
                  }))
                }
                className="rounded border px-2 py-1 text-xs hover:bg-gray-50"
              >
                Check
              </button>
              <button
                onClick={() =>
                  setCheckboxStates(prev => ({
                    ...prev,
                    notifications: false,
                  }))
                }
                className="rounded border px-2 py-1 text-xs hover:bg-gray-50"
              >
                Uncheck
              </button>
              <button
                onClick={() =>
                  setCheckboxStates(prev => ({
                    ...prev,
                    notifications: 'indeterminate',
                  }))
                }
                className="rounded border px-2 py-1 text-xs hover:bg-gray-50"
              >
                Indeterminate
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="disabled" disabled />
            <label
              htmlFor="disabled"
              className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Disabled checkbox
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="disabled-checked" disabled defaultChecked />
            <label
              htmlFor="disabled-checked"
              className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Disabled checked checkbox
            </label>
          </div>
        </div>

        <div className="rounded border p-3 text-xs text-gray-600">
          <p className="mb-1 font-medium">Current states:</p>
          <p>Terms: {checkboxStates.terms ? 'Accepted' : 'Not accepted'}</p>
          <p>
            Newsletter:{' '}
            {checkboxStates.newsletter ? 'Subscribed' : 'Not subscribed'}
          </p>
          <p>
            Notifications:{' '}
            {checkboxStates.notifications === 'indeterminate'
              ? 'Indeterminate'
              : checkboxStates.notifications
                ? 'Enabled'
                : 'Disabled'}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}