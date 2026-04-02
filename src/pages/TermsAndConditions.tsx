import Section from "@/components/Section";
import { EMAIL, PHONE, ADDRESS } from "@/lib/constants";

const TermsAndConditions = () => {
  return (
    <div className="pt-20">
      <Section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Terms &amp; Conditions
          </h1>
          <p className="text-muted-foreground text-sm mb-8">
            Last updated: April 2, 2026
          </p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-10 mb-3">
            Agreement to Terms
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            By accessing our website or booking a stay at Rim Country Inn located at {ADDRESS}, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services.
          </p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-10 mb-3">
            Reservations &amp; Payments
          </h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>All reservations are processed through our third-party booking platform (Cloudbeds).</li>
            <li>Full payment or a valid credit card is required at the time of booking.</li>
            <li>Rates are subject to change and may vary based on availability, season, and length of stay.</li>
            <li>Additional fees or taxes may apply as required by law.</li>
          </ul>

          <h2 className="font-display text-xl font-semibold text-foreground mt-10 mb-3">
            Check-In &amp; Check-Out
          </h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Check-in time is 4:00 PM. Check-out time is 11:00 AM.</li>
            <li>We use a keyless self check-in system. Access codes are sent via email and text prior to your arrival.</li>
            <li>Early check-in and late check-out are not guaranteed and may be subject to availability and additional fees.</li>
          </ul>

          <h2 className="font-display text-xl font-semibold text-foreground mt-10 mb-3">
            Cancellation Policy
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Cancellation policies vary by rate and room type. Please review the specific cancellation terms provided at the time of booking. No-shows may be charged the full reservation amount.
          </p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-10 mb-3">
            Guest Conduct
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Guests are expected to treat the property, furnishings, and surrounding areas with care and respect. We reserve the right to charge for any damages caused during your stay. Excessive noise, illegal activity, or disruptive behavior may result in immediate removal from the property without refund.
          </p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-10 mb-3">
            Liability
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Rim Country Inn is not responsible for any loss, theft, or damage to personal belongings during your stay. Guests are responsible for their own safety and the safety of their party. Use of the property and its amenities is at your own risk.
          </p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-10 mb-3">
            Website Use
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            All content on this website, including text, images, and design, is the property of Rim Country Inn and may not be reproduced without permission. We make every effort to ensure the accuracy of information on our website but do not guarantee that all details are error-free or up to date.
          </p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-10 mb-3">
            Changes to These Terms
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page with an updated revision date. Continued use of our website or services constitutes acceptance of the revised terms.
          </p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-10 mb-3">
            Contact Us
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have questions about these Terms and Conditions, please contact us:
          </p>
          <ul className="list-none pl-0 text-muted-foreground space-y-1 mt-3">
            <li>Email: <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">{EMAIL}</a></li>
            <li>Phone: <a href={`tel:${PHONE}`} className="text-primary hover:underline">{PHONE}</a></li>
            <li>Address: {ADDRESS}</li>
          </ul>
        </div>
      </Section>
    </div>
  );
};

export default TermsAndConditions;
