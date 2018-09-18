module.exports = {
  parser: "babel-eslint",
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/prop-types": 0,
    "react/no-unused-prop-types": 0,
    "new-cap": ["error", { newIsCapExceptions: ["i18n"] }]
  },
  extends: [
    "standard",
    "standard-jsx",
    "eslint-config-standard-react",
    "plugin:prettier/recommended",
    "prettier/standard"
  ],
  globals: {
    sessionStorage: true
  }
}
