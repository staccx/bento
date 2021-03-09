module.exports = {
  stories: ["../src/**/*.stories.@(mdx|js)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/core-events",
    "@storybook/addon-a11y",
    "@storybook/addon-storyshots"
  ]
}
