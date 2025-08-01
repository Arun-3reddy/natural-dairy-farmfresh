import { Card, CardContent } from "@/components/ui/card";
import { User, Code, Coffee, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and efficient code is my priority"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "I enjoy tackling complex challenges and finding innovative solutions"
    },
    {
      icon: Coffee,
      title: "Always Learning",
      description: "Constantly exploring new technologies and best practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <User className="h-6 w-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            </div>
            <p className="text-muted-foreground text-lg">Get to know me better</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">
                Hello! I'm John, a passionate developer.
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                I'm a dedicated full-stack developer with over 3 years of experience in creating 
                digital solutions that make a difference. My journey in technology started during 
                my computer science studies, and I've been fascinated by the endless possibilities 
                of code ever since.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or enjoying a good cup of coffee while reading about the 
                latest trends in web development. I believe in writing clean, efficient code and 
                creating user experiences that truly matter.
              </p>

              <div className="pt-4">
                <h4 className="text-lg font-medium mb-3">What drives me:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Building products that solve real-world problems
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Continuous learning and self-improvement
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Collaborating with talented teams
                  </li>
                </ul>
              </div>
            </div>

            {/* Highlights Cards */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <highlight.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{highlight.title}</h4>
                        <p className="text-muted-foreground text-sm">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;