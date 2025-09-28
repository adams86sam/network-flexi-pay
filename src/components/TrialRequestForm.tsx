import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import { Loader2, Zap } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const trialRequestSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50),
  lastName: z.string().min(1, "Last name is required").max(50),
  email: z.string().email("Invalid email address").max(255),
  company: z.string().min(1, "Company name is required").max(100),
  phone: z.string().max(20),
  jobTitle: z.string().max(100),
  businessType: z.string(),
  expectedMonthlyVolume: z.string(),
  integrationTimeline: z.string(),
  message: z.string().max(1000),
});

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  jobTitle: string;
  businessType: string;
  expectedMonthlyVolume: string;
  integrationTimeline: string;
  message: string;
}

const TrialRequestForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    jobTitle: "",
    businessType: "",
    expectedMonthlyVolume: "",
    integrationTimeline: "",
    message: "",
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
      trialRequestSchema.parse(formData);
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
      const { error } = await supabase
        .from('trial_requests')
        .insert({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          company: formData.company,
          phone: formData.phone || null,
          job_title: formData.jobTitle || null,
          business_type: formData.businessType || null,
          expected_monthly_volume: formData.expectedMonthlyVolume || null,
          integration_timeline: formData.integrationTimeline || null,
          message: formData.message || null,
          status: 'pending'
        });

      if (error) throw error;
      
      toast({
        title: "Free Trial Request Submitted!",
        description: "We'll review your application and get back to you within 24 hours with trial access details.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        jobTitle: "",
        businessType: "",
        expectedMonthlyVolume: "",
        integrationTimeline: "",
        message: "",
      });
    } catch (error: any) {
      console.error('Trial request submission error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your trial request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="glass-card p-8">
      <div className="text-center mb-6">
        <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
        <h3 className="text-2xl font-bold mb-2">Start Free Trial</h3>
        <p className="text-muted-foreground">
          Get 30 days of full access to our payment processing platform. No setup fees, no commitments.
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
            <Label htmlFor="company">Company Name *</Label>
            <Input 
              id="company" 
              placeholder="Your Company" 
              className="mt-1"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              disabled={isSubmitting}
              required
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
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
            <Label htmlFor="jobTitle">Job Title</Label>
            <Input 
              id="jobTitle" 
              placeholder="CEO, CTO, etc." 
              className="mt-1"
              value={formData.jobTitle}
              onChange={(e) => handleInputChange("jobTitle", e.target.value)}
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="businessType">Business Type</Label>
          <Select 
            value={formData.businessType} 
            onValueChange={(value) => handleInputChange("businessType", value)}
            disabled={isSubmitting}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select business type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="e-commerce">E-commerce</SelectItem>
              <SelectItem value="retail">Retail Store</SelectItem>
              <SelectItem value="restaurant">Restaurant/Food Service</SelectItem>
              <SelectItem value="subscription">Subscription Service</SelectItem>
              <SelectItem value="marketplace">Marketplace</SelectItem>
              <SelectItem value="saas">SaaS Platform</SelectItem>
              <SelectItem value="professional-services">Professional Services</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="expectedMonthlyVolume">Expected Monthly Volume</Label>
            <Select 
              value={formData.expectedMonthlyVolume} 
              onValueChange={(value) => handleInputChange("expectedMonthlyVolume", value)}
              disabled={isSubmitting}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select expected volume" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-5k">$0 - $5K</SelectItem>
                <SelectItem value="5k-25k">$5K - $25K</SelectItem>
                <SelectItem value="25k-100k">$25K - $100K</SelectItem>
                <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                <SelectItem value="500k+">$500K+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="integrationTimeline">Integration Timeline</Label>
            <Select 
              value={formData.integrationTimeline} 
              onValueChange={(value) => handleInputChange("integrationTimeline", value)}
              disabled={isSubmitting}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="When do you need to go live?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">ASAP (within 1 week)</SelectItem>
                <SelectItem value="1-month">Within 1 month</SelectItem>
                <SelectItem value="1-3-months">1-3 months</SelectItem>
                <SelectItem value="3-6-months">3-6 months</SelectItem>
                <SelectItem value="6+ months">6+ months</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div>
          <Label htmlFor="message">Tell us about your business</Label>
          <Textarea 
            id="message" 
            placeholder="What type of payments do you process? Any specific requirements or integrations needed?"
            className="mt-1 min-h-[100px]"
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            disabled={isSubmitting}
          />
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
              Submitting Request...
            </>
          ) : (
            <>
              <Zap className="w-4 h-4 mr-2" />
              Start Free Trial
            </>
          )}
        </Button>
      </form>
    </Card>
  );
};

export default TrialRequestForm;