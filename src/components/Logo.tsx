import { createSignal } from "solid-js";
import { A } from "@solidjs/router";

const TEXT = "YES Foundation Sikkim";

export default function Logo() {
  const [, setHovered] = createSignal(false);

  let letters: HTMLSpanElement[] = [];

  const onMove = (e: MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    letters.forEach((el) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2 - rect.left;
      const cy = r.top + r.height / 2 - rect.top;

      const dx = mx - cx;
      const dy = my - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const strength = Math.max(0, 1 - dist / 120);

      el.style.transform = `
        translate(${dx * strength * 0.15}px, ${dy * strength * 0.15}px)
      `;
      el.style.color =
        strength > 0.3 ? "var(--color-accent)" : "var(--color-brand)";
    });
  };

  const reset = () => {
    letters.forEach((el) => {
      el.style.transform = "translate(0, 0)";
      el.style.color = "var(--color-brand)";
    });
  };

  return (
    <A
      href="/"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        reset();
      }}
      onMouseMove={onMove}
      class="inline-block select-none"
      aria-label={TEXT}
    >
      <span class="text-2xl font-bold flex gap-[0.02em]">
        {TEXT.split("").map((char, i) => (
          <span
            ref={(el) => el && (letters[i] = el)}
            class="
              transition-transform duration-200 ease-out
              transition-colors duration-200
            "
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </A>
  );
}
