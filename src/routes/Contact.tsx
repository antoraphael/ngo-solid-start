import { onMount, createSignal, createEffect } from "solid-js";
import { useSearchParams } from "@solidjs/router";
import Cookies from "js-cookie";
import { ORG } from "../lib/content";

export default function Contact() {
  const [searchParams] = useSearchParams();

  const [name, setName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [message, setMessage] = createSignal("");
  const [error, setError] = createSignal<string | null>(null);
  const [sending, setSending] = createSignal(false);

  // check if enquiry already sent (persisted via cookie)
  const [sent, setSent] = createSignal(Cookies.get("contact_sent") === "true");

  let nameInput!: HTMLInputElement;

  onMount(() => {
    if (nameInput && !sent()) {
      nameInput.focus();
    }
  });

  // ✅ Reactively detect volunteer entry (works even on same page)
  createEffect(() => {
    if (searchParams.from === "volunteer" && !message().trim()) {
      setMessage(
        "Hello, I would like to volunteer with your organisation. Please let me know the next steps.",
      );
    }
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
      setError("Please enter your message.");
      return;
    }

    try {
      setSending(true);

      const res = await fetch("/.netlify/functions/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name(),
          email: email(),
          message: message(),
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      // store cookie for 1 day
      Cookies.set("contact_sent", "true", { expires: 1 });
      setSent(true);
    } catch (err) {
      console.error(err);
      setError(
        "Something went wrong while sending your message. Please try again later.",
      );
    } finally {
      setSending(false);
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
            <a
              href={`mailto:${ORG.contact.email}`}
              class="text-brand underline"
            >
              {ORG.contact.email}
            </a>
          </p>

          <p class="mb-2">
            Phone:{" "}
            <a href={`tel:${ORG.contact.phone}`} class="text-brand underline">
              {ORG.contact.phone}
            </a>
          </p>

          <p class="mt-4 text-sm text-gray-600">
            For media, events, volunteering, and partnerships, please reach out
            using this form or via email.
          </p>
        </div>

        {/* Form / Success Message */}
        <div>
          {sent() ? (
            <div class="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <h2 class="text-2xl font-semibold text-green-700 mb-2">
                ✅ Message Sent Successfully
              </h2>
              <p class="text-gray-700">
                Thank you for contacting us!
                <br />
                Our team has received your message and will get back to you
                shortly.
              </p>
            </div>
          ) : (
            <form
              class="bg-white shadow-md rounded-xl p-6 border"
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
                disabled={sending()}
                class="bg-brand text-white px-6 py-2 rounded-lg shadow hover:bg-brand-dark transition disabled:opacity-50"
              >
                {sending() ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
