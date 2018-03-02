import React, { Component } from "react"
import { ThemeProvider, Wrapper } from "@staccx/base"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import DevTools from "mobx-react-devtools"
import { observer } from "mobx-react"
import Stepper from "./components/Stepper"
import DataTest from "./components/DataTest"
import TestQuestion from "./components/TestQuestion"
import { themeLaser } from "./theme/themeLaser"
import ShotgunChart from "./components/ShotgunChart"
import PieChart from "./components/PieChart";

const elementStyles = `
  html, h1, h2, h3, h4, h5, h6 {
    font-family: 'Libre Franklin', sans-serif;
  }
`

@observer
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={themeLaser} resets={elementStyles}>
        <div style={{ paddingTop: "48px" }}>
          <Router>
            <Wrapper>
              <Stepper current={3} />
              <Route
                exact
                path="/"
                render={() => (
                  <div>
                    <TestQuestion />
                    <Link to="/page1">Neste</Link>
                  </div>
                )}
              />
              <Route
                exact
                path="/page1"
                render={() => (
                  <div>
                    <DataTest /> <Link to="/">Tilbake</Link>{" "}
                    <ShotgunChart height={500} width={1000} />
                    <Link to="/page2">Neste</Link>
                  </div>
                )}
              />
              <Route
                exact
                path="/page2"
                render={() => (
                  <div>
                    <PieChart/>
                    Page 2 <Link to="/page1">Tilbake</Link>{" "}
                    <Link to="/page3">Neste</Link>
                  </div>
                )}
              />
              <Route
                exact
                path="/page3"
                render={() => (
                  <div>
                    Page 3 <Link to="/page2">Tilbake</Link>{" "}
                    <Link to="/page4">Neste</Link>
                  </div>
                )}
              />
              <Route
                exact
                path="/page4"
                render={() => (
                  <div>
                    Page 4 <Link to="/page3">Tilbake</Link>{" "}
                    <Link to="/page5">Neste</Link>
                  </div>
                )}
              />
              <Route
                exact
                path="/page5"
                render={() => (
                  <div>
                    Page 5 <Link to="/page4">Tilbake</Link>
                    <Link to="/page6">Neste</Link>
                  </div>
                )}
              />
              <Route
                exact
                path="/page6"
                render={() => (
                  <div>
                    Page 6 <Link to="/page5">Tilbake</Link>{" "}
                    <Link to="/">Tilbake til start</Link>
                  </div>
                )}
              />
            </Wrapper>
          </Router>
          <DevTools />
        </div>
      </ThemeProvider>
    )
  }
}

export default App
