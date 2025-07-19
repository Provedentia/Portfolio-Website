import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Coffee, Rocket, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-float">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hello, I'm Suhaib Aden
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              I'm a Sophmore studying Computer Science and Math at Northwestern University. I'm interested in AI, Machine Learning, and Software Engineering and am currently looking for a summer 2026 internship.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-hero-gradient animate-glow"
              onClick={() => navigate('/projects')}
            >
              <Code className="mr-2" size={20} />
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href="https://www.linkedin.com/in/suhaibaden/" target="_blank" rel="noopener noreferrer">
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
                <h3 className="text-2xl font-semibold mb-6">Why I'm a Software Engineer</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                I’ve been drawn to technology since I was a kid, competing in AMC math competitions and Science Olympiad sparked a love for problem-solving that’s stayed with me ever since. 
                I come from a family of Somali refugees and grew up helping run my father’s grocery store, where I saw firsthand how much technology could improve everyday systems. 
                That experience taught me the value of hard work, community, and resourcefulness—principles I now bring to my journey as a software engineer.
                 I’m passionate about building tools that solve real-world problems and create access for people like my own family.
                </p>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  When I'm not coding, you'll find me reading, playing basketball, or working on my speed cubing.  
    
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
                      <p className="text-foreground">Node.js, Express, Python, Django, FastAPI, C++, Java, Spring Boot, PostgreSQL, MongoDB</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Tools</span>
                      <p className="text-foreground">Pandas, NumPy, Scikit-learn, TensorFlow, Git, Docker, AWS, Vercel</p>
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