import Section from "@/components/Section";
import BookingButton from "@/components/BookingButton";
import hikingTrail from "@/assets/hiking-trail.jpg";
import lakeFishing from "@/assets/lake-fishing.jpg";
import riverCreek from "@/assets/river-creek.jpg";
import golfCourse from "@/assets/golf-course.jpg";
import rodeoEvents from "@/assets/rodeo-events.jpg";
import heroImage from "@/assets/hero-landscape.jpg";

const sections = [
  {
    title: "Hiking & Trails",
    image: hikingTrail,
    content: "The Mogollon Rim offers some of the most breathtaking hiking in Arizona. From easy forest walks to challenging rim-edge trails, you'll find miles of paths through towering Ponderosa pines and dramatic cliff viewpoints. The Tonto National Forest surrounds Payson, offering endless exploration for hikers of every level.",
  },
  {
    title: "Lakes & Fishing",
    image: lakeFishing,
    content: "Payson is surrounded by beautiful mountain lakes perfect for fishing, kayaking, and relaxation. Woods Canyon Lake, Willow Springs Lake, and Bear Canyon Lake are just a short drive from town, offering excellent trout fishing and stunning scenery in the pines.",
  },
  {
    title: "Rivers & Creeks",
    image: riverCreek,
    content: "Tonto Creek, the East Verde River, and numerous smaller creeks wind through the forests around Payson. Whether you're fly fishing, swimming in natural pools, or simply enjoying the sound of running water, the waterways near Payson are a highlight of any visit.",
  },
  {
    title: "World-Class Golf",
    image: golfCourse,
    content: "Payson is home to stunning golf courses carved through pine forests with mountain views. Whether you're planning a weekend golf getaway or a week-long golf trip with friends, you'll find championship courses surrounded by some of the most beautiful natural scenery in Arizona.",
  },
  {
    title: "Rodeo & Events",
    image: rodeoEvents,
    content: "The world-famous Payson Rodeo draws visitors from across the country every August. Throughout the year, Payson hosts festivals, car shows, farmers markets, and seasonal celebrations that make every visit unique.",
  },
  {
    title: "Family Adventures",
    image: lakeFishing,
    content: "From scenic drives along the Rim Road to wildlife viewing in the national forest, Payson offers endless family-friendly activities. Visit local parks, explore historic sites, enjoy picnics by the creek, or simply take in the fresh mountain air and starry skies.",
  },
];

const Explore = () => {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <img src={heroImage} alt="Payson landscape" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">Explore Payson, Arizona</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Adventure, nature, and world-class golf in the heart of Arizona's Rim Country.
          </p>
        </div>
      </section>

      {sections.map((s, i) => (
        <Section key={s.title} className={`py-20 md:py-24 ${i % 2 === 0 ? "bg-background" : "bg-secondary"}`}>
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <img src={s.image} alt={s.title} className="rounded-lg shadow-lg w-full aspect-[4/3] object-cover" loading="lazy" />
              </div>
              <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.content}</p>
                <BookingButton variant="outline">Book Your Stay</BookingButton>
              </div>
            </div>
          </div>
        </Section>
      ))}

      <section className="relative py-20">
        <img src={heroImage} alt="Mogollon Rim" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">Ready to explore?</h2>
          <BookingButton variant="primary" size="lg">Check Availability</BookingButton>
        </div>
      </section>
    </>
  );
};

export default Explore;
