import React from "react"
import styled from "styled-components"
import { color, spacing, font } from "@staccx/theme"
import { Wrapper, Heading } from "@staccx/base"

const Pricing = ({ heading, cars }) => (
  <Content>
    <Wrapper size="full">
      <StyledMainHeading level={2}>{heading}</StyledMainHeading>
      <List>
        {cars.map(car => (
          <Card>
            <img src={car.img} alt={car.name} />
            <StyledHeading level={3}>{car.name}</StyledHeading>
            <CarProperties>
              <CarProperty icon="type">{car.type}</CarProperty>
              <CarProperty icon="seats">{car.seats}</CarProperty>
              <CarProperty icon="doors">{car.doors}</CarProperty>
              <CarProperty icon="range">{car.range}</CarProperty>
            </CarProperties>
            <PriceBlob>
              fra
              <br />
              kr {car.price}
              <br />
              /mnd
            </PriceBlob>
          </Card>
        ))}
      </List>
    </Wrapper>
  </Content>
)

const PriceBlob = styled.div`
  background-image: url(./img/brand/drop/green.svg);
  width: 140px;
  height: 140px;
  margin: auto;
  background-repeat: no-repeat;
  background-size: contain;
`

const StyledMainHeading = styled(Heading)`
  padding-bottom: calc(${spacing("medium")});
`

const StyledHeading = styled(Heading)`
  color: ${color("primary")};
`

const CarProperties = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: ${font("large")};
  text-align: left;
  color: ${color("secondary")};
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

const List = styled.ul`
  display: flex;
  justify-content: center;
`

const Card = styled.li`
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  max-width: 360px;
  padding: 40px;
  margin: 0 40px;
`

const Content = styled.div`
  font-size: ${font("largePlus")};
  text-align: center;
  padding: ${spacing("huge")} 0 calc(${spacing("huge")} + 20px);
  background-image: url(${p => p.bg});
  background-size: contain;
  background-repeat: no-repeat;
`

export default Pricing
