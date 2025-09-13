// src/routes/Press.tsx
import { PRESS } from "../lib/content";

export default function Press() {
  return (
    <section class="container mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold mb-4">Press & Conclusion</h1>
      <p class="mb-4">{PRESS.conclusion}</p>
      <div class="mt-6">
        <h4 class="font-semibold">Contact for press</h4>
        <p class="text-sm">Email: {PRESS.email}</p>
        <p class="text-sm">Phone: {PRESS.phone}</p>
      </div>
    </section>
  );
}
