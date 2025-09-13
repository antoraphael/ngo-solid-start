// src/routes/Contact.tsx
import { ORG } from "../lib/content";

export default function Contact() {
  return (
    <section class="container mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold mb-4">Contact Us</h1>

      <div class="grid md:grid-cols-2 gap-6">
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
            For media, events, volunteering and partnerships, please reach out
            via email.
          </p>
        </div>

        <form class="bg-white p-4 border rounded">
          <label class="block mb-2">Name</label>
          <input class="border p-2 w-full mb-3" placeholder="Your name" />
          <label class="block mb-2">Email</label>
          <input
            class="border p-2 w-full mb-3"
            placeholder="name@example.com"
          />
          <label class="block mb-2">Message</label>
          <textarea
            class="border p-2 w-full mb-3"
            rows={5}
            placeholder="How can we help?"
          ></textarea>
          <button class="bg-brand text-white px-4 py-2 rounded">Send</button>
        </form>
      </div>
    </section>
  );
}
