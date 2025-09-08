export default function Footer() {
  return (
    <footer class="bg-gray-50 border-t mt-8">
      <div class="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between">
        <div>
          <h3 class="font-bold">NGO Sikkim</h3>
          <p class="text-sm">
            Helping communities in Sikkim through education, health and
            environment programmes.
          </p>
        </div>
        <div class="mt-4 md:mt-0">
          <h4 class="font-semibold">Quick Links</h4>
          <ul class="text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Gallery</li>
          </ul>
        </div>
        <div class="mt-4 md:mt-0">
          <h4 class="font-semibold">Contact</h4>
          <p class="text-sm">email@example.org</p>
          <p class="text-sm">+91 12345 67890</p>
        </div>
      </div>
      <div class="bg-gray-100 text-center py-4 text-sm">
        © {new Date().getFullYear()} NGO Sikkim. All rights reserved.
      </div>
    </footer>
  );
}
