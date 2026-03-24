import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Briefcase, Building2, Beaker, BookOpen, Dumbbell, Utensils, Home, Wifi, GraduationCap, TrendingUp, Compass, Users } from "lucide-react";

const facilities = [
  { icon: Beaker, title: "Science Laboratories", desc: "Well-equipped physics, chemistry, and biology labs for practical learning." },
  { icon: BookOpen, title: "Library & Resource Centre", desc: "A comprehensive library with textbooks, reference materials, and digital resources." },
  { icon: Building2, title: "Computer Laboratory", desc: "Modern computer lab with internet connectivity for ICT studies and research." },
  { icon: Dumbbell, title: "Sports Facilities", desc: "Football pitch, basketball court, volleyball court, and athletics track." },
  { icon: Utensils, title: "Dining Hall", desc: "Spacious dining hall serving balanced, nutritious meals to all students." },
  { icon: Home, title: "Dormitories", desc: "Clean, secure boarding facilities with adequate space for comfortable living." },
  { icon: Wifi, title: "ICT Infrastructure", desc: "Wi-Fi connectivity and digital learning tools to support modern education." },
  { icon: Building2, title: "Assembly Hall", desc: "Multi-purpose hall for assemblies, events, meetings, and examinations." },
];

const careerPrograms = [
  { icon: GraduationCap, title: "Career Guidance & Counselling", desc: "Professional career counsellors help students identify their strengths, interests, and suitable career paths aligned with their academic performance." },
  { icon: TrendingUp, title: "University & College Preparation", desc: "Workshops on KUCCPS applications, university selection, scholarship opportunities, and preparation for higher education." },
  { icon: Compass, title: "Career Days & Mentorship", desc: "Regular career day events featuring professionals from various fields, alumni talks, and mentorship programs connecting students with industry leaders." },
  { icon: Users, title: "Life Skills & Entrepreneurship", desc: "Programs on financial literacy, entrepreneurship, leadership skills, and personal development to prepare students for life beyond school." },
];

const clubs = [
  "Science Club", "Mathematics Club", "Debate Club", "Drama Club",
  "Music Club", "Environmental Club", "Young Farmers Club", "Journalism Club",
  "Christian Union", "Red Cross Society", "Scouts Movement", "ICT Club",
];

const CareerCampusPage = () => (
  <>
    <Navbar />
    <PageHero title="Career &" highlight="Campus" subtitle="World-class facilities and comprehensive career guidance for every student." />

    {/* Campus Facilities */}
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading text-center text-navy mb-4">
            Campus <span className="text-gradient-gold">Facilities</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-4">Our campus is equipped with modern facilities to support academic excellence and holistic student development.</p>
          <div className="w-16 h-1 bg-gold mx-auto mb-12 rounded-full" />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map(({ icon: Icon, title, desc }, i) => (
            <AnimatedSection key={title} delay={i * 0.08}>
              <div className="group bg-card border border-border rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <Icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-base font-heading text-navy mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Career Guidance */}
    <section className="section-padding bg-muted">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading text-center text-navy mb-4">
            Career <span className="text-gradient-gold">Guidance</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-4">Preparing students for successful careers through structured guidance and mentorship programs.</p>
          <div className="w-16 h-1 bg-gold mx-auto mb-12 rounded-full" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {careerPrograms.map(({ icon: Icon, title, desc }, i) => (
            <AnimatedSection key={title} delay={i * 0.12} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="flex gap-5 bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow h-full">
                <div className="shrink-0 w-14 h-14 rounded-lg bg-accent flex items-center justify-center">
                  <Icon size={26} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-heading text-navy mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Clubs & Activities */}
    <section className="section-padding bg-navy">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading text-center text-primary-foreground mb-4">
            Clubs & <span className="text-gradient-gold">Activities</span>
          </h2>
          <p className="text-center text-primary-foreground/60 max-w-xl mx-auto mb-4">Beyond academics, students engage in a variety of clubs and co-curricular activities.</p>
          <div className="w-16 h-1 bg-gold mx-auto mb-10 rounded-full" />
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {clubs.map((club, i) => (
            <AnimatedSection key={club} delay={i * 0.05}>
              <div className="bg-navy-light/30 border border-primary-foreground/10 rounded-lg p-4 text-center hover:bg-navy-light/50 hover:border-gold/30 transition-all cursor-default">
                <Briefcase size={18} className="text-gold mx-auto mb-2" />
                <p className="text-sm text-primary-foreground/80 font-medium">{club}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </>
);

export default CareerCampusPage;
