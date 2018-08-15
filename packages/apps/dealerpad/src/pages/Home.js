import React from "react"
import { Heading, Layout, LayoutItem, Wrapper, FileInput } from "@staccx/base"
import getNewsItems from "../data/news"
import NewsHero from "../components/News/News.Hero"
import NewsList from "../components/News/News.List"
import CasesList from "../components/Cases/Cases.List"
import SearchGlobal from "../components/Search/SearchGlobal"
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
            <LayoutItem variant="fadeIn" delay={600}>
              <Heading level="2" variant="subtle">
                I fokus
              </Heading>
              <NewsList articles={getNewsItems().slice(1)} />
            </LayoutItem>
            <LayoutItem variant="fadeIn" delay={700}>
              <Heading level="2" variant="subtle">
                Mine siste saker
              </Heading>
              <CasesList compact />
            </LayoutItem>
          </Layout>
        </LayoutItem>
        <LayoutItem>
          <Layout rowGap="large">
            <LayoutItem variant="fadeIn" delay={800}>
              <div>
                <Heading level="2" variant="subtle">
                  Kontakt oss
                </Heading>
              </div>
              <Contact />
            </LayoutItem>
            <LayoutItem variant="fadeIn" delay={900}>
              <SearchGlobal />
            </LayoutItem>
          </Layout>
        </LayoutItem>
      </Layout>
    </Wrapper>
  </div>
)

export default Home
