// src/routes/Gallery.tsx
import { HOUSES, EVENTS } from "../lib/content";
import GalleryGrid from "../components/GalleryGrid";
import ImageWithFallback from "../components/ImageWithFallBack";

const items = [
  // map houses to gallery items (use id/title)
  ...HOUSES.map((h) => ({
    id: `house-${h.id}`,
    src: undefined,
    title: `${h.owner} — ${h.location}`,
    category: "Housing",
  })),
  // map events
  ...EVENTS.map((e) => ({
    id: `event-${e.id}`,
    src: undefined,
    title: e.title,
    category: e.category ?? "Other",
  })),
];

export default function Gallery() {
  return (
    <section class="container mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold mb-6">Gallery</h1>

      <div class="mb-6">
        <p class="text-gray-600">
          Photos & events from our work — placeholder images are used until
          originals are provided.
        </p>
      </div>

      <GalleryGrid items={items} filter={""} />
      <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* show a few large feature images */}
        <ImageWithFallback class="w-full h-64 object-cover rounded" />
        <ImageWithFallback class="w-full h-64 object-cover rounded" />
        <ImageWithFallback class="w-full h-64 object-cover rounded" />
      </div>
    </section>
  );
}
