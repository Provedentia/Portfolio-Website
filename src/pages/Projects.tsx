import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

interface ProjectMedia {
  type: "image" | "video";
  url: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  media: ProjectMedia;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

const ProjectMedia: React.FC<{ media: ProjectMedia; title: string; className?: string }> = ({ media, title, className }) => {
  if (media.type === "video") {
    return (
      <iframe
        src={media.url}
        title={title}
        className={className}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }
  
  return (
    <img 
      src={media.url} 
      alt={title}
      className={className}
    />
  );
};

const projects: Project[] = [
  {
    id: 1,
    title: "Thrivable AI, First Place Winner at KatyHacks 2025",
    description: "Thrivable implements a React.js frontend with Vite bundling and Tailwind CSS, backed by a Node.js/Express server that orchestrates multiple AI services including Groq API for LLaMA 3 inference and Tavily API for dynamic web scraping and data extraction. The platform integrates Google Cloud Vision's Product Search API with a custom OCR fallback system, feeding into a multi-stage data pipeline that processes raw image inputs through computer vision, web crawling, and natural language processing to generate quantified environmental impact scores. The architecture features modular backend design with separated concerns, JWT-based authentication through Supabase, and a sophisticated data normalization system that handles inconsistent environmental data formats from diverse sources across the web.",
    media: {
      type: "video",
      url: "https://www.youtube.com/embed/TwgGIPdzIkY?start"
    },
    technologies: ["Google Vision API", "Tavily API", "Groq", "React", "Node.js", "PostgreSQL"],
    liveUrl: "https://devpost.com/software/thrivable#updates",
    githubUrl: "https://www.youtube.com/watch?v=TwgGIPdzIkY&t",
    featured: true
  },
  {
    id: 2,
    title: "Nimbus, an AI-Powered Personal Finance App",
    description: "Nimbus leverages a full-stack architecture with React frontend and Node.js/Express backend, integrated with PostgreSQL for optimized multi-account financial data schemas and complex transaction queries. The platform implements real-time data synchronization through Teller API integration and WebSockets for live transaction updates, while utilizing GROQ for AI-powered financial insights and personalized budgeting recommendations. Security is handled through RESTful API design with secure authentication flows, enabling seamless account aggregation and real-time dashboard updates across multiple financial institutions.",
    media: {
      type: "video",
      url: "https://www.youtube.com/embed/FspQ-tqK6ok"
    },
    technologies: ["JavaScript", "TypeScript", "PostgreSQL", "GROQ", "Node.js", "React", "Teller"],
    liveUrl: "https://example-finance.com",
    githubUrl: "https://github.com/Provedentia/Nimbus",
    featured: true
  },
  {
    id: 3,
    title: "Stock Trading Bot, 3rd Place at the 2024 Quantitative Trading Competition",
    description: "Created a quantitative trading algorithm to buy and sell commodities against other trading algorithms. Achieved 3rd place out of 50 teams, earning over 10 million dollars in estimated PnL.",
    media: {
      type: "image",
      url: "https://cdn.corporatefinanceinstitute.com/assets/stock-charts.png"
    },
    technologies: ["Python"],
    liveUrl: "https://example-trading.com",
    githubUrl: "https://github.com/Provedentia/Electronic-Trading-Bot",
    featured: true
  },
  {
    id: 4,
    title: "AI GitHub PR Reviewer",
    description: "Built a GPT-4 code review bot that posts inline comments on GitHub pull requests using webhooks. Used FastAPI, httpx, and Docker to handle GitHub events and query OpenAI with structured prompts.",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop&auto=format"
    },
    technologies: ["FastAPI", "Python", "OpenAI API", "GitHub Webhooks", "httpx", "Docker"],
    liveUrl: "https://example-pr-reviewer.com",
    githubUrl: "https://github.com/Provedentia/AI-Pull-Request-Reviewer",
    featured: false
  },
  {
    id: 5,
    title: "DevLog Radar",
    description: "Built an AI tool that compiles GitHub and LeetCode activity into intelligent daily developer logs. Used FastAPI and cron jobs to fetch commits and submissions, then tag and group them by category.",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format"
    },
    technologies: ["FastAPI", "PostgreSQL", "GitHub API", "LeetCode API", "OpenAI", "Docker"],
    liveUrl: "https://example-devlog.com",
    githubUrl: "https://github.com/Provedentia/DevLog-Radar",
    featured: false
  },
  {
    id: 6,
    title: "Wordle, Wordle Ladder Game, and Solver",
    description: "Built an interactive word puzzle game combining Wordle mechanics with ladder-style progression. Features multi-level challenges and a hint system.",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop&auto=format"
    },
    technologies: ["Python"],
    liveUrl: "https://example-wordle-ladder.com",
    githubUrl: "https://github.com/Provedentia/Wordle-Ladder",
    featured: false
  },
  {
    id: 7,
    title: "CTA Bus Tracker",
    description: "Real-time Chicago Transit Authority bus tracking application using the CTA API. Features live bus predictions, route maps, and nearby stop finder with geolocation integration.",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop&auto=format"
    },
    technologies: ["C++"],
    liveUrl: "https://example-cta-tracker.com",
    githubUrl: "https://github.com/Provedentia/Bus-Trackerr",
    featured: false
  }
];

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and side projects, demonstrating various technologies and problem-solving approaches
            </p>
          </div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
                Featured Projects
              </h2>
              <div className="space-y-8">
                {featuredProjects.map((featuredProject, index) => (
                  <div key={featuredProject.id} className="w-full max-w-none mx-auto" style={{ width: '75vw' }}>
                    <Card className="card-hover bg-card-gradient border-border overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                      <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 aspect-video lg:aspect-square">
                          <ProjectMedia 
                            media={featuredProject.media}
                            title={featuredProject.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="lg:w-1/2 flex flex-col">
                          <CardHeader>
                            <CardTitle className="text-2xl md:text-3xl">
                              {featuredProject.title}
                            </CardTitle>
                          </CardHeader>
                          
                          <CardContent className="flex-1 flex flex-col justify-between">
                            <div>
                              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                                {featuredProject.description}
                              </p>
                              
                              <div className="flex flex-wrap gap-2 mb-6">
                                {featuredProject.technologies.map((tech) => (
                                  <Badge 
                                    key={tech} 
                                    variant="secondary"
                                    className="bg-accent hover:bg-accent-hover transition-colors"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex gap-4">
                              <Button asChild className="bg-hero-gradient flex-1">
                                <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer">
                                  <Eye className="mr-2" size={16} />
                                  Live Demo
                                </a>
                              </Button>
                              <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                                <a href={featuredProject.githubUrl} target="_blank" rel="noopener noreferrer">
                                  <Github className="mr-2" size={16} />
                                  Code
                                </a>
                              </Button>
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other Projects */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
              Other Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className={`card-hover bg-card-gradient border-border animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="text-xs bg-accent hover:bg-accent-hover transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-accent">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex">
                      <Button size="sm" variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2" size={14} />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="card-hover bg-card-gradient border-border border-primary/20 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Have a project in mind?</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always interested in taking on new challenges and working on exciting projects.
                </p>
                <Button className="bg-hero-gradient" size="lg">
                  <ExternalLink className="mr-2" size={18} />
                  Let's Work Together
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
