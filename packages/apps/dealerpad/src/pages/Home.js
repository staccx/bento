import React from "react"
import { Heading, Layout, LayoutItem, Wrapper } from "@staccx/base"
import getCases from "../data/cases"
import getNewsItems from "../data/news"
import NewsHero from "../components/News/News.Hero"
import NewsList from "../components/News/News.List"
import CasesList from "../components/Cases/Cases.List"
import Search from "../components/Search/Search"
import Contact from "../components/Contact"

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
            <div>
              <Heading level="2" variant="subtle">
                I fokus
              </Heading>
              <NewsList articles={getNewsItems().slice(1)} />
            </div>
            <div>
              <Heading level="2" variant="subtle">
                Mine siste saker
              </Heading>
              <CasesList cases={getCases().slice(0, 5)} compact />
            </div>
          </Layout>
        </LayoutItem>
        <LayoutItem>
          <Layout rowGap="large">
            <LayoutItem>
              <div>
                <Heading level="2" variant="subtle">
                  Kontakt oss
                </Heading>
              </div>
              <Contact />
            </LayoutItem>
            <LayoutItem>
              <Search />
            </LayoutItem>
          </Layout>
        </LayoutItem>
      </Layout>
    </Wrapper>
  </div>
)

export default Home
