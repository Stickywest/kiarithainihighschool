const placeholders = [
  { label: "School Main Block", color: "from-primary/20 to-accent" },
  { label: "Science Laboratory", color: "from-gold/20 to-accent" },
  { label: "Sports Field", color: "from-primary/20 to-muted" },
  { label: "Assembly Hall", color: "from-gold/20 to-muted" },
  { label: "Library", color: "from-primary/30 to-accent" },
  { label: "Dormitories", color: "from-gold/30 to-accent" },
];

const GallerySection = () => (
  <section id="gallery" className="section-padding">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-heading text-center text-navy mb-4">
        School <span className="text-gradient-gold">Gallery</span>
      </h2>
      <div className="w-16 h-1 bg-gold mx-auto mb-10 rounded-full" />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {placeholders.map(({ label, color }) => (
          <div
            key={label}
            className={`aspect-[4/3] rounded-lg bg-gradient-to-br ${color} flex items-center justify-center hover:scale-[1.02] transition-transform duration-300 cursor-pointer`}
          >
            <span className="text-sm font-semibold text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground mt-6 italic">Photos coming soon</p>
    </div>
  </section>
);

export default GallerySection;
