import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Heading, Box } from "@staccx/base"

const CarsListItem = ({
  images,
  make,
  model,
  year,
  pricePerMonth,
  chassisNumber
}) => (
  <div>
    <Image src={images[0]} alt={make + " " + model} />
    <Box variant="subtle">
      <div>
        <Heading level={4}>{make + " " + model}</Heading>
        <span>Årsmodell: {year}</span> {/* TODO: replace text */}
      </div>
      <div>
        kr {pricePerMonth}
        /mnd
      </div>
      <Link to={`/car/${chassisNumber}`}>Les mer</Link>
      {/* TODO: replace text */}
    </Box>
  </div>
)

const Image = styled.img`
  display: block;
  margin: 0 auto;
`

export default CarsListItem
