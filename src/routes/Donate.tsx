// src/routes/Donate.tsx
import { A } from "@solidjs/router";

export default function Donate() {
  return (
    <main class="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-white to-brand-light py-16">
      <div class="max-w-3xl mx-auto px-6">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-extrabold text-brand mb-4">
            Support YES Foundation
          </h1>

          <p class="text-lg text-gray-700 mb-6">
            Thank you for your generosity and interest in supporting our work.
            At the moment, the online donation module is not available. We are
            actively working to implement a secure, easy-to-use donation system
            that will allow one-time and recurring contributions through trusted
            payment providers.
          </p>

          <div class="max-w-xl mx-auto text-left bg-white rounded-xl shadow-md p-6 mb-6">
            <p class="font-semibold text-brand mb-3">What this means</p>
            <ul class="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                There is currently <strong>no online payment processing</strong>{" "}
                on this site.
              </li>
              <li>
                When the donation feature arrives, it will support secure
                transactions, receipts, and donation options tailored to our
                programmes.
              </li>
              <li>
                Meanwhile, you can contact us directly for assistance or to
                arrange donations offline via bank transfer or cheque.
              </li>
            </ul>

            <div class="mt-4 text-sm text-gray-600">
              <p>
                Email:{" "}
                <a
                  class="text-brand underline"
                  href="mailto:yesfoundationsikkim@gmail.com"
                >
                  yesfoundationsikkim@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a class="text-brand underline" href="tel:+916297273900">
                  +91 62972 73900
                </a>
              </p>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <A
              href="/"
              class="inline-block px-6 py-3 bg-brand text-white rounded-lg font-semibold shadow hover:bg-accent transition-colors"
            >
              Return to Home
            </A>

            <button
              disabled
              aria-disabled="true"
              class="inline-block px-6 py-3 bg-white text-gray-400 rounded-lg border border-gray-200 font-medium cursor-not-allowed"
              title="Donation module not yet available"
            >
              Donate (coming soon)
            </button>
          </div>

          <p class="text-sm text-gray-500 mt-6">
            We appreciate your patience — enabling secure online donations is a
            high priority for us. If you would like to be notified when
            donations are available, please contact us at the email above.
          </p>
        </div>
      </div>
    </main>
  );
}
