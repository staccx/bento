import PropTypes from 'prop-types'
import React from "react"
import {
  Box,
  Button,
  ExpandListItem,
  Heading,
  List,
  Paragraph,
  Wrapper
} from "@staccx/base"
import { color, spacing } from "@staccx/theme"
import {
  OfferTable,
  OfferTableData,
  OfferTableText,
  OfferTableTotal
} from "./replace/Styles.OfferTable"
import styled from "styled-components"
import { formatCurrency } from "@staccx/formatting"

// const SIGN_ORDER_STATUS_PENDING = "pending"

class Sign extends React.Component {
  render() {
    return (
      <Wrapper size="medium" breakout>
        <Box variant="illustration">
          {this.props.renderIllustration()}
          {/* <img src="/assets/signing.svg" alt="" width="175" /> */}
        </Box>
        <Heading variant="centered" level={1}>
          {this.props.headingText}
        </Heading>
        <Paragraph variant="lead">{this.props.leadText}</Paragraph>
        <Box variant="tileBox">
          <ul>
            <ExpandListItem
              title={
                this.props.loanDetailsText +
                ` ${formatCurrency(this.props.loanAmount)}`
              }
            >
              {/* TODO: vise om det er lån eller kreditt☝️ */}
              <OfferTable>
                <tbody>
                  <tr>
                    <OfferTableText>{this.props.loanOfferText}</OfferTableText>
                    <OfferTableData>
                      {formatCurrency(this.props.loanAmount)}
                    </OfferTableData>
                  </tr>
                  <tr>
                    <OfferTableText>
                      {this.props.loanDurationText}
                    </OfferTableText>
                    <OfferTableData>
                      {this.props.repaymentPeriod} {this.props.monthSuffix}
                    </OfferTableData>
                  </tr>
                  <tr>
                    <OfferTableText>{this.props.monthlyFeeText}</OfferTableText>
                    <OfferTableData>{this.props.interestRate}%</OfferTableData>
                  </tr>
                  <tr>
                    <OfferTableText>{this.props.paybackText}</OfferTableText>
                    <OfferTableData>
                      {formatCurrency(this.props.paybackTotal)}
                    </OfferTableData>
                  </tr>
                  <OfferTableTotal>
                    <OfferTableText>{this.props.payMonthlyText}</OfferTableText>
                    <OfferTableData>
                      {formatCurrency(this.props.monthlyPayment)}
                    </OfferTableData>
                  </OfferTableTotal>
                </tbody>
                {/* TODO: ☝️ lokalisering + tall fra API */}
              </OfferTable>
            </ExpandListItem>
            {this.props.signOrders &&
              this.props.signers.map((signer, index) => {
                const orders = this.props.signOrders.filter(
                  order => order.signee === signer.nationalId
                )

                const signedDocuments = orders.reduce(
                  (acc, current) =>
                    acc +
                    (current.status === this.props.signOrderStatusCompleted)
                      ? 1
                      : 0,
                  0
                )
                return (
                  <ExpandListItem
                    key={signer.id}
                    title={
                      <Box variant="split">
                        <span>{`${signer.name || "Geir Nilsen"} (${
                          signer.email
                        })`}</span>{" "}
                        {/* TODO: ☝️ fjerne denne fallbacken */}
                        <span>{`${signedDocuments}/${orders.length}`}</span>
                        {/* TODO: ☝️ hente fra api */}
                      </Box>
                    }
                    expanded={index === 0}
                    flush
                  >
                    <List variant="documentStatusList">
                      {orders.map(order => {
                        const showButton =
                          order.status !==
                            this.props.signOrderStatusCompleted ||
                          this.props.user.nationalId !== order.signee
                        return (
                          <DocumentStatusItem key={order.requestId}>
                            <div>
                              {this.props.renderDocumentText(
                                order.documentType
                              )}
                            </div>
                            <div>
                              {showButton && (
                                <SignButton href={order.url}>
                                  {this.props.signText}
                                </SignButton>
                              )}
                              {this.props.user.nationalId !== order.signee &&
                                order.status !==
                                  this.props.signOrderStatusCompleted &&
                                this.props.waitingForSignatureText}
                              {order.status ===
                                this.props.signOrderStatusCompleted && (
                                <Checkmark viewBox="0 0 28 28">
                                  <path
                                    fill="#19AC20"
                                    d="M14 28a14 14 0 1 0 0-28 14 14 0 0 0 0 28zm-2-11l9-10 2 2-11 12-6-6 2-2 4 4z"
                                  />
                                </Checkmark>
                              )}
                            </div>
                          </DocumentStatusItem>
                        )
                      })}
                    </List>
                  </ExpandListItem>
                )
              })}
          </ul>
        </Box>
      </Wrapper>
    )
  }
}

const SignButton = styled(Button.withComponent("a"))`
  margin-bottom: 0;
  &:disabled {
    background: gray;
  }
`

const Checkmark = styled.svg`
  display: block;
  width: 24px;
  height: 24px;
`

const DocumentStatusItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;
  padding: ${spacing.small} ${spacing.medium};
  border-top: 1px solid ${color.line};
`

export default Sign

Sign.propTypes = {
  headingText: PropTypes.string,
  interestRate: PropTypes.number.isRequired,
  leadText: PropTypes.string,
  loanAmount: PropTypes.number.isRequired,
  loanDetailsText: PropTypes.string,
  loanDurationText: PropTypes.string,
  loanOfferText: PropTypes.string,
  monthSuffix: PropTypes.string,
  monthlyFeeText: PropTypes.string,
  monthlyPayment: PropTypes.number.isRequired,
  payMonthlyText: PropTypes.string,
  paybackText: PropTypes.string,
  paybackTotal: PropTypes.number.isRequired,
  renderDocumentText: PropTypes.func.isRequired,
  renderIllustration: PropTypes.func.isRequired,
  repaymentPeriod: PropTypes.number.isRequired,
  signOrderStatusCompleted: PropTypes.string,
  signOrders: PropTypes.array.isRequired,
  signText: PropTypes.string,
  signers: PropTypes.array.isRequired,
  user: PropTypes.shape({
    nationalId: PropTypes.string.isRequired
  }).isRequired,
  waitingForSignatureText: PropTypes.string
}

Sign.defaultProps = {
  headingText: "Lånetilbud",
  leadText: "Noe tekst her",
  loanDetailsText: "Detaljer...",
  loanDurationText: "Lånelengde",
  loanOfferText: "Lånetilbud",
  monthSuffix: "mnd",
  monthlyFeeText: "Månedlige gebyrer",
  payMonthlyText: "Å betale månedlig",
  paybackText: "Å betale totalt",
  signOrderStatusCompleted: "COMPLETED",
  signText: "Signèr",
  waitingForSignatureText: "Venter på signering"
}