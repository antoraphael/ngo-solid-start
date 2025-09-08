import { A } from "@solidjs/router";

export default function ProjectCard(props: {
  id: string;
  title: string;
  img: string;
  excerpt: string;
}) {
  return (
    <div class="border rounded overflow-hidden">
      <img src={props.img} alt={props.title} class="w-full h-40 object-cover" />
      <div class="p-4">
        <h3 class="font-semibold">{props.title}</h3>
        <p class="text-sm mb-3">{props.excerpt}</p>
        <A href={`/projects/${props.id}`} class="text-brand">
          Read more
        </A>
      </div>
    </div>
  );
}
