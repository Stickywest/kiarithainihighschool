import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Career & Campus", href: "/career-campus" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between h-16">
        <Link to="/" className="font-heading text-lg text-primary-foreground tracking-wide">
          Kiarithaini <span className="text-gold">High School</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden lg:flex gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                to={l.href}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  location.pathname === l.href
                    ? "text-gold"
                    : "text-primary-foreground/80 hover:text-gold"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button className="lg:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-navy border-t border-navy-light">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={() => setOpen(false)}
              className={`block w-full text-left px-6 py-3 transition-colors ${
                location.pathname === l.href
                  ? "text-gold bg-navy-light/30"
                  : "text-primary-foreground/80 hover:text-gold hover:bg-navy-light/30"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
