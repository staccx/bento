import React from "react"
import {
  Heading,
  Box,
  Paragraph,
  Tag,
  Layout,
  LayoutItem,
  Button
} from "@staccx/base"
import { ThemeComponent } from "@staccx/theme"
import getCases from "../data/cases"
import getLoanType from "../helpers/getLoanType"
import { formatCurrency } from "@staccx/formatting"
import ContactPerson from "../components/ContactPerson"
import CaseProgressLarge from "../components/Cases/Cases.Progress.Large"
import FinancingTable from "../components/Tables/Table.Financing"
import ObjectTable from "../components/Tables/Table.Object"
import ChatLogic from "../components/Chat/ChatLogic"
import Documentation from "../components/Documentation/Documentation"
import { slideLeft } from "../components/transitions/transitions"

const Case = ({ match, history }) => {
  const currentCase = getCases(match.params.caseId)

  return (
    <Layout variant="case">
      <LayoutItem variant="caseHeader">
        <Box variant="caseHero" />
      </LayoutItem>

      <LayoutItem variant="caseSummary">
        <Layout rowGap="small">
          <div>
            <Button
              variant="back"
              onClick={() =>
                history.push({ pathname: "/my-sales", state: slideLeft })
              }
            >
              <ThemeComponent tagName="Back" /> Mine salg
            </Button>
          </div>
          <Heading level={1} variant="caseHeading">
            {currentCase.customer.name}{" "}
          </Heading>
          <div>
            <Tag variant="inverted">{currentCase.id}</Tag>{" "}
            <Tag variant="inverted">{getLoanType(currentCase.type)}</Tag>
          </div>
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
        <ChatLogic
          messages={currentCase.messages}
          caseNumber={currentCase.id}
        />
      </LayoutItem>

      {currentCase.documents && (
        <LayoutItem variant="caseDocumentation">
          <Heading level="2" variant="subtle">
            Dokumentasjon
          </Heading>
          <div>
            {currentCase.documents.map(document => (
              <Documentation
                label={document.name}
                status={document.status}
                key={document.name}
              />
            ))}
          </div>
        </LayoutItem>
      )}

      <LayoutItem variant="caseContact">
        <Heading level="2" variant="subtle">
          Låntaker
        </Heading>
        <ContactPerson
          name={currentCase.customer.name}
          phoneNumber={currentCase.customer.phoneNumber}
          eMail={currentCase.customer.eMail}
        />
        {currentCase.cosigner && (
          <ContactPerson
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
