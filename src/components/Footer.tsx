const Footer = () => (
  <footer className="bg-navy py-10 px-4">
    <div className="container mx-auto max-w-5xl text-center">
      <h3 className="font-heading text-primary-foreground text-lg mb-2">
        Kiarithaini <span className="text-gold">High School</span>
      </h3>
      <p className="text-primary-foreground/60 text-sm mb-1">
        P.O. Box 310 – 10101 Karatina, Nyeri County, Kenya
      </p>
      <p className="text-primary-foreground/60 text-sm mb-6">
        Phone: 0722 377 082 | Email: kiarithainiboys@yahoo.com
      </p>
      <div className="w-12 h-px bg-gold/40 mx-auto mb-4" />
      <p className="text-primary-foreground/40 text-xs">
        © {new Date().getFullYear()} Kiarithaini High School. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
