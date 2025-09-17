// src/routes/Contact.tsx
import { onMount, createSignal } from "solid-js";
import { ORG } from "../lib/content";
import emailjs from "emailjs-com";
import Cookies from "js-cookie";

export default function Contact() {
  const [name, setName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [message, setMessage] = createSignal("");
  const [error, setError] = createSignal<string | null>(null);
  const [sent, setSent] = createSignal(Cookies.get("enquirySent") === "true");

  let nameInput!: HTMLInputElement;

  onMount(() => {
    // focus name field on mount
    if (nameInput) nameInput.focus();
  });

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function handleSubmit(e: Event) {
    e.preventDefault();
    setError(null);

    if (!name().trim()) {
      setError("Please enter your name.");
      nameInput.focus();
      return;
    }
    if (!email().trim() || !validateEmail(email())) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!message().trim()) {
      setError("Please enter a message.");
      return;
    }

    try {
      // ⚡ EmailJS (replace YOUR_ IDs with actual values from emailjs.com)
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: name(),
          reply_to: email(),
          message: message(),
        },
        "YOUR_PUBLIC_KEY"
      );

      Cookies.set("enquirySent", "true", { expires: 1 }); // expire in 1 day
      setSent(true);
    } catch (err) {
      console.error(err);
      setError("Failed to send message. Please try again later.");
    }
  }

  return (
    <section class="container mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold mb-6">Contact Us</h1>

      <div class="grid md:grid-cols-2 gap-8">
        {/* Contact details */}
        <div>
          <p class="mb-2">
            Email:{" "}
            <a href={`mailto:${ORG.contact.email}`} class="text-brand">
              {ORG.contact.email}
            </a>
          </p>
          <p class="mb-2">
            Phone:{" "}
            <a href={`tel:${ORG.contact.phone}`} class="text-brand">
              {ORG.contact.phone}
            </a>
          </p>
          <p class="mt-4 text-sm text-gray-600">
            For media, events, volunteering, and partnerships, please reach out
            via email.
          </p>
        </div>

        {/* Conditional form / sent message */}
        <div>
          {sent() ? (
            <div class="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <h2 class="text-2xl font-semibold text-green-700 mb-2">
                ✅ Enquiry Sent
              </h2>
              <p class="text-gray-700">
                Thank you for reaching out! Our team will get back to you
                shortly via email.
              </p>
            </div>
          ) : (
            <form
              class="bg-white shadow-md rounded-lg p-6 border"
              onSubmit={handleSubmit}
            >
              {error() && (
                <div class="mb-4 text-red-600 text-sm">{error()}</div>
              )}

              <label class="block mb-2 text-sm font-medium">Name</label>
              <input
                ref={nameInput}
                value={name()}
                onInput={(e) => setName(e.currentTarget.value)}
                class="border rounded px-3 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-brand"
                placeholder="Your name"
              />

              <label class="block mb-2 text-sm font-medium">Email</label>
              <input
                value={email()}
                onInput={(e) => setEmail(e.currentTarget.value)}
                class="border rounded px-3 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-brand"
                placeholder="name@example.com"
              />

              <label class="block mb-2 text-sm font-medium">Message</label>
              <textarea
                value={message()}
                onInput={(e) => setMessage(e.currentTarget.value)}
                class="border rounded px-3 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-brand"
                rows={5}
                placeholder="How can we help?"
              />

              <button
                type="submit"
                class="bg-brand text-white px-6 py-2 rounded-lg shadow hover:bg-brand-dark transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
