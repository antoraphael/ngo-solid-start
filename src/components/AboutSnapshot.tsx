// src/components/AboutSnapshot.tsx
import { PLACEHOLDER_IMG } from "../lib/constants";

export default function AboutSnapshot() {
  return (
    <section class="container mx-auto px-4 py-12">
      <h2 class="text-2xl font-bold mb-6">Our Vision</h2>
      <p class="mb-6">
        We strive to uplift rural communities in Sikkim by focusing on
        education, health, and sustainable development.
      </p>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((n) => (
          <img
            src={PLACEHOLDER_IMG}
            alt={`Activity ${n}`}
            class="rounded shadow-sm"
          />
        ))}
      </div>
    </section>
  );
}
