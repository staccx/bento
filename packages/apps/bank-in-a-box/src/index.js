import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { Provider } from "mobx-react"
import WebFont from "webfontloader"
import BankTheme from "./Theme/theme"
import { ThemeProvider } from "styled-components"

WebFont.load({
  google: {
    families: ["IBM Plex Sans:700,400", "Roboto:400,500"]
  }
})

ReactDOM.render(
  <Provider>
    <ThemeProvider theme={BankTheme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
