module.exports = {
  parser: "babel-eslint",
  plugins: ["react-hooks"],
  rules: {
    "react/prop-types": 0,
    "react/no-unused-prop-types": 0,
    "new-cap": [
      "error",
      { newIsCapExceptions: ["i18n"], capIsNewExceptions: ["Map"] }
    ],
    "react-hooks/rules-of-hooks": "error"
  },
  extends: [
    "standard",
    "standard-react",
    "plugin:prettier/recommended",
    "prettier/standard",
    "prettier/react"
  ],
  globals: {
    sessionStorage: true,
    localStorage: true,
    it: true,
    describe: true,
    expect: true,
    afterEach: true,
    atob: true,
    btoa: true,
    jest: true
  }
}
