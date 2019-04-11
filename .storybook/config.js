import React from "react";
import { configure, addDecorator, addParameters } from '@storybook/react';
import {withInfo} from "@storybook/addon-info"
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
});

// addDecorator(withInfo, { inline: true});
addDecorator((story) => (
  <ThemesProvider themes={themes} story={story}/>
))
configure(loadStories, module);
