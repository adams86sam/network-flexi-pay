import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-white/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            We empower
            <br />
            <span className="gradient-text">payment monetization</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We're a comprehensive payment provider, enabling ISOs, ISVs, and businesses of all sizes to monetize payments under their
            brand with our enterprise-grade platform for fast, secure, and profitable market entry.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2.6%</div>
              <div className="text-sm text-muted-foreground">Starting Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">24hr</div>
              <div className="text-sm text-muted-foreground">Quick Setup</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 h-14 font-semibold"
              onClick={() => window.location.href = '/forms?tab=get-started'}
            >
              Get Started →
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 h-14 font-semibold border-2"
              onClick={() => window.location.href = '/forms?tab=demo'}
            >
              Request a demo
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;