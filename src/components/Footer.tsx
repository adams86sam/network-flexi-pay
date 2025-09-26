import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Github,
  ArrowRight,
  Shield,
  Zap,
  Users,
  Globe
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" }
  ];

  const services = [
    { name: "Payment Processing", href: "/services" },
    { name: "Merchant Services", href: "/services" },
    { name: "Point of Sale", href: "/services" },
    { name: "E-commerce Solutions", href: "/services" },
    { name: "Mobile Payments", href: "/services" },
    { name: "International Payments", href: "/services" }
  ];

  const resources = [
    { name: "Developer Tools", href: "#" },
    { name: "Integration Guide", href: "#" },
    { name: "Security Center", href: "#" },
    { name: "Compliance", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "System Status", href: "#" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "GDPR Compliance", href: "#" }
  ];

  const socialLinks = [
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "#" },
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "#" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "#" },
    { name: "GitHub", icon: <Github className="w-5 h-5" />, href: "#" }
  ];

  const trustBadges = [
    { icon: <Shield className="w-5 h-5" />, text: "PCI DSS Level 1" },
    { icon: <Zap className="w-5 h-5" />, text: "99.9% Uptime" },
    { icon: <Users className="w-5 h-5" />, text: "24/7 Support" },
    { icon: <Globe className="w-5 h-5" />, text: "Global Coverage" }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-border">
      {/* Newsletter Section */}
      <div className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h3>
            <p className="text-xl mb-8 opacity-90">
              Get the latest payment industry insights and product updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20"
              />
              <Button variant="secondary" className="font-semibold">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="text-3xl font-bold gradient-text mb-4">
                Flexi Pay Network
              </div>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                Empowering businesses with flexible, secure, and innovative payment 
                solutions. Join thousands of merchants who trust us with their payment processing.
              </p>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {trustBadges.map((badge, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <div className="p-1 rounded bg-primary/10 text-primary">
                      {badge.icon}
                    </div>
                    <span className="font-medium">{badge.text}</span>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>1-800-FLEXI-PAY (353-9472)</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>support@flexipaynetwork.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>123 Market Street, San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-bold mb-4">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a 
                      href={resource.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Footer */}
      <div className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2024 Flexi Pay Network. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;