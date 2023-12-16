module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: "standard-with-typescript",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/triple-slash-reference": "off"
  },
};
