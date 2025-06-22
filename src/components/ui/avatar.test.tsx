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
    expect(avatar).toHaveClass('relative', 'flex', 'h-10', 'w-10', 'shrink-0', 'overflow-hidden', 'rounded-full');
  });

  it('accepts custom className', () => {
    const { container } = render(
      <Avatar className="custom-size">
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    );
    expect(container.firstChild).toHaveClass('custom-size');
  });

  it('renders with image when src is valid', () => {
    render(
      <Avatar>
        <AvatarImage src="https://example.com/avatar.jpg" alt="User Avatar" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    );
    const image = screen.getByAltText('User Avatar');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/avatar.jpg');
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
    expect(fallback).toHaveClass('flex', 'h-full', 'w-full', 'items-center', 'justify-center', 'rounded-full', 'bg-muted');
  });

  it('applies custom className to fallback', () => {
    render(
      <Avatar>
        <AvatarFallback className="custom-fallback">JD</AvatarFallback>
      </Avatar>
    );
    expect(screen.getByText('JD')).toHaveClass('custom-fallback');
  });

  it('applies custom className to image', () => {
    render(
      <Avatar>
        <AvatarImage src="https://example.com/avatar.jpg" alt="User Avatar" className="custom-image" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    );
    const image = screen.getByAltText('User Avatar');
    expect(image).toHaveClass('custom-image', 'aspect-square', 'h-full', 'w-full');
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

  it('forwards ref correctly to AvatarImage', () => {
    const ref = React.createRef<HTMLImageElement>();
    render(
      <Avatar>
        <AvatarImage ref={ref} src="https://example.com/avatar.jpg" alt="User Avatar" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    );
    expect(ref.current).toBeInstanceOf(HTMLImageElement);
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