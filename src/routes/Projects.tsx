// src/routes/Projects.tsx
import { A } from "@solidjs/router";
import { For } from "solid-js";
import ImageWithFallback from "../components/Home/ImageWithFallBack";
import { PLACEHOLDER_IMG } from "../lib/constants";

/**
 * Projects page
 * - Lists available projects (pulled from PROJECTS record)
 * - Each card links to /projects/:id (dynamic ProjectDetail)
 * - Uses accessible markup and responsive grid
 *
 * Note: replace images and text with final assets from the PDF when ready.
 */

const PROJECTS: Record<
  string,
  {
    id: string;
    title: string;
    short: string;
    location?: string;
    district?: string;
    img?: string;
    category?: string;
    year?: number;
  }
> = {
  "house-building": {
    id: "house-building",
    title: "House Building",
    short:
      "Constructing safe, climate-resilient houses for vulnerable families across remote Sikkim villages.",
    location: "Mangan & East Sikkim",
    district: "Mangan",
    img: "/placeholder/house-after.jpg",
    category: "Housing",
    year: 2023,
  },
  "school-support": {
    id: "school-support",
    title: "School Support",
    short:
      "Improving rural school facilities, providing learning materials and teacher training to increase retention.",
    location: "Rural Gangtok",
    district: "Gangtok",
    img: "/placeholder/school.jpg",
    category: "Education",
    year: 2022,
  },
  "health-camps": {
    id: "health-camps",
    title: "Health Camps & Awareness",
    short:
      "Regular health camps offering screenings, basic treatment and health education in remote communities.",
    location: "Multiple districts",
    district: "Statewide",
    img: "/placeholder/health-camp.jpg",
    category: "Health",
    year: 2021,
  },
  "tree-plantation": {
    id: "tree-plantation",
    title: "Tree Plantation Drives",
    short:
      "Community-driven tree-planting and watershed protection projects to restore local ecology.",
    location: "Community forests, South Sikkim",
    district: "South Sikkim",
    img: "/placeholder/trees.jpg",
    category: "Environment",
    year: 2024,
  },
};

export default function Projects() {
  const items = Object.values(PROJECTS);

  return (
    <main class="container mx-auto px-6 md:px-12 py-12">
      <header class="mb-8">
        <h1 class="text-3xl md:text-4xl font-bold text-brand">Our Projects</h1>
        <p class="text-gray-700 mt-2 max-w-2xl">
          YES Foundation partners with communities to deliver housing,
          education, health and environment projects. Click a project to view
          details, timelines and impact.
        </p>
      </header>

      <section>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <For each={items}>
            {(p) => (
              <article class="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
                <A href={`/projects/${p.id}`} class="block group">
                  <div class="relative w-full h-48 overflow-hidden">
                    <ImageWithFallback
                      src={p.img ?? PLACEHOLDER_IMG}
                      alt={p.title}
                      class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div class="p-4 flex-1 flex flex-col">
                    <h3 class="text-lg font-semibold text-gray-900">
                      {p.title}
                    </h3>
                    <p class="text-sm text-gray-600 mt-2 flex-1">{p.short}</p>

                    <div class="mt-4 flex items-center justify-between text-sm text-gray-600">
                      <div>
                        <span class="font-medium text-gray-800">
                          {p.category}
                        </span>
                        {p.year ? <span class="ml-2">• {p.year}</span> : null}
                      </div>
                      <div class="text-right">
                        <div>{p.location}</div>
                        <div class="text-xs text-gray-500">{p.district}</div>
                      </div>
                    </div>
                  </div>
                </A>
              </article>
            )}
          </For>
        </div>
      </section>
    </main>
  );
}
