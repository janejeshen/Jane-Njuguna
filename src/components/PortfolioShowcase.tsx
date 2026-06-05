import { useState } from "react";
import profilePhoto from "@/assets/profile-graduation.jpeg";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Briefcase,
  Cloud,
  Database,
  Download,
  ExternalLink,
  Folder,
  GraduationCap,
  Mail,
  Medal,
  Menu,
  Send,
  Sparkles,
  Star,
  Phone,
  Trophy,
  X,
} from "lucide-react";
import { SiGithub, SiLinkedin, SiPostgresql, SiPython, SiStreamlit } from "react-icons/si";

const resumeUrl = "/Jane_Njeri_Njuguna_CV.pdf";
const resumeFileName = "Jane_Njeri_Njuguna_CV.pdf";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const skillBadges = [
  { label: "Python", icon: SiPython, color: "text-yellow-300" },
  { label: "SQL", icon: Database, color: "text-cyan-300" },
  { label: "Power BI", icon: BarChart3, color: "text-amber-300" },
  { label: "PostgreSQL", icon: SiPostgresql, color: "text-sky-300" },
  { label: "Machine Learning", icon: Brain, color: "text-fuchsia-300" },
  { label: "NLP", icon: Brain, color: "text-violet-300" },
  { label: "LLM Applications", icon: Brain, color: "text-amber-300" },
  { label: "Streamlit", icon: SiStreamlit, color: "text-rose-300" },
  { label: "AWS", icon: Cloud, color: "text-cyan-300" },
  { label: "GitHub", icon: SiGithub, color: "text-white" },
];

const stats = [
  { value: "30+", label: "Dashboards Delivered", icon: BarChart3 },
  { value: "10+", label: "Projects Completed", icon: Folder },
  { value: "Top Female", label: "Competition Award", icon: Trophy },
  { value: "Top 10", label: "Competition Finish", icon: Medal },
];

const achievements = [
  {
    icon: Trophy,
    title: "2nd Place - Top Female",
    text: "Cote d'Ivoire Crop Classification Challenge.",
  },
  {
    icon: Trophy,
    title: "Top 10 Competition Finisher",
    text: "Climate Health Risk Prediction Challenge.",
  },
  {
    icon: BarChart3,
    title: "30+ Dashboards Delivered",
    text: "Built dashboards across educational analytics, sales analytics, inventory analytics, KPI reporting, and BI solutions.",
  },
  {
    icon: GraduationCap,
    title: "Data Science Nanodegree",
    text: "Completed applied training in Python, SQL, analytics, and machine learning.",
  },
];

const expertise = [
  { title: "Programming & Databases", items: ["Python", "SQL", "PostgreSQL", "MySQL"] },
  { title: "Analytics & Statistics", items: ["Pandas", "NumPy", "Exploratory Data Analysis", "Statistical Analysis", "Hypothesis Testing", "Feature Engineering", "Predictive Modeling", "Data Storytelling"] },
  { title: "Business Intelligence", items: ["Power BI", "Tableau", "Looker Studio", "Excel", "KPI Development", "Dashboard Design", "Reporting Automation", "Business Analytics"] },
  { title: "Machine Learning & AI", items: ["Scikit-learn", "LightGBM", "XGBoost", "Optuna", "TensorFlow", "PyTorch", "Natural Language Processing", "Transformers", "Hugging Face", "LLM Applications"] },
  { title: "Geospatial AI", items: ["Remote Sensing", "Raster Analytics", "Geospatial Machine Learning"] },
  { title: "Tools & Platforms", items: ["Git", "GitHub", "AWS", "Streamlit", "Jupyter Notebook", "VS Code"] },
];

const projects = [
  {
    title: "Sentinel-2 Multi-Temporal Crop Classification",
    description:
      "Solved a complex crop-mapping problem by turning multi-temporal satellite imagery into a machine learning pipeline that identifies cocoa, rubber, and oil palm plantations for scalable agricultural intelligence.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "LightGBM", "Optuna", "Rasterio", "Scikit-learn"],
    accent: "bg-amber-500",
    badge: "2nd Place - Top Female",
    icon: Send,
    link: "https://github.com/janejeshen/AgroVision-AI",
  },
  {
    title: "Multilingual Health Assistant",
    description:
      "Built an AI health assistant that helps users access healthcare information in Kiswahili, Luganda, Akan, and Amharic, expanding support for low-resource African languages.",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "PyTorch", "Hugging Face", "Transformers"],
    accent: "bg-violet-500",
    badge: "Multilingual NLP",
    icon: Brain,
    link: "https://github.com/janejeshen",
  },
  {
    title: "Climate Health Risk Prediction",
    description:
      "Built a predictive modeling workflow that connects climate and environmental signals to health risk levels, helping surface interpretable insights for public health planning.",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "Scikit-learn", "Pandas", "Feature Engineering"],
    accent: "bg-green-500",
    badge: "7th Place out of 99",
    icon: Medal,
    link: "https://github.com/janejeshen",
  },
  {
    title: "Medical Appointment No-Show Analysis",
    description:
      "Analyzed appointment behavior to uncover why patients miss scheduled visits and translated statistical findings into practical recommendations for better attendance planning.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "Pandas", "Seaborn", "Statistical Testing"],
    accent: "bg-rose-500",
    badge: "110K+ Records",
    icon: Star,
    link: "https://github.com/janejeshen",
  },
  {
    title: "Sales & Inventory Analytics Dashboard",
    description:
      "Designed KPI dashboards that help business teams monitor sales, inventory movement, product performance, and operational trends for faster commercial decisions.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["SQL", "Power BI", "Excel", "Streamlit"],
    accent: "bg-amber-500",
    badge: "500+ Product Records",
    icon: BarChart3,
    link: "https://janejeshen-sales-performance-dashboard-streamlit-app-ggstz8.streamlit.app/",
  },
];

const experience = [
  {
    company: "Kiondo Market",
    role: "Data Analytics, Sales Analytics, Inventory Analytics",
    summary:
      "Delivered sales, inventory, and business reporting solutions that improved visibility into revenue performance, product movement, and operational KPIs.",
    bullets: [
      "Built dashboard solutions for sales analytics, inventory analytics, revenue monitoring, and business reporting.",
      "Analyzed product and transaction data to identify revenue trends, stock movement patterns, and operational improvement opportunities.",
      "Created KPI reporting views that helped business teams monitor performance and act on emerging issues faster.",
      "Contributed to 30+ dashboards delivered across sales, inventory, education, KPI reporting, and BI workflows.",
    ],
  },
  {
    company: "Kurasa Africa",
    role: "SQL Analytics, BI Reporting, Educational Analytics",
    summary:
      "Built SQL reporting workflows, BI dashboards, and KPI monitoring systems for education-focused analytics and stakeholder reporting.",
    bullets: [
      "Developed PostgreSQL reporting workflows to support educational analytics, KPI tracking, and recurring business reporting.",
      "Built dashboard solutions in Power BI and Looker Studio for performance visibility and stakeholder decision-making.",
      "Improved reporting consistency through automated workflows and reusable analytics outputs.",
      "Translated raw education data into actionable insights for monitoring, planning, and operational performance review.",
    ],
  },
];

const GlassPanel = ({ className = "", children, id }: React.PropsWithChildren<{ className?: string; id?: string }>) => (
  <section id={id} className={`scroll-mt-28 rounded-2xl border border-white/10 bg-slate-950/55 shadow-2xl shadow-black/25 backdrop-blur-xl ${className}`}>
    {children}
  </section>
);

const PortfolioShowcase = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#030814] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(92,68,255,0.26),transparent_28%),radial-gradient(circle_at_72%_18%,rgba(20,184,166,0.14),transparent_25%),linear-gradient(180deg,#020713,#06111f_45%,#020713)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.04] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:44px_44px]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1800px] items-center justify-between gap-8 px-5 md:px-8">
          <a href="#top" onClick={closeMenu} className="flex shrink-0 items-center gap-4">
            <span className="bg-gradient-to-br from-amber-400 to-violet-500 bg-clip-text text-4xl font-black tracking-tight text-transparent">
              JN
            </span>
            <span>
              <span className="block text-base font-bold">Jane Njeri Njuguna</span>
              <span className="block text-sm text-slate-300">Data Analyst | BI Analyst | AI Engineer | Data Scientist</span>
            </span>
          </a>

          <nav className="hidden flex-1 items-center justify-center gap-6 whitespace-nowrap text-sm text-slate-200 2xl:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-violet-300">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-4 md:flex">
            <SocialButton href="https://github.com/janejeshen" label="GitHub" icon={SiGithub} />
            <SocialButton href="https://www.linkedin.com/in/jane-njuguna" label="LinkedIn" icon={SiLinkedin} />
            <a
              href={resumeUrl}
              download={resumeFileName}
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-violet-600 px-5 text-sm font-bold shadow-lg shadow-violet-900/30 transition hover:translate-y-0.5"
            >
              <Download size={17} /> Download CV
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-white/15 bg-white/5 2xl:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-white/10 bg-[#030814]/95 px-5 py-5 backdrop-blur-xl 2xl:hidden">
            <nav className="mx-auto grid max-w-[1800px] gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={closeMenu} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100">
                  {item.label}
                </a>
              ))}
              <div className="grid gap-3 pt-2 sm:grid-cols-3">
                <a href="https://github.com/janejeshen" target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 text-sm font-bold">
                  <SiGithub /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/jane-njuguna" target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 text-sm font-bold">
                  <SiLinkedin /> LinkedIn
                </a>
                <a href={resumeUrl} download={resumeFileName} className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-violet-600 text-sm font-bold">
                  <Download size={16} /> CV
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <div className="relative z-10 mx-auto max-w-7xl space-y-8 px-5 py-8 md:px-8 lg:py-12">
        <HeroSection />
        <ProjectsSection />
        <AchievementsSection />
        <ExpertiseSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </main>
  );
};

const HeroSection = () => (
  <GlassPanel id="about" className="overflow-hidden p-5 md:p-7 lg:p-9">
    <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
      <div className="flex flex-col justify-center">
      <div className="mb-8 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/7 px-4 py-2 text-xs font-black uppercase tracking-wide">
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" /> Open to opportunities
      </div>

      <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl">
        Jane Njeri <span className="bg-gradient-to-r from-amber-400 to-violet-500 bg-clip-text text-transparent">Njuguna</span>
      </h1>
      <h2 className="mt-5 max-w-4xl text-3xl font-black leading-tight tracking-tight text-white md:text-5xl">
        Building AI, Analytics & Data Products That Drive Impact
      </h2>
      <p className="mt-3 text-lg font-semibold text-violet-200">Data Analyst • BI Analyst • AI Engineer • Data Scientist</p>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
        I build analytics solutions, BI dashboards, machine learning systems, and AI applications that transform complex data into business value. My work helps teams monitor KPIs, automate reporting, uncover risks, and make faster decisions with confidence.
      </p>
      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">
        I specialize in turning messy operational data into clear dashboards, predictive insights, and data products across healthcare, education, agriculture, sales, inventory, and business operations.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {skillBadges.map(({ label, icon: Icon, color }) => (
          <span key={label} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-100">
            <Icon className={color} size={18} /> {label}
          </span>
        ))}
      </div>

      <div className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
        <a href="#projects" className="inline-flex h-14 items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-amber-500 to-violet-600 px-6 text-center font-bold shadow-xl shadow-violet-950/30 transition hover:translate-y-0.5">
          <span className="whitespace-nowrap">View Projects</span>
          <ArrowRight className="shrink-0" size={20} />
        </a>
        <a href={resumeUrl} download={resumeFileName} className="inline-flex h-14 items-center justify-center gap-3 rounded-lg border border-white/20 bg-slate-950/50 px-6 text-center font-bold text-slate-100 transition hover:bg-white/10">
          <Download className="shrink-0" size={20} />
          <span className="whitespace-nowrap">Download CV</span>
        </a>
        <a href="https://github.com/janejeshen" target="_blank" rel="noopener noreferrer" className="inline-flex h-14 items-center justify-center gap-3 rounded-lg border border-white/20 bg-slate-950/50 px-6 text-center font-bold text-slate-100 transition hover:bg-white/10">
          <SiGithub className="shrink-0" size={20} />
          <span className="whitespace-nowrap">GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/jane-njuguna" target="_blank" rel="noopener noreferrer" className="inline-flex h-14 items-center justify-center gap-3 rounded-lg border border-white/20 bg-slate-950/50 px-6 text-center font-bold text-slate-100 transition hover:bg-white/10">
          <SiLinkedin className="shrink-0" size={20} />
          <span className="whitespace-nowrap">LinkedIn</span>
        </a>
      </div>
      </div>

      <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-violet-400/40 bg-gradient-to-br from-amber-900/55 to-violet-950/80 p-1 shadow-2xl shadow-violet-950/40 md:min-h-[460px]">
        <div className="absolute right-8 top-12 h-28 w-28 bg-[radial-gradient(circle,#fff_1px,transparent_2px)] [background-size:16px_16px] opacity-20" />
        <img src={profilePhoto} alt="Jane Njeri Njuguna" className="relative h-full min-h-[360px] w-full rounded-[1.25rem] object-cover object-[50%_38%] md:min-h-[460px]" />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
        {stats.map(({ value, label, icon: Icon }) => (
          <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <Icon className="mb-3 text-violet-400" size={24} />
            <p className="text-3xl font-black">{value}</p>
            <p className="mt-1 text-sm leading-5 text-slate-300">{label}</p>
          </div>
        ))}
      </div>
    </div>
  </GlassPanel>
);

const ProjectsSection = () => (
  <section id="projects" className="scroll-mt-28">
    <SectionHeading
      eyebrow="Featured Projects"
      title="Proof of Work Across Analytics, BI, and AI"
      text="Selected work showing measurable outcomes across geospatial AI, healthcare NLP, climate risk modeling, statistical analytics, and business intelligence."
      icon={Folder}
    />
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, index) => (
        <article key={project.title} className="group flex overflow-hidden rounded-xl border border-white/10 bg-slate-950/70 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-violet-400/40 md:min-h-[430px] md:flex-col">
          <div className="relative h-40 overflow-hidden">
            <img src={project.image} alt="" className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105" loading="lazy" />
            <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-amber-500 to-violet-600 text-lg font-black">
              {index + 1}
            </span>
            <span className={`absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full ${project.accent}`}>
              <project.icon size={22} />
            </span>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h3 className="text-xl font-black leading-tight">{project.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-md bg-amber-400/12 px-3 py-1 text-xs font-medium text-amber-200">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4 text-sm text-slate-200">
              <span>{project.badge}</span>
              <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`} className="inline-flex items-center gap-2 text-white transition hover:text-violet-300">
                View <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

const AchievementsSection = () => (
  <GlassPanel id="achievements" className="p-6 md:p-8">
    <SectionHeading
      eyebrow="Achievements"
      title="Measurable Outcomes and Technical Milestones"
      text="Competition results, project outcomes, and proof points that demonstrate impact across analytics, BI, machine learning, and AI."
      icon={Trophy}
    />
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {achievements.map(({ icon: Icon, title, text }) => (
        <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-violet-400/40 hover:bg-white/10">
          <Icon className="mb-4 text-amber-300" size={26} />
          <h3 className="font-black">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
        </div>
      ))}
    </div>
  </GlassPanel>
);

const ExpertiseSection = () => (
  <GlassPanel id="skills" className="p-6 md:p-8">
    <SectionHeading
      eyebrow="Technical Expertise"
      title="Technical Expertise"
      text="Technologies used to build analytics solutions, business intelligence dashboards, machine learning systems, and AI-powered applications."
      icon={Brain}
    />
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {expertise.map((group) => (
        <div key={group.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h3 className="mb-4 flex items-center gap-2 font-black text-violet-200">
            <Sparkles size={18} /> {group.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span key={item} className="rounded-md border border-white/10 bg-slate-950/60 px-3 py-1.5 text-sm text-slate-200">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </GlassPanel>
);

const ExperienceSection = () => (
  <GlassPanel id="experience" className="p-6 md:p-8">
    <SectionHeading
      eyebrow="Professional Experience"
      title="Analytics and BI Experience Built Around Business Decisions"
      text="Achievement-focused experience across sales analytics, inventory analytics, SQL reporting, educational analytics, KPI monitoring, and reporting automation."
      icon={Briefcase}
    />
    <div className="space-y-5">
      {experience.map((item) => (
        <article key={item.company} className="rounded-xl border border-white/10 bg-white/5 p-5 md:p-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-xl font-black">{item.company}</h3>
              <p className="mt-1 font-semibold text-violet-200">{item.role}</p>
            </div>
            <span className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-1 text-sm text-slate-300">Professional Experience</span>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-300">{item.summary}</p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {item.bullets.map((bullet) => (
              <div key={bullet} className="rounded-lg border border-white/10 bg-slate-950/50 p-4 text-sm leading-6 text-slate-300">
                {bullet}
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  </GlassPanel>
);

const ContactSection = () => (
  <GlassPanel id="contact" className="p-6 md:p-8">
    <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
      <div>
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-violet-300">Contact</p>
        <h2 className="text-4xl font-black tracking-tight md:text-5xl">Let's Build Something Impactful</h2>
        <p className="mt-4 max-w-2xl text-slate-300">
          I am open to opportunities in Data Analytics, Business Intelligence, Analytics Engineering, Machine Learning, and AI. If you're looking for someone who can transform data into actionable insights and business value, let's connect.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <ContactItem icon={Mail} title="Email" text="janenjuguna550@gmail.com" href="mailto:janenjuguna550@gmail.com" />
        <ContactItem icon={Phone} title="Phone" text="+254 740 903 846" href="tel:+254740903846" />
        <ContactItem icon={Send} title="Location" text="Nairobi, Kenya" />
        <ContactItem icon={SiLinkedin} title="LinkedIn" text="linkedin.com/in/jane-njuguna" href="https://www.linkedin.com/in/jane-njuguna" />
        <ContactItem icon={SiGithub} title="GitHub" text="github.com/janejeshen" href="https://github.com/janejeshen" />
      </div>
    </div>
  </GlassPanel>
);

const SectionHeading = ({ eyebrow, title, text, icon: Icon }: { eyebrow: string; title: string; text: string; icon: React.ComponentType<{ size?: number; className?: string }> }) => (
  <div className="mb-6 max-w-3xl">
    <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-violet-300">
      <Icon size={18} /> {eyebrow}
    </p>
    <h2 className="text-3xl font-black tracking-tight md:text-5xl">{title}</h2>
    <p className="mt-4 text-slate-300">{text}</p>
  </div>
);

const SocialButton = ({ href, label, icon: Icon }: { href: string; label: string; icon: React.ComponentType<{ size?: number; className?: string }> }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-slate-200 transition hover:border-violet-400/40 hover:text-white" aria-label={label}>
    <Icon size={18} />
  </a>
);

const ContactItem = ({ icon: Icon, title, text, href }: { icon: React.ComponentType<{ size?: number; className?: string }>; title: string; text: string; href?: string }) => {
  const content = (
    <div className="flex h-full items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 text-sm transition hover:border-violet-400/40 hover:bg-white/10">
      <Icon className="shrink-0 text-white" size={25} />
      <span>
        <span className="block font-bold">{title}</span>
        <span className="block break-words text-slate-300">{text}</span>
      </span>
    </div>
  );

  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="block text-white">
      {content}
    </a>
  ) : (
    content
  );
};

export default PortfolioShowcase;
