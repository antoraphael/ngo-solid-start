// src/routes/Projects.tsx
import { A } from "@solidjs/router";
import { For } from "solid-js";
import ImageWithFallback from "../components/Home/ImageWithFallBack";
import { PLACEHOLDER_IMG } from "../lib/constants";
import { projectsList } from "../lib/content";
/**
 * Projects page
 * - Lists available projects (pulled from PROJECTS record)
 * - Each card links to /projects/:id (dynamic ProjectDetail)
 * - Uses accessible markup and responsive grid
 *
 * Note: replace images and text with final assets from the PDF when ready.
 */

export default function Projects() {
  const items = Object.values(projectsList);

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
                      src={p.gallery[0] ?? PLACEHOLDER_IMG}
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
