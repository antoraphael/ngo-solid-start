// src/routes/Projects.tsx
import { For, createSignal, createMemo } from "solid-js";
import ProjectCard from "../components/ProjectCard";

type Project = {
  id: string;
  title: string;
  img: string;
  excerpt: string;
  category?: string;
};

const initialProjects: Project[] = [
  {
    id: "house-building",
    title: "House Building",
    img: "/src/assets/proj-1.jpg",
    excerpt: "Helping families build safe, weatherproof homes.",
    category: "Environment",
  },
  {
    id: "school-support",
    title: "School Support",
    img: "/src/assets/proj-2.jpg",
    excerpt:
      "Supplying learning materials and teacher support to rural schools.",
    category: "Education",
  },
  {
    id: "health-camp",
    title: "Health Camp",
    img: "/src/assets/proj-3.jpg",
    excerpt: "Periodic medical camps and basic health awareness programs.",
    category: "Health",
  },
];

export default function Projects() {
  const [query, setQuery] = createSignal("");
  const [category, setCategory] = createSignal<string | null>(null);

  const categories = createMemo(() => {
    const set = new Set(
      initialProjects.map((p) => p.category).filter(Boolean) as string[]
    );
    return ["All", ...Array.from(set)];
  });

  const filteredProjects = createMemo(() => {
    const q = query().trim().toLowerCase();
    return initialProjects.filter((p) => {
      if (category() && category() !== "All" && p.category !== category())
        return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        (p.category ?? "").toLowerCase().includes(q)
      );
    });
  });

  return (
    <section class="container mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold mb-6">Our Work</h1>

      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div class="flex items-center gap-2">
          <input
            placeholder="Search projects..."
            class="border rounded px-3 py-2 w-64"
            value={query()}
            onInput={(e) => setQuery((e.target as HTMLInputElement).value)}
          />
        </div>

        <div class="flex items-center gap-2 overflow-auto">
          <For each={categories()}>
            {(cat) => (
              <button
                class={`px-3 py-1 rounded border ${
                  category() === cat || (cat === "All" && category() === null)
                    ? "bg-brand text-white"
                    : ""
                }`}
                onClick={() => setCategory(cat === "All" ? null : cat)}
              >
                {cat}
              </button>
            )}
          </For>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <For each={filteredProjects()}>
          {(p) => (
            <ProjectCard
              id={p.id}
              title={p.title}
              img={p.img}
              excerpt={p.excerpt}
            />
          )}
        </For>
      </div>

      {filteredProjects().length === 0 && (
        <div class="mt-6 text-center text-gray-600">
          No projects found for your search/filter.
        </div>
      )}
    </section>
  );
}
