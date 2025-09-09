// src/components/Team.tsx
import { PLACEHOLDER_IMG } from "../lib/constants";

const TEAM = [
  { name: "Founder", role: "Founder & Director" },
  { name: "Co-Director", role: "Co-Director" },
  { name: "Advisor", role: "Advisory Board" },
  { name: "Volunteer", role: "Volunteer" },
];

export default function Team() {
  return (
    <section class="container mx-auto px-4 py-12">
      <h2 class="text-2xl font-bold mb-6">Meet the Team</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        {TEAM.map((person) => (
          <div class="text-center">
            <img
              src={PLACEHOLDER_IMG}
              alt={person.name}
              class="w-32 h-32 mx-auto rounded-full object-cover mb-3"
            />
            <h3 class="font-semibold">{person.name}</h3>
            <p class="text-sm text-gray-600">{person.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
