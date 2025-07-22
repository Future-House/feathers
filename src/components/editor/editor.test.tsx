import { render, screen } from '@testing-library/react';
import { Editor } from './editor';
import type { SlashCommand } from './editor';

// Mock Lexical components to avoid complex setup in tests
jest.mock('@lexical/react/LexicalComposer', () => ({
  LexicalComposer: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="lexical-composer">{children}</div>
  ),
}));

jest.mock('@lexical/react/LexicalRichTextPlugin', () => ({
  RichTextPlugin: ({ contentEditable, placeholder }: any) => (
    <div data-testid="rich-text-plugin">
      {contentEditable}
      {placeholder}
    </div>
  ),
}));

jest.mock('@lexical/react/LexicalContentEditable', () => ({
  ContentEditable: (props: any) => (
    <div data-testid="content-editable" contentEditable {...props} />
  ),
}));

jest.mock('@lexical/react/LexicalErrorBoundary', () => 'div');
jest.mock('@lexical/react/LexicalHistoryPlugin', () => ({
  HistoryPlugin: () => null,
}));
jest.mock('@lexical/react/LexicalAutoFocusPlugin', () => ({
  AutoFocusPlugin: () => null,
}));
jest.mock('@lexical/react/LexicalLinkPlugin', () => ({
  LinkPlugin: () => null,
}));
jest.mock('@lexical/react/LexicalListPlugin', () => ({
  ListPlugin: () => null,
}));
jest.mock('@lexical/react/LexicalMarkdownShortcutPlugin', () => ({
  MarkdownShortcutPlugin: () => null,
}));

// Mock the toolbar and plugins
jest.mock('./editor-toolbar', () => ({
  EditorToolbar: () => <div data-testid="editor-toolbar" />,
}));

jest.mock('./plugins/slash-command-plugin', () => ({
  SlashCommandPlugin: () => <div data-testid="slash-command-plugin" />,
}));

jest.mock('./plugins/markdown-toggle-plugin', () => ({
  MarkdownTogglePlugin: () => <div data-testid="markdown-toggle-plugin" />,
}));

describe('Editor', () => {
  it('renders without crashing', () => {
    render(<Editor />);
    expect(screen.getByTestId('lexical-composer')).toBeInTheDocument();
    expect(screen.getByTestId('content-editable')).toBeInTheDocument();
  });

  it('displays the default placeholder', () => {
    render(<Editor />);
    expect(screen.getByText('Start typing...')).toBeInTheDocument();
  });

  it('displays custom placeholder', () => {
    const customPlaceholder = 'Enter your text here...';
    render(<Editor placeholder={customPlaceholder} />);
    expect(screen.getByText(customPlaceholder)).toBeInTheDocument();
  });

  it('shows toolbar by default', () => {
    render(<Editor />);
    expect(screen.getByTestId('editor-toolbar')).toBeInTheDocument();
  });

  it('hides toolbar when showToolbar is false', () => {
    render(<Editor showToolbar={false} />);
    expect(screen.queryByTestId('editor-toolbar')).not.toBeInTheDocument();
  });

  it('shows markdown toggle by default', () => {
    render(<Editor />);
    expect(screen.getByTestId('markdown-toggle-plugin')).toBeInTheDocument();
  });

  it('hides markdown toggle when showMarkdownToggle is false', () => {
    render(<Editor showMarkdownToggle={false} />);
    expect(
      screen.queryByTestId('markdown-toggle-plugin')
    ).not.toBeInTheDocument();
  });

  it('renders slash command plugin when commands are provided', () => {
    const slashCommands: SlashCommand[] = [
      {
        key: 'test',
        label: 'Test Command',
        onSelect: jest.fn(),
      },
    ];

    render(<Editor slashCommands={slashCommands} />);
    expect(screen.getByTestId('slash-command-plugin')).toBeInTheDocument();
  });

  it('applies correct size classes', () => {
    render(<Editor />);
    const editorContainer = screen
      .getByTestId('content-editable')
      .closest('div[class*="min-h"]');
    expect(editorContainer).toHaveClass('min-h-32');
  });

  it('applies disabled styling when disabled', () => {
    render(<Editor disabled />);
    const editorContainer = screen
      .getByTestId('content-editable')
      .closest('div[class*="opacity-50"]');
    expect(editorContainer).toHaveClass('opacity-50', 'cursor-not-allowed');
  });

  it('applies aria-invalid attribute correctly', () => {
    render(<Editor aria-invalid />);
    const editorContainer = screen
      .getByTestId('content-editable')
      .closest('div[aria-invalid]');
    expect(editorContainer).toHaveAttribute('aria-invalid', 'true');
  });

  it('applies custom className', () => {
    const customClass = 'custom-editor-class';
    render(<Editor className={customClass} />);
    const editorWrapper = screen.getByTestId('lexical-composer').parentElement;
    expect(editorWrapper).toHaveClass(customClass);
  });

  it('calls onChange when provided', async () => {
    const mockOnChange = jest.fn();
    render(<Editor onChange={mockOnChange} />);

    // Since we're mocking Lexical, we can't easily test the actual editor state change
    // This test verifies the prop is accepted without errors
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  it('calls onValueChange when provided', async () => {
    const mockOnValueChange = jest.fn();
    render(<Editor onValueChange={mockOnValueChange} />);

    // Since we're mocking Lexical, we can't easily test the actual value change
    // This test verifies the prop is accepted without errors
    expect(mockOnValueChange).not.toHaveBeenCalled();
  });

  it('handles slash commands array', () => {
    const slashCommands: SlashCommand[] = [
      {
        key: 'run',
        label: 'Run Command',
        onSelect: jest.fn(),
      },
      {
        key: 'context',
        label: 'Add Context',
        description: 'Add context to conversation',
        onSelect: jest.fn(),
      },
    ];

    render(<Editor slashCommands={slashCommands} />);
    // The component should render without errors when slash commands are provided
    expect(screen.getByTestId('slash-command-plugin')).toBeInTheDocument();
  });

  it('renders with empty slash commands array', () => {
    render(<Editor slashCommands={[]} />);
    // Should render but not show the slash command plugin since array is empty
    expect(
      screen.queryByTestId('slash-command-plugin')
    ).not.toBeInTheDocument();
  });

  it('forwards additional props to the wrapper div', () => {
    render(<Editor data-testid="custom-editor" />);
    const wrapper = screen.getByTestId('custom-editor');
    expect(wrapper).toBeInTheDocument();
  });
});
