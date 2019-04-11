import React from "react";
import { configure, addDecorator, addParameters } from '@storybook/react';
import { host } from 'storybook-host';
import {withInfo} from "@storybook/addon-info"
import { withA11y } from '@storybook/addon-a11y';
import { themes as storybookThemes} from '@storybook/theming';
import themes from "./themes"
import ThemesProvider from "./ThemesProvider"

const req = require.context('../packages', true, /\.stories\.js$/);

function loadStories () {
  req.keys().forEach(filename => req(filename));
}


// Option defaults.
addParameters({
  options: {
    name: 'Bento',
    theme: storybookThemes.dark,
    showPanel: false
  },
  backgrounds: [
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
  ],
});

addDecorator((story) => (
  <ThemesProvider themes={themes} story={story}/>
))
addDecorator(
  host({
    align: 'center middle',
    height: '100%',
    width: "90%",
    backdrop: "transparent",
    background: "transparent"
  }),
)
addDecorator(withA11y)

// addDecorator(withInfo, { inline: true});
configure(loadStories, module);
