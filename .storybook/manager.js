import { addons, types } from "@storybook/addons"
import { create, themes } from "@storybook/theming"
import React from "react"
import { ThemeSwitcher } from "./addons/ThemeSwitcher"
import { LocaleSelector } from "./addons/LocaleSelector"
import { Variants, VARIANTS_TOOL_NAME } from "./tools/variants"
import { AddonPanel } from "@storybook/components"
import { LanguageSelector } from "./addons/LanguageSelector"

addons.setConfig({
  theme: create({
    ...themes.dark,
    brandTitle: "Bento",
    base: "Bento"
  })
})

addons.register("storybook/theme-switcher", api => {
  addons.addPanel("storybook/theme-switcher", {
    title: "theme-switcher",
    type: types.TOOL,
    render: ({ active, key }) => <ThemeSwitcher api={api} />
  })
})

addons.register("storybook/locale-selector", api => {
  addons.addPanel("storybook/locale-selector", {
    title: "locale-selector",
    type: types.TOOL,
    render: ({ active, key }) => <LocaleSelector api={api} />
  })
})

addons.register("storybook/language-selector", api => {
  addons.addPanel("storybook/language-selector", {
    title: "language-selector",
    type: types.TOOL,
    render: ({ active, key }) => <LanguageSelector api={api} />
  })
})
// import { Button } from "@storybook/components"
// import { FORCE_RE_RENDER } from "@storybook/core-events"
// import StoryBookTheme from "./bentoStorybookTheme"
// import { ThemeSwitcher } from "./addons/withThemes"

// addons.register("storybook/theme-switcher", api => {
//   addons.addPanel("storybook/theme-switcher", {
//     title: "theme-switcher",
//     type: types.TOOL,
//     render: () => <ThemeSwitcher api={api} />
//   })
// })
// addons.register(VARIANTS_TOOL_NAME, api => {
//   addons.addPanel(VARIANTS_TOOL_NAME, {
//     title: "variant-switcher",
//     type: types.PANEL,
//     render: ({key, active}) => <AddonPanel key={key} active={active} ><Variants api={api}/></AddonPanel>
//   });
// });
// addons.register("bento/rerender", api => {
//   addons.addPanel("bento/rerender", {
//     title: "rerender",
//     type: types.TOOL,
//     render: () => <Button primary onClick={() => api.emit(FORCE_RE_RENDER)}>Rerender</Button>
//   });
// });

// addons.setConfig({
//   theme: StoryBookTheme,
//   previewTabs: {
//     // the order of the tabs is configured by the order here
//     'storybook/docs/panel': 'Documentation',
//  // the configuration is either an object or a title string
//     canvas: {
//       index: 0
//     }, // canvas is here simply listed so its place as first tab
//
//   },
// });
