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

          <div className="section-divider my-12" />

          <h2 className="font-display text-xl font-semibold text-foreground mt-10 mb-3">
            SMS Notification Program
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The Rim Country Inn offers a transactional SMS notification program ("Hotel SMS Service") to improve guest experience and streamline internal operations.
          </p>

          <h3 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">
            Program Description
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Guests who provide their mobile phone number during booking or check-in will receive important service-related SMS messages such as room assignments, door access codes, check-in instructions, and stay updates. Hotel staff and owners may also receive internal operational messages for housekeeping coordination and property management.
          </p>

          <h3 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">
            Message Frequency
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Guests typically receive 2–5 messages per stay. Staff may receive operational messages as needed.
          </p>

          <h3 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">
            Message and Data Rates
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Message and data rates may apply. Charges are billed by your mobile carrier. Contact your carrier for details.
          </p>

          <h3 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">
            Support and Help
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            For help or more information, reply HELP to any message or contact us at{" "}
            <a href="mailto:george@pghappyjackholdings.com" className="text-primary hover:underline">george@pghappyjackholdings.com</a>.
          </p>

          <h3 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">
            Opt-Out Instructions
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            To stop receiving messages, reply STOP to any message we send. You will receive one final confirmation message and will no longer receive SMS from this program. You may re-opt-in at any time by providing your number again.
          </p>

          <h3 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">
            Privacy
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Your phone number is used only for transactional purposes and is not shared with third parties for marketing. See our full{" "}
            <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> for details.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default TermsAndConditions;
