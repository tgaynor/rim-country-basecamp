import Section from "@/components/Section";
import polarisRzr from "@/assets/polaris-rzr.jpg";
import arizonaAdventuresLogo from "@/assets/arizona-adventures-logo.svg";

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
          <div className="relative">
            <img
              src={polarisRzr}
              alt="Polaris RZR XP off-road UTV available for rent in Payson, Arizona"
              className="rounded-lg shadow-lg w-full aspect-[4/3] object-cover bg-secondary"
              loading="lazy"
            />
            <div className="absolute bottom-3 right-3 bg-charcoal rounded-md p-3 shadow-lg">
              <img
                src={arizonaAdventuresLogo}
                alt="Arizona Adventures logo"
                className="h-12 w-auto"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">
              Exclusive Rim Country Inn Guest Offer
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Save 15% on Polaris RZR Rentals — Just for Our Guests
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We&apos;ve partnered with Arizona Adventures to give Rim Country Inn guests a special 15% discount on
              brand-new high-end Polaris RZR rentals in Payson and Star Valley. Hit the trails along the Mogollon Rim
              and turn your stay into a true backcountry adventure — just minutes from the inn.
            </p>
            <p className="text-foreground font-semibold mb-6">
              Use our exclusive guest link to automatically apply your 15% discount.
            </p>
            <a
              href={ATV_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-semibold hover:bg-pine-light transition-colors"
            >
              Claim Your 15% Guest Discount
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PolarisRentalSection;
