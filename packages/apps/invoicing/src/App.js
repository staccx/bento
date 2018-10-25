import React, { Component } from "react"
import { ThemeProvider } from "styled-components"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import theme from "./theme/Theme"
import Home from "./pages/Home"
import CreateInvoice from "./pages/CreateInvoice"
import AddCustomer from "./components/AddCustomer/AddCustomer" // TODO: Should be a part of CreateInvoice?

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/create" component={CreateInvoice} />
            <Route path="/add-customer" component={AddCustomer} />
          </Switch>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App
