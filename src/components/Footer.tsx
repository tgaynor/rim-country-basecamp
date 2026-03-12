import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { BOOKING_URL, PHONE, EMAIL, ADDRESS } from "@/lib/constants";

const footerLinks = [
  { label: "Rooms", to: "/rooms" },
  { label: "Explore Payson", to: "/explore" },
  { label: "Why Stay Here", to: "/why-stay" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">Rim Country Inn</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              A fully remodeled, family-owned hotel in the heart of Payson, Arizona — your adventure basecamp near the Mogollon Rim.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-semibold hover:bg-pine-light transition-colors"
            >
              BOOK NOW
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>{ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <a href={`tel:${PHONE}`} className="hover:text-primary-foreground transition-colors">{PHONE}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-primary-foreground transition-colors">{EMAIL}</a>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider mt-12 mb-6" />
        <p className="text-xs text-primary-foreground/40 text-center">
          © {new Date().getFullYear()} Rim Country Inn. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
