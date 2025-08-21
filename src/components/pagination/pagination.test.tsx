import { render, screen } from '@testing-library/react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './pagination';

describe('Pagination', () => {
  it('renders correctly', () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toHaveAttribute(
      'aria-label',
      'pagination'
    );
  });

  it('applies correct classes to pagination nav', () => {
    render(
      <Pagination className="custom-class">
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass(
      'mx-auto',
      'flex',
      'w-full',
      'justify-center',
      'custom-class'
    );
  });

  it('renders pagination content with correct classes', () => {
    render(
      <Pagination>
        <PaginationContent className="custom-content">
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );

    const list = screen.getByRole('list');
    expect(list).toHaveClass(
      'flex',
      'flex-row',
      'items-center',
      'gap-1',
      'custom-content'
    );
  });

  it('renders pagination items', () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );

    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(2);
  });

  it('renders pagination links with correct attributes', () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#page1">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#page2" isActive>
              2
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);

    expect(links[0]).toHaveAttribute('href', '#page1');
    expect(links[0]).not.toHaveAttribute('aria-current');

    expect(links[1]).toHaveAttribute('href', '#page2');
    expect(links[1]).toHaveAttribute('aria-current', 'page');
  });

  it('renders previous button with correct label', () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#prev" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );

    const prevLink = screen.getByLabelText('Go to previous page');
    expect(prevLink).toBeInTheDocument();
    expect(prevLink).toHaveAttribute('href', '#prev');
    expect(screen.getByText('Previous')).toBeInTheDocument();
  });

  it('renders next button with correct label', () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationNext href="#next" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );

    const nextLink = screen.getByLabelText('Go to next page');
    expect(nextLink).toBeInTheDocument();
    expect(nextLink).toHaveAttribute('href', '#next');
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  it('renders ellipsis with correct attributes', () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );

    const ellipsis = screen.getByText('More pages');
    expect(ellipsis).toBeInTheDocument();
    expect(ellipsis.parentElement).toHaveAttribute('aria-hidden');
  });

  it('applies active state classes correctly', () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );

    const links = screen.getAllByRole('link');
    const activeLink = links.find(
      link => link.getAttribute('aria-current') === 'page'
    );
    const inactiveLink = links.find(link => !link.getAttribute('aria-current'));

    expect(activeLink).toHaveAttribute('data-active', 'true');
    expect(inactiveLink).not.toHaveAttribute('data-active');
  });

  it('accepts custom className on all components', () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#" className="custom-link">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationPrevious href="#" className="custom-prev" />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" className="custom-next" />
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis className="custom-ellipsis" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );

    expect(screen.getByText('1')).toHaveClass('custom-link');
    expect(screen.getByLabelText('Go to previous page')).toHaveClass(
      'custom-prev'
    );
    expect(screen.getByLabelText('Go to next page')).toHaveClass('custom-next');
    expect(screen.getByText('More pages').parentElement).toHaveClass(
      'custom-ellipsis'
    );
  });
});
