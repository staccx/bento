import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { Provider } from "mobx-react"
import WebFont from "webfontloader"
import {apiStore, uiStore} from "./stores";


WebFont.load({
  google: {
    families: ["Libre Baskerville:700", "Libre Franklin:400,600"]
  }
})

ReactDOM.render(
  <Provider apiStore={apiStore} uiStore={uiStore}>
    <App />
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
