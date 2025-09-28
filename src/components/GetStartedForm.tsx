import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Rocket } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const getStartedSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50),
  lastName: z.string().min(1, "Last name is required").max(50),
  email: z.string().email("Invalid email address").max(255),
  company: z.string().max(100),
  phone: z.string().max(20),
  businessType: z.string(),
  monthlyVolume: z.string(),
  primaryGoal: z.string(),
});

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  businessType: string;
  monthlyVolume: string;
  primaryGoal: string;
}

const GetStartedForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    businessType: "",
    monthlyVolume: "",
    primaryGoal: "",
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate form data
      getStartedSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
        return;
      }
    }

    setIsSubmitting(true);

    try {
      // Save as a contact submission with specific inquiry type
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          company: formData.company || null,
          phone: formData.phone || null,
          inquiry_type: 'get_started',
          message: `Business Type: ${formData.businessType}\nMonthly Volume: ${formData.monthlyVolume}\nPrimary Goal: ${formData.primaryGoal}`,
          status: 'unread'
        });

      if (error) throw error;
      
      toast({
        title: "Let's Get Started!",
        description: "Thank you for your interest. Our team will contact you within 24 hours to help you get started.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        businessType: "",
        monthlyVolume: "",
        primaryGoal: "",
      });
    } catch (error: any) {
      console.error('Get started form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your information. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="glass-card p-8">
      <div className="text-center mb-6">
        <Rocket className="w-12 h-12 mx-auto mb-4 text-primary" />
        <h3 className="text-2xl font-bold mb-2">Get Started Today</h3>
        <p className="text-muted-foreground">
          Ready to transform your payment processing? Tell us about your business and we'll help you get started.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name *</Label>
            <Input 
              id="firstName" 
              placeholder="John" 
              className="mt-1"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              disabled={isSubmitting}
              required
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name *</Label>
            <Input 
              id="lastName" 
              placeholder="Doe" 
              className="mt-1"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              disabled={isSubmitting}
              required
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">Business Email *</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="john@company.com" 
              className="mt-1"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              disabled={isSubmitting}
              required
            />
          </div>
          <div>
            <Label htmlFor="company">Company Name</Label>
            <Input 
              id="company" 
              placeholder="Your Company" 
              className="mt-1"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              disabled={isSubmitting}
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input 
            id="phone" 
            type="tel" 
            placeholder="+1 (555) 123-4567" 
            className="mt-1"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            disabled={isSubmitting}
          />
        </div>

        <div>
          <Label htmlFor="businessType">What type of business do you have?</Label>
          <Select 
            value={formData.businessType} 
            onValueChange={(value) => handleInputChange("businessType", value)}
            disabled={isSubmitting}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select your business type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="e-commerce">E-commerce Store</SelectItem>
              <SelectItem value="retail">Physical Retail Store</SelectItem>
              <SelectItem value="restaurant">Restaurant/Food Service</SelectItem>
              <SelectItem value="service-business">Service Business</SelectItem>
              <SelectItem value="subscription">Subscription Service</SelectItem>
              <SelectItem value="marketplace">Marketplace</SelectItem>
              <SelectItem value="saas">SaaS/Software</SelectItem>
              <SelectItem value="nonprofit">Non-profit</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="monthlyVolume">Expected Monthly Payment Volume</Label>
          <Select 
            value={formData.monthlyVolume} 
            onValueChange={(value) => handleInputChange("monthlyVolume", value)}
            disabled={isSubmitting}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select expected volume" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="just-starting">Just starting out</SelectItem>
              <SelectItem value="0-5k">$0 - $5K</SelectItem>
              <SelectItem value="5k-25k">$5K - $25K</SelectItem>
              <SelectItem value="25k-100k">$25K - $100K</SelectItem>
              <SelectItem value="100k-500k">$100K - $500K</SelectItem>
              <SelectItem value="500k+">$500K+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="primaryGoal">What's your primary goal?</Label>
          <Select 
            value={formData.primaryGoal} 
            onValueChange={(value) => handleInputChange("primaryGoal", value)}
            disabled={isSubmitting}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select your main goal" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="start-accepting-payments">Start accepting payments</SelectItem>
              <SelectItem value="lower-costs">Lower payment processing costs</SelectItem>
              <SelectItem value="better-features">Get better features and tools</SelectItem>
              <SelectItem value="improve-checkout">Improve checkout experience</SelectItem>
              <SelectItem value="integrate-systems">Integrate with existing systems</SelectItem>
              <SelectItem value="scale-business">Scale my business</SelectItem>
              <SelectItem value="better-support">Get better customer support</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button 
          type="submit" 
          variant="hero" 
          className="w-full font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Getting Started...
            </>
          ) : (
            <>
              <Rocket className="w-4 h-4 mr-2" />
              Get Started Now
            </>
          )}
        </Button>
      </form>
    </Card>
  );
};

export default GetStartedForm;