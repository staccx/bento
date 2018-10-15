import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { Provider } from "mobx-react"
import { SanityProvider } from "@staccx/sanity"

ReactDOM.render(
  <Provider>
    <SanityProvider dataset={"production"} projectId={"116rrtgr"}>
      <App />
    </SanityProvider>
  </Provider>,
  document.getElementById("root")
)

registerServiceWorker()
