import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Led development of responsive web applications using React and TypeScript. Mentored junior developers and implemented modern development practices.",
      technologies: ["React", "TypeScript", "Node.js", "AWS"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022", 
      description: "Developed end-to-end web solutions for clients across various industries. Collaborated with design teams to create pixel-perfect implementations.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"]
    },
    {
      title: "Frontend Developer",
      company: "Startup Ventures",
      period: "2019 - 2020",
      description: "Built responsive user interfaces and implemented modern design systems. Optimized application performance and improved user experience.",
      technologies: ["JavaScript", "CSS3", "React", "Redux"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "University of Technology",
      period: "2015 - 2019",
      description: "Graduated with honors. Specialized in software engineering and web development."
    },
    {
      degree: "Full Stack Web Development",
      school: "Coding Bootcamp",
      period: "2018",
      description: "Intensive program covering modern web development technologies and best practices."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary">Professional Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <h4 className="text-lg font-bold text-foreground">{exp.title}</h4>
                    <Badge variant="outline" className="self-start sm:self-auto mt-1 sm:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-primary font-medium mb-3">{exp.company}</p>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <h4 className="text-lg font-bold text-foreground">{edu.degree}</h4>
                    <Badge variant="outline" className="self-start sm:self-auto mt-1 sm:mt-0">
                      {edu.period}
                    </Badge>
                  </div>
                  <p className="text-primary font-medium mb-3">{edu.school}</p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;