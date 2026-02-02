// src/routes/Gallery.tsx
import { HOUSES, EVENTS } from "../lib/content";
import GalleryGrid from "../components/GalleryGrid";
import ImageWithFallback from "../components/Home/ImageWithFallBack";
import { galleryImages } from "../lib/content";
import { broadGalleryImages } from "../lib/content";

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

      <GalleryGrid items={galleryImages} filter={""} />
      <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* show a few large feature images */}
        {broadGalleryImages.map((src) => (
          <ImageWithFallback
            src={src}
            class="w-full h-64 object-cover rounded"
          />
        ))}
      </div>
    </section>
  );
}
