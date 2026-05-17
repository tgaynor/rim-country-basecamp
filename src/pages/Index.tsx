import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  Mountain,
  Home,
  KeyRound,
  MapPin,
  Compass,
  TreePine,
  Fish,
  Waves,
  Tent,
  Car,
  Eye,
  Trophy,
  Calendar,
  Sun,
} from "lucide-react";
import Section from "@/components/Section";
import BookingButton from "@/components/BookingButton";
import heroImage from "@/assets/hero-landscape.jpg";
import roomQueen from "@/assets/room-queen.jpg";
import roomKing from "@/assets/room-king.jpg";
import roomDoubleQueen from "@/assets/room-double-queen.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import hikingTrail from "@/assets/hiking-trail.jpg";
import lakeFishing from "@/assets/lake-fishing.jpg";
import golfCourse from "@/assets/golf-course.jpg";
import riverCreek from "@/assets/river-creek.jpg";
import rodeoEvents from "@/assets/rodeo-events.jpg";
import hotelExterior from "@/assets/hotel-exterior.jpg";
import PolarisRentalSection from "@/components/PolarisRentalSection";

const benefits = [
  { icon: Home, title: "Fully Remodeled", desc: "Every room updated with modern finishes and comfort." },
  { icon: KeyRound, title: "Easy Self Check-In", desc: "Hassle-free keyless entry." },
  { icon: Mountain, title: "Adventure in Every Direction", desc: "Minutes from trails, lakes, rivers, and golf." },
  { icon: MapPin, title: "Central Payson Location", desc: "Steps from restaurants, shops, and services." },
  { icon: Compass, title: "Family-Owned Hospitality", desc: "Personal touches that big chains can't match." },
];

const rooms = [
  {
    name: "Single Queen",
    image: roomQueen,
    guests: "1–2 Guests",
    desc: "Ideal for solo travelers or couples. Remodeled room with modern finishes.",
  },
  {
    name: "Single King",
    image: roomKing,
    guests: "1–2 Guests",
    desc: "Extra space for couples. King bed with contemporary furnishings.",
  },
  {
    name: "Double Queen",
    image: roomDoubleQueen,
    guests: "2–4 Guests",
    desc: "Perfect for families or small groups. Two comfortable queen beds.",
  },
  {
    name: "3 Bed / 2 Bath Suite",
    image: roomSuite,
    guests: "4–8 Guests",
    desc: "Our largest option. Full kitchen, three bedrooms, two bathrooms and a sofabed — great for larger groups.",
  },
];

const activities = [
  { icon: TreePine, title: "Hiking & Trails", image: hikingTrail },
  { icon: Fish, title: "Lakes & Fishing", image: lakeFishing },
  { icon: Waves, title: "Rivers & Creeks", image: riverCreek },
  { icon: Trophy, title: "World-Class Golf", image: golfCourse },
  { icon: Calendar, title: "Rodeo & Events", image: rodeoEvents },
  { icon: Sun, title: "Family Adventures", image: lakeFishing },
];

const Index = () => {
  useEffect(() => {
    document.title = "Rim Country Inn | Hotel in Payson Arizona Near the Mogollon Rim";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description =
      "Rim Country Inn is a fully remodeled hotel in Payson, Arizona near the Mogollon Rim. Self check-in, modern rooms, and minutes from hiking, lakes, rivers, creeks, and world-class golf. Book direct for the best rates.";

    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    const robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      robotsMeta.setAttribute("content", "index, follow");
    } else {
      const meta = document.createElement("meta");
      meta.name = "robots";
      meta.content = "index, follow";
      document.head.appendChild(meta);
    }

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      canonical.href = "https://rimcountryinnpayson.com/";
    } else {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      canonical.href = "https://rimcountryinnpayson.com/";
      document.head.appendChild(canonical);
    }
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <img
          src={heroImage}
          alt="Mogollon Rim landscape near Payson, Arizona"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Stay Close to the Rim. Sleep <span className="italic">Better</span> in Payson.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-4 max-w-2xl leading-relaxed font-semibold">
              Fully automated, with no check-in desk or line.
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-10 max-w-2xl leading-relaxed">
              A fully remodeled, family-owned self-serve hotel in the heart of Payson, Arizona — minutes from hiking
              trails, lakes, rivers, creeks, and world-class golf.
            </p>
            <div className="flex flex-wrap gap-4">
              <BookingButton variant="primary" size="lg">
                Check Availability
              </BookingButton>
              <Link
                to="/rooms"
                className="inline-flex items-center justify-center font-semibold tracking-wide rounded-md border-2 border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-200 px-8 py-4 text-base"
              >
                View Rooms
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Guests Choose Us */}
      <Section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Your Payson Basecamp</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Why Guests Choose Rim Country Inn
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="text-center group">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <b.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Rooms Preview */}
      <Section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our Rooms</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Remodeled Rooms. Real Comfort.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rooms.map((room) => (
              <div
                key={room.name}
                className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold mb-1 text-foreground">{room.name}</h3>
                  <p className="text-xs font-medium text-primary mb-2">{room.guests}</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{room.desc}</p>
                  <BookingButton variant="outline" className="w-full text-xs">
                    Check Availability
                  </BookingButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <PolarisRentalSection />

      {/* Adventure Section */}
      <Section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Adventure Starts Here</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
                Your Gateway to Arizona&apos;s Rim Country
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Payson sits at the base of the Mogollon Rim, one of Arizona&apos;s most dramatic natural landmarks. From
                world-class hiking and fishing to scenic golf courses and the famous Payson Rodeo, adventure is always
                minutes away.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: Mountain, label: "Mogollon Rim Hiking" },
                  { icon: Fish, label: "Lakes & Fishing" },
                  { icon: Waves, label: "Rivers & Creeks" },
                  { icon: Trophy, label: "World-Class Golf" },
                  { icon: Tent, label: "Camping & Off-Roading" },
                  { icon: Eye, label: "Wildlife Viewing" },
                  { icon: Calendar, label: "Rodeo Events" },
                  { icon: Car, label: "Scenic Drives" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-sm text-foreground">
                    <item.icon size={16} className="text-primary shrink-0" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              <BookingButton variant="primary">Book Your Adventure</BookingButton>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={hikingTrail}
                alt="Hiking trail near Payson"
                className="rounded-lg object-cover w-full h-48 md:h-64"
                loading="lazy"
              />
              <img
                src={golfCourse}
                alt="Golf course near Payson"
                className="rounded-lg object-cover w-full h-48 md:h-64 mt-8"
                loading="lazy"
              />
              <img
                src={riverCreek}
                alt="Creek near Payson"
                className="rounded-lg object-cover w-full h-48 md:h-64"
                loading="lazy"
              />
              <img
                src={lakeFishing}
                alt="Lake fishing near Payson"
                className="rounded-lg object-cover w-full h-48 md:h-64 mt-8"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Explore Payson Preview */}
      <Section className="py-20 md:py-28 bg-charcoal">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-earth mb-3">Explore Payson</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground">
              Discover What&apos;s Waiting
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((act) => (
              <Link key={act.title} to="/explore" className="relative rounded-lg overflow-hidden aspect-[3/2] group">
                <img
                  src={act.image}
                  alt={act.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/50 transition-colors" />
                <div className="relative z-10 h-full flex items-end p-6">
                  <div className="flex items-center gap-3">
                    <act.icon size={20} className="text-primary-foreground" />
                    <h3 className="font-display text-xl font-semibold text-primary-foreground">{act.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/explore"
              className="inline-flex items-center justify-center font-semibold tracking-wide rounded-md border-2 border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-200 px-8 py-3 text-sm"
            >
              Explore All Activities
            </Link>
          </div>
        </div>
      </Section>

      {/* Family Story */}
      <Section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={hotelExterior}
                alt="Rim Country Inn exterior"
                className="rounded-lg shadow-lg w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our Story</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
                Family-Owned. Guest-Focused.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Rim Country Inn isn&apos;t just a place to sleep — it&apos;s a place where every detail is cared for by
                the family who owns it. We&apos;ve fully remodeled every room to give our guests a clean, comfortable,
                and modern experience at a price that makes sense.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you&apos;re here for a weekend escape from Phoenix, a week-long golf trip, or a family adventure
                in the Tonto National Forest, we&apos;re here to make sure your stay is exactly what you need.
              </p>
              <Link
                to="/why-stay"
                className="inline-flex items-center justify-center font-semibold tracking-wide rounded-md border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 px-6 py-3 text-sm"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="relative py-20 md:py-28">
        <img
          src={heroImage}
          alt="Mogollon Rim"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Your Payson adventure starts here.
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Book direct for the best rates and a personal welcome from our family to yours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <BookingButton variant="primary" size="lg">
              Check Availability
            </BookingButton>
            <BookingButton variant="hero-outline" size="lg">
              Book Direct
            </BookingButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
