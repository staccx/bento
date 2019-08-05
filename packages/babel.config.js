module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "babel-plugin-styled-components",
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-syntax-dynamic-import",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }]
  ],
  ignore: [
    "**/src/**/*.test.js",
    "**/src/**/*.spec.js",
    "**/src/**/*.stories.js",
    "**/src/**/*.md",
    "**/src/**/*.preview.js"
  ]
}
