import heroImg from "@/assets/hero-school.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <img
      src={heroImg}
      alt="Kiarithaini High School campus"
      width={1920}
      height={1080}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/90" />
    <div className="relative z-10 text-center px-4 max-w-3xl animate-fade-in-up">
      <p className="text-gold font-body tracking-[0.3em] uppercase text-sm mb-4">
        Public Extra-County Boys' Boarding School
      </p>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading text-primary-foreground leading-tight mb-6">
        Kiarithaini <br className="hidden sm:block" />
        <span className="text-gradient-gold">High School</span>
      </h1>
      <p className="text-primary-foreground/80 text-lg md:text-xl italic font-light mb-8">
        "Strive for Excellence"
      </p>
      <a
        href="#about"
        onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}
        className="inline-block bg-gold hover:bg-gold-dark text-secondary-foreground font-semibold px-8 py-3 rounded-md transition-colors"
      >
        Discover More
      </a>
    </div>
  </section>
);

export default HeroSection;
