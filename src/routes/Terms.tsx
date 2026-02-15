import { onMount } from "solid-js";

export default function Terms() {
  onMount(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <section class="container mx-auto px-4 md:px-8 py-16 max-w-4xl">
      {/* Header */}
      <div class="mb-10 animate-fade-in">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900">
          Terms & Conditions
        </h1>
        <p class="mt-3 text-gray-600 text-sm">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div class="space-y-8 text-gray-700 leading-relaxed animate-slide-up">
        <p>
          Welcome to the YES Foundation website. By accessing or using this
          website, you agree to comply with and be bound by the following Terms
          and Conditions.
        </p>

        <section>
          <h2 class="policy-title">About YES Foundation</h2>
          <p>
            YES Foundation is a non-profit organization working towards youth
            empowerment and community development in Sikkim, India.
          </p>
        </section>

        <section>
          <h2 class="policy-title">Use of Website</h2>
          <p>
            This website is intended to provide information about our
            initiatives, projects, and activities. You agree not to misuse the
            website or use it for unlawful purposes.
          </p>
        </section>

        <section>
          <h2 class="policy-title">Donations</h2>
          <p>
            Donations made through this website may be processed via third-party
            payment platforms. YES Foundation is not responsible for issues
            arising from external payment services.
          </p>
        </section>

        <section>
          <h2 class="policy-title">Intellectual Property</h2>
          <p>
            All content on this website, including text, images, and logos, is
            the property of YES Foundation unless otherwise stated. You may not
            reproduce or distribute content without permission.
          </p>
        </section>

        <section>
          <h2 class="policy-title">Limitation of Liability</h2>
          <p>
            While we strive to keep information accurate and up to date, YES
            Foundation makes no warranties regarding completeness or accuracy
            and shall not be liable for any damages arising from use of this
            website.
          </p>
        </section>

        <section>
          <h2 class="policy-title">External Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the content or privacy practices of those sites.
          </p>
        </section>

        <section>
          <h2 class="policy-title">Changes to These Terms</h2>
          <p>
            YES Foundation may update these Terms & Conditions at any time.
            Continued use of the website indicates acceptance of the updated
            terms.
          </p>
        </section>

        <section>
          <h2 class="policy-title">Contact</h2>
          <p>
            If you have questions regarding these Terms, please contact us at:
          </p>
          <p class="font-medium mt-2">📧 yesfoundationsikkim@gmail.com</p>
        </section>
      </div>
    </section>
  );
}
