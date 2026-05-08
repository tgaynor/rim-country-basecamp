import Section from "@/components/Section";
import polarisRzr from "@/assets/polaris-rzr.jpg";

const ATV_AFFILIATE_URL =
  "https://adventures.polaris.com/adventure/off-road-rentals-payson-star-valley-arizona-P-6JD-3V7/book?promoCode=az15";

interface PolarisRentalSectionProps {
  className?: string;
}

const PolarisRentalSection = ({ className = "py-20 md:py-24 bg-background" }: PolarisRentalSectionProps) => {
  return (
    <Section className={className}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={polarisRzr}
              alt="Polaris RZR XP off-road UTV available for rent in Payson, Arizona"
              className="rounded-lg shadow-lg w-full aspect-[4/3] object-cover bg-secondary"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Guest Perk</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Arizona Adventures — Polaris RZR Rentals
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Explore the Mogollon Rim and the trails around Payson and Star Valley in a brand-new high-end Polaris RZR.
              Arizona Adventures offers premium ATV &amp; UTV rentals just minutes from the inn — the perfect way to
              turn your stay into a backcountry adventure.
            </p>
            <p className="text-foreground font-semibold mb-6">Save 15% when you book through our link.</p>
            <a
              href={ATV_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-semibold hover:bg-pine-light transition-colors"
            >
              Book with 15% Off
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PolarisRentalSection;
