import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  Typography,
} from '@future-house/feathers';

export default function TypographyExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Typography Component</CardTitle>
        <CardDescription>
          Semantic text styling with various typography variants
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Headings Section */}
        <div className="space-y-4">
          <Typography variant="h3">Headings</Typography>
          <div className="space-y-2">
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="h3">Heading 3</Typography>
            <Typography variant="h4">Heading 4</Typography>
          </div>
        </div>

        {/* Text Variants Section */}
        <div className="space-y-4">
          <Typography variant="h3">Text Variants</Typography>
          <div className="space-y-4">
            <Typography variant="lead">
              This is a lead paragraph that introduces the content and stands
              out from regular text.
            </Typography>
            <Typography variant="p">
              This is a regular paragraph demonstrating normal body text. It has
              proper line height and spacing for optimal readability.
            </Typography>
            <Typography variant="large">Large text for emphasis</Typography>
            <Typography variant="small">Small text for fine print</Typography>
            <Typography variant="muted">
              Muted text for less important information
            </Typography>
          </div>
        </div>

        {/* Special Content Section */}
        <div className="space-y-4">
          <Typography variant="h3">Special Content</Typography>
          <div className="space-y-4">
            <Typography variant="blockquote">
              &ldquo;This is a blockquote that can be used for highlighting
              important quotes or statements.&rdquo;
            </Typography>
            <Typography variant="p">
              You can also use{' '}
              <Typography variant="code" asChild>
                <span>inline code</span>
              </Typography>{' '}
              within your paragraphs for technical content.
            </Typography>
          </div>
        </div>

        {/* Lists Section */}
        <div className="space-y-4">
          <Typography variant="h3">Lists</Typography>
          <Typography variant="p">Here are some example list items:</Typography>
          <Typography variant="list">
            <li>First item with important information</li>
            <li>Second item with additional details</li>
            <li>
              Third item with{' '}
              <Typography variant="code" asChild>
                <span>inline code</span>
              </Typography>{' '}
              example
            </li>
            <li>Fourth item to complete the demonstration</li>
          </Typography>
        </div>

        {/* AsChild Example */}
        <div className="space-y-4">
          <Typography variant="h3">Custom Elements</Typography>
          <Typography variant="p">
            The asChild prop allows you to apply typography styling to custom
            elements:
          </Typography>
          <div className="space-y-2">
            <Typography variant="h4" asChild>
              <span className="text-blue-600">Custom span with h4 styling</span>
            </Typography>
            <Typography variant="lead" asChild>
              <div className="border-l-4 border-blue-500 pl-4">
                Lead text styling on a div with custom border
              </div>
            </Typography>
          </div>
        </div>

        {/* Article Example */}
        <div className="space-y-4">
          <Typography variant="h3">Article Example</Typography>
          <article className="space-y-4">
            <Typography variant="h2">The Future of Typography</Typography>
            <Typography variant="lead">
              Typography plays a crucial role in modern web design, providing
              both aesthetic appeal and functional readability.
            </Typography>
            <Typography variant="p">
              Good typography establishes visual hierarchy, guides the
              reader&apos;s eye through content, and enhances the overall user
              experience. It&apos;s not just about choosing pretty
              fonts—it&apos;s about creating a system that works consistently
              across your entire application.
            </Typography>
            <Typography variant="p">
              With semantic HTML elements and proper styling, typography becomes
              accessible to all users, including those using screen readers and
              other assistive technologies.
            </Typography>
            <Typography variant="blockquote">
              &ldquo;Typography is the art and technique of arranging type to
              make written language legible, readable and appealing when
              displayed.&rdquo;
            </Typography>
            <Typography variant="p">
              The Typography component provides a consistent way to apply these
              principles throughout your application, ensuring both design
              consistency and accessibility compliance.
            </Typography>
          </article>
        </div>
      </CardContent>
    </Card>
  );
}
