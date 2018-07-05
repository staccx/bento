import React from "react"
import { Heading, Box, Layout, LayoutItem, Wrapper, Flag } from "@staccx/base"
import NewsHero from "../components/News/News.Hero"
import NewsList from "../components/News/News.List"
import CasesList from "../components/Cases/Cases.List"
import getNewsItems from "../data/news"
import getCases from "../data/cases"
import PortalLink from "../components/PortalLink"

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
          <div>
            <Heading level="2" variant="subtle">
              Kontakt oss
            </Heading>
          </div>
          <Box variant="contact">
            <Layout>
              <div>
                hverdager: 8:00 - 17:00 <br />
                tors: 8:00 - 19:00<br />
                lør: 10:00 - 14:00
              </div>
              <Flag
                small
                img={<PortalLink href={`tel:06245`} tagName="Phone" />}
              >
                06 245
              </Flag>
            </Layout>
          </Box>
        </LayoutItem>
      </Layout>
    </Wrapper>
  </div>
)

export default Home
