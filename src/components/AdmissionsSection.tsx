import { CheckCircle } from "lucide-react";

const points = [
  "Kiarithaini High School is a public institution under the Ministry of Education.",
  "Student placement is done by the Ministry of Education through the national placement system.",
  "The school admits boys from across multiple counties as an Extra-County boarding school.",
  "Parents and guardians are encouraged to visit the school for orientation upon admission.",
];

const AdmissionsSection = () => (
  <section id="admissions" className="section-padding bg-navy">
    <div className="container mx-auto max-w-4xl text-center">
      <h2 className="text-3xl md:text-4xl font-heading text-primary-foreground mb-4">
        Admissions <span className="text-gradient-gold">Information</span>
      </h2>
      <div className="w-16 h-1 bg-gold mx-auto mb-10 rounded-full" />

      <div className="text-left space-y-4 max-w-2xl mx-auto">
        {points.map((p) => (
          <div key={p} className="flex items-start gap-3">
            <CheckCircle size={20} className="text-gold shrink-0 mt-0.5" />
            <p className="text-primary-foreground/85 leading-relaxed">{p}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <a
          href="mailto:kiarithainiboys@yahoo.com"
          className="inline-block bg-gold hover:bg-gold-dark text-secondary-foreground font-semibold px-8 py-3 rounded-md transition-colors"
        >
          Contact for Enquiries
        </a>
      </div>
    </div>
  </section>
);

export default AdmissionsSection;
