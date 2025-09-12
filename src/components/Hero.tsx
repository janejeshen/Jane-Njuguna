import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Download } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import profilePhoto from "@/assets/profile-photo.jpg";

/* --------- Tiny typewriter utilities (no libs) --------- */
function useTypewriter(
  text: string,
  { speed = 90, startDelay = 400 }: { speed?: number; startDelay?: number } = {}
) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const starter = setTimeout(function step() {
      setOut(text.slice(0, i + 1));
      i += 1;
      if (i < text.length) timer = setTimeout(step, speed);
    }, startDelay);
    return () => {
      clearTimeout(starter);
      clearTimeout(timer);
    };
  }, [text, speed, startDelay]);
  return out;
}

function useTypewriterLoop(
  strings: string[],
  { typing = 70, deleting = 40, pause = 1000 }: { typing?: number; deleting?: number; pause?: number } = {}
) {
  const [idx, setIdx] = useState(0);
  const [txt, setTxt] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    if (!strings.length) return;
    const current = strings[idx % strings.length];
    let t: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (txt.length < current.length) {
        t = setTimeout(() => setTxt(current.slice(0, txt.length + 1)), typing);
      } else {
        t = setTimeout(() => setPhase("pausing"), pause);
      }
    } else if (phase === "deleting") {
      if (txt.length > 0) {
        t = setTimeout(() => setTxt(current.slice(0, txt.length - 1)), deleting);
      } else {
        setIdx((n) => (n + 1) % strings.length);
        setPhase("typing");
      }
    } else {
      t = setTimeout(() => setPhase("deleting"), pause / 2);
    }
    return () => clearTimeout(t);
  }, [txt, phase, strings, idx, typing, deleting, pause]);

  return txt;
}

const Caret = () => <span className="ml-1 animate-pulse">|</span>;
/* -------------------------------------------------------- */

type IconComponent = React.ComponentType<{ size?: number | string; className?: string }>;
type ResumeKey = "Data_Analyst" | "Data_Scientist" | "ML_Engineer";

/** Direct PDF export links from your Google Docs (must be viewable by "Anyone with the link") */
const RESUMES: Record<ResumeKey, { url: string; filename: string }> = {
  Data_Analyst: {
    url: "https://docs.google.com/document/d/1kc40VEu2Nk5xszlw4j8rRrRl1ibJbZwLq-ApFJd1L3k/export?format=pdf",
    filename: "Jane_Njuguna_Data_Analyst_Resume.pdf",
  },
  ML_Engineer: {
    url: "https://docs.google.com/document/d/1NfRJvdTRjCCejxlN-JpKU3gRZUtmu7Mx5V4yKJeuDVE/export?format=pdf",
    filename: "Jane_Njuguna_ML_Engineer_Resume.pdf",
  },
  Data_Scientist: {
    url: "https://docs.google.com/document/d/19peRPoPLETgl1GQX-b1W6h5dBDXlifZDQqSYFOC70dw/export?format=pdf",
    filename: "Jane_Njuguna_Data_Scientist_Resume.pdf",
  },
};

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = (type: ResumeKey) => {
    const item = RESUMES[type];
    if (!item) return;

    // Most browsers will download automatically due to Google setting Content-Disposition.
    // We also set download+target as a hint; if ignored, it still opens and downloads.
    const a = document.createElement("a");
    a.href = item.url;
    a.setAttribute("download", item.filename);
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener");
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const socials: { Icon: IconComponent; href: string; label: string }[] = [
    { Icon: SiGithub, href: "https://github.com/janejeshen", label: "GitHub" },
    { Icon: SiLinkedin, href: "https://www.linkedin.com/in/jane-njuguna", label: "LinkedIn" },
    { Icon: Mail, href: "mailto:janenjuguna550@gmail.com", label: "Email" },
  ];

  const resumeTypes: { type: ResumeKey; label: string }[] = [
    { type: "Data_Analyst", label: "Data Analyst" },
    { type: "Data_Scientist", label: "Data Scientist" },
    { type: "ML_Engineer", label: "ML Engineer" },
  ];

  // ✨ Typewriter texts
  const typedName = useTypewriter("Jane Njuguna", { speed: 90, startDelay: 500 });
  const typedRole = useTypewriterLoop(
    ["Data Analyst", "Data Scientist", "Machine Learning Engineer"],
    { typing: 70, deleting: 40, pause: 1100 }
  );

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-hero text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Photo */}
          <div className="mb-4 mt-16 animate-fade-in-up">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 relative">
              <img src={profilePhoto} alt="Profile" className="w-full h-full rounded-full object-cover border-4 border-primary shadow-burnt" />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20" />
            </div>
          </div>

          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-10 leading-tight">
              <span className="text-white">Hello, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent inline-flex">
                {typedName}
                <Caret />
              </span>
            </h1>

            {/* Roles typewriter (rotating) */}
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light min-h-[2.5rem]" aria-live="polite">
              {typedRole}
              <Caret />
            </h2>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed text-left">
              I help teams make smarter decisions by turning raw data into clear stories and dependable
              products. I uncover what matters, build models that forecast and explain, and ship solutions
              that work in the real world—measured by impact, not buzzwords. I care about clarity, reliability,
              and results.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button onClick={() => scrollToSection("projects")} className="bg-gradient-primary hover:shadow-burnt transition-all duration-300 text-lg px-8 py-3">
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

          <button onClick={() => scrollToSection("projects")} className="animate-bounce text-gray-400 hover:text-primary transition-colors duration-300 mb-12" aria-label="Scroll down">
            <ArrowDown size={32} />
          </button>

          {/* Resume Download Section */}
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-white">Download Resume</h3>
            <p className="text-gray-300 mb-6">Get my specialized resume for different roles</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {resumeTypes.map(({ type, label }) => (
                <Button
                  key={type}
                  onClick={() => downloadResume(type)}
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center gap-2"
                >
                  <Download size={18} />
                  {label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;