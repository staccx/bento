import React from "react"
import { Heading, Button, Layout, LayoutItem, Wrapper } from "@staccx/base"
import NewsHero from "../components/News/News.Hero"
import NewsList from "../components/News/News.List"
import CasesList from "../components/Cases/Cases.List"
import getNewsItems from "../data/news"
import getCases from "../data/cases"

const Home = () => (
  <div>
    <header>
      <NewsHero article={getNewsItems()[0]} />
    </header>

    <Wrapper>
      <Layout
        grid="fiftyFifty"
        paddingTop="large"
        paddingBottom="large"
        columnGap="huge"
      >
        <LayoutItem>
          <Layout>
            <NewsList articles={getNewsItems().slice(1)} />
            <CasesList cases={getCases().slice(0, 5)} compact />
          </Layout>
        </LayoutItem>
      </Layout>
    </Wrapper>
  </div>
)

export default Home
