import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Atom, Palette, Users, Compass, GraduationCap, Lightbulb,
  Handshake, BookOpen, CheckCircle, ArrowRight, BrainCircuit,
  Briefcase, HeartPulse, Monitor, Landmark, Scale, Globe,
  Music, Trophy, Film, Dumbbell,
} from "lucide-react";

const pathways = [
  {
    icon: Atom,
    title: "STEM",
    tagline: "Science, Technology, Engineering & Mathematics",
    description:
      "Designed for students interested in engineering, medicine, IT, data science, and technical vocational careers.",
    subjects: [
      "Physics, Chemistry, Mathematics",
      "Biology, Chemistry, Mathematics",
      "Computer Studies, Mathematics, Physics",
    ],
    careers: [
      { icon: BrainCircuit, label: "Engineering" },
      { icon: HeartPulse, label: "Medicine" },
      { icon: Monitor, label: "IT & Data Science" },
      { icon: Briefcase, label: "Technical Vocations" },
    ],
    accent: "bg-sky-100 dark:bg-sky-900/30",
    iconBg: "bg-sky-500",
    border: "border-sky-200 dark:border-sky-800",
  },
  {
    icon: Palette,
    title: "Arts & Sports Science",
    tagline: "Creative Arts & Physical Education",
    description:
      "Tailored for creative and athletic talents, focusing on music, theatre, fine art, media studies, and sports management.",
    subjects: [
      "Sports Science, Biology, Chemistry",
      "Art & Design, Music, History",
      "Media Studies, Kiswahili, History",
    ],
    careers: [
      { icon: Music, label: "Music & Theatre" },
      { icon: Film, label: "Media & Film" },
      { icon: Trophy, label: "Sports Management" },
      { icon: Dumbbell, label: "Fitness & Coaching" },
    ],
    accent: "bg-gray-100 dark:bg-gray-800/40",
    iconBg: "bg-gray-500",
    border: "border-gray-200 dark:border-gray-700",
  },
  {
    icon: Users,
    title: "Social Sciences",
    tagline: "Humanities, Law & Business",
    description:
      "Geared towards humanities, law, economics, languages, and education, preparing students for careers in business, politics, and social studies.",
    subjects: [
      "History, Geography, CRE",
      "Business Studies, Mathematics, Geography",
      "History, CRE, Kiswahili",
    ],
    careers: [
      { icon: Scale, label: "Law" },
      { icon: Landmark, label: "Economics & Politics" },
      { icon: Globe, label: "Languages & Education" },
      { icon: Briefcase, label: "Business & Administration" },
    ],
    accent: "bg-sky-50 dark:bg-sky-950/30",
    iconBg: "bg-sky-400",
    border: "border-sky-100 dark:border-sky-900",
  },
];

const keyAspects = [
  {
    icon: Compass,
    title: "Pathway Selection (Grade 9/10)",
    desc: "Students make crucial choices based on their assessed competencies, interests, and temperament — rather than just exam scores. This ensures each learner follows a path aligned with their strengths.",
  },
  {
    icon: Lightbulb,
    title: "Learner-Centred Approach",
    desc: "The CBC focuses on practical skills, creativity, communication, and critical thinking. It encourages collaboration over competition, nurturing well-rounded individuals.",
  },
  {
    icon: Handshake,
    title: "Mentorship & Industry Exposure",
    desc: "Community and industry collaboration through internships, job shadowing, and mentorship programs prepare students for the real-world job market.",
  },
  {
    icon: BookOpen,
    title: "Career Compass Resources",
    desc: "Tools like the 'Moran CBE Pathways and Career Compass' help students understand their unique personalities and match them with suitable career paths.",
  },
];

const CareerPathwaysPage = () => (
  <>
    <Navbar />
    <PageHero
      title="Career"
      highlight="Pathways"
      subtitle="Kenya's Competency-Based Education (CBC) Career Compass — guiding Senior School students towards specialised career paths starting 2026."
    />

    {/* Intro */}
    <section className="section-padding bg-sky-50/50">
      <div className="container mx-auto max-w-4xl text-center">
        <AnimatedSection>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The <span className="font-semibold text-sky-600">Career Compass</span> for Kenya's
            Competency-Based Education (CBE/CBC) system is a structured framework designed to guide
            Senior School students (Grades 10–12) toward specialised career paths. It moves away from
            academic-only evaluation to a <span className="font-semibold text-sky-600">skills-based approach</span>,
            focusing on three core pathways.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Three Pathways */}
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading text-center text-navy mb-2">
            The Three <span className="text-sky-500">Core Pathways</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-xl mx-auto mb-4">
            Senior School students choose one pathway that aligns with their competencies and career goals.
          </p>
          <div className="w-16 h-1 bg-sky-400 mx-auto mb-12 rounded-full" />
        </AnimatedSection>

        <div className="space-y-10">
          {pathways.map(({ icon: Icon, title, tagline, description, subjects, careers, accent, iconBg, border }, i) => (
            <AnimatedSection key={title} delay={i * 0.15} direction={i % 2 === 0 ? "left" : "right"}>
              <div className={`${accent} ${border} border rounded-2xl p-6 md:p-8 transition-shadow hover:shadow-xl`}>
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Left */}
                  <div className="md:w-1/2">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading text-navy">{title}</h3>
                        <p className="text-xs text-muted-foreground">{tagline}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>

                    <h4 className="text-sm font-semibold text-foreground mb-2">Subject Combinations</h4>
                    <ul className="space-y-1.5">
                      {subjects.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle size={14} className="text-sky-500 mt-0.5 shrink-0" /> {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right — Career Paths */}
                  <div className="md:w-1/2 md:border-l md:border-gray-200 md:pl-6">
                    <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                      <ArrowRight size={14} className="text-sky-500" /> Career Paths
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {careers.map(({ icon: CIcon, label }) => (
                        <div
                          key={label}
                          className="flex items-center gap-3 bg-white/70 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 rounded-lg px-3 py-2.5 hover:shadow-md transition-shadow"
                        >
                          <CIcon size={18} className="text-sky-500 shrink-0" />
                          <span className="text-sm text-foreground font-medium">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Key Aspects */}
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading text-center text-navy mb-2">
            Key Aspects of the <span className="text-sky-500">Career Compass</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-xl mx-auto mb-4">
            How the CBC system empowers learners to make informed career decisions.
          </p>
          <div className="w-16 h-1 bg-sky-400 mx-auto mb-12 rounded-full" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {keyAspects.map(({ icon: Icon, title, desc }, i) => (
            <AnimatedSection key={title} delay={i * 0.12}>
              <div className="flex gap-5 bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow h-full">
                <div className="shrink-0 w-14 h-14 rounded-lg bg-sky-100 flex items-center justify-center">
                  <Icon size={26} className="text-sky-600" />
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

    {/* CTA */}
    <section className="section-padding bg-sky-600">
      <div className="container mx-auto max-w-3xl text-center">
        <AnimatedSection>
          <GraduationCap size={48} className="text-white/80 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-heading text-white mb-4">
            Ready to Explore Your Future?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
            At Kiarithaini High School, we are committed to guiding every student through the CBC
            Career Compass to discover their ideal pathway and build a successful future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="inline-block bg-white text-sky-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Apply Now
            </a>
            <a
              href="/contact"
              className="inline-block border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <Footer />
  </>
);

export default CareerPathwaysPage;
