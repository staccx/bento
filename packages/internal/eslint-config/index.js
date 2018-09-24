module.exports = {
  parser: "babel-eslint",
  rules: {
    "react/prop-types": 0,
    "react/no-unused-prop-types": 0
  },
  extends: [
    "standard",
    "standard-react",
    "plugin:prettier/recommended",
    "prettier/standard",
    "prettier/react"
  ],
  globals: {
    sessionStorage: true
  }
}
