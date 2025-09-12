import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
  title: "Data Analyst Intern",
  company: "Kurasa Africa",
  period: "June 2025 – Present",
  description: `• Clean and validate assessment datasets across schools—deduping, fixing missing/inconsistent values, and standardizing schemas to improve data quality.
• Write SQL/Python pipelines to aggregate student, class, and school-level metrics (scores, growth, attendance) for weekly and monthly reporting.
• Build interactive dashboards to visualize performance trends, cohorts, and risk flags, enabling data-driven decisions for academic and operations teams.
• Perform exploratory analysis to surface drivers of performance and translate findings into clear recommendations for stakeholders.
• Document data sources, data dictionaries, naming conventions, and analysis workflows to improve team collaboration and onboarding.
• Automate recurring reports and checks, reducing manual effort and turnaround time.`,
  technologies: [
    "Python (Pandas, NumPy, Jupyter)",
    "SQL (PostgreSQL)",
    "Power BI",
    "Looker Studio",
    "Excel",
    "Matplotlib",
    "Seaborn",
    "Git/GitHub"
  ]
}
,
    {
  title: "Data Analyst Intern",
  company: "Kiondo Market",
  period: "July 2023 – December 2023",
  description: `• Analyzed sales, margin, and profitability for the Fresh Foods category; surfaced trends by SKU, store, and vendor to guide weekly decisions.
• Built KPI dashboards (revenue, units, AOV, gross margin, sell-through, wastage) that gave merchandisers and ops a single source of truth.
• Conducted grouped product performance analysis to identify under/over-performers and recommended price, promo, and assortment actions.
• Evaluated promotion effectiveness and price elasticity to optimize discount depth and frequency without eroding margins.
• Performed basket analysis and simple cohort/segmentation to uncover cross-sell opportunities and high-value customer behaviors.
• Partnered with supply/ops to reduce stockouts and shrink by monitoring days-of-cover, reorder points, and wastage drivers.
• Cleaned and standardized raw POS/inventory data (deduping, schema alignment, missing-value handling) to improve data reliability.`,
  technologies: [
    "Python (Pandas, NumPy, Jupyter)",
    "MySQL",
    "Looker Studio",
    "Excel/Google Sheets",
    "Matplotlib",
    "Seaborn",
    "Git/GitHub"
  ]
}
,
    {
  title: "Online Marketer",
  company: "Freelancer (Upwork)",
  period: "December 2021 – May 2022",
  description: `• Planned and executed data-driven marketing campaigns for e-commerce and NFT launches, aligning copy, creatives, and funnels to target audiences.
• Grew and moderated Discord communities—set up channels/roles/bots, hosted AMAs and giveaways, and nurtured leads via compliant DM and community engagement.
• Promoted NFT drops across Discord, X (Twitter), and Telegram; coordinated creator/influencer collaborations and cross-promotions to boost reach and credibility.
• Built simple acquisition funnels with UTM tracking; ran A/B tests on headlines, CTAs, and landing pages to improve CTR and conversion rates.
• Produced weekly performance reports (reach, engagement, conversion, sales) and translated insights into clear, actionable recommendations.
• Created content calendars and wrote campaign assets (threads, announcements, emails, landing page copy) while maintaining brand voice and community guidelines.`,
  technologies: [
    "Discord ",
    "X & Telegram",
    "Looker Studio (Data Studio)",
    "Canva / Figma",
    "Excel / Google Sheets"
  ]
}

  ];

  const education = [
    {
      degree: "Diploma in Data Science and Analytics",
       school: "Zetech University",
       period: "January 2024 – Present",
       description: `• Currently pursuing a diploma focused on statistics, data wrangling, and applied machine learning.
• Completed coursework in Python programming, SQL/databases, probability & statistics, data visualization, and ethics in data use.
• Built hands-on projects: KPI dashboards for business performance, a supervised ML classification model, and an ETL pipeline for cleaning and aggregating raw datasets.
• Collaborate on team assignments using Git; document methods and communicate insights for non-technical stakeholders.`,
    },
    {
      degree: "Data Science and Analytics",
      school: "Moringa School",
      period: "July 2022-February 2023",
      description: `• Intensive, project-based training in Data Science & Analytics covering Python, SQL, statistics/probability, and machine learning fundamentals.
• Performed data wrangling and exploratory analysis, engineered features, and built/evaluated models (classification & regression) with scikit-learn.
• Created clear visualizations and dashboards to communicate insights to non-technical stakeholders and support data-driven decisions.
• Practiced reproducible workflows (clean notebooks, version control), experiment tracking, and responsible data/ML ethics.`

    }
    {
      degree: "BSc in Community Health and Development",
      school: "Catholic University Of Eastern Africa",
      period: "November 2020-April 2022"
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