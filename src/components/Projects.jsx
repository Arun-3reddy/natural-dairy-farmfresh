import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Folder } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment integration, admin dashboard, and real-time inventory management.",
      image: "/placeholder.svg",
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      features: [
        "User authentication & authorization",
        "Shopping cart and wishlist",
        "Payment processing with Stripe",
        "Admin dashboard with analytics",
        "Real-time inventory tracking"
      ],
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team workspaces, and advanced project tracking features. Built with modern web technologies.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
      features: [
        "Real-time collaboration",
        "Team workspaces",
        "Drag & drop task boards",
        "Time tracking",
        "Advanced reporting"
      ],
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that provides detailed weather information, forecasts, and interactive maps. Features location-based weather data and historical trends.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Mapbox"],
      features: [
        "Current weather conditions",
        "7-day forecast",
        "Interactive weather maps",
        "Location search",
        "Historical weather data"
      ],
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed"
    },
    {
      title: "AI Chat Application",
      description: "An intelligent chat application powered by AI with natural language processing, conversation memory, and customizable chat personalities.",
      image: "/placeholder.svg",
      technologies: ["React.js", "Python", "OpenAI API", "FastAPI", "WebSocket"],
      features: [
        "AI-powered conversations",
        "Multiple chat personalities",
        "Conversation history",
        "Real-time messaging",
        "Voice message support"
      ],
      githubUrl: "#",
      liveUrl: "#",
      status: "In Progress"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Folder className="h-6 w-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
            </div>
            <p className="text-muted-foreground text-lg">Things I've built</p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-0">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/40 flex items-center justify-center">
                      <Folder className="h-16 w-16 text-primary/40" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="font-medium mb-2 text-sm">Key Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" className="flex-1">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Want to see more of my work?
            </p>
            <Button variant="outline" size="lg">
              <Github className="h-4 w-4 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;