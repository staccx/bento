import React from "react"
import { SanityDocument} from "@staccx/sanity"
import Page from "./Page"

const Home = () => (
  <SanityDocument id={"beb2be49-57cb-4cc6-9cd9-2b87656dd8d3"}>
    {({ document }) => {
      if (!document) {
        return null
      }

      return <Page page={document} />
    }}
  </SanityDocument>
)

export default Home
