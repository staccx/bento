import React from "react"
import { Layout } from "@staccx/base"
import Hero from "../components/Hero/Hero"
import Story from "../components/Story/Story"

const Home = () => {
  return (
    <main>
      <Layout rowGap={"grid"}>
        <Hero />
        <Story />
      </Layout>
    </main>
  )
}

export default Home
