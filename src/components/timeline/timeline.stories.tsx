import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Check, Clock, CircleAlert } from '@/icons';
import { Timeline, TimelineItem, TimelineHeading } from './timeline';
import { Typography } from '../typography';

const meta = {
  title: 'Components/Timeline/Basic',
  component: Timeline,
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="mx-auto max-w-lg">
      <Timeline>
        <TimelineItem
          iconElement={<Check className="h-3 w-3 text-green-600" />}
        >
          <TimelineHeading>Project Initialized</TimelineHeading>
          <Typography className="mt-1">
            Successfully set up the project repository and initial
            configuration.
          </Typography>
          <Typography
            variant="small"
            className="mt-2 text-gray-400 dark:text-gray-500"
          >
            2 hours ago
          </Typography>
        </TimelineItem>

        <TimelineItem iconElement={<Clock className="h-3 w-3 text-blue-600" />}>
          <TimelineHeading>Development in Progress</TimelineHeading>
          <Typography variant="muted" className="mt-1">
            Currently working on the core component implementation.
          </Typography>
          <Typography
            variant="small"
            className="mt-2 text-gray-400 dark:text-gray-500"
          >
            1 hour ago
          </Typography>
        </TimelineItem>

        <TimelineItem
          iconElement={<CircleAlert className="h-3 w-3 text-amber-600" />}
        >
          <TimelineHeading>Pending Review</TimelineHeading>
          <Typography variant="muted" className="mt-1">
            Code review and testing phase scheduled for tomorrow.
          </Typography>
          <Typography
            variant="small"
            className="mt-2 text-gray-400 dark:text-gray-500"
          >
            30 minutes ago
          </Typography>
        </TimelineItem>
      </Timeline>
    </div>
  ),
};

const CollapsibleExample = () => {
  const [collapsed, setCollapsed] = useState({
    item1: false,
    item2: true,
    item3: false,
  });

  return (
    <div className="mx-auto max-w-lg">
      <Timeline>
        <TimelineItem
          iconElement={<div className="h-2 w-2 rounded-full bg-green-500" />}
          isCollapsible
          isCollapsed={collapsed.item1}
          onToggle={() =>
            setCollapsed(prev => ({ ...prev, item1: !prev.item1 }))
          }
        >
          <TimelineHeading>Design Phase Complete</TimelineHeading>
          <Typography variant="muted" className="mt-1">
            All wireframes and mockups have been approved by the design team.
            The project is ready to move into the development phase.
          </Typography>
          <Typography
            variant="small"
            className="mt-2 text-gray-400 dark:text-gray-500"
          >
            3 days ago
          </Typography>
        </TimelineItem>

        <TimelineItem
          iconElement={<div className="h-2 w-2 rounded-full bg-blue-500" />}
          isCollapsible
          isCollapsed={collapsed.item2}
          onToggle={() =>
            setCollapsed(prev => ({ ...prev, item2: !prev.item2 }))
          }
        >
          <TimelineHeading>Development Started</TimelineHeading>
          <Typography className="mt-1">
            Backend API development has begun. The database schema has been
            finalized and initial endpoints are being implemented.
          </Typography>
          <Typography
            variant="muted"
            className="mt-2 text-gray-400 dark:text-gray-500"
          >
            2 days ago
          </Typography>
        </TimelineItem>

        <TimelineItem
          iconElement={<div className="h-2 w-2 rounded-full bg-amber-500" />}
          isCollapsible
          isCollapsed={collapsed.item3}
          onToggle={() =>
            setCollapsed(prev => ({ ...prev, item3: !prev.item3 }))
          }
        >
          <TimelineHeading>Frontend Integration</TimelineHeading>
          <Typography className="mt-1">
            Frontend components are being integrated with the backend APIs.
            Initial user interface is taking shape and basic functionality is
            working.
          </Typography>
          <Typography
            variant="muted"
            className="mt-2 text-gray-400 dark:text-gray-500"
          >
            1 day ago
          </Typography>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export const Collapsible: Story = {
  render: () => <CollapsibleExample />,
};

export const WithNumbers: Story = {
  render: () => (
    <div className="mx-auto max-w-lg">
      <Timeline>
        <TimelineItem
          iconElement={
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
              1
            </span>
          }
        >
          <TimelineHeading>Requirements Gathering</TimelineHeading>
          <Typography className="mt-1">
            Meet with stakeholders to understand project requirements and define
            success criteria.
          </Typography>
        </TimelineItem>

        <TimelineItem
          iconElement={
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
              2
            </span>
          }
        >
          <TimelineHeading>Architecture Planning</TimelineHeading>
          <Typography className="mt-1">
            Design the system architecture and choose appropriate technologies
            for implementation.
          </Typography>
        </TimelineItem>

        <TimelineItem
          iconElement={
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
              3
            </span>
          }
        >
          <TimelineHeading>Implementation</TimelineHeading>
          <Typography className="mt-1">
            Develop the application according to the planned architecture and
            requirements.
          </Typography>
        </TimelineItem>

        <TimelineItem
          iconElement={
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
              4
            </span>
          }
        >
          <TimelineHeading>Testing & Deployment</TimelineHeading>
          <Typography className="mt-1">
            Thoroughly test the application and deploy to production
            environment.
          </Typography>
        </TimelineItem>
      </Timeline>
    </div>
  ),
};
