import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@future-house/feathers';

export default function SelectExample() {
  const [selectedFruit, setSelectedFruit] = useState('');
  const [selectedFramework, setSelectedFramework] = useState('');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Select Component</CardTitle>
        <CardDescription>
          Customizable dropdown selection with groups, labels, and keyboard
          navigation
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">Basic Select</h3>
          <div className="flex items-center space-x-4">
            <Select value={selectedFruit} onValueChange={setSelectedFruit}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
                <SelectItem value="grape">Grape</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-muted-foreground text-sm">
              Selected: {selectedFruit || 'None'}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">Grouped Options</h3>
          <Select
            value={selectedFramework}
            onValueChange={setSelectedFramework}
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Choose a framework" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Frontend</SelectLabel>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="vue">Vue.js</SelectItem>
                <SelectItem value="angular">Angular</SelectItem>
                <SelectItem value="svelte">Svelte</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Backend</SelectLabel>
                <SelectItem value="nodejs">Node.js</SelectItem>
                <SelectItem value="python">Python</SelectItem>
                <SelectItem value="java">Java</SelectItem>
                <SelectItem value="go">Go</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">Disabled Select</h3>
          <Select disabled>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Disabled select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="bg-muted rounded-md p-4 text-sm">
          <h4 className="mb-2 font-medium">Select Features:</h4>
          <ul className="grid grid-cols-1 gap-1 md:grid-cols-2">
            <li>• Full keyboard navigation</li>
            <li>• Screen reader support</li>
            <li>• Portal-based dropdown</li>
            <li>• Grouped options</li>
            <li>• Custom sizing</li>
            <li>• Disabled states</li>
            <li>• Controlled/uncontrolled modes</li>
            <li>• Custom styling support</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
