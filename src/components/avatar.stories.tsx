import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible avatar component built with Radix UI for displaying user profile images with fallback text support.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes to apply to the avatar root',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://invalid-url.png" alt="Broken image" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
};

export const FallbackOnly: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>SM</AvatarFallback>
    </Avatar>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar className="h-8 w-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="Small" />
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="Default" />
        <AvatarFallback>DF</AvatarFallback>
      </Avatar>
      <Avatar className="h-16 w-16">
        <AvatarImage src="https://github.com/shadcn.png" alt="Large" />
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
      <Avatar className="h-20 w-20">
        <AvatarImage src="https://github.com/shadcn.png" alt="Extra Large" />
        <AvatarFallback>XL</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar className="border-primary border-2">
        <AvatarImage src="https://github.com/shadcn.png" alt="With border" />
        <AvatarFallback>BR</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-lg">
        <AvatarImage src="https://github.com/shadcn.png" alt="Square corners" />
        <AvatarFallback>SQ</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="Custom fallback"
        />
        <AvatarFallback className="bg-gradient-to-r from-purple-400 to-pink-400 text-white">
          GR
        </AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <div className="flex -space-x-2">
      <Avatar className="border-background border-2">
        <AvatarImage src="https://github.com/shadcn.png" alt="User 1" />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <Avatar className="border-background border-2">
        <AvatarImage src="https://github.com/vercel.png" alt="User 2" />
        <AvatarFallback>U2</AvatarFallback>
      </Avatar>
      <Avatar className="border-background border-2">
        <AvatarFallback>U3</AvatarFallback>
      </Avatar>
      <Avatar className="border-background border-2">
        <AvatarFallback>+2</AvatarFallback>
      </Avatar>
    </div>
  ),
};
