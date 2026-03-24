import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, FileText, Calendar, Phone, Mail, HelpCircle } from "lucide-react";

const steps = [
  { icon: FileText, title: "KCPE Results", desc: "Students sit for the Kenya Certificate of Primary Education (KCPE) examination in their respective primary schools." },
  { icon: Calendar, title: "Ministry Placement", desc: "The Ministry of Education places students to secondary schools based on their KCPE performance and school choices." },
  { icon: CheckCircle, title: "Admission Letter", desc: "Selected students receive an admission letter with reporting dates, fees structure, and requirements list." },
  { icon: Phone, title: "Reporting Day", desc: "Students report to school on the specified date with all required documents, school fees, and personal items." },
];

const requirements = [
  "Original KCPE result slip",
  "Admission letter from the Ministry of Education",
  "Birth certificate (original and copy)",
  "School fees as per the fees structure",
  "Medical examination report",
  "Passport-size photographs (4 copies)",
  "Personal effects as listed in the admission letter",
  "Previous school leaving certificate",
];

const faqs = [
  { q: "What is the school fees structure?", a: "Kiarithaini High School is a public school. Fees are set by the Ministry of Education and are affordable. Contact the school for the current fees structure." },
  { q: "Does the school accept transfer students?", a: "Yes, transfer students may be accepted subject to availability of space and approval by the school administration." },
  { q: "What items should students bring?", a: "A detailed list of required items is provided in the admission letter. This includes bedding, personal effects, and school supplies." },
  { q: "Is there a school bus service?", a: "As a boarding school, students reside on campus. Parents arrange transport for opening and closing days." },
];

const AdmissionsPage = () => (
  <>
    <Navbar />
    <PageHero title="Admissions" highlight="Information" subtitle="Join Kiarithaini High School — a public Extra-County boys' boarding school under the Ministry of Education." />

    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading text-center text-navy mb-4">
            Admission <span className="text-gradient-gold">Process</span>
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-12 rounded-full" />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <AnimatedSection key={title} delay={i * 0.1}>
              <div className="relative bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow h-full">
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gold text-secondary-foreground font-bold text-sm flex items-center justify-center">{i + 1}</div>
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-heading text-navy mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading text-center text-navy mb-4">
            Admission <span className="text-gradient-gold">Requirements</span>
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-10 rounded-full" />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-4">
          {requirements.map((r, i) => (
            <AnimatedSection key={r} delay={i * 0.05}>
              <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-4 hover:shadow-sm transition-shadow">
                <CheckCircle size={18} className="text-gold shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">{r}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* FAQs */}
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading text-center text-navy mb-4">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-10 rounded-full" />
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map(({ q, a }, i) => (
            <AnimatedSection key={q} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 mb-2">
                  <HelpCircle size={20} className="text-gold shrink-0 mt-0.5" />
                  <h3 className="font-semibold text-foreground">{q}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pl-8">{a}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Contact CTA */}
    <section className="section-padding bg-navy">
      <div className="container mx-auto max-w-3xl text-center">
        <AnimatedSection>
          <h2 className="text-3xl font-heading text-primary-foreground mb-4">
            Have <span className="text-gradient-gold">Questions?</span>
          </h2>
          <p className="text-primary-foreground/70 mb-8">Contact us for more information about admissions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+254722377082" className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-secondary-foreground font-semibold px-8 py-3 rounded-md transition-colors">
              <Phone size={18} /> Call Us
            </a>
            <a href="mailto:kiarithainiboys@yahoo.com" className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground font-semibold px-8 py-3 rounded-md transition-colors border border-primary-foreground/20">
              <Mail size={18} /> Email Us
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <Footer />
  </>
);

export default AdmissionsPage;
