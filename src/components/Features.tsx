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
      title: "Full white label",
      description: "Complete payment processing under your brand"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Distribution channels",
      description: "Multiple channels for payment distribution"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Streamlined onboarding",
      description: "Quick and efficient merchant setup process"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Merchants",
      description: "Comprehensive merchant management tools"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Portfolio management",
      description: "Advanced portfolio tracking and analytics"
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Chargeback management",
      description: "Automated chargeback handling and prevention"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Gateway & terminals",
      description: "Integrated payment gateway and terminal solutions"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Card & ACH processing",
      description: "Support for all major card networks and ACH"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Fraud prevention",
      description: "Advanced fraud detection and prevention systems"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technology-driven payment solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive suite of payment tools and services designed to empower your business growth
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