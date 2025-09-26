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
import { Loader2, Send } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  inquiryType: string;
  message: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "",
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
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        inquiryType: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="glass-card p-8">
      <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
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
            />
          </div>
        </div>
        
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
          <Label htmlFor="inquiry">Inquiry Type</Label>
          <Select 
            value={formData.inquiryType} 
            onValueChange={(value) => handleInputChange("inquiryType", value)}
            disabled={isSubmitting}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select inquiry type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sales">Sales Inquiry</SelectItem>
              <SelectItem value="support">Technical Support</SelectItem>
              <SelectItem value="partnership">Partnership</SelectItem>
              <SelectItem value="billing">Billing Question</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="message">Message *</Label>
          <Textarea 
            id="message" 
            placeholder="Tell us about your business and payment processing needs..."
            className="mt-1 min-h-[120px]"
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
              Sending Message...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;