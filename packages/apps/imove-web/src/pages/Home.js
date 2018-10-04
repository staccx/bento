import React from "react"
import data from "../data/texts"
import Hero from "../components/Hero/Hero"
import Features from "../components/Features/Features"
import Pricing from "../components/Pricing/Pricing"
import Advantages from "../components/Advantages/Advantages"
import Comparison from "../components/Comparison/Comparison"
import FAQ from "../components/FAQ/FAQ"
import CallToAction from "../components/CallToAction/CallToAction"
import Footer from "../components/Footer/Footer"
import Column from "../components/Footer/Footer.Column"

const Home = () => (
  <div>
    <Hero
      heroType="main"
      heroMain={data.heroMain}
      heroSecondary={data.heroSecondary}
      extraCars={data.extraCars}
    />

    <Features heading={data.featuresHeading} features={data.features} />

    <Pricing heading={data.pricingHeading} cars={data.pricingCars} />

    <Advantages heading={data.advantagesHeading} advantages={data.advantages} />

    <Comparison
      heading={data.comparisonHeading}
      headers={data.comparisonHeaders}
      rows={data.comparisonRows}
    />

    <FAQ heading={data.faqHeading} faq={data.faq} />

    <CallToAction
      bgImage="/img/road01@2x.png"
      heading={data.pilotInfoHeading}
      copy={data.pilotInfoCopy}
      buttons={data.pilotInfoButtons}
    />

    <Footer content={data.footer} />
  </div>
)

export default Home
