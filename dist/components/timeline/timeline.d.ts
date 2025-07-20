import * as React from 'react';
interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}
declare const Timeline: React.ForwardRefExoticComponent<TimelineProps & React.RefAttributes<HTMLDivElement>>;
interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
    iconElement?: React.ReactNode;
    isCollapsible?: boolean;
    isCollapsed?: boolean;
    onToggle?: () => void;
}
declare const TimelineItem: React.ForwardRefExoticComponent<TimelineItemProps & React.RefAttributes<HTMLDivElement>>;
interface TimelineHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
}
declare const TimelineHeading: React.ForwardRefExoticComponent<TimelineHeadingProps & React.RefAttributes<HTMLHeadingElement>>;
export { Timeline, TimelineItem, TimelineHeading };
//# sourceMappingURL=timeline.d.ts.map