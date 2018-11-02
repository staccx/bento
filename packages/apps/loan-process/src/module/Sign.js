import PropTypes from "prop-types"
import React from "react"
import {
  Box,
  Expand,
  ExpandListItem,
  Heading,
  List,
  Wrapper,
  Paragraph,
  Layout
} from "@staccx/base"
import { formatCurrency, formatName } from "@staccx/formatting"
import { getPaymentPlan } from "@staccx/payment-plan"
import SignDocument from "./Sign.Document"
import OfferTable from "./OfferTable"

// const SIGN_ORDER_STATUS_PENDING = "pending"

class Sign extends React.Component {
  render() {
    const orders = Object.assign([], this.props.signOrders)
    const userOrders = orders.filter(
      order => order.signee === this.props.user.nationalId
    )
    const otherOrders = orders.filter(
      order => order.signee !== this.props.user.nationalId
    )

    const signers = Object.assign([], this.props.signers)

    const signCountReducer = (accumulator, currentValue) => {
      const value =
        currentValue.status === this.props.signOrderStatusCompleted ? 1 : 0
      return value + accumulator
    }
    const otherSigners = signers
      .filter(signer => signer.nationalId !== this.props.user.nationalId)
      .map(signer => ({
        ...signer,
        orders: otherOrders.filter(order => order.signee === signer.nationalId)
      }))
      .map(signer => ({
        ...signer,
        signCount: signer.orders.reduce(signCountReducer, 0)
      }))

    const plan =
      getPaymentPlan({
        loanAmount: this.props.loanAmount,
        terms: this.props.repaymentPeriod,
        interestRate: this.props.interestRate,
        period: 12,
        startFee: this.props.startFee || 0,
        termFee: this.props.termFee
      }) || []

    const term = plan ? (plan.length > 0 ? plan[0] : null) : null

    return (
      <Wrapper size="small">
        <Layout>
          {this.props.renderIllustration() && (
            <Box variant="illustration">
              {this.props.renderIllustration()}
              {/* <img src="/assets/signing.svg" alt="" width="175" /> */}
            </Box>
          )}
          <Heading variant="stepHeading" level={1}>
            {this.props.headingText}
          </Heading>
          <Layout rowGap="tiny">
            <Paragraph variant="lead">{this.props.leadText}</Paragraph>

            <Box variant="expandLead">
              <Expand title={this.props.loanDetailsText}>
                <span>
                  {this.props.loanDetailsText +
                    ` ${formatCurrency(this.props.loanAmount)}`}
                </span>
                {/* TODO: vise om det er lån eller kreditt☝️ */}
                <OfferTable
                  loanOfferText={this.props.loanOfferText}
                  loanAmount={formatCurrency(this.props.loanAmount)}
                  loanDurationText={this.props.loanDurationText}
                  loanRepayment={
                    this.props.repaymentPeriod + this.props.monthSuffix
                  }
                  monthlyFeeText={this.props.monthlyFeeText}
                  interestRate={this.props.interestRate}
                  paybackText={this.props.paybackText}
                  paybackAmount={formatCurrency(
                    plan.reduce((acc, curr) => acc + curr.monthlyPayment, 0)
                  )}
                  payMonthlyText={this.props.payMonthlyText}
                  payMonthlyAmount={formatCurrency(term.monthlyPayment)}
                />
              </Expand>
            </Box>
          </Layout>
          {/* Render users own documents */}
          {userOrders.length > 0 && (
            <Layout rowGap="tiny">
              <Heading variant="boxHeading" level={2}>
                {this.props.userTaskText}
              </Heading>
              <Box variant="signerFields">
                <List variant="documentSign">
                  {userOrders.map(order => {
                    const showButton =
                      order.status !== this.props.signOrderStatusCompleted
                    return (
                      <SignDocument
                        key={order.requestId}
                        order={order}
                        user={this.props.user}
                        showButton={showButton}
                        signText={this.props.signText}
                        signedText={this.props.signedText}
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
                </List>
              </Box>
            </Layout>
          )}
          {/* Render other signers documents */}
          {otherSigners.length > 0 && (
            <Layout rowGap="tiny">
              <Heading variant="boxHeading" level={2}>
                {this.props.othersTaskText}
              </Heading>
              <Box variant="actionBox">
                <List>
                  {otherSigners.map(signer => (
                    <ExpandListItem
                      key={signer.id}
                      title={
                        <Box variant="split">
                          <span>{formatName(signer.name)}</span>
                          <span>{`${signer.signCount}/${
                            signer.orders.length
                          }`}</span>
                        </Box>
                      }
                      variant="signer"
                      flush
                    >
                      <List variant="documentStatusList">
                        {signer.orders.map(order => {
                          return (
                            <SignDocument
                              key={order.requestId}
                              order={order}
                              user={this.props.user}
                              showButton={false}
                              signText={this.props.signText}
                              signedText={this.props.signedText}
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
                      </List>
                    </ExpandListItem>
                  ))}
                </List>
              </Box>
            </Layout>
          )}
        </Layout>
      </Wrapper>
    )
  }
}

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
  signedText: PropTypes.string,
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
  leadText:
    "For at kreditten kan godkjennes trenger vi signaturer. Alle som skal signere skal ha fått mail.",
  loanDetailsText: "Se detaljer om lånet på ",
  loanDurationText: "Lånelengde",
  loanOfferText: "Lånetilbud",
  monthSuffix: "mnd",
  monthlyFeeText: "Månedlige gebyrer",
  payMonthlyText: "Å betale månedlig",
  paybackText: "Å betale totalt",
  signOrderStatusCompleted: "SIGNED",
  signText: "Signèr",
  signedText: "Signert",
  waitingForSignatureText: "Venter på signering",
  userTaskText: "Du må signere",
  othersTaskText: "Andre som skal signere",
  interestRate: 10.4,
  loanAmount: 1000000,
  monthlyPayment: 83000,
  paybackTotal: 1100000,
  renderDocumentText: type => `Låneavtale (${type})`,
  renderIllustration: () => null,
  repaymentPeriod: 6,
  signOrders: [
    {
      signee: "21031531021",
      status: "UNSIGNED",
      requestId: "abc123",
      documentType: "DOCUMENT1",
      url: "https://web.test.fundu.no"
    },
    {
      signee: "21018612344",
      status: "UNSIGNED",
      requestId: "abc123",
      documentType: "DOCUMENT1",
      url: "https://web.test.fundu.no"
    },
    {
      signee: "21018612344",
      status: "SIGNED",
      requestId: "21rfe",
      documentType: "DOCUMENT2",
      url: "https://web.test.fundu.no"
    },
    {
      signee: "05088812312",
      status: "UNSIGNED",
      requestId: "abc123",
      documentType: "DOCUMENT1",
      url: "https://web.test.fundu.no"
    },
    {
      signee: "05088812312",
      status: "UNSIGNED",
      requestId: "21rfe",
      documentType: "DOCUMENT2",
      url: "https://web.test.fundu.no"
    }
  ],
  signers: [
    {
      nationalId: "21031531021",
      id: "cba321",
      name: "ESPEN SÆVERUD",
      email: "espens@stacc.com"
    },
    {
      nationalId: "21018612344",
      id: "3orj",
      name: "Robin Sandborg",
      email: "robins@stacc.com"
    },
    {
      nationalId: "05088812312",
      id: "ewfsd",
      name: "Marius Hauken",
      email: "mariush@stacc.com"
    }
  ],
  user: { nationalId: "21031531021" }
}
