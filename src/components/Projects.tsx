import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  insights?: string[];
};

const isRealLink = (url?: string) => !!url && url !== "#";
const BURNT = "#CC5500"; // burnt orange

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Sales Performance Dashboard (Streamlit)",
      description:
        "An interactive dashboard that helps teams monitor sales health, spot trends early, and turn insights into revenue-growing actions.",
      image: "/lovable-uploads/sales-dashboard.png",
      technologies: ["Streamlit", "Plotly", "Pandas", "Python"],
      liveUrl:
        "https://janejeshen-sales-performance-dashboard-streamlit-app-ggstz8.streamlit.app/",
      githubUrl: "https://github.com/janejeshen/Sales-Performance-Dashboard",
      insights: [
        "Seasonality patterns - identify peak vs. slow months to optimize promos and staffing.",
        "Customer segmentation - map category preferences to run targeted ads and bundles.",
        "High-value customers - rank by sales & profit to focus loyalty, care, and upsells.",
        "Product profitability - spotlight top profit items; review low-margin products.",
        "Basket size optimization - track average order value (AOV) trends and drive growth with bundles/upsells.",
        "Profitability safeguards - combine sales + margin to prevent discount-driven losses.",
        "Trend forecasting - use year over year (YoY) and 3-month moving averages for better planning.",
      ],
    },
    {
      title: "E-Commerce Platform",
      description:
        "A fast storefront that keeps inventory accurate in real time, secures checkout, and adapts beautifully across devices to lift conversion.",
      image: "/lovable-uploads/896b37b0-fdaf-4769-b6bf-1b49da9eb498.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl:
        "https://janejeshen-sales-performance-dashboard-streamlit-app-ggstz8.streamlit.app/",
      githubUrl: "https://github.com/janejeshen/Sales-Performance-Dashboard",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task boards with real-time updates, drag-and-drop, and team spaces for smoother project delivery.",
      image: "/lovable-uploads/896b37b0-fdaf-4769-b6bf-1b49da9eb498.png",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Data Visualization Dashboard",
      description:
        "A crisp analytics hub for exploring data, tracking KPIs, and exporting views for business decisions.",
      image: "/lovable-uploads/896b37b0-fdaf-4769-b6bf-1b49da9eb498.png",
      technologies: ["D3.js", "Python", "FastAPI", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Mobile Weather App",
      description:
        "Location-aware forecasts with alerts and a polished, animated mobile experience.",
      image: "/lovable-uploads/896b37b0-fdaf-4769-b6bf-1b49da9eb498.png",
      technologies: ["React Native", "OpenWeather API", "Redux", "Expo"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work showcasing different technologies and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const hasLive = isRealLink(project.liveUrl);
            const hasGit = isRealLink(project.githubUrl);

            const ImageEl = (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            );

            return (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-elegant transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image + hover buttons */}
                <div className="relative overflow-hidden">
                  {hasLive ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live site`}
                    >
                      {ImageEl}
                    </a>
                  ) : (
                    ImageEl
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="flex space-x-2">
                        {hasLive ? (
                          <Button
                            asChild
                            size="sm"
                            className="bg-black border-black hover:bg-black/90"
                            style={{ color: BURNT }}
                            title="Open live site"
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open ${project.title} live site`}
                            >
                              <ExternalLink size={16} />
                              <span className="sr-only">Live</span>
                            </a>
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            disabled
                            className="bg-black text-white/60 border-black"
                            title="Live link coming soon"
                          >
                            <ExternalLink size={16} />
                          </Button>
                        )}

                        {hasGit ? (
                          <Button
                            asChild
                            size="sm"
                            className="bg-black border-black hover:bg-black/90"
                            style={{ color: BURNT }}
                            title="Open GitHub repo"
                          >
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open ${project.title} GitHub repo`}
                            >
                              <Github size={16} />
                              <span className="sr-only">GitHub</span>
                            </a>
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            disabled
                            className="bg-black text-white/60 border-black"
                            title="GitHub link coming soon"
                          >
                            <Github size={16} />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-3 transition-colors duration-300"
                    style={{ color: BURNT }}
                  >
                    {project.title}
                  </h3>

                  {/* Scrollable description + insights (no bottom buttons) */}
                  <div className="space-y-3 max-h-44 md:max-h-56 overflow-y-auto pr-2">
                    <p className="text-muted-foreground whitespace-pre-line">
                      {project.description}
                    </p>

                    {project.insights && project.insights.length > 0 && (
                      <div>
                        <p className="font-semibold" style={{ color: BURNT }}>
                          Insights
                        </p>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground">
                          {project.insights.map((tip, i) => (
                            <li key={i}>{tip}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Tech badges */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="transition-colors duration-300"
                        style={{
                          backgroundColor: "black",
                          color: BURNT,
                          borderColor: "black",
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
