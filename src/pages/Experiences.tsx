import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    duration: "2022 - Present",
    description: "Lead development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented best practices for code quality and performance optimization.",
    skills: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"]
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    location: "New York, NY",
    duration: "2021 - 2022",
    description: "Developed responsive user interfaces and improved user experience across multiple client projects. Collaborated with designers and backend developers to deliver high-quality web applications.",
    skills: ["React", "JavaScript", "CSS", "HTML", "Git"]
  },
  {
    id: 3,
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    location: "Austin, TX",
    duration: "2020 - 2021",
    description: "Built and maintained company websites and web applications. Gained experience in full-stack development while working in an agile development environment.",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
  }
];

const Experiences = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Experience</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A journey through my professional career, highlighting key roles and achievements
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <Card 
                  key={experience.id} 
                  className={`card-hover bg-card-gradient border-border animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl md:text-2xl mb-2">
                          {experience.title}
                        </CardTitle>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Building size={16} />
                            <span>{experience.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-primary">
                        <Calendar size={16} />
                        <span className="font-medium">{experience.duration}</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {experience.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary"
                          className="bg-accent hover:bg-accent-hover transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <Card className="mt-12 card-hover bg-card-gradient border-border border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold mb-4">Want to work together?</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always open to discussing new opportunities and exciting projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:your.email@example.com"
                    className="inline-flex items-center justify-center px-6 py-3 bg-hero-gradient text-primary-foreground rounded-md font-medium transition-all hover:scale-105"
                  >
                    Get In Touch
                  </a>
                  <a 
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-md font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    Download Resume
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experiences;