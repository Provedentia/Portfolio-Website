import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React frontend, Node.js backend, and Stripe integration. Features include user authentication, product management, and order processing.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/username/ecommerce-platform",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features built with React and Socket.io.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&auto=format",
    technologies: ["React", "Socket.io", "Express", "PostgreSQL", "Tailwind"],
    liveUrl: "https://example-tasks.com",
    githubUrl: "https://github.com/username/task-manager",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather application that provides current weather conditions and forecasts using external APIs. Features location-based weather and interactive charts.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&auto=format",
    technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
    liveUrl: "https://example-weather.com",
    githubUrl: "https://github.com/username/weather-dashboard",
    featured: false
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark theme, and optimized performance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    liveUrl: "https://example-portfolio.com",
    githubUrl: "https://github.com/username/portfolio",
    featured: false
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "A content management system for bloggers with markdown support, comment system, and SEO optimization. Built with modern web technologies.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop&auto=format",
    technologies: ["Next.js", "MDX", "Prisma", "NextAuth", "Vercel"],
    liveUrl: "https://example-blog.com",
    githubUrl: "https://github.com/username/blog-platform",
    featured: false
  },
  {
    id: 6,
    title: "Chat Application",
    description: "Real-time chat application with private messaging, group chats, and file sharing capabilities. Features end-to-end encryption and modern UI.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop&auto=format",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "WebRTC"],
    liveUrl: "https://example-chat.com",
    githubUrl: "https://github.com/username/chat-app",
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
              My <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and side projects, demonstrating various technologies and problem-solving approaches
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className={`card-hover bg-card-gradient border-border overflow-hidden animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="bg-accent hover:bg-accent-hover transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <Button asChild className="bg-hero-gradient flex-1">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Eye className="mr-2" size={16} />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2" size={16} />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
              Other Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className={`card-hover bg-card-gradient border-border overflow-hidden animate-fade-in`}
                  style={{ animationDelay: `${(index + featuredProjects.length) * 0.1}s` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  
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
                    
                    <div className="flex gap-2">
                      <Button size="sm" asChild className="bg-hero-gradient flex-1">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1" size={14} />
                          Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={14} />
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
