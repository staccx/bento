import React, { useEffect, useState } from "react"
import themes from "./themes"
import { IconButton, TooltipLinkList, WithTooltip } from "@storybook/components"
import addons, { makeDecorator, types } from "@storybook/addons"
import { FORCE_RE_RENDER } from "@storybook/core-events"
import styled, { ThemeProvider } from "styled-components"
import { useAddonState } from "@storybook/api"
import WebFonts from "../src/components/Theme/WebFonts"
import GlobalStyle from "../src/components/Theme/GlobalStyle"

// credit: https://github.com/storybooks/storybook/issues/5889#issuecomment-471240086

const TOOL_NAME = "bento-sb-theme"


const getName = theme => theme.storybookName || "NO NAME"

export const withTheme = makeDecorator({
  name: "withTheme",
  parameterName: "theme",
  skipIfNoParametersOrOptions: false,
  allowDeprecatedUsage: false,
  wrapper: (getStory, context) => {
    const [saved, theme] = getLocalTheme()
    const [variant, setVariant] = useState(null)
    useEffect(() => {
      const channel = addons.getChannel()
      channel.on("variant_changed", setVariant)
      return () => {
        channel.off("variant_changed", setVariant)
      }
    }, [])

    console.log("variant", variant)
    const component = getStory(context)
    return (
      <ThemeProvider theme={theme}>
        <WebFonts />
        <GlobalStyle />
        {React.cloneElement(component, { ...(variant && { variant }) })}
      </ThemeProvider>
    )
  }
})

export const ThemeSwitcher = ({ api }) => {
  const [activeTheme, setTheme] = useState(getLocalTheme()[1])
  const [expanded, setExpanded] = useState(false)
  const [, setT] = useAddonState("theme-switcher", null)

  useEffect(() => bindThemeOverride(api), [])
  useEffect(() => {
    if (activeTheme) {
      setT(activeTheme)
    }
  }, [activeTheme])

  const themeList = themes.map((theme, index) => ({
    id: getName(theme),
    title: getName(theme),
    onClick: () => {
      setTheme(themes[index])
      setLocalTheme({ api, theme: index, rerender: true })
    },
    right: <ThemeIcon theme={theme} />
  }))

  return (
    <WithTooltip
      placement="top"
      trigger="click"
      tooltipShown={expanded}
      onVisibilityChange={s => setExpanded(s)}
      tooltip={<TooltipLinkList links={themeList} />}
      closeOnClick
    >
      <FlexIt>
        <IconButton key="theme-switcher">{getName(activeTheme)} </IconButton>
        <ThemeIcon theme={activeTheme} />
      </FlexIt>
    </WithTooltip>
  )
}

export const FlexIt = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 0 12px;
  min-width: 100px;
`

export const ThemeIcon = styled.span`
  display: block;
  border-right-color: ${({ theme }) => theme.color.primary};
  border-top-color: ${({ theme }) => theme.color.secondary};
  border-bottom-color: ${({ theme }) => theme.color.text};
  border-left-color: ${({ theme }) => theme.color.bg};
  border-width: 8px;
  border-radius: 8px;
  border-style: solid;
  height: 0px;
  width: 0px;
  transform: rotate(45deg);
`

function bindThemeOverride(api) {
  const channel = api.getChannel()

  channel.on("storiesConfigured", () => {
    setLocalTheme({ api })
  })
  channel.on("storyChanged", () => {
    setLocalTheme({ api })
  })
}

function setLocalTheme({ api, theme = getLocalTheme()[0], rerender = false }) {
  window.localStorage.setItem(TOOL_NAME, theme)

  api.setOptions({
    theme: getLocalTheme()[1]
  })

  if (rerender) {
    addons.getChannel().emit(FORCE_RE_RENDER)
  }
}

export function getLocalTheme() {
  const savedTheme = window.localStorage.getItem(TOOL_NAME)
  const theme =
    typeof themes[savedTheme] === "object" ? themes[savedTheme] : themes[0]
  return [savedTheme, theme || themes[0]]
}
