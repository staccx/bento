import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { ThemeProxyProvider } from "@staccx/theme"
import DocsTheme from "./Theme/Theme"

ReactDOM.render(
  <ThemeProxyProvider theme={DocsTheme}>
    <App openApiUrl="/swagger.json" />
  </ThemeProxyProvider>,
  document.getElementById("root")
)
registerServiceWorker()
