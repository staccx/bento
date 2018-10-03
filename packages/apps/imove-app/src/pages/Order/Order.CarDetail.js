import React from "react"
import styled from "styled-components"
import { Layout, Button, Heading } from "@staccx/base"
import { color, font } from "@staccx/theme"
import { Link } from "react-router-dom"
import cars from "../../data/cars"
import Carousel from "../../components/Carousel/Carousel"

const CarDetail = ({ match }) => {
  const car = cars.filter(
    car => car.chassisNumber === match.params.chassisNumber
  )[0]

  return (
    <Layout paddingTop="medium" paddingBottom="huge">
      <Link to="/cars">
        <Button variant="back">Tilbake til listen</Button>
      </Link>
      <Carousel images={car.images} />
      <Layout rowGap="tiny">
        <Heading level={2}>{car.make + " " + car.model}</Heading>
        <div>
          <CarPrice>
            {car.pricePerMonth}
            ,- per mnd.
          </CarPrice>
        </div>
        <div>
          <Status available>Status: Tilgjengelig nå</Status>
          {/* TODO: get from api */}
        </div>
      </Layout>
      <Link to={`/car/${match.params.chassisNumber}/book`}>
        <Button>Neste</Button>
      </Link>
    </Layout>
  )
}

const CarPrice = styled.div`
  color: ${color.secondary};
  font-size: ${font.h3};
`

const Status = styled.span`
  color: ${p => (p.available ? color("primary")(p) : color("text")(p))};
  font-weight: bold;
`

export default CarDetail
