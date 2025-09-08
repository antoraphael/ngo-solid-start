import { For } from "solid-js";

type GalleryItem = {
  id: string;
  src: string;
  title?: string;
  category: string;
};

export default function GalleryGrid(props: {
  items: GalleryItem[];
  filter: string;
}) {
  const filtered = () =>
    props.items.filter((i) => !props.filter || i.category === props.filter);

  return (
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <For each={filtered()}>
        {(ele) => (
          <div class="rounded overflow-hidden">
            <img
              src={ele.src}
              alt={ele.title}
              class="w-full h-40 object-cover"
            />
          </div>
        )}
      </For>
    </div>
  );
}
