import React from "react";
import { addDecorator, addParameters } from '@storybook/react';
import {ThemeProvider} from "styled-components";
import baseTheme from "../src/theming/baseTheme"

addDecorator(story => <ThemeProvider theme={baseTheme}>{story()}</ThemeProvider>)
