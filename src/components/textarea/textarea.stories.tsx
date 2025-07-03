import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './textarea';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible textarea component built with Tailwind CSS for multiline text input.',
      },
    },
  },
  tags: [],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the textarea',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the textarea is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the textarea is required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    readOnly: {
      control: { type: 'boolean' },
      description: 'Whether the textarea is read-only',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    rows: {
      control: { type: 'number' },
      description: 'Number of visible text lines',
      table: {
        type: { summary: 'number' },
      },
    },
    cols: {
      control: { type: 'number' },
      description: 'Visible width of the text area',
      table: {
        type: { summary: 'number' },
      },
    },
    maxLength: {
      control: { type: 'number' },
      description: 'Maximum length of text',
      table: {
        type: { summary: 'number' },
      },
    },
    minLength: {
      control: { type: 'number' },
      description: 'Minimum length of text',
      table: {
        type: { summary: 'number' },
      },
    },
    wrap: {
      control: { type: 'select' },
      options: ['soft', 'hard', 'off'],
      description: 'How text wraps',
      table: {
        type: { summary: 'soft | hard | off' },
        defaultValue: { summary: 'soft' },
      },
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Type your message here...',
    rows: 4,
  },
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Enter your feedback or comments here...',
    rows: 3,
  },
};

export const WithValue: Story = {
  args: {
    value:
      'This is some example text that shows how the textarea looks with content.',
    rows: 4,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'This textarea is disabled',
    disabled: true,
    rows: 3,
  },
};

export const ReadOnly: Story = {
  args: {
    value: 'This textarea is read-only and cannot be edited.',
    readOnly: true,
    rows: 3,
  },
};

export const WithRows: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div>
        <label className="mb-2 block text-sm font-medium">Small (2 rows)</label>
        <Textarea placeholder="Small textarea" rows={2} />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium">
          Medium (4 rows)
        </label>
        <Textarea placeholder="Medium textarea" rows={4} />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium">Large (6 rows)</label>
        <Textarea placeholder="Large textarea" rows={6} />
      </div>
    </div>
  ),
};

export const WithMaxLength: Story = {
  args: {
    placeholder: 'Type up to 100 characters...',
    maxLength: 100,
    rows: 3,
  },
};

export const Required: Story = {
  args: {
    placeholder: 'This field is required',
    required: true,
    rows: 3,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-80">
      <label htmlFor="message" className="mb-2 block text-sm font-medium">
        Message
      </label>
      <Textarea
        id="message"
        placeholder="Enter your message here..."
        rows={4}
      />
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className="w-80">
      <label
        htmlFor="error-textarea"
        className="mb-2 block text-sm font-medium"
      >
        Comments
      </label>
      <Textarea
        id="error-textarea"
        placeholder="Enter your comments..."
        aria-invalid="true"
        aria-describedby="error-message"
        rows={3}
      />
      <p id="error-message" className="mt-2 text-sm text-red-600">
        This field is required.
      </p>
    </div>
  ),
};
