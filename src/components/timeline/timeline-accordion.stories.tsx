import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  TimelineAccordion,
  TimelineHeader,
  TimelineItem,
  TimelineTrigger,
  TimelineContent,
} from './timeline-accordion';
import { Typography } from '../typography';
import { Badge } from '../badge';

const meta = {
  title: 'Components/Timeline/Accordion',
  component: TimelineAccordion,
} satisfies Meta<typeof TimelineAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="mx-auto max-w-2xl">
      <TimelineHeader>
        <Typography variant="h3">Research Papers Search</Typography>
        <Typography>
          Browse and explore research papers with detailed abstracts
        </Typography>
      </TimelineHeader>

      <TimelineAccordion type="multiple">
        <TimelineItem value="item-1" number="1">
          <TimelineTrigger
            title="Attention Is All You Need"
            subtitle="Vaswani et al. • 2017 • Neural Information Processing Systems"
          />
          <TimelineContent>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Badge color="success">Machine Learning</Badge>
                <Badge variant="default">Transformers</Badge>
                <Badge variant="secondary">NLP</Badge>
              </div>
              <Typography variant="muted">
                The dominant sequence transduction models are based on complex
                recurrent or convolutional neural networks that include an
                encoder and a decoder. The best performing models also connect
                the encoder and decoder through an attention mechanism. We
                propose a new simple network architecture, the Transformer,
                based solely on attention mechanisms, dispensing with recurrence
                and convolutions entirely.
              </Typography>
              <Typography variant="muted">
                <strong>Citation count:</strong> 89,432 •{' '}
                <strong>Published:</strong> December 2017
              </Typography>
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem value="item-2" number="2">
          <TimelineTrigger
            title="BERT: Pre-training of Deep Bidirectional Transformers"
            subtitle="Devlin et al. • 2018 • arXiv preprint"
          />
          <TimelineContent>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Badge color="success">Machine Learning</Badge>
                <Badge variant="default">Language Models</Badge>
                <Badge color="error">Pre-training</Badge>
              </div>
              <Typography variant="muted">
                We introduce a new language representation model called BERT,
                which stands for Bidirectional Encoder Representations from
                Transformers. Unlike recent language representation models, BERT
                is designed to pre-train deep bidirectional representations from
                unlabeled text by jointly conditioning on both left and right
                context.
              </Typography>
              <Typography variant="muted">
                <strong>Citation count:</strong> 67,891 •{' '}
                <strong>Published:</strong> October 2018
              </Typography>
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem value="item-3" number="3">
          <TimelineTrigger
            title="GPT-3: Language Models are Few-Shot Learners"
            subtitle="Brown et al. • 2020 • Neural Information Processing Systems"
          />
          <TimelineContent>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Badge color="success">Machine Learning</Badge>
                <Badge color="error">Large Models</Badge>
                <Badge variant="default">Few-shot Learning</Badge>
              </div>
              <Typography variant="muted">
                Recent work has demonstrated substantial gains on many NLP tasks
                and benchmarks by pre-training on a large corpus of text
                followed by fine-tuning on a specific task. While typically
                task-agnostic in architecture, this method still requires
                task-specific fine-tuning datasets of thousands or tens of
                thousands of examples.
              </Typography>
              <Typography variant="muted">
                <strong>Citation count:</strong> 34,567 •{' '}
                <strong>Published:</strong> May 2020
              </Typography>
            </div>
          </TimelineContent>
        </TimelineItem>
      </TimelineAccordion>
    </div>
  ),
};

export const SimpleTimeline: Story = {
  render: () => (
    <div className="mx-auto max-w-lg">
      <TimelineAccordion type="multiple">
        <TimelineItem value="step-1" number="1">
          <TimelineTrigger
            title="Project Setup"
            subtitle="Initialize the project structure"
          />
          <TimelineContent>
            <Typography variant="muted">
              Set up the basic project structure with necessary dependencies and
              configuration files.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem value="step-2" number="2">
          <TimelineTrigger
            title="Component Development"
            subtitle="Build the core components"
          />
          <TimelineContent>
            <Typography variant="muted">
              Develop the main components with proper TypeScript types and
              accessibility features.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem value="step-3" number="3">
          <TimelineTrigger
            title="Testing & Documentation"
            subtitle="Ensure quality and usability"
          />
          <TimelineContent>
            <Typography variant="muted">
              Write comprehensive tests and documentation to ensure the
              components work as expected.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </TimelineAccordion>
    </div>
  ),
};

export const WithoutNumbers: Story = {
  render: () => (
    <div className="mx-auto max-w-lg">
      <TimelineAccordion type="multiple">
        <TimelineItem value="task-1" className="border-l-blue-500">
          <TimelineTrigger
            title="Design Phase"
            subtitle="Create wireframes and mockups"
          />
          <TimelineContent>
            <div className="space-y-2">
              <Badge variant="default">Design</Badge>
              <Typography variant="muted">
                Work with the design team to create comprehensive wireframes and
                visual mockups for the new feature.
              </Typography>
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem value="task-2" className="border-l-green-500">
          <TimelineTrigger
            title="Development"
            subtitle="Implement the designed features"
          />
          <TimelineContent>
            <div className="space-y-2">
              <Badge variant="success">Development</Badge>
              <Typography variant="muted">
                Implement the features according to the specifications and
                design guidelines.
              </Typography>
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem value="task-3" className="border-l-yellow-500">
          <TimelineTrigger
            title="Review & Deploy"
            subtitle="Quality assurance and deployment"
          />
          <TimelineContent>
            <div className="space-y-2">
              <Badge variant="outline">Review</Badge>
              <Typography variant="muted">
                Conduct thorough testing and code review before deploying to
                production.
              </Typography>
            </div>
          </TimelineContent>
        </TimelineItem>
      </TimelineAccordion>
    </div>
  ),
};
