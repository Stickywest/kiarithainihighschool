import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Atom, BookOpen, Trophy, GraduationCap, Clock, Users, CheckCircle } from "lucide-react";

const pathways = [
  {
    icon: Atom, title: "STEM", color: "from-primary/10 to-accent",
    description: "Science, Technology, Engineering & Mathematics",
    subjects: ["Physics, Chemistry, Mathematics", "Biology, Chemistry, Mathematics", "Computer Studies, Mathematics, Physics"],
    careers: ["Engineering", "Medicine", "IT & Software", "Architecture"],
  },
  {
    icon: BookOpen, title: "Social Sciences", color: "from-gold/10 to-accent",
    description: "Humanities & Business Studies",
    subjects: ["History, Geography, CRE", "Business Studies, Mathematics, Geography", "History, CRE, Kiswahili"],
    careers: ["Law", "Economics", "Journalism", "Public Administration"],
  },
  {
    icon: Trophy, title: "Arts & Sports Science", color: "from-primary/10 to-muted",
    description: "Creative Arts & Physical Education",
    subjects: ["Sports Science, Biology, Chemistry", "Art & Design, History, CRE", "Music, Kiswahili, History"],
    careers: ["Sports Management", "Creative Arts", "Teaching", "Media"],
  },
];

const features = [
  { icon: GraduationCap, title: "Qualified Teachers", desc: "Experienced TSC-registered educators dedicated to student success." },
  { icon: Clock, title: "Structured Schedule", desc: "Well-organized timetable balancing academics, sports, and personal development." },
  { icon: Users, title: "Small Class Sizes", desc: "Optimal student-teacher ratios for personalized attention and support." },
];

const AcademicsPage = () => (
  <>
    <Navbar />
    <PageHero title="Academic" highlight="Programs" subtitle="Comprehensive CBC and 8-4-4 curriculum pathways preparing students for university and beyond." />

    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading text-center text-navy mb-4">
            Academic <span className="text-gradient-gold">Pathways</span>
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-12 rounded-full" />
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {pathways.map(({ icon: Icon, title, description, subjects, careers, color }, i) => (
            <AnimatedSection key={title} delay={i * 0.15}>
              <div className={`group bg-gradient-to-br ${color} border border-border rounded-xl p-7 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full`}>
                <div className="w-14 h-14 rounded-lg bg-card flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading text-navy mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground mb-5">{description}</p>

                <h4 className="text-sm font-semibold text-foreground mb-2">Subject Combinations</h4>
                <ul className="space-y-2 mb-5">
                  {subjects.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={14} className="text-gold mt-0.5 shrink-0" /> {s}
                    </li>
                  ))}
                </ul>

                <h4 className="text-sm font-semibold text-foreground mb-2">Career Paths</h4>
                <div className="flex flex-wrap gap-2">
                  {careers.map((c) => (
                    <span key={c} className="text-xs bg-card/80 text-muted-foreground px-3 py-1 rounded-full border border-border">{c}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading text-center text-navy mb-4">
            Why Choose <span className="text-gradient-gold">Our Academics</span>
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-12 rounded-full" />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <AnimatedSection key={title} delay={i * 0.1}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <Icon size={30} className="text-primary" />
                </div>
                <h3 className="text-lg font-heading text-navy mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </>
);

export default AcademicsPage;
