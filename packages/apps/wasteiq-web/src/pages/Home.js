import React from "react"
import { Layout } from "@staccx/base"
import Hero from "../components/Hero/Hero"
import Story from "../components/Story/Story"
import Page from "../components/Page/Page"
import Features from "../components/Features/Features"

const Home = () => {
  return (
    <Page>
      <Layout rowGap={"grid"}>
        <Hero />
        <Story color={"pinkLight"} icon={"IconHalfCircle"} iconColor={"pink"} />
        <Story color={"apricotLight"} icon={"IconDash"} iconColor={"apricot"} />
        <Features />
      </Layout>
    </Page>
  )
}

export default Home
