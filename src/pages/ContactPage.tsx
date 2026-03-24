import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  { icon: MapPin, title: "Address", value: "P.O. Box 310 – 10101 Karatina, Nyeri County, Kenya" },
  { icon: Phone, title: "Phone", value: "0722 377 082", href: "tel:+254722377082" },
  { icon: Mail, title: "Email", value: "kiarithainiboys@yahoo.com", href: "mailto:kiarithainiboys@yahoo.com" },
  { icon: Clock, title: "Office Hours", value: "Monday – Friday: 8:00 AM – 5:00 PM" },
];

const lat = -0.45827;
const lng = 37.14164;

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  return (
    <>
      <Navbar />
      <PageHero title="Contact" highlight="Us" subtitle="Get in touch with Kiarithaini High School." />

      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <AnimatedSection direction="left">
                <h2 className="text-2xl md:text-3xl font-heading text-navy mb-6">
                  Get In <span className="text-gradient-gold">Touch</span>
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We'd love to hear from you. Whether you have questions about admissions, academics, or general inquiries, our team is ready to assist.
                </p>
              </AnimatedSection>

              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, title, value, href }, i) => (
                  <AnimatedSection key={title} delay={i * 0.1} direction="left">
                    <div className="flex items-start gap-4 bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="shrink-0 w-11 h-11 rounded-full bg-accent flex items-center justify-center">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{title}</p>
                        {href ? (
                          <a href={href} className="text-primary hover:text-gold transition-colors text-sm">{value}</a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{value}</p>
                        )}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <AnimatedSection direction="right">
              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-xl font-heading text-navy mb-6">Send a Message</h3>
                <form onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:kiarithainiboys@yahoo.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`; }} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Full Name</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Subject</label>
                    <input type="text" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="What is this about?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Your message..." />
                  </div>
                  <button type="submit" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-secondary-foreground font-semibold px-8 py-3 rounded-md transition-colors w-full justify-center">
                    <Send size={18} /> Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
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
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3989.7!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske`}
                width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="text-center mt-6">
              <a href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary hover:bg-navy text-primary-foreground font-semibold px-6 py-3 rounded-md transition-colors">
                <MapPin size={18} /> Get Directions
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;
