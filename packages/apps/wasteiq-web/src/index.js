import React from "react"
import ReactDOM from "react-dom"
import WasteIqTheme from "@staccx/wasteiq-theme"
import { ThemeProvider } from "styled-components"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"

ReactDOM.render(
  <ThemeProvider theme={WasteIqTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
)

registerServiceWorker()
