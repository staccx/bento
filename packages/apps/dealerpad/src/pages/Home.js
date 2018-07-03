import React from "react"
import { Heading, Button } from "@staccx/base"
import NewsHero from "../components/News/News.Hero"
import getNewsItems from "../data/news"

const Home = () => (
  <div>
    <header>
      <NewsHero article={getNewsItems()[0]} />
    </header>

    <Heading level={1}>Welcome home</Heading>
    <Button type="button">Nordea button</Button>
  </div>
)

export default Home
