import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      location: "New York, NY",
      period: "2019 - 2023",
      gpa: "3.8/4.0",
      highlights: [
        "Dean's List - 6 semesters",
        "Computer Science Society President",
        "Hackathon Winner - 2022"
      ],
      courses: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Systems",
        "Web Development",
        "Machine Learning"
      ]
    },
    {
      degree: "High School Diploma",
      institution: "Central High School",
      location: "Boston, MA",
      period: "2015 - 2019",
      gpa: "3.9/4.0",
      highlights: [
        "Valedictorian",
        "National Honor Society",
        "Programming Club Founder"
      ],
      courses: [
        "AP Computer Science",
        "AP Calculus",
        "AP Physics",
        "Advanced Mathematics"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
            </div>
            <p className="text-muted-foreground text-lg">My academic journey</p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Main Info */}
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                      <h4 className="text-lg text-primary font-medium mb-3">
                        {edu.institution}
                      </h4>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {edu.location}
                        </div>
                        <div className="font-medium text-primary">
                          GPA: {edu.gpa}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-4">
                        <h5 className="font-medium mb-2">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {edu.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Relevant Courses */}
                    <div>
                      <h5 className="font-medium mb-3">Relevant Coursework:</h5>
                      <div className="space-y-2">
                        {edu.courses.map((course, idx) => (
                          <Badge key={idx} variant="secondary" className="mr-2 mb-2">
                            {course}
                          </Badge>
                        ))}
                      </div>
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

export default Education;