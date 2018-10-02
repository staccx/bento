import React from "react"
import { Layout, Button } from "@staccx/base"
import { Link } from "react-router-dom"
import cars from "../../data/cars"

const CarDetail = ({ match }) => {
  const car = cars.filter(
    car => car.chassisNumber === match.params.chassisNumber
  )[0]

  return (
    <Layout paddingTop="medium" paddingBottom="huge">
      <Link to="/cars">
        <Button variant="back">Tilbake til listen</Button>
      </Link>
      {car.images.map(image => (
        <img src={image} alt="" />
      ))}
      <div>
        {car.make} {car.model}
      </div>
      <div>{car.pricePerMonth}</div>
      <div>Status: tilgjengelig nå {/* TODO: get from api */}</div>
      <Link to={`/car/${match.params.chassisNumber}/book`}>
        <Button>Neste</Button>
      </Link>
    </Layout>
  )
}

export default CarDetail
