import Section from "@/components/Section";
import BookingButton from "@/components/BookingButton";
import roomQueen from "@/assets/room-queen.jpg";
import roomKing from "@/assets/room-king.jpg";
import roomDoubleQueen from "@/assets/room-double-queen.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import heroImage from "@/assets/hero-landscape.jpg";

const roomData = [
  {
    name: "Single Queen",
    image: roomQueen,
    guests: "1–2 Guests",
    tagline: "Ideal for solo travelers or couples.",
    features: ["Queen bed", "Remodeled room", "Private bathroom", "Smart TV", "Easy self check-in", "Free WiFi"],
  },
  {
    name: "Single King",
    image: roomKing,
    guests: "1–2 Guests",
    tagline: "Extra space for couples wanting comfort.",
    features: ["King bed", "Modern furnishings", "Clean updated bathroom", "Smart TV", "Fast WiFi", "Self check-in"],
  },
  {
    name: "Double Queen",
    image: roomDoubleQueen,
    guests: "2–4 Guests",
    tagline: "Perfect for families or small groups.",
    features: ["Two queen beds", "Comfortable layout", "Remodeled bathroom", "Smart TV", "Free WiFi", "Self check-in"],
  },
  {
    name: "3 Bedroom / 2 Bath Suite",
    image: roomSuite,
    guests: "4–8 Guests",
    tagline: "Our largest option. Full kitchen, three bedrooms, two bathrooms and a sofabed — great for larger groups.",
    features: ["Three bedrooms", "Two bathrooms", "Spacious living area", "Great for groups", "Full remodel", "Self check-in"],
  },
];

const Rooms = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <img src={heroImage} alt="Payson landscape" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">Our Rooms</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Fully remodeled rooms designed for comfort, convenience, and great value.
          </p>
        </div>
      </section>

      {/* Rooms */}
      {roomData.map((room, i) => (
        <Section key={room.name} className={`py-20 md:py-28 ${i % 2 === 0 ? "bg-background" : "bg-secondary"}`}>
          <div className="container mx-auto px-4 md:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <img
                  src={room.image}
                  alt={room.name}
                  className="rounded-lg shadow-lg w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </div>
              <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{room.guests}</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">{room.name}</h2>
                <p className="text-lg text-muted-foreground mb-6">{room.tagline}</p>
                <ul className="grid grid-cols-2 gap-2 mb-8">
                  {room.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <BookingButton variant="primary">Check Availability</BookingButton>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* Final CTA */}
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

export default Rooms;
