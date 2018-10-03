import React from "react"
import { Layout, Button } from "@staccx/base"
import { Link } from "react-router-dom"
import cars from "../../data/cars"
import CarHeader from "../../components/CarHeader/CarHeader"
import Carousel from "../../components/Carousel/Carousel"
import DetailsList from "../../components/DetailsList/DetailsList"

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
      <CarHeader
        make={car.make}
        model={car.model}
        price={car.pricePerMonth}
        status={"available"}
      />
      <DetailsList car={car} />
      <Link to={`/car/${match.params.chassisNumber}/book`}>
        <Button>Neste</Button>
      </Link>
    </Layout>
  )
}

export default CarDetail
