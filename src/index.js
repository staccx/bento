import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import WebFont from "webfontloader"

WebFont.load({
  google: {
    families: ["IBM Plex Sans:700,400", "Gothic A1:700,400"]
  }
})

ReactDOM.render(<App />, document.getElementById("root"))
registerServiceWorker()
