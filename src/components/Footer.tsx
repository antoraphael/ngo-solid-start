import { A } from "@solidjs/router";
import { EVENTS, ORG } from "../lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  const recent = EVENTS.slice(-3).reverse();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Events", href: "/events" },
    { name: "Press", href: "/press" },
    { name: "Team", href: "/team" },
    { name: "Donate", href: "/donate" },
  ];

  const socials = [
    { name: "Facebook", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
  ];

  return (
    <footer class="mt-12 bg-brand-light text-gray-700">
      <div class="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 class="text-lg font-bold mb-2 text-brand">NGO Sikkim</h3>
          <p class="text-sm mb-3">{ORG.summary}</p>
          <p class="text-sm">
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${ORG.contact.email}`}
              class="text-brand hover:underline"
            >
              {ORG.contact.email}
            </a>
          </p>
          <p class="text-sm">
            <strong>Phone:</strong>{" "}
            <a
              href={`tel:${ORG.contact.phone}`}
              class="text-brand hover:underline"
            >
              {ORG.contact.phone}
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 class="font-semibold mb-3 text-brand">Quick Links</h4>
          <ul class="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li>
                <A href={link.href} class="hover:text-brand">
                  {link.name}
                </A>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 class="font-semibold mb-3 text-brand">Connect</h4>
          <div class="flex gap-3 text-sm">
            {socials.map((s) => (
              <a href={s.href} class="hover:text-brand">
                {s.name}
              </a>
            ))}
          </div>
          <div class="mt-6 text-sm">
            <h5 class="font-medium mb-1">Office</h5>
            <p>Kolokang, Sikkim, India</p>
          </div>
        </div>

        {/* Recent Events + CTA */}
        <div>
          <h4 class="font-semibold mb-3 text-brand">Recent Events</h4>
          <ul class="text-sm space-y-2">
            {recent.map((e) => (
              <li>
                <div class="font-medium">{e.title}</div>
                <div class="text-xs text-gray-500">{e.date}</div>
              </li>
            ))}
          </ul>
          <div class="mt-6">
            <A
              href="/donate"
              class="bg-brand text-white px-4 py-2 rounded-lg shadow hover:bg-accent transition-colors"
            >
              Donate Now
            </A>
          </div>
        </div>
      </div>

      {/* COPYRIGHT BAR - DIFFERENT GREEN */}
      <div class="bg-brand-dark text-white text-center py-4 text-sm">
        © {year} NGO Sikkim — All rights reserved.
      </div>
    </footer>
  );
}
