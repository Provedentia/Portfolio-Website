import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Coffee, Rocket, Linkedin } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-float">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hello, I'm <span className="text-gradient">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Full-Stack Developer crafting digital experiences with modern technologies
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-hero-gradient animate-glow">
              <Code className="mr-2" size={20} />
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2" size={20} />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="card-hover bg-card-gradient border-border">
              <CardContent className="p-6 text-center">
                <Code className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">5+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover bg-card-gradient border-border">
              <CardContent className="p-6 text-center">
                <Coffee className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">2+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover bg-card-gradient border-border">
              <CardContent className="p-6 text-center">
                <Rocket className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">10+</h3>
                <p className="text-muted-foreground">Technologies Mastered</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-accent/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Passionate Developer</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm a dedicated full-stack developer with a passion for creating 
                  innovative solutions and beautiful user experiences. With expertise 
                  in modern web technologies, I bring ideas to life through clean, 
                  efficient code.
                </p>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with 
                  the developer community.
                </p>
                
                <Button className="bg-hero-gradient">
                  <ArrowRight className="mr-2" size={18} />
                  Get In Touch
                </Button>
              </div>
              
              <Card className="card-hover bg-card-gradient border-border">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold mb-4">Skills & Technologies</h4>
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm text-muted-foreground">Frontend</span>
                      <p className="text-foreground">React, TypeScript, Tailwind CSS</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Backend</span>
                      <p className="text-foreground">Node.js, Python, PostgreSQL</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Tools</span>
                      <p className="text-foreground">Git, Docker, AWS, Vercel</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;