import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Award, 
  Globe, 
  TrendingUp, 
  Shield, 
  Clock,
  Target,
  Lightbulb,
  Heart
} from "lucide-react";

const About = () => {
  const stats = [
    { value: "10B+", label: "Transactions Processed", icon: <TrendingUp className="w-6 h-6" /> },
    { value: "50K+", label: "Active Merchants", icon: <Users className="w-6 h-6" /> },
    { value: "99.9%", label: "Uptime Guarantee", icon: <Clock className="w-6 h-6" /> },
    { value: "150+", label: "Countries Supported", icon: <Globe className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Security First",
      description: "We prioritize the highest levels of security and compliance, ensuring every transaction is protected with enterprise-grade encryption and fraud prevention."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-secondary" />,
      title: "Innovation Driven",
      description: "Our cutting-edge technology stack and continuous innovation ensure you always have access to the latest payment solutions and features."
    },
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Customer Centric",
      description: "Every decision we make is centered around delivering exceptional value and service to our merchants, partners, and their customers."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Results Focused",
      description: "We measure our success by your success. Our solutions are designed to drive growth, reduce costs, and maximize revenue opportunities."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      bio: "15+ years in fintech leadership, former VP at major payment processors",
      specialties: ["Strategic Leadership", "Fintech Innovation", "Market Expansion"]
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer", 
      bio: "Former lead architect at top-tier tech companies, expert in scalable payment systems",
      specialties: ["System Architecture", "Security", "API Development"]
    },
    {
      name: "Emma Rodriguez",
      role: "Chief Revenue Officer",
      bio: "20+ years in payment sales and partnerships, built multiple $100M+ revenue streams",
      specialties: ["Partnership Development", "Revenue Growth", "Market Strategy"]
    },
    {
      name: "David Park",
      role: "Chief Risk Officer",
      bio: "Former fraud prevention executive, developed industry-leading risk models",
      specialties: ["Risk Management", "Compliance", "Fraud Prevention"]
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
                About Flexi Pay Network
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Revolutionizing payments through 
                <span className="gradient-text block">innovation & partnership</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Since 2018, we've been empowering businesses of all sizes to accept payments seamlessly, 
                scale efficiently, and grow without limits. Our mission is to make payment processing 
                accessible, secure, and profitable for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <Card key={index} className="glass-card p-6 text-center hover:shadow-2xl transition-all duration-300">
                  <div className="flex justify-center mb-3 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Born from a vision to democratize payment processing and eliminate barriers to financial growth
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">The Challenge We Saw</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In 2018, we witnessed countless businesses struggling with complex, expensive, and inflexible 
                    payment solutions. Small merchants faced rejection from traditional processors, while larger 
                    enterprises paid excessive fees for basic services.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We knew there had to be a better way - one that put merchants first, offered transparent 
                    pricing, and provided enterprise-grade technology to businesses of all sizes.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">The Solution We Built</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Flexi Pay Network was founded on the principle that every business deserves access to 
                    world-class payment processing. We built our platform from the ground up with modern 
                    technology, focusing on security, scalability, and simplicity.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Today, we're proud to serve over 50,000 merchants worldwide, processing billions in 
                    transactions while maintaining the highest standards of service and security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide every decision we make and every solution we build
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="glass-card p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10">
                      {value.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Leadership Team</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experienced leaders dedicated to your success and the future of payments
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="glass-card p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>
                  <div className="space-y-1">
                    {member.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs mr-1 mb-1">
                        {specialty}
                      </Badge>
                    ))}
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to join our journey?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Partner with us and experience the difference that dedicated support, 
                innovative technology, and transparent pricing can make for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-4 h-14 font-semibold">
                  Start Processing Today
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-14 font-semibold border-2 border-white text-white hover:bg-white hover:text-primary">
                  Contact Our Team
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;