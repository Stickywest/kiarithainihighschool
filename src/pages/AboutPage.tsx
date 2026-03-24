import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Target, Eye, Heart, Award, Users, BookOpen, Shield, Star } from "lucide-react";

const history = [
  { year: "1980s", event: "Kiarithaini High School was established as a community school in the scenic highlands of Mathira East, Nyeri County." },
  { year: "1990s", event: "The school gained recognition and was upgraded to a District school, attracting students from across the region." },
  { year: "2000s", event: "Achieved Extra-County status, expanding admissions to students from multiple counties across Kenya." },
  { year: "2010s", event: "Significant infrastructure development including new laboratories, dormitories, and a modern library." },
  { year: "Present", event: "Continues to excel in academics and co-curricular activities, producing top performers in KCSE examinations." },
];

const values = [
  { icon: BookOpen, title: "Academic Excellence", desc: "We pursue the highest standards of learning and intellectual growth." },
  { icon: Shield, title: "Integrity", desc: "We uphold honesty, transparency, and ethical conduct in all we do." },
  { icon: Heart, title: "Discipline", desc: "We foster self-discipline, respect, and responsibility among our students." },
  { icon: Users, title: "Unity", desc: "We promote teamwork, brotherhood, and a strong sense of community." },
  { icon: Star, title: "Innovation", desc: "We embrace modern teaching methods and technology in education." },
  { icon: Award, title: "Leadership", desc: "We nurture future leaders through mentorship and opportunities." },
];

const leadership = [
  { role: "Principal", name: "To be updated", desc: "Provides strategic leadership and oversees all school operations, academic programs, and development initiatives." },
  { role: "Deputy Principal (Academics)", name: "To be updated", desc: "Oversees curriculum implementation, examination coordination, and academic performance improvement." },
  { role: "Deputy Principal (Administration)", name: "To be updated", desc: "Manages student welfare, discipline, boarding facilities, and day-to-day school operations." },
  { role: "Board of Management Chair", name: "To be updated", desc: "Leads the school's governance board in policy direction, financial oversight, and strategic planning." },
];

const AboutPage = () => (
  <>
    <Navbar />
    <PageHero title="About" highlight="Our School" subtitle="Nurturing well-rounded young men through academic excellence, strong moral values, and holistic development." />

    {/* Mission & Vision */}
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection direction="left">
            <div className="bg-card border border-border rounded-xl p-8 h-full hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-5">
                <Target size={28} className="text-primary" />
              </div>
              <h2 className="text-2xl font-heading text-navy mb-3">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide quality, holistic education that nurtures academically excellent, morally upright, and socially responsible young men who are well-prepared to contribute positively to society and the nation at large.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div className="bg-card border border-border rounded-xl p-8 h-full hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-5">
                <Eye size={28} className="text-primary" />
              </div>
              <h2 className="text-2xl font-heading text-navy mb-3">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be a centre of academic excellence and character formation, producing well-rounded graduates who are innovative, disciplined, and equipped with the knowledge and skills to thrive in a dynamic global society.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* History Timeline */}
    <section className="section-padding bg-muted">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading text-center text-navy mb-4">
            Our <span className="text-gradient-gold">History</span>
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-12 rounded-full" />
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />
          {history.map((item, i) => (
            <AnimatedSection key={item.year} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <div className={`relative pl-12 md:pl-0 mb-10 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}>
                <div className={`absolute left-2.5 md:left-auto ${i % 2 === 0 ? "md:right-[-9px]" : "md:left-[-9px]"} top-1 w-4 h-4 rounded-full bg-gold border-2 border-background`} />
                <div className="bg-card border border-border rounded-lg p-5 hover:shadow-md transition-shadow">
                  <span className="text-sm font-bold text-gold">{item.year}</span>
                  <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{item.event}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Core Values */}
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading text-center text-navy mb-4">
            Core <span className="text-gradient-gold">Values</span>
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-12 rounded-full" />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, desc }, i) => (
            <AnimatedSection key={title} delay={i * 0.08}>
              <div className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <Icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-heading text-navy mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Leadership */}
    <section className="section-padding bg-navy">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading text-center text-primary-foreground mb-4">
            School <span className="text-gradient-gold">Leadership</span>
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-12 rounded-full" />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {leadership.map(({ role, name, desc }, i) => (
            <AnimatedSection key={role} delay={i * 0.1}>
              <div className="bg-navy-light/30 border border-primary-foreground/10 rounded-xl p-6 hover:bg-navy-light/50 transition-colors">
                <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-1">{role}</p>
                <h3 className="text-xl font-heading text-primary-foreground mb-2">{name}</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">{desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </>
);

export default AboutPage;
