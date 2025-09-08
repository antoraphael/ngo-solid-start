// src/routes/Contact.tsx
import { createSignal } from "solid-js";

export default function Contact() {
  const [name, setName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [message, setMessage] = createSignal("");
  const [status, setStatus] = createSignal<null | string>(null);

  const submit = async (e: Event) => {
    e.preventDefault();
    if (!name().trim() || !email().trim() || !message().trim()) {
      setStatus("Please fill all fields.");
      return;
    }
    // Demo: replace with real API call
    try {
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify({ name: name(), email: email(), message: message() }) })
      console.log("Contact submit:", {
        name: name(),
        email: email(),
        message: message(),
      });
      setStatus("Thanks! Your message has been received.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong. Please try again later.");
    }
  };

  return (
    <section class="container mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold mb-4">Contact Us</h1>

      <div class="grid md:grid-cols-2 gap-8">
        <form onSubmit={submit} class="max-w-lg">
          <label class="block mb-2">Name</label>
          <input
            value={name()}
            onInput={(e) => setName((e.target as HTMLInputElement).value)}
            class="border p-2 w-full mb-4"
            placeholder="Your name"
          />

          <label class="block mb-2">Email</label>
          <input
            value={email()}
            onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
            class="border p-2 w-full mb-4"
            placeholder="name@example.com"
            type="email"
          />

          <label class="block mb-2">Message</label>
          <textarea
            value={message()}
            onInput={(e) => setMessage((e.target as HTMLTextAreaElement).value)}
            class="border p-2 w-full mb-4"
            rows={6}
            placeholder="How can we help?"
          />

          <button type="submit" class="bg-brand text-white px-4 py-2 rounded">
            Send
          </button>

          {status() && (
            <div class="mt-4 text-sm text-green-600">{status()}</div>
          )}
        </form>

        <div>
          <h3 class="font-semibold mb-2">Our Office</h3>
          <p class="mb-2">NGO Sikkim</p>
          <p class="mb-4">Kolokang, Sikkim, India</p>

          <div class="w-full h-64 bg-gray-100 rounded overflow-hidden">
            <iframe
              title="Sikkim office location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019198874211!2d72.000000!3d27.000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAwJzAwLjAiTiA3MsKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v0000000000000"
              width="100%"
              height="100%"
              style="border:0;"
              loading="lazy"
            />
          </div>

          <div class="mt-4">
            <p>
              Email:{" "}
              <a href="mailto:email@example.org" class="text-brand">
                email@example.org
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+911234567890" class="text-brand">
                +91 12345 67890
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
