import React, { Component } from "react"
import { Provider as StoreProvider } from "mobx-react"
import { ThemeProxyProvider } from "@staccx/theme"
import theme from "./theme.js"
import PropertyValue from "./components/PropertyValue"
import property from "./store/property"

class App extends Component {
  componentWillMount() {
    property.findProperty(this.props.nid).then(console.log)
  }

  render() {
    return (
      <ThemeProxyProvider theme={theme}>
        <StoreProvider store={property}>
          <PropertyValue />
        </StoreProvider>
      </ThemeProxyProvider>
    )
  }
}

export default App
