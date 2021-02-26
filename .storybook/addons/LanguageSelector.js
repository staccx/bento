import React from "react"
import { IconButton, TooltipLinkList, WithTooltip } from "@storybook/components"
import { useGlobals } from "@storybook/api"
import languages from "../languages"
import { FlexIt } from "./ThemeSwitcher"

export const LanguageSelector = ({ api }) => {
  const [{ language: activeLanguage }, setGlobal] = useGlobals()
  const language = activeLanguage ? languages[activeLanguage.id] : null
  const [expanded, expandedSet] = React.useState(false)
  const localeList = React.useMemo(
    () =>
      languages.map((local, index) => ({
        ...local,
        key: index,
        onClick: () => {
          setGlobal({
            language: {
              ...local,
              id: index,
              data: null
            }
          })
          expandedSet(false)
        }
      })),
    []
  )

  if (!language) {
    return null
  }
  return (
    <WithTooltip
      placement="top"
      trigger="click"
      tooltipShown={expanded}
      onVisibilityChange={expandedSet}
      tooltip={<TooltipLinkList links={localeList} />}
      closeOnClick
    >
      <FlexIt>
        <IconButton key="locale-selector">{language.title} </IconButton>
        <span>{language?.right}</span>
      </FlexIt>
    </WithTooltip>
  )
}
