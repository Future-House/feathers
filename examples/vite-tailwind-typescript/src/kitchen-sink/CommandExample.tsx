import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
  Button,
} from '@future-house/feathers';
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  File,
  FileText,
  Folder,
  Search,
  Terminal,
  Mail,
  MessageSquare,
  CirclePlus,
} from '@future-house/feathers/icons';

export default function CommandExample() {
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Command Component</CardTitle>
        <CardDescription>
          A fast, composable command palette built with cmdk. Features keyboard
          navigation, search filtering, and support for complex layouts with
          groups, separators, and shortcuts.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Basic Command Example */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Basic Command Palette</h4>
          <Command className="max-w-[450px] rounded-lg border shadow-md">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <Smile className="mr-2 h-4 w-4" />
                  <span>Search Emoji</span>
                </CommandItem>
                <CommandItem>
                  <Calculator className="mr-2 h-4 w-4" />
                  <span>Calculator</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>

        {/* Command Dialog Example */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Command Dialog</h4>
          <div className="space-y-4">
            <p className="text-muted-foreground text-sm">
              Press the button to open the command dialog
            </p>
            <Button onClick={() => setOpen(true)}>Open Command Dialog</Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Navigation">
                  <CommandItem onSelect={() => setOpen(false)}>
                    <File className="mr-2 h-4 w-4" />
                    <span>Files</span>
                  </CommandItem>
                  <CommandItem onSelect={() => setOpen(false)}>
                    <Folder className="mr-2 h-4 w-4" />
                    <span>Folders</span>
                  </CommandItem>
                  <CommandItem onSelect={() => setOpen(false)}>
                    <Search className="mr-2 h-4 w-4" />
                    <span>Search</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Actions">
                  <CommandItem onSelect={() => setOpen(false)}>
                    <FileText className="mr-2 h-4 w-4" />
                    <span>Create New File</span>
                    <CommandShortcut>⌘N</CommandShortcut>
                  </CommandItem>
                  <CommandItem onSelect={() => setOpen(false)}>
                    <Terminal className="mr-2 h-4 w-4" />
                    <span>Open Terminal</span>
                    <CommandShortcut>⌃`</CommandShortcut>
                  </CommandItem>
                  <CommandItem onSelect={() => setOpen(false)}>
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Send Email</span>
                    <CommandShortcut>⌘E</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </CommandDialog>
          </div>
        </div>

        {/* Complex Layout Example */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Complex Layout with Groups</h4>
          <Command className="max-w-[450px] rounded-lg border shadow-md">
            <CommandInput placeholder="Search in files and folders..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Files">
                <CommandItem>
                  <FileText className="mr-2 h-4 w-4" />
                  <span>README.md</span>
                </CommandItem>
                <CommandItem>
                  <FileText className="mr-2 h-4 w-4" />
                  <span>package.json</span>
                </CommandItem>
                <CommandItem>
                  <FileText className="mr-2 h-4 w-4" />
                  <span>tsconfig.json</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Folders">
                <CommandItem>
                  <Folder className="mr-2 h-4 w-4" />
                  <span>src/</span>
                </CommandItem>
                <CommandItem>
                  <Folder className="mr-2 h-4 w-4" />
                  <span>components/</span>
                </CommandItem>
                <CommandItem>
                  <Folder className="mr-2 h-4 w-4" />
                  <span>utils/</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Actions">
                <CommandItem>
                  <Search className="mr-2 h-4 w-4" />
                  <span>Search in files</span>
                  <CommandShortcut>⌘⇧F</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CirclePlus className="mr-2 h-4 w-4" />
                  <span>Create new file</span>
                  <CommandShortcut>⌘N</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Open chat</span>
                  <CommandShortcut>⌘K</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>

        <div className="text-muted-foreground text-sm">
          <p>
            <strong>Features:</strong> Type to search and filter commands,
            navigate with arrow keys, press Enter to select, supports keyboard
            shortcuts, grouped commands with separators, and modal dialog
            variant.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
