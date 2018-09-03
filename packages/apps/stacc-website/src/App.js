import React, { Component } from "react"
import styled from "styled-components"
import { Wrapper, Loading } from "@staccx/base"
import { dashIt } from "@staccx/formatting"
import { ThemeProxyProvider } from "@staccx/theme"
import { SanityProvider, SanityList } from "@staccx/sanity"
import { Router, Switch, Route, Redirect } from "react-router-dom"
import createHistory from "history/createBrowserHistory"
import theme from "./theme/Theme"
import Header from "./components/Header/Header"
import Clients from "./pages/Clients"
import Contact from "./pages/Contact"
import Jobs from "./pages/Jobs"
import Overview from "./pages/Overview"
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
                    <Route path="/clients" component={Clients} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/careers" component={Jobs} />
                    <Route path="/team" component={Team} />
                    <Route path="/overview" component={Overview} />
                    <Route
                      path="/services/:filter(infrastructure)"
                      component={ServicesInfrastructure}
                      exact
                    />
                    <Route path="/services/:product" component={Service} />
                  </Switch>
                  <SanityList
                    type={"page"}
                    pick={`title,subpages[]{...}, path, blocks[]{...}`}
                  >
                    {({ result }) => {
                      if (!result) {
                        return <Loading />
                      }

                      const subpages = [].concat.apply(
                        [],
                        result.map(
                          page =>
                            page.subpages
                              ? page.subpages.filter(s => s).map(s => s)
                              : []
                        )
                      )

                      return result.map(page => {
                        if (page.subpages && page.subpages.length) {
                          //If the page has subpages

                          const baseRoute = `/${page.path.current.replace(
                            "/",
                            ""
                          )}`
                          return (
                            <div>
                              <Route
                                path={`${baseRoute}/:subpage`}
                                render={({ match }) => (
                                  <Page page={page} match={match} />
                                )}
                              />
                              <Route
                                exact
                                path={`${baseRoute}`}
                                render={() => {
                                  return (
                                    <Redirect
                                      to={`${baseRoute}/${dashIt(
                                        page.subpages[0].title
                                      )}`}
                                    />
                                  )
                                }}
                              />
                            </div>
                          )
                        }

                        if (subpages.some(s => page._id === s._key)) {
                          console.log("is subpage", page.title, subpages)
                          return null
                        }

                        return (
                          <Route
                            exact
                            path={`/${page.path.current.replace("/", "")}`}
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
