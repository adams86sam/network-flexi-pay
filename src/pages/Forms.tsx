import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DemoRequestForm from "@/components/DemoRequestForm";
import TrialRequestForm from "@/components/TrialRequestForm";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import NewsletterForm from "@/components/NewsletterForm";
import GetStartedForm from "@/components/GetStartedForm";
import ContactForm from "@/components/ContactForm";
import { Calendar, Zap, DollarSign, Mail, Rocket, MessageCircle } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const Forms = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("get-started");

  // Handle URL query parameters for tab selection
  useEffect(() => {
    const tabFromUrl = searchParams.get('tab');
    if (tabFromUrl) {
      setActiveTab(tabFromUrl);
    }
  }, [searchParams]);

  const formOptions = [
    {
      id: "get-started",
      title: "Get Started",
      description: "Ready to begin? Tell us about your business needs.",
      icon: Rocket,
      component: GetStartedForm
    },
    {
      id: "demo",
      title: "Request Demo",
      description: "See our platform in action with a personalized demo.",
      icon: Calendar,
      component: DemoRequestForm
    },
    {
      id: "trial",
      title: "Free Trial",
      description: "Try our platform risk-free for 30 days.",
      icon: Zap,
      component: TrialRequestForm
    },
    {
      id: "quote",
      title: "Get Quote",
      description: "Receive a custom pricing proposal for your business.",
      icon: DollarSign,
      component: QuoteRequestForm
    },
    {
      id: "contact",
      title: "Contact Us",
      description: "Have questions? Get in touch with our team.",
      icon: MessageCircle,
      component: ContactForm
    },
    {
      id: "newsletter",
      title: "Newsletter",
      description: "Stay updated with industry insights and product news.",
      icon: Mail,
      component: NewsletterForm
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/30">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Choose Your
            <span className="gradient-text block">Next Step</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Whether you're ready to get started, need more information, or want to see our platform in action, 
            we have the right option for you.
          </p>
        </section>

        {/* Quick Action Cards */}
        <section className="grid md:grid-cols-3 gap-6 mb-12">
          {formOptions.slice(0, 3).map((option) => {
            const IconComponent = option.icon;
            return (
              <Card 
                key={option.id}
                className="glass-card p-6 cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
                onClick={() => setActiveTab(option.id)}
              >
                <div className="text-center">
                  <IconComponent className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{option.description}</p>
                  <Button variant="outline" className="w-full">
                    Choose This Option
                  </Button>
                </div>
              </Card>
            );
          })}
        </section>

        {/* Form Tabs */}
        <section className="max-w-4xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
              {formOptions.map((option) => {
                const IconComponent = option.icon;
                return (
                  <TabsTrigger 
                    key={option.id}
                    value={option.id}
                    className="flex flex-col gap-1 py-3"
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="text-xs hidden sm:inline">{option.title}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {formOptions.map((option) => {
              const FormComponent = option.component;
              return (
                <TabsContent key={option.id} value={option.id} className="mt-0">
                  <FormComponent />
                </TabsContent>
              );
            })}
          </Tabs>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
            <p className="text-muted-foreground mb-6">
              Not sure which option is right for you? Our team is here to help you find the perfect solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => setActiveTab("contact")}
              >
                Talk to Our Team
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setActiveTab("demo")}
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Forms;