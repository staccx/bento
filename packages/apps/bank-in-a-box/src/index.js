import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { Provider } from "mobx-react"
import WebFont from "webfontloader"
import theme from "@staccx/norefjell-theme"
import { ThemeProvider } from "styled-components"

WebFont.load({
  google: {
    families: ["IBM Plex Sans:700,400", "Roboto:400,500"]
  }
})

ReactDOM.render(
  <Provider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
