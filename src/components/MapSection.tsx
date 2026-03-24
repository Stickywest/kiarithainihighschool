import { MapPin } from "lucide-react";

const lat = -0.45827;
const lng = 37.14164;

const MapSection = () => (
  <section id="contact" className="section-padding bg-muted">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-heading text-center text-navy mb-4">
        Our <span className="text-gradient-gold">Location</span>
      </h2>
      <div className="w-16 h-1 bg-gold mx-auto mb-10 rounded-full" />

      <div className="rounded-xl overflow-hidden shadow-lg border border-border">
        <iframe
          title="Kiarithaini High School Location"
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3989.7!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske`}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="text-center mt-6">
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary hover:bg-navy text-primary-foreground font-semibold px-6 py-3 rounded-md transition-colors"
        >
          <MapPin size={18} />
          Get Directions
        </a>
      </div>
    </div>
  </section>
);

export default MapSection;
