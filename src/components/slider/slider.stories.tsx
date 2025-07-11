import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Slider } from './slider';
import { Button } from '../button';

const meta = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    docs: {
      description: {
        component:
          'A range input component built with Radix UI that allows users to select values from a continuous range with smooth thumb interactions.',
      },
    },
  },
  tags: [],
  argTypes: {
    asChild: {
      control: { type: 'boolean' },
      description: 'Merge props into the immediate child',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        disable: true,
      },
    },
    defaultValue: {
      control: { type: 'object' },
      description: 'The default value(s) for the slider when uncontrolled',
      table: {
        type: { summary: 'number[]' },
      },
    },
    value: {
      control: { type: 'object' },
      description: 'The controlled value(s) for the slider',
      table: {
        type: { summary: 'number[]' },
        disable: true,
      },
    },
    onValueChange: {
      action: 'valueChanged',
      description: 'Callback fired when the slider value changes',
      table: {
        type: { summary: '(value: number[]) => void' },
        disable: true,
      },
    },
    onValueCommit: {
      action: 'valueCommitted',
      description:
        'Callback fired when the slider value is committed (e.g., on mouse up)',
      table: {
        type: { summary: '(value: number[]) => void' },
        disable: true,
      },
    },
    min: {
      control: { type: 'number' },
      description: 'The minimum value of the slider',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    max: {
      control: { type: 'number' },
      description: 'The maximum value of the slider',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' },
      },
    },
    step: {
      control: { type: 'number' },
      description: 'The step increment for the slider',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the slider',
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: '"horizontal"' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the slider is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    inverted: {
      control: { type: 'boolean' },
      description: 'Whether the slider is inverted',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes to apply to the slider',
      table: {
        type: { summary: 'string' },
      },
    },
    name: {
      control: { type: 'text' },
      description: 'The name of the slider, used in forms',
      table: {
        type: { summary: 'string' },
        disable: true,
      },
    },
    dir: {
      control: { type: 'select' },
      options: ['ltr', 'rtl'],
      description: 'The reading direction of the slider',
      table: {
        type: { summary: '"ltr" | "rtl"' },
        disable: true,
      },
    },
    minStepsBetweenThumbs: {
      control: { type: 'number' },
      description: 'The minimum steps between thumbs',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
        disable: true,
      },
    },
    form: {
      control: { type: 'text' },
      description: 'The id of the form associated with the slider',
      table: {
        type: { summary: 'string' },
        disable: true,
      },
    },
  },
  subcomponents: {
    SliderTrack: {
      description:
        'The track component that represents the full range of the slider.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the slider track',
        },
      },
    },
    SliderRange: {
      description:
        'The range component that represents the selected portion of the slider track.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the slider range',
        },
      },
    },
    SliderThumb: {
      description:
        'The thumb component that can be dragged to change the slider value.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the slider thumb',
        },
      },
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: 'w-64',
  },
};

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
    max: 100,
    step: 1,
    className: 'w-64',
  },
};

export const CustomRange: Story = {
  args: {
    defaultValue: [20],
    min: 0,
    max: 50,
    step: 5,
    className: 'w-64',
  },
};

export const Steps: Story = {
  render: () => (
    <div className="w-80 space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium">Step: 1 (default)</label>
        <Slider defaultValue={[25]} max={100} step={1} />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Step: 5</label>
        <Slider defaultValue={[25]} max={100} step={5} />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Step: 10</label>
        <Slider defaultValue={[30]} max={100} step={10} />
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-64 items-center justify-center">
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        orientation="vertical"
        className="h-full"
      />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    disabled: true,
    className: 'w-64',
  },
};

export const Inverted: Story = {
  render: () => (
    <div className="w-80 space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium">Normal</label>
        <Slider defaultValue={[25]} max={100} step={1} />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Inverted</label>
        <Slider defaultValue={[25]} max={100} step={1} inverted />
      </div>
    </div>
  ),
};

export const MultipleValues: Story = {
  render: () => (
    <div className="w-80 space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium">Single value</label>
        <Slider defaultValue={[50]} max={100} />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Range (two values)</label>
        <Slider defaultValue={[25, 75]} max={100} />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Multiple values</label>
        <Slider defaultValue={[10, 30, 60, 90]} max={100} />
      </div>
    </div>
  ),
};

const ControlledSlider = () => {
  const [value, setValue] = useState([33]);

  return (
    <div className="w-80 space-y-4">
      <div>
        <label className="text-sm font-medium">Value: {value[0]}</label>
      </div>
      <Slider value={value} onValueChange={setValue} max={100} step={1} />
      <div className="flex gap-2">
        <Button onClick={() => setValue([Math.max(0, value[0] - 10)])}>
          -10
        </Button>
        <Button onClick={() => setValue([Math.min(100, value[0] + 10)])}>
          +10
        </Button>
        <Button onClick={() => setValue([50])}>Reset</Button>
      </div>
    </div>
  );
};

export const Controlled: Story = {
  render: () => <ControlledSlider />,
};
