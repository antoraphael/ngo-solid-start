// src/routes/NotFound.tsx
import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <section class="container mx-auto px-4 py-24 text-center">
      <h1 class="text-4xl font-bold mb-4">404 — Page not found</h1>
      <p class="mb-6 text-gray-600">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <A href="/" class="bg-brand text-white px-4 py-2 rounded">
        Back to Home
      </A>
    </section>
  );
}
