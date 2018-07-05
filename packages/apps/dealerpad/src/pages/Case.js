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
import FinancingTable from "../components/Tables/Table.Financing"
import ObjectTable from "../components/Tables/Table.Object"
import ChatLogic from "../components/ChatLogic"
import Documentation from "../components/Documentation/Documentation"

const Case = ({ match }) => {
  const currentCase = getCases(match.params.caseId)

  return (
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
        <ChatLogic messages={currentCase.messages} />
      </LayoutItem>
      <LayoutItem variant="caseContact">
        <Layout>
          <Heading level="2" variant="subtle">
            Låntaker
          </Heading>
          <Paragraph variant="CaseSummary">
            {currentCase.vehicle.type}, {currentCase.vehicle.make}{" "}
            {currentCase.vehicle.model} {currentCase.vehicle.year} <br />
            {currentCase.vehicle.variant} <br />
            {formatCurrency(currentCase.financing.termRent)},-/mnd
          </Paragraph>
        </Layout>
      </LayoutItem>
      <LayoutItem variant="caseChat">
        <ChatLogic messages={currentCase.messages} />
      </LayoutItem>

      {currentCase.documents && (
        <LayoutItem variant="caseDocumentation">
          <Heading level="2" variant="subtle">
            Dokumentasjon
          </Heading>
          <div>
            {currentCase.documents.map(document => (
              <Documentation label={document.name} status={document.status} />
            ))}
          </div>
        </LayoutItem>
      )}

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
        <FinancingTable caseFinancing={currentCase.financing} />
      </LayoutItem>
      <LayoutItem variant="caseObject">
        <Heading level="2" variant="subtle">
          Objekt
        </Heading>
        <ObjectTable caseObject={currentCase.vehicle} />
      </LayoutItem>
    </Layout>
  )
}

export default Case
