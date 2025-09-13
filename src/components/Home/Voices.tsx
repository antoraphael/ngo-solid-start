// src/components/Voices.tsx
import { createSignal, createEffect, onCleanup, onMount } from "solid-js";

const voices = [
  {
    text: `“Thanks to YES Foundation, our village now has access to clean drinking water and regular health awareness programs. They truly care about people.”`,
    author: "Local Beneficiary",
  },
  {
    text: `“Volunteering with YES Foundation has been life-changing. I learned, contributed, and grew as a person while serving communities.”`,
    author: "Youth Volunteer",
  },
  {
    text: `“The housing project gave my family a safe shelter during harsh winters. We are forever grateful.”`,
    author: "Housing Recipient",
  },
  {
    text: `“Their tree plantation drives are protecting our forests and giving us hope for a sustainable future.”`,
    author: "Community Elder",
  },
  {
    text: `“YES Foundation inspires young people like me to stay in Sikkim and build change at home.”`,
    author: "College Student",
  },
];

export default function Voices() {
  const [index, setIndex] = createSignal(0);
  const [slidesPerView, setSlidesPerView] = createSignal(3);
  const [paused, setPaused] = createSignal(false);
  let intervalId: number | undefined;

  function getSlidesPerView() {
    if (typeof window === "undefined") return 3;
    const w = window.innerWidth;
    if (w < 768) return 1;
    if (w < 1024) return 2;
    return 3;
  }

  // keep index in bounds whenever slidesPerView changes
  createEffect(() => {
    const spv = slidesPerView();
    const maxIndex = Math.max(0, voices.length - spv);
    if (index() > maxIndex) setIndex(maxIndex);
  });

  // resize handler
  function updateSlidesPerView() {
    setSlidesPerView(getSlidesPerView());
  }

  // auto-advance
  function startAuto() {
    stopAuto();
    intervalId = window.setInterval(() => {
      if (paused()) return;
      const spv = slidesPerView();
      const maxIndex = Math.max(0, voices.length - spv);
      setIndex((i) => (i < maxIndex ? i + 1 : 0));
    }, 3500);
  }
  function stopAuto() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = undefined;
    }
  }

  onMount(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    startAuto();
  });

  onCleanup(() => {
    window.removeEventListener("resize", updateSlidesPerView);
    stopAuto();
  });

  // manual controls
  const prev = () => {
    const spv = slidesPerView();
    const maxIndex = Math.max(0, voices.length - spv);
    setIndex((i) => (i > 0 ? i - 1 : maxIndex));
  };
  const next = () => {
    const spv = slidesPerView();
    const maxIndex = Math.max(0, voices.length - spv);
    setIndex((i) => (i < maxIndex ? i + 1 : 0));
  };

  // computed values for styling
  const slideWidthPercent = () => 100 / slidesPerView();
  const translatePercent = () => index() * slideWidthPercent();

  return (
    <section class="py-16 bg-accent/10">
      <div class="container mx-auto px-6 md:px-12">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-3xl font-bold text-brand">
            Voices from the Community
          </h2>

          {/* nav buttons */}
          <div class="flex gap-2">
            <button
              aria-label="Previous"
              onClick={prev}
              class="p-2 rounded-full bg-white shadow hover:bg-brand/10"
            >
              ‹
            </button>
            <button
              aria-label="Next"
              onClick={next}
              class="p-2 rounded-full bg-white shadow hover:bg-brand/10"
            >
              ›
            </button>
          </div>
        </div>

        {/* viewport */}
        <div
          class="relative overflow-hidden"
          onMouseEnter={() => {
            setPaused(true);
          }}
          onMouseLeave={() => {
            setPaused(false);
          }}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* track */}
          <div
            class="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${translatePercent()}%)`,
            }}
          >
            {voices.map((v, i) => (
              <div
                class="p-3"
                style={{
                  width: `${slideWidthPercent()}%`,
                  "flex-shrink": 0,
                }}
              >
                <article class="h-full bg-white rounded-xl p-6 flex flex-col justify-between shadow-md">
                  <p class="italic text-gray-700 mb-4">{v.text}</p>
                  <p class="mt-4 font-semibold text-accent">— {v.author}</p>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* dots */}
        <div class="mt-6 flex items-center justify-center gap-2">
          {Array.from(
            { length: Math.max(1, voices.length - (slidesPerView() - 1)) },
            (_, i) => i
          ).map((i) => (
            <button
              class={`w-3 h-3 rounded-full ${
                i === index() ? "bg-accent" : "bg-gray-300"
              }`}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
