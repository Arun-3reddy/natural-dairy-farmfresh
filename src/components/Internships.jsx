import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Internships = () => {
  const internships = [
    {
      company: "Tech Innovations Inc.",
      position: "Full Stack Development Intern",
      location: "San Francisco, CA",
      period: "Jun 2023 - Aug 2023",
      type: "Remote",
      description: "Developed and maintained web applications using React.js and Node.js. Collaborated with senior developers to implement new features and optimize existing code.",
      achievements: [
        "Built a customer dashboard that improved user engagement by 25%",
        "Optimized database queries resulting in 40% faster load times",
        "Contributed to open-source projects used by 10,000+ developers"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      certificateUrl: "#"
    },
    {
      company: "Digital Solutions Corp",
      position: "Frontend Developer Intern",
      location: "New York, NY",
      period: "Jan 2023 - May 2023",
      type: "Hybrid",
      description: "Focused on creating responsive user interfaces and improving user experience across multiple web applications. Worked closely with UX designers to implement pixel-perfect designs.",
      achievements: [
        "Redesigned 3 major application components increasing user satisfaction by 30%",
        "Implemented responsive design patterns reducing mobile bounce rate by 20%",
        "Mentored 2 junior interns in modern frontend development practices"
      ],
      technologies: ["Vue.js", "JavaScript", "SASS", "Figma", "Git"],
      certificateUrl: "#"
    },
    {
      company: "StartupHub",
      position: "Software Development Intern",
      location: "Austin, TX",
      period: "Jun 2022 - Aug 2022",
      type: "On-site",
      description: "Worked in an agile environment developing features for a fintech startup. Gained experience in full-stack development and learned about scalable architecture patterns.",
      achievements: [
        "Developed payment integration features handling $100K+ transactions",
        "Reduced code complexity by 35% through refactoring and best practices",
        "Participated in code reviews and contributed to team knowledge sharing"
      ],
      technologies: ["Python", "Django", "PostgreSQL", "Docker", "AWS"],
      certificateUrl: "#"
    }
  ];

  return (
    <section id="internships" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Building className="h-6 w-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Internships</h2>
            </div>
            <p className="text-muted-foreground text-lg">Professional experience and growth</p>
          </div>

          {/* Internships Timeline */}
          <div className="space-y-8">
            {internships.map((internship, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{internship.position}</h3>
                      <h4 className="text-lg text-primary font-medium mb-2">
                        {internship.company}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{internship.type}</Badge>
                      <Button variant="ghost" size="sm" className="p-2">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {internship.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {internship.location}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {internship.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h5 className="font-medium mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {internship.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="font-medium mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {internship.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;