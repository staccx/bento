//https://github.com/storybookjs/storybook/pull/6016

import React from "react";
import SyntaxHighlighter from '@storybook/components/dist/syntaxhighlighter/syntaxhighlighter';
import { ThemeProvider } from 'emotion-theming';
import * as baseTheme from '@storybook/theming/dist/base';

const CodeBlock = ({ language = 'text', code }) => (
  <ThemeProvider theme={baseTheme}>
    <SyntaxHighlighter bordered copyable language={language}>
      {code}
    </SyntaxHighlighter>
  </ThemeProvider>
);

export const components = {
  code: CodeBlock,
};
