import React from "react"
import data from "../data/texts"
import Hero from "../components/Hero/Hero"
import Features from "../components/Features/Features"
import Pricing from "../components/Pricing/Pricing"
import Advantages from "../components/Advantages/Advantages"
import Comparison from "../components/Comparison/Comparison"
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

    <Footer>
      <Column heading="Finn oss">
        <p>
          imove AS
          <br />
          Strandgaten 99
          <br />
          5555 Bergen
          <br />
          Org.nr. 999 999 999
          <br />
        </p>
      </Column>
      <Column heading="Hold deg oppdatert">
        <p>
          Hold deg oppdatert med <a href="#">nyhetsbrev fra imove</a>.
        </p>
      </Column>
      <Column heading="Bli pilotbruker">
        <p>
          For mer info, ta kontakt på vårt kontaktskjema <a href="#">her</a>.
        </p>
      </Column>
    </Footer>
  </div>
)

export default Home
