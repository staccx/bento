import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { Provider } from "mobx-react"
import { apiStore, uiStore } from "./stores"

ReactDOM.render(
  <Provider apiStore={apiStore} uiStore={uiStore}>
    <App />
  </Provider>,
  document.getElementById("root")
)

registerServiceWorker()
