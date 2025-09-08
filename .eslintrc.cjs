// .eslintrc.cjs
module.exports = {
  root: true,
  env: {
    browser: true,
    es2024: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"], // required for rules that use type info
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint", "import", "solid", "unused-imports"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:solid/recommended",
  ],
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
      typescript: {
        project: ["./tsconfig.json"],
      },
    },
  },
  rules: {
    /* TypeScript / safety */
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],
    "@typescript-eslint/strict-boolean-expressions": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-misused-promises": [
      "error",
      { checksVoidReturn: false },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],

    /* Imports / ordering */
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external"],
          "internal",
          ["parent", "sibling", "index"],
        ],
        "newlines-between": "always",
      },
    ],
    "import/no-unresolved": "error",

    /* Unused imports (auto-fixable) */
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],

    /* Best practices */
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-debugger": "error",
    "consistent-return": "error",
    eqeqeq: ["error", "always"],

    /* Solid-specific (recommended plugin sets defaults; these enforce a few stricter points) */
    "solid/jsx-no-constructed-context-values": "error",
  },
  overrides: [
    {
      files: ["vite.config.ts", "scripts/**.ts"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
      },
    },
    {
      files: ["**/*.tsx", "**/*.jsx"],
      rules: {
        /* allow default exports for components if you prefer named export strictness can be added */
        "import/no-default-export": "off",
      },
    },
    {
      files: ["**/*.test.ts", "**/*.test.tsx", "**/*.spec.ts"],
      env: { jest: true },
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
  ],
};
