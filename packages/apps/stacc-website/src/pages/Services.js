import React from "react"
import { Layout } from "@staccx/base"
import PageHead from "../components/PageHead/PageHead"
import Story from "../components/Story/Story"

const Services = ({ match }) => {
  console.log(match)
  return (
    <div>
      <Layout paddingTop="grid" rowGap="grid">
        <PageHead
          heading="Bold moves, not big talk"
          lede="We’re creating the future of finance block by block. Cutting edge technology with a proven track record."
        />
        <Story
          heading="Infrastructure & architecture"
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
      </Layout>
    </div>
  )
}

export default Services
