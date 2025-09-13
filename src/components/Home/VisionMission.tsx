// src/components/VisionMissionDetailed.tsx
import { createSignal, onCleanup, onMount } from "solid-js";
import { ORG } from "../../lib/content";
import ImageWithFallback from "../ImageWithFallBack";

const sections = [
  {
    title: "🌱 Our Vision",
    text: `A just, inclusive, and resilient Sikkim where youth are empowered to lead change,
           communities thrive, and sustainable development uplifts even the most marginalized.`,
    img: "https://picsum.photos/seed/vision/900/600",
  },
  {
    title: "🎯 Our Mission",
    text: `We engage, educate, and empower the people of Sikkim through initiatives in
           education, health, environment, and community leadership — ensuring youth energy
           is channeled into meaningful change.`,
    img: "https://picsum.photos/seed/mission/900/600",
  },
  {
    title: "📖 Our Story",
    text: `Founded in ${ORG.est}, ${ORG.fullName} began with a group of passionate young
           leaders who wanted to uplift their communities. Over the years, the Foundation
           has grown into a movement connecting youth, volunteers, and local partners.`,
    img: "https://picsum.photos/seed/story/900/600",
  },
  {
    title: "💡 Our Values",
    text: `Integrity, inclusivity, and sustainability guide everything we do.
           We believe in empowering local leadership, building long-term resilience,
           and ensuring that every action contributes to a just society.`,
    img: "https://picsum.photos/seed/values/900/600",
  },
];

export default function VisionMissionDetailed() {
  return (
    <section>
      {sections.map((sec, i) => (
        <SectionBlock sec={sec} index={i} />
      ))}
    </section>
  );
}

// Child component for each section
function SectionBlock(props: { sec: (typeof sections)[0]; index: number }) {
  const [visible, setVisible] = createSignal(false);
  let ref: HTMLDivElement | undefined;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref) observer.observe(ref);
    onCleanup(() => observer.disconnect());
  });

  const isEven = props.index % 2 === 0;
  const bgClass = isEven ? "bg-white" : "bg-brand-light/30";

  return (
    <div ref={ref} class={`${bgClass} py-20`}>
      <div class="container mx-auto px-6 md:px-12">
        <div class="grid md:grid-cols-2 gap-10 items-center">
          {/* Text left / right depending on index */}
          {isEven ? (
            <>
              <div>
                <h3 class="text-2xl md:text-3xl font-bold text-accent mb-4">
                  {props.sec.title}
                </h3>
                <p class="text-lg text-gray-700 leading-relaxed">
                  {props.sec.text}
                </p>
              </div>
              <div
                class={`transition-all duration-700 ${
                  visible()
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-16"
                }`}
              >
                <ImageWithFallback
                  src={props.sec.img}
                  alt={props.sec.title}
                  class="w-full h-80 object-cover rounded-xl shadow-md"
                />
              </div>
            </>
          ) : (
            <>
              <div
                class={`transition-all duration-700 ${
                  visible()
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-16"
                }`}
              >
                <ImageWithFallback
                  src={props.sec.img}
                  alt={props.sec.title}
                  class="w-full h-80 object-cover rounded-xl shadow-md"
                />
              </div>
              <div>
                <h3 class="text-2xl md:text-3xl font-bold text-accent mb-4">
                  {props.sec.title}
                </h3>
                <p class="text-lg text-gray-700 leading-relaxed">
                  {props.sec.text}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
