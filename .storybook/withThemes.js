import React, { useEffect } from 'react';
import { useState } from 'react';
import themes from './themes';
import {
  IconButton,
  WithTooltip,
  TooltipLinkList,
} from '@storybook/components';
import addons, { types, makeDecorator } from '@storybook/addons';
import { FORCE_RE_RENDER } from '@storybook/core-events';
import styled, { ThemeProvider } from 'styled-components';

// credit: https://github.com/storybooks/storybook/issues/5889#issuecomment-471240086

const TOOL_NAME = "bento-sb-theme"

addons.register('storybook/theme-switcher', api => {
  addons.addPanel('storybook/theme-switcher', {
    title: 'theme-switcher',
    type: types.TOOL,
    match: ({ viewMode }) => {
      return viewMode === 'story'
    },
    render: () => <ThemeSwitcher api={api}/>,
  });
});


export const withTheme = makeDecorator({
  name: 'withTheme',
  parameterName: 'theme',
  skipIfNoParametersOrOptions: false,
  allowDeprecatedUsage: false,
  wrapper: (getStory, context) => {
    const [saved, theme] = getLocalTheme()
    return(
      <ThemeProvider theme={theme}>
        {getStory(context)}
      </ThemeProvider>
    )
  },
});

export const ThemeSwitcher = ({ api }) => {
  const [activeTheme, setTheme] = useState(getLocalTheme()[1]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => bindThemeOverride(api), []);

  const themeList = themes.map((theme, index) => ({
    id: theme.name,
    title: theme.name,
    onClick: () => {
      setTheme(themes[index]);
      setLocalTheme({ api, theme: index, rerender: true });
    },
    right: <ThemeIcon theme={theme}/>,
  }));

  return (
    <WithTooltip
      placement="top"
      trigger="click"
      tooltipShown={expanded}
      onVisibilityChange={s => setExpanded(s)}
      tooltip={<TooltipLinkList links={themeList}/>}
      closeOnClick
    >
      <FlexIt>
        <IconButton key="theme-switcher">{activeTheme.name} </IconButton>
        <ThemeIcon theme={activeTheme}/>
      </FlexIt>
    </WithTooltip>
  );
};

const FlexIt = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0,0,0,.2);
  border-radius: 8px;
  padding: 0 12px;
  min-width: 100px;
`


const ThemeIcon = styled.span`
  display: block;
  border-right-color: ${({theme}) => theme.color.primary};
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

function bindThemeOverride (api) {
  const channel = api.getChannel();

  channel.on('storiesConfigured', () => {
    setLocalTheme({ api });
  });
  channel.on('storyChanged', () => {
    setLocalTheme({ api });
  });
}

function setLocalTheme ({
                          api,
                          theme = getLocalTheme()[0],
                          rerender = false,
                        }) {
  window.localStorage.setItem(TOOL_NAME, theme);

  api.setOptions({
    theme: getLocalTheme()[1],
  });

  if (rerender) {
    addons.getChannel().emit(FORCE_RE_RENDER);
  }
}

function getLocalTheme () {
  const savedTheme = window.localStorage.getItem(TOOL_NAME);
  const theme =
    typeof themes[savedTheme] === 'object'
      ? themes[savedTheme]
      : themes[0];
  return [savedTheme, theme || themes[0]];
}