import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">N</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Natural Dairy</h3>
                <p className="text-xs text-background/70">Naturally Pure, Wholesomely Yours</p>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Fresh dairy products delivered straight from our farm to your table. 
              Experience the pure taste of nature with every sip and bite.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="space-y-2">
              <Button variant="ghost" className="justify-start p-0 h-auto text-background/80 hover:text-background">
                About Us
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-background/80 hover:text-background">
                All Products
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-background/80 hover:text-background">
                Order Tracking
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-background/80 hover:text-background">
                Customer Reviews
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-background/80 hover:text-background">
                Nutrition Guide
              </Button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-glow mt-0.5" />
                <div className="text-sm text-background/80">
                  <p>Natural Dairy Farm</p>
                  <p>Village Road, Rural District</p>
                  <p>State, India - 123456</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-glow" />
                <span className="text-sm text-background/80">+91-90000-12345</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-glow" />
                <span className="text-sm text-background/80">support@naturaldairy.in</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Stay Updated</h4>
            <p className="text-sm text-background/80">
              Subscribe to get updates on new products and special offers.
            </p>
            <div className="space-y-3">
              <Input 
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button variant="secondary" className="w-full bg-primary hover:bg-primary-glow">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-background/20 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-background/70">
            © 2024 Natural Dairy. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-background/70">
            <Button variant="ghost" className="p-0 h-auto text-background/70 hover:text-background">
              Privacy Policy
            </Button>
            <Button variant="ghost" className="p-0 h-auto text-background/70 hover:text-background">
              Terms of Service
            </Button>
            <Button variant="ghost" className="p-0 h-auto text-background/70 hover:text-background">
              Shipping Policy
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;