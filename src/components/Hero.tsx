export default function Hero() {
  return (
    <section class="relative h-[60vh] bg-gray-100 flex items-center">
      <div class="container mx-auto px-4 flex items-center gap-8">
        <div class="w-1/2">
          <h1 class="text-4xl font-bold mb-4">
            Working for Sikkim communities
          </h1>
          <p class="mb-4">
            We empower vulnerable communities through education, health &
            environment projects.
          </p>
          <a href="/projects" class="bg-brand text-white px-4 py-2 rounded">
            Our Projects
          </a>
        </div>
        <div class="w-1/2">
          <div
            class="h-56 bg-cover bg-center rounded"
            style={{ "background-image": "url('/src/assets/hero.jpg')" }}
          />
        </div>
      </div>
    </section>
  );
}
