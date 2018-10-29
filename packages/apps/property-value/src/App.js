import React, { Component } from "react"
import { Provider as StoreProvider } from "mobx-react"
import { ThemeProvider } from "styled-components"
import theme from "./theme/theme.js"
import PropertyValue from "./components/PropertyValue"
import property from "./store/property"

class App extends Component {
  componentWillMount() {
    if (this.props.address) {
      property.findPropertyByAdress(this.props.address).then(console.log)
    } else if (this.props.nid) {
      property.findPropertyByNationalId(this.props.nid).then(console.log)
    }
  }

  render() {
    console.log(theme)
    return (
      <ThemeProvider theme={theme}>
        <StoreProvider store={property}>
          <PropertyValue />
        </StoreProvider>
      </ThemeProvider>
    )
  }
}

export default App
