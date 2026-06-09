import Section from "@/components/Section";
import Seo from "@/components/Seo";
import BookingButton from "@/components/BookingButton";
import { Home, KeyRound, MapPin, DollarSign, Heart } from "lucide-react";
import hotelExterior from "@/assets/hotel-exterior.jpg";
import heroImage from "@/assets/hero-landscape.jpg";

const reasons = [
  {
    icon: Home,
    title: "Fully Remodeled Property",
    desc: "Every room in our 23-unit property has been fully renovated with modern finishes, new furnishings, and updated bathrooms. You'll enjoy a clean, fresh, and comfortable space — not the tired rooms you might expect from a small-town hotel.",
  },
  {
    icon: DollarSign,
    title: "Great Value",
    desc: "We believe great rooms shouldn't cost a fortune. Our fully remodeled property offers exceptional comfort and cleanliness at a price that makes sense for travelers, families, and groups.",
  },
  {
    icon: MapPin,
    title: "Perfect Payson Location",
    desc: "Located on the Beeline Highway in central Payson, you're minutes from restaurants, shops, trails, lakes, and golf courses. It's the ideal basecamp for exploring everything Rim Country has to offer.",
  },
  {
    icon: Heart,
    title: "Family-Owned Hospitality",
    desc: "We're not a faceless chain. Rim Country Inn is owned and operated by a family that takes pride in every guest experience. From the moment you arrive, you'll feel the personal touch that makes our hotel special.",
  },
  {
    icon: KeyRound,
    title: "Easy Self Check-In",
    desc: "No waiting in line. Our self check-in system is technology enabled, perfect for late arrivals or travelers who want a seamless experience.",
  },
];

const WhyStay = () => {
  return (
    <>
      <Seo
        title="Why Stay at Rim Country Inn | Payson AZ Hotel"
        description="Family-owned, fully remodeled 23-room hotel in Payson, AZ. Self check-in, great value, central location near the Mogollon Rim."
        path="/why-stay"
      />
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <img src={hotelExterior} alt="Rim Country Inn exterior" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">Why Stay With Us</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Modern rooms. Family values. An unbeatable location in Payson, Arizona.
          </p>
        </div>
      </section>

      {reasons.map((r, i) => (
        <Section key={r.title} className={`py-16 md:py-20 ${i % 2 === 0 ? "bg-background" : "bg-secondary"}`}>
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <r.icon size={22} className="text-primary" />
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">{r.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </div>
          </div>
        </Section>
      ))}

      <section className="relative py-20">
        <img src={heroImage} alt="Mogollon Rim" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Your Payson adventure starts here.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <BookingButton variant="primary" size="lg">Check Availability</BookingButton>
            <BookingButton variant="hero-outline" size="lg">Book Direct</BookingButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyStay;
