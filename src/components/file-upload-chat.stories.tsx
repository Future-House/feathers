import type { Meta, StoryObj } from '@storybook/react-vite';
import { FileUploadChat } from './file-upload-chat';

const meta = {
  title: 'Components/FileUploadChat',
  component: FileUploadChat,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A chat input component with file upload capabilities. Supports drag-and-drop, multiple file types, and displays uploaded files as removable chips.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the message input',
      table: {
        defaultValue: { summary: 'Type your message...' },
      },
    },
    maxFiles: {
      control: 'number',
      description: 'Maximum number of files that can be uploaded',
      table: {
        defaultValue: { summary: '5' },
      },
    },
    acceptedFileTypes: {
      control: 'text',
      description: 'Accepted file types for upload',
      table: {
        defaultValue: {
          summary: '.pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif,.svg',
        },
      },
    },
    onSendMessage: {
      action: 'message sent',
      description: 'Callback fired when send button is clicked',
    },
    onFilesUploaded: {
      action: 'files uploaded',
      description: 'Callback fired when files are uploaded',
    },
    onFileRemoved: {
      action: 'file removed',
      description: 'Callback fired when a file is removed',
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
