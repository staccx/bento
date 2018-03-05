import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import ApiStore from "./stores/apiStore"
import UIStore from "./stores/uiStore"
import { Provider } from "mobx-react"
import WebFont from "webfontloader"

const apiStore = new ApiStore()
apiStore.getResult()
const uiStore = new UIStore()
uiStore.setStep(6)
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
