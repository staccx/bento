import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { ThemeProvider } from "styled-components"
import DocsTheme from "./Theme/Theme"

ReactDOM.render(
  <ThemeProvider theme={DocsTheme}>
    <App openApiUrl="/swagger.json" />
  </ThemeProvider>,
  document.getElementById("root")
)
registerServiceWorker()
