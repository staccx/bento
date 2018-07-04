import React from "react"
import {
  Heading,
  Box,
  Paragraph,
  Tag,
  Text,
  Layout,
  LayoutItem
} from "@staccx/base"
import getCases from "../data/cases"
import getLoanType from "../helpers/getLoanType"
import { formatCurrency } from "@staccx/formatting"
import Contact from "../components/Contact"
import CaseProgressLarge from "../components/Cases/Cases.Progress.Large"

const currentCase = getCases()[0]

const Home = () => (
  <Layout variant="case">
    <LayoutItem variant="caseHeader">
      <Box variant="caseHero" />
    </LayoutItem>
    <LayoutItem variant="caseSummary">
      <Layout rowGap="small">
        <div>
          <Tag variant="inverted">{getLoanType(currentCase.type)}</Tag>
        </div>
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
        <CaseProgressLarge progress={currentCase.status} max={4} />
      </Layout>
    </LayoutItem>
    <LayoutItem variant="caseChat">
      <Box variant="chat">Chat</Box>
    </LayoutItem>
    <LayoutItem variant="caseDocumentation">
      <Heading level="2" variant="subtle">
        Dokumentasjon
      </Heading>
      <Box variant="subtle">dokumentasjon</Box>
    </LayoutItem>
    <LayoutItem variant="caseContact">
      <Heading level="2" variant="subtle">
        Låntaker
      </Heading>
      <Contact
        name={currentCase.customer.name}
        phoneNumber={currentCase.customer.phoneNumber}
        eMail={currentCase.customer.eMail}
      />
      {currentCase.cosigner && (
        <Contact
          name={currentCase.cosigner.name}
          phoneNumber={currentCase.cosigner.phoneNumber}
          eMail={currentCase.cosigner.eMail}
        />
      )}
    </LayoutItem>
    <LayoutItem variant="caseFinance">
      <Heading level="2" variant="subtle">
        Finansiering
      </Heading>
      <Box variant="subtle">Finansiering</Box>
    </LayoutItem>
    <LayoutItem variant="caseObject">
      <Heading level="2" variant="subtle">
        Objekt
      </Heading>
      <Box variant="subtle">Objektinfo</Box>
    </LayoutItem>
  </Layout>
)

export default Home
