import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Briefcase, FolderOpen, Github, Linkedin } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-xl font-bold text-gradient">
            Portfolio
          </NavLink>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `flex items-center space-x-2 transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              <Home size={18} />
              <span>Home</span>
            </NavLink>
            
            <NavLink 
              to="/experiences" 
              className={({ isActive }) => 
                `flex items-center space-x-2 transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              <Briefcase size={18} />
              <span>Experiences</span>
            </NavLink>
            
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `flex items-center space-x-2 transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              <FolderOpen size={18} />
              <span>Projects</span>
            </NavLink>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github size={18} />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;