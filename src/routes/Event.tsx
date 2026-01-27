// src/routes/Events.tsx
import { createSignal, createMemo, For, Show } from "solid-js";
import { A } from "@solidjs/router";
import { EVENTS } from "../lib/content";
import ImageWithFallback from "../components/Home/ImageWithFallBack";
import ThemedDropdown from "../components/Inputs/ThemedDropdown";

/** Helpers */
function formatDate(dateStr: string) {
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

function monthKey(dateStr: string) {
  try {
    const d = new Date(dateStr);
    const month = d.toLocaleString(undefined, { month: "long" });
    return `${month} ${d.getFullYear()}`;
  } catch {
    return dateStr;
  }
}

export default function Events() {
  // false = Past (default), true = Upcoming
  const [showUpcoming, setShowUpcoming] = createSignal(false);
  const [query, setQuery] = createSignal("");
  const [category, setCategory] = createSignal("All");

  const categories = createMemo(() => {
    const cats = new Set<string>();
    EVENTS.forEach((e) => {
      if (e.category) cats.add(e.category);
    });
    return ["All", ...Array.from(cats)];
  });

  function isEventUpcoming(e: any) {
    if (!e?.date) return false;
    const ed = new Date(e.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return ed.getTime() >= today.getTime();
  }

  const upcoming = createMemo(() =>
    EVENTS.filter((e) => isEventUpcoming(e)).sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    )
  );

  const pastAll = createMemo(() =>
    EVENTS.filter((e) => !isEventUpcoming(e)).sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  );

  const filteredPast = createMemo(() => {
    const q = query().trim().toLowerCase();
    const cat = category();
    return pastAll().filter((e) => {
      if (cat !== "All" && e.category !== cat) return false;
      if (!q) return true;
      const hay = `${e.title} ${e.description ?? ""} ${e.venue ?? ""} ${
        e.category ?? ""
      }`.toLowerCase();
      return hay.includes(q);
    });
  });

  const groupByMonth = (list: any[]) => {
    const map = new Map<string, any[]>();
    list.forEach((e) => {
      const key = monthKey(e.date || "");
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(e);
    });
    return Array.from(map.entries());
  };

  const pastGrouped = createMemo(() => groupByMonth(filteredPast()));
  const upcomingGrouped = createMemo(() => groupByMonth(upcoming()));

  return (
    <main class="container mx-auto px-6 md:px-12 py-12">
      <header class="mb-8">
        <h1 class="text-3xl md:text-4xl font-bold text-brand">
          Events & Activities
        </h1>
        <p class="text-gray-700 mt-2 max-w-2xl">
          Browse our past events or check out what’s coming up.
        </p>
      </header>

      {/* Tabs */}
      <div class="flex gap-3 items-center mb-6">
        <button
          onClick={() => setShowUpcoming(false)}
          class={`px-4 py-2 rounded-md text-sm transition ${
            !showUpcoming()
              ? "bg-brand text-white border border-brand"
              : "bg-white text-gray-700 border"
          }`}
        >
          Past
        </button>
        <button
          onClick={() => setShowUpcoming(true)}
          class={`px-4 py-2 rounded-md text-sm transition ${
            showUpcoming()
              ? "bg-brand text-white border border-brand"
              : "bg-white text-gray-700 border"
          }`}
        >
          Upcoming
        </button>

        {/* show past-only controls */}
        <Show when={!showUpcoming()}>
          <div class="ml-4 flex gap-3 items-center">
            <input
              type="search"
              placeholder="Search past events..."
              value={query()}
              onInput={(e) => setQuery(e.currentTarget.value)}
              class="px-3 py-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-brand-light"
            />

            {/* Custom themed dropdown */}
            <ThemedDropdown
              value={category()}
              onChange={(v) => setCategory(v)}
              options={categories()}
            />
          </div>
        </Show>
      </div>

      {/* Grouped list */}
      <Show when={!showUpcoming()}>
        <For each={pastGrouped()}>
          {([month, events]) => (
            <section class="mb-8">
              <h3 class="text-xl font-semibold text-gray-800 mb-4">{month}</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <For each={events}>
                  {(e) => (
                    <article class="bg-white rounded-lg shadow-sm overflow-hidden flex gap-4 p-4">
                      <div class="w-40 flex-shrink-0">
                        <ImageWithFallback
                          src={e.img || "/placeholder/event.jpg"}
                          alt={e.title}
                          class="w-full h-28 object-cover rounded"
                        />
                      </div>
                      <div class="flex-1">
                        <h4 class="font-semibold text-gray-900">{e.title}</h4>
                        <p class="text-sm text-gray-500">
                          {formatDate(e.date)}
                        </p>
                        <p class="mt-2 text-sm">{e.description}</p>
                        <A
                          href={`/events/${e.id}`}
                          class="text-brand text-sm hover:underline mt-2 inline-block"
                        >
                          Read more →
                        </A>
                      </div>
                    </article>
                  )}
                </For>
              </div>
            </section>
          )}
        </For>
      </Show>

      <Show when={showUpcoming()}>
        <For each={upcomingGrouped()}>
          {([month, events]) => (
            <section class="mb-8">
              <h3 class="text-xl font-semibold text-gray-800 mb-4">{month}</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <For each={events}>
                  {(e) => (
                    <article class="bg-white rounded-lg shadow-sm overflow-hidden flex gap-4 p-4">
                      <div class="w-40 flex-shrink-0">
                        <ImageWithFallback
                          src={e.img || "/placeholder/event.jpg"}
                          alt={e.title}
                          class="w-full h-28 object-cover rounded"
                        />
                      </div>
                      <div class="flex-1">
                        <h4 class="font-semibold text-gray-900">{e.title}</h4>
                        <p class="text-sm text-gray-500">
                          {formatDate(e.date)}
                        </p>
                        <p class="mt-2 text-sm">{e.description}</p>
                        <A
                          href={`/events/${e.id}`}
                          class="text-brand text-sm hover:underline mt-2 inline-block"
                        >
                          Read more →
                        </A>
                      </div>
                    </article>
                  )}
                </For>
              </div>
            </section>
          )}
        </For>
      </Show>
    </main>
  );
}
