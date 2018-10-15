import React, { Component } from "react"
import { ThemeProxyProvider } from "@staccx/theme"
import { SanityProvider, SanityDocument } from "@staccx/sanity"
import { imoveTheme } from "@staccx/imove-theme"
import Page from "./Page"

class App extends Component {
  render() {
    return (
      <SanityProvider dataset={"production"} projectId={"116rrtgr"}>
        <ThemeProxyProvider theme={imoveTheme}>
          <SanityDocument id={"landingPage"}>
            {({ document: data }) => {
              if (!data) {
                return null
              }
              return <Page data={data} />
            }}
          </SanityDocument>
        </ThemeProxyProvider>
      </SanityProvider>
    )
  }
}

export default App
