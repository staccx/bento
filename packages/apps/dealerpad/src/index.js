import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { Provider } from "mobx-react"
import { ThemeProxyProvider } from "@staccx/theme"
import theme from "./theme/Theme"

ReactDOM.render(
  <Provider>
    <ThemeProxyProvider theme={theme}>
      <App />
    </ThemeProxyProvider>
  </Provider>,
  document.getElementById("root")
)

registerServiceWorker()
