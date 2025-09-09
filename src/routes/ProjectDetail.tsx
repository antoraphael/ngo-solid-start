import { useParams, A } from "@solidjs/router";
import { createMemo } from "solid-js";
import { PLACEHOLDER_IMG } from "../lib/constants";

const DETAILS: Record<string, any> = {
  "house-building": {
    title: "House Building",
    content: "We build safe homes.",
    category: "Environment",
  },
  "school-support": {
    title: "School Support",
    content: "Support to rural schools.",
    category: "Education",
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
          <img
            src={project().img || PLACEHOLDER_IMG}
            alt={project().title}
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h4 class="font-semibold">Category</h4>
            <p class="text-sm">{project().category ?? "General"}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
