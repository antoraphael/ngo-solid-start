import { ORG } from "../lib/content";

export default function Contact() {
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    ORG.contact.email,
  )}`;

  return (
    <section class="relative overflow-hidden py-20">
      {/* Background glow (decorative → ignore clicks) */}
      <div class="pointer-events-none absolute -top-32 -left-32 h-96 w-96 bg-brand/20 blur-3xl rounded-full animate-pulse" />
      <div class="pointer-events-none absolute top-1/3 -right-32 h-96 w-96 bg-purple-400/20 blur-3xl rounded-full animate-pulse delay-300" />

      <div class="relative container mx-auto px-4">
        {/* Header */}
        <div class="text-center mb-16 animate-fade-in">
          <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Let’s <span class="text-brand">Connect</span>
          </h1>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg">
            Have a question, want to collaborate, or volunteer with us? We’re
            just one message away.
          </p>
        </div>

        {/* Cards */}
        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Email Card */}
          <div class="group relative bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            {/* glow ring (IMPORTANT: pointer-events-none) */}
            <div class="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-brand/20 opacity-0 group-hover:opacity-100 transition" />

            <div class="flex items-center gap-4 mb-6">
              <div class="h-14 w-14 rounded-2xl bg-brand text-white flex items-center justify-center text-2xl transform group-hover:rotate-6 group-hover:scale-110 transition duration-300">
                ✉️
              </div>
              <h2 class="text-2xl font-semibold">Email Us</h2>
            </div>

            <p class="text-gray-600 mb-6 leading-relaxed">
              For volunteering, partnerships, media enquiries, or general
              questions, email is the fastest way to reach us.
            </p>

            <p class="mb-8">
              <a
                href={`mailto:${ORG.contact.email}`}
                class="text-brand font-medium underline underline-offset-4 break-all cursor-pointer hover:opacity-80 transition"
              >
                {ORG.contact.email}
              </a>
            </p>

            <div class="flex gap-4 flex-wrap">
              {/* Gmail button (NOW CLICKABLE) */}
              <a
                href={gmailLink}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:bg-brand-dark transition-all duration-300 cursor-pointer"
              >
                Open in Gmail →
              </a>

              {/* Mail app fallback */}
              <a
                href={`mailto:${ORG.contact.email}`}
                class="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 hover:border-brand hover:text-brand transition cursor-pointer"
              >
                Email App
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div class="group relative bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            {/* glow ring (IMPORTANT) */}
            <div class="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-brand/20 opacity-0 group-hover:opacity-100 transition" />

            <div class="flex items-center gap-4 mb-6">
              <div class="h-14 w-14 rounded-2xl bg-brand text-white flex items-center justify-center text-2xl transform group-hover:-rotate-6 group-hover:scale-110 transition duration-300">
                📞
              </div>
              <h2 class="text-2xl font-semibold">Call Us</h2>
            </div>

            <p class="text-gray-600 mb-6 leading-relaxed">
              Prefer speaking directly? Our team is available during working
              hours.
            </p>

            <a
              href={`tel:${ORG.contact.phone}`}
              class="text-xl font-semibold text-brand underline underline-offset-4 cursor-pointer hover:opacity-80 transition"
            >
              {ORG.contact.phone}
            </a>

            <p class="mt-6 text-sm text-gray-500">
              Monday – Friday · 10 AM – 6 PM
            </p>
          </div>
        </div>

        {/* Footer */}
        <p class="mt-16 text-center text-sm text-gray-500">
          We usually respond within 24–48 hours.
        </p>
      </div>
    </section>
  );
}
