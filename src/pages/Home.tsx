import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Coffee, Rocket, Linkedin, Mail, Github, Phone, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="pt-4 pb-0 px-6">
        <div className="container mx-auto text-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Suhaib Aden
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              My name is Suhaib and I'm a Sophomore studying Computer Science and Math at Northwestern University. I'm interested in AI, Machine Learning, and Software Engineering and am currently looking for a summer 2026 internship.
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
              <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" size={20} />
                GitHub
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href="https://www.linkedin.com/in/suhaibaden/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2" size={20} />
                LinkedIn
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2" size={20} />
                Resume
              </a>
            </Button>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-5 px-6 bg-accent/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              About Me
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Why I'm a Software Engineer</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                I've been drawn to technology since I was a kid, competing in AMC math competitions and Science Olympiad sparked a love for problem-solving that's stayed with me ever since. 
                I come from a family of Somali refugees and grew up helping run my father's grocery store, where I saw firsthand how much technology could improve everyday systems. 
                That experience taught me the value of hard work, community, and resourcefulness—principles I now bring to my journey as a software engineer.
                 I'm passionate about building tools that solve real-world problems and create access for people like my own family.
                </p>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  When I'm not coding, you'll find me reading, playing basketball, or working on my speed cubing.  
    
                </p>
                
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

      {/* Contact Section */}
      <section className="py-0 px-6">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <Card className="card-hover bg-card-gradient border-border min-h-[200px]">
                <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-4 text-lg">Email</h3>
                  <Button variant="link" asChild className="p-0 h-auto text-muted-foreground hover:text-primary text-sm break-all">
                    <a href="mailto:suhaibaden@u.northwestern.edu">
                      suhaibaden@u.northwestern.edu
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-hover bg-card-gradient border-border min-h-[200px]">
                <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-4 text-lg">Phone</h3>
                  <Button variant="link" asChild className="p-0 h-auto text-muted-foreground hover:text-primary text-sm">
                    <a href="tel:+16128067488">
                      (612) 806-7488
                    </a>
                  </Button>
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