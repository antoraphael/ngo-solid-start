import { createSignal, For, Show } from "solid-js";

export default function ThemedDropdown(props: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  const [open, setOpen] = createSignal(false);

  return (
    <div class="relative w-48">
      {/* Selected button */}
      <button
        onClick={() => setOpen(!open())}
        class="w-full px-4 py-2 bg-brand-light/10 border border-gray-300 rounded-lg flex justify-between items-center text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand hover:border-accent transition"
      >
        <span>{props.value}</span>
        <svg
          class={`w-4 h-4 transform transition ${open() ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown options */}
      <Show when={open()}>
        <div class="absolute mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <For each={props.options}>
            {(opt) => (
              <div
                class={`px-4 py-2 cursor-pointer transition ${
                  props.value === opt
                    ? "bg-brand text-white font-semibold"
                    : "hover:bg-accent hover:text-white"
                }`}
                onClick={() => {
                  props.onChange(opt);
                  setOpen(false);
                }}
              >
                {opt}
              </div>
            )}
          </For>
        </div>
      </Show>
    </div>
  );
}
