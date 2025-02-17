import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Files to lint
  { files: ["**/*.{js,ts,jsx,tsx}"] },

  // Browser globals
  {
    languageOptions: {
      globals: globals.browser,
    },
  },

  // Add React settings
  {
    settings: {
      react: {
        version: "detect", // Automatically detect React version from package.json
      },
    },
  },

  // Core ESLint recommended rules
  pluginJs.configs.recommended,

  // TypeScript rules
  ...tseslint.configs.recommended,

  // React rules (MANUALLY define to avoid plugin array)
  {
    plugins: {
      react: pluginReact, // Define "react" plugin as an object
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      "react/react-in-jsx-scope": "off", // Disable React 17+ scope rule
      "react/prop-types": "off", // Disable prop-types (use TypeScript)
    },
  },

  // React Hooks rules
  {
    plugins: {
      "react-hooks": pluginReactHooks, // Define "react-hooks" plugin as an object
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },

  // JSX Accessibility rules
  {
    plugins: {
      "jsx-a11y": pluginJsxA11y, // Define "jsx-a11y" plugin as an object
    },
    rules: {
      ...pluginJsxA11y.configs.recommended.rules,
      "jsx-a11y/anchor-is-valid": "off", // Disable if using Next.js Link
    },
  },

  // IGNORED FILES/FOLDERS
  {
    ignores: [
      "node_modules/",
      "dist/",
      "build/",
      ".react-router/",
      "*.css",
      "*.svg",
      "*.json",
    ],
  },
];
