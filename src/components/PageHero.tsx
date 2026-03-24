import { motion } from "framer-motion";
import heroImg from "@/assets/hero-school.jpg";

interface Props {
  title: string;
  highlight: string;
  subtitle?: string;
}

const PageHero = ({ title, highlight, subtitle }: Props) => (
  <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden">
    <img src={heroImg} alt="Kiarithaini High School" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/70 to-navy/90" />
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative z-10 text-center px-4 pt-16"
    >
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading text-primary-foreground leading-tight mb-3">
        {title} <span className="text-gradient-gold">{highlight}</span>
      </h1>
      {subtitle && <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  </section>
);

export default PageHero;
