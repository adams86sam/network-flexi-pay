import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Users,
  Building2,
  HeadphonesIcon,
  Globe,
  Calendar,
  CheckCircle2
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      description: "Speak directly with our payment experts",
      details: "1-800-FLEXI-PAY (1-800-353-9472)",
      availability: "24/7 Support Available",
      cta: "Call Now"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat", 
      description: "Get instant help from our support team",
      details: "Available on our website and dashboard",
      availability: "24/7 Live Chat",
      cta: "Start Chat"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "Send us detailed questions or requests",
      details: "support@flexipaynetwork.com",
      availability: "Response within 2 hours",
      cta: "Send Email"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Schedule a Demo",
      description: "Book a personalized product demonstration",
      details: "30-minute consultation available",
      availability: "Flexible scheduling",
      cta: "Book Demo"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      type: "Headquarters",
      address: "123 Market Street, Suite 500",
      details: "San Francisco, CA 94105",
      phone: "+1 (415) 555-0100"
    },
    {
      city: "New York",
      type: "East Coast Office", 
      address: "456 Broadway, Floor 25",
      details: "New York, NY 10013",
      phone: "+1 (212) 555-0200"
    },
    {
      city: "Austin",
      type: "Operations Center",
      address: "789 Congress Ave, Building B",
      details: "Austin, TX 78701",
      phone: "+1 (512) 555-0300"
    },
    {
      city: "London",
      type: "European Office",
      address: "101 King's Cross Road",
      details: "London, UK WC1X 9LP",
      phone: "+44 20 7946 0958"
    }
  ];

  const faqs = [
    {
      question: "How quickly can I start processing payments?",
      answer: "Most merchants can start processing within 24-48 hours after approval. Our streamlined onboarding process includes document verification, risk assessment, and system setup."
    },
    {
      question: "What are your processing fees?",
      answer: "Our rates start at 2.6% + 10¢ per transaction for card payments and 0.75% + 25¢ for ACH. Volume discounts and custom pricing available for larger businesses."
    },
    {
      question: "Do you support international payments?",
      answer: "Yes, we support payments in 150+ currencies and offer local payment methods for global markets. Multi-currency settlement and competitive exchange rates available."
    },
    {
      question: "What security measures do you have in place?",
      answer: "We're PCI DSS Level 1 compliant with end-to-end encryption, tokenization, and advanced fraud detection. Your data and transactions are protected with enterprise-grade security."
    },
    {
      question: "Is there a long-term contract required?",
      answer: "No, we don't require long-term contracts. You can start with our month-to-month service and upgrade to annual plans for additional savings and benefits."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-semibold">
                Get In Touch
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Let's start the
                <span className="gradient-text block">conversation</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your payment processing? Our experts are here to help you 
                find the perfect solution for your business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose How to Connect</h2>
              <p className="text-lg text-muted-foreground">
                Multiple ways to get the support and information you need
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {contactMethods.map((method, index) => (
                <Card key={index} className="glass-card p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="mx-auto w-12 h-12 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center text-primary mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  <p className="text-sm font-medium mb-2">{method.details}</p>
                  <Badge variant="outline" className="text-xs mb-4">{method.availability}</Badge>
                  <Button variant="outline" size="sm" className="w-full font-medium">
                    {method.cta}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <ContactForm />

                {/* Office Locations */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Our Global Offices</h3>
                    <div className="space-y-6">
                      {offices.map((office, index) => (
                        <Card key={index} className="glass-card p-6">
                          <div className="flex items-start space-x-4">
                            <div className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10">
                              <MapPin className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <h4 className="text-lg font-bold">{office.city}</h4>
                                <Badge variant="secondary" className="text-xs">{office.type}</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mb-1">{office.address}</p>
                              <p className="text-sm text-muted-foreground mb-2">{office.details}</p>
                              <p className="text-sm font-medium">{office.phone}</p>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Business Hours */}
                  <Card className="glass-card p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Clock className="w-5 h-5 text-primary" />
                      <h4 className="text-lg font-bold">Business Hours</h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Sales & Support</span>
                        <span>24/7 Available</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Account Management</span>
                        <span>Mon-Fri 8AM-8PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Technical Support</span>
                        <span>24/7 Available</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Emergency Line</span>
                        <span>24/7 Available</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Quick answers to common questions about our services
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="glass-card p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to get started?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Don't wait - join thousands of businesses already growing with Flexi Pay Network. 
                Get started today and see the difference our platform can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-4 h-14 font-semibold">
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-14 font-semibold border-2 border-white text-white hover:bg-white hover:text-primary">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;