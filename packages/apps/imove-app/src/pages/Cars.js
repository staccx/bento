import React from "react"
import { Layout, Search } from "@staccx/base"
import cars from "../data/cars"
import CarsFilter from "../components/Cars/Cars.Filter"
import CarsList from "../components/Cars/Cars.List"

const Sell = ({ history }) => {
  return (
    <Search indicises={["923423", "123331133221"]} documents={cars}>
      {({ change, isOpen = false }) => {
        return (
          <Layout paddingTop="medium" paddingBottom="huge" rowGap="large">
            <CarsFilter cars={cars} />
            <CarsList cars={cars} />
          </Layout>
        )
      }}
    </Search>
  )
}

export default Sell
