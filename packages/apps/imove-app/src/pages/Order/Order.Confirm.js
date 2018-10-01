import React from "react"
import { Layout, Heading, Button } from "@staccx/base"
import { Link } from "react-router-dom"
import cars from "../../data/cars"

const OrderConfirm = ({ match }) => {
  const car = cars.filter(
    car => car.chassisNumber === match.params.chassisNumber
  )[0]

  // TODO: If not logged in, redirect to auth
  return (
    <Layout>
      <Heading level={1}>Du er i gang!</Heading> {/* TODO: Replace text */}
      <p>
        Vi holder av bilen for deg, og tar kontakt innen to arbeidsdager for å
        avtale levering. Normal leveringstid er 2–4 virkedager. Når bilen er
        levert kan du se den på Min side.
      </p>
      <img src={car.images[0]} alt="" />
      <div>
        <div>
          {car.make} {car.model}
        </div>
        <div>{car.pricePerMonth}</div>
      </div>
      <Link to={`/`}>
        <Button>Til Min bil</Button> {/* TODO: Replace text */}
      </Link>
    </Layout>
  )
}

export default OrderConfirm
