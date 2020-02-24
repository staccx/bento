import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { withTheme } from "./addons/withThemes";

//addDecorator(story => <ThemeProvider theme={baseTheme} story={story}>)
addDecorator(withTheme);
addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === "Intro|Bento" ? 0 : a[1].id.localeCompare(b[1].id, undefined, {
        numeric: true
      }),
    name: "Bento"
  }
});

