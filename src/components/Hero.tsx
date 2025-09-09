// src/components/Hero.tsx
import { PLACEHOLDER_IMG } from "../lib/constants";

export default function Hero() {
  return (
    <section class="relative h-[400px] md:h-[500px] bg-gray-200">
      <img
        src={PLACEHOLDER_IMG}
        alt="Hero Banner"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div class="text-center text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Empowering Communities in Sikkim
          </h1>
          <button class="bg-brand px-6 py-2 rounded shadow">
            Get Involved
          </button>
        </div>
      </div>
    </section>
  );
}
