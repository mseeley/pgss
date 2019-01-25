module.exports = {
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 6
  },
  env: {
    node: true,
    es6: true
  },
  rules: {
    "no-unused-vars": [
      "error",
      { vars: "all", args: "none", ignoreRestSiblings: true }
    ]
  }
};
