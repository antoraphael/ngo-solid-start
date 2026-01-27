import { A } from "@solidjs/router";
import { PLACEHOLDER_IMG } from "../lib/constants";

export default function ProjectCard(props: {
  id: string;
  title: string;
  excerpt: string;
  img?: string;
}) {
  return (
    <div class="rounded overflow-hidden shadow hover:shadow-lg transition">
      <img
        src={props.img || PLACEHOLDER_IMG}
        alt={props.title}
        class="w-full h-40 object-cover"
      />
      <div class="p-4">
        <h3 class="font-bold mb-2">{props.title}</h3>
        <p class="text-sm text-gray-600 mb-2">{props.excerpt}</p>
        <A href={`/projects/${props.id}`} class="text-brand">
          Learn more →
        </A>
      </div>
    </div>
  );
}
