import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import tsconifgPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconifgPaths(), solid()],
});
