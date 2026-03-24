import { MapPin, Phone, Mail, School } from "lucide-react";

const details = [
  { icon: School, label: "Type", value: "Public Extra-County Boys' Boarding School" },
  { icon: MapPin, label: "Address", value: "P.O. Box 310 – 10101 Karatina, Nyeri County, Kenya" },
  { icon: Phone, label: "Phone", value: "0722 377 082", href: "tel:+254722377082" },
  { icon: Mail, label: "Email", value: "kiarithainiboys@yahoo.com", href: "mailto:kiarithainiboys@yahoo.com" },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-muted">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-heading text-center text-navy mb-4">
        About <span className="text-gradient-gold">Our School</span>
      </h2>
      <div className="w-16 h-1 bg-gold mx-auto mb-10 rounded-full" />

      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
        Kiarithaini High School is a public Extra-County boys' boarding school located in the scenic highlands of Mathira East, Nyeri County, Kenya. We are committed to nurturing well-rounded young men through academic excellence, strong moral values, and holistic development.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {details.map(({ icon: Icon, label, value, href }) => (
          <div key={label} className="flex items-start gap-4 bg-card p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
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
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
