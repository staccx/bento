import React, { Component } from 'react';
import {Button} from "@staccx/base"
import {ThemeProvider} from "styled-components"
import theme from "./theme.js"


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Button>My X Button</Button>
      </ThemeProvider>
    );
  }
}

export default App;
