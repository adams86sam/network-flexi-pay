import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, Handshake } from "lucide-react";

const Audience = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose your growth path
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're a merchant looking to optimize payments or a partner ready to scale your business, 
            we have specialized solutions designed for your unique needs and growth objectives
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Merchant Card */}
          <Card className="glass-card p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="text-center space-y-6">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">I am a merchant</h3>
                <p className="text-muted-foreground mb-4">
                  Access powerful payment tools, competitive rates, and dedicated support for your business. 
                  Get started with our comprehensive merchant solutions in under 24 hours.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-6 text-left">
                  <li>• Competitive rates starting at 2.6%</li>
                  <li>• Accept all payment methods</li>
                  <li>• Advanced fraud protection</li>
                  <li>• Real-time reporting & analytics</li>
                  <li>• 24/7 customer support</li>
                </ul>
              </div>
              <Button variant="hero" className="w-full font-semibold">
                Merchant Sign up
              </Button>
            </div>
          </Card>

          {/* Partner Card */}
          <Card className="glass-card p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="text-center space-y-6">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-r from-secondary/10 to-primary/10 flex items-center justify-center group-hover:from-secondary/20 group-hover:to-primary/20 transition-all duration-300">
                <Handshake className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">I am a partner</h3>
                <p className="text-muted-foreground mb-4">
                  Join our partner network and unlock new revenue streams with our white-label platform. 
                  Scale your business with enterprise-grade payment solutions.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-6 text-left">
                  <li>• Revenue sharing opportunities</li>
                  <li>• White-label solutions</li>
                  <li>• Dedicated partner support</li>
                  <li>• Marketing & sales resources</li>
                  <li>• Custom integration options</li>
                </ul>
              </div>
              <Button variant="outline" className="w-full font-semibold border-2">
                Request a demo
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Audience;