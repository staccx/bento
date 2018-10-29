module.exports = {
  parser: "babel-eslint",
  rules: {
    "react/prop-types": 0,
    "react/no-unused-prop-types": 0,
    "new-cap": [
      "error",
      { newIsCapExceptions: ["i18n"], capIsNewExceptions: ["Map"] }
    ]
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
    expect: true
  }
}
