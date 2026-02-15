import { onMount } from "solid-js";

export default function Privacy() {
  onMount(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <section class="container mx-auto px-4 md:px-8 py-16 max-w-4xl">
      {/* Header */}
      <div class="mb-10 animate-fade-in">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900">
          Privacy Policy
        </h1>
        <p class="mt-3 text-gray-600 text-sm">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div class="space-y-8 text-gray-700 leading-relaxed animate-slide-up">
        <p>
          YES Foundation respects your privacy and is committed to protecting
          any personal information you share with us. This Privacy Policy
          explains how we collect, use, and safeguard your information when you
          interact with our website.
        </p>

        <section>
          <h2 class="policy-title">Information We Collect</h2>
          <p>
            We do not collect personal data automatically. The only information
            we collect is what you voluntarily provide through our contact form,
            which may include:
          </p>
          <ul class="policy-list">
            <li>Your name</li>
            <li>Your email address</li>
            <li>The message you send to us</li>
          </ul>
        </section>

        <section>
          <h2 class="policy-title">How We Use Your Information</h2>
          <p>The information you submit is used only for the purpose of:</p>
          <ul class="policy-list">
            <li>Responding to your enquiry</li>
            <li>
              Communicating with you regarding volunteering, donations, or
              general questions
            </li>
          </ul>
          <p>
            We do not use your information for marketing, analytics, or
            tracking.
          </p>
        </section>

        <section>
          <h2 class="policy-title">Cookies & Tracking</h2>
          <p>
            YES Foundation does not use cookies, tracking pixels, analytics
            tools, or third-party advertising services on this website.
          </p>
        </section>

        <section>
          <h2 class="policy-title">Data Sharing</h2>
          <p>
            We do not sell, rent, or share your personal information with third
            parties. Your data is accessed only by authorized members of YES
            Foundation for communication purposes.
          </p>
        </section>

        <section>
          <h2 class="policy-title">Data Security</h2>
          <p>
            We take reasonable measures to protect your information from
            unauthorized access, misuse, or disclosure. However, no method of
            transmission over the internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 class="policy-title">Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your
            personal information by contacting us.
          </p>
        </section>

        <section>
          <h2 class="policy-title">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p class="font-medium mt-2">📧 yesfoundationsikkim@gmail.com</p>
        </section>
      </div>
    </section>
  );
}
