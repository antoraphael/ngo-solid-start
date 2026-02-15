import { createSignal, createEffect, onCleanup } from "solid-js";
import { A, useLocation } from "@solidjs/router";

const HEADER_HEIGHT = "4rem"; // h-16

export default function Header() {
  const [open, setOpen] = createSignal(false);
  const loc = useLocation();

  const navItems = [
    { name: "Home", href: "/", end: true },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string, end?: boolean) => {
    if (end) return loc.pathname === href;
    return loc.pathname.startsWith(href);
  };

  // lock body scroll when mobile menu open
  createEffect(() => {
    document.body.style.overflow = open() ? "hidden" : "";
  });

  onCleanup(() => {
    document.body.style.overflow = "";
  });

  return (
    <>
      {/* HEADER */}
      <header class="sticky top-0 z-50 bg-brand-light border-b border-brand/20">
        <div class="h-16 px-4 flex items-center justify-between">
          <A href="/" class="text-2xl font-bold text-brand">
            YES Foundation
          </A>

          {/* DESKTOP NAV */}
          <nav class="hidden md:flex gap-8 items-center">
            {navItems.map((n) => (
              <A
                href={n.href}
                end={n.end}
                class={`
                  relative group py-1
                  transition-all duration-300 ease-out
                  ${
                    isActive(n.href, n.end)
                      ? "text-accent font-semibold"
                      : "text-brand hover:text-accent"
                  }
                `}
              >
                <span class="inline-block transition-transform duration-300 group-hover:-translate-y-0.5">
                  {n.name}
                </span>
                <span
                  class={`
                    absolute left-0 -bottom-1 h-[2px] w-full bg-accent
                    transform origin-left transition-transform duration-300
                    ${
                      isActive(n.href, n.end)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }
                  `}
                />
              </A>
            ))}

            <A
              href="/donate"
              class="
                ml-2 bg-brand text-white px-4 py-2 rounded-lg shadow
                transition-all duration-300
                hover:bg-accent hover:shadow-lg hover:-translate-y-0.5
              "
            >
              Donate
            </A>
          </nav>

          {/* 📱 MOBILE BURGER / CLOSE BUTTON (ANIMATED) */}
          <button
            class="
              md:hidden relative w-10 h-10
              flex items-center justify-center
              rounded-full
              transition-transform duration-200
              active:scale-90
            "
            onClick={() => setOpen(!open())}
            aria-label="toggle menu"
          >
            {/* Burger */}
            <span
              class={`
                absolute text-2xl transition-all duration-300 ease-out
                ${
                  open()
                    ? "opacity-0 rotate-45 scale-75"
                    : "opacity-100 rotate-0 scale-100"
                }
              `}
            >
              ☰
            </span>

            {/* Close */}
            <span
              class={`
                absolute text-2xl transition-all duration-300 ease-out
                ${
                  open()
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 -rotate-45 scale-75"
                }
              `}
            >
              ✕
            </span>
          </button>
        </div>
      </header>

      {/* 📱 MOBILE FULLSCREEN MENU BELOW HEADER */}
      <div
        class={`
          fixed left-0 right-0 z-40 md:hidden bg-brand-light
          transition-all duration-300 ease-out
          ${
            open()
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-6 pointer-events-none"
          }
        `}
        style={{
          top: HEADER_HEIGHT,
          height: `calc(100vh - ${HEADER_HEIGHT})`,
        }}
      >
        <nav class="flex flex-col h-full px-4 py-6 gap-2 text-lg">
          {navItems.map((n) => (
            <A
              href={n.href}
              end={n.end}
              onClick={() => setOpen(false)}
              class={`
                relative px-4 py-3 rounded-lg
                transition-all duration-200 ease-out
                text-brand
                hover:bg-brand/10 hover:pl-6
                active:bg-brand/20
              `}
              classList={{
                "font-semibold text-accent bg-brand/10 pl-6": isActive(
                  n.href,
                  n.end,
                ),
              }}
            >
              <span
                class={`
                  absolute left-0 top-0 h-full w-1 rounded-r
                  bg-accent transition-opacity duration-200
                  ${isActive(n.href, n.end) ? "opacity-100" : "opacity-0"}
                `}
              />
              {n.name}
            </A>
          ))}

          <A
            href="/donate"
            onClick={() => setOpen(false)}
            class="
              mt-auto mx-2
              bg-brand text-white py-3 rounded-xl text-center
              transition-transform duration-200
              hover:scale-[1.02] active:scale-[0.98]
            "
          >
            Donate
          </A>
        </nav>
      </div>
    </>
  );
}
