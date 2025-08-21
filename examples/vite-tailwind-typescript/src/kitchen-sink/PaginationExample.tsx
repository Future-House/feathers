import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@future-house/feathers';

export default function PaginationExample() {
  const [currentPage, setCurrentPage] = useState(5);
  const totalPages = 20;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPaginationWithEllipsis = () => {
    const items = [];

    // Previous button
    items.push(
      <PaginationItem key="prev">
        <PaginationPrevious
          href="#"
          onClick={e => {
            e.preventDefault();
            if (currentPage > 1) handlePageChange(currentPage - 1);
          }}
        />
      </PaginationItem>
    );

    // First page
    if (currentPage > 3) {
      items.push(
        <PaginationItem key="1">
          <PaginationLink
            href="#"
            onClick={e => {
              e.preventDefault();
              handlePageChange(1);
            }}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );

      if (currentPage > 4) {
        items.push(
          <PaginationItem key="ellipsis1">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    }

    // Pages around current
    const start = Math.max(1, currentPage - 1);
    const end = Math.min(totalPages, currentPage + 1);

    for (let i = start; i <= end; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            isActive={i === currentPage}
            onClick={e => {
              e.preventDefault();
              handlePageChange(i);
            }}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Last page
    if (currentPage < totalPages - 2) {
      if (currentPage < totalPages - 3) {
        items.push(
          <PaginationItem key="ellipsis2">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            href="#"
            onClick={e => {
              e.preventDefault();
              handlePageChange(totalPages);
            }}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Next button
    items.push(
      <PaginationItem key="next">
        <PaginationNext
          href="#"
          onClick={e => {
            e.preventDefault();
            if (currentPage < totalPages) handlePageChange(currentPage + 1);
          }}
        />
      </PaginationItem>
    );

    return items;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pagination Components</CardTitle>
        <CardDescription>
          Interactive pagination with ellipsis and navigation controls
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="mb-3 text-sm font-medium">Simple pagination</h4>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-medium">
            Interactive pagination (Page {currentPage} of {totalPages})
          </h4>
          <Pagination>
            <PaginationContent>
              {renderPaginationWithEllipsis()}
            </PaginationContent>
          </Pagination>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-medium">With ellipsis</h4>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">4</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  5
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">6</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">20</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </CardContent>
    </Card>
  );
}
