import { createSignal } from "solid-js";
import GalleryGrid from "../components/GalleryGrid";
import { PLACEHOLDER_IMG } from "../lib/constants";

const ITEMS = [
  {
    id: "g1",
    src: PLACEHOLDER_IMG,
    title: "Children Learning",
    category: "Education",
  },
  { id: "g2", src: PLACEHOLDER_IMG, title: "Health Camp", category: "Health" },
  {
    id: "g3",
    src: PLACEHOLDER_IMG,
    title: "Tree Plantation",
    category: "Environment",
  },
];

export default function Gallery() {
  const [filter, setFilter] = createSignal("");
  return (
    <section class="container mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold mb-6">Gallery</h1>
      <div class="mb-4 flex gap-2">
        <button onClick={() => setFilter("")} class="px-3 py-1 border rounded">
          All
        </button>
        <button
          onClick={() => setFilter("Education")}
          class="px-3 py-1 border rounded"
        >
          Education
        </button>
        <button
          onClick={() => setFilter("Health")}
          class="px-3 py-1 border rounded"
        >
          Health
        </button>
      </div>
      <GalleryGrid items={ITEMS} filter={filter()} />
    </section>
  );
}
