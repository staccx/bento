import React from "react"
import { configure, addDecorator, addParameters } from "@storybook/react"
import { host } from "storybook-host"
import { withInfo } from "@storybook/addon-info"
import { withA11y } from "@storybook/addon-a11y"
import { themes as storybookThemes } from "@storybook/theming"
import { withTheme } from "./withThemes"
// import {components} from "./syntaxHighlighterWorkaround";

// const req = require.context('../packages', true, /\.stories\.js$/);

function loadStories() {
  require("../stories/index.js")
  require("../stories/stories.generated.js")
  // req.keys().forEach(filename => req(filename));
}

// Option defaults.
addParameters({
  options: {
    name: "Bento",
    theme: storybookThemes.light,
    showPanel: true
  },
  backgrounds: [
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" },
    { name: "white", value: "#FFFFFF" }
  ],
  info: { inline: true },
  knobs: {
    timestamps: true, // Doesn't emit events while user is typing.
    escapeHTML: true // Escapes strings to be safe for inserting as innerHTML. This option is true by default. It's safe to set it to `false` with frameworks like React which do escaping on their side.
    // You can still set it to false, but it's strongly unrecommendend in cases when you host your storybook on some route of your main site or web app.
  }
})

// addDecorator((story) => (
//   <ThemesProvider themes={themes} story={story}/>
// ))

addDecorator(withInfo)
addDecorator(withTheme)
addDecorator(
  host({
    align: "center middle",
    height: "100%",
    width: "90%",
    backdrop: "transparent",
    background: "transparent"
  })
)
addDecorator(withA11y)
configure(loadStories, module)
