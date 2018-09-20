import React, { Component } from "react"
import styled from "styled-components"
import { Wrapper, Loading } from "@staccx/base"
import { dashIt } from "@staccx/formatting"
import { ThemeProxyProvider } from "@staccx/theme"
import { SanityProvider, SanityList } from "@staccx/sanity"
import { Router, Switch, Route, Redirect } from "react-router-dom"
import createHistory from "history/createBrowserHistory"
import theme from "./theme/Theme"

import { Footer, Header } from "./components/_codeSplitting"
import {
  Home,
  Case,
  Page,
  Contact,
  Jobs,
  Overview
} from "./pages/_codeSplitting"
import PreviewLive from "./pages/PreviewLive"

const asciiArt = `
                            \`-ohy+-\`
                         ./shmmddmdhs/.
                     \`-+ydmmds/.-+ydmmdy+-\`
                  \`:shdmmho:\`      .:sdmmdho:\`
              \`-+ydmddy+.              -odmmmdy+.\`
           .:ohmmdho:.              \`./sdmmdhhdmdho:\`
        -+ydmmdy+-\`              \`-+ydmmds/.\`\`-+ydmdhs/.
    \`:ohdmmds/.               \`:shdmmho:\`       \`./sdmmdh+-\`
    +mmmmd+.              \`-+ydmmdy+.               .odmmmd+
    +mmmdmdhs/.        .:ohdmdhs:.               ./shmmdmmd+
    +mmd-+ydmmdy+-\`\`-/ydmmdy+-\`              \`-+ydmmhs/-mmd+
    +mmd   .:odmmdhhdmmds/.               \`:shdmmho-\`  \`mmd+
    +mmd       -+ydmmmd+.\`            \`-+ydmmmh+.      \`mmd+
    +mmd          ./shdmdho:\`      .:ohmmdddmm+        \`mmd+
    +mmd             \`-+ydmdhs/.-+ydmmdy+--ymm+        \`mmd+
    +mmd:\`              \`./sdmmddmmds/.   .ymm+        \`mmd+
    +mmmmdy/.\`              \`:hmmy-\`      .ymm+        \`mmd+
    +mmdshdmdho:\`             ymms        .ymm+        \`mmd+
    +mmd \`-+ydmmhs/.          ymms        .ymm+        \`mmd+
    +mmd    \`./sdmmdho-       ymms        .ymm+        \`mmd+
    +mmd        \`:ohdmmds/.   ymms        .ymm+        \`mmd+
    +mmd           \`-/ydmmdy+-hmms        .ymm+        \`mmd+
    +mmd               .:ohdmdmmms        .ymm+        \`mmd+
    +mmmh+-\`              \`-+ydmms        .ymm+     \`:ohmmd+
    \`:ohdmmds/.               ymms        .ymm+ \`./sdmmdh+-\`
        -+ydmmdy+-\`           ymms        .ymmsoydmdhs/.
           .:ohdmdho:.        ymms        -ymmmmdho:\`
              \`-+ydmddy+.     ymms     -+ydmmdy+.\`
                  \`:shdmmho:\`\`ymms .:sdmmdho:\`
                     \`-+ydmmdydmmhydmmdy+-\`
                         ./shmmmmmdhs/.        Stacc
                            \`-ohh+-\`           -  moving finance forward

`

class App extends Component {
  render() {
    const history = createHistory()
    console.log("%c" + asciiArt, "color: #EB5E55;")
    return (
      <ThemeProxyProvider theme={theme}>
        <SanityProvider dataset={"production"} projectId={"8j24leyc"} useCdn={true}>
          <Router history={history}>
            <PageWrapper>
              <Header />
              <Wrapper>
                <main>
                  <Switch>
                    <Route
                      path="/preview/:id"
                      exact
                      render={({ match }) => (
                        <PreviewLive id={match.params.id} />
                      )}
                    />

                    <Route path="/" exact component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/careers" component={Jobs} />
                    <Route path="/overview" component={Overview} />
                  </Switch>
                  <React.Fragment>
                    <SanityList type={"client"} filter={`hide != true`}>
                      {({ result }) => {
                        if (!result) {
                          return null
                        }

                        return (
                          <React.Fragment>
                            {result.map(client => {
                              return client.caseStudies
                                ? client.caseStudies.map(caseStudy => {
                                    if (!caseStudy.path) {
                                      return null
                                    }
                                    return (
                                      <Route
                                        key={caseStudy._key}
                                        path={caseStudy.path.current}
                                        render={() => (
                                          <Case caseStudy={caseStudy} />
                                        )}
                                      />
                                    )
                                  })
                                : null
                            })}
                          </React.Fragment>
                        )
                      }}
                    </SanityList>
                  </React.Fragment>
                  <React.Fragment>
                    <SanityList
                      type={`page" || _type == "servicePage" || _type == "productPage" || _type == "teamPage" || _type == "clientsPage`}
                      pick={"blocks[]{employee->,...},..."}
                    >
                      {({ result }) => {
                        if (!result) {
                          return (
                            <LoadingContainer>
                              <Loading />
                            </LoadingContainer>
                          )
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
                            const baseRoute = `${page.path.current}`

                            const subPages = (
                              <React.Fragment>
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
                              </React.Fragment>
                            )

                            return <div key={page._id}>{subPages}</div>
                          }

                          if (subpages.some(s => page._id === s._key)) {
                            return null
                          }

                          return (
                            <Route
                              key={page._id}
                              exact
                              path={`${page.path.current}`}
                              render={({ match }) => (
                                <Page page={page} match={match} />
                              )}
                            />
                          )
                        })
                      }}
                    </SanityList>
                  </React.Fragment>
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

const LoadingContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  trasnform: translate(-50%, -50%);
`

export default App
