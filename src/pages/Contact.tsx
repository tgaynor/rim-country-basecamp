import Section from "@/components/Section";
import BookingButton from "@/components/BookingButton";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PHONE, EMAIL, ADDRESS } from "@/lib/constants";
import hotelExterior from "@/assets/hotel-exterior.jpg";

const Contact = () => {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <img src={hotelExterior} alt="Rim Country Inn" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Have a question? We'd love to hear from you.
          </p>
        </div>
      </section>

      <Section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-sm text-muted-foreground">{ADDRESS}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a href={`tel:${PHONE}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{PHONE}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href={`mailto:${EMAIL}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{EMAIL}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Self Check-In</h3>
                    <p className="text-sm text-muted-foreground">Available 24/7 with keyless entry</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <BookingButton variant="primary" size="lg">Book Your Stay</BookingButton>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg h-80 lg:h-auto min-h-[320px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3362.5!2d-111.325!3d34.23!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872e1f2bf4ef5555%3A0x1234567890abcdef!2s811+S+Beeline+Hwy%2C+Payson%2C+AZ+85541!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rim Country Inn Location"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
