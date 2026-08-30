import Section from "@/components/Section";
import Seo from "@/components/Seo";
import { EMAIL, PHONE, ADDRESS } from "@/lib/constants";

const TermsAndConditions = () => {
  return (
    <div className="pt-20">
      <Seo
        title="Terms & Conditions | Rim Country Inn Payson AZ"
        description="Terms and conditions for booking and staying at Rim Country Inn, a self-serve hotel in Payson, Arizona."
        path="/terms-and-conditions"
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Terms & Conditions", path: "/terms-and-conditions" }]}
      />
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

          <div className="section-divider my-12" />

          <h2 className="font-display text-xl font-semibold text-foreground mt-10 mb-3">
            We Are a Fully Automated Hotel
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Guests will receive an email, text, or message on the booking platform they used (Booking.com etc) at time of check-in with room number and access code. It is imperative to provide proper contact info to receive this information in a timely manner.
          </p>

          <h3 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">
            Cancellation Policy
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Cancellations must be done 5 days prior to the reservation depending on which platform you booked through. Cancellation fee is the cost of the first night. ALL CANCELLATIONS MUST AND CAN ONLY BE MADE THROUGH THE ORIGINAL BOOKING PLATFORM OR SOURCE. We do not accept cancellations by Email or Phone. Thank you for understanding.
          </p>

          <h3 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">
            1. At Check-In
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            You must be 18 years old and present to check into a room. A valid photo ID is required upon check-in.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Guests are kindly requested to adhere to the designated check-in time between 4:00 PM and 9:00 PM and the check-out time of 11:00 AM. Requests for early check-in or late check-out are subject to availability and may incur additional charges.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Two adults maximum for rooms with a single bed (Queen or King) and four people max for rooms with two beds. Additional persons may be accommodated for a fee. We love hosting families - bring the kids!
          </p>

          <h3 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">
            2. Operating Hours
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Self check-in is available at 4:00 PM.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Self-check out is available 24/7.
          </p>

          <h3 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">
            3. Room Damages
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Guests are responsible for the care and upkeep of their accommodations. Any damages to the room or its contents, whether accidental or otherwise, shall be subject to additional charges to cover the cost of repair or replacement.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            A room hold of up to $100 may be placed at check-in, at manager's discretion.
          </p>

          <h3 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">
            4. Disturbances and Refusal of Service
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            In the interest of maintaining a peaceful and hospitable environment for all patrons, management reserves the unequivocal right to expel any guests who engage in disruptive behavior or violate established policies. Furthermore, management retains the discretion to refuse service to any individual or group whose conduct is deemed incompatible with the ethos of our establishment.
          </p>

          <h3 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">
            5. Cooking Restrictions
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            For reasons of safety and preservation of our facilities, the use of hotplates, portable stoves, or any other external cooking apparatus within the confines of guest rooms is strictly prohibited. Guests are encouraged to utilize the dining facilities and amenities provided for their culinary needs.
          </p>

          <h3 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">
            6. Pets Policy
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            We extend a warm welcome to guests traveling with small pets, subject to prior approval and the payment of specified pet fees. To ensure the comfort and well-being of all guests, individuals intending to bring pets are advised to consult with management regarding applicable policies and associated charges before arrival.
          </p>

          <h3 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">
            7. Parking
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            One free parking spot per room reserved in the self-serve parking lot on property.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            For additional parking spots, please inquire with management regarding availability.
          </p>

          <h3 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">
            8. Liability Disclaimer
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            While every reasonable effort is made to ensure the safety and security of our guests and their belongings, the management of Rim Country Inn disclaims any and all liability for loss, damage, or injury sustained during the course of a guest's stay. Guests are encouraged to exercise due diligence in safeguarding their personal effects and valuables.
          </p>

          <h3 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">
            9. Stairs Related Injury Specific Waiver
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            While every reasonable effort is made to ensure the safety and security of our guests and their belongings, the management of Rim Country Inn disclaims any and all liability for loss, damage, or injury sustained during the course of a guest's stay. Guests are encouraged to exercise due diligence in safeguarding their personal effects and valuables. Not disclaiming any other waivers, this waiver in particular waives any and all claims by any person, and any and all liability to any person or business, related to stairs, steps or falls on the Rim Country Inn property. If persons are not comfortable navigating the property, it is their duty to leave and find service elsewhere.
          </p>

          <h3 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">
            10. Smoking Restrictions
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Guests may not smoke marijuana at any time on the premises - either in their room or on the property. The strong smell receives instant complaints. Any guests smoking marijuana will be immediately fined a non-refundable $250 fee, and asked to leave the premises. If they fail to comply with either, the Payson PD will arrive to handle trespassing.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Please do not smoke cigarettes directly next to other guests' windows, as they may be disturbed by the smell through their windows and coming and going. Smoking cigarettes is not allowed in rooms other than the designated Smoking Rooms. Any smoking of cigarettes in non-smoking designated rooms will result in an immediate, non-refundable $250 fine and eviction from the premises.
          </p>

          <div className="section-divider my-12" />

          <p className="text-muted-foreground leading-relaxed">
            Please review these terms and conditions thoroughly, as they form the basis of our contractual agreement with guests. Should you have any queries or require further clarification, please do not hesitate to contact our team for assistance.
          </p>

          <h3 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">
            Implied Consent
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            By staying at the Rim Country Inn, by stepping foot on the property, by paying for any services or using any services, or by even thinking about the Rim Country Inn, all persons agree to the following terms and conditions and otherwise shall be classified as trespassers.
          </p>

          <p className="text-muted-foreground leading-relaxed mt-6">
            We respect your privacy and only use your information to provide hotel services. By giving us your mobile number, you agree to receive SMS messages about reservations, updates, or offers. Message and data rates may apply. Reply STOP to opt out or HELP for assistance. We never sell or share your information with third parties for marketing.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default TermsAndConditions;
