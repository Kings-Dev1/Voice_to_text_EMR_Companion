import type { ForgeConfig } from "@electron-forge/shared-types";
import { VitePlugin } from "@electron-forge/plugin-vite";

const config: ForgeConfig = {
  packagerConfig: {
    asar: true,
  },

  plugins: [
    new VitePlugin({
      build: [
        {
          entry: "electron/main.cts",
          config: "vite.main.config.ts",
        },
        {
          entry: "electron/preload.cts",
          config: "vite.preload.config.ts",
        },
      ],

      renderer: [
        {
          name: "main_window",
          config: "vite.renderer.config.ts",
        },
      ],

      hotRestart: true,
    }),
  ],
};

export default config;