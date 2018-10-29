import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "styled-components"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { Provider } from "mobx-react"
import theme from "./theme/Theme"
import { GlobalStyle } from "@staccx/base"

ReactDOM.render(
  <Provider>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <App />
      </React.Fragment>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
)

registerServiceWorker()
