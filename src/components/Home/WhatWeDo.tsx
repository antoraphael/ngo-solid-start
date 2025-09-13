import { createSignal, onCleanup, onMount } from "solid-js";

const items = [
  {
    title: "Education & Skill Development",
    desc: "Workshops, scholarships, and learning programs for youth.",
    img: "https://picsum.photos/seed/edu/600/400",
  },
  {
    title: "Health & Well-being",
    desc: "Health camps, awareness drives, and basic healthcare access.",
    img: "https://picsum.photos/seed/health/600/400",
  },
  {
    title: "Environment & Sustainability",
    desc: "Tree plantation, clean-up drives, and sustainable farming.",
    img: "https://picsum.photos/seed/env/600/400",
  },
  {
    title: "Community Development",
    desc: "Building homes, empowering women, and improving livelihoods.",
    img: "https://picsum.photos/seed/community/600/400",
  },
  {
    title: "Youth Empowerment",
    desc: "Training programs that develop leadership and soft skills.",
    img: "https://picsum.photos/seed/youth/600/400",
  },
];

export default function WhatWeDo() {
  const [offset, setOffset] = createSignal(0);

  // auto move every 3s
  onMount(() => {
    const interval = setInterval(() => {
      setOffset((o) => (o + 1) % items.length);
    }, 3000);
    onCleanup(() => clearInterval(interval));
  });

  return (
    <section class="py-16 overflow-hidden">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-brand mb-10">
          What We Do
        </h2>

        {/* Outer viewport */}
        <div class="relative w-full overflow-hidden">
          {/* Track */}
          <div
            class="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${offset() * 50}%)`,
            }}
          >
            {items.concat(items).map((item, i) => (
              <div
                class="w-1/2 flex-shrink-0 p-4"
                style={{ "max-width": "50%" }}
              >
                <div class="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
                  <img
                    src={item.img}
                    alt={item.title}
                    class="w-full h-48 object-cover"
                  />
                  <div class="p-6 flex-1 flex flex-col">
                    <h3 class="text-xl font-semibold text-accent mb-2">
                      {item.title}
                    </h3>
                    <p class="text-gray-600 text-sm flex-1">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
