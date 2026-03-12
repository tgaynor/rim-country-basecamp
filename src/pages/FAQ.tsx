import Section from "@/components/Section";
import BookingButton from "@/components/BookingButton";
import heroImage from "@/assets/hero-landscape.jpg";

const faqs = [
  { q: "What time is check-in?", a: "Check-in is at 3:00 PM. Early check-in may be available upon request, depending on room availability." },
  { q: "What time is check-out?", a: "Check-out is at 11:00 AM. Late check-out may be available upon request." },
  { q: "How does self check-in work?", a: "After booking, you'll receive instructions for our keyless self check-in system. You can arrive and access your room on your own schedule — no need to visit the front desk." },
  { q: "Are pets allowed?", a: "Please contact us directly to discuss pet policies. We want to accommodate all our guests while keeping rooms clean and comfortable for everyone." },
  { q: "Is parking available?", a: "Yes! Free parking is available on-site for all guests, including standard vehicles." },
  { q: "Can I park a trailer?", a: "We have limited space for trailers and larger vehicles. Please contact us before your stay to confirm availability." },
  { q: "What is the cancellation policy?", a: "Cancellation policies may vary by rate and season. Please check the details during the booking process or contact us directly for questions." },
  { q: "What are office hours?", a: "Our self check-in system is available 24/7. For assistance, please reach out via phone or email during business hours." },
  { q: "How far is Payson from Phoenix?", a: "Payson is approximately 90 minutes northeast of Phoenix via AZ-87 (Beeline Highway). It's one of the most popular escapes for Valley residents." },
  { q: "What is there to do near the hotel?", a: "Rim Country Inn is surrounded by incredible outdoor recreation — hiking, fishing, golf, rivers, creeks, camping, off-roading, and the world-famous Payson Rodeo." },
];

const FAQ = () => {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <img src={heroImage} alt="Payson landscape" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Everything you need to know about staying at Rim Country Inn.
          </p>
        </div>
      </section>

      <Section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <section className="relative py-20">
        <img src={heroImage} alt="Mogollon Rim" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Still have questions?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <BookingButton variant="primary" size="lg">Check Availability</BookingButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
