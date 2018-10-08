import React from "react"
import { Layout } from "@staccx/base"
import { SanityDocument } from "@staccx/sanity"
import { Page } from "./_codeSplitting"

const Clients = ({ match, history, location, change }) => (
  <Layout paddingTop="grid" paddingBottom="grid" rowGap="grid">
    <SanityDocument id={"831e840a-74e5-402d-ab6a-89505d19a01d"}>
      {({ document: clientsPage }) => {
        if (!clientsPage) {
          return <div>loading</div>
        }

        return (
          <Page
            page={clientsPage}
            match={match}
            location={location}
            change={change}
          />
        )
      }}
    </SanityDocument>
  </Layout>
)

export default Clients
