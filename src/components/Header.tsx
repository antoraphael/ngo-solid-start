// src/components/Header.tsx
import { createSignal } from "solid-js";
import { A, useLocation } from "@solidjs/router";

export default function Header() {
  const [open, setOpen] = createSignal(false);
  const loc = useLocation();

  const navItems = [
    { name: "Home", href: "/", end: true },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Events", href: "/events" },
    { name: "Press", href: "/press" },
    // { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  const normalize = (p: string) => {
    if (!p) return "/";
    // remove trailing slashes, keep root "/"
    return p === "/" ? "/" : p.replace(/\/+$/, "");
  };

  const isActiveLink = (href: string, end?: boolean) => {
    const path = normalize(loc.pathname);
    const target = normalize(href);
    if (end) return path === target;
    if (target === "/") return path === "/";
    return path === target || path.startsWith(target + "/");
  };

  return (
    <header class="bg-brand-light shadow-md sticky top-0 z-50 border-b border-brand/20">
      <div class="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div class="flex items-center gap-3">
          <A
            href="/"
            class="text-2xl font-bold transition-colors"
            // logo should reflect active state too
            classList={{
              "text-brand": !isActiveLink("/", true),
              "text-accent font-semibold": isActiveLink("/", true),
            }}
          >
            YES Foundation
          </A>
        </div>

        {/* Desktop nav */}
        <nav class="hidden md:flex gap-6 items-center font-medium">
          {navItems.map((ele) => (
            <A
              href={ele.href}
              end={ele.end}
              // apply classes depending on active state
              classList={{
                "transition-colors text-brand hover:text-accent": !isActiveLink(
                  ele.href,
                  ele.end
                ),
                "font-semibold text-accent underline underline-offset-4":
                  isActiveLink(ele.href, ele.end),
              }}
            >
              {ele.name}
            </A>
          ))}
          <A
            href="/donate"
            class="bg-brand text-white px-4 py-2 rounded-lg shadow hover:bg-accent transition-colors"
          >
            Donate
          </A>
        </nav>
        {/* Mobile menu button */}
        <button
          class="md:hidden text-2xl"
          onClick={() => setOpen(!open())}
          aria-label="menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile nav */}
      {open() && (
        <div class="md:hidden border-t bg-brand-light shadow-inner">
          <div class="flex flex-col px-4 py-3 gap-2">
            {navItems.map((ele) => (
              <A
                href={ele.href}
                end={ele.end}
                class="py-2 transition-colors"
                classList={{
                  "text-brand hover:text-accent": !isActiveLink(
                    ele.href,
                    ele.end
                  ),
                  "font-semibold text-accent underline underline-offset-4":
                    isActiveLink(ele.href, ele.end),
                }}
                onClick={() => setOpen(false)}
              >
                {ele.name}
              </A>
            ))}
            <A
              href="/donate"
              class="bg-brand text-white px-4 py-2 rounded-lg shadow hover:bg-accent transition-colors mt-2 text-center"
              onClick={() => setOpen(false)}
            >
              Donate
            </A>
          </div>
        </div>
      )}
    </header>
  );
}
