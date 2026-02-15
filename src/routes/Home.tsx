import Hero from "../components/Home/Hero";
import { A } from "@solidjs/router";
import WhatWeDo from "../components/Home/WhatWeDo";
import VisionMission from "../components/Home/VisionMission";
import Impact from "../components/Home/Impact";
import Voices from "../components/Home/Voices";

export default function Home() {
  return (
    <div>
      {/* Hero Carousel */}
      <Hero />

      {/* Vision & Mission */}
      <VisionMission />

      {/* Our Initiatives */}
      <WhatWeDo />

      {/* Impact Numbers */}
      <Impact />

      {/* Stories / Testimonials */}
      <Voices />

      {/* Call to Action */}
      <section class="py-16 bg-accent text-white text-center">
        <h2 class="text-3xl font-bold mb-6">Join Our Mission</h2>
        <p class="max-w-2xl mx-auto mb-6">
          Be a part of the change in Sikkim. Support us through volunteering,
          partnerships, or donations. Every step counts towards building a
          better tomorrow.
        </p>
        <div class="flex justify-center gap-4">
          <A
            href="/contact?from=volunteer"
            class="bg-white text-brand px-6 py-3 rounded-lg shadow hover:bg-brand hover:text-white transition"
          >
            Volunteer
          </A>
          <A
            href="/donate"
            class="bg-brand text-white px-6 py-3 rounded-lg shadow hover:bg-brand-dark transition"
          >
            Donate Now
          </A>
        </div>
      </section>
    </div>
  );
}
