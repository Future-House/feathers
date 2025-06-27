import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './accordion';

describe('Accordion', () => {
  const BasicAccordion = () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components aesthetic.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );

  it('renders correctly', () => {
    render(<BasicAccordion />);
    expect(screen.getByText('Is it accessible?')).toBeInTheDocument();
    expect(screen.getByText('Is it styled?')).toBeInTheDocument();
  });

  it('applies correct data attributes', () => {
    const { container } = render(<BasicAccordion />);
    expect(container.querySelector('[data-slot="accordion"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="accordion-item"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="accordion-trigger"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="accordion-content"]')).toBeInTheDocument();
  });

  it('applies default classes to accordion items', () => {
    const { container } = render(<BasicAccordion />);
    const accordionItems = container.querySelectorAll('[data-slot="accordion-item"]');
    accordionItems.forEach((item) => {
      expect(item).toHaveClass('border-b', 'last:border-b-0');
    });
  });

  it('applies default classes to accordion trigger', () => {
    const { container } = render(<BasicAccordion />);
    const trigger = container.querySelector('[data-slot="accordion-trigger"]');
    expect(trigger).toHaveClass(
      'focus-visible:border-ring',
      'focus-visible:ring-ring/50',
      'flex',
      'flex-1',
      'items-start',
      'justify-between',
      'gap-4',
      'rounded-md',
      'py-4',
      'text-left',
      'text-sm',
      'font-medium'
    );
  });

  it('includes chevron icon in trigger', () => {
    const { container } = render(<BasicAccordion />);
    const chevronIcon = container.querySelector('svg');
    expect(chevronIcon).toBeInTheDocument();
    expect(chevronIcon).toHaveClass('size-4', 'shrink-0');
  });

  it('toggles content visibility when trigger is clicked', async () => {
    const user = userEvent.setup();
    render(<BasicAccordion />);

    const trigger = screen.getByText('Is it accessible?');
    
    // Click trigger to expand
    await user.click(trigger);
    
    // Content should be visible after clicking
    const content = screen.getByText('Yes. It adheres to the WAI-ARIA design pattern.');
    expect(content).toBeVisible();

    // Click trigger again to collapse
    await user.click(trigger);
    expect(content).not.toBeVisible();
  });

  it('allows multiple items to be open when type is "multiple"', async () => {
    const user = userEvent.setup();
    render(
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Item 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger1 = screen.getByText('Item 1');
    const trigger2 = screen.getByText('Item 2');

    // Open first item
    await user.click(trigger1);
    const content1 = screen.getByText('Content 1');
    expect(content1).toBeVisible();

    // Open second item - first should remain open
    await user.click(trigger2);
    const content2 = screen.getByText('Content 2');
    expect(content1).toBeVisible();
    expect(content2).toBeVisible();
  });

  it('accepts custom className for AccordionItem', () => {
    const { container } = render(
      <Accordion type="single">
        <AccordionItem value="item-1" className="custom-item-class">
          <AccordionTrigger>Test</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const accordionItem = container.querySelector('[data-slot="accordion-item"]');
    expect(accordionItem).toHaveClass('custom-item-class');
  });

  it('accepts custom className for AccordionTrigger', () => {
    const { container } = render(
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger className="custom-trigger-class">Test</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger = container.querySelector('[data-slot="accordion-trigger"]');
    expect(trigger).toHaveClass('custom-trigger-class');
  });

  it('accepts custom className for AccordionContent', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>Test</AccordionTrigger>
          <AccordionContent className="custom-content-class">Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    // Expand the accordion to make content visible
    const trigger = screen.getByText('Test');
    await user.click(trigger);

    // Content wrapper div gets the custom class
    const contentWrapper = container.querySelector('.custom-content-class');
    expect(contentWrapper).toBeInTheDocument();
  });

  it('supports keyboard navigation', async () => {
    const user = userEvent.setup();
    render(<BasicAccordion />);

    const firstTrigger = screen.getByText('Is it accessible?');
    const secondTrigger = screen.getByText('Is it styled?');

    // Focus first trigger
    firstTrigger.focus();
    expect(firstTrigger).toHaveFocus();

    // Use Tab to navigate to second trigger
    await user.tab();
    expect(secondTrigger).toHaveFocus();

    // Use Enter to activate trigger
    await user.keyboard('{Enter}');
    const content = screen.getByText('Yes. It comes with default styles that matches the other components aesthetic.');
    expect(content).toBeVisible();
  });

  it('supports disabled state', () => {
    render(
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger disabled>Disabled Trigger</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger = screen.getByText('Disabled Trigger');
    expect(trigger).toBeDisabled();
    expect(trigger).toHaveClass('disabled:pointer-events-none', 'disabled:opacity-50');
  });
});