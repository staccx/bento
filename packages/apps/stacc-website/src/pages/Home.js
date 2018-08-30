import React from "react"
import { Layout, Heading } from "@staccx/base"
import Hero from "../components/Hero/Hero"
import FullWidth from "../components/FullWidth/FullWidth"
import Story from "../components/Story/Story"
import Quote from "../components/Quote/Quote"
import LogoSalad from "../components/LogoSalad/LogoSalad"
import SectionHead from "../components/SectionHead/SectionHead"
import ContentLinks from "../components/ContentLinks/ContentLinks"
import ContentLinksItem from "../components/ContentLinks/ContentLinks.Item"
import Blocks from "../components/Viz/Blocks"

const Home = () => (
  <div>
    <Layout paddingTop="grid" rowGap="grid">
      <div>
        <Hero
          heading="Building blocks for first movers in finance."
          lede="Finance has rapidly become a technological arms race. Don’t let technology hold you back from delivering first class products and services."
          callToAction="Get in touch"
        />
        <FullWidth>
          <Blocks />
        </FullWidth>
      </div>

      <div>
        <Layout>
          <SectionHead
            heading="Services"
            headingLevel={2}
            lede="If you have an idea or a business case and need help from someone with deep domain knowledge, come talk to us."
            illustration="/img/whitepoint.png"
          />
          <ContentLinks>
            <ContentLinksItem
              heading="Financial innovation advice"
              url="/products/core"
              body=" We provide stategy and advice on what to build and how to configure it properly. We have extensive experience as entrepenours, investors, consulting, designers and developers"
            />
            <ContentLinksItem
              heading="UX & Front-end rocket fuel"
              url="/products/core"
              body="We provice a team of highly skilled designers and front-end developers to add much needed rocket fuel for first movers in banking. There’s no need to sacrifice design in order to create great user experiences."
            />
          </ContentLinks>
        </Layout>
      </div>

      <div>
        <Layout>
          <SectionHead
            heading="Products"
            headingLevel={2}
            lede="We provide a dynamic and robust infrastructure where you can build and run your business and connect everything you need."
            illustration="/img/whitepyramid.png"
          />
          <ContentLinks>
            <ContentLinksItem
              heading="API-gateway in the cloud"
              url="/products/core"
              body="The Stacc Cloud lets you access, control and monitor all our services through one easy gateway, but that is not all - connect your other services as well, including on-premise applications."
            />
            <ContentLinksItem
              heading="Build, control and fix your business workflow"
              url="/products/core"
              body="Stacc Flow is a next generation process engine that connects business logics and micro-services. Design and execute any business workflow in a scalable, secure and predictable way."
            />
            <ContentLinksItem
              heading="Account administration"
              url="/products/core"
              body="Stacc Core provides highly automated and flexible administration of credit and savings accounts. Run your bank efficiently on a modern platform that has accounting built in."
            />
            <ContentLinksItem
              heading="Financial insight for retail advisors "
              url="/products/core"
              body="Stacc Insight provides solutions for financial counselling and self-service solutions with interaction between advisor and customer. The service integrates to a rich set of data-sources and back-end systems to automate and save time."
            />
            <ContentLinksItem
              heading="Flexible case management"
              url="/products/core"
              body="Connect your business process to a case management system to handle manual parts of your process, and then inject data back into the rest of your process and automate the rest."
            />
            <ContentLinksItem
              heading="Company analysis for SMB advisors"
              url="/products/core"
              body="The service integrates to a rich set of data-sources and back-end systems to automate information gathering and save time creating analysis and forecasts on your SMB clients."
            />
          </ContentLinks>
        </Layout>
      </div>

      <LogoSalad />
      <div>
        <Layout rowGap="large">
          <Heading level={2}>Building services with Stacc</Heading>
          <div>
            <img src="/img/staccstack.png" alt="" />
          </div>
        </Layout>
      </div>
      <Quote
        img="http://fillmurray.com/200/200"
        name="Bent Gjendem, CEO at Monobank"
        quote="After switching to the Stacc automated credit scoring platform, defaults on unsecured loans dropped to under 0.7%"
      />
    </Layout>
  </div>
)

export default Home
