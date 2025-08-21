import type { Meta, StoryObj } from '@storybook/react-vite';
import { FileUploadChat } from './file-upload-chat';

const meta = {
  title: 'Components/FileUploadChat',
  component: FileUploadChat,
  decorators: [
    Story => (
      <div className="max-w-10/12">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'A chat input component with file upload capabilities. Supports drag-and-drop, multiple file types, and displays uploaded files as removable chips. Built on top of the `<Tooltip/>`.',
      },
    },
  },
  tags: [],
  argTypes: {
    placeholder: {
      control: 'text',
      description:
        'Placeholder text displayed in the message input field when empty',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"Type your message..."' },
      },
    },
    maxFiles: {
      control: 'number',
      description:
        'Maximum number of files that can be uploaded simultaneously. When limit is reached, upload button becomes disabled.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5' },
      },
    },
    acceptedFileTypes: {
      control: 'text',
      description:
        'Comma-separated list of accepted file extensions. Controls both file picker filter and drag-and-drop validation.',
      table: {
        type: { summary: 'string' },
        defaultValue: {
          summary: '".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif,.svg"',
        },
      },
    },
    onSendMessage: {
      action: 'message sent',
      description:
        'Callback fired when the send button is clicked or Enter key is pressed. Receives the message text and array of uploaded files.',
      table: {
        type: { summary: '(message: string, files: UploadedFile[]) => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
    onFilesUploaded: {
      action: 'files uploaded',
      description:
        'Callback fired when files are successfully uploaded via drag-and-drop or file picker. Receives the complete array of currently uploaded files.',
      table: {
        type: { summary: '(files: UploadedFile[]) => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
    onFileRemoved: {
      action: 'file removed',
      description:
        'Callback fired when a file is removed by clicking the X button on a file chip. Receives the unique ID of the removed file.',
      table: {
        type: { summary: '(fileId: string) => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
    className: {
      control: 'text',
      description:
        'Additional CSS class names to apply to the root container element. Merged with default styling using cn() utility.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
} satisfies Meta<typeof FileUploadChat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Type your message...',
    maxFiles: 5,
    acceptedFileTypes: '.pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif,.svg',
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Ask me anything...',
    maxFiles: 3,
  },
};

export const LimitedFiles: Story = {
  args: {
    placeholder: 'Upload up to 2 files',
    maxFiles: 2,
    acceptedFileTypes: '.pdf,.jpg,.png',
  },
};

export const ImagesOnly: Story = {
  args: {
    placeholder: 'Share your images',
    maxFiles: 10,
    acceptedFileTypes: '.jpg,.jpeg,.png,.gif,.svg,.webp',
  },
};

export const WithHandlers: Story = {
  args: {
    placeholder: 'Type your message...',
    onSendMessage: (message, files) => {
      console.log('Message:', message);
      console.log('Files:', files);
    },
    onFilesUploaded: files => {
      console.log('Files uploaded:', files);
    },
    onFileRemoved: fileId => {
      console.log('File removed:', fileId);
    },
  },
};
