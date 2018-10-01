import React from "react"
import { Layout, List, Heading, Button } from "@staccx/base"
import { Link } from "react-router-dom"
import cars from "../../data/cars"

const OrderBook = ({ match }) => {
  const car = cars.filter(
    car => car.chassisNumber === match.params.chassisNumber
  )[0]

  return (
    <Layout>
      <Link to="/cars">Tilbake til listen</Link>
      <img src={car.images[0]} alt="" />
      <div>
        <div>
          {car.make} {car.model}
        </div>
        <div>{car.pricePerMonth}</div>
      </div>
      <p>
        Inkludert i prisen er en «hyttebil» 10 dager per år. Hyttebilen er en
        Volvo SUV eller stasjonsvogn.
      </p>{" "}
      {/* TODO: Replace text */}
      <div>
        <Heading level={6}>Hva skjer etter bestilling</Heading>
        <List>
          <li>Du oppretter din bruker.</li>
          <li>Forhandler kontakter deg om levering.</li>
          <li>Bilen leveres og moroa kan starte</li>
        </List>
      </div>
      <p>
        NB: Du kan fortsatt ombestemme deg, trykk hold av for å sikre deg
        muligheten til å abonnere på denne bilen!
      </p>
      <Link to={`/car/${match.params.chassisNumber}/confirm`}>
        <Button>Hold av</Button>
      </Link>
      {/* TODO: Replace text */}
    </Layout>
  )
}

export default OrderBook
