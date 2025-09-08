export default function GalleryGrid(props: { items: any[]; filter: string }) {
  const items = props.items.filter(
    (i) => !props.filter || i.category === props.filter
  );
  return (
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((i) => (
        <div key={i.id} class="rounded overflow-hidden">
          <img src={i.src} alt={i.title} class="w-full h-40 object-cover" />
        </div>
      ))}
    </div>
  );
}
