import path from "node:path"
import { fileURLToPath } from "node:url"

import { fixupConfigRules, fixupPluginRules } from "@eslint/compat"
import { FlatCompat } from "@eslint/eslintrc"
import js from "@eslint/js"
import typescriptEslint from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import _import from "eslint-plugin-import"
import reactNative from "eslint-plugin-react-native"
import reactRefresh from "eslint-plugin-react-refresh"
import globals from "globals"

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

export default [{
  ignores: ["node_modules/**/*", "**/node_modules"]
}, ...fixupConfigRules(compat.extends(
  "eslint:recommended",
  "plugin:@typescript-eslint/recommended",
  "plugin:react-hooks/recommended",
  "plugin:import/errors",
  "plugin:import/warnings",
  "plugin:react-native/all"
)), {
  plugins: {
    // Enables React Refresh for fast refresh during development
    "react-refresh": reactRefresh,

    // Fixes import rules using the 'import' plugin
    "import": fixupPluginRules(_import),

    // Fixes TypeScript rules using the '@typescript-eslint' plugin
    "@typescript-eslint": fixupPluginRules(typescriptEslint),

    // Fixes React Native rules using the 'react-native' plugin
    "react-native": fixupPluginRules(reactNative)
  },

  languageOptions: {
    // Defines global variables for browser and Node.js
    globals: {
      ...globals.browser,
      ...globals.node
    },

    // Sets the parser for TypeScript
    parser: tsParser,

    // Specifies ECMAScript version
    ecmaVersion: 2020,

    // Allows the use of ES modules
    sourceType: "module",

    parserOptions: {
      // Enables JSX support
      ecmaFeatures: {
        jsx: true
      }
    }
  },

  settings: {
    // Automatically detects the React version
    react: {
      version: "detect"
    }
  },


  rules: {
    // Prevents unused styles
    "react-native/no-unused-styles": 2,


    // Requires platform-specific components to be split
    "react-native/split-platform-components": 2,

    // Disallows inline styles
    "react-native/no-inline-styles": 2,

    // Prohibits color literals
    "react-native/no-color-literals": 2,

    // Disallows raw text nodes
    "react-native/no-raw-text": "off",

    // Prevents single-element style arrays
    "react-native/no-single-element-style-arrays": 2,

    // Warns about unused component exports
    "react-refresh/only-export-components": ["warn", {
      "allowConstantExport": true
    }],

    // Requires parentheses around arrow function parameters as needed
    "arrow-parens": ["error", "as-needed"],

    // Disables unresolved import checks
    "import/no-unresolved": "off",

    // Disables namespace import checks
    "import/namespace": "off",

    // Disallows console statements except for warnings and errors
    "no-console": ["error", {
      "allow": ["warn", "error"]
    }],

    // Enforces spacing before commas
    "comma-spacing": "error",

    // Enforces spacing before keywords
    "keyword-spacing": "error",

    // Disallows unused variables
    "no-unused-vars": "error",

    // Prohibits the use of `var`
    "no-var": "error",

    // Disallows multiple spaces
    "no-multi-spaces": "error",

    // Limits consecutive empty lines
    "no-multiple-empty-lines": ["error", {
      "max": 2,
      "maxEOF": 0
    }],

    // Disallows trailing spaces
    "no-trailing-spaces": "error",

    // Enforces spacing inside curly braces
    "object-curly-spacing": ["error", "always"],

    // Requires double quotes
    "quotes": ["error", "double"],

    // Disallows semicolons
    "semi": ["error", "never"],

    // Enforces space before blocks
    "space-before-blocks": "error",

    // Limits complexity of functions
    "complexity": ["error", 20],

    // Disallows trailing commas
    "comma-dangle": ["error", "never"],

    // Enforces consistent indentation
    "indent": ["error", 2, {
      "SwitchCase": 1
    }],

    // Limits line length
    "max-len": ["error", {
      "code": 180,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true
    }],

    // Enforces import order
    "import/order": ["error", {
      "groups": ["builtin", "external", "parent", "sibling", "index"],
      "pathGroups": [{
        "pattern": "react",
        "group": "external",
        "position": "before"
      }, {
        "pattern": "react-native",
        "group": "external",
        "position": "before"
      }],
      "pathGroupsExcludedImportTypes": ["react", "react-native"],
      "newlines-between": "always",
      "distinctGroup": true,
      "alphabetize": {
        "order": "asc",
        "caseInsensitive": true
      }
    }]
  }
}]