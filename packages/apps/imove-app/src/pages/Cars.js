import React from "react"
import { Layout } from "@staccx/base"
import cars from "../data/cars"
import CarsFilter from "../components/Cars/Cars.Filter"
import CarsList from "../components/Cars/Cars.List"

const Sell = ({ history }) => {
  return (
    <Layout>
      <CarsFilter cars={cars} />
      <CarsList cars={cars} />
    </Layout>
  )
}

export default Sell
