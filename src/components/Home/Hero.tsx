import { createSignal, onCleanup, onMount } from "solid-js";
import { heroImages } from "../../lib/content";

export default function Hero() {
  const [current, setCurrent] = createSignal(0);

  // Auto-slide every 4s, stop at last
  onMount(() => {
    const interval = setInterval(() => {
      if (current() < heroImages.length - 1) {
        setCurrent((c) => c + 1);
      }
    }, 4000);
    onCleanup(() => clearInterval(interval));
  });

  // Manual navigation
  const prevSlide = () => {
    if (current() > 0) setCurrent((c) => c - 1);
  };
  const nextSlide = () => {
    if (current() < heroImages.length - 1) setCurrent((c) => c + 1);
  };

  return (
    <section class="relative w-full h-[500px] overflow-hidden">
      {/* Slides */}
      <div
        class="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current() * 100}%)`,
        }}
      >
        {heroImages.map((img, i) => (
          <img
            src={img.src}
            alt={`Slide ${i + 1}`}
            class="w-full flex-shrink-0 object-cover h-[500px] select-none"
            draggable={false}
          />
        ))}
      </div>

      {/* Overlay text */}
      <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div class="text-center text-white px-4">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Empowering Communities in Sikkim
          </h1>
          <p class="mb-6 max-w-2xl mx-auto">
            Together, we build homes, support education, and improve healthcare
            for the people of Sikkim.
          </p>
          <a
            href="/donate"
            class="bg-brand text-white px-6 py-3 rounded-lg shadow hover:bg-brand-dark transition-colors"
          >
            Donate Now
          </a>
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        disabled={current() === 0}
        class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 text-brand p-3 rounded-full shadow hover:bg-accent hover:text-white transition disabled:opacity-40"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        disabled={current() === heroImages.length - 1}
        class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 text-brand p-3 rounded-full shadow hover:bg-accent hover:text-white transition disabled:opacity-40"
      >
        ›
      </button>

      {/* Dots */}
      <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {heroImages.map((_, i) => (
          <button
            class={`w-3 h-3 rounded-full ${
              i === current() ? "bg-accent" : "bg-white/60"
            }`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  );
}
