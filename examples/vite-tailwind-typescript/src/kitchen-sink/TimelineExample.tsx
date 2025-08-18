import {
  Badge,
  Timeline,
  TimelineItem,
  TimelineHeading,
  TimelineAccordion,
  TimelineAccordionItem,
  TimelineTrigger,
  TimelineContent,
  Typography,
} from '@future-house/feathers';
import { CircleCheck, Clock, CircleAlert } from '@future-house/feathers/icons';

export default function TimelineExample() {
  return (
    <div className="space-y-8">
      <div>
        <div className="space-y-6">
          {/* Basic Timeline */}
          <div>
            <h4 className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
              Basic Timeline
            </h4>
            <Timeline>
              <TimelineItem
                iconElement={<CircleCheck className="h-3 w-3 text-green-500" />}
              >
                <TimelineHeading>Project Kickoff</TimelineHeading>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Initial project setup and team onboarding completed
                  successfully.
                </p>
              </TimelineItem>

              <TimelineItem
                iconElement={<Clock className="h-3 w-3 text-blue-500" />}
              >
                <TimelineHeading>Development Phase</TimelineHeading>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Core features are being developed. Expected completion in 2
                  weeks.
                </p>
              </TimelineItem>

              <TimelineItem
                iconElement={
                  <CircleAlert className="h-3 w-3 text-yellow-500" />
                }
              >
                <TimelineHeading>Testing & Review</TimelineHeading>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Comprehensive testing phase with stakeholder reviews.
                </p>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">
          Timeline Accordion Component
        </h3>
        <div className="space-y-6">
          {/* Process Timeline with Accordion */}
          <div>
            <h4 className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
              Project Process Timeline
            </h4>
            <div className="mb-6 space-y-2">
              <Typography variant="h2" className="text-lg font-semibold">
                Software Development Lifecycle
              </Typography>
              <Typography
                variant="p"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                Track progress through each phase of development
              </Typography>
            </div>

            <TimelineAccordion type="multiple">
              <TimelineAccordionItem value="item-1" number="1">
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
                      The dominant sequence transduction models are based on
                      complex recurrent or convolutional neural networks that
                      include an encoder and a decoder. The best performing
                      models also connect the encoder and decoder through an
                      attention mechanism. We propose a new simple network
                      architecture, the Transformer, based solely on attention
                      mechanisms, dispensing with recurrence and convolutions
                      entirely.
                    </Typography>
                    <Typography variant="muted">
                      <strong>Citation count:</strong> 89,432 •{' '}
                      <strong>Published:</strong> December 2017
                    </Typography>
                  </div>
                </TimelineContent>
              </TimelineAccordionItem>

              <TimelineAccordionItem value="item-2" number="2">
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
                      We introduce a new language representation model called
                      BERT, which stands for Bidirectional Encoder
                      Representations from Transformers. Unlike recent language
                      representation models, BERT is designed to pre-train deep
                      bidirectional representations from unlabeled text by
                      jointly conditioning on both left and right context.
                    </Typography>
                    <Typography variant="muted">
                      <strong>Citation count:</strong> 67,891 •{' '}
                      <strong>Published:</strong> October 2018
                    </Typography>
                  </div>
                </TimelineContent>
              </TimelineAccordionItem>

              <TimelineAccordionItem value="item-3" number="3">
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
                      Recent work has demonstrated substantial gains on many NLP
                      tasks and benchmarks by pre-training on a large corpus of
                      text followed by fine-tuning on a specific task. While
                      typically task-agnostic in architecture, this method still
                      requires task-specific fine-tuning datasets of thousands
                      or tens of thousands of examples.
                    </Typography>
                    <Typography variant="muted">
                      <strong>Citation count:</strong> 34,567 •{' '}
                      <strong>Published:</strong> May 2020
                    </Typography>
                  </div>
                </TimelineContent>
              </TimelineAccordionItem>
            </TimelineAccordion>
          </div>
        </div>
      </div>
    </div>
  );
}
