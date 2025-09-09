// src/components/Footer.tsx
import { A } from "@solidjs/router";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer class="bg-gray-900 text-gray-200 mt-12">
      <div class="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* NGO description */}
        <div>
          <h3 class="text-xl font-bold text-white mb-2">NGO Sikkim</h3>
          <p class="text-sm text-gray-400">
            Empowering communities in Sikkim through education, health, and
            sustainable development projects.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 class="font-semibold text-white mb-3">Quick Links</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <A href="/" class="hover:text-brand">
                Home
              </A>
            </li>
            <li>
              <A href="/about" class="hover:text-brand">
                About Us
              </A>
            </li>
            <li>
              <A href="/projects" class="hover:text-brand">
                Projects
              </A>
            </li>
            <li>
              <A href="/gallery" class="hover:text-brand">
                Gallery
              </A>
            </li>
            <li>
              <A href="/contact" class="hover:text-brand">
                Contact
              </A>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 class="font-semibold text-white mb-3">Contact</h4>
          <p class="text-sm">📧 info@ngosikkim.org</p>
          <p class="text-sm">📞 +91 12345 67890</p>
          <div class="flex gap-3 mt-3">
            <a href="#" class="hover:text-brand">
              🌐 Facebook
            </a>
            <a href="#" class="hover:text-brand">
              🐦 Twitter
            </a>
            <a href="#" class="hover:text-brand">
              📷 Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div class="bg-gray-800 text-center py-4 text-sm text-gray-500">
        © {year} NGO Sikkim — All rights reserved.
      </div>
    </footer>
  );
}
