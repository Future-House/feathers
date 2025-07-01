import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  Label,
  Textarea,
} from '@future-house/feathers';

export default function TextareaExample() {
  const [formData, setFormData] = useState({
    bio: '',
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Textarea Components</CardTitle>
        <CardDescription>
          Multiline text input component with various configurations and states
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Basic Textarea Examples
            </h3>
            <div className="space-y-3">
              <div>
                <Label htmlFor="bio-textarea">Bio</Label>
                <Textarea
                  id="bio-textarea"
                  placeholder="Tell us about yourself..."
                  value={formData.bio}
                  onChange={e =>
                    setFormData(prev => ({ ...prev, bio: e.target.value }))
                  }
                  rows={4}
                />
              </div>
              <div>
                <Label htmlFor="message-textarea">Message</Label>
                <Textarea
                  id="message-textarea"
                  placeholder="Enter your message here..."
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="feedback-textarea">Feedback</Label>
                <Textarea
                  id="feedback-textarea"
                  placeholder="We'd love to hear your feedback..."
                  rows={5}
                  maxLength={500}
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Textarea States
            </h3>
            <div className="space-y-3">
              <div>
                <Label>Default State</Label>
                <Textarea placeholder="Normal textarea" rows={3} />
              </div>
              <div>
                <Label className="text-gray-400">Disabled</Label>
                <Textarea
                  placeholder="This textarea is disabled"
                  disabled
                  rows={3}
                />
              </div>
              <div>
                <Label className="text-gray-400">Read Only</Label>
                <Textarea
                  value="This textarea is read-only and cannot be edited."
                  readOnly
                  rows={3}
                />
              </div>
              <div>
                <Label>Error State</Label>
                <Textarea
                  placeholder="Invalid textarea"
                  aria-invalid="true"
                  rows={3}
                />
                <p className="mt-1 text-xs text-red-600">
                  This field is required.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Textarea Sizes
            </h3>
            <div className="space-y-3">
              <div>
                <Label>Small (2 rows)</Label>
                <Textarea placeholder="Small textarea" rows={2} />
              </div>
              <div>
                <Label>Medium (4 rows)</Label>
                <Textarea placeholder="Medium textarea" rows={4} />
              </div>
              <div>
                <Label>Large (6 rows)</Label>
                <Textarea placeholder="Large textarea" rows={6} />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Advanced Examples
            </h3>
            <div className="space-y-3">
              <div>
                <Label>With Character Limit</Label>
                <Textarea
                  placeholder="Max 100 characters..."
                  maxLength={100}
                  rows={3}
                />
                <p className="mt-1 text-xs text-gray-500">
                  Maximum 100 characters
                </p>
              </div>
              <div>
                <Label>Required Field</Label>
                <Textarea
                  placeholder="This field is required"
                  required
                  aria-required="true"
                  rows={3}
                />
              </div>
              <div>
                <Label>With Custom Styling</Label>
                <Textarea
                  placeholder="Custom styled textarea"
                  className="resize-none"
                  rows={4}
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
