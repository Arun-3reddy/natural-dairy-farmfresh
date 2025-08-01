import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center">
          {/* Logo/Name */}
          <h3 className="text-2xl font-bold mb-4">John Doe</h3>
          
          {/* Tagline */}
          <p className="text-muted-foreground mb-8 max-w-md">
            Building digital experiences that make a difference, one line of code at a time.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* Back to Top Button */}
          <Button 
            variant="outline" 
            size="sm" 
            onClick={scrollToTop}
            className="mb-8 group"
          >
            <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </Button>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} John Doe. Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>and lots of coffee.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;