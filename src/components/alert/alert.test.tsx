import { render, screen } from '@testing-library/react';
import { Alert, AlertTitle, AlertDescription } from './alert';
import { Terminal, AlertCircle } from 'lucide-react';

describe('Alert', () => {
  describe('Alert component', () => {
    it('renders with default variant', () => {
      render(
        <Alert>
          <AlertTitle>Test Title</AlertTitle>
          <AlertDescription>Test Description</AlertDescription>
        </Alert>
      );

      const alert = screen.getByRole('alert');
      expect(alert).toBeInTheDocument();
      expect(alert).toHaveAttribute('data-slot', 'alert');
    });

    it('renders with destructive variant', () => {
      render(
        <Alert variant="destructive">
          <AlertTitle>Error Title</AlertTitle>
          <AlertDescription>Error Description</AlertDescription>
        </Alert>
      );

      const alert = screen.getByRole('alert');
      expect(alert).toBeInTheDocument();
      expect(alert).toHaveAttribute('data-slot', 'alert');
    });

    it('applies custom className', () => {
      render(
        <Alert className="custom-class">
          <AlertTitle>Test Title</AlertTitle>
        </Alert>
      );

      const alert = screen.getByRole('alert');
      expect(alert).toHaveClass('custom-class');
    });

    it('forwards additional props', () => {
      render(
        <Alert data-testid="custom-alert" id="test-alert">
          <AlertTitle>Test Title</AlertTitle>
        </Alert>
      );

      const alert = screen.getByTestId('custom-alert');
      expect(alert).toHaveAttribute('id', 'test-alert');
    });

    it('renders with icon', () => {
      render(
        <Alert>
          <Terminal data-testid="terminal-icon" />
          <AlertTitle>With Icon</AlertTitle>
          <AlertDescription>Alert with terminal icon</AlertDescription>
        </Alert>
      );

      expect(screen.getByTestId('terminal-icon')).toBeInTheDocument();
      expect(screen.getByText('With Icon')).toBeInTheDocument();
      expect(screen.getByText('Alert with terminal icon')).toBeInTheDocument();
    });
  });

  describe('AlertTitle component', () => {
    it('renders title content', () => {
      render(
        <Alert>
          <AlertTitle>Test Alert Title</AlertTitle>
        </Alert>
      );

      const title = screen.getByText('Test Alert Title');
      expect(title).toBeInTheDocument();
      expect(title).toHaveAttribute('data-slot', 'alert-title');
    });

    it('applies custom className to title', () => {
      render(
        <Alert>
          <AlertTitle className="custom-title-class">Custom Title</AlertTitle>
        </Alert>
      );

      const title = screen.getByText('Custom Title');
      expect(title).toHaveClass('custom-title-class');
    });

    it('forwards additional props to title', () => {
      render(
        <Alert>
          <AlertTitle data-testid="custom-title" id="title-id">
            Title with Props
          </AlertTitle>
        </Alert>
      );

      const title = screen.getByTestId('custom-title');
      expect(title).toHaveAttribute('id', 'title-id');
    });
  });

  describe('AlertDescription component', () => {
    it('renders description content', () => {
      render(
        <Alert>
          <AlertDescription>Test alert description content</AlertDescription>
        </Alert>
      );

      const description = screen.getByText('Test alert description content');
      expect(description).toBeInTheDocument();
      expect(description).toHaveAttribute('data-slot', 'alert-description');
    });

    it('applies custom className to description', () => {
      render(
        <Alert>
          <AlertDescription className="custom-desc-class">
            Custom Description
          </AlertDescription>
        </Alert>
      );

      const description = screen.getByText('Custom Description');
      expect(description).toHaveClass('custom-desc-class');
    });

    it('forwards additional props to description', () => {
      render(
        <Alert>
          <AlertDescription data-testid="custom-desc" id="desc-id">
            Description with Props
          </AlertDescription>
        </Alert>
      );

      const description = screen.getByTestId('custom-desc');
      expect(description).toHaveAttribute('id', 'desc-id');
    });

    it('renders complex content in description', () => {
      render(
        <Alert>
          <AlertDescription>
            <div>
              <p>Paragraph 1</p>
              <p>Paragraph 2</p>
            </div>
          </AlertDescription>
        </Alert>
      );

      expect(screen.getByText('Paragraph 1')).toBeInTheDocument();
      expect(screen.getByText('Paragraph 2')).toBeInTheDocument();
    });
  });

  describe('Complete Alert combinations', () => {
    it('renders complete alert with all components', () => {
      render(
        <Alert variant="default">
          <Terminal data-testid="icon" />
          <AlertTitle>Complete Alert</AlertTitle>
          <AlertDescription>
            This is a complete alert with icon, title, and description.
          </AlertDescription>
        </Alert>
      );

      expect(screen.getByRole('alert')).toBeInTheDocument();
      expect(screen.getByTestId('icon')).toBeInTheDocument();
      expect(screen.getByText('Complete Alert')).toBeInTheDocument();
      expect(
        screen.getByText(
          'This is a complete alert with icon, title, and description.'
        )
      ).toBeInTheDocument();
    });

    it('renders destructive alert with error icon', () => {
      render(
        <Alert variant="destructive">
          <AlertCircle data-testid="error-icon" />
          <AlertTitle>Error Occurred</AlertTitle>
          <AlertDescription>
            Something went wrong. Please try again.
          </AlertDescription>
        </Alert>
      );

      const alert = screen.getByRole('alert');
      expect(alert).toBeInTheDocument();
      expect(screen.getByTestId('error-icon')).toBeInTheDocument();
      expect(screen.getByText('Error Occurred')).toBeInTheDocument();
      expect(
        screen.getByText('Something went wrong. Please try again.')
      ).toBeInTheDocument();
    });

    it('renders alert with only title', () => {
      render(
        <Alert>
          <AlertTitle>Title Only Alert</AlertTitle>
        </Alert>
      );

      expect(screen.getByRole('alert')).toBeInTheDocument();
      expect(screen.getByText('Title Only Alert')).toBeInTheDocument();
    });

    it('renders alert with only description', () => {
      render(
        <Alert>
          <AlertDescription>Description only alert content</AlertDescription>
        </Alert>
      );

      expect(screen.getByRole('alert')).toBeInTheDocument();
      expect(
        screen.getByText('Description only alert content')
      ).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has correct ARIA role', () => {
      render(
        <Alert>
          <AlertTitle>Accessible Alert</AlertTitle>
        </Alert>
      );

      const alert = screen.getByRole('alert');
      expect(alert).toHaveAttribute('role', 'alert');
    });

    it('maintains semantic structure', () => {
      render(
        <Alert>
          <AlertTitle>Semantic Title</AlertTitle>
          <AlertDescription>Semantic description content</AlertDescription>
        </Alert>
      );

      // Check that the alert is properly structured
      const alert = screen.getByRole('alert');
      const title = screen.getByText('Semantic Title');
      const description = screen.getByText('Semantic description content');

      expect(alert).toContainElement(title);
      expect(alert).toContainElement(description);
    });
  });
});
