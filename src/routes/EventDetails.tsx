// src/routes/events/[id].tsx
import { useParams, A } from "@solidjs/router";
import { createMemo } from "solid-js";
import { EVENTS } from "../lib/content";
import ImageWithFallback from "../components/Home/ImageWithFallBack";

export default function EventDetail() {
  const params = useParams();
  const event = createMemo(() => EVENTS.find((e) => e.id === params.id));

  const e = event();
  if (!e) {
    return (
      <section class="container mx-auto px-6 py-12">
        <h1 class="text-2xl font-bold">Event not found</h1>
        <A href="/events" class="text-brand hover:underline">
          Back to Events
        </A>
      </section>
    );
  }

  return (
    <section class="container mx-auto px-6 py-12">
      <A href="/events" class="text-brand hover:underline mb-6 inline-block">
        ← Back to Events
      </A>

      <div class="grid md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div class="md:col-span-2">
          <h1 class="text-3xl font-bold mb-4">{e.title}</h1>
          <p class="text-gray-600 mb-2">
            {new Date(e.date).toLocaleDateString()}{" "}
            {e.venue ? `• ${e.venue}` : ""}
          </p>
          <p class="mb-6">{e.description}</p>

          {e.details && <div class="prose max-w-none mb-6">{e.details}</div>}

          {e.partners && (
            <div class="text-sm text-gray-700">
              <strong>Partners:</strong> {e.partners.join(", ")}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside>
          <ImageWithFallback
            src={e.img || "/placeholder/event.jpg"}
            alt={e.title}
            class="w-full h-48 object-cover rounded"
          />
        </aside>
      </div>
    </section>
  );
}
