// src/routes/Blogs.tsx
import {
  createSignal,
  // createEffect,
  onMount,
  onCleanup,
  For,
  Show,
} from "solid-js";
import { A } from "@solidjs/router";
import { PRESS } from "../lib/content";
import type { Blog, BlogFrontmatter } from "../lib/content";
import ImageWithFallback from "../components/Home/ImageWithFallBack";
import fm from "front-matter";

function formatDate(dateStr?: string) {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

const blogModules = import.meta.glob("/content/blogs/*.md", {
  eager: true,
  as: "raw",
});
const blogList: Blog[] = Object.entries(blogModules).map(([path, raw]) => {
  const parsed = fm<BlogFrontmatter>(raw as string);

  const slug = path.split("/").pop()!.replace(".md", "");

  return {
    slug,
    body: parsed.body,
    ...parsed.attributes,
  };
});

export default function Blogs() {
  // reveal flags for sections
  const [introVisible, setIntroVisible] = createSignal(false);
  const [releasesVisible, setReleasesVisible] = createSignal(false);

  onMount(() => {
    // staggered reveals (feel free to replace with IntersectionObserver for larger pages)
    const t1 = setTimeout(() => setIntroVisible(true), 120);
    const t2 = setTimeout(() => setReleasesVisible(true), 320);

    onCleanup(() => {
      clearTimeout(t1);
      clearTimeout(t2);
    });
  });

  // helper to animate list items with small stagger
  const revealDelay = (i: number) => `${i * 60}ms`;

  return (
    <main class="container mx-auto px-6 md:px-12 py-12">
      {/* Header / Intro */}
      <section
        class={`grid md:grid-cols-3 gap-8 items-center mb-10 transition-all duration-700 ${
          introVisible()
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <div class="md:col-span-2">
          <h1 class="text-3xl md:text-4xl font-extrabold text-brand mb-3">
            Blogs
          </h1>
          <p class="text-gray-700 leading-relaxed mb-4">
            {PRESS.lead ??
              "Latest press releases, statements and the full YES Foundation report (2021–2025). For media enquiries or interviews, contact our communications team."}
          </p>

          <div class="flex gap-3 flex-wrap">
            {/* <A
              href={
                PRESS.mediaKitUrl ?? "/reports/YES_FOUNDATION_2021-2025.pdf"
              }
              class="inline-block px-4 py-2 rounded-md bg-brand text-white font-medium hover:bg-accent transition"
              target="_blank"
            >
              Download Media Kit
            </A> */}

            <A
              href="/contact"
              class="inline-block px-4 py-2 rounded-md border border-brand text-brand hover:bg-brand hover:text-white transition"
            >
              Contact Press Office
            </A>
          </div>
        </div>

        <div class="md:col-span-1">
          <div class="rounded-lg overflow-hidden shadow-md">
            <ImageWithFallback
              src={PRESS.heroImg ?? "/placeholder/press-1.jpg"}
              alt="Blogs hero"
              class="w-full h-44 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Blogs releases */}
      <section
        aria-labelledby="press-releases"
        class={`mb-12 transition-all duration-700 ${
          releasesVisible()
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <div class="flex items-center justify-between mb-4">
          <h2 id="press-releases" class="text-2xl font-semibold text-gray-900">
            Recent Blogs
          </h2>
          <div class="text-sm text-gray-600">
            {PRESS.releases?.length ?? 0} items
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <For each={blogList}>
            {(r, i) => (
              <article
                class="bg-white rounded-lg shadow-sm overflow-hidden flex gap-4 p-4 hover:shadow-md transition transform hover:-translate-y-1"
                style={{ "transition-delay": revealDelay(i()) }}
              >
                <div class="w-36 flex-shrink-0">
                  <ImageWithFallback
                    src={r.img ?? "/placeholder/press-2.jpg"}
                    alt={r.title}
                    class="w-full h-24 object-cover rounded"
                  />
                </div>

                <div class="flex-1">
                  <div class="flex items-start justify-between">
                    <div>
                      <h3 class="font-semibold text-gray-900">{r.title}</h3>

                      <div class="text-sm text-gray-500 mt-1">
                        {formatDate(r.date)}
                      </div>
                    </div>

                    <div class="text-sm text-gray-500 ml-3">
                      {r.source ?? ""}
                    </div>
                  </div>

                  <p class="text-sm text-gray-700 mt-3 line-clamp-3">
                    {r.excerpt}
                  </p>

                  <div class="mt-3">
                    <A
                      href={`/blogs/${r.slug}`}
                      class="text-brand text-sm hover:underline"
                    >
                      Read full release →
                    </A>
                  </div>
                </div>
              </article>
            )}
          </For>
        </div>
      </section>
    </main>
  );
}
