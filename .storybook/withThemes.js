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
      console.log(viewMode)
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
  console.log("Is rendering")
  const [activeTheme, setTheme] = useState(getLocalTheme()[0]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => bindThemeOverride(api), []);

  const themeList = Object.keys(themes).map(key => ({
    id: key,
    title: key,
    onClick: () => {
      setTheme(key);
      setLocalTheme({ api, theme: key, rerender: true });
    },
    right: <ThemeIcon/>,
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
      <IconButton key="theme-switcher">{activeTheme}</IconButton>
    </WithTooltip>
  );
};

const ThemeIcon = styled.span`
  height: 1rem;
  width: 1rem;
  display: block;
  background: red;
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
      : themes.Stacc;
  return [savedTheme, theme || themes.Stacc];
}
