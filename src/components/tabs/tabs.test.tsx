import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs';

describe('Tabs', () => {
  const defaultTabsStructure = (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content 1</TabsContent>
      <TabsContent value="tab2">Content 2</TabsContent>
      <TabsContent value="tab3">Content 3</TabsContent>
    </Tabs>
  );

  describe('Tabs Root', () => {
    it('renders correctly', () => {
      render(defaultTabsStructure);
      expect(screen.getByRole('tablist')).toBeInTheDocument();
    });

    it('applies default classes', () => {
      render(defaultTabsStructure);
      const tabsContainer = screen.getByRole('tablist').parentElement;
      expect(tabsContainer).toHaveClass('flex', 'flex-col', 'gap-2');
    });

    it('accepts custom className', () => {
      render(
        <Tabs defaultValue="tab1" className="custom-tabs-class">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
        </Tabs>
      );
      const tabsContainer = screen.getByRole('tablist').parentElement;
      expect(tabsContainer).toHaveClass('custom-tabs-class');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(
        <Tabs ref={ref} defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
        </Tabs>
      );

      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current).toHaveAttribute('data-slot', 'tabs');
    });
  });

  describe('TabsList', () => {
    it('renders as tablist role', () => {
      render(defaultTabsStructure);
      expect(screen.getByRole('tablist')).toBeInTheDocument();
    });

    it('applies default classes', () => {
      render(defaultTabsStructure);
      const tabsList = screen.getByRole('tablist');
      expect(tabsList).toHaveClass(
        'bg-muted',
        'text-muted-foreground',
        'inline-flex',
        'h-9',
        'w-fit',
        'items-center',
        'justify-center',
        'rounded-lg'
      );
    });

    it('accepts custom className', () => {
      render(
        <Tabs defaultValue="tab1">
          <TabsList className="custom-list-class">
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
        </Tabs>
      );
      const tabsList = screen.getByRole('tablist');
      expect(tabsList).toHaveClass('custom-list-class');
    });

    it('has correct data-slot attribute', () => {
      render(defaultTabsStructure);
      const tabsList = screen.getByRole('tablist');
      expect(tabsList).toHaveAttribute('data-slot', 'tabs-list');
    });
  });

  describe('TabsTrigger', () => {
    it('renders as tab role', () => {
      render(defaultTabsStructure);
      const triggers = screen.getAllByRole('tab');
      expect(triggers).toHaveLength(3);
      expect(triggers[0]).toHaveTextContent('Tab 1');
      expect(triggers[1]).toHaveTextContent('Tab 2');
      expect(triggers[2]).toHaveTextContent('Tab 3');
    });

    it('applies default classes', () => {
      render(defaultTabsStructure);
      const trigger = screen.getByRole('tab', { name: 'Tab 1' });
      expect(trigger).toHaveClass(
        'inline-flex',
        'items-center',
        'justify-center',
        'gap-1.5',
        'rounded-md',
        'border',
        'border-transparent',
        'px-2',
        'py-1',
        'text-sm',
        'font-medium',
        'whitespace-nowrap'
      );
    });

    it('has correct data-slot attribute', () => {
      render(defaultTabsStructure);
      const trigger = screen.getByRole('tab', { name: 'Tab 1' });
      expect(trigger).toHaveAttribute('data-slot', 'tabs-trigger');
    });

    it('accepts custom className', () => {
      render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1" className="custom-trigger-class">
              Tab 1
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
        </Tabs>
      );
      const trigger = screen.getByRole('tab', { name: 'Tab 1' });
      expect(trigger).toHaveClass('custom-trigger-class');
    });

    it('can be disabled', () => {
      render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2" disabled>
              Tab 2
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs>
      );

      const disabledTrigger = screen.getByRole('tab', { name: 'Tab 2' });
      expect(disabledTrigger).toBeDisabled();
      expect(disabledTrigger).toHaveClass(
        'disabled:pointer-events-none',
        'disabled:opacity-50'
      );
    });
  });

  describe('TabsContent', () => {
    it('renders content for active tab', () => {
      render(defaultTabsStructure);
      expect(screen.getByText('Content 1')).toBeInTheDocument();
      expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
      expect(screen.queryByText('Content 3')).not.toBeInTheDocument();
    });

    it('applies default classes', () => {
      render(defaultTabsStructure);
      const content = screen.getByText('Content 1');
      expect(content).toHaveClass('flex-1', 'outline-none');
    });

    it('has correct data-slot attribute', () => {
      render(defaultTabsStructure);
      const content = screen.getByText('Content 1');
      expect(content).toHaveAttribute('data-slot', 'tabs-content');
    });

    it('accepts custom className', () => {
      render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="custom-content-class">
            Content 1
          </TabsContent>
        </Tabs>
      );
      const content = screen.getByText('Content 1');
      expect(content).toHaveClass('custom-content-class');
    });
  });

  describe('Tab Navigation', () => {
    it('switches content when clicking tabs', async () => {
      render(defaultTabsStructure);

      // Initially shows first tab content
      expect(screen.getByText('Content 1')).toBeInTheDocument();
      expect(screen.queryByText('Content 2')).not.toBeInTheDocument();

      // Click second tab
      await userEvent.click(screen.getByRole('tab', { name: 'Tab 2' }));

      // Should show second tab content
      expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
      expect(screen.getByText('Content 2')).toBeInTheDocument();

      // Click third tab
      await userEvent.click(screen.getByRole('tab', { name: 'Tab 3' }));

      // Should show third tab content
      expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
      expect(screen.getByText('Content 3')).toBeInTheDocument();
    });

    it('supports keyboard navigation', async () => {
      render(defaultTabsStructure);

      const firstTab = screen.getByRole('tab', { name: 'Tab 1' });
      const secondTab = screen.getByRole('tab', { name: 'Tab 2' });

      // Focus first tab
      firstTab.focus();
      expect(firstTab).toHaveFocus();

      // Arrow right to second tab
      await userEvent.keyboard('{ArrowRight}');
      expect(secondTab).toHaveFocus();
      expect(screen.getByText('Content 2')).toBeInTheDocument();

      // Arrow left back to first tab
      await userEvent.keyboard('{ArrowLeft}');
      expect(firstTab).toHaveFocus();
      expect(screen.getByText('Content 1')).toBeInTheDocument();
    });

    it('wraps around with keyboard navigation', async () => {
      render(defaultTabsStructure);

      const firstTab = screen.getByRole('tab', { name: 'Tab 1' });
      const lastTab = screen.getByRole('tab', { name: 'Tab 3' });

      // Focus first tab and go left (should wrap to last)
      firstTab.focus();
      await userEvent.keyboard('{ArrowLeft}');
      expect(lastTab).toHaveFocus();

      // From last tab, go right (should wrap to first)
      await userEvent.keyboard('{ArrowRight}');
      expect(firstTab).toHaveFocus();
    });

    it('activates tab with Enter key', async () => {
      render(
        <Tabs defaultValue="tab1" activationMode="manual">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs>
      );

      const secondTab = screen.getByRole('tab', { name: 'Tab 2' });

      // Focus second tab but don't activate (manual mode)
      secondTab.focus();
      expect(screen.getByText('Content 1')).toBeInTheDocument(); // Still showing first content

      // Press Enter to activate
      await userEvent.keyboard('{Enter}');
      expect(screen.getByText('Content 2')).toBeInTheDocument();
    });

    it('activates tab with Space key', async () => {
      render(
        <Tabs defaultValue="tab1" activationMode="manual">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs>
      );

      const secondTab = screen.getByRole('tab', { name: 'Tab 2' });

      secondTab.focus();
      expect(screen.getByText('Content 1')).toBeInTheDocument();

      await userEvent.keyboard(' ');
      expect(screen.getByText('Content 2')).toBeInTheDocument();
    });
  });

  describe('Controlled Mode', () => {
    it('can be controlled', async () => {
      const ControlledTabs = () => {
        const [value, setValue] = React.useState('tab1');
        return (
          <div>
            <button onClick={() => setValue('tab2')}>Switch to Tab 2</button>
            <Tabs value={value} onValueChange={setValue}>
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Content 1</TabsContent>
              <TabsContent value="tab2">Content 2</TabsContent>
            </Tabs>
          </div>
        );
      };

      render(<ControlledTabs />);

      expect(screen.getByText('Content 1')).toBeInTheDocument();

      await userEvent.click(screen.getByText('Switch to Tab 2'));
      expect(screen.getByText('Content 2')).toBeInTheDocument();
    });

    it('calls onValueChange when tab changes', async () => {
      const handleValueChange = jest.fn();
      render(
        <Tabs defaultValue="tab1" onValueChange={handleValueChange}>
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs>
      );

      await userEvent.click(screen.getByRole('tab', { name: 'Tab 2' }));
      expect(handleValueChange).toHaveBeenCalledWith('tab2');
    });
  });

  describe('Vertical Orientation', () => {
    it('supports vertical orientation', () => {
      render(
        <Tabs defaultValue="tab1" orientation="vertical">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs>
      );

      const tabsContainer = screen.getByRole('tablist').parentElement;
      expect(tabsContainer).toHaveAttribute('data-orientation', 'vertical');
    });

    it('supports vertical keyboard navigation', async () => {
      render(
        <Tabs defaultValue="tab1" orientation="vertical">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs>
      );

      const firstTab = screen.getByRole('tab', { name: 'Tab 1' });
      const secondTab = screen.getByRole('tab', { name: 'Tab 2' });

      firstTab.focus();
      await userEvent.keyboard('{ArrowDown}');
      expect(secondTab).toHaveFocus();
      expect(screen.getByText('Content 2')).toBeInTheDocument();

      await userEvent.keyboard('{ArrowUp}');
      expect(firstTab).toHaveFocus();
      expect(screen.getByText('Content 1')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes', () => {
      render(defaultTabsStructure);

      const tablist = screen.getByRole('tablist');
      const tabs = screen.getAllByRole('tab');
      const tabpanel = screen.getByRole('tabpanel');

      expect(tablist).toBeInTheDocument();
      expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
      expect(tabs[1]).toHaveAttribute('aria-selected', 'false');
      expect(tabs[2]).toHaveAttribute('aria-selected', 'false');
      expect(tabpanel).toBeInTheDocument();
    });

    it('associates tabs with their panels', () => {
      render(defaultTabsStructure);

      const activeTab = screen.getByRole('tab', { name: 'Tab 1' });
      const tabpanel = screen.getByRole('tabpanel');

      expect(activeTab).toHaveAttribute('aria-controls');
      expect(tabpanel).toHaveAttribute('aria-labelledby');
    });

    it('supports custom aria-label', () => {
      render(
        <Tabs defaultValue="tab1" aria-label="Navigation tabs">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
        </Tabs>
      );

      const tabsContainer = screen.getByRole('tablist').parentElement;
      expect(tabsContainer).toHaveAttribute('aria-label', 'Navigation tabs');
    });
  });

  describe('Disabled State', () => {
    it('prevents interaction with disabled tabs', async () => {
      const handleValueChange = jest.fn();
      render(
        <Tabs defaultValue="tab1" onValueChange={handleValueChange}>
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2" disabled>
              Tab 2
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs>
      );

      const disabledTab = screen.getByRole('tab', { name: 'Tab 2' });

      await userEvent.click(disabledTab);
      expect(handleValueChange).not.toHaveBeenCalled();
      expect(screen.getByText('Content 1')).toBeInTheDocument();
    });

    it('skips disabled tabs in keyboard navigation', async () => {
      render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2" disabled>
              Tab 2
            </TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
          <TabsContent value="tab3">Content 3</TabsContent>
        </Tabs>
      );

      const firstTab = screen.getByRole('tab', { name: 'Tab 1' });
      const thirdTab = screen.getByRole('tab', { name: 'Tab 3' });

      firstTab.focus();
      await userEvent.keyboard('{ArrowRight}');
      expect(thirdTab).toHaveFocus(); // Should skip disabled tab 2
      expect(screen.getByText('Content 3')).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('handles empty tabs list', () => {
      render(
        <Tabs defaultValue="tab1">
          <TabsList />
          <TabsContent value="tab1">Content 1</TabsContent>
        </Tabs>
      );

      expect(screen.getByRole('tablist')).toBeInTheDocument();
    });

    it('handles tabs without content', () => {
      render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsList>
        </Tabs>
      );

      expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument();
    });

    it('handles content without corresponding tab', () => {
      render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs>
      );

      expect(screen.getByText('Content 1')).toBeInTheDocument();
      expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
    });
  });
});
