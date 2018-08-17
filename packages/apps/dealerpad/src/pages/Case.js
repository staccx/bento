import React, { Component } from "react"
import {
  Heading,
  Box,
  Paragraph,
  Tag,
  Layout,
  LayoutItem,
  Button,
  ItemGroup
} from "@staccx/base"
import { ThemeComponent } from "@staccx/theme"
import getLoanType from "../helpers/getLoanType"
import { formatCurrency } from "@staccx/formatting"
import ContactPerson from "../components/ContactPerson"
import CaseProgressLarge from "../components/Cases/Cases.Progress.Large"
import FinancingTable from "../components/Tables/Table.Financing"
import ObjectTable from "../components/Tables/Table.Object"
import ChatLogic from "../components/Chat/ChatLogic"
import Documentation from "../components/Documentation/Documentation"
import { slideLeft } from "../components/transitions/transitions"
import caseStore from "../data/store/caseStore"
import chatStore from "../data/store/chatStore"
import { observer } from "mobx-react"
import { emptyCase } from "./emptyCase"

@observer
class Case extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTab: "documentation" // Only applies to small screens
    }

    caseStore.setCurrentCase(props.match.params.caseId)
  }

  handleChangeTab(value) {
    this.setState({
      currentTab: value
    })
  }

  render() {
    const { history, location } = this.props

    const isLoading = caseStore.loadingCaseDetails
    const currentCase = isLoading ? emptyCase : caseStore.currentCase

    const customerName =
      currentCase.customers[0].firstName +
      " " +
      currentCase.customers[0].lastName

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
              {customerName}
            </Heading>
            <div>
              {currentCase.applicationId && (
                <Tag variant="inverted">{currentCase.applicationId}</Tag>
              )}{" "}
              {currentCase.productName && (
                <Tag variant="inverted">
                  {getLoanType(currentCase.productName)}
                </Tag>
              )}
            </div>
            <Paragraph variant="CaseSummary">
              {currentCase.car.vehicle} {currentCase.car.model}{" "}
              {currentCase.car.year && (
                <span>
                  {currentCase.car.year} <br />
                </span>
              )}
              {currentCase.car.variant && (
                <span>{currentCase.car.variant}</span>
              )}
              <br />
              {formatCurrency(
                currentCase.funding["termFeePerMnd(inc mva)"]
              )},-/mnd
            </Paragraph>
            <CaseProgressLarge
              hasRejectedDocuments={currentCase.hasRejectedDocuments}
              progress={currentCase.status}
              max={4}
            />
          </Layout>
        </LayoutItem>

        <LayoutItem variant="caseTabs">
          <ItemGroup>
            <Button
              onClick={() => this.handleChangeTab("documentation")}
              isCurrent={this.state.currentTab === "documentation"}
              variant="tabs"
            >
              Dokumentasjon
            </Button>
            <Button
              onClick={() => this.handleChangeTab("chat")}
              isCurrent={this.state.currentTab === "chat"}
              variant="tabs"
            >
              Chat
            </Button>
            <Button
              onClick={() => this.handleChangeTab("contact")}
              isCurrent={this.state.currentTab === "contact"}
              variant="tabs"
            >
              Kontakt
            </Button>
            <Button
              onClick={() => this.handleChangeTab("object")}
              isCurrent={this.state.currentTab === "object"}
              variant="tabs"
            >
              Detaljer
            </Button>
          </ItemGroup>
        </LayoutItem>

        <LayoutItem
          variant="caseChat"
          hideOnMobile={this.state.currentTab !== "chat"}
        >
          <ChatLogic
            messages={chatStore.messages}
            caseNumber={currentCase.applicationId}
          />
        </LayoutItem>

        {caseStore.loadingCaseDetails ? (
          <Loading />
        ) : (
          <LayoutItem
            variant="caseDocumentation"
            hideOnMobile={this.state.currentTab !== "documentation"}
          >
            <Heading level="2" variant="subtle">
              Dokumentasjon
            </Heading>
            <div>
              {currentCase.documents.map(document => (
                <Documentation
                  label={document.name}
                  status={document.status}
                  key={document.name}
                  history={history}
                  location={location}
                  document={document}
                />
              ))}
            </div>
          </LayoutItem>
        )}

        <LayoutItem
          variant="caseContact"
          hideOnMobile={this.state.currentTab !== "contact"}
        >
          <Heading level="2" variant="subtle">
            Låntaker
          </Heading>
          <ContactPerson
            name={customerName}
            phoneNumber={currentCase.customers[0].phoneNumber}
            eMail={currentCase.customers[0].eMail}
          />
          {currentCase.customers[1] && (
            <ContactPerson
              name={
                currentCase.customers[1].firstName +
                " " +
                currentCase.customers[1].lastName
              }
              phoneNumber={currentCase.customers[1].phoneNumber}
              eMail={currentCase.customers[1].eMail}
            />
          )}
        </LayoutItem>

        <LayoutItem
          variant="caseFinance"
          hideOnMobile={this.state.currentTab !== "finance"}
        >
          <Heading level="2" variant="subtle">
            Finansiering
          </Heading>
          <FinancingTable caseFinancing={currentCase.funding} />
        </LayoutItem>

        <LayoutItem
          variant="caseObject"
          hideOnMobile={this.state.currentTab !== "object"}
        >
          <Heading level="2" variant="subtle">
            Objekt
          </Heading>
          <ObjectTable caseObject={currentCase.car} />
        </LayoutItem>
      </Layout>
    )
  }
}

export default Case
