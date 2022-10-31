module.exports = {
    env: {
        node: true,
        es2021: true,
        commonjs: true
    },
    extends: ["eslint:recommended", "prettier"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest"
    },
    rules: {
        quotes: ["error", "single"],
        indent: ["error", "tab"],
        semi: ["error", "always"]
    }
};