import Section from "@/components/Section";
import { EMAIL, PHONE, ADDRESS } from "@/lib/constants";

const PrivacyPolicy = () => {
  return (
    <div className="pt-20">
      <Section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm mb-8">
            Last updated: April 2, 2026
          </p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-10 mb-3">
            Introduction
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Rim Country Inn ("we," "us," or "our") is committed to protecting the privacy of our guests and website visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or stay at our property located at {ADDRESS}.
          </p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-10 mb-3">
            Information We Collect
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            We may collect information about you in a variety of ways, including:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>
              <strong className="text-foreground">Personal Data:</strong> Name, email address, phone number, and mailing address that you voluntarily provide when making a reservation or contacting us.
            </li>
            <li>
              <strong className="text-foreground">Payment Information:</strong> Payment details are processed securely through our third-party booking platform (Cloudbeds). We do not store credit card information on our servers.
            </li>
            <li>
              <strong className="text-foreground">Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, pages visited, and time spent on pages.
            </li>
          </ul>

          <h2 className="font-display text-xl font-semibold text-foreground mt-10 mb-3">
            How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Process and manage your reservations</li>
            <li>Send you check-in instructions and access codes</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Improve our website and guest experience</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="font-display text-xl font-semibold text-foreground mt-10 mb-3">
            Third-Party Services
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We use third-party services to facilitate our business operations, including our booking platform (Cloudbeds) and keyless entry system. These services have their own privacy policies, and we encourage you to review them. We do not sell, trade, or otherwise transfer your personal information to outside parties beyond what is necessary to operate our hotel.
          </p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-10 mb-3">
            Cookies
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can set your browser to refuse cookies, though some features of the website may not function properly without them.
          </p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-10 mb-3">
            Data Security
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-10 mb-3">
            Your Rights
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            You may request access to, correction of, or deletion of your personal information at any time by contacting us. If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA).
          </p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-10 mb-3">
            Changes to This Policy
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
          </p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-10 mb-3">
            Contact Us
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have questions about this Privacy Policy, please contact us:
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

export default PrivacyPolicy;
