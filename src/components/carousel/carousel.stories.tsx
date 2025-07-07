import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './carousel';

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A carousel component built with Embla Carousel that allows users to navigate through a collection of items.',
      },
    },
  },
  tags: [],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the carousel',
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: '"horizontal"' },
      },
    },
    opts: {
      control: 'object',
      description: 'Options to pass to the Embla Carousel instance',
      table: {
        type: { summary: 'CarouselOptions' },
      },
    },
    plugins: {
      control: 'object',
      description: 'Plugins to pass to the Embla Carousel instance',
      table: {
        type: { summary: 'CarouselPlugin' },
      },
    },
    setApi: {
      action: 'setApi',
      description: 'Callback to set the carousel API instance',
      table: {
        type: { summary: '(api: CarouselApi) => void' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the carousel',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  subcomponents: {
    CarouselContent: {
      description:
        'The scrollable content container of the carousel. Creates an overflow-hidden wrapper with flexible layout that adapts to horizontal or vertical orientation.',
      argTypes: {
        className: {
          type: 'string',
          description:
            'Additional CSS classes to apply to the carousel content container',
        },
      },
    },
    CarouselItem: {
      description:
        'Individual slide item within the carousel. Handles sizing and spacing with responsive basis controls and proper ARIA attributes for accessibility.',
      argTypes: {
        className: {
          type: 'string',
          description:
            'Additional CSS classes to apply to the carousel item. Use basis-* classes to control item sizing',
        },
      },
    },
    CarouselPrevious: {
      description:
        'Navigation button to go to the previous slide. Automatically positions itself based on carousel orientation and includes keyboard navigation support.',
      argTypes: {
        variant: {
          type: 'string',
          description:
            'Button variant style inherited from the Button component',
          defaultValue: 'outline',
        },
        size: {
          type: 'string',
          description: 'Button size inherited from the Button component',
          defaultValue: 'icon',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the previous button',
        },
        disabled: {
          type: 'boolean',
          description:
            'Whether the button is disabled (automatically controlled based on carousel state)',
        },
      },
    },
    CarouselNext: {
      description:
        'Navigation button to go to the next slide. Automatically positions itself based on carousel orientation and includes keyboard navigation support.',
      argTypes: {
        variant: {
          type: 'string',
          description:
            'Button variant style inherited from the Button component',
          defaultValue: 'outline',
        },
        size: {
          type: 'string',
          description: 'Button size inherited from the Button component',
          defaultValue: 'icon',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the next button',
        },
        disabled: {
          type: 'boolean',
          description:
            'Whether the button is disabled (automatically controlled based on carousel state)',
        },
      },
    },
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: args => (
    <Carousel {...args} className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }, (_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <div className="flex aspect-square items-center justify-center rounded-lg bg-slate-100 p-6 dark:bg-slate-800">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: args => (
    <Carousel {...args} className="w-full max-w-xs">
      <CarouselContent className="h-48">
        {Array.from({ length: 5 }, (_, index) => (
          <CarouselItem key={index} className="basis-1/3">
            <div className="p-1">
              <div className="flex aspect-square items-center justify-center rounded-lg bg-slate-100 p-6 dark:bg-slate-800">
                <span className="text-2xl font-semibold">{index + 1}</span>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const MultipleItemsPerView: Story = {
  args: {
    orientation: 'horizontal',
    opts: {
      align: 'start',
    },
  },
  render: args => (
    <Carousel {...args} className="w-full max-w-sm">
      <CarouselContent>
        {Array.from({ length: 10 }, (_, index) => (
          <CarouselItem key={index} className="basis-1/3">
            <div className="p-1">
              <div className="flex aspect-square items-center justify-center rounded-lg bg-slate-100 p-6 dark:bg-slate-800">
                <span className="text-lg font-semibold">{index + 1}</span>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const WithCustomContent: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: args => (
    <Carousel {...args} className="w-full max-w-lg">
      <CarouselContent>
        <CarouselItem>
          <div className="p-1">
            <div className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white">
              <h3 className="mb-2 text-xl font-bold">Welcome</h3>
              <p className="text-center">
                Start exploring our amazing features
              </p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <div className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-teal-600 p-8 text-white">
              <h3 className="mb-2 text-xl font-bold">Discover</h3>
              <p className="text-center">Find what you need with our tools</p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <div className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-600 p-8 text-white">
              <h3 className="mb-2 text-xl font-bold">Get Started</h3>
              <p className="text-center">Begin your journey today</p>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const ImageCarousel: Story = {
  args: {
    orientation: 'horizontal',
    opts: {
      loop: true,
    },
  },
  render: args => (
    <Carousel {...args} className="w-full max-w-md">
      <CarouselContent>
        {Array.from({ length: 4 }, (_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <div className="flex aspect-video items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-700">
                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-lg bg-slate-300 dark:bg-slate-600">
                    <span className="text-2xl">🖼️</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Image {index + 1}
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const WithoutControls: Story = {
  args: {
    orientation: 'horizontal',
    opts: {
      loop: true,
    },
  },
  render: args => (
    <Carousel {...args} className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }, (_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <div className="flex aspect-square items-center justify-center rounded-lg bg-slate-100 p-6 dark:bg-slate-800">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  ),
};

export const CustomSizing: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: args => (
    <Carousel {...args} className="w-full max-w-2xl">
      <CarouselContent>
        {Array.from({ length: 8 }, (_, index) => (
          <CarouselItem key={index} className="basis-1/4">
            <div className="p-1">
              <div className="flex aspect-square items-center justify-center rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
                <span className="text-lg font-semibold">{index + 1}</span>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};
