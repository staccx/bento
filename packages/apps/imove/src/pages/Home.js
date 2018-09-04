import React from "react"
import CallToAction from "../components/CallToAction/CallToAction"
import Advantages from "../components/Advantages/Advantages"
import Features from "../components/Features/Features"

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

    <Features />
  </div>
)

export default Home
