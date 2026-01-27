import { createSignal } from "solid-js";
import { PLACEHOLDER_IMG, PLACEHOLDER_SVG_DATA_URI } from "../../lib/constants";

type Props = {
  src?: string;
  alt?: string;
  class?: string;
  style?: string;
};

/**
 * ImageWithFallback
 * - tries `props.src` first
 * - on error switches to PLACEHOLDER_IMG (remote)
 * - if that also errors, switches to guaranteed inline SVG data-uri
 */
export default function ImageWithFallback(props: Props) {
  const [current, setCurrent] = createSignal(props.src || PLACEHOLDER_IMG);

  const handleError = (e: Event) => {
    const img = e.currentTarget as HTMLImageElement;
    if (img.src === PLACEHOLDER_SVG_DATA_URI) return; // final fallback reached

    // first fallback
    if (img.src !== PLACEHOLDER_IMG) {
      setCurrent(PLACEHOLDER_IMG);
      img.src = PLACEHOLDER_IMG;
      return;
    }

    // final fallback
    setCurrent(PLACEHOLDER_SVG_DATA_URI);
    img.src = PLACEHOLDER_SVG_DATA_URI;
  };

  return (
    <img
      src={current()}
      alt={props.alt ?? "placeholder"}
      class={props.class}
      style={props.style}
      onError={handleError}
    />
  );
}
