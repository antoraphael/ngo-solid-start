// src/routes/ProjectDetail.tsx
import { useParams, A } from "@solidjs/router";
import { createMemo, onMount } from "solid-js";
import ImageWithFallback from "../components/Home/ImageWithFallBack";
import { PLACEHOLDER_IMG } from "../lib/constants";

const PROJECTS_LOOKUP: Record<
  string,
  {
    id: string;
    title: string;
    subtitle?: string;
    description: string;
    gallery?: string[];
    partners?: string[];
    timeline?: { date: string; note: string }[];
    impact?: { metric: string; value: string }[];
    category?: string;
    location?: string;
    year?: number;
  }
> = {
  "house-building": {
    id: "house-building",
    title: "House Building Project",
    subtitle: "Safe homes for vulnerable families",
    description:
      "Working closely with local leaders and masons, YES Foundation constructs durable, weather-resistant homes for families who previously lived in unsafe structures. The project emphasizes local materials, thermal efficiency and involvement of the household in building decisions.",
    gallery: [
      "/placeholder/house-before.jpg",
      "/placeholder/house-after.jpg",
      "/placeholder/house-2.jpg",
    ],
    partners: ["Local Panchayat", "District Social Welfare"],
    timeline: [
      { date: "Jan 2022", note: "Community selection & baseline survey" },
      { date: "Mar 2022", note: "Material mobilisation & training" },
      {
        date: "Aug 2022",
        note: "Construction completed for Phase 1 (10 houses)",
      },
      { date: "Dec 2023", note: "Phase 2 completed (11 houses)" },
    ],
    impact: [
      { metric: "Families housed", value: "21" },
      { metric: "Lives improved", value: "100+" },
    ],
    category: "Housing",
    location: "Mangan",
    year: 2023,
  },

  "school-support": {
    id: "school-support",
    title: "Rural School Support",
    subtitle: "Better facilities, better learning",
    description:
      "We upgrade classroom infrastructure, provide learning materials and train teachers in active learning pedagogy. The goal is to reduce dropouts and improve learning outcomes in remote schools.",
    gallery: ["/placeholder/school.jpg", "/placeholder/school-2.jpg"],
    partners: ["District Education Office", "Local NGOs"],
    timeline: [
      { date: "Jul 2021", note: "Needs assessment & stakeholder workshops" },
      { date: "Sep 2021", note: "Material & furniture distribution" },
      { date: "Mar 2022", note: "Teacher training workshops" },
    ],
    impact: [
      { metric: "Schools supported", value: "8" },
      { metric: "Students reached", value: "1,200+" },
    ],
    category: "Education",
    location: "Gangtok (rural)",
    year: 2022,
  },

  "health-camps": {
    id: "health-camps",
    title: "Health Camps & Awareness",
    subtitle: "Accessible healthcare outreach",
    description:
      "Periodic camps bring screenings, basic treatment and health education to villages with limited access to health facilities. Camps include maternal & child health messaging and referrals when needed.",
    gallery: ["/placeholder/health-camp.jpg"],
    partners: ["Local Health Department"],
    timeline: [
      { date: "2021–2024", note: "Ongoing periodic camps across districts" },
    ],
    impact: [
      { metric: "Camps held", value: "200+" },
      { metric: "People screened", value: "10,000+" },
    ],
    category: "Health",
    location: "Statewide",
    year: 2021,
  },

  "tree-plantation": {
    id: "tree-plantation",
    title: "Community Tree Plantation",
    subtitle: "Restoring local ecology",
    description:
      "Working with community groups to plant native saplings, improve soil and protect watersheds. Each drive is accompanied by training on sapling care.",
    gallery: ["/placeholder/trees.jpg"],
    partners: ["Forest Department", "Youth Volunteers"],
    timeline: [{ date: "2023", note: "Large-scale drives in South Sikkim" }],
    impact: [{ metric: "Saplings planted", value: "160+" }],
    category: "Environment",
    location: "South Sikkim",
    year: 2024,
  },
};

export default function ProjectDetail() {
  const params = useParams();
  const id = params.id ?? "";

  const project = createMemo(() => PROJECTS_LOOKUP[id]);

  // small defensive guard: if id param changes, scroll to top
  onMount(() => window.scrollTo({ top: 0, behavior: "smooth" }));

  if (!project()) {
    return (
      <section class="container mx-auto px-6 md:px-12 py-12">
        <h1 class="text-2xl font-bold mb-4">Project not found</h1>
        <p class="text-gray-600 mb-4">
          We could not find a project with the requested identifier.
        </p>
        <A href="/projects" class="inline-block text-brand underline">
          Back to Projects
        </A>
      </section>
    );
  }

  const p = project()!;

  return (
    <main class="container mx-auto px-6 md:px-12 py-12">
      <div class="grid lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2">
          <h1 class="text-3xl font-bold text-gray-900">{p.title}</h1>
          {p.subtitle && <p class="text-gray-700 mt-2">{p.subtitle}</p>}

          {/* meta */}
          <div class="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
            <div class="px-3 py-1 bg-gray-100 rounded-full">{p.category}</div>
            {p.location && (
              <div class="px-3 py-1 bg-gray-100 rounded-full">{p.location}</div>
            )}
            {p.year && (
              <div class="px-3 py-1 bg-gray-100 rounded-full">{p.year}</div>
            )}
          </div>

          {/* gallery */}
          <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(p.gallery?.length ? p.gallery : [PLACEHOLDER_IMG]).map(
              (src, idx) => (
                <div class="rounded overflow-hidden">
                  <ImageWithFallback
                    src={src}
                    alt={`${p.title} ${idx + 1}`}
                    class="w-full h-48 object-cover"
                  />
                </div>
              )
            )}
          </div>

          {/* description */}
          <article class="mt-6 prose prose-sm md:prose-base max-w-none text-gray-700">
            <p>{p.description}</p>
            <p>
              The project is planned and executed with local stakeholders to
              ensure ownership and long-term sustainability. Training, handover
              and local maintenance are part of the project cycle.
            </p>
          </article>

          {/* timeline */}
          {p.timeline && p.timeline.length > 0 && (
            <section class="mt-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Timeline</h3>
              <ol class="border-l-2 border-gray-200 pl-4 space-y-4">
                {p.timeline.map((t) => (
                  <li>
                    <div class="text-sm text-gray-600">{t.date}</div>
                    <div class="text-gray-800">{t.note}</div>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* impact */}
          {p.impact && p.impact.length > 0 && (
            <section class="mt-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Impact</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {p.impact.map((it) => (
                  <div class="p-4 bg-gray-50 rounded">
                    <div class="text-lg font-bold text-brand">{it.value}</div>
                    <div class="text-sm text-gray-600">{it.metric}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* partners & CTA */}
          <div class="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div>
              <h4 class="text-sm font-semibold text-gray-900">Partners</h4>
              <div class="mt-2 text-sm text-gray-700">
                {(p.partners ?? []).join(", ")}
              </div>
            </div>

            <div class="ml-auto flex gap-3">
              <A
                href="/contact"
                class="px-4 py-2 rounded-md bg-brand text-white hover:bg-accent transition"
              >
                Get Involved
              </A>
              <A
                href="/donate"
                class="px-4 py-2 rounded-md border border-brand text-brand hover:bg-brand hover:text-white transition"
              >
                Donate (coming soon)
              </A>
            </div>
          </div>
        </div>

        {/* aside: quick facts */}
        <aside class="rounded-lg p-6 bg-gray-50 h-fit">
          <h4 class="text-lg font-semibold text-gray-900 mb-3">
            Project Details
          </h4>
          <dl class="text-sm text-gray-700 space-y-2">
            {p.location && (
              <div>
                <dt class="font-medium text-gray-800">Location</dt>
                <dd>{p.location}</dd>
              </div>
            )}
            {p.year && (
              <div>
                <dt class="font-medium text-gray-800">Year</dt>
                <dd>{p.year}</dd>
              </div>
            )}
            <div>
              <dt class="font-medium text-gray-800">Category</dt>
              <dd>{p.category}</dd>
            </div>
            {p.partners && p.partners.length > 0 && (
              <div>
                <dt class="font-medium text-gray-800">Partners</dt>
                <dd>{p.partners.join(", ")}</dd>
              </div>
            )}
          </dl>
        </aside>
      </div>

      {/* back link */}
      <div class="mt-8">
        <A href="/projects" class="text-brand hover:underline">
          ← Back to projects
        </A>
      </div>
    </main>
  );
}
