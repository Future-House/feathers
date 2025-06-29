import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { AspectRatio } from './aspect-ratio';

describe('AspectRatio', () => {
  it('renders with default props', () => {
    render(
      <AspectRatio>
        <div data-testid="content">Content</div>
      </AspectRatio>
    );

    const aspectRatio = screen.getByTestId('content').parentElement;
    expect(aspectRatio).toBeInTheDocument();
    expect(aspectRatio).toHaveAttribute('data-slot', 'aspect-ratio');
  });

  it('applies custom ratio correctly', () => {
    render(
      <AspectRatio ratio={16 / 9}>
        <div data-testid="content">16:9 Content</div>
      </AspectRatio>
    );

    const aspectRatio = screen.getByTestId('content').parentElement;
    expect(aspectRatio).toBeInTheDocument();
    // Radix AspectRatio creates a wrapper with the aspect ratio
    expect(aspectRatio).toHaveAttribute('data-slot', 'aspect-ratio');
  });

  it('renders children correctly', () => {
    render(
      <AspectRatio>
        <div>Test content</div>
        <span>Additional content</span>
      </AspectRatio>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
    expect(screen.getByText('Additional content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <AspectRatio className="custom-class">
        <div data-testid="content">Content</div>
      </AspectRatio>
    );

    const aspectRatio = screen.getByTestId('content').parentElement;
    expect(aspectRatio).toHaveClass('custom-class');
  });

  it('supports asChild prop', () => {
    render(
      <AspectRatio asChild>
        <button data-testid="button">Button content</button>
      </AspectRatio>
    );

    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');
    expect(button).toHaveAttribute('data-slot', 'aspect-ratio');
  });

  it('handles click events when asChild is used with interactive elements', async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();

    render(
      <AspectRatio asChild>
        <button onClick={handleClick}>Clickable AspectRatio</button>
      </AspectRatio>
    );

    const button = screen.getByRole('button');
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('maintains aspect ratio with different ratios', () => {
    const { rerender } = render(
      <AspectRatio ratio={1}>
        <div data-testid="content">Square</div>
      </AspectRatio>
    );

    let aspectRatio = screen.getByTestId('content').parentElement;
    expect(aspectRatio).toBeInTheDocument();

    // Test with different ratio
    rerender(
      <AspectRatio ratio={16 / 9}>
        <div data-testid="content">Widescreen</div>
      </AspectRatio>
    );

    aspectRatio = screen.getByTestId('content').parentElement;
    expect(aspectRatio).toBeInTheDocument();
  });

  it('works with image content', () => {
    render(
      <AspectRatio ratio={16 / 9}>
        <img src="test-image.jpg" alt="Test image" data-testid="image" />
      </AspectRatio>
    );

    const image = screen.getByTestId('image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test-image.jpg');
    expect(image).toHaveAttribute('alt', 'Test image');
  });

  it('works with video content', () => {
    render(
      <AspectRatio ratio={16 / 9}>
        <video data-testid="video" controls>
          <source src="test-video.mp4" type="video/mp4" />
        </video>
      </AspectRatio>
    );

    const video = screen.getByTestId('video');
    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute('controls');
  });

  it('applies style props correctly', () => {
    render(
      <AspectRatio style={{ border: '1px solid red' }}>
        <div data-testid="content">Styled content</div>
      </AspectRatio>
    );

    const aspectRatio = screen.getByTestId('content').parentElement;
    expect(aspectRatio).toHaveStyle('border: 1px solid red');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();

    render(
      <AspectRatio ref={ref}>
        <div>Content with ref</div>
      </AspectRatio>
    );

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current).toHaveAttribute('data-slot', 'aspect-ratio');
  });

  it('handles multiple aspect ratios in a grid', () => {
    const ratios = [16 / 9, 4 / 3, 1, 3 / 4];

    render(
      <div>
        {ratios.map((ratio, index) => (
          <AspectRatio key={index} ratio={ratio}>
            <div data-testid={`content-${index}`}>Content {index}</div>
          </AspectRatio>
        ))}
      </div>
    );

    ratios.forEach((_, index) => {
      expect(screen.getByTestId(`content-${index}`)).toBeInTheDocument();
    });
  });

  it('preserves content layout within aspect ratio', () => {
    render(
      <AspectRatio ratio={16 / 9}>
        <div className="flex items-center justify-center">
          <span data-testid="centered-content">Centered Content</span>
        </div>
      </AspectRatio>
    );

    const content = screen.getByTestId('centered-content');
    expect(content).toBeInTheDocument();
    expect(content.parentElement).toHaveClass(
      'flex',
      'items-center',
      'justify-center'
    );
  });
});
