// src/components/Header.tsx
import { createSignal } from "solid-js";
import { A } from "@solidjs/router";

export default function Header() {
  const [open, setOpen] = createSignal(false);

  return (
    <header class="bg-white shadow-md">
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <A href="/" class="text-xl font-bold text-brand">
            YES Foundation
          </A>
        </div>

        <nav class="md:flex gap-6 items-center">
          <A href="/">Home</A>
          <A href="/about">About Us</A>
          <A href="/projects">Our Work</A>
          <A href="/gallery">Gallery</A>
          <A href="/contact">Contact</A>
          <A href="#" class="bg-brand text-white px-4 py-2 rounded">
            Donate
          </A>
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
            <A href="/">Home</A>
            <A href="/about">About Us</A>
            <A href="/projects">Our Work</A>
            <A href="/gallery">Gallery</A>
            <A href="/contact">Contact</A>
            <A href="#" class="bg-brand text-white px-4 py-2 rounded mt-2">
              Donate
            </A>
          </div>
        </div>
      )}
    </header>
  );
}
