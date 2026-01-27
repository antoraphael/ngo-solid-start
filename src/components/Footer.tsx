// src/components/Footer.tsx
import { A } from "@solidjs/router";

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
    { name: "Donate", href: "/donate" },
  ];

  const involvementLinks = [
    { name: "Volunteer", href: "/get-involved#volunteer" },
    { name: "Partner With Us", href: "/get-involved#partner" },
    { name: "Careers", href: "/careers" },
    { name: "Donate", href: "/donate" },
  ];

  const socials = [
    {
      name: "Facebook",
      href: "https://facebook.com/yesfoundationsikkim",
      img: "/icons/facebook.svg",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/yesfoundationsikkim",
      img: "/icons/twitter.svg",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/yesfoundationsikkim",
      img: "/icons/instagram.svg",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/yesfoundationsikkim",
      img: "/icons/linkedin.svg",
    },
  ];

  return (
    <footer class="bg-brand-light text-gray-800">
      <div class="container mx-auto px-6 md:px-12 py-16">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* About NGO */}
          <div class="md:col-span-3">
            <A href="/" class="inline-block">
              <h2 class="text-xl font-bold text-gray-900">YES Foundation</h2>
            </A>
            <p class="mt-3 text-sm text-gray-700 leading-relaxed">
              Empowering youth and communities in Sikkim through education,
              health, environment, and grassroots development initiatives.
            </p>

            {/* Social icons */}
            <div class="mt-4 flex gap-3">
              {socials.map((s) => (
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:text-accent hover:border-accent transition"
                >
                  <img
                    src={s.img}
                    alt={s.name}
                    class="w-5 h-5"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div class="md:col-span-3">
            <h4 class="text-base font-semibold text-gray-900 mb-4">
              Quick Links
            </h4>
            <ul class="space-y-2 text-sm text-gray-700">
              {quickLinks.map((l) => (
                <li>
                  <A href={l.href} class="hover:text-accent transition">
                    {l.name}
                  </A>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div class="md:col-span-3">
            <h4 class="text-base font-semibold text-gray-900 mb-4">
              Get Involved
            </h4>
            <ul class="space-y-2 text-sm text-gray-700">
              {involvementLinks.map((l) => (
                <li>
                  <A href={l.href} class="hover:text-accent transition">
                    {l.name}
                  </A>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div class="md:col-span-3">
            <h4 class="text-base font-semibold text-gray-900 mb-4">Contact</h4>
            <p class="text-sm text-gray-700">
              Email:{" "}
              <a
                class="text-brand hover:underline"
                href="mailto:yesfoundationsikkim@gmail.com"
              >
                yesfoundationsikkim@gmail.com
              </a>
            </p>
            <p class="text-sm text-gray-700 mt-1">
              Phone:{" "}
              <a class="text-brand hover:underline" href="tel:+916297273900">
                +91 62972 73900
              </a>
            </p>
            <p class="text-sm text-gray-700 mt-3">
              Office: Gangtok, Sikkim, India
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div class="bg-white border-t border-gray-200 py-4">
        <div class="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© {year} YES Foundation — All rights reserved.</p>
          <div class="flex gap-4 mt-3 md:mt-0">
            <A href="/privacy" class="hover:text-accent">
              Privacy Policy
            </A>
            <A href="/terms" class="hover:text-accent">
              Terms of Service
            </A>
          </div>
        </div>
      </div>
    </footer>
  );
}
