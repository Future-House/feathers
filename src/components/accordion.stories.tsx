import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './accordion';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A vertically stacked set of interactive headings that each reveal a section of content. Built with Radix UI Accordion primitives and styled with Tailwind CSS.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    // Root component props
    asChild: {
      control: { type: 'boolean' },
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    type: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
      description: 'Determines whether one or multiple items can be opened at the same time',
      table: {
        type: { summary: '"single" | "multiple"' },
        defaultValue: { summary: undefined },
      },
    },
    value: {
      control: { type: 'text' },
      description: 'The controlled value of the item to expand. Should be used in conjunction with onValueChange',
      table: {
        type: { summary: 'string | string[]' },
        defaultValue: { summary: undefined },
      },
    },
    defaultValue: {
      control: { type: 'text' },
      description: 'The value of the item to expand when initially rendered (uncontrolled). Use when you do not need to control the state',
      table: {
        type: { summary: 'string | string[]' },
        defaultValue: { summary: undefined },
      },
    },
    onValueChange: {
      action: 'onValueChange',
      description: 'Event handler called when the expanded state of an item changes',
      table: {
        type: { summary: '(value: string | string[]) => void' },
        defaultValue: { summary: undefined },
      },
    },
    collapsible: {
      control: { type: 'boolean' },
      description: 'When type is "single", allows closing content when clicking trigger for an open item',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'When true, prevents the user from interacting with the accordion and all its items',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    dir: {
      control: { type: 'select' },
      options: ['ltr', 'rtl'],
      description: 'The reading direction of the accordion when applicable. If omitted, inherits globally from DirectionProvider or assumes LTR (left-to-right) reading mode',
      table: {
        type: { summary: '"ltr" | "rtl"' },
        defaultValue: { summary: '"ltr"' },
      },
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the accordion',
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: '"vertical"' },
      },
    },
    // HTML attributes
    className: {
      control: { type: 'text' },
      description: 'CSS class name to apply to the accordion root',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
      },
    },
    id: {
      control: { type: 'text' },
      description: 'HTML id attribute',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
      },
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[450px]">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="w-[450px]">
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>Frontend Technologies</AccordionTrigger>
          <AccordionContent>
            React, Vue.js, Angular, TypeScript, JavaScript, HTML5, CSS3, and various UI libraries and frameworks.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Backend Technologies</AccordionTrigger>
          <AccordionContent>
            Node.js, Python, Java, .NET, PHP, databases like PostgreSQL, MongoDB, and cloud services.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>DevOps & Tools</AccordionTrigger>
          <AccordionContent>
            Docker, Kubernetes, CI/CD pipelines, AWS, Azure, GCP, monitoring tools, and version control systems.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const FAQ: Story = {
  render: () => (
    <div className="w-[550px]">
      <Accordion type="single" collapsible>
        <AccordionItem value="shipping">
          <AccordionTrigger>What are your shipping options?</AccordionTrigger>
          <AccordionContent>
            We offer standard shipping (5-7 business days), expedited shipping (2-3 business days), 
            and overnight shipping. Free standard shipping is available on orders over $50.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="returns">
          <AccordionTrigger>What is your return policy?</AccordionTrigger>
          <AccordionContent>
            We accept returns within 30 days of purchase. Items must be in original condition 
            with tags attached. Refunds are processed within 5-10 business days of receiving the returned item.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="warranty">
          <AccordionTrigger>Do you offer warranties?</AccordionTrigger>
          <AccordionContent>
            Yes, all our products come with a 1-year manufacturer warranty. Extended warranties 
            are available for purchase. The warranty covers defects in materials and workmanship.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="support">
          <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
          <AccordionContent>
            You can reach our customer support team via email at support@example.com, 
            phone at 1-800-123-4567, or through our live chat feature available 24/7.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const WithRichContent: Story = {
  render: () => (
    <div className="w-[500px]">
      <Accordion type="single" collapsible>
        <AccordionItem value="features">
          <AccordionTrigger>Key Features</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <h4 className="font-semibold">Performance</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Lightning-fast load times</li>
                <li>Optimized for mobile devices</li>
                <li>Server-side rendering support</li>
              </ul>
              <h4 className="font-semibold">Accessibility</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>WCAG 2.1 AA compliant</li>
                <li>Screen reader compatible</li>
                <li>Keyboard navigation support</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="pricing">
          <AccordionTrigger>Pricing Plans</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="border rounded-lg p-3">
                <h4 className="font-semibold">Basic Plan</h4>
                <p className="text-2xl font-bold">$9/month</p>
                <p className="text-sm text-muted-foreground">Perfect for individuals</p>
              </div>
              <div className="border rounded-lg p-3">
                <h4 className="font-semibold">Pro Plan</h4>
                <p className="text-2xl font-bold">$29/month</p>
                <p className="text-sm text-muted-foreground">Ideal for small teams</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="integration">
          <AccordionTrigger>Integration Options</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 border rounded">
                <div className="h-8 w-8 bg-blue-100 rounded mx-auto mb-2"></div>
                <p className="text-sm font-medium">REST API</p>
              </div>
              <div className="text-center p-3 border rounded">
                <div className="h-8 w-8 bg-green-100 rounded mx-auto mb-2"></div>
                <p className="text-sm font-medium">GraphQL</p>
              </div>
              <div className="text-center p-3 border rounded">
                <div className="h-8 w-8 bg-purple-100 rounded mx-auto mb-2"></div>
                <p className="text-sm font-medium">Webhooks</p>
              </div>
              <div className="text-center p-3 border rounded">
                <div className="h-8 w-8 bg-orange-100 rounded mx-auto mb-2"></div>
                <p className="text-sm font-medium">SDK</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const Controlled: Story = {
  args: {
    type: 'single' as const,
  },
  render: function ControlledAccordion() {
    const [value, setValue] = React.useState<string | undefined>('item-2');
    
    return (
      <div className="w-[450px] space-y-4">
        <div className="flex gap-2">
          <button 
            onClick={() => setValue('item-1')} 
            className="px-3 py-1 text-sm border rounded hover:bg-gray-50"
          >
            Open Item 1
          </button>
          <button 
            onClick={() => setValue('item-2')} 
            className="px-3 py-1 text-sm border rounded hover:bg-gray-50"
          >
            Open Item 2
          </button>
          <button 
            onClick={() => setValue('item-3')} 
            className="px-3 py-1 text-sm border rounded hover:bg-gray-50"
          >
            Open Item 3
          </button>
          <button 
            onClick={() => setValue(undefined)} 
            className="px-3 py-1 text-sm border rounded hover:bg-gray-50"
          >
            Close All
          </button>
        </div>
        <Accordion type="single" value={value} onValueChange={setValue}>
          <AccordionItem value="item-1">
            <AccordionTrigger>Controlled Item 1</AccordionTrigger>
            <AccordionContent>
              This accordion is controlled by external buttons. The current value is: {value || 'none'}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Controlled Item 2</AccordionTrigger>
            <AccordionContent>
              You can control which item is open using the buttons above.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Controlled Item 3</AccordionTrigger>
            <AccordionContent>
              This demonstrates the controlled usage pattern of the accordion component.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  },
};

export const CustomStyling: Story = {
  args: {
    type: 'single' as const,
  },
  render: () => (
    <div className="w-[450px]">
      <Accordion type="single" collapsible className="bg-gray-50 rounded-lg p-4">
        <AccordionItem value="item-1" className="border-gray-200 last:border-b">
          <AccordionTrigger className="text-blue-700 hover:text-blue-900 font-semibold">
            Custom Styled Trigger
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 bg-white rounded p-3 mt-2">
            This accordion item has custom styling applied to demonstrate the flexibility 
            of the component. You can customize colors, spacing, borders, and more.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-gray-200 last:border-b">
          <AccordionTrigger className="text-green-700 hover:text-green-900 font-semibold">
            Another Custom Item
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 bg-white rounded p-3 mt-2">
            Each accordion item can have its own custom styling while maintaining 
            the core functionality and accessibility features.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const DisabledItems: Story = {
  args: {
    type: 'single' as const,
  },
  render: () => (
    <div className="w-[450px]">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Available Item</AccordionTrigger>
          <AccordionContent>
            This item is available and can be toggled normally.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger disabled>Disabled Item</AccordionTrigger>
          <AccordionContent>
            This content cannot be accessed because the trigger is disabled.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Another Available Item</AccordionTrigger>
          <AccordionContent>
            This item works normally. Only the middle item is disabled.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const DisabledAccordion: Story = {
  args: {
    type: 'single' as const,
    disabled: true,
  },
  render: (args) => (
    <div className="w-[450px]">
      <Accordion {...args}>
        <AccordionItem value="item-1">
          <AccordionTrigger>First Item</AccordionTrigger>
          <AccordionContent>
            This entire accordion is disabled, so no items can be opened.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Second Item</AccordionTrigger>
          <AccordionContent>
            All triggers are disabled when the root accordion is disabled.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const RTLDirection: Story = {
  args: {
    type: 'single' as const,
    dir: 'rtl',
  },
  render: (args) => (
    <div className="w-[450px]" dir="rtl">
      <Accordion {...args}>
        <AccordionItem value="item-1">
          <AccordionTrigger>العنصر الأول</AccordionTrigger>
          <AccordionContent>
            هذا مثال على الأكورديون مع الاتجاه من اليمين إلى اليسار. 
            لاحظ كيف يتم عكس اتجاه الأيقونة والنص.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>العنصر الثاني</AccordionTrigger>
          <AccordionContent>
            يدعم المكون الاتجاه من اليمين إلى اليسار بشكل كامل 
            مع الحفاظ على جميع الوظائف.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const HorizontalOrientation: Story = {
  args: {
    type: 'single' as const,
    orientation: 'horizontal',
  },
  render: (args) => (
    <div className="w-full">
      <Accordion {...args} className="flex gap-4">
        <AccordionItem value="item-1" className="flex-1 border-r border-b-0 pr-4">
          <AccordionTrigger className="justify-center text-center">
            Tab 1
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="text-center">
              This is a horizontal accordion layout. Content appears below the triggers.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="flex-1 border-r border-b-0 pr-4">
          <AccordionTrigger className="justify-center text-center">
            Tab 2
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="text-center">
              Perfect for tab-like interfaces where horizontal space is preferred.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="flex-1 border-b-0">
          <AccordionTrigger className="justify-center text-center">
            Tab 3
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="text-center">
              The orientation prop changes the keyboard navigation behavior as well.
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};