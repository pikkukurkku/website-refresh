import type { StorybookConfig } from "@storybook/nextjs-vite";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    {
      name: 'storybook-addon-module-mock',
      options: {
        include: ["**/action.*"],
        exclude: ["**/node_modules/**"],
      }
    }
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {}
  },
  staticDirs: ["../public"],
  viteFinal: async (config) => {
    // Add alias for your mock module
    if (config.resolve?.alias) {
      if (!Array.isArray(config.resolve.alias)) {
        config.resolve.alias['next/navigation$'] = path.resolve(__dirname, '../__mocks__/next/navigation.ts');
      } else {
        config.resolve.alias.push({
          find: 'next/navigation$',
          replacement: path.resolve(__dirname, '../__mocks__/next/navigation.ts')
        });
      }
    } else {
      config.resolve = {
        alias: [{
          find: 'next/navigation$',
          replacement: path.resolve(__dirname, '../__mocks__/next/navigation.ts')
        }],
      };
    }

    // Exclude problematic deps from optimization to avoid missing file errors
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.exclude = [...(config.optimizeDeps.exclude || []), 'some-problematic-package'];

    return config;
  }
};

export default config;
