// src/routes/Gallery.tsx
import { createSignal, For } from "solid-js";
import GalleryGrid from "../components/GalleryGrid";

type GalleryItem = {
  id: string;
  src: string;
  title?: string;
  category: string;
};

const ITEMS: GalleryItem[] = [
  {
    id: "g1",
    src: "/src/assets/gallery-1.jpg",
    title: "Children Learning",
    category: "Education",
  },
  {
    id: "g2",
    src: "/src/assets/gallery-2.jpg",
    title: "Health Camp",
    category: "Health",
  },
  {
    id: "g3",
    src: "/src/assets/gallery-3.jpg",
    title: "Tree Plantation",
    category: "Environment",
  },
  {
    id: "g4",
    src: "/src/assets/gallery-4.jpg",
    title: "Volunteer Day",
    category: "Volunteer",
  },
  {
    id: "g5",
    src: "/src/assets/gallery-5.jpg",
    title: "Awareness Session",
    category: "Health",
  },
];

export default function Gallery() {
  const [filter, setFilter] = createSignal<string>("All");

  const categories = Array.from(new Set(ITEMS.map((i) => i.category)));
  categories.unshift("All");

  return (
    <section class="container mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold mb-6">Gallery</h1>

      <div class="mb-6 flex flex-wrap gap-3">
        <For each={categories}>
          {(cat) => (
            <button
              class={`px-3 py-1 rounded border ${
                filter() === cat ? "bg-brand text-white" : ""
              }`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          )}
        </For>
      </div>

      <GalleryGrid items={ITEMS} filter={filter() === "All" ? "" : filter()} />
    </section>
  );
}
