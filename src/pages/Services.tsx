import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CreditCard, 
  Smartphone, 
  Globe, 
  Shield, 
  Zap, 
  Users,
  Settings,
  TrendingUp,
  RefreshCw,
  DollarSign,
  AlertTriangle,
  Building2,
  Handshake,
  CheckCircle2,
  ArrowRight,
  Clock,
  BarChart3,
  Lock
} from "lucide-react";

const Services = () => {
  const paymentServices = [
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Card Processing",
      description: "Accept all major credit and debit cards with industry-leading rates",
      features: ["Visa, Mastercard, Amex, Discover", "EMV chip & contactless", "Online & in-person", "Real-time authorization"],
      pricing: "Starting at 2.6% + 10¢"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Digital Wallets", 
      description: "Seamlessly accept popular mobile and digital wallet payments",
      features: ["Apple Pay & Google Pay", "PayPal & Venmo", "Buy now, pay later", "One-click checkout"],
      pricing: "Same rate as cards"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "ACH Processing",
      description: "Direct bank transfers for lower-cost, recurring payments",
      features: ["Same-day ACH", "Recurring billing", "Return management", "Bank verification"],
      pricing: "0.75% + 25¢"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "International Payments",
      description: "Process payments from customers worldwide",
      features: ["150+ currencies", "Local payment methods", "Currency conversion", "Global compliance"],
      pricing: "2.9% + 30¢"
    }
  ];

  const businessSolutions = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "E-commerce Solutions",
      description: "Complete online payment infrastructure for digital businesses",
      features: [
        "Shopping cart integration",
        "Subscription billing", 
        "Invoice processing",
        "Marketplace splits",
        "Multi-currency support",
        "Tax calculation"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Retail Solutions", 
      description: "Point-of-sale and in-person payment solutions",
      features: [
        "Smart terminals",
        "Mobile card readers", 
        "Inventory management",
        "Employee management",
        "Customer loyalty",
        "Analytics dashboard"
      ]
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Enterprise Solutions",
      description: "Custom payment solutions for large-scale operations",
      features: [
        "Dedicated account manager",
        "Custom API integration",
        "Volume discounts",
        "Advanced reporting",
        "White-label options",
        "24/7 priority support"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk & Fraud Management",
      description: "Advanced protection against fraud and chargebacks",
      details: [
        "Real-time fraud scoring",
        "Machine learning detection", 
        "Chargeback prevention",
        "3D Secure authentication",
        "Velocity checking",
        "Blacklist management"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Reporting",
      description: "Comprehensive insights into your payment performance",
      details: [
        "Real-time transaction data",
        "Revenue analytics",
        "Customer insights",
        "Customizable dashboards",
        "API data access",
        "Automated reports"
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Developer Tools",
      description: "Robust APIs and tools for custom integrations",
      details: [
        "RESTful APIs",
        "SDKs for all platforms",
        "Webhook notifications",
        "Test environment",
        "Comprehensive docs",
        "Developer support"
      ]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance when you need it most",
      details: [
        "Live chat support",
        "Phone support",
        "Email assistance", 
        "Technical support",
        "Account management",
        "Emergency hotline"
      ]
    }
  ];

  const industries = [
    "E-commerce & Retail",
    "Healthcare & Medical", 
    "Professional Services",
    "Restaurants & Food",
    "Non-Profit Organizations",
    "Education & Training",
    "Real Estate",
    "Automotive",
    "Travel & Hospitality",
    "Software & SaaS",
    "Manufacturing",
    "Financial Services"
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
                Payment Services
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Complete payment solutions
                <span className="gradient-text block">for every business</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                From startups to enterprises, we provide the tools, technology, and support 
                you need to accept payments, grow revenue, and scale your business.
              </p>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Payment Processing</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Accept payments the way your customers want to pay
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {paymentServices.map((service, index) => (
                <Card key={index} className="glass-card p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 text-primary">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <Badge variant="outline" className="mb-4">{service.pricing}</Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Business Solutions */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Business Solutions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tailored solutions for your specific business needs
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {businessSolutions.map((solution, index) => (
                <Card key={index} className="glass-card p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center text-primary mb-6">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground mb-6">{solution.description}</p>
                  
                  <div className="space-y-3 text-left">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full mt-6 font-semibold">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Additional Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive support services to maximize your success
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {additionalServices.map((service, index) => (
                <Card key={index} className="glass-card p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 text-primary">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Specialized solutions for businesses across all industries
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {industries.map((industry, index) => (
                <Card key={index} className="glass-card p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-sm font-medium text-foreground">{industry}</div>
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
                Join thousands of businesses already processing payments with Flexi Pay Network. 
                Get set up in minutes and start accepting payments today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-4 h-14 font-semibold">
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-14 font-semibold border-2 border-white text-white hover:bg-white hover:text-primary">
                  Request Demo
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

export default Services;