import { createSignal, onCleanup, onMount } from "solid-js";
import { whatWeDoItems } from "../../lib/content";

export default function WhatWeDo() {
  const [offset, setOffset] = createSignal(0);

  // auto move every 3s
  onMount(() => {
    const interval = setInterval(() => {
      setOffset((o) => (o + 1) % whatWeDoItems.length);
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
            {whatWeDoItems.concat(whatWeDoItems).map((item) => (
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
