import React, { Component } from "react"
import styled from "styled-components"
import { Wrapper } from "@staccx/base"
import { ThemeProxyProvider } from "@staccx/theme"
import { SanityProvider, SanityList } from "@staccx/sanity"
import { Router, Switch, Route } from "react-router-dom"
import createHistory from "history/createBrowserHistory"
import theme from "./theme/Theme"
import Header from "./components/Header/Header"
import Home from "./pages/Home"
import Clients from "./pages/Clients"
import Contact from "./pages/Contact"
import Jobs from "./pages/Jobs"
import Overview from "./pages/Overview"
import Services from "./pages/Services"
import ServicesInfrastructure from "./pages/ServicesInfrastructure"
import Service from "./pages/Service"
import Team from "./pages/Team"
import Footer from "./components/Footer/Footer"
import Page from "./pages/Page"

class App extends Component {
  render() {
    const history = createHistory()

    return (
      <ThemeProxyProvider theme={theme}>
        <SanityProvider dataset={"production"} projectId={"8j24leyc"}>
          <Router history={history}>
            <PageWrapper>
              <Header />
              <Wrapper>
                <main>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/clients" component={Clients} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/careers" component={Jobs} />
                    <Route path="/team" component={Team} />
                    <Route path="/overview" component={Overview} />
                    <Route path="/services" exact component={Services} />
                    <Route
                      path="/services/:filter(infrastructure)"
                      component={ServicesInfrastructure}
                      exact
                    />
                    <Route path="/services/:product" component={Service} />
                  </Switch>
                  <SanityList
                    type={"page"}
                    pick={`title,subpages[]{blocks[]{"image": image.asset->url, ...}, ...}, path, blocks[]{"image": image.asset->url, ...}`}
                  >
                    {({ result }) => {
                      if (!result) {
                        return null
                      }

                      const subpages = result.map(
                        page => (page.subpages ? page.subpages.map(s => s) : [])
                      )

                      return result.map(page => {
                        if (page.subpages && page.subpages.length) {
                          //If the page has subpage
                          return (
                            <Route
                              path={`/${page.path.current}/:subpage`}
                              render={({ match }) => (
                                <Page page={page} match={match} />
                              )}
                            />
                          )
                        }

                        if (subpages.find(s => page._id === s._id)) {
                          return null
                        }

                        return (
                          <Route
                            exact
                            path={`/${page.path.current}`}
                            render={() => <Page page={page} />}
                          />
                        )
                      })
                    }}
                  </SanityList>
                </main>
              </Wrapper>
              <Footer />
            </PageWrapper>
          </Router>
        </SanityProvider>
      </ThemeProxyProvider>
    )
  }
}

const PageWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`

export default App
