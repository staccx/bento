import React from "react"
import { Layout, List, Heading, Button } from "@staccx/base"
import { Link } from "react-router-dom"
import cars from "../../data/cars"
import CarHeader from "../../components/CarHeader/CarHeader"

const OrderBook = ({ match }) => {
  const car = cars.filter(
    car => car.chassisNumber === match.params.chassisNumber
  )[0]

  return (
    <Layout paddingTop="medium" paddingBottom="huge">
      <Link to="/app/cars">
        <Button variant="back">Tilbake til listen</Button>
      </Link>
      <img src={car.images[0]} alt="" />
      <CarHeader make={car.make} model={car.model} price={car.pricePerMonth} />
      <p>
        Inkludert i prisen er en «hyttebil» 10 dager per år. Hyttebilen er en
        Volvo SUV eller stasjonsvogn.
      </p>{" "}
      {/* TODO: Replace text */}
      <div>
        <Layout rowGap="tiny">
          <Heading level={6}>Hva skjer etter bestilling</Heading>
          <List variant="bullets">
            <li>Du oppretter din bruker.</li>
            <li>Forhandler kontakter deg om levering.</li>
            <li>Bilen leveres og moroa kan starte</li>
          </List>
        </Layout>
      </div>
      <p>
        NB: Du kan fortsatt ombestemme deg, trykk hold av for å sikre deg
        muligheten til å abonnere på denne bilen!
      </p>
      <Link to={`/app/car/${match.params.chassisNumber}/confirm`}>
        <Button>Hold av</Button>
      </Link>
      {/* TODO: Replace text */}
    </Layout>
  )
}

export default OrderBook
