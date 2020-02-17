import React from "react"
import { addons } from "@storybook/addons"
import StoryBookTheme from "./bentoStorybookTheme"
import "./withThemes"
import "./tools/variants"
import "./tools/rerender"

addons.setConfig({
  theme: StoryBookTheme,
  previewTabs: {
    // the order of the tabs is configured by the order here
    'storybook/docs/panel': 'Documentation', // the configuration is either an object or a title string
    canvas: {
      hidden: false
    }, // canvas is here simply listed so its place as first tab
  },
});

