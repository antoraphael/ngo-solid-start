// src/routes/About.tsx
import { createSignal, onCleanup, onMount } from "solid-js";
import { A } from "@solidjs/router";
import { ORG, EXECUTIVES } from "../lib/content";
import ImageWithFallback from "../components/Home/ImageWithFallBack";

export default function About() {
  const [visibleIntro, setVisibleIntro] = createSignal(false);
  const [, setVisibleStats] = createSignal(false);

  let introEl!: HTMLDivElement;
  let statsEl!: HTMLDivElement;

  onMount(() => {
    // Observe intro section
    const introObs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleIntro(true);
          introObs.disconnect();
        }
      },
      { threshold: 0.2 }
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
      { threshold: 0.25 }
    );
    if (statsEl) statsObs.observe(statsEl);

    onCleanup(() => {
      introObs.disconnect();
      statsObs.disconnect();
    });
  });

  const Icon = (props: { children: any }) => (
    <div class="w-12 h-12 rounded-md bg-white/90 flex items-center justify-center shadow-sm text-brand">
      {props.children}
    </div>
  );

  return (
    <main class="bg-white">
      {/* Intro Section */}
      <section
        ref={introEl}
        class={`container mx-auto px-6 md:px-12 py-12 transition-all duration-700 ${
          visibleIntro()
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
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
                class="inline-block px-5 py-2 rounded-md bg-brand text-white font-medium hover:bg-accent transition"
              >
                Our Projects
              </A>
              <A
                href="/get-involved"
                class="inline-block px-5 py-2 rounded-md border border-brand text-brand font-medium hover:bg-brand hover:text-white transition"
              >
                Get Involved
              </A>
            </div>
          </div>

          <div class="md:col-span-1">
            <div class="rounded-lg overflow-hidden shadow-md">
              <ImageWithFallback
                src="/placeholder/office.jpg"
                alt="YES Foundation - community"
                class="w-full h-56 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Approach */}
      <section class="bg-brand-light/30 py-10">
        <div class="container mx-auto px-6 md:px-12">
          <div class="grid md:grid-cols-3 gap-6 items-start">
            <div class="flex gap-4 items-start">
              <Icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8c1.657 0 3-1.567 3-3.5S13.657 1 12 1 9 2.567 9 4.5 10.343 8 12 8zM6 14s1-3 6-3 6 3 6 3v5H6v-5z"
                  />
                </svg>
              </Icon>
              <div>
                <h4 class="font-semibold text-gray-800">Who we serve</h4>
                <p class="text-sm text-gray-700">
                  Vulnerable families, youth and communities across Sikkim.
                </p>
              </div>
            </div>

            <div class="flex gap-4 items-start">
              <Icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3M20 12a8 8 0 11-16 0 8 8 0 0116 0z"
                  />
                </svg>
              </Icon>
              <div>
                <h4 class="font-semibold text-gray-800">Core Areas</h4>
                <p class="text-sm text-gray-700">
                  Housing, Health, Education, Youth Empowerment & Environment.
                </p>
              </div>
            </div>

            <div class="flex gap-4 items-start">
              <Icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 7h18M3 12h18M3 17h18"
                  />
                </svg>
              </Icon>
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

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div class="rounded overflow-hidden">
              <ImageWithFallback
                src="/placeholder/house-before.jpg"
                alt="Before - house"
                class="w-full h-44 object-cover"
              />
            </div>
            <div class="rounded overflow-hidden">
              <ImageWithFallback
                src="/placeholder/house-after.jpg"
                alt="After - house"
                class="w-full h-44 object-cover"
              />
            </div>
            <div class="rounded overflow-hidden">
              <ImageWithFallback
                src="/placeholder/house-2.jpg"
                alt="House project"
                class="w-full h-44 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section class="container mx-auto px-6 md:px-12 py-14">
        <h2 class="text-2xl md:text-3xl font-bold text-brand mb-6">
          Executive Team
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {EXECUTIVES.map((p) => (
            <div class="flex flex-col items-center text-center p-4">
              <div class="w-28 h-28 mb-3">
                <ImageWithFallback
                  src={p.photo || "/placeholder/avatar.jpg"}
                  alt={p.name}
                  class="w-28 h-28 rounded-full object-cover"
                />
              </div>
              <div class="font-semibold text-gray-800">{p.name}</div>
              <div class="text-sm text-gray-600">{p.role}</div>
            </div>
          ))}
        </div>

        <div class="mt-8 text-sm text-gray-600">
          <p>
            For media or partnership enquiries, please visit the{" "}
            <A href="/contact" class="text-brand hover:underline">
              Contact
            </A>{" "}
            page or email{" "}
            <a
              class="text-brand hover:underline"
              href={`mailto:${ORG.contact.email}`}
            >
              {ORG.contact.email}
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
