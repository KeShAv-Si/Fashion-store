import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="border-t pt-10 px-4 sm:px-10 md:px-20 lg:px-32">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: November 28, 2025</p>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
            <p>
              Welcome to UrbanZila. We respect your privacy and are committed to
              protecting your personal data. This privacy policy will inform you
              about how we look after your personal data when you visit our
              website and tell you about your privacy rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-2">
              We may collect, use, store and transfer different kinds of
              personal data about you:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Identity Data:</strong> Name, username, or similar
                identifier
              </li>
              <li>
                <strong>Contact Data:</strong> Email address, telephone numbers,
                and billing/delivery addresses
              </li>
              <li>
                <strong>Transaction Data:</strong> Details about payments and
                orders you have made
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type,
                device information
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our
                website and services
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              3. How We Use Your Information
            </h2>
            <p className="mb-2">We use your personal data to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Process and deliver your orders</li>
              <li>Manage your account and provide customer support</li>
              <li>Send you important updates about your orders</li>
              <li>Improve our website and services</li>
              <li>
                Send you marketing communications (with your consent)
              </li>
              <li>Prevent fraud and enhance security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Data Security</h2>
            <p>
              We have implemented appropriate security measures to prevent your
              personal data from being accidentally lost, used, or accessed in an
              unauthorized way. We limit access to your personal data to those
              employees, agents, contractors, and other third parties who have a
              business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Your Rights</h2>
            <p className="mb-2">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Cookies</h2>
            <p>
              Our website uses cookies to distinguish you from other users. This
              helps us to provide you with a good experience when you browse our
              website and also allows us to improve our site. You can set your
              browser to refuse all or some browser cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Third-Party Links</h2>
            <p>
              Our website may include links to third-party websites, plug-ins,
              and applications. Clicking on those links or enabling those
              connections may allow third parties to collect or share data about
              you. We do not control these third-party websites and are not
              responsible for their privacy statements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as necessary to
              fulfill the purposes we collected it for, including for the
              purposes of satisfying any legal, accounting, or reporting
              requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              9. Changes to This Privacy Policy
            </h2>
            <p>
              We may update our privacy policy from time to time. We will notify
              you of any changes by posting the new privacy policy on this page
              and updating the "Last updated" date at the top of this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">10. Contact Us</h2>
            <p className="mb-2">
              If you have any questions about this privacy policy or our privacy
              practices, please contact us:
            </p>
            <ul className="space-y-1">
              <li>
                <strong>Email:</strong> contact@urbanzila.com
              </li>
              <li>
                <strong>Phone:</strong> +91 9060992250
              </li>
              <li>
                <strong>Address:</strong> Tolichowki 50008 Near Alpha Functional
                Hall
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-10 mb-10 pt-6 border-t">
          <p className="text-sm text-gray-500 text-center">
            By using UrbanZila, you consent to the terms of this Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
