// src/routes/Press.tsx
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
import ImageWithFallback from "../components/Home/ImageWithFallBack";

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

export default function Press() {
  // reveal flags for sections
  const [introVisible, setIntroVisible] = createSignal(false);
  const [releasesVisible, setReleasesVisible] = createSignal(false);
  const [timelineVisible, setTimelineVisible] = createSignal(false);

  // simple rotating quote index
  const [quoteIdx, setQuoteIdx] = createSignal(0);
  let quoteTimer: number | undefined;

  onMount(() => {
    // staggered reveals (feel free to replace with IntersectionObserver for larger pages)
    const t1 = setTimeout(() => setIntroVisible(true), 120);
    const t2 = setTimeout(() => setReleasesVisible(true), 320);
    const t3 = setTimeout(() => setTimelineVisible(true), 520);

    // rotate quotes every 4s
    if (PRESS.quotes && PRESS.quotes.length > 1) {
      quoteTimer = setInterval(() => {
        setQuoteIdx((idx) => (idx + 1) % PRESS.quotes.length);
      }, 4000) as unknown as number;
    }

    onCleanup(() => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      if (quoteTimer) clearInterval(quoteTimer);
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
            Press & Reports
          </h1>
          <p class="text-gray-700 leading-relaxed mb-4">
            {PRESS.lead ??
              "Latest press releases, statements and the full YES Foundation report (2021–2025). For media enquiries or interviews, contact our communications team."}
          </p>

          <div class="flex gap-3 flex-wrap">
            <A
              href={
                PRESS.mediaKitUrl ?? "/reports/YES_FOUNDATION_2021-2025.pdf"
              }
              class="inline-block px-4 py-2 rounded-md bg-brand text-white font-medium hover:bg-accent transition"
              target="_blank"
            >
              Download Media Kit
            </A>

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
              alt="Press hero"
              class="w-full h-44 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Press releases */}
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
            Recent Press Releases
          </h2>
          <div class="text-sm text-gray-600">
            {PRESS.releases?.length ?? 0} items
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <For each={PRESS.releases ?? []}>
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
                    {r.excerpt ?? r.summary}
                  </p>

                  <div class="mt-3">
                    <A
                      href={r.url ?? "#"}
                      class="text-brand text-sm hover:underline"
                      target={r.url ? "_blank" : undefined}
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

      {/* Timeline / Milestones */}
      <section
        aria-labelledby="milestones"
        class={`mb-12 p-6 rounded-lg bg-brand-light/20 transition-all duration-700 ${
          timelineVisible()
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <h2 id="milestones" class="text-2xl font-semibold text-gray-900 mb-4">
          Key Milestones (2021–2025)
        </h2>

        <div class="grid md:grid-cols-3 gap-6">
          <For each={PRESS.milestones ?? []}>
            {(m, idx) => (
              <div
                class="bg-white rounded-lg p-4 shadow-sm transform transition hover:-translate-y-1"
                style={{ "transition-delay": revealDelay(idx()) }}
              >
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 rounded-md bg-brand text-white flex items-center justify-center font-semibold">
                    {m.short ?? "M"}
                  </div>
                  <div>
                    <div class="text-sm text-gray-500">{m.date}</div>
                    <div class="font-medium text-gray-900">{m.title}</div>
                  </div>
                </div>
                <p class="text-sm text-gray-700 mt-3">{m.summary}</p>
              </div>
            )}
          </For>
        </div>
      </section>

      {/* Voices / rotating quotes */}
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">
          Voices from the Field
        </h2>

        <div class="bg-white rounded-lg p-6 shadow-sm flex flex-col md:flex-row items-center gap-6">
          <div class="flex-1">
            <Show when={PRESS.quotes && PRESS.quotes.length > 0}>
              <div class="text-lg italic text-gray-800 transition-opacity duration-400">
                “{PRESS.quotes[quoteIdx()]?.text ?? "— —"}”
              </div>
              <div class="mt-3 text-sm text-gray-600">
                — {PRESS.quotes[quoteIdx()]?.author ?? "Community Member"}
                {PRESS.quotes[quoteIdx()]?.role
                  ? `, ${PRESS.quotes[quoteIdx()]!.role}`
                  : ""}
              </div>
            </Show>
          </div>

          <div class="w-40">
            <ImageWithFallback
              src={PRESS.quotes?.[quoteIdx()]?.img ?? "/placeholder/avatar.jpg"}
              alt={PRESS.quotes?.[quoteIdx()]?.author ?? "Quote author"}
              class="w-36 h-36 rounded-full object-cover mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Media Kit / Downloads */}
      <section class="mb-6">
        <h3 class="text-xl font-semibold text-gray-900 mb-3">
          Media Kit & Reports
        </h3>
        <div class="flex flex-col sm:flex-row gap-3 items-start">
          <A
            href={PRESS.mediaKitUrl ?? "/reports/YES_FOUNDATION_2021-2025.pdf"}
            class="inline-flex items-center gap-3 px-4 py-2 rounded-md bg-brand text-white hover:bg-accent transition"
            target="_blank"
          >
            <svg
              class="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v12m0 0l4-4m-4 4-4-4M21 21H3"
              />
            </svg>
            Download Full Report (2021–2025)
          </A>

          <div class="text-sm text-gray-600">
            High-resolution logos, press photos and brand guidelines are
            included in the media kit. Place the report PDF at{" "}
            <code>/public/reports/YES_FOUNDATION_2021-2025.pdf</code> to enable
            direct download.
          </div>
        </div>
      </section>

      {/* Contact for press */}
      <footer class="mt-10 p-6 rounded-lg bg-white shadow-sm">
        <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <h4 class="font-semibold text-gray-900">Press Office</h4>
            <p class="text-sm text-gray-700 mt-1">{PRESS.conclusion}</p>
          </div>

          <div class="text-sm text-gray-700">
            <div>
              Email:{" "}
              <a
                class="text-brand hover:underline"
                href={`mailto:${PRESS.email}`}
              >
                {PRESS.email}
              </a>
            </div>
            <div class="mt-1">
              Phone:{" "}
              <a class="text-brand hover:underline" href={`tel:${PRESS.phone}`}>
                {PRESS.phone}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
