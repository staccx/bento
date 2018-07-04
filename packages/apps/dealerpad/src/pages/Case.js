import React from "react"
import { Heading, Box, Wrapper, Paragraph, Tag, Text } from "@staccx/base"
import getCases from "../data/cases"
import getLoanType from "../helpers/getLoanType"
import { formatCurrency } from "@staccx/formatting"
import Contact from "../components/Contact"

const currentCase = getCases()[0]

const Home = () => (
  <div>
    <Box variant="defaultHero">
      <Wrapper size="medium">
        <Tag variant="inverted">{getLoanType(currentCase.type)}</Tag>
        <Heading level={1} variant="caseHeading">
          {currentCase.customer.name}{" "}
          <Text variant="caseNumber">{currentCase.id}</Text>
        </Heading>
        <Paragraph variant="CaseSummary">
          {currentCase.vehicle.type}, {currentCase.vehicle.make}{" "}
          {currentCase.vehicle.model} {currentCase.vehicle.year} <br />
          {currentCase.vehicle.variant} <br />
          {formatCurrency(currentCase.financing.termRent)},-/mnd
        </Paragraph>
      </Wrapper>
    </Box>
    <Heading level="2" variant="subtle">
      Låntaker
    </Heading>
    <Contact
      name={currentCase.customer.name}
      phoneNumber={currentCase.customer.phoneNumber}
      eMail={currentCase.customer.eMail}
    />
  </div>
)

export default Home
