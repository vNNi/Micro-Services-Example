module.exports = {
  env: {
    browser: false,
    node: true,
    jest: true,
    es2021: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "object-curly-spacing": ["error", "always"],
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "no-console": ["error"],
    "import/prefer-default-export": ["off"],
    "import/extensions": ["off"],
  },
};
