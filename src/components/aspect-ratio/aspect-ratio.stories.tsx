import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { AspectRatio } from './aspect-ratio';

const meta = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Maintains a consistent aspect ratio for content, built with Radix UI AspectRatio primitive and styled with Tailwind CSS. Perfect for images, videos, and other media that need to maintain proportions.',
      },
    },
  },
  tags: [],
  argTypes: {
    // AspectRatio (Root) props from @radix-ui/react-aspect-ratio
    ratio: {
      control: { type: 'number', min: 0.1, max: 5, step: 0.1 },
      description: 'The desired aspect ratio (width / height)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
        disable: true,
      },
    },
    asChild: {
      control: { type: 'boolean' },
      description:
        'Merge props into the immediate child instead of rendering a div wrapper',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        disable: true,
      },
    },
  },
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: args => (
    <div className="w-[450px]">
      <AspectRatio {...args} className="bg-muted">
        <div className="flex h-full w-full items-center justify-center rounded-md border border-dashed">
          <span className="text-muted-foreground text-sm">
            16:9 Aspect Ratio
          </span>
        </div>
      </AspectRatio>
    </div>
  ),
};

export const Square: Story = {
  render: () => (
    <div className="w-[300px]">
      <AspectRatio ratio={1} className="bg-muted">
        <div className="flex h-full w-full items-center justify-center rounded-md border border-dashed">
          <span className="text-muted-foreground text-sm">1:1 Square</span>
        </div>
      </AspectRatio>
    </div>
  ),
};

export const Portrait: Story = {
  render: () => (
    <div className="w-[300px]">
      <AspectRatio ratio={3 / 4} className="bg-muted">
        <div className="flex h-full w-full items-center justify-center rounded-md border border-dashed">
          <span className="text-muted-foreground text-sm">3:4 Portrait</span>
        </div>
      </AspectRatio>
    </div>
  ),
};

export const Widescreen: Story = {
  render: () => (
    <div className="w-[500px]">
      <AspectRatio ratio={21 / 9} className="bg-muted">
        <div className="flex h-full w-full items-center justify-center rounded-md border border-dashed">
          <span className="text-muted-foreground text-sm">21:9 Ultrawide</span>
        </div>
      </AspectRatio>
    </div>
  ),
};

export const WithImage: Story = {
  render: () => (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
};

export const WithVideo: Story = {
  render: () => (
    <div className="w-[600px]">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video"
          className="h-full w-full rounded-md"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </AspectRatio>
    </div>
  ),
};

export const WithCard: Story = {
  render: () => (
    <div className="bg-card text-card-foreground w-[350px] overflow-hidden rounded-lg border shadow-sm">
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&dpr=2&q=80"
          alt="Landscape"
          className="h-full w-full object-cover"
        />
      </AspectRatio>
      <div className="p-6">
        <h3 className="text-lg font-semibold">Beautiful Landscape</h3>
        <p className="text-muted-foreground text-sm">
          A stunning view captured in perfect aspect ratio.
        </p>
      </div>
    </div>
  ),
};

export const CustomRatios: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Golden Ratio (1.618:1)</h4>
        <div className="w-[400px]">
          <AspectRatio ratio={1.618} className="bg-muted">
            <div className="flex h-full w-full items-center justify-center rounded-md border border-dashed">
              <span className="text-muted-foreground text-sm">
                Golden Ratio
              </span>
            </div>
          </AspectRatio>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Instagram Post (1:1)</h4>
        <div className="w-[300px]">
          <AspectRatio ratio={1} className="bg-muted">
            <div className="flex h-full w-full items-center justify-center rounded-md border border-dashed">
              <span className="text-muted-foreground text-sm">Instagram</span>
            </div>
          </AspectRatio>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Instagram Story (9:16)</h4>
        <div className="w-[200px]">
          <AspectRatio ratio={9 / 16} className="bg-muted">
            <div className="flex h-full w-full items-center justify-center rounded-md border border-dashed">
              <span className="text-muted-foreground text-sm">Story</span>
            </div>
          </AspectRatio>
        </div>
      </div>
    </div>
  ),
};

export const AsChildExample: Story = {
  render: () => (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9} asChild>
        <button className="bg-muted hover:bg-muted/80 transition-colors">
          <div className="flex h-full w-full items-center justify-center rounded-md border border-dashed">
            <span className="text-muted-foreground text-sm">
              Clickable AspectRatio
            </span>
          </div>
        </button>
      </AspectRatio>
    </div>
  ),
};
