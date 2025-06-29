import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './carousel';

// Mock embla-carousel-react
jest.mock('embla-carousel-react', () => ({
  __esModule: true,
  default: jest.fn(() => [
    jest.fn(), // ref
    {
      scrollPrev: jest.fn(),
      scrollNext: jest.fn(),
      canScrollPrev: jest.fn(() => true),
      canScrollNext: jest.fn(() => true),
      on: jest.fn(),
      off: jest.fn(),
    },
  ]),
}));

const CarouselExample = ({
  orientation = 'horizontal' as const,
  ...props
}: {
  orientation?: 'horizontal' | 'vertical';
  [key: string]: unknown;
}) => (
  <Carousel orientation={orientation} {...props}>
    <CarouselContent>
      <CarouselItem>
        <div data-testid="item-1">Item 1</div>
      </CarouselItem>
      <CarouselItem>
        <div data-testid="item-2">Item 2</div>
      </CarouselItem>
      <CarouselItem>
        <div data-testid="item-3">Item 3</div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);

describe('Carousel', () => {
  it('renders carousel with proper structure', () => {
    render(<CarouselExample />);

    const carousel = document.querySelector('[data-slot="carousel"]');
    const content = document.querySelector('[data-slot="carousel-content"]');
    const items = document.querySelectorAll('[data-slot="carousel-item"]');

    expect(carousel).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(items).toHaveLength(3);
  });

  it('renders with correct accessibility attributes', () => {
    render(<CarouselExample />);

    const carousel = document.querySelector('[data-slot="carousel"]');
    expect(carousel).toHaveAttribute('role', 'region');
    expect(carousel).toHaveAttribute('aria-roledescription', 'carousel');
  });

  it('renders carousel items with proper roles', () => {
    render(<CarouselExample />);

    const items = document.querySelectorAll('[data-slot="carousel-item"]');
    items.forEach(item => {
      expect(item).toHaveAttribute('role', 'group');
      expect(item).toHaveAttribute('aria-roledescription', 'slide');
    });
  });

  it('renders navigation buttons', () => {
    render(<CarouselExample />);

    const prevButton = document.querySelector(
      '[data-slot="carousel-previous"]'
    );
    const nextButton = document.querySelector('[data-slot="carousel-next"]');

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(prevButton).toHaveAttribute('data-slot', 'carousel-previous');
    expect(nextButton).toHaveAttribute('data-slot', 'carousel-next');
  });

  it('navigation buttons have proper accessibility labels', () => {
    render(<CarouselExample />);

    expect(screen.getByText('Previous slide')).toBeInTheDocument();
    expect(screen.getByText('Next slide')).toBeInTheDocument();
  });

  it('handles horizontal orientation correctly', () => {
    render(<CarouselExample orientation="horizontal" />);

    const carousel = document.querySelector('[data-slot="carousel"]');
    expect(carousel).toBeInTheDocument();

    // Check that horizontal-specific classes are applied
    const content = document.querySelector('[data-slot="carousel-content"]');
    const flexContainer = content?.querySelector('div');
    expect(flexContainer).toHaveClass('-ml-4');
  });

  it('handles vertical orientation correctly', () => {
    render(<CarouselExample orientation="vertical" />);

    const carousel = document.querySelector('[data-slot="carousel"]');
    expect(carousel).toBeInTheDocument();

    // Check that vertical-specific classes are applied
    const content = document.querySelector('[data-slot="carousel-content"]');
    const flexContainer = content?.querySelector('div');
    expect(flexContainer).toHaveClass('-mt-4', 'flex-col');
  });

  it('applies custom className', () => {
    render(<CarouselExample className="custom-carousel" />);

    const carousel = document.querySelector('[data-slot="carousel"]');
    expect(carousel).toHaveClass('custom-carousel');
  });

  it('handles keyboard navigation', async () => {
    const user = userEvent.setup();
    render(<CarouselExample />);

    const carousel = document.querySelector('[data-slot="carousel"]');

    // Focus the carousel
    (carousel as HTMLElement)?.focus();

    // Test arrow key navigation
    await user.keyboard('{ArrowLeft}');
    await user.keyboard('{ArrowRight}');

    // Carousel should handle keyboard navigation without errors
    expect(carousel).toBeInTheDocument();
  });

  it('handles click events on navigation buttons', async () => {
    const user = userEvent.setup();
    render(<CarouselExample />);

    const prevButton = document.querySelector(
      '[data-slot="carousel-previous"]'
    );
    const nextButton = document.querySelector('[data-slot="carousel-next"]');

    // Click navigation buttons
    if (prevButton) await user.click(prevButton);
    if (nextButton) await user.click(nextButton);

    // Should not throw errors
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it('supports custom carousel options', () => {
    const options = { loop: true, align: 'center' };
    render(<CarouselExample opts={options} />);

    const carousel = document.querySelector('[data-slot="carousel"]');
    expect(carousel).toBeInTheDocument();
  });

  it('calls setApi callback when provided', () => {
    const setApiMock = jest.fn();
    render(<CarouselExample setApi={setApiMock} />);

    // setApi should be called when carousel initializes
    expect(setApiMock).toHaveBeenCalled();
  });

  it('renders without navigation buttons', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div>Item 1</div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    );

    const carousel = document.querySelector('[data-slot="carousel"]');
    const prevButton = document.querySelector(
      '[data-slot="carousel-previous"]'
    );
    const nextButton = document.querySelector('[data-slot="carousel-next"]');

    expect(carousel).toBeInTheDocument();
    expect(prevButton).not.toBeInTheDocument();
    expect(nextButton).not.toBeInTheDocument();
  });

  it('renders multiple carousel items correctly', () => {
    const items = Array.from({ length: 5 }, (_, i) => (
      <CarouselItem key={i}>
        <div data-testid={`item-${i}`}>Item {i + 1}</div>
      </CarouselItem>
    ));

    render(
      <Carousel>
        <CarouselContent>{items}</CarouselContent>
      </Carousel>
    );

    items.forEach((_, i) => {
      expect(screen.getByTestId(`item-${i}`)).toBeInTheDocument();
    });
  });

  it('handles custom button variants for navigation', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div>Item 1</div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious variant="ghost" />
        <CarouselNext variant="secondary" />
      </Carousel>
    );

    const prevButton = document.querySelector(
      '[data-slot="carousel-previous"]'
    );
    const nextButton = document.querySelector('[data-slot="carousel-next"]');

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it('supports custom sizes for navigation buttons', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div>Item 1</div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious size="sm" />
        <CarouselNext size="lg" />
      </Carousel>
    );

    const prevButton = document.querySelector(
      '[data-slot="carousel-previous"]'
    );
    const nextButton = document.querySelector('[data-slot="carousel-next"]');

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it('applies custom classes to carousel items', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem className="custom-item">
            <div>Item 1</div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    );

    const item = document.querySelector('[data-slot="carousel-item"]');
    expect(item).toHaveClass('custom-item');
  });

  it('applies custom classes to carousel content', () => {
    render(
      <Carousel>
        <CarouselContent className="custom-content">
          <CarouselItem>
            <div>Item 1</div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    );

    const content = document.querySelector('[data-slot="carousel-content"]');
    expect(content?.querySelector('div')).toHaveClass('custom-content');
  });

  it('applies custom classes to navigation buttons', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div>Item 1</div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="custom-prev" />
        <CarouselNext className="custom-next" />
      </Carousel>
    );

    const prevButton = document.querySelector(
      '[data-slot="carousel-previous"]'
    );
    const nextButton = document.querySelector('[data-slot="carousel-next"]');

    expect(prevButton).toHaveClass('custom-prev');
    expect(nextButton).toHaveClass('custom-next');
  });

  it('maintains carousel state across re-renders', () => {
    const { rerender } = render(<CarouselExample />);

    const carousel = document.querySelector('[data-slot="carousel"]');
    expect(carousel).toBeInTheDocument();

    rerender(<CarouselExample orientation="vertical" />);

    const rerenderedCarousel = document.querySelector('[data-slot="carousel"]');
    expect(rerenderedCarousel).toBeInTheDocument();
  });

  it('handles empty carousel gracefully', () => {
    render(
      <Carousel>
        <CarouselContent />
      </Carousel>
    );

    const carousel = document.querySelector('[data-slot="carousel"]');
    const content = document.querySelector('[data-slot="carousel-content"]');

    expect(carousel).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});
