import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const socials = [
    { Icon: SiGithub, href: "https://github.com/janejeshen", label: "GitHub" },
    { Icon: SiLinkedin, href: "https://www.linkedin.com/in/jane-njuguna", label: "LinkedIn" },
    { Icon: Mail, href: "mailto:janenjuguna550@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-hero text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Photo */}
          <div className="mb-8 animate-fade-in-up">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 relative">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-4 border-primary shadow-burnt"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20" />
            </div>
          </div>

          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Hello, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Jane Njuguna
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
              Data Analyst • Data Scientist • Machine Learning Engineer
            </h2>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              I help teams make smarter decisions by turning raw data into clear stories and dependable products. I uncover what matters, build models that forecast and explain, and ship solutions that work in the real world measured by impact, not buzzwords. I care about clarity, reliability, and results.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-primary hover:shadow-burnt transition-all duration-300 text-lg px-8 py-3"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="bg-burnt-orange border-burnt-orange text-white hover:bg-burnt-orange-dark hover:border-burnt-orange-dark transition-all duration-300 text-lg px-8 py-3"
            >
              Let's Talk
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 mb-12">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-gray-400 hover:text-primary transition-colors duration-300 p-2"
                aria-label={label}
                title={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>

          <button
            onClick={() => scrollToSection("projects")}
            className="animate-bounce text-gray-400 hover:text-primary transition-colors duration-300"
            aria-label="Scroll down"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
