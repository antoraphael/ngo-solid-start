// src/routes/ProjectDetail.tsx
import { useParams, A } from "@solidjs/router";
import { createMemo } from "solid-js";

const DETAILS: Record<string, any> = {
  "house-building": {
    title: "House Building",
    content:
      "We partner with local communities to build safe, weatherproof homes using local materials and labour. Each project includes community training on maintenance and disaster-resilient construction practices.",
    img: "/src/assets/proj-1.jpg",
    category: "Environment",
  },
  "school-support": {
    title: "School Support",
    content:
      "Support to rural schools including learning materials, teacher training and infrastructure improvements to create safe and inspiring classrooms.",
    img: "/src/assets/proj-2.jpg",
    category: "Education",
  },
  "health-camp": {
    title: "Health Camp",
    content:
      "Periodic medical camps offering basic health check-ups, vaccinations, and awareness programs focused on hygiene and preventive care.",
    img: "/src/assets/proj-3.jpg",
    category: "Health",
  },
};

export default function ProjectDetail() {
  const params = useParams();
  const id = params.id ?? "";

  const project = createMemo(() => DETAILS[id]);

  if (!project()) {
    return (
      <section class="container mx-auto px-4 py-12">
        <h1 class="text-2xl font-bold mb-4">Project not found</h1>
        <p class="mb-4">We couldn't find the project you're looking for.</p>
        <A href="/projects" class="text-brand">
          Back to Projects
        </A>
      </section>
    );
  }

  return (
    <section class="container mx-auto px-4 py-12">
      <div class="grid md:grid-cols-3 gap-8">
        <div class="md:col-span-2">
          <h1 class="text-3xl font-bold mb-4">{project().title}</h1>
          <p class="mb-6">{project().content}</p>
          <A href="/projects" class="inline-block text-brand">
            ← Back to Projects
          </A>
        </div>
        <aside class="rounded overflow-hidden shadow-sm">
          {project().img ? (
            <img
              src={project().img}
              alt={project().title}
              class="w-full h-48 object-cover"
            />
          ) : (
            <div class="w-full h-48 bg-gray-100 flex items-center justify-center">
              No image
            </div>
          )}
          <div class="p-4">
            <h4 class="font-semibold">Category</h4>
            <p class="text-sm">{project().category ?? "General"}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
