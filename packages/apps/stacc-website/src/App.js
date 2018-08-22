import React, { Component } from "react"
import { Wrapper } from "@staccx/base"
import { ThemeProxyProvider } from "@staccx/theme"
import { Router, Switch, Route } from "react-router-dom"
import createHistory from "history/createBrowserHistory"
import theme from "./theme/Theme"
import Header from "./components/Header/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Clients from "./pages/Clients"
import Contact from "./pages/Contact"
import Jobs from "./pages/Jobs"
import Overview from "./pages/Overview"
import Services from "./pages/Services"
import Service from "./pages/Service"
import Footer from "./components/Footer/Footer"

class App extends Component {
  render() {
    const history = createHistory()
    return (
      <ThemeProxyProvider theme={theme}>
        <Router history={history}>
          <div>
            <Header />
            <Wrapper>
              <main>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/clients" component={Clients} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/careers" component={Jobs} />
                  <Route path="/overview" component={Overview} />
                  <Route path="/services" exact component={Services} />
                  <Route path="/services/:product" component={Service} />
                </Switch>
              </main>
            </Wrapper>
            <Footer />
          </div>
        </Router>
      </ThemeProxyProvider>
    )
  }
}

export default App
