import React from "react"
import { Layout, Heading } from "@staccx/base"
import Hero from "../components/Hero/Hero"
import FullWidth from "../components/FullWidth/FullWidth"
import Story from "../components/Story/Story"
import Quote from "../components/Quote/Quote"
import LogoSalad from "../components/LogoSalad/LogoSalad"
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

      <Story
        heading="Dynamic and robust infrastructure"
        body="Todays challenges demand systems that are uncoupled, yet communicate better than ever. Use as many or as few blocks as you want – all our systems are created from the ground up to talk to other platforms."
        illustration="/img/whitepyramid.png"
        callToAction={"Explore infrastructure products"}
        callToActionUrl={"/services/infrastructure"}
        isReverse={false}
      />
      <Story
        heading="Innovation and business development"
        body="Wether you are a seasoned veteran of the industry or a new challenger, an outside perspective from someone with deep domain knowledge can be invaluable."
        illustration="/img/whiteconnected.png"
        callToAction={"Explore innovation services"}
        callToActionUrl={"/services/innovation"}
        isReverse={false}
      />
      <Story
        heading="Flexible and personalized UX"
        body=" What makes you unique should be reflected in every interaction with your users – all the way down to the tiniest details. But you have to move fast, and keep changing."
        illustration="/img/whitepoint.png"
        callToAction={"Explore design and front-end"}
        callToActionUrl={"/services/ux"}
        isReverse={false}
      />
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
