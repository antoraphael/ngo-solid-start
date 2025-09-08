export default function Team() {
  const members = [
    {
      name: "Founder",
      title: "Founder",
      bio: "Founder bio",
      img: "/src/assets/team-1.jpg",
    },
    {
      name: "Co-Director",
      title: "Co-Director",
      bio: "Co-director bio",
      img: "/src/assets/team-2.jpg",
    },
  ];
  return (
    <section class="container mx-auto px-4 py-8">
      <h2 class="text-2xl font-bold mb-4">Our Team</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {members.map((m) => (
          <div class="border rounded p-4 text-center">
            <img
              src={m.img}
              alt={m.name}
              class="w-24 h-24 object-cover rounded-full mx-auto mb-3"
            />
            <h3 class="font-semibold">{m.name}</h3>
            <p class="text-sm">{m.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
