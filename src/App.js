import React, { Component } from "react";
import { Button, Wrapper } from "@staccx/base";
import { ThemeProvider } from "styled-components";
import Account from "./components/Account";
import theme from "./theme.js";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper size="small">
          <Account balance={917822.45} earned={17822.45} />
          <Button>My X Button</Button>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
