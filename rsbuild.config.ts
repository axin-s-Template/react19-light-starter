import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { TanStackRouterRspack } from '@tanstack/router-plugin/rspack'
import path from 'node:path';

export default defineConfig({
  plugins: [pluginReact()],
  // 基于文件的路由配置
  tools: {
    rspack: {
      plugins: [TanStackRouterRspack()],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
});
