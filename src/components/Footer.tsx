// src/components/Footer.tsx
import { A } from "@solidjs/router";

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    { name: "Donate", href: "/donate" },
  ];

  const involvementLinks = [
    { name: "Volunteer", href: "/contact?from=volunteer" },
    { name: "Donate", href: "/donate" },
  ];

  const socials = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1FYZpShjpf/",
      img: "/icons/facebook.svg",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/yesfoundationsikkim?igsh=MjN0b2NtOXkxOXVx",
      img: "/icons/instagram.svg",
    },
  ];

  return (
    <footer class="bg-brand-light text-gray-800">
      {/* Main footer */}
      <div class="container mx-auto px-6 md:px-12 py-16">
        <div class="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* About */}
          <div class="md:col-span-4">
            <A href="/" class="inline-block group">
              <h2 class="text-xl font-bold text-gray-900 group-hover:text-accent transition-colors">
                YES Foundation
              </h2>
            </A>

            <p class="mt-4 text-sm text-gray-700 leading-relaxed max-w-sm">
              Empowering youth and communities in Sikkim through education,
              health, environment, and grassroots development initiatives.
            </p>

            {/* Socials */}
            <div class="mt-6 flex gap-4">
              {socials.map((s) => (
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  class="
                    group w-11 h-11 flex items-center justify-center
                    rounded-full border border-gray-300
                    transition-all duration-300
                    hover:border-accent hover:shadow-md hover:-translate-y-1
                  "
                >
                  <img
                    src={s.img}
                    alt={s.name}
                    class="w-5 h-5 opacity-70 group-hover:opacity-100 transition"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div class="md:col-span-3">
            <h4 class="footer-title">Quick Links</h4>
            <ul class="mt-4 space-y-3 text-sm">
              {quickLinks.map((l) => (
                <li>
                  <A
                    href={l.href}
                    class="
                      group inline-flex items-center gap-2
                      text-gray-700 transition-all duration-200
                      hover:text-accent hover:translate-x-1
                    "
                  >
                    <span class="w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-3" />
                    {l.name}
                  </A>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div class="md:col-span-3">
            <h4 class="footer-title">Get Involved</h4>
            <ul class="mt-4 space-y-3 text-sm">
              {involvementLinks.map((l) => (
                <li>
                  <A
                    href={l.href}
                    class="
                      group inline-flex items-center gap-2
                      text-gray-700 transition-all duration-200
                      hover:text-accent hover:translate-x-1
                    "
                  >
                    <span class="w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-3" />
                    {l.name}
                  </A>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div class="md:col-span-2">
            <h4 class="footer-title">Contact</h4>

            <div class="mt-4 space-y-2 text-sm text-gray-700">
              <p>
                <span class="font-medium">Email:</span>{" "}
                <a
                  class="text-brand hover:text-accent transition"
                  href="mailto:yesfoundationsikkim@gmail.com"
                >
                  yesfoundationsikkim@gmail.com
                </a>
              </p>
              <p>
                <span class="font-medium">Phone:</span>{" "}
                <a
                  class="text-brand hover:text-accent transition"
                  href="tel:+916297273900"
                >
                  +91 62972 73900
                </a>
              </p>
              <p class="pt-2">Gangtok, Sikkim, India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div class="bg-white border-t border-gray-200">
        <div class="container mx-auto px-6 md:px-12 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-600">
          <p>© {year} YES Foundation — All rights reserved.</p>

          <div class="flex gap-6">
            <A href="/policies" class="hover:text-accent transition-colors">
              Privacy Policy
            </A>
            <A href="/terms" class="hover:text-accent transition-colors">
              Terms of Service
            </A>
          </div>
        </div>
      </div>
    </footer>
  );
}
