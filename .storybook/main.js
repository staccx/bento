const path = require("path")

const disableEsLint = (e) => {
  return e.module.rules.filter(e =>
    e.use && e.use.some(e => e.options && void 0 !== e.options.useEslintrc)).forEach(s => {
    e.module.rules = e.module.rules.filter(e => e !== s)
  }), e
}

module.exports = {
  stories: ['../src/**/*.stories.@(mdx|js)'],
  addons: [
    "@storybook/addon-docs",
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    '@storybook/addon-controls',
    "@storybook/core-events"
  ],
  webpackFinal: async (config, { configType }) => {
    config = disableEsLint(config)
    config.resolve.alias = {
        "animations": path.resolve(__dirname, "..", "src", "animations"),
        "components": path.resolve(__dirname, "..", "src", "components"),
        "formatting": path.resolve(__dirname, "..", "src", "formatting"),
        "hooks": path.resolve(__dirname, "..", "src", "hooks"),
        "i18n": path.resolve(__dirname, "..", "src", "i18n"),
        "math": path.resolve(__dirname, "..", "src", "math"),
        "open-id": path.resolve(__dirname, "..", "src", "open-id"),
        "sanity": path.resolve(__dirname, "..", "src", "sanity"),
        "theming": path.resolve(__dirname, "..", "src", "theming"),
        "utils": path.resolve(__dirname, "..", "src", "utils")
    }
    return config;
  },
}
