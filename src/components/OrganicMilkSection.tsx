import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Users, Truck, Award } from "lucide-react";

const OrganicMilkSection = () => {
  const videos = [
    {
      id: "1",
      title: "Buffalo Milking Process - Traditional & Natural",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual organic milk production video
      description: "See how we collect fresh milk from our healthy buffaloes using traditional methods"
    },
    {
      id: "2", 
      title: "Farm to Door - Organic Delivery Process",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual delivery process video
      description: "Follow our natural delivery process that maintains milk quality from farm to your doorstep"
    },
    {
      id: "3",
      title: "Customer Testimonials - Pure & Fresh Experience", 
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with customer testimonial video
      description: "Hear what our customers say about our organic milk quality and service"
    }
  ];

  return (
    <section id="organic-milk" className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Award className="h-4 w-4" />
            100% Organic & Pure
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Organic Milk Production
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our authentic organic milk production process - from happy buffaloes 
            to your doorstep, maintaining purity and quality at every step.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold">Happy Buffaloes</h3>
            <p className="text-sm text-muted-foreground">Free-range buffaloes with natural feed</p>
          </div>
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Truck className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold">Direct Delivery</h3>
            <p className="text-sm text-muted-foreground">Farm to door in under 12 hours</p>
          </div>
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold">Pure Quality</h3>
            <p className="text-sm text-muted-foreground">No chemicals or preservatives</p>
          </div>
        </div>

        {/* Videos Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-muted">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-semibold text-lg leading-tight">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button size="lg" className="group" onClick={() => console.log('Order Organic Milk clicked')}>
            Order Organic Milk Now
            <Play className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OrganicMilkSection;