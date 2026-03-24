import { motion } from "framer-motion";
import heroImg from "@/assets/hero-school.jpg";
import { Link } from "react-router-dom";

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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10 text-center px-4 max-w-3xl"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gold font-body tracking-[0.3em] uppercase text-sm mb-4"
      >
        Public Extra-County Boys' Boarding School
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-4xl md:text-6xl lg:text-7xl font-heading text-primary-foreground leading-tight mb-6"
      >
        Kiarithaini <br className="hidden sm:block" />
        <span className="text-gradient-gold">High School</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-primary-foreground/80 text-lg md:text-xl italic font-light mb-8"
      >
        "Strive for Excellence"
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Link
          to="/about"
          className="inline-block bg-gold hover:bg-gold-dark text-secondary-foreground font-semibold px-8 py-3 rounded-md transition-colors"
        >
          Discover More
        </Link>
        <Link
          to="/contact"
          className="inline-block bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground font-semibold px-8 py-3 rounded-md transition-colors border border-primary-foreground/20"
        >
          Contact Us
        </Link>
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
