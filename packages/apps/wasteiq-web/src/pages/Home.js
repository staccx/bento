import React from "react"
import { Layout } from "@staccx/base"
import Hero from "../components/Hero/Hero"
import Story from "../components/Story/Story"
import Page from "../components/Page/Page"

const Home = () => {
  return (
    <Page>
      <Layout rowGap={"grid"}>
        <Hero />
        <Story />
      </Layout>
    </Page>
  )
}

export default Home
