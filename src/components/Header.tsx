import { Link } from "solid-app-router";
import { createSignal } from "solid-js";

export default function Header() {
  const [open, setOpen] = createSignal(false);
  return (
    <header class="bg-white shadow-md">
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <Link href="/" class="text-xl font-bold text-brand">
            NGO Sikkim
          </Link>
        </div>
        <nav class="hidden md:flex gap-6 items-center">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/projects">Our Work</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
          <a class="bg-brand text-white px-4 py-2 rounded" href="#">
            Donate
          </a>
        </nav>
        <button
          class="md:hidden"
          onClick={() => setOpen(!open())}
          aria-label="menu"
        >
          ☰
        </button>
      </div>
      {open() && (
        <div class="md:hidden border-t">
          <div class="flex flex-col px-4 py-2">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/projects">Our Work</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
            <a class="bg-brand text-white px-4 py-2 rounded mt-2" href="#">
              Donate
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
