import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Incoming Platform Engineering Intern",
    company: "CME Group",
    location: "Chicago, IL",
    duration: "Jun 2026",
    description: "Incoming Platform Engineering Intern working on distributed systems and CI/CD infrastructure.",
    skills: ["Distributed Systems", "CI/CD", "Platform Engineering"]
  },
  {
    id: 2,
    title: "Undergraduate Research Assistant - MAGICS Lab",
    company: "Northwestern University",
    location: "Chicago, IL",
    duration: "March 2026 - Present",
    description: "Researching the application of large language models to financial markets by parsing SEC filings and earnings call transcripts to generate trading signals, while building a model distillation pipeline to compress frontier model reasoning into low-latency inference.",
    skills: ["Foundation Models", "Model Distillation", "NLP", "Financial Signal Generation", "Quantitative Research"]
  },
  {
    id: 3,
    title: "Teaching Assistant - Machine Learning",
    company: "Northwestern University",
    location: "Evanston, IL",
    duration: "Sep 2025 - Present",
    description: "TA for CS 349: Machine Learning, supporting 100+ students with lectures, office hours, and coding assignments.",
    skills: ["Machine Learning", "Teaching", "Python"]
  },
  {
    id: 4,
    title: "Machine Learning Intern",
    company: "R&D Venture Studio",
    location: "Remote",
    duration: "Sep 2025 - Dec 2025",
    description: "Built hybrid search system with BM25 and dense retrieval using LangChain and ChromaDB, improving accuracy by 40%. Deployed PyTorch ML pipeline on AWS Lambda processing 100K documents at 200ms p95 latency. Architected async RAG system with Docker, Celery, and PostgreSQL for scalable document processing.",
    skills: ["PyTorch", "LangChain", "ChromaDB", "AWS Lambda", "Docker", "Celery", "PostgreSQL", "RAG"]
  },
  {
    id: 5,
    title: "Software Engineering Intern",
    company: "Wise Home Healthcare",
    location: "Minneapolis, MN",
    duration: "Jun 2025 - Aug 2025",
    description: "Engineered automated ETL pipelines integrating EVV logs with Pavillio APIs, cutting billing delays by over 70%. Architected fault-tolerant SFTP data flows eliminating manual entry and enabling real-time claims across the US. Implemented retry logic and dead-letter queuing with Redis for pipeline resilience, achieving 99.9% uptime.",
    skills: ["Python", "ETL", "SFTP", "Redis", "APIs", "Data Validation"]
  },
  {
    id: 6,
    title: "Founder / CEO",
    company: "EcoEats",
    location: "Evanston, IL",
    duration: "Sep 2024 - May 2025",
    description: "Built logistics app integrating computer vision models for product identification and ML-based inventory prediction. Architected Python inventory system using image recognition and time-series forecasting to automate restocking.",
    skills: ["Computer Vision", "Machine Learning", "Python", "Time-Series Forecasting", "Inventory Systems"]
  },
  {
    id: 7,
    title: "AMP Intern",
    company: "Jane Street",
    location: "New York, NY",
    duration: "Jun 2024 - Aug 2024",
    description: "Learned probabilistic trading and game theory from IMO gold medalists and professional quant traders. Developed pairs trading strategy in Python using statistical arbitrage and mean reversion models.",
    skills: ["Python", "Trading", "Mathematics", "Probability", "Statistics", "Statistical Arbitrage"]
  }
];

const Experiences = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My Experiences
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
                    href="mailto:suhaibaden@u.northwestern.edu"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium transition-all hover:scale-105"
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