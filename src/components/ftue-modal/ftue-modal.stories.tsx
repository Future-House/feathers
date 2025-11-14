import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button/button';
import { FtueModal } from './ftue-modal';
import { Typography } from '../typography';

const meta = {
  title: 'Components/FtueModal',
  component: FtueModal,
  parameters: {
    docs: {
      description: {
        component:
          'A First Time User Experience (FTUE) modal component for displaying welcome messages and onboarding information. Styled with dark background and white text.',
      },
    },
  },
  tags: [],
  argTypes: {
    defaultOpen: {
      control: { type: 'boolean' },
      description:
        'The open state of the modal when it is initially rendered. Use when you do not need to control its open state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    open: {
      control: { type: 'boolean' },
      description:
        'The controlled open state of the modal. Must be used in conjunction with onOpenChange',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: undefined },
      },
    },
    onOpenChange: {
      action: 'onOpenChange',
      description:
        'Event handler called when the open state of the modal changes',
      table: {
        type: { summary: '(open: boolean) => void' },
        disable: true,
      },
    },
    logo: {
      control: { type: 'text' },
      description: 'Optional logo to display at the top of the modal',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: undefined },
      },
    },
    title: {
      control: { type: 'text' },
      description: 'The title text to display in the modal',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: undefined },
      },
    },
    // @ts-expect-error - bodyText is a Storybook-only control, not a component prop
    bodyText: {
      control: { type: 'text' },
      description: 'The body text content to display in the modal',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
      },
    },
    actionButton: {
      control: { type: 'text' },
      description: 'Optional button to display at the bottom of the modal',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: undefined },
      },
    },
    showCloseButton: {
      control: { type: 'boolean' },
      description: 'Whether to show the close button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    currentStep: {
      control: { type: 'number' },
      description: 'The current step number in the modal series (1-based)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: undefined },
      },
    },
    totalSteps: {
      control: { type: 'number' },
      description: 'The total number of steps in the modal series',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: undefined },
      },
    },
  },
} satisfies Meta<typeof FtueModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => {
    const { bodyText, ...modalArgs } = args as typeof args & {
      bodyText?: string;
    };
    return (
      <FtueModal {...modalArgs} defaultOpen={true}>
        {bodyText ? (
          <Typography variant="p" className="text-sm">
            {bodyText}
          </Typography>
        ) : (
          <>
            <Typography variant="p" className="mb-4 text-sm">
              All users get 10 free monthly credits for standard agents like
              Literature Agent and Analysis Agent.
            </Typography>
            <Typography variant="p" className="text-sm">
              Purchase more credits or upgrade your subscription here.
              Limited-time founding subscriptions available with extra perks.
            </Typography>
          </>
        )}
      </FtueModal>
    );
  },
  args: {
    title: 'Welcome to Edison!',
    bodyText: '',
    actionButton: (
      <Button
        variant="default"
        className="bg-gray-800 text-white hover:bg-gray-700"
        onClick={() => console.log('Get Started clicked')}
      >
        Get Started
      </Button>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
};

export const WithLogo: Story = {
  render: args => {
    const { bodyText, ...modalArgs } = args as typeof args & {
      bodyText?: string;
    };
    return (
      <FtueModal {...modalArgs} defaultOpen={true}>
        {bodyText ? (
          <Typography variant="p" className="text-sm">
            {bodyText}
          </Typography>
        ) : (
          <>
            <Typography variant="p" className="mb-4 text-sm">
              All users get 10 free monthly credits for standard agents like
              Literature Agent and Analysis Agent.
            </Typography>
            <Typography variant="p" className="text-sm">
              Purchase more credits or upgrade your subscription here.
              Limited-time founding subscriptions available with extra perks.
            </Typography>
          </>
        )}
      </FtueModal>
    );
  },
  args: {
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
        fill="currentColor"
        className="w-9 shrink-0 text-gray-800 dark:text-white"
      >
        <path
          fill="currentColor"
          d="M34.1 21.806c-.71-1.31-1.598-2.696-2.627-4.113a35.493 35.493 0 0 0 2.106-3.383c2.183-4.026 2.483-6.878.894-8.474-.854-.86-2.076-1.162-3.642-.923.311-1.696.02-3.003-.882-3.906-1.589-1.597-4.425-1.293-8.434.9a36.348 36.348 0 0 0-3.647 2.318 35.705 35.705 0 0 0-3.396-2.136c-4.003-2.193-6.842-2.497-8.43-.9-.886.886-1.183 2.164-.897 3.815-1.643-.287-2.915.01-3.797.9-1.589 1.596-1.286 4.448.896 8.474a36.352 36.352 0 0 0 2.104 3.377 36.867 36.867 0 0 0-2.452 3.87c-2.182 4.025-2.482 6.877-.893 8.473.667.67 1.558 1.006 2.663 1.006.309 0 .64-.034.981-.085-.31 1.695-.02 3.002.88 3.908.667.67 1.558 1.006 2.663 1.006 1.521 0 3.45-.636 5.77-1.906 1.247-.682 2.562-1.529 3.908-2.506 1.38 1.006 2.725 1.875 4.003 2.574 2.322 1.27 4.25 1.906 5.77 1.906 1.106 0 1.994-.335 2.664-1.005.885-.89 1.182-2.165.896-3.818.402.068.78.107 1.137.107 1.105 0 1.993-.335 2.663-1.005 1.59-1.597 1.287-4.449-.896-8.474h-.006Zm-2.305-14.12c.385 0 .6.082.679.158.234.233.48 1.676-1.38 5.105-.416.77-.902 1.568-1.445 2.386a62.73 62.73 0 0 0-2.46-2.826 34.467 34.467 0 0 0 1.864-3.029c.251-.463.472-.906.673-1.338.944-.346 1.62-.457 2.066-.457h.003ZM22.974 23.37l-.113.111a53.204 53.204 0 0 1-2.898-2.451c.161-.16.325-.319.486-.483.218-.219.433-.44.648-.66a55.654 55.654 0 0 1 2.437 2.91c-.184.19-.37.38-.56.57v.003Zm2.253 1.75c.043.06.08.12.122.18-.06-.04-.119-.08-.178-.123l.06-.06-.004.003ZM12.85 23.44c-.209-.21-.412-.42-.616-.631a57.185 57.185 0 0 1 2.463-2.949c.28.29.562.583.848.87l.294.29a55.178 55.178 0 0 1-2.943 2.462c-.014-.014-.031-.028-.046-.045v.003Zm-2.273 1.73-.11.073.076-.11c.012.011.023.025.037.037h-.003ZM12.5 12.563c.116-.117.234-.233.35-.347a51.22 51.22 0 0 1 2.938 2.415c-.255.25-.512.5-.763.755l-.303.31a53.49 53.49 0 0 1-2.4-2.949l.178-.182v-.002Zm10.995.181.023.023a55.022 55.022 0 0 1-2.437 2.969c-.094-.094-.184-.19-.28-.284a57.925 57.925 0 0 0-.84-.827 53.4 53.4 0 0 1 2.966-2.443c.19.185.379.372.568.562Zm-5.59 6.338a41.897 41.897 0 0 1-1.269-1.293 48.333 48.333 0 0 1 1.244-1.235c.308.298.616.6.925.906l.353.36a55.298 55.298 0 0 1-1.25 1.26l-.002.002Zm-.03-6.394a56.432 56.432 0 0 0-2.938-2.443c.984-.89 1.97-1.722 2.946-2.486a52.904 52.904 0 0 1 2.952 2.463 57.464 57.464 0 0 0-2.96 2.468v-.002Zm-5.104 5.079a60.037 60.037 0 0 0-2.485 2.94 55.373 55.373 0 0 1-2.417-2.932 56.395 56.395 0 0 1 2.485-2.945 58.602 58.602 0 0 0 2.417 2.937Zm5.126 5.212c.967.881 1.937 1.708 2.898 2.477a56.66 56.66 0 0 1-2.929 2.506c-.927-.741-1.9-1.57-2.906-2.494a59.34 59.34 0 0 0 2.937-2.486v-.003Zm5.132-5.172a57.972 57.972 0 0 0 2.462-2.963 55.393 55.393 0 0 1 2.452 2.877 53.591 53.591 0 0 1-2.463 2.98 58.605 58.605 0 0 0-2.454-2.895h.003ZM22.869 4.4c2.26-1.235 3.653-1.545 4.402-1.545.385 0 .6.082.679.16.175.175.36 1.044-.365 2.942a23.74 23.74 0 0 0-1.543.776 34.887 34.887 0 0 0-2.873 1.775 59.603 59.603 0 0 0-2.918-2.494 31.28 31.28 0 0 1 2.618-1.617v.003ZM8.04 3.197c.08-.08.294-.16.679-.16.752 0 2.143.31 4.402 1.546.766.418 1.56.906 2.372 1.452a61.576 61.576 0 0 0-2.9 2.505 34.937 34.937 0 0 0-2.814-1.735c-.48-.265-.944-.498-1.391-.708-.707-1.869-.523-2.724-.348-2.9ZM4.727 13.02c-1.86-3.432-1.612-4.872-1.38-5.108.079-.08.294-.159.678-.159.47 0 1.188.12 2.209.512.206.448.44.914.704 1.397a34.491 34.491 0 0 0 1.721 2.821 61.847 61.847 0 0 0-2.505 2.9 30.68 30.68 0 0 1-1.43-2.363h.003Zm-1.73 15.07c-.235-.236-.481-1.676 1.379-5.108a32.659 32.659 0 0 1 1.75-2.838c.755.955 1.57 1.918 2.432 2.878a36.38 36.38 0 0 0-2.14 3.431c-.25.46-.473.907-.674 1.336-1.758.644-2.575.471-2.745.3h-.003Zm9.606 3.443c-3.415 1.869-4.848 1.619-5.083 1.386-.175-.176-.36-1.048.368-2.946.494-.224 1.006-.48 1.543-.775a35.656 35.656 0 0 0 3.218-2.012c.955.892 1.92 1.736 2.875 2.52a33.201 33.201 0 0 1-2.92 1.827Zm15.698 1.454c-.6.602-3.656-.187-8.092-3.275a61.81 61.81 0 0 0 2.887-2.52 35.971 35.971 0 0 0 3.466 2.187c.478.262.933.489 1.377.696.605 1.563.681 2.591.362 2.912Zm4.696-4.715c-.32.32-1.34.244-2.893-.361a24.576 24.576 0 0 0-.698-1.386 36.161 36.161 0 0 0-2.194-3.506 58.66 58.66 0 0 0 2.485-2.937c3.107 4.491 3.902 7.587 3.3 8.192v-.002Z"
        />
      </svg>
    ),
    title: 'Welcome to Edison!',
    bodyText: '',
    actionButton: (
      <Button
        variant="default"
        className="bg-gray-800 text-white hover:bg-gray-700"
        onClick={() => console.log('Get Started clicked')}
      >
        Get Started
      </Button>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
};

export const WithCloseButton: Story = {
  render: args => {
    const { bodyText, ...modalArgs } = args as typeof args & {
      bodyText?: string;
    };
    return (
      <FtueModal {...modalArgs} defaultOpen={true}>
        <Typography variant="p" className="text-sm">
          {bodyText || 'This modal has a close button in the top right corner.'}
        </Typography>
      </FtueModal>
    );
  },
  args: {
    title: 'Welcome to Edison!',
    bodyText: 'This modal has a close button in the top right corner.',
    showCloseButton: true,
    actionButton: (
      <Button
        variant="default"
        className="bg-gray-800 text-white hover:bg-gray-700"
        onClick={() => console.log('Get Started clicked')}
      >
        Get Started
      </Button>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
};

export const WithoutActionButton: Story = {
  render: args => {
    const { bodyText, ...modalArgs } = args as typeof args & {
      bodyText?: string;
    };
    return (
      <FtueModal {...modalArgs} defaultOpen={true}>
        <Typography variant="p" className="text-sm">
          {bodyText ||
            "This modal doesn't have an action button at the bottom."}
        </Typography>
      </FtueModal>
    );
  },
  args: {
    title: 'Welcome to Edison!',
    bodyText: "This modal doesn't have an action button at the bottom.",
    showCloseButton: true,
  } as any,
};

const WithPreferencesWrapper = ({
  args,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args: any;
}) => {
  const { bodyText, ...modalArgs } = args;
  const [privacyChecked, setPrivacyChecked] = React.useState(false);
  const [emailChecked, setEmailChecked] = React.useState(false);

  const preferences = [
    {
      id: 'privacy',
      label: 'Privacy & Preferences',
      description: 'Share anonymous usage data to improve the product',
      checked: privacyChecked,
      onCheckedChange: checked => {
        setPrivacyChecked(checked);
        console.log('Privacy preference changed:', checked);
      },
    },
    {
      id: 'email',
      label: 'Email Updates',
      description: 'Get product news and announcements.',
      checked: emailChecked,
      onCheckedChange: checked => {
        setEmailChecked(checked);
        console.log('Email preference changed:', checked);
      },
    },
  ];

  return (
    <FtueModal {...modalArgs} preferences={preferences} defaultOpen={true}>
      <Typography variant="p" className="text-sm">
        {bodyText ||
          'Choose your privacy preferences below. You can change them anytime in settings'}
      </Typography>
    </FtueModal>
  );
};

export const WithPreferences: Story = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => <WithPreferencesWrapper args={args} />,
  args: {
    title: 'Privacy & Preferences',
    bodyText:
      'Choose your privacy preferences below. You can change them anytime in settings',
    actionButton: (
      <div className="flex gap-2">
        <Button
          variant="outline"
          className="border-gray-800 bg-transparent text-gray-800 hover:bg-gray-100 dark:border-white dark:text-white dark:hover:bg-white/10"
          onClick={() => console.log('Reject clicked')}
        >
          Reject
        </Button>
        <Button
          variant="default"
          className="bg-gray-800 text-white hover:bg-gray-700"
          onClick={() => console.log('Accept clicked')}
        >
          Accept
        </Button>
      </div>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
};

export const WithStepTracker: Story = {
  render: args => {
    const { bodyText, ...modalArgs } = args as typeof args & {
      bodyText?: string;
    };
    return (
      <FtueModal {...modalArgs} defaultOpen={true}>
        <Typography variant="p" className="text-sm">
          {bodyText ||
            'This modal shows a step tracker with dots on the left side of the button row.'}
        </Typography>
      </FtueModal>
    );
  },
  args: {
    title: 'Step 2 of 3',
    bodyText:
      'This modal shows a step tracker with dots on the left side of the button row.',
    currentStep: 2,
    totalSteps: 3,
    actionButton: (
      <Button
        variant="default"
        className="bg-gray-800 text-white hover:bg-gray-700"
        onClick={() => console.log('Next clicked')}
      >
        Next
      </Button>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
};
