import { PLACEHOLDER_IMG } from "../lib/constants";

export default function GalleryGrid(props: { items: any[]; filter: string }) {
  const items = props.items.filter(
    (i) => !props.filter || i.category === props.filter
  );

  return (
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((ele, i) => (
        <div class="rounded overflow-hidden">
          <img
            src={ele.src || PLACEHOLDER_IMG}
            alt={ele.title}
            class="w-full h-40 object-cover"
          />
        </div>
      ))}
    </div>
  );
}
