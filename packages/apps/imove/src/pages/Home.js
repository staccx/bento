import React from "react"
import data from "../data/texts"
import Hero from "../components/Hero/Hero"
import Car from "../components/Hero/Hero.Car"
import CallToAction from "../components/CallToAction/CallToAction"
import Advantages from "../components/Advantages/Advantages"
import Features from "../components/Features/Features"
import Pricing from "../components/Pricing/Pricing"
import Model from "../components/Pricing/Pricing.Model"
import Footer from "../components/Footer/Footer"
import Column from "../components/Footer/Footer.Column"

const Home = () => (
  <div>
    <Hero
      headingMain={data.headingMain}
      subHeadingMain={data.subHeadingMain}
      headingSecondary={data.headingSecondary}
      buttonCarSale={data.buttonCarSale}
      buttonCarSubscribe={data.buttonCarSubscribe}
      hverdagsbilName={data.hverdagsbilName}
      hverdagsbilSubtitle={data.hverdagsbilSubtitle}
      hyttebilName={data.hyttebilName}
      hyttebilSubtitle={data.hyttebilSubtitle}
      flyttebilName={data.flyttebilName}
      flyttebilSubtitle={data.flyttebilSubtitle}
      morobilName={data.morobilName}
      morobilSubtitle={data.morobilSubtitle}
    >
      <Car name="Hverdagsbil" img="/img/imove-hverdagsbil" />
      <Car name="Hyttebil" img="/img/imove-hverdagsbil" />
      <Car name="Flyttebil" img="/img/imove-hverdagsbil" />
      <Car name="Morobil" img="/img/imove-hverdagsbil" />
    </Hero>

    <CallToAction
      heading="Som pilotbruker får du eksklusiv tilgang til imove"
      lede="Litt om hvordan imove fungerer, og hvilke fordeler man får som pilotbruker. Den viktigste og mest attraktive fordelen bør fremheves på én eller annen måte, f.eks. i overskriften. 25 pilotbrukere."
      img="/img/road01.png"
      primaryButtonText="Meld meg på"
      primaryButtonUrl="/signup"
      secondaryButtonText="Jeg vil vite mer"
      secondaryButtonUrl="/newsletter"
      width="largePlus"
    />

    <Advantages />

    <CallToAction
      heading="Som pilotbruker får du tilgang til imove og alle fordelene"
      lede="Bli en av våre 25 pilotbrukere, og nyt fordelene av tilgang til bilen du ønsker når du trenger det. Bytt inn din gamle bil og selg den gjennom imove."
      img="/img/road02.png"
      primaryButtonText="Meld meg på"
      primaryButtonUrl="/signup"
      secondaryButtonText="Jeg vil vite mer"
      secondaryButtonUrl="/newsletter"
    />

    <Features heading={data.featuresHeading} features={data.features} />

    <Pricing heading={data.pricingHeading} cars={data.pricingCars} />

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
