import React, { Component } from "react"
import {
  Heading,
  Box,
  Paragraph,
  Tag,
  Layout,
  LayoutItem,
  Button,
  ItemGroup,
  Loading
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
import { observer } from "mobx-react"

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
    const { match, history, location } = this.props
    const currentCase = caseStore.getCase(match.params.caseId)
    if (caseStore.loadingCaseDetails) {
      return <Loading />
    }

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
              <Tag variant="inverted">{currentCase.applicationId}</Tag>{" "}
              <Tag variant="inverted">
                {getLoanType(currentCase.productName)}
              </Tag>
            </div>
            <Paragraph variant="CaseSummary">
              {currentCase.car.vehicle} {currentCase.car.model}{" "}
              {currentCase.car.year} <br />
              {currentCase.car.variant} <br />
              {formatCurrency(
                currentCase.funding["termFeePerMnd(inc mva)"]
              )},-/mnd
            </Paragraph>
            <CaseProgressLarge progress={currentCase.status} max={4} />
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
            messages={currentCase.messages}
            caseNumber={currentCase.applicationId}
          />
        </LayoutItem>

        {currentCase.documents && (
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
            phoneNumber={currentCase.customers[0].phoneNumber || "n/a"}
            eMail={currentCase.customers[0].eMail || "n/a"}
          />
          {currentCase.cosigner && (
            <ContactPerson
              name={currentCase.cosigner.name}
              phoneNumber={currentCase.cosigner.phoneNumber}
              eMail={currentCase.cosigner.eMail}
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
