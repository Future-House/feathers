import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Label } from './label';

describe('Label', () => {
  it('renders label element', () => {
    render(<Label>Test label</Label>);

    const label = screen.getByText('Test label');
    expect(label).toBeInTheDocument();
    expect(label.tagName).toBe('LABEL');
  });

  it('applies data-slot attribute', () => {
    render(<Label>Test label</Label>);

    const label = screen.getByText('Test label');
    expect(label).toHaveAttribute('data-slot', 'label');
  });

  it('applies custom className', () => {
    render(<Label className="custom-class">Test label</Label>);

    const label = screen.getByText('Test label');
    expect(label).toHaveClass('custom-class');
  });

  it('applies default styling classes', () => {
    render(<Label>Test label</Label>);

    const label = screen.getByText('Test label');
    expect(label).toHaveClass(
      'flex',
      'items-center',
      'gap-2',
      'text-sm',
      'leading-none',
      'font-medium',
      'select-none'
    );
  });

  it('handles htmlFor attribute', () => {
    render(<Label htmlFor="test-input">Test label</Label>);

    const label = screen.getByText('Test label');
    expect(label).toHaveAttribute('for', 'test-input');
  });

  it('renders with children', () => {
    render(
      <Label>
        <span>Label with</span> <strong>mixed content</strong>
      </Label>
    );

    expect(screen.getByText('Label with')).toBeInTheDocument();
    expect(screen.getByText('mixed content')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Label onClick={handleClick}>Clickable label</Label>);

    const label = screen.getByText('Clickable label');
    label.click();

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with required indicator', () => {
    render(
      <Label>
        Email <span className="text-red-500">*</span>
      </Label>
    );

    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('*')).toBeInTheDocument();
    expect(screen.getByText('*')).toHaveClass('text-red-500');
  });

  it('supports asChild prop', () => {
    render(
      <Label asChild>
        <div data-testid="custom-element">Custom label element</div>
      </Label>
    );

    const customElement = screen.getByTestId('custom-element');
    expect(customElement).toBeInTheDocument();
    expect(customElement.tagName).toBe('DIV');
    expect(customElement).toHaveAttribute('data-slot', 'label');
  });

  it('combines multiple CSS classes correctly', () => {
    render(<Label className="text-blue-500 uppercase">Styled label</Label>);

    const label = screen.getByText('Styled label');
    expect(label).toHaveClass('text-blue-500', 'uppercase');
    // Should also have default classes
    expect(label).toHaveClass('text-sm', 'font-medium');
  });

  it('handles disabled state styling', () => {
    render(
      <div className="group" data-disabled="true">
        <Label>Disabled label</Label>
      </div>
    );

    const label = screen.getByText('Disabled label');
    expect(label).toHaveClass('group-data-[disabled=true]:pointer-events-none');
    expect(label).toHaveClass('group-data-[disabled=true]:opacity-50');
  });

  it('handles peer disabled styling', () => {
    render(
      <div>
        <input disabled className="peer" />
        <Label>Label for disabled input</Label>
      </div>
    );

    const label = screen.getByText('Label for disabled input');
    expect(label).toHaveClass('peer-disabled:cursor-not-allowed');
    expect(label).toHaveClass('peer-disabled:opacity-50');
  });
});
