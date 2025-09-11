import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with React, Node.js, and Stripe integration. Features include real-time inventory, user authentication, and responsive design.",
      image: "/lovable-uploads/896b37b0-fdaf-4769-b6bf-1b49da9eb498.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/lovable-uploads/896b37b0-fdaf-4769-b6bf-1b49da9eb498.png",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for data analysis with beautiful charts, real-time updates, and export functionality for business intelligence.",
      image: "/lovable-uploads/896b37b0-fdaf-4769-b6bf-1b49da9eb498.png",
      technologies: ["D3.js", "Python", "FastAPI", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Mobile Weather App",
      description: "A cross-platform weather application with location-based forecasts, weather alerts, and beautiful animated UI components.",
      image: "/lovable-uploads/896b37b0-fdaf-4769-b6bf-1b49da9eb498.png",
      technologies: ["React Native", "OpenWeather API", "Redux", "Expo"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work showcasing different technologies and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-elegant transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-deep-black">
                        <ExternalLink size={16} />
                      </Button>
                      <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-deep-black">
                        <Github size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;