import React from "react"
import epitath from "epitath"
import { Layout, Search } from "@staccx/base"
import cars from "../data/cars"
import CarsFilter from "../components/Cars/Cars.Filter"
import CarsList from "../components/Cars/Cars.List"

const Cars = epitath(function*({ history }) {
  const { result: makeAndModel, search: searchMakeAndModel } = yield (
    <Search
      indicises={["make", "model"]}
      documents={cars}
      indexer={"chassisNumber"}
    />
  )

  return (
    <Layout paddingTop="medium" paddingBottom="huge" rowGap="large">
      <CarsFilter
        cars={cars}
        result={makeAndModel}
        handleSearchMake={searchMakeAndModel}
        handleSearchPrice={console.log}
        handleSearchRange={console.log}
      />
      <CarsList cars={makeAndModel} />
    </Layout>
  )
})

export default Cars
