import React from "react"
import CallToAction from "../components/CallToAction/CallToAction"
import Advantages from "../components/Advantages/Advantages"
import Features from "../components/Features/Features"
import Feature from "../components/Features/Features.Feature"
import Pricing from "../components/Pricing/Pricing"
import Model from "../components/Pricing/Pricing.Model"
import Footer from "../components/Footer/Footer"

const Home = () => (
  <div>
    <CallToAction
      heading="Bli pilotbruker og vi hjelper deg å selge bilen din"
      lede="Med iMove Everyday trenger du ikke å binde deg til å eie en bil i lang tid. Du betaler en fast månedspris og slipper å tenke på forsikring, service og alt det der. Bli pilotbruker og få eksklusiv tilgang til iMove før vi åpner for alle."
      img="/img/road01.png"
      primaryButtonText="Meld meg på"
      primaryButtonUrl="/signup"
      secondaryButtonText="Jeg vil vite mer"
      secondaryButtonUrl="/newsletter"
      width="largePlus"
    />

    <Advantages />

    <CallToAction
      heading="Som pilotbruker får du tilgang til iMove og alle fordelene"
      lede="Bli en av våre 25 pilotbrukere, og nyt fordelene av tilgang til bilen du ønsker når du trenger det. Bytt inn din gamle bil og selg den gjennom iMove."
      img="/img/road02.png"
      primaryButtonText="Meld meg på"
      primaryButtonUrl="/signup"
      secondaryButtonText="Jeg vil vite mer"
      secondaryButtonUrl="/newsletter"
    />

    <Features heading="Med iMove får du">
      <Feature
        heading="Bil når du trenger det"
        content="Noen setninger her som beskriver denne fordelen, i litt mer detalj enn presentert på resten av siden."
      />
      <Feature
        heading="Forsikringer, service og alt det der"
        content="Noen setninger her som beskriver denne fordelen, i litt mer detalj enn presentert på resten av siden."
      />
      <Feature
        heading="Vi selger din gamle bil"
        content="Noen setninger her som beskriver denne fordelen, i litt mer detalj enn presentert på resten av siden."
      />
      <Feature
        heading="Bil når du trenger det"
        content="Noen setninger her som beskriver denne fordelen, i litt mer detalj enn presentert på resten av siden."
      />
    </Features>

    <Pricing
      heading="Hva koster det?"
      copy="Velg melom våre modeller:"
      img="/img/road03@2x.png"
    >
      <Model name="VW e-golf" price="Kr 4 300/mnd" />
      <Model name="BMW i3" price="Kr 4 900/mnd" />
      <Model name="KIA Soul" price="Kr 4 200/mnd" />
    </Pricing>

    <Footer />
  </div>
)

export default Home
