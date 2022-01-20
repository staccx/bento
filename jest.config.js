const fs = require("fs")
const path = require("path")
const resolve = require("resolve")

process.env.BABEL_ENV = "test"
process.env.NODE_ENV = "test"
process.env.PUBLIC_URL = ""

require("react-scripts/config/env")

module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: ["**/__tests__/**/*.js", "**/?(*.)+(spec|test).[jt]s?(x)"],
  testEnvironment: resolve.sync("jest-environment-jsdom", {
    basedir: require.resolve("jest")
  }),

  reporters: [
    // Add jest-clean-console-reporter. This takes place of the
    // default reporter, and behaves identically otherwise
    // ["jest-clean-console-reporter", { rules: rules }],

    // Overriding config.reporters wipes out default reporters, so
    // we need to restore the summary reporter.
    //
    // NOTE: For jest 26.6.1 or older, this file is located at
    // @jest/reporters/build/summary_reporter
    "@jest/reporters/build/SummaryReporter"
  ],
  // this testPathIgnorePatterns config just makes things work with the way we
  // have to do things for this workshop to work. You shouldn't need this in
  // your own jest config. NOTE: This is the *entire* reason we need a custom
  // jest config. Otherwise we'd be able to use regular react-scripts
  // so in your apps, react-scripts should work just fine.
  testPathIgnorePatterns: [
    "/node_modules/",
    "exercise\\.js$",
    "final\\.js$",
    "extra-\\d+\\.js$"
  ],
  setupFiles: [require.resolve("axios")],
  // some of the exercise branches don't have setupTests.js
  setupFilesAfterEnv: fs.existsSync("src/setupTests.js")
    ? ["<rootDir>/src/setupTests.js"]
    : [],
  moduleDirectories: ["node_modules", path.join(__dirname, "./src")],
  transform: {
    "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": require.resolve(
      "react-scripts/config/jest/babelTransform"
    ),
    "^.+\\.css$": require.resolve("react-scripts/config/jest/cssTransform.js"),
    "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)": require.resolve(
      "react-scripts/config/jest/fileTransform.js"
    )
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
  resetMocks: true,
  collectCoverageFrom: [
    "src/**/*.js",
    "src/**/{!(*.stories|*.preview|bento|index),}.js",
    "!<rootDir>/node_modules/**/*",
    "!<rootDir>/src/test/**/*"
  ],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ]
}
