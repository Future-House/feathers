import { useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  Checkbox,
  Input,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  Label,
} from '@future-house/feathers';
import { View, ViewOff, Email, Search } from '@future-house/feathers/icons';

export default function InputExample() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    website: '',
    bio: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Input Components</CardTitle>
        <CardDescription>
          Testing different input types, states, and interactive examples
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Basic Input Types
            </h3>
            <div className="space-y-3">
              <div>
                <Label htmlFor="name-input">Text Input</Label>
                <Input
                  type="text"
                  id="name-input"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={e =>
                    setFormData(prev => ({ ...prev, name: e.target.value }))
                  }
                />
              </div>
              <div>
                <Label htmlFor="email-input">Email Input</Label>
                <Input
                  type="email"
                  id="email-input"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={e =>
                    setFormData(prev => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>
              <div>
                <label className="text-sm font-medium">Number Input</label>
                <Input
                  type="number"
                  placeholder="Age"
                  min={1}
                  max={120}
                  value={formData.age}
                  onChange={e =>
                    setFormData(prev => ({ ...prev, age: e.target.value }))
                  }
                />
              </div>
              <div>
                <label className="text-sm font-medium">URL Input</label>
                <Input
                  type="url"
                  placeholder="https://example.com"
                  value={formData.website}
                  onChange={e =>
                    setFormData(prev => ({
                      ...prev,
                      website: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Enhanced Input Examples
            </h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium">Search with Icon</label>
                <div className="relative">
                  <Search className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Email with Icon</label>
                <div className="relative">
                  <Email className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">
                  Password with Toggle
                </label>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter password"
                    className="pr-10"
                    value={formData.password}
                    onChange={e =>
                      setFormData(prev => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-muted-foreground hover:text-foreground absolute top-3 right-3 h-4 w-4"
                  >
                    {showPassword ? (
                      <ViewOff className="h-4 w-4" />
                    ) : (
                      <View className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Required Field</label>
                <Input
                  type="text"
                  placeholder="This field is required"
                  required
                  aria-required="true"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">Input States</h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium">Default State</label>
                <Input placeholder="Normal input" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-400">
                  Disabled
                </label>
                <Input placeholder="Disabled input" disabled />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-400">
                  Read Only
                </label>
                <Input value="Read-only value" readOnly />
              </div>
              <div>
                <label className="text-sm font-medium">Error State</label>
                <Input
                  placeholder="Invalid input"
                  aria-invalid="true"
                  className="border-red-500 focus-visible:border-red-600 focus-visible:ring-red-500/20"
                />
                <p className="mt-1 text-xs text-red-600">
                  This field has an error
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              File and Date Inputs
            </h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium">File Upload</label>
                <Input type="file" accept=".jpg,.jpeg,.png,.pdf" />
              </div>
              <div>
                <label className="text-sm font-medium">Date Picker</label>
                <Input type="date" />
              </div>
              <div>
                <label className="text-sm font-medium">Time Picker</label>
                <Input type="time" />
              </div>
              <div>
                <label className="text-sm font-medium">Range Input</label>
                <Input type="range" min="0" max="100" defaultValue="50" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              OTP Input Examples
            </h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium">
                  Basic OTP (6 digits)
                </label>
                <div className="flex justify-center">
                  <InputOTP maxLength={6}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Two-Factor Auth</label>
                <div className="flex justify-center">
                  <InputOTP maxLength={6} pattern="^[0-9]+$">
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">
                  Phone Verification (4 digits)
                </label>
                <div className="flex justify-center">
                  <InputOTP
                    maxLength={4}
                    pattern="^[0-9]+$"
                    inputMode="numeric"
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Label Component Examples
            </h3>
            <div className="space-y-3">
              <div>
                <Label htmlFor="styled-input">Styled Input with Label</Label>
                <Input
                  type="text"
                  id="styled-input"
                  placeholder="This input uses the Label component"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms-checkbox" />
                <Label htmlFor="terms-checkbox">
                  I agree to the terms and conditions
                </Label>
              </div>
              <div>
                <Label htmlFor="required-field">
                  Required Field <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="email"
                  id="required-field"
                  placeholder="This field is required"
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="custom-styled"
                  className="font-semibold text-blue-600"
                >
                  Custom Styled Label
                </Label>
                <Input
                  type="text"
                  id="custom-styled"
                  placeholder="Input with custom label styling"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Complete Form Example
          </h3>
          <form
            onSubmit={e => {
              e.preventDefault();
              console.log('Form submitted:', formData);
              alert('Form submitted! Check console for data.');
            }}
            className="max-w-md space-y-4"
          >
            <div>
              <label htmlFor="form-name" className="text-sm font-medium">
                Full Name *
              </label>
              <Input
                id="form-name"
                name="name"
                type="text"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={e =>
                  setFormData(prev => ({ ...prev, name: e.target.value }))
                }
              />
            </div>
            <div>
              <label htmlFor="form-email" className="text-sm font-medium">
                Email Address *
              </label>
              <Input
                id="form-email"
                name="email"
                type="email"
                placeholder="john@example.com"
                required
                value={formData.email}
                onChange={e =>
                  setFormData(prev => ({ ...prev, email: e.target.value }))
                }
              />
            </div>
            <div>
              <label htmlFor="form-password" className="text-sm font-medium">
                Password *
              </label>
              <Input
                id="form-password"
                name="password"
                type="password"
                placeholder="Enter a secure password"
                required
                minLength={8}
                value={formData.password}
                onChange={e =>
                  setFormData(prev => ({ ...prev, password: e.target.value }))
                }
              />
            </div>
            <div>
              <label htmlFor="form-bio" className="text-sm font-medium">
                Bio (Optional)
              </label>
              <Input
                id="form-bio"
                name="bio"
                type="text"
                placeholder="Tell us about yourself..."
                maxLength={200}
                value={formData.bio}
                onChange={e =>
                  setFormData(prev => ({ ...prev, bio: e.target.value }))
                }
              />
              <p className="text-muted-foreground mt-1 text-xs">
                {formData.bio.length}/200 characters
              </p>
            </div>
            <Button type="submit" className="w-full">
              Submit Form
            </Button>
          </form>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Current Form Data
          </h3>
          <div className="bg-muted rounded border p-4 text-sm">
            <pre className="text-xs whitespace-pre-wrap">
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Input Features Demonstrated
          </h3>
          <div className="bg-muted rounded-md p-4 text-sm">
            <ul className="grid grid-cols-1 gap-1 md:grid-cols-2">
              <li>• All HTML input types supported</li>
              <li>• Icon integration with positioning</li>
              <li>• Password visibility toggle</li>
              <li>• Controlled and uncontrolled modes</li>
              <li>• Form validation and required fields</li>
              <li>• Error and success states</li>
              <li>• Disabled and readonly states</li>
              <li>• File upload capabilities</li>
              <li>• Date and time pickers</li>
              <li>• Range sliders</li>
              <li>• Character counting</li>
              <li>• Responsive and accessible design</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
