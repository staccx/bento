import React from "react"
import styled from "styled-components"
import { color, spacing, font } from "@staccx/theme"
import { Wrapper, Heading } from "@staccx/base"

const Pricing = ({ heading, cars }) => (
  <Content>
    <Wrapper>
      <StyledHeading level={2}>{heading}</StyledHeading>
      <List>
        {cars.map(car => (
          <li>
            <img src={car.img} alt={car.name} />
            <Heading level={3}>{car.name}</Heading>
            <ul>
              <li>{car.type}</li>
              <li>{car.seats}</li>
              <li>{car.doors}</li>
              <li>{car.range}</li>
            </ul>
            <p>
              fra
              <br />
              kr {car.price}
              <br />
              /mnd
            </p>
          </li>
        ))}
      </List>
    </Wrapper>
  </Content>
)

const Content = styled.div`
  font-size: ${font("largePlus")};
  text-align: center;
  padding: ${spacing("huge")} 0 calc(${spacing("huge")} + 20px);
  background-image: url(${p => p.bg});
  background-size: contain;
  background-repeat: no-repeat;
`

const StyledHeading = styled(Heading)`
  padding-bottom: calc(${spacing("medium")});
`

const List = styled.ul`
  display: flex;
  justify-content: space-around;
`

export default Pricing
