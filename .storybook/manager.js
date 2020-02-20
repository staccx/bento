import React from "react"
import { addons, types } from "@storybook/addons"
import StoryBookTheme from "./bentoStorybookTheme"
import "./withThemes"
import "./tools/variants"
import { ThemeSwitcher } from "./withThemes"
import { Variants, VARIANTS_TOOL_NAME } from "./tools/variants"
import { Button } from "@storybook/components"
import { FORCE_RE_RENDER } from "@storybook/core-events"

addons.register("storybook/theme-switcher", api => {
  addons.addPanel("storybook/theme-switcher", {
    title: "theme-switcher",
    type: types.TOOL,
    render: () => <ThemeSwitcher api={api} />
  })
})
addons.register(VARIANTS_TOOL_NAME, api => {
  addons.addPanel(VARIANTS_TOOL_NAME, {
    title: "variant-switcher",
    type: types.TOOL,
    render: () => <Variants api={api}/>
  });
});
addons.register("bento/rerender", api => {
  addons.addPanel("bento/rerender", {
    title: "rerender",
    type: types.TOOL,
    render: () => <Button primary onClick={() => api.emit(FORCE_RE_RENDER)}>Rerender</Button>
  });
});

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

