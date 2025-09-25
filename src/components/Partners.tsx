const Partners = () => {
  const partners = [
    { name: "Visa", logo: "VISA" },
    { name: "Mastercard", logo: "mastercard" },
    { name: "American Express", logo: "AMEX" },
    { name: "Discover", logo: "DISCOVER" },
    { name: "Nacha", logo: "NACHA" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Trusted by leading payment partners
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-80 transition-opacity duration-300">
          {partners.map((partner) => (
            <div 
              key={partner.name}
              className="flex items-center justify-center h-16 w-32 md:w-40"
            >
              <div className="text-2xl md:text-3xl font-bold text-gray-600 tracking-wider">
                {partner.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;