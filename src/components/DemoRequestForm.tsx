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
import { Loader2, Calendar } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const demoRequestSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50),
  lastName: z.string().min(1, "Last name is required").max(50),
  email: z.string().email("Invalid email address").max(255),
  company: z.string().max(100),
  phone: z.string().max(20),
  jobTitle: z.string().max(100),
  companySize: z.string(),
  industry: z.string(),
  currentPaymentProvider: z.string().max(100),
  monthlyVolume: z.string(),
  preferredDemoDate: z.string(),
  preferredDemoTime: z.string(),
  message: z.string().max(1000),
});

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  jobTitle: string;
  companySize: string;
  industry: string;
  currentPaymentProvider: string;
  monthlyVolume: string;
  preferredDemoDate: string;
  preferredDemoTime: string;
  message: string;
}

const DemoRequestForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    jobTitle: "",
    companySize: "",
    industry: "",
    currentPaymentProvider: "",
    monthlyVolume: "",
    preferredDemoDate: "",
    preferredDemoTime: "",
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
      demoRequestSchema.parse(formData);
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
        .from('demo_requests')
        .insert({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          company: formData.company || null,
          phone: formData.phone || null,
          job_title: formData.jobTitle || null,
          company_size: formData.companySize || null,
          industry: formData.industry || null,
          current_payment_provider: formData.currentPaymentProvider || null,
          monthly_volume: formData.monthlyVolume || null,
          preferred_demo_date: formData.preferredDemoDate || null,
          preferred_demo_time: formData.preferredDemoTime || null,
          message: formData.message || null,
          status: 'pending'
        });

      if (error) throw error;
      
      toast({
        title: "Demo Request Submitted!",
        description: "Thank you for your interest. We'll contact you within 24 hours to schedule your demo.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        jobTitle: "",
        companySize: "",
        industry: "",
        currentPaymentProvider: "",
        monthlyVolume: "",
        preferredDemoDate: "",
        preferredDemoTime: "",
        message: "",
      });
    } catch (error: any) {
      console.error('Demo request submission error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your demo request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <Card className="glass-card p-8">
      <div className="text-center mb-6">
        <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
        <h3 className="text-2xl font-bold mb-2">Request a Demo</h3>
        <p className="text-muted-foreground">
          See our payment processing platform in action. Get a personalized demo tailored to your business needs.
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

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="companySize">Company Size</Label>
            <Select 
              value={formData.companySize} 
              onValueChange={(value) => handleInputChange("companySize", value)}
              disabled={isSubmitting}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select company size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1-10 employees</SelectItem>
                <SelectItem value="11-50">11-50 employees</SelectItem>
                <SelectItem value="51-200">51-200 employees</SelectItem>
                <SelectItem value="201-1000">201-1000 employees</SelectItem>
                <SelectItem value="1000+">1000+ employees</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="industry">Industry</Label>
            <Select 
              value={formData.industry} 
              onValueChange={(value) => handleInputChange("industry", value)}
              disabled={isSubmitting}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="retail">Retail/E-commerce</SelectItem>
                <SelectItem value="restaurant">Restaurant/Food Service</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="nonprofit">Non-profit</SelectItem>
                <SelectItem value="saas">SaaS/Technology</SelectItem>
                <SelectItem value="finance">Financial Services</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="currentPaymentProvider">Current Payment Provider</Label>
            <Input 
              id="currentPaymentProvider" 
              placeholder="Stripe, Square, PayPal, etc." 
              className="mt-1"
              value={formData.currentPaymentProvider}
              onChange={(e) => handleInputChange("currentPaymentProvider", e.target.value)}
              disabled={isSubmitting}
            />
          </div>
          <div>
            <Label htmlFor="monthlyVolume">Monthly Transaction Volume</Label>
            <Select 
              value={formData.monthlyVolume} 
              onValueChange={(value) => handleInputChange("monthlyVolume", value)}
              disabled={isSubmitting}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select volume range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-10k">$0 - $10K</SelectItem>
                <SelectItem value="10k-50k">$10K - $50K</SelectItem>
                <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                <SelectItem value="1m+">$1M+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="preferredDemoDate">Preferred Demo Date</Label>
            <Input 
              id="preferredDemoDate" 
              type="date"
              min={today}
              className="mt-1"
              value={formData.preferredDemoDate}
              onChange={(e) => handleInputChange("preferredDemoDate", e.target.value)}
              disabled={isSubmitting}
            />
          </div>
          <div>
            <Label htmlFor="preferredDemoTime">Preferred Time</Label>
            <Select 
              value={formData.preferredDemoTime} 
              onValueChange={(value) => handleInputChange("preferredDemoTime", value)}
              disabled={isSubmitting}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select preferred time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="9am-11am">9:00 AM - 11:00 AM</SelectItem>
                <SelectItem value="11am-1pm">11:00 AM - 1:00 PM</SelectItem>
                <SelectItem value="1pm-3pm">1:00 PM - 3:00 PM</SelectItem>
                <SelectItem value="3pm-5pm">3:00 PM - 5:00 PM</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div>
          <Label htmlFor="message">Additional Information</Label>
          <Textarea 
            id="message" 
            placeholder="Tell us about your specific needs, integration requirements, or any questions you have..."
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
              <Calendar className="w-4 h-4 mr-2" />
              Request Demo
            </>
          )}
        </Button>
      </form>
    </Card>
  );
};

export default DemoRequestForm;