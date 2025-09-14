// src/routes/Events.tsx
import { EVENTS } from "../lib/content";
import ImageWithFallback from "../components/Home/ImageWithFallBack";

export default function Events() {
  return (
    <section class="container mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold mb-6">Events & Activities</h1>

      <div class="grid md:grid-cols-2 gap-6">
        {EVENTS.map((e) => (
          <article class="border rounded p-4 flex gap-4 items-start">
            <div class="w-28">
              <ImageWithFallback class="w-28 h-20 object-cover rounded" />
            </div>
            <div>
              <h3 class="font-semibold">{e.title}</h3>
              <div class="text-sm text-gray-500">
                {e.date} {e.venue ? `• ${e.venue}` : ""}
              </div>
              {e.description && <p class="mt-2 text-sm">{e.description}</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
