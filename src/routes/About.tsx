// src/routes/About.tsx
import { ORG, EXECUTIVES } from "../lib/content";
import ImageWithFallback from "../components/Home/ImageWithFallBack";

export default function About() {
  return (
    <section class="container mx-auto px-4 py-12">
      <div class="grid md:grid-cols-3 gap-8 items-center">
        <div class="md:col-span-2">
          <h1 class="text-3xl font-bold mb-4">{ORG.fullName}</h1>
          <p class="mb-4">{ORG.summary}</p>
          <p class="mb-2">
            <strong>Established:</strong> {ORG.est}
          </p>
          <p class="mb-2">
            <strong>Registration No:</strong> {ORG.regNo}
          </p>
        </div>
        <div>
          <ImageWithFallback class="w-full h-48 object-cover rounded" />
        </div>
      </div>

      <hr class="my-8" />

      <h2 class="text-2xl font-semibold mb-4">Executive Team</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {EXECUTIVES.map((p) => (
          <div class="text-center p-4 border rounded">
            <ImageWithFallback class="w-28 h-28 mx-auto rounded-full object-cover mb-3" />
            <div class="font-semibold">{p.name}</div>
            <div class="text-sm text-gray-600">{p.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
