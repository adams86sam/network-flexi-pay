import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address").max(255),
  firstName: z.string().max(50),
  lastName: z.string().max(50),
});

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
}

interface NewsletterFormProps {
  compact?: boolean;
  title?: string;
  description?: string;
}

const NewsletterForm = ({ 
  compact = false, 
  title = "Stay Updated",
  description = "Subscribe to our newsletter for the latest updates on payment processing trends, industry insights, and product announcements."
}: NewsletterFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
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
      newsletterSchema.parse(formData);
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
        .from('newsletter_subscriptions')
        .insert({
          email: formData.email,
          first_name: formData.firstName || null,
          last_name: formData.lastName || null,
          subscription_type: 'general',
          status: 'active'
        });

      if (error) {
        // Handle duplicate email error
        if (error.code === '23505') {
          toast({
            title: "Already Subscribed",
            description: "This email is already subscribed to our newsletter.",
            variant: "destructive",
          });
          return;
        }
        throw error;
      }
      
      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing. You'll receive our latest updates and insights.",
      });

      // Reset form
      setFormData({
        email: "",
        firstName: "",
        lastName: "",
      });
    } catch (error: any) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: "Subscription Failed",
        description: "There was an error subscribing to our newsletter. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (compact) {
    return (
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            disabled={isSubmitting}
            required
            className="flex-1"
          />
          <Button 
            type="submit" 
            variant="hero"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Mail className="w-4 h-4" />
            )}
          </Button>
        </form>
      </div>
    );
  }

  return (
    <Card className="glass-card p-8">
      <div className="text-center mb-6">
        <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">
          {description}
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="email">Email Address *</Label>
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
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
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
            <Label htmlFor="lastName">Last Name</Label>
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
        
        <Button 
          type="submit" 
          variant="hero" 
          className="w-full font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Subscribing...
            </>
          ) : (
            <>
              <Mail className="w-4 h-4 mr-2" />
              Subscribe to Newsletter
            </>
          )}
        </Button>
      </form>
    </Card>
  );
};

export default NewsletterForm;