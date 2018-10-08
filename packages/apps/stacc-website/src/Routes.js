import React from "react"
import epitath from "epitath"
import { SanityList } from "@staccx/sanity"
import { Loading } from "@staccx/base"
import { Route, Switch } from "react-router-dom"
import PreviewLive from "./pages/PreviewLive"
import { Case, Home, Page, Clients } from "./pages/_codeSplitting"
import FourOFour from "./pages/404"
import styled from "styled-components"

const Routes = epitath(function*({ change, inverted }) {
  const { result: clientCaseStudyPages } = yield (
    <SanityList type={"client"} filter={`hide != true`} />
  )
  const { result: pages } = yield (
    <SanityList
      type={`page" || _type == "servicePage" || _type == "productPage" || _type == "teamPage" || _type == "clientsPage" || _type == "campaignPage`}
      pick={"blocks[]{employee->,...},..."}
    />
  )

  if (!pages || !clientCaseStudyPages) {
    return (
      <LoadingContainer>
        <Loading />
      </LoadingContainer>
    )
  }

  return (
    <Switch>
      <Route
        path="/preview/:id"
        exact
        render={({ match }) => <PreviewLive id={match.params.id} />}
      />
      <Route path="/" exact render={() => <Home change={change} />} />
      <Route path="/404" exact component={FourOFour} />
      <Route path={"/clients"}>
        <Switch>
          <Route path={"/clients"} exact component={Clients} />
          {clientCaseStudyPages.map(client => {
            return client.caseStudies
              ? client.caseStudies.map(caseStudy => {
                  if (!caseStudy.path) {
                    return null
                  }
                  return (
                    <Route
                      key={caseStudy._key}
                      exact
                      path={caseStudy.path.current}
                      render={() => <Case caseStudy={caseStudy} />}
                    />
                  )
                })
              : null
          })}
          <Route
            render={() => {
              if (!inverted) {
                change({ inverted: true })
              }
              return <FourOFour />
            }}
          />
        </Switch>
      </Route>
      {pages.map(page => (
        <Route
          key={page._id}
          path={`${page.path.current}`}
          render={({ match, location }) => (
            <Page
              page={page}
              match={match}
              location={location}
              change={change}
            />
          )}
        />
      ))}
      }}
      <Route
        render={() => {
          if (!inverted) {
            change({ inverted: true })
          }
          return <FourOFour />
        }}
      />
    </Switch>
  )
})

export const LoadingContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  trasnform: translate(-50%, -50%);
`

export default Routes
