import React from "react"
import PropTypes from "prop-types"
import PriceBlob from "./Pricing.PriceBlob"
import styled from "styled-components"
import { color, font, spacing } from "@staccx/theme"
import { Heading } from "@staccx/base"

const PricingCard = ({ car }) => (
  <Content>
    <img src={car.img} alt={car.name} />
    <Heading level={3} variant="primary">
      {car.name}
    </Heading>
    <CarProperties>
      <CarProperty icon="type">{car.type}</CarProperty>
      <CarProperty icon="seats">{car.seats}</CarProperty>
      <CarProperty icon="doors">{car.doors}</CarProperty>
      <CarProperty icon="range">{car.range}</CarProperty>
    </CarProperties>
    <PriceBlob price={car.price} />
  </Content>
)

const Content = styled.div`
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  max-width: 360px;
  padding: 40px;
  margin: 0 40px;
`

const CarProperties = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: ${font("large")};
  text-align: left;
  color: ${color("gray")};
`

const CarProperty = styled.li`
  min-width: 50%;
  margin: ${spacing("small")} 0;
  padding-left: calc(1em + 10px);
  background-image: url(./img/icons/icon-car-${props => props.icon}.svg);
  background-repeat: no-repeat;
  background-position: left center;
  }
`

PricingCard.propTypes = {
  car: PropTypes.object
}

export default PricingCard
