import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Calendar,
} from '@future-house/feathers';

export default function CalendarExample() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedRange, setSelectedRange] = useState<
    | {
      from: Date | undefined;
      to: Date | undefined;
    }
    | undefined
  >();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calendar Components</CardTitle>
        <CardDescription>
          Testing different calendar modes and date selection
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Single Date Selection
            </h3>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
            {selectedDate && (
              <div className="rounded border border-blue-200 bg-blue-50 p-3 text-sm text-blue-800">
                Selected: {selectedDate.toLocaleDateString()}
              </div>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Date Range Selection
            </h3>
            <Calendar
              mode="range"
              selected={selectedRange}
              onSelect={setSelectedRange}
              className="rounded-md border"
            />
            {selectedRange?.from && (
              <div className="rounded border border-green-200 bg-green-50 p-3 text-sm text-green-800">
                {selectedRange.to ? (
                  <>
                    From: {selectedRange.from.toLocaleDateString()}
                    <br />
                    To: {selectedRange.to.toLocaleDateString()}
                  </>
                ) : (
                  <>From: {selectedRange.from.toLocaleDateString()}</>
                )}
              </div>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Multiple Months Display
            </h3>
            <Calendar
              mode="single"
              numberOfMonths={2}
              className="rounded-md border"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              With Dropdown Navigation
            </h3>
            <Calendar
              mode="single"
              captionLayout="dropdown"
              className="rounded-md border"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}