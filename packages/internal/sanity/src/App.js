import React, { Component } from "react"
import { ThemeProvider } from "styled-components"
import theme from "./theme/Theme"
import SanityProvider from "./components/SanityProvider"
import SanityQuery from "./components/SanityQuery"
import SanityDocument from "./components/SanityDocument"
import SanityList from "./components/SanityList"
import SanityImage from "./components/SanityImage"

const testQuery = `*[_type == 'person']`

const personList = people =>
  people.map(person => (
    <div key={person._id}>
      <h1> {person.name}</h1>
      <SanityImage image={person.image ? person.image.asset : null} />
    </div>
  ))

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <SanityProvider dataset={"production"} projectId={"8j24leyc"}>
          <div>Test</div>
          <SanityDocument id={"recbTxrfOSRYiPozz"}>
            {document => (
              <div>
                <h1>{document.name}</h1>
                <SanityImage
                  image={document.image.asset}
                  options={{ witdh: 64 }}
                />
              </div>
            )}
          </SanityDocument>
          <SanityDocument id={"reci9hHMgnGsYcm0C"}>
            {document => (
              <div>
                <h1>{document.name}</h1>
                <SanityImage image={document.image.asset} />
              </div>
            )}
          </SanityDocument>
          <SanityDocument id={"reciIZxRBoNyPYbyo"}>
            {person => personList([person])}
          </SanityDocument>
          <SanityQuery query={testQuery} id={"uniqueId"}>
            {personList}
          </SanityQuery>
          <SanityList type={"person"}>
            {result => personList(result)}
          </SanityList>
        </SanityProvider>
      </ThemeProvider>
    )
  }
}

export default App
