// postcss.config.ts
import tailwindPostcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

const config = {
  plugins: [tailwindPostcss(), autoprefixer()],
};

export default config;
