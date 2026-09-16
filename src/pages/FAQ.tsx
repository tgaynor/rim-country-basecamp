import Section from "@/components/Section";
import Seo from "@/components/Seo";
import BookingButton from "@/components/BookingButton";
import heroImage from "@/assets/hero-landscape.jpg";

const faqs = [
  { q: "What time is check-in?", a: "Check-in is at 4:00 PM. " },
  { q: "What time is check-out?", a: "Check-out is at 11:00 AM. " },
  { q: "How does self check-in work?", a: "After booking, you'll receive instructions for our keyless self check-in system. Prior to check in time, you will receive your unique access code via email and text. Check both. You can arrive and access your room at the check in time — no need to visit the front desk, we don't have one." },
  { q: "Are animals allowed?", a: "No, animals are not allowed at Rim Country Inn, with the exception of service animals as required by law." },
  { q: "Is parking available?", a: "Yes! Free parking is available on-site for all guests, including standard vehicles." },
  { q: "Can I park a trailer?", a: "We have limited space for trailers and larger vehicles. Please contact us before your stay to confirm availability." },
  { q: "What is the cancellation policy?", a: "Cancellation policies may vary by rate and season. Please check the details during the booking process or contact us directly for questions." },
  { q: "What are office hours?", a: "We don't have an office on site. For assistance, please reach out via phone (text or call) or email during business hours." },
  { q: "How far is Payson from Phoenix?", a: "Payson is approximately 90 minutes northeast of Phoenix via AZ-87 (Beeline Highway). It's one of the most popular escapes for Valley residents." },
  { q: "What is there to do near the hotel?", a: "Rim Country Inn is surrounded by incredible outdoor recreation — hiking, fishing, golf, rivers, creeks, camping, off-roading, and the world-famous Payson Rodeo." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a.trim() },
  })),
};

const FAQ = () => {
  return (
    <>
      <Seo
        title="FAQ | Rim Country Inn Payson AZ Hotel"
        description="Answers about self check-in, check-in/out times, parking, animals, and cancellations at Rim Country Inn in Payson, AZ."
        path="/faq"
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }]}
        jsonLd={faqJsonLd}
      />
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
          <h2 className="sr-only">Common questions</h2>
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
