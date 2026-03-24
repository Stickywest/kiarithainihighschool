import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, School, Atom, BookOpen, Trophy, CheckCircle, ArrowRight } from "lucide-react";

const details = [
  { icon: School, label: "Type", value: "Public Extra-County Boys' Boarding School" },
  { icon: MapPin, label: "Address", value: "P.O. Box 310 – 10101 Karatina, Nyeri County, Kenya" },
  { icon: Phone, label: "Phone", value: "0722 377 082", href: "tel:+254722377082" },
  { icon: Mail, label: "Email", value: "kiarithainiboys@yahoo.com", href: "mailto:kiarithainiboys@yahoo.com" },
];

const pathways = [
  { icon: Atom, title: "STEM", description: "Science, Technology, Engineering & Mathematics", subjects: ["Physics, Chemistry, Mathematics", "Biology, Chemistry, Mathematics", "Computer Studies, Mathematics, Physics"] },
  { icon: BookOpen, title: "Social Sciences", description: "Humanities & Business Studies", subjects: ["History, Geography, CRE", "Business Studies, Mathematics, Geography", "History, CRE, Kiswahili"] },
  { icon: Trophy, title: "Arts & Sports Science", description: "Creative Arts & Physical Education", subjects: ["Sports Science, Biology, Chemistry", "Art & Design, History, CRE", "Music, Kiswahili, History"] },
];

const admPoints = [
  "Kiarithaini High School is a public institution under the Ministry of Education.",
  "Student placement is done by the Ministry of Education through the national placement system.",
  "The school admits boys from across multiple counties as an Extra-County boarding school.",
  "Parents and guardians are encouraged to visit the school for orientation upon admission.",
];

const placeholders = [
  { label: "School Main Block", color: "from-primary/20 to-accent" },
  { label: "Science Laboratory", color: "from-gold/20 to-accent" },
  { label: "Sports Field", color: "from-primary/20 to-muted" },
  { label: "Assembly Hall", color: "from-gold/20 to-muted" },
  { label: "Library", color: "from-primary/30 to-accent" },
  { label: "Dormitories", color: "from-gold/30 to-accent" },
];

const Index = () => (
  <>
    <Navbar />
    <HeroSection />

    {/* About Preview */}
    <section className="section-padding bg-muted">
      <div className="container mx-auto max-w-5xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading text-center text-navy mb-4">
            About <span className="text-gradient-gold">Our School</span>
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-10 rounded-full" />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Kiarithaini High School is a public Extra-County boys' boarding school located in the scenic highlands of Mathira East, Nyeri County, Kenya.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {details.map(({ icon: Icon, label, value, href }, i) => (
            <AnimatedSection key={label} delay={i * 0.1}>
              <div className="flex items-start gap-4 bg-card p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Icon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{label}</p>
                  {href ? (
                    <a href={href} className="text-primary hover:text-gold transition-colors">{value}</a>
                  ) : (
                    <p className="text-muted-foreground">{value}</p>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.3}>
          <div className="text-center mt-8">
            <Link to="/about" className="inline-flex items-center gap-2 text-primary hover:text-gold font-semibold transition-colors">
              Learn more about us <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Academics Preview */}
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading text-center text-navy mb-4">
            Academic <span className="text-gradient-gold">Pathways</span>
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-12 rounded-full" />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {pathways.map(({ icon: Icon, title, description, subjects }, i) => (
            <AnimatedSection key={title} delay={i * 0.15}>
              <div className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
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
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.3}>
          <div className="text-center mt-8">
            <Link to="/academics" className="inline-flex items-center gap-2 text-primary hover:text-gold font-semibold transition-colors">
              View all academic programs <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Admissions Preview */}
    <section className="section-padding bg-navy">
      <div className="container mx-auto max-w-4xl text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading text-primary-foreground mb-4">
            Admissions <span className="text-gradient-gold">Information</span>
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-10 rounded-full" />
        </AnimatedSection>

        <div className="text-left space-y-4 max-w-2xl mx-auto">
          {admPoints.map((p, i) => (
            <AnimatedSection key={p} delay={i * 0.1}>
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-gold shrink-0 mt-0.5" />
                <p className="text-primary-foreground/85 leading-relaxed">{p}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions" className="inline-block bg-gold hover:bg-gold-dark text-secondary-foreground font-semibold px-8 py-3 rounded-md transition-colors">
              Admissions Details
            </Link>
            <a href="mailto:kiarithainiboys@yahoo.com" className="inline-block bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground font-semibold px-8 py-3 rounded-md transition-colors border border-primary-foreground/20">
              Contact for Enquiries
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Gallery Preview */}
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading text-center text-navy mb-4">
            School <span className="text-gradient-gold">Gallery</span>
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-10 rounded-full" />
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {placeholders.map(({ label, color }, i) => (
            <AnimatedSection key={label} delay={i * 0.08}>
              <div className={`aspect-[4/3] rounded-lg bg-gradient-to-br ${color} flex items-center justify-center hover:scale-[1.02] transition-transform duration-300 cursor-pointer`}>
                <span className="text-sm font-semibold text-muted-foreground">{label}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.3}>
          <div className="text-center mt-6">
            <Link to="/gallery" className="inline-flex items-center gap-2 text-primary hover:text-gold font-semibold transition-colors">
              View full gallery <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Map */}
    <section className="section-padding bg-muted">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading text-center text-navy mb-4">
            Our <span className="text-gradient-gold">Location</span>
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-10 rounded-full" />
        </AnimatedSection>

        <AnimatedSection>
          <div className="rounded-xl overflow-hidden shadow-lg border border-border">
            <iframe
              title="Kiarithaini High School Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3989.7!2d37.14164!3d-0.45827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
              width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="text-center mt-6">
            <a href="https://www.google.com/maps/dir/?api=1&destination=-0.45827,37.14164" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary hover:bg-navy text-primary-foreground font-semibold px-6 py-3 rounded-md transition-colors">
              <MapPin size={18} /> Get Directions
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <Footer />
  </>
);

export default Index;
