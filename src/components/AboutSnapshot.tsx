export default function AboutSnapshot() {
  const pics = new Array(4)
    .fill(0)
    .map((_, i) => `/src/assets/about-${i + 1}.jpg`);
  return (
    <section class="container mx-auto px-4 py-8">
      <h2 class="text-2xl font-bold mb-4">Our Vision in Action</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        {pics.map((src) => (
          <img
            src={src}
            alt="activity"
            class="w-full h-40 object-cover rounded"
          />
        ))}
      </div>
    </section>
  );
}
