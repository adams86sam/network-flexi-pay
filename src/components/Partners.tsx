const Partners = () => {
  const partners = [
    { name: "Visa", logo: "VISA", description: "Global card network partner" },
    { name: "Mastercard", logo: "mastercard", description: "Worldwide payment technology" },
    { name: "American Express", logo: "AMEX", description: "Premium card processing" },
    { name: "Discover", logo: "DISCOVER", description: "Digital payment solutions" },
    { name: "Nacha", logo: "NACHA", description: "ACH network authority" },
    { name: "Google Pay", logo: "G PAY", description: "Digital wallet integration" },
    { name: "Apple Pay", logo: "A PAY", description: "Mobile payment platform" },
    { name: "PayPal", logo: "PayPal", description: "Alternative payment method" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted partnerships with industry leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We work with the world's leading payment networks, technology providers, and financial institutions 
            to deliver the most comprehensive and reliable payment solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {partners.slice(0, 8).map((partner) => (
            <div 
              key={partner.name}
              className="glass-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-2xl md:text-2xl font-bold text-gray-600 tracking-wider mb-2 group-hover:text-primary transition-colors">
                {partner.logo}
              </div>
              <div className="text-xs text-muted-foreground">
                {partner.description}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            Plus integrations with 100+ payment processors, banks, and fintech platforms
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;