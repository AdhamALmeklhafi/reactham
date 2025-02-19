import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import babelMacros from "vite-plugin-babel-macros";
import { lingui } from '@lingui/vite-plugin'


export default defineConfig({
  plugins: [tailwindcss(), babelMacros(), reactRouter(), tsconfigPaths(), lingui()],
});
