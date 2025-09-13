// src/routes/Projects.tsx
import { HOUSES } from "../lib/content";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section class="container mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold mb-6">
        Completed Houses — "House Makers of Sikkim"
      </h1>
      <p class="mb-6">
        YES Foundation partnered with local stakeholders and funders to build
        safe homes for families living below the poverty line.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {HOUSES.map((h) => (
          <ProjectCard
            id={h.id}
            title={h.owner}
            excerpt={`${h.location} — ${h.district} • Opened: ${h.openedOn}`}
            img={undefined}
          />
        ))}
      </div>
    </section>
  );
}
