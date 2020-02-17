module.exports = {
  stories: ["../src/**/*.stories.(mdx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs/register",
    "@storybook/core-events"
  ]
}
