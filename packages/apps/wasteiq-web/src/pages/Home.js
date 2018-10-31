import React from "react"
import { Layout } from "@staccx/base"
import Hero from "../components/Hero/Hero"
import Story from "../components/Story/Story"
import Page from "../components/Page/Page"
import Features from "../components/Features/Features"
import PatternContainer from "../components/PatternContainer/PatternContainer"
import CallToAction from "../components/CallToAction/CallToAction"

const Home = () => {
  return (
    <Page>
      <Layout rowGap={"grid"}>
        <Hero />
        <Story
          color={"pinkLight"}
          icon={"IconQuarterCircle"}
          iconColor={"pink"}
        />
        <Story color={"apricotLight"} icon={"IconDash"} iconColor={"apricot"} />
        <PatternContainer>
          <Features />
        </PatternContainer>
        <Features />
        <CallToAction
          color={"greenLight"}
          icon={"IconHalfCircle"}
          iconColor={"green"}
        />
      </Layout>
    </Page>
  )
}

export default Home
