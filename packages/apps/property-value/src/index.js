import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"

const rootName = "root"

const root = document.getElementById(rootName)
ReactDOM.render(<App {...root.dataset} />, root)
registerServiceWorker()
