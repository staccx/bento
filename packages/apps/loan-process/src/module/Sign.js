import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import {
  Box,
  ExpandListItem,
  Heading,
  List,
  Wrapper,
  Expand
} from "@staccx/base"
import { spacing } from "@staccx/theme"
import { formatCurrency, formatName } from "@staccx/formatting"
import SignDocument from "./Sign.Document"
import {
  OfferTable,
  OfferTableData,
  OfferTableText,
  OfferTableTotal
} from "./replace/Styles.OfferTable"

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
        <Lede>
          <Expand title={this.props.loanDetailsText}>
            <span>
              {this.props.loanDetailsText +
                ` ${formatCurrency(this.props.loanAmount)}`}
            </span>
            <Details>
              <Box variant="tileBox">
                {/* TODO: vise om det er lån eller kreditt☝️ */}
                <OfferTable>
                  <tbody>
                    <tr>
                      <OfferTableText>
                        {this.props.loanOfferText}
                      </OfferTableText>
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
                      <OfferTableText>
                        {this.props.monthlyFeeText}
                      </OfferTableText>
                      <OfferTableData>
                        {this.props.interestRate}%
                      </OfferTableData>
                    </tr>
                    <tr>
                      <OfferTableText>{this.props.paybackText}</OfferTableText>
                      <OfferTableData>
                        {formatCurrency(this.props.paybackTotal)}
                      </OfferTableData>
                    </tr>
                    <OfferTableTotal>
                      <OfferTableText>
                        {this.props.payMonthlyText}
                      </OfferTableText>
                      <OfferTableData>
                        {formatCurrency(this.props.monthlyPayment)}
                      </OfferTableData>
                    </OfferTableTotal>
                  </tbody>
                  {/* TODO: ☝️ lokalisering + tall fra API */}
                </OfferTable>
              </Box>
            </Details>
          </Expand>
        </Lede>

        {/* Render users own documents */}
        {this.props.signOrders &&
          this.props.signers.map((signer, index) => {
            const orders = this.props.signOrders.filter(
              order => order.signee === signer.nationalId
            )

            const signedDocuments = orders.reduce(
              (acc, current) =>
                acc + (current.status === this.props.signOrderStatusCompleted)
                  ? 1
                  : 0,
              0
            )
            if (index === 0) {
              return (
                <div>
                  <Heading variant="boxHeading" level={2}>
                    {this.props.userTaskText}
                  </Heading>
                  <Box variant="tileBox">
                    {orders.map(order => {
                      const showButton =
                        order.status !== this.props.signOrderStatusCompleted ||
                        this.props.user.nationalId !== order.signee
                      return (
                        <SignDocument
                          order={order}
                          user={this.props.user}
                          showButton={showButton}
                          signText={this.props.signText}
                          signOrderStatusCompleted={
                            this.props.signOrderStatusCompleted
                          }
                          waitingForSignatureText={
                            this.props.waitingForSignatureText
                          }
                          renderDocumentText={this.props.renderDocumentText}
                        />
                      )
                    })}
                  </Box>
                </div>
              )
            }
          })}
        {/* Render other signers documents */}
        {this.props.signers.length > 1 && (
          <div>
            <Heading variant="boxHeading" level={2}>
              {this.props.othersTaskText}
            </Heading>
            <Box variant="tileBox">
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
                  if (index > 0) {
                    return (
                      <List>
                        <ExpandListItem
                          key={signer.id}
                          title={
                            <Box variant="split">
                              <span>{formatName(signer.name)}</span>
                              <span>{`${signedDocuments}/${
                                orders.length
                              }`}</span>
                            </Box>
                          }
                          flush
                        >
                          <List variant="documentStatusList">
                            {orders.map(order => {
                              return (
                                <SignDocument
                                  order={order}
                                  user={this.props.user}
                                  showButton={false}
                                  signText={this.props.signText}
                                  signOrderStatusCompleted={
                                    this.props.signOrderStatusCompleted
                                  }
                                  waitingForSignatureText={
                                    this.props.waitingForSignatureText
                                  }
                                  renderDocumentText={
                                    this.props.renderDocumentText
                                  }
                                />
                              )
                            })}
                          </List>
                        </ExpandListItem>
                      </List>
                    )
                  }
                })}
            </Box>
          </div>
        )}
      </Wrapper>
    )
  }
}

const Lede = styled.div`
  text-align: center;
  margin-bottom: ${spacing.medium};
`

const Details = styled.div`
  margin-top: ${spacing.medium};
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
  waitingForSignatureText: PropTypes.string,
  userTaskText: PropTypes.string,
  othersTaskText: PropTypes.string
}

Sign.defaultProps = {
  headingText: "Signering",
  leadText: "Vis detaljer",
  loanDetailsText: "Se detaljer om lånet på ",
  loanDurationText: "Lånelengde",
  loanOfferText: "Lånetilbud",
  monthSuffix: "mnd",
  monthlyFeeText: "Månedlige gebyrer",
  payMonthlyText: "Å betale månedlig",
  paybackText: "Å betale totalt",
  signOrderStatusCompleted: "COMPLETED",
  signText: "Signèr",
  waitingForSignatureText: "Venter på signering",
  userTaskText: "Du må signere",
  othersTaskText: "Andre som skal signere"
}
