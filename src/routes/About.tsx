// src/routes/About.tsx
import { createSignal, onCleanup, onMount, For } from "solid-js";
import { A } from "@solidjs/router";
import { ORG, EXECUTIVES } from "../lib/content";
import ImageWithFallback from "../components/Home/ImageWithFallBack";
import founderImg from "../assets/members/yes_founder.avif";
import houseBeforeImg from "../assets/home/house_before.avif";
import houseAfterImg from "../assets/home/house_after.avif";
import houseProjectImg from "../assets/home/house_new.avif";
import { PRESS } from "../lib/content";
import person from "../assets/common/person.png";

export default function About() {
  const [visibleIntro, setVisibleIntro] = createSignal(false);
  const [, setVisibleStats] = createSignal(false);
  // const [timelineVisible, setTimelineVisible] = createSignal(false);

  let introEl!: HTMLDivElement;
  let statsEl!: HTMLDivElement;
  const [quoteIdx, setQuoteIdx] = createSignal(0);
  // simple rotating quote index
  let quoteTimer: number | undefined;
  onMount(() => {
    // Observe intro section
    // const t3 = setTimeout(() => setTimelineVisible(true), 520);
    // rotate quotes every 4s
    if (PRESS.quotes && PRESS.quotes.length > 1) {
      quoteTimer = setInterval(() => {
        setQuoteIdx((idx) => (idx + 1) % PRESS.quotes.length);
      }, 4000) as unknown as number;
    }

    const introObs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleIntro(true);
          introObs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (introEl) introObs.observe(introEl);

    // Observe stats section
    const statsObs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleStats(true);
          statsObs.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    if (statsEl) statsObs.observe(statsEl);

    onCleanup(() => {
      introObs.disconnect();
      statsObs.disconnect();
      // clearTimeout(t3);
      if (quoteTimer) clearInterval(quoteTimer);
    });
  });

  const downloadReport = () => {
    const link = document.createElement("a");
    link.href = "/reports/YES_FOUNDATION_FULL_REPORT.pdf";
    link.download = "YES_Foundation_Full_Report.pdf";
    link.target = "_blank";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const Icon = (props: { children: any }) => (
    <div class="w-12 h-12 rounded-md bg-white/90 flex items-center justify-center shadow-sm text-brand">
      {props.children}
    </div>
  );

  const revealDelay = (i: number) => `${i * 60}ms`;

  return (
    <main class="bg-white">
      {/* Intro Section */}
      <section
        ref={introEl}
        class={`transition-all duration-700 ${
          visibleIntro()
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
        <div class="container mx-auto px-6 md:px-12 py-12">
          <div class="grid md:grid-cols-3 gap-8 items-center">
            <div class="md:col-span-2">
              <h1 class="text-4xl md:text-5xl font-extrabold text-brand mb-4">
                {ORG.fullName}
              </h1>
              <p class="text-gray-700 mb-4 leading-relaxed">{ORG.summary}</p>

              <div class="grid sm:grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <div class="font-medium text-gray-800">Established</div>
                  <div>{ORG.est}</div>
                </div>
                <div>
                  <div class="font-medium text-gray-800">Registration No.</div>
                  <div>{ORG.regNo}</div>
                </div>
              </div>

              <div class="mt-6 flex flex-wrap gap-3">
                <A
                  href="/projects"
                  class="px-5 py-2 rounded-md bg-brand text-white font-medium hover:bg-accent transition"
                >
                  Our Projects
                </A>
                <A
                  href="/contact"
                  class="px-5 py-2 rounded-md border border-brand text-brand font-medium hover:bg-brand hover:text-white transition"
                >
                  Get Involved
                </A>
              </div>
            </div>

            <div class="md:col-span-1">
              <div class="rounded-lg overflow-hidden shadow-md">
                <ImageWithFallback
                  src={founderImg}
                  alt="YES Foundation - community"
                  class="w-full h-56 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Approach */}
      <section class="bg-brand-light/30 py-10">
        <div class="container mx-auto px-6 md:px-12">
          <div class="grid md:grid-cols-3 gap-6 items-start">
            {/* Who we serve */}
            <div class="flex gap-4 items-start">
              <Icon>...</Icon>
              <div>
                <h4 class="font-semibold text-gray-800">Who we serve</h4>
                <p class="text-sm text-gray-700">
                  Vulnerable families, youth and communities across Sikkim.
                </p>
              </div>
            </div>

            {/* Core Areas */}
            <div class="flex gap-4 items-start">
              <Icon>...</Icon>
              <div>
                <h4 class="font-semibold text-gray-800">Core Areas</h4>
                <p class="text-sm text-gray-700">
                  Housing, Health, Education, Youth Empowerment & Environment.
                </p>
              </div>
            </div>

            {/* Approach */}
            <div class="flex gap-4 items-start">
              <Icon>...</Icon>
              <div>
                <h4 class="font-semibold text-gray-800">Approach</h4>
                <p class="text-sm text-gray-700">
                  Community-led projects, partnership with local stakeholders,
                  and volunteer engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Housing Highlight */}
      <section class="py-12 bg-brand-light/20">
        <div class="container mx-auto px-6 md:px-12">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-xl font-semibold text-gray-900">
              Housing: Before & After
            </h3>
            <A href="/projects" class="text-sm text-brand hover:underline">
              See all projects →
            </A>
          </div>

          <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <ImageWithFallback
              src={houseBeforeImg}
              class="h-44 object-cover rounded"
            />
            <ImageWithFallback
              src={houseAfterImg}
              class="h-44 object-cover rounded"
            />
            <ImageWithFallback
              src={houseProjectImg}
              class="h-44 object-cover rounded"
            />
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section class="py-14">
        <div class="container mx-auto px-6 md:px-12">
          <h2 class="text-2xl md:text-3xl font-bold text-brand mb-6">
            Executive Team
          </h2>

          <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <For each={EXECUTIVES}>
              {(p) => (
                <div class="flex flex-col items-center text-center p-4">
                  <ImageWithFallback
                    src={p.photo || "/placeholder/avatar.jpg"}
                    alt={p.name}
                    class="w-28 h-28 rounded-full object-cover mb-3"
                  />
                  <div class="font-semibold">{p.name}</div>
                  <div class="text-sm text-gray-600">{p.role}</div>
                </div>
              )}
            </For>
          </div>
        </div>
      </section>

      {/* Timeline / Milestones */}
      <section class="bg-brand-light/20 py-12">
        <div class="container mx-auto px-6 md:px-12">
          <h2 class="text-2xl font-semibold mb-6">
            Key Milestones (2021–2025)
          </h2>

          <div class="grid md:grid-cols-3 gap-6">
            <For each={PRESS.milestones ?? []}>
              {(m, idx) => (
                <div
                  class="bg-white rounded-lg p-4 shadow-sm hover:-translate-y-1 transition"
                  style={{ "transition-delay": revealDelay(idx()) }}
                >
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 bg-brand text-white rounded-md flex items-center justify-center">
                      {m.short}
                    </div>
                    <div>
                      <div class="text-sm text-gray-500">{m.date}</div>
                      <div class="font-medium">{m.title}</div>
                    </div>
                  </div>
                  <p class="text-sm text-gray-700 mt-3">{m.summary}</p>
                </div>
              )}
            </For>
          </div>
        </div>
      </section>

      {/* Voices */}
      <section class="py-12">
        <div class="container mx-auto px-6 md:px-12">
          <h2 class="text-2xl font-semibold mb-4">Voices from the Field</h2>

          <div class="bg-white rounded-lg p-6 shadow-sm flex flex-col md:flex-row gap-6">
            <div class="flex-1">
              <div class="italic text-lg">
                “{PRESS.quotes?.[quoteIdx()]?.text}”
              </div>
              <div class="mt-3 text-sm text-gray-600">
                — {PRESS.quotes?.[quoteIdx()]?.author}
              </div>
            </div>

            <ImageWithFallback
              src={person}
              class="w-36 h-36 rounded-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Foundation Report Download */}
      <section class="mb-10">
        <div class="container mx-auto px-6 md:px-12">
          <h3 class="text-xl font-semibold text-gray-900 mb-2">
            Foundation Report
          </h3>

          <p class="text-sm text-gray-700 mb-4 max-w-2xl">
            A comprehensive document detailing the foundation’s journey,
            completed projects, legal deeds, community impact, and milestones
            achieved over the years.
          </p>

          <button
            onClick={downloadReport}
            class="inline-flex items-center gap-3 px-5 py-2.5 rounded-md
             bg-brand text-white font-medium hover:bg-accent transition"
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
            Download Foundation Report (PDF · 15.7 MB)
          </button>

          <p class="text-xs text-gray-500 mt-2">
            File size is approximately 15.7 MB. Download time may vary based on
            your internet connection.
          </p>
        </div>
      </section>

      {/* Footer */}
      {/* <footer class="bg-white shadow-sm py-6">
        <div class="container mx-auto px-6 md:px-12 flex justify-between">
          <div>
            <h4 class="font-semibold">Press Office</h4>
            <p class="text-sm">{PRESS.conclusion}</p>
          </div>
          <div class="text-sm">
            <a href={`mailto:${PRESS.email}`} class="text-brand">
              {PRESS.email}
            </a>
          </div>
        </div>
      </footer> */}
    </main>
  );
}
