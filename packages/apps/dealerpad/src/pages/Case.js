import React from "react"
import { Heading, Box, Wrapper, Paragraph } from "@staccx/base"
import Tag from "../components/Tag"

const Home = () => (
  <div>
    <Box variant="defaultHero">
      <Wrapper size="medium">
        <Tag>Lån</Tag>
        <Heading level={1}>Eivind kjellevold</Heading>
        <Paragraph variant="CaseSummary">
          Personbil, Volvo V90, 2019 Diesel <br />
          D5 AWD Silver, Inscription <br />
          5 670,-/mnd
        </Paragraph>
      </Wrapper>
    </Box>
  </div>
)

export default Home
