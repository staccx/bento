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

const Home = () => (
  <div>
    <Hero data={data.hero} />

    <Features data={data.features} />

    <Pricing data={data.pricing} />

    <Advantages data={data.advantages} />

    <Comparison data={data.comparison} />

    <FAQ data={data.faq} />

    <CallToAction data={data.pilotInfo} />

    <Footer data={data.footer} />
  </div>
)

export default Home
