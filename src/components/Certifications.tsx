import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-CSA-2023-001",
      description: "Validates expertise in designing distributed systems on AWS platform with security and scalability best practices.",
      verifyUrl: "#"
    },
    {
      title: "Google Cloud Professional Developer", 
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-PD-2023-002",
      description: "Demonstrates proficiency in developing applications and services on Google Cloud Platform using modern development practices.",
      verifyUrl: "#"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta (Facebook)",
      date: "2022",
      credentialId: "META-REACT-2022-003",
      description: "Advanced certification covering React ecosystem, state management, performance optimization, and modern development patterns.",
      verifyUrl: "#"
    },
    {
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2022", 
      credentialId: "CKA-2022-004",
      description: "Validates skills in deploying, managing, and troubleshooting Kubernetes clusters in production environments.",
      verifyUrl: "#"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Certifications & <span className="bg-gradient-primary bg-clip-text text-transparent">Credentials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my expertise in modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Award className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
                <Badge variant="outline" className="flex items-center space-x-1">
                  <Calendar size={12} />
                  <span>{cert.date}</span>
                </Badge>
              </div>

              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {cert.description}
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Credential ID</p>
                  <p className="text-sm font-mono text-foreground">{cert.credentialId}</p>
                </div>
                <a
                  href={cert.verifyUrl}
                  className="flex items-center space-x-1 text-primary hover:text-primary-foreground transition-colors duration-300 text-sm"
                >
                  <span>Verify</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;