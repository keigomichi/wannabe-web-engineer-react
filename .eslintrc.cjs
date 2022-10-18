module.exports = {
  env: {
    browser: true,
    es2021: true,
    // node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  ignorePatterns: [".eslintrc.cjs"], // <- module is not defined
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off"
  },
};
