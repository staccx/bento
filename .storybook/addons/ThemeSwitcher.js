import React from "react";
import themes from "../themes";
import { IconButton, TooltipLinkList, WithTooltip } from "@storybook/components";
import styled from "styled-components";
import { useGlobals } from "@storybook/api";

const getName = theme => theme.storybookName || "NO NAME";
export const ThemeSwitcher = ({ api }) => {
  const [{ theme: activeTheme }, themeSet] = useGlobals();
  const theme = activeTheme ? themes[activeTheme.id] : null;
  const [expanded, expandedSet] = React.useState(false);
  const themeList = themes.map((t, index) => ({
    id: getName(t),
    title: getName(t),
    onClick: () => {
      themeSet({
        theme: {
          id: index,
          name: getName(t)
        }
      });
      expandedSet(false)
    },
    right: <ThemeIcon theme={t}/>
  }));

  if (!theme) {
    return null;
  }
  return (
    <WithTooltip
      placement="top"
      trigger="click"
      tooltipShown={expanded}
      onVisibilityChange={expandedSet}
      tooltip={<TooltipLinkList links={themeList}/>}
      closeOnClick
    >
      <FlexIt>
        <IconButton key="theme-switcher">{theme.name}</IconButton>
        <ThemeIcon theme={theme}/>
      </FlexIt>
    </WithTooltip>
  );
};

export const FlexIt = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 0 12px;
  min-width: 100px;
  margin: 0 6px;
  width: 100%;
`;

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
`;
