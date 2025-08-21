import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from './typography';

const meta = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    docs: {
      description: {
        component:
          'A versatile typography component that provides consistent and semantic text styling across your application.',
      },
    },
  },
  tags: [],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'p',
        'lead',
        'large',
        'small',
        'muted',
        'blockquote',
        'code',
        'list',
      ],
      description: 'The typography variant to render',
      table: {
        type: {
          summary:
            'h1 | h2 | h3 | h4 | p | lead | large | small | muted | blockquote | code | list',
        },
        defaultValue: { summary: 'p' },
        // disable: true,
      },
    },
    asChild: {
      control: { type: 'boolean' },
      description: 'Render as a child component using Radix Slot',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is the default Typography component.',
  },
};

export const AllVariants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-8">
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="p">
        This is a paragraph of text that demonstrates the paragraph variant. It
        has proper line height and spacing for optimal readability.
      </Typography>
      <Typography variant="lead">
        This is a lead paragraph that stands out from the rest of the content.
        It&apos;s typically used for introductory text or to highlight important
        information.
      </Typography>
      <Typography variant="large">Large text for emphasis</Typography>
      <Typography variant="small">Small text for fine print</Typography>
      <Typography variant="muted">
        Muted text for less important information
      </Typography>
      <Typography variant="blockquote">
        &ldquo;This is a blockquote that can be used for highlighting quotes or
        important statements.&rdquo;
      </Typography>
      <Typography variant="code">
        const example = &apos;example code&apos;;
      </Typography>
      <Typography variant="p" className="mt-2">
        This is some code that is actually&nbsp;
        <Typography variant="code">
          const example = &apos;inline code&apos;;
        </Typography>
        &nbsp;inline with me.
      </Typography>
      <Typography variant="list">
        <li>List item one</li>
        <li>List item two</li>
        <li>List item three</li>
      </Typography>
    </div>
  ),
};

export const Headings: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-6">
      <Typography variant="h1">The Joke Tax Chronicles</Typography>
      <Typography variant="h2">The People of the Kingdom</Typography>
      <Typography variant="h3">The Joke Tax</Typography>
      <Typography variant="h4">People stopped telling jokes</Typography>
      <Typography variant="p">
        Once upon a time, in a far-off land, there was a very lazy king who
        spent all day lounging on his throne. One day, his advisors came to him
        with a problem: the kingdom was running out of money.
      </Typography>
    </div>
  ),
};

export const ContentBlocks: Story = {
  render: () => (
    <div className="space-y-6">
      <Typography variant="h2">Typography Examples</Typography>
      <Typography variant="lead">
        A collection of typography examples showcasing different text styles and
        their use cases.
      </Typography>
      <Typography variant="p">
        This is a regular paragraph that demonstrates normal text flow. It shows
        how text appears with standard line height and spacing between
        paragraphs.
      </Typography>
      <Typography variant="p">
        Here&apos;s another paragraph to show the spacing between multiple
        paragraph elements. Notice how the first paragraph has margin top,
        creating proper vertical rhythm.
      </Typography>
      <Typography variant="blockquote">
        &ldquo;Typography is the art and technique of arranging type to make
        written language legible, readable and appealing when displayed.&rdquo;
      </Typography>
      <Typography variant="p">
        You can also use inline code like{' '}
        <Typography variant="code" asChild>
          <span>const greeting = &apos;Hello World&apos;</span>
        </Typography>{' '}
        within your paragraphs.
      </Typography>
    </div>
  ),
};

export const Lists: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-6">
      <Typography variant="h3">List Examples</Typography>
      <Typography variant="p">Here are some items in a list:</Typography>
      <Typography variant="list">
        <li>First item with some text</li>
        <li>Second item with more information</li>
        <li>Third item to complete the list</li>
        <li>
          Fourth item with{' '}
          <Typography variant="code" asChild>
            <span>inline code</span>
          </Typography>{' '}
          example
        </li>
      </Typography>
    </div>
  ),
};
