import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from './breadcrumb';

const BreadcrumbExample = () => (
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/components">Components</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
);

describe('Breadcrumb', () => {
  it('renders breadcrumb navigation', () => {
    render(<BreadcrumbExample />);

    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveAttribute('aria-label', 'breadcrumb');
  });

  it('renders breadcrumb list', () => {
    render(<BreadcrumbExample />);

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
  });

  it('renders breadcrumb links', () => {
    render(<BreadcrumbExample />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Components')).toBeInTheDocument();

    const homeLink = screen.getByRole('link', { name: 'Home' });
    const componentsLink = screen.getByRole('link', { name: 'Components' });

    expect(homeLink).toHaveAttribute('href', '/');
    expect(componentsLink).toHaveAttribute('href', '/components');
  });

  it('renders current page correctly', () => {
    render(<BreadcrumbExample />);

    const currentPage = screen.getByText('Breadcrumb');
    expect(currentPage).toBeInTheDocument();
    expect(currentPage).toHaveAttribute('aria-current', 'page');
    expect(currentPage).toHaveAttribute('aria-disabled', 'true');
  });

  it('handles custom separators', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Current</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );

    expect(screen.getByText('/')).toBeInTheDocument();
  });

  it('renders ellipsis component', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbEllipsis />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Current</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );

    const ellipsis = screen.getByText('More');
    expect(ellipsis).toBeInTheDocument();
    expect(ellipsis).toHaveClass('sr-only');
  });

  it('supports asChild prop on links', () => {
    const CustomLink = ({
      href,
      children,
      ...props
    }: React.ComponentProps<'a'>) => (
      <a href={href} data-testid="custom-link" {...props}>
        {children}
      </a>
    );

    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <CustomLink href="/">Home</CustomLink>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Current</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );

    const customLink = screen.getByTestId('custom-link');
    expect(customLink).toBeInTheDocument();
    expect(customLink).toHaveAttribute('href', '/');
  });

  it('applies custom className to components', () => {
    render(
      <Breadcrumb className="custom-breadcrumb">
        <BreadcrumbList className="custom-list">
          <BreadcrumbItem className="custom-item">
            <BreadcrumbLink href="/" className="custom-link">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="custom-separator" />
          <BreadcrumbItem>
            <BreadcrumbPage className="custom-page">Current</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );

    expect(screen.getByRole('navigation')).toHaveClass('custom-breadcrumb');
    expect(screen.getByRole('list')).toHaveClass('custom-list');
    expect(screen.getByText('Home').parentElement).toHaveClass('custom-item');
    expect(screen.getByText('Home')).toHaveClass('custom-link');
    expect(screen.getByText('Current')).toHaveClass('custom-page');
  });

  it('handles link click events', async () => {
    const user = userEvent.setup();
    const mockClick = jest.fn();

    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" onClick={mockClick}>
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Current</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );

    const homeLink = screen.getByRole('link', { name: 'Home' });
    await user.click(homeLink);

    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it('renders with default separator when no children provided', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Current</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );

    // The default ChevronRight icon should be rendered
    const separator = document.querySelector('[data-slot="breadcrumb-separator"]');
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveAttribute('aria-hidden', 'true');
  });

  it('supports custom aria-label', () => {
    render(
      <Breadcrumb aria-label="Custom navigation">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>Current</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label', 'Custom navigation');
  });

  it('maintains accessibility attributes', () => {
    render(<BreadcrumbExample />);

    const nav = screen.getByRole('navigation');
    const list = screen.getByRole('list');
    const currentPage = screen.getByText('Breadcrumb');
    const separators = document.querySelectorAll('[data-slot="breadcrumb-separator"]');

    expect(nav).toHaveAttribute('aria-label', 'breadcrumb');
    expect(list).toBeInTheDocument();
    expect(currentPage).toHaveAttribute('role', 'link');
    expect(currentPage).toHaveAttribute('aria-disabled', 'true');
    expect(currentPage).toHaveAttribute('aria-current', 'page');

    separators.forEach(separator => {
      expect(separator).toHaveAttribute('aria-hidden', 'true');
    });
  });

  it('renders single breadcrumb item', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>Only Page</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );

    expect(screen.getByText('Only Page')).toBeInTheDocument();
    // BreadcrumbPage should have role="link" for accessibility
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('handles empty breadcrumb', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList />
      </Breadcrumb>
    );

    const nav = screen.getByRole('navigation');
    const list = screen.getByRole('list');

    expect(nav).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(list).toBeEmptyDOMElement();
  });
});
