module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "ecmaVersion": "latest",
    "sourceType": "module",
  },
  plugins: [
    "@typescript-eslint",
    "react",
  ],
  globals: {
    goog: true,
    i18n: true,
  },
  rules: {
    semi: ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    quotes: ["error", "double"],
    "no-prototype-builtins": "off",
    "class-methods-use-this": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
  },
  overrides: [{
    files: [".eslintrc.{js,cjs}"],
    env: { "node": true },
    parserOptions: { "sourceType": "script" },
  }, {
    files: ["*.ts", "*.tsx"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "error",
    },
  }],
  settings: {
    "import/resolver": {
      "typescript": {},
    },
    "react": {
      "version": "detect",
    },
  },
};
