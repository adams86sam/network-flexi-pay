import { Card } from "@/components/ui/card";
import { 
  CreditCard, 
  Users, 
  Settings, 
  Shield, 
  Zap, 
  TrendingUp,
  RefreshCw,
  DollarSign,
  AlertTriangle 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Full White Label Solution",
      description: "Complete payment processing infrastructure under your brand with customizable interfaces, branded documentation, and dedicated support teams"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-Channel Distribution",
      description: "Reach customers through online, in-store, mobile, and recurring payment channels with unified reporting and management"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Streamlined Onboarding",
      description: "Automated merchant setup process with digital document collection, instant risk assessment, and same-day activation for qualified businesses"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Security & Compliance",
      description: "PCI DSS Level 1 compliance, end-to-end encryption, tokenization, and real-time fraud monitoring to protect every transaction"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Portfolio Management Suite",
      description: "Comprehensive analytics, performance tracking, revenue optimization tools, and customizable dashboards for data-driven decisions"
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Intelligent Chargeback Management", 
      description: "Automated dispute handling, representment services, alert systems, and proactive prevention to minimize losses"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Integrated Gateway & Terminals",
      description: "Seamless payment processing with our proprietary gateway, certified hardware, and extensive third-party integrations"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Omnichannel Processing",
      description: "Accept all major cards, ACH, digital wallets, and alternative payment methods with competitive rates and instant settlements"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "AI-Powered Fraud Prevention",
      description: "Machine learning algorithms, velocity checking, geolocation analysis, and behavioral pattern recognition to stop fraud before it happens"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Enterprise-grade payment solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive suite of payment tools, advanced security features, and dedicated support 
            designed to accelerate your business growth and maximize revenue opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass-card p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 text-primary group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;