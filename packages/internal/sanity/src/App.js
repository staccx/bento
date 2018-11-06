import React, { Component } from "react"
import { Wrapper, Text, Image } from "@staccx/base"
import { ThemeProvider } from "styled-components"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import theme from "./theme/Theme"
import SanityProvider from "./components/SanityProvider"
import SanityQuery from "./components/SanityQuery"
import SanityDocument from "./components/SanityDocument"
import SanityList from "./components/SanityList"
import SanityImage from "./components/SanityImage"

const testQuery = `*[_type == 'person']`
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <SanityProvider dataset={"production"} projectId={"8j24leyc"}>
          <Router>
            <div>
              <Route
                path={"/"}
                exact
                render={() => (
                  <Wrapper>
                    <SanityDocument
                      id={"a80f1f16-76ad-40ce-97dc-3e190f2b5269"}
                      pick={`name, "image": logo, "metadata": logo.asset->metadata`}
                    >
                      {({ document: person }) => {
                        if (!person) {
                          return <div>loading...</div>
                        }
                        return (
                          <div>
                            <SanityImage
                              image={person.image}
                              quality={100}
                              width={200}
                              flipVertical
                            />
                            <Text>{person.name}</Text>
                          </div>
                        )
                      }}
                    </SanityDocument>
                    <SanityDocument id={"reci9hHMgnGsYcm0C"}>
                      {({ document: person }) => {
                        if (!person) {
                          return <div>loading...</div>
                        }
                        return (
                          <div>
                            <SanityImage image={person.image}>
                              {({ image }) => (
                                <Image
                                  src={image
                                    .width(200)
                                    .blur(60)
                                    .url()}
                                  aspectRatio={"4:1"}
                                  width={200}
                                />
                              )}
                            </SanityImage>
                            <Text>{person.name}</Text>
                          </div>
                        )
                      }}
                    </SanityDocument>
                    <hr style={{ marginBottom: "64px" }} />
                    <SanityQuery id={"testing"} query={testQuery}>
                      {({ result }) => {
                        if (!result) {
                          return null
                        }
                        return result.map(person => (
                          <div key={person._id}>{person.name}</div>
                        ))
                      }}
                    </SanityQuery>

                    <SanityList type={"person"} count={10} pick={"name, _id"}>
                      {({ result }) => {
                        if (!result) {
                          return null
                        }
                        return result.map(person => (
                          <div key={person._id}>{person.name}</div>
                        ))
                      }}
                    </SanityList>
                    <Link to={"/other"}>Annen side</Link>
                  </Wrapper>
                )}
              />

              <Route
                path={"/other"}
                exact
                render={() => (
                  <Wrapper>
                    Same list different page.
                    <SanityList type={"person"} count={10} pick={"name, _id"}>
                      {({ result }) => {
                        if (!result) {
                          return null
                        }
                        return result.map(person => (
                          <div key={person._id}>{person.name}</div>
                        ))
                      }}
                    </SanityList>
                    <Link to={"/"}>Tilbake</Link>
                  </Wrapper>
                )}
              />
            </div>
          </Router>
        </SanityProvider>
      </ThemeProvider>
    )
  }
}

export default App
