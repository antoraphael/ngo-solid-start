// src/components/Impact.tsx
import { createSignal, onCleanup, onMount } from "solid-js";

function useCounter(target: number, duration = 1500) {
  const [value, setValue] = createSignal(0);

  const animate = () => {
    const start = performance.now();
    function step(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress; // easeInOutQuad
      setValue(Math.floor(target * eased));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    }
    requestAnimationFrame(step);
  };

  return { value, animate };
}

export default function Impact() {
  const [visible, setVisible] = createSignal(false);

  const stats = [
    {
      label: "Youth Reached",
      number: 10000,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-12 h-12 text-accent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5.121 17.804A7.5 7.5 0 0112 15.5a7.5 7.5 0 016.879 2.304M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      label: "Trees Planted",
      number: 500,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-12 h-12 text-accent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 2a6 6 0 00-6 6v1H5a3 3 0 100 6h1v7h12v-7h1a3 3 0 100-6h-1V8a6 6 0 00-6-6z"
          />
        </svg>
      ),
    },
    {
      label: "Health Camps",
      number: 200,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-12 h-12 text-accent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12h6m-3-3v6m9-6a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      label: "Community Projects",
      number: 50,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-12 h-12 text-accent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 8c-1.657 0-3 .843-3 2v1H7v-1c0-2.21 2.239-4 5-4s5 1.79 5 4v1h-2v-1c0-1.157-1.343-2-3-2zM6 12h12v8H6v-8z"
          />
        </svg>
      ),
    },
  ];

  const counters = stats.map((s) => useCounter(s.number));
  let sectionRef: HTMLDivElement | undefined;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !visible()) {
          setVisible(true);
          counters.forEach((c) => c.animate());
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef) observer.observe(sectionRef);
    onCleanup(() => observer.disconnect());
  });

  return (
    <section ref={sectionRef} class="py-20 bg-brand text-white">
      <div class="container mx-auto px-6 md:px-12 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
        <p class="max-w-2xl mx-auto text-white/80 mb-12">
          Together with our volunteers, partners, and communities, YES
          Foundation has touched thousands of lives in Sikkim. Here’s what we’ve
          achieved so far:
        </p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((s, i) => (
            <div class="flex flex-col items-center">
              <div class="mb-4">{s.icon}</div>
              <p class="text-4xl md:text-5xl font-extrabold">
                {counters[i].value()}
                {s.label.includes("Youth") ? "+" : ""}
              </p>
              <div class="w-12 h-1 bg-accent my-3 rounded"></div>
              <p class="text-lg font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
