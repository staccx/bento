import React from "react"
import styled from "styled-components"
import { spacing, font } from "@staccx/theme"
import { Wrapper, Heading, Layout } from "@staccx/base"
import SectionHeading from "../SectionHeading/SectionHeading"
import PricingCard from "./Pricing.PricingCard"

const Pricing = ({ heading, cars }) => (
  <Content>
    <Wrapper size="full">
      <Layout rowGap="huge">
        <Heading level={2}>{heading}</Heading>
        <List>
          {cars.map((car, index) => (
            <PricingCard car={car} key={index} />
          ))}
        </List>
      </Layout>
    </Wrapper>
  </Content>
)

const List = styled.div`
  display: flex;
  justify-content: center;
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
