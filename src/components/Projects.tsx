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
      image: "/project-uploads/Sales Dashboard.png",
      technologies: ["Streamlit", "Plotly", "Pandas", "Python","PowerBi"],
      liveUrl:
        "https://janejeshen-sales-performance-dashboard-streamlit-app-ggstz8.streamlit.app/",
      githubUrl: "https://github.com/janejeshen/Sales-Performance-Dashboard",
      insights: [
        "Seasonal trends - see which months are busy and which are slow to plan promotions and staffing.",
        "Customer groups - understand what different types of customers like so you can offer them the right deals.",
        "Top customers - spot your best buyers so you can give them special care and loyalty rewards.",
        "Profitable products - know which items bring in the most profit and which ones might need a rethink.",
        "Bigger baskets - track average order sizes and encourage people to buy more with bundles or upsells.",
        "Smart discounts - make sure sales promotions don’t cut too deeply into profits.",
        "Future trends - use past patterns to predict what’s coming and prepare ahead.",
      ],
    },
    {
      title: "AgroVision AI",
      description:
        "AgroVision AI helps farmers and communities make better use of their land. It started with a challenge in Côte d’Ivoire, a country known for cocoa, rubber, and oil palm, but it can be used across West Africa for many other crops. Normally, finding out what crops are growing requires long and costly farm visits that can still have mistakes. AgroVision AI makes this easier by using satellite images and smart computer tools to identify crops. This saves time and money, while giving more accurate results to support better planning, higher yields, and sustainable farming.",
      insights: [
        "Helps avoid expensive and error-prone farm visits by using satellite images and smart tools.",
        "Makes it easier to plan land use, predict harvests, and support sustainable farming.",
        "Can be used for many different crops and countries across West Africa.",
      ],
      image: "/project-uploads/Agrovision AI.png",
      technologies: [
        "Python",
        "Jupyter Notebook",
        "NumPy",
        "pandas",
        "scikit-learn",
        "XGBoost",
        "LightGBM",
        "joblib",
        "Streamlit",
        "GeoPandas",
        "Rasterio",
        "Shapely",
        "Matplotlib",
        "Plotly",
        "tqdm",
      ],
      githubUrl: "https://github.com/janejeshen/AgroVision-AI",
    },
    {
      title: "lodgenius – Hotel & Airbnb Recommendation System",
      description:
        "An intelligent recommendation engine that leverages machine learning and data analytics to suggest the best hotels and Airbnbs tailored to user preferences and behavior. Features data preprocessing, model training, and evaluation to improve lodging choices.",
      image: "/project-uploads/LodGenius.png",
      technologies: [
        "Python", "Pandas", "NumPy", "Scikit-learn", "SciPy",
        "NLTK", "spaCy", "Gensim", "Matplotlib", "Seaborn",
        "WordCloud", "langdetect", "IPython/Jupyter"
      ]
,
      githubUrl: "https://github.com/janejeshen/lodgenius-Hotel-Airbnb-Recommendation-System",
      insights: [
        "Delivers personalized lodging suggestions based on price, location, and reviews.",
        "Uncovers travel patterns and predicts user preferences using machine learning.",
      ]
    }
,
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
                {/* Image + persistent bottom toolbar */}
                <div className="relative overflow-hidden">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live site (click image)`}
                    >
                      {ImageEl}
                    </a>
                  ) : (
                    ImageEl
                  )}

                  {/* Persistent action bar (always visible) */}
                  <div className="absolute inset-x-0 bottom-0">
                    <div className="bg-gradient-to-t from-black/85 via-black/50 to-transparent">
                      <div className="flex items-center justify-between px-4 pb-3 pt-4">
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
                                <span className="ml-2">Live</span>
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
                              <span className="ml-2">Live</span>
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
                                <span className="ml-2">GitHub</span>
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
                              <span className="ml-2">GitHub</span>
                            </Button>
                          )}
                        </div>
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

                  {/* Scrollable description + insights */}
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
