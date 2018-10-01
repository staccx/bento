import React from "react"
import styled from "styled-components"
import { ThemeComponent, spacing } from "@staccx/theme"
import { Wrapper } from "@staccx/base"

const CarsFilter = ({ cars }) => (
  <div>
    <ul>
      {cars.map(car => (
        <li>{car.id}</li>
      ))}
    </ul>
  </div>
)

export default CarsFilter
