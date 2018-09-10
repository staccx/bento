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
import Case from "./pages/Case"
import Footer from "./components/Footer/Footer"
import Page from "./pages/Page"

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

const p2t = {
  "/": {
    type: "homePage",
    pick: `title, hero[], blocks[]{...}`
  },
  "/team": {
    type: "teamPage",
    pick: `title,sectionHead[]`
  },
  "/clients": {
    type: "clientPage",
    pick: `title,sectionHead[]`
  }
}

class App extends Component {
  render() {
    const history = createHistory()
    console.log(asciiArt)

    return (
      <ThemeProxyProvider theme={theme}>
        <SanityProvider dataset={"production"} projectId={"8j24leyc"}>
          <Router history={history}>
            <PageWrapper>
              <Header />
              <Wrapper>
                <main>
                  <Switch>
                    <Route path="/clients" exact component={Clients} />
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
                    <Route path="/clients/cases/:case" exact component={Case} />
                  </Switch>
                  <Route
                    render={({ match }) => {
                      const pageType = p2t[match.path] || "page"
                      return (
                        <SanityList type={pageType.type} pick={pageType.pick}>
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
                                const baseRoute =
                                  pageType === "page"
                                    ? `/${page.path.current.replace("/", "")}`
                                    : match.path

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
                                console.log("is subpage", page.title, subpages)
                                return null
                              }

                              return (
                                <Route
                                  key={page._id}
                                  exact
                                  path={
                                    pageType === "page"
                                      ? `/${page.path.current.replace("/", "")}`
                                      : match.path
                                  }
                                  render={() => <Page page={page} />}
                                />
                              )
                            })
                          }}
                        </SanityList>
                      )
                    }}
                  />
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
