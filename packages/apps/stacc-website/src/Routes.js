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
  const { result: pages } = yield (
    <SanityList
      filter={`_type match "*page"`}
      pick={"blocks[]{employee->,...},..."}
      id={"pages"}
    />
  )

  if (!pages) {
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
      <Route path={"/clients"} exact component={Clients} />
      {pages.map(page => {
        const exact = !!(!page.subpages || page.subpages.length <= 0)
        return (
          <Route
            key={page._id}
            path={`${page.path.current}`}
            render={({ match, location }) => {
              if (page._type === "caseStudyPage") {
                return <Case caseStudy={page} />
              }
              return (
                <Page
                  page={page}
                  match={match}
                  location={location}
                  change={change}
                />
              )
            }}
            exact={exact}
          />
        )
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
  )
})

export const LoadingContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  trasnform: translate(-50%, -50%);
`

export default Routes
