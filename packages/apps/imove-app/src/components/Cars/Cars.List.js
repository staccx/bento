import React from "react"
import { Layout } from "@staccx/base"
import CarsListItem from "./Cars.List.Item"

const CarsList = ({ cars }) => (
  <div>
    <Layout>
      {cars.map(car => (
        <div key={car.id}>
          <CarsListItem
            make={car.make}
            model={car.model}
            images={car.images}
            year={car.year}
            pricePerMonth={car.pricePerMonth}
            chassisNumber={car.chassisNumber}
          />
        </div>
      ))}
    </Layout>
  </div>
)

export default CarsList
