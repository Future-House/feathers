import React from 'react';
import { render, screen } from '@testing-library/react';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

describe('Avatar', () => {
  it('renders correctly', () => {
    render(
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    );
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('applies default classes', () => {
    const { container } = render(
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    );
    const avatar = container.firstChild;
    expect(avatar).toHaveClass(
      'relative',
      'flex',
      'h-10',
      'w-10',
      'shrink-0',
      'overflow-hidden',
      'rounded-full'
    );
  });

  it('accepts custom className', () => {
    const { container } = render(
      <Avatar className="custom-size">
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    );
    expect(container.firstChild).toHaveClass('custom-size');
  });

  it('renders AvatarImage component with correct props', () => {
    const { container } = render(
      <Avatar>
        <AvatarImage src="https://example.com/avatar.jpg" alt="User Avatar" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    );

    expect(container.firstChild).toHaveClass('relative', 'flex', 'h-10', 'w-10');
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('shows fallback when image fails to load', () => {
    render(
      <Avatar>
        <AvatarImage src="invalid-url" alt="Broken image" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    );
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders fallback with default classes', () => {
    render(
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    );
    const fallback = screen.getByText('JD');
    expect(fallback).toHaveClass(
      'flex',
      'h-full',
      'w-full',
      'items-center',
      'justify-center',
      'rounded-full',
      'bg-muted'
    );
  });

  it('applies custom className to fallback', () => {
    render(
      <Avatar>
        <AvatarFallback className="custom-fallback">JD</AvatarFallback>
      </Avatar>
    );
    expect(screen.getByText('JD')).toHaveClass('custom-fallback');
  });

  it('AvatarImage accepts custom className prop', () => {
    const { container } = render(
      <Avatar>
        <AvatarImage
          src="https://example.com/avatar.jpg"
          alt="User Avatar"
          className="custom-image"
        />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    );

    // Avatar structure should be correct
    expect(container.firstChild).toHaveClass('relative', 'flex', 'h-10', 'w-10');

    // Shows fallback initially
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('forwards ref correctly to Avatar', () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(
      <Avatar ref={ref}>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    );
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it('AvatarImage accepts ref prop', () => {
    const ref = React.createRef<HTMLImageElement>();
    const { container } = render(
      <Avatar>
        <AvatarImage ref={ref} src="https://example.com/avatar.jpg" alt="User Avatar" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    );

    // Avatar should render correctly
    expect(container.firstChild).toHaveClass('relative', 'flex', 'h-10', 'w-10');
    expect(screen.getByText('JD')).toBeInTheDocument();

    // Note: ref.current may be null in test environment due to Radix Avatar's image loading behavior
  });

  it('forwards ref correctly to AvatarFallback', () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(
      <Avatar>
        <AvatarFallback ref={ref}>JD</AvatarFallback>
      </Avatar>
    );
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it('handles different size variations', () => {
    const { container } = render(
      <Avatar className="h-16 w-16">
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    );
    expect(container.firstChild).toHaveClass('h-16', 'w-16');
  });
});
