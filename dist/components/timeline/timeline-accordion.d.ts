import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
declare const TimelineAccordion: React.ForwardRefExoticComponent<AccordionPrimitive.AccordionMultipleProps & React.RefAttributes<HTMLDivElement>>;
interface TimelineItemProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {
    number?: string | number;
}
declare const TimelineItem: React.ForwardRefExoticComponent<TimelineItemProps & React.RefAttributes<HTMLDivElement>>;
interface TimelineTriggerProps extends Omit<React.ComponentProps<typeof AccordionPrimitive.Trigger>, 'title'> {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
}
declare const TimelineTrigger: React.ForwardRefExoticComponent<Omit<TimelineTriggerProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const TimelineContent: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { TimelineAccordion, TimelineItem, TimelineTrigger, TimelineContent };
//# sourceMappingURL=timeline-accordion.d.ts.map