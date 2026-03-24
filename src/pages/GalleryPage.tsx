import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

const galleries = [
  { category: "Campus", items: [
    { label: "Main Administration Block", color: "from-primary/20 to-accent" },
    { label: "Science Laboratories", color: "from-gold/20 to-accent" },
    { label: "School Library", color: "from-primary/30 to-muted" },
    { label: "Computer Lab", color: "from-gold/30 to-muted" },
  ]},
  { category: "Student Life", items: [
    { label: "Dormitories", color: "from-primary/20 to-muted" },
    { label: "Dining Hall", color: "from-gold/20 to-accent" },
    { label: "Assembly Ground", color: "from-primary/30 to-accent" },
    { label: "Study Hall", color: "from-gold/30 to-muted" },
  ]},
  { category: "Sports & Activities", items: [
    { label: "Football Field", color: "from-primary/20 to-accent" },
    { label: "Athletics Track", color: "from-gold/20 to-muted" },
    { label: "Drama Festival", color: "from-primary/30 to-muted" },
    { label: "Music Competitions", color: "from-gold/30 to-accent" },
  ]},
];

const GalleryPage = () => (
  <>
    <Navbar />
    <PageHero title="School" highlight="Gallery" subtitle="A glimpse into life at Kiarithaini High School." />

    {galleries.map(({ category, items }, gi) => (
      <section key={category} className={`section-padding ${gi % 2 === 1 ? "bg-muted" : ""}`}>
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-heading text-navy mb-2">{category}</h2>
            <div className="w-12 h-1 bg-gold mb-8 rounded-full" />
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map(({ label, color }, i) => (
              <AnimatedSection key={label} delay={i * 0.1}>
                <div className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${color} flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer border border-border`}>
                  <span className="text-sm font-semibold text-muted-foreground text-center px-2">{label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    ))}

    <section className="section-padding bg-navy">
      <div className="container mx-auto max-w-3xl text-center">
        <AnimatedSection>
          <h2 className="text-2xl font-heading text-primary-foreground mb-3">
            More Photos <span className="text-gradient-gold">Coming Soon</span>
          </h2>
          <p className="text-primary-foreground/60 text-sm">We are updating our gallery with new images of the school facilities and events.</p>
        </AnimatedSection>
      </div>
    </section>

    <Footer />
  </>
);

export default GalleryPage;
