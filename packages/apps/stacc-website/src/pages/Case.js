import React from "react"
import styled from "styled-components"
import { color, spacing, wrapper, font } from "@staccx/theme"
import { Layout, Heading } from "@staccx/base"
import SectionHead from "../components/SectionHead/SectionHead"
import ContactUs from "../components/ContactUs/ContactUs"
import NavigationSubpage from "../components/NavigationSubpage/NavigationSubpage"
import Timeline from "../components/Timeline/Timeline"

const timeLineData = [
  {
    heading: "October 2014",
    body: "Bent starts with nothing but a laptop and a phone"
  },
  {
    heading: "November 2014",
    body: "Seed round completed with 2 MNOK in funding. Hires CTO & COO"
  },
  {
    heading: "January 2015",
    body: "Selects Stacc core infrastructure platform"
  }
]

const Case = ({ match, location }) => (
  <div>
    <NavigationSubpage name={"Monobank"} />
    <Layout rowGap="grid" paddingBottom="grid">
      <SectionHead
        heading="Creating a whole new bank"
        lede="Twelve months it took from Bent Gjendem started work on creating a brand new bank - Monobank was fully operational. «If investors had been a bit faster, we would have finished it in eight months», said the bank manager himself."
      />
      <BlockContent>
        <p>
          The process started in October 2014. Bent Gjendem began dialogue with
          Stacc and Knowit, and the agreement was signed in March the following
          year. The goal was to establish a brand new bank with flexible and
          smart banking services before summer 2015.
        </p>
        <blockquote>
          <p>
            One of the reasons for choosing Stacc was the flexibility it gave
            us. The Microsoft building blocks gave us security. And it gave us
            easier integration with our own systems in Microsoft Azure, such as
            online banking, application process, data warehouse, scoring engine,
            policy and pricing
          </p>
          <cite>Bent Gjendem, CEO at Monobank</cite>
        </blockquote>
        <p>
          Stacc's customer controversy, with Microsoft technology as the key
          component, was an important factor, while having both the scope of
          action and the freedom to take full control of the core process
          itself.
        </p>

        <p>
          "We saw that choosing a shelf solution was not right for us. The
          choice of Stacc enabled us to run frequent releases. At the same time,
          it allows us to easily adapt our core business to new markets in a
          multiland platform, "says Gjendem. The bank manager has always focused
          on customer needs in the process.
        </p>

        <p>
          "It is as important with satisfied customers in the banking industry
          as in any other industry. Then you must also create what your
          customers want, which is difficult with a very standardized solution.
          Most banks are known to have a heavy spaghetti of systems that will
          work together.
        </p>

        <p>
          "And in fact, the more complex the system you make, the more difficult
          it is to create something good for the customer. Thus, Stacc is an
          excellent starting point for a new bank, says Gjendem.
        </p>
        <Abstract>
          Monobank is a pure online bank with a focus on the private market,
          offering loans without collateral and high interest account. The bank
          has 29 employees and headquarters in Bergen, a loan of NOK 840
          million, a contribution of NOK 903 million and is in strong growth.
        </Abstract>
      </BlockContent>
      <div>
        <Layout>
          <Heading level={3}>Timeline</Heading>
          <Timeline items={timeLineData} />
        </Layout>
      </div>
      <ContactUs
        person={{
          name: "Geir Nordrik",
          phone: "+47 123 12 123",
          email: "geirn@stacc.com",
          img: "/img/geirn.png"
        }}
      />
    </Layout>
  </div>
)

const BlockContent = styled(Layout)`
  > p {
    max-width: ${wrapper.medium};
    line-height: 1.6;
  }

  > blockquote {
    padding: ${spacing.large} 0;

    > p {
      font-size: ${font.h3};
      font-style: italic;
      font-weight: 300;
      line-height: 1.6;
      margin-bottom: ${spacing.small};
    }
    > cite {
      font-style: normal;
    }
  }
`

const Abstract = styled.p`
  border: 1px solid ${color.line};
  background-color: ${color("g4")};
  padding: ${spacing.medium};
`

export default Case
