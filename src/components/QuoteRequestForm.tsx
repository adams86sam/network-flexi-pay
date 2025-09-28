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
import { Loader2, DollarSign } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const quoteRequestSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50),
  lastName: z.string().min(1, "Last name is required").max(50),
  email: z.string().email("Invalid email address").max(255),
  company: z.string().min(1, "Company name is required").max(100),
  phone: z.string().max(20),
  businessType: z.string(),
  currentProvider: z.string().max(100),
  monthlyTransactionVolume: z.string(),
  averageTransactionAmount: z.string(),
  integrationType: z.string(),
  specificRequirements: z.string().max(1000),
  timeline: z.string(),
});

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  businessType: string;
  currentProvider: string;
  monthlyTransactionVolume: string;
  averageTransactionAmount: string;
  integrationType: string;
  specificRequirements: string;
  timeline: string;
}

const QuoteRequestForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    businessType: "",
    currentProvider: "",
    monthlyTransactionVolume: "",
    averageTransactionAmount: "",
    integrationType: "",
    specificRequirements: "",
    timeline: "",
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
      quoteRequestSchema.parse(formData);
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
        .from('quote_requests')
        .insert({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          company: formData.company,
          phone: formData.phone || null,
          business_type: formData.businessType || null,
          current_provider: formData.currentProvider || null,
          monthly_transaction_volume: formData.monthlyTransactionVolume || null,
          average_transaction_amount: formData.averageTransactionAmount || null,
          integration_type: formData.integrationType || null,
          specific_requirements: formData.specificRequirements || null,
          timeline: formData.timeline || null,
          status: 'pending'
        });

      if (error) throw error;
      
      toast({
        title: "Quote Request Submitted!",
        description: "We'll analyze your requirements and send you a custom quote within 24 hours.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        businessType: "",
        currentProvider: "",
        monthlyTransactionVolume: "",
        averageTransactionAmount: "",
        integrationType: "",
        specificRequirements: "",
        timeline: "",
      });
    } catch (error: any) {
      console.error('Quote request submission error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your quote request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="glass-card p-8">
      <div className="text-center mb-6">
        <DollarSign className="w-12 h-12 mx-auto mb-4 text-primary" />
        <h3 className="text-2xl font-bold mb-2">Get Custom Quote</h3>
        <p className="text-muted-foreground">
          Tell us about your business needs and we'll provide a tailored pricing proposal for your payment processing.
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
              <SelectItem value="high-risk">High-Risk Business</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="currentProvider">Current Payment Provider</Label>
          <Input 
            id="currentProvider" 
            placeholder="Stripe, Square, PayPal, etc. (or None if new business)" 
            className="mt-1"
            value={formData.currentProvider}
            onChange={(e) => handleInputChange("currentProvider", e.target.value)}
            disabled={isSubmitting}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="monthlyTransactionVolume">Monthly Transaction Volume</Label>
            <Select 
              value={formData.monthlyTransactionVolume} 
              onValueChange={(value) => handleInputChange("monthlyTransactionVolume", value)}
              disabled={isSubmitting}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select monthly volume" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-10k">$0 - $10K</SelectItem>
                <SelectItem value="10k-50k">$10K - $50K</SelectItem>
                <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                <SelectItem value="5m+">$5M+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="averageTransactionAmount">Average Transaction Amount</Label>
            <Select 
              value={formData.averageTransactionAmount} 
              onValueChange={(value) => handleInputChange("averageTransactionAmount", value)}
              disabled={isSubmitting}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select average amount" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-25">$0 - $25</SelectItem>
                <SelectItem value="25-100">$25 - $100</SelectItem>
                <SelectItem value="100-500">$100 - $500</SelectItem>
                <SelectItem value="500-1k">$500 - $1,000</SelectItem>
                <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                <SelectItem value="5k+">$5,000+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="integrationType">Integration Type</Label>
          <Select 
            value={formData.integrationType} 
            onValueChange={(value) => handleInputChange("integrationType", value)}
            disabled={isSubmitting}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="How do you plan to integrate?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="api">API Integration</SelectItem>
              <SelectItem value="plugin">Website Plugin</SelectItem>
              <SelectItem value="pos">Point of Sale (POS)</SelectItem>
              <SelectItem value="mobile">Mobile App</SelectItem>
              <SelectItem value="invoice">Invoice/Payment Links</SelectItem>
              <SelectItem value="custom">Custom Solution</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="timeline">Implementation Timeline</Label>
          <Select 
            value={formData.timeline} 
            onValueChange={(value) => handleInputChange("timeline", value)}
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
              <SelectItem value="planning">Just planning ahead</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="specificRequirements">Specific Requirements</Label>
          <Textarea 
            id="specificRequirements" 
            placeholder="Any specific features, compliance requirements, or integration needs? (e.g., recurring billing, multi-currency, specific industry requirements)"
            className="mt-1 min-h-[100px]"
            value={formData.specificRequirements}
            onChange={(e) => handleInputChange("specificRequirements", e.target.value)}
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
              <DollarSign className="w-4 h-4 mr-2" />
              Get Custom Quote
            </>
          )}
        </Button>
      </form>
    </Card>
  );
};

export default QuoteRequestForm;