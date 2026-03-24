import { Atom, BookOpen, Trophy } from "lucide-react";

const pathways = [
  {
    icon: Atom,
    title: "STEM",
    description: "Science, Technology, Engineering & Mathematics",
    subjects: ["Physics, Chemistry, Mathematics", "Biology, Chemistry, Mathematics", "Computer Studies, Mathematics, Physics"],
  },
  {
    icon: BookOpen,
    title: "Social Sciences",
    description: "Humanities & Business Studies",
    subjects: ["History, Geography, CRE", "Business Studies, Mathematics, Geography", "History, CRE, Kiswahili"],
  },
  {
    icon: Trophy,
    title: "Arts & Sports Science",
    description: "Creative Arts & Physical Education",
    subjects: ["Sports Science, Biology, Chemistry", "Art & Design, History, CRE", "Music, Kiswahili, History"],
  },
];

const AcademicsSection = () => (
  <section id="academics" className="section-padding">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-heading text-center text-navy mb-4">
        Academic <span className="text-gradient-gold">Pathways</span>
      </h2>
      <div className="w-16 h-1 bg-gold mx-auto mb-12 rounded-full" />

      <div className="grid md:grid-cols-3 gap-8">
        {pathways.map(({ icon: Icon, title, description, subjects }) => (
          <div key={title} className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
              <Icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="text-xl font-heading text-navy mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{description}</p>
            <ul className="space-y-2">
              {subjects.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="text-gold mt-1">•</span> {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AcademicsSection;
