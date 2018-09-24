import React from "react"
import data from "../data/texts"
import Hero from "../components/Hero/Hero"
import Car from "../components/Hero/Hero.Car"
import CallToAction from "../components/CallToAction/CallToAction"
import Advantages from "../components/Advantages/Advantages"
import Features from "../components/Features/Features"
import Feature from "../components/Features/Features.Feature"
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
      button1Text={data.button1Text}
      button2Text={data.button2Text}
      hverdagsbilTitle={data.hverdagsbilTitle}
      hverdagsbilSub={data.hverdagsbilSub}
      hyttebilTitle={data.hyttebilTitle}
      hyttebilSub={data.hyttebilSub}
      flyttebilTitle={data.flyttebilTitle}
      flyttebilSub={data.flyttebilSub}
      morobilTitle={data.morobilTitle}
      morobilSub={data.morobilSub}
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

    <Features heading="Med imove får du">
      <Feature
        heading="Bil når du trenger det"
        content="En bil benyttes i snitt 4% av tiden man har til rådighet, og behovet kan variere fra dag til dag. Pengene man bruker på bil er derfor ofte dårligere anvendt enn på andre ting. Med et imove-abonnement gis du fleksibiliteten til å bytte bil når behovet ditt endrer seg."
      />
      <Feature
        heading="Vi selger din gamle bil"
        content="Våre rådgivere tilbyr den beste løsningen for deg. Enten gir vi deg oppskriften på hvordan du selv enklest får solgt bilen, alternativt bistår vi med å selge bilen via våre samarbeidspartnere. Du bestemmer hva som passer deg best!"
      />
      <Feature
        heading="Ett fast, lavt månedsbeløp"
        content="Ett av våre grunnprinsipper er enkelhet. Vi vet du foretrekker det når ting bare fungerer og er enkelt. Hos oss gir vi deg maksimal frihet med full forutsigbarhet."
      />
      <Feature
        heading="Grønt fotavtrykk"
        content="imove sine biler er miljøvennlige og sikrer deg som bilist et grønnere fotavtrykk."
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
