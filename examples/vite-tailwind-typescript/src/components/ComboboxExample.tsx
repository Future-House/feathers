import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  Combobox,
  type ComboboxOption,
} from '@future-house/feathers';

const frameworkOptions: ComboboxOption[] = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt.js', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
  { value: 'gatsby', label: 'Gatsby' },
  { value: 'vite', label: 'Vite' },
];

const languageOptions: ComboboxOption[] = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'csharp', label: 'C#' },
  { value: 'rust', label: 'Rust' },
  { value: 'go', label: 'Go' },
  { value: 'php', label: 'PHP' },
];

const statusOptions: ComboboxOption[] = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'pending', label: 'Pending' },
  { value: 'suspended', label: 'Suspended', disabled: true },
  { value: 'archived', label: 'Archived' },
];

export default function ComboboxExample() {
  const [framework, setFramework] = useState('');
  const [language, setLanguage] = useState('');
  const [status, setStatus] = useState('');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Combobox Component</CardTitle>
        <CardDescription>
          A searchable select component with keyboard navigation and filtering
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <label className="text-sm font-medium">Framework</label>
            <Combobox
              options={frameworkOptions}
              value={framework}
              onValueChange={setFramework}
              placeholder="Select framework..."
              searchPlaceholder="Search frameworks..."
              emptyMessage="No framework found."
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Language</label>
            <Combobox
              options={languageOptions}
              value={language}
              onValueChange={setLanguage}
              placeholder="Select language..."
              searchPlaceholder="Search languages..."
              emptyMessage="No language found."
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Status</label>
            <Combobox
              options={statusOptions}
              value={status}
              onValueChange={setStatus}
              placeholder="Select status..."
              searchPlaceholder="Search status..."
              emptyMessage="No status found."
            />
          </div>
        </div>
        
        <div className="rounded-lg border p-4 bg-muted/50">
          <h4 className="text-sm font-medium mb-2">Selected Values:</h4>
          <div className="grid grid-cols-1 gap-2 text-sm text-muted-foreground">
            <div>
              <span className="font-medium">Framework:</span>{' '}
              {framework || 'None selected'}
            </div>
            <div>
              <span className="font-medium">Language:</span>{' '}
              {language || 'None selected'}
            </div>
            <div>
              <span className="font-medium">Status:</span>{' '}
              {status || 'None selected'}
            </div>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>
            <strong>Features:</strong> Type to search, keyboard navigation with
            arrow keys, press Enter to select, supports disabled options, and
            customizable messages.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}