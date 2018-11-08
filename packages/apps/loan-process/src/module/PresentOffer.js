import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import {
  theming,
  Button,
  Heading,
  ItemGroup,
  List,
  Odometer,
  Select,
  Wrapper,
  Layout,
  LayoutItem,
  Loading,
  Paragraph
} from "@staccx/base"
import { formatCurrency } from "@staccx/formatting"
import { getPaymentPlan } from "@staccx/payment-plan"
import PickLoanSum from "./PresentOffer.PickLoanSum"
import {
  OfferTable,
  OfferTableData,
  OfferTableDurations,
  OfferTableDurationsItem,
  OfferTableText,
  OfferTableTotal
} from "./replace/Styles"

class PresentOffer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isCustomAmount: false,
      amount: props.loanAmount,
      selectedDuration: props.repaymentPeriod,
      initialized: false,
      isValid: true,
      term: null,
      plan: []
    }
    this.handleSetCustom = this.handleSetCustom.bind(this)
    this.handleChangeLoanDuration = this.handleChangeLoanDuration.bind(this)
    this.handleCustomAmount = this.handleCustomAmount.bind(this)
  }

  componentWillMount() {
    this.handleCustomAmount(this.state.amount)
  }

  handleSetCustom(value) {
    const parsed = parseInt(value, 10)
    const isCustomAmount = parsed === -1
    this.setState(
      {
        isCustomAmount,
        amount: isCustomAmount ? this.state.amount : parsed
      },
      () => this.handleCustomAmount(this.state.amount)
    )
  }

  handleChangeLoanDuration(duration) {
    this.setState({ selectedDuration: duration }, () => {
      this.props.handleChangeLoanDuration(duration)
      this.handleCustomAmount(this.state.amount)
    })
  }

  handleCustomAmount(value) {
    const isValid =
      value >= this.props.minAmount && value <= this.props.maxAmount
    if (isValid) {
      const plan =
        getPaymentPlan({
          loanAmount: value,
          terms: this.state.selectedDuration,
          interestRate: this.props.interestRate,
          period: 12,
          startFee: this.props.startFee,
          termFee: this.props.termFee
        }) || []

      const term = plan ? (plan.length > 0 ? plan[0] : null) : null
      this.setState({ amount: value, plan, term, isValid }, () => {
        this.props.handleChangeCustomAmount(value)
      })
    } else {
      this.setState({ isValid: false, amount: value })
    }
  }

  respondToOffer(accepted) {
    const { amount: loanAmount, selectedDuration: repaymentPeriod } = this.state
    return this.props.onComplete({
      accepted,
      loanAmount,
      repaymentPeriod
    })
  }

  render() {
    const { term, plan } = this.state
    return (
      <div>
        <Wrapper size="large" variant="formForm">
          <Layout rowGap="small">
            <Heading variant="stepHeading">{this.props.headingText}</Heading>

            <Paragraph variant="lead">
              {this.props.maxLoanAmountText}{" "}
              <NoWrap>
                <strong> {formatCurrency(this.props.maxAmount || 0)}</strong>
              </NoWrap>
            </Paragraph>
          </Layout>
        </Wrapper>
        <Wrapper size="form">
          <Layout paddingTop="mediumPlus">
            {this.props.productType === "PRODUCT_LOAN" && (
              <LayoutItem>
                <PickLoanSum
                  loanAmount={this.state.amount}
                  repaymentPeriod={this.props.repaymentPeriod}
                  isCustomAmount={this.state.isCustomAmount}
                  initialAmount={this.props.loanAmount}
                  handleRadio={this.handleSetCustom}
                  handleCustomAmount={this.handleCustomAmount}
                  min={this.props.minAmount}
                  max={this.props.maxAmount}
                  chooseLoanAmountText={"Velg beløp"}
                  otherAmountText={"Annet beløp"}
                />
              </LayoutItem>
            )}
            <LayoutItem>
              <OfferTable>
                <tbody>
                  {this.props.productType === "loan" && (
                    <tr>
                      <OfferTableText>
                        {this.props.loanDurationText}
                      </OfferTableText>
                      <OfferTableData>
                        <OfferTableDurations>
                          <OfferTableDurationsItem>
                            <Select
                              id={"select-loan-duration"}
                              onChange={value =>
                                this.handleChangeLoanDuration(
                                  value || this.props.repaymentPeriod
                                )
                              }
                              variant="loanOffer"
                              items={this.props.potentialDurations}
                              itemToString={item =>
                                item >= 12 ? item / 12 + " år" : item + " mnd"
                              }
                            />
                          </OfferTableDurationsItem>
                        </OfferTableDurations>
                      </OfferTableData>
                    </tr>
                  )}
                  {term &&
                    plan && (
                      <React.Fragment>
                        {this.props.showInterestRate && (
                          <tr>
                            <OfferTableText>
                              {this.props.interestRateText}
                            </OfferTableText>
                            <OfferTableData>
                              <span>{term.interestRate} %</span>
                            </OfferTableData>
                          </tr>
                        )}
                        {this.props.showMonthlyFee && (
                          <tr>
                            <OfferTableText>
                              {this.props.monthlyFeeText}
                            </OfferTableText>
                            <OfferTableData>
                              <Odometer number={term.monthlyFees} size={14} />
                            </OfferTableData>
                          </tr>
                        )}
                        {this.props.showPayback && (
                          <tr>
                            <OfferTableText>
                              {this.props.paybackText}
                            </OfferTableText>
                            <OfferTableData>
                              <Odometer
                                number={plan.reduce(
                                  (acc, curr) => acc + curr.monthlyPayment,
                                  0
                                )}
                                size={14}
                              />
                            </OfferTableData>
                          </tr>
                        )}
                        <OfferTableTotal>
                          <OfferTableText>
                            {this.props.payMonthlyText}
                          </OfferTableText>
                          <OfferTableData>
                            <Odometer number={term.monthlyPayment} size={14} />
                          </OfferTableData>
                        </OfferTableTotal>
                      </React.Fragment>
                    )}
                </tbody>
              </OfferTable>
            </LayoutItem>

            {this.props.company && (
              <LayoutItem>
                <Layout>
                  <div>
                    <h4>{this.props.companyHeadingPrefixText}</h4>
                    <List variant="offerInfoList">
                      <li>{this.props.company.name}</li>
                      <li>
                        {this.props.orgNumberPrefixText}{" "}
                        {this.props.company.orgNo}
                      </li>
                    </List>
                  </div>
                  {this.props.guarantor && (
                    <div>
                      <h4>Kausjonist</h4>
                      <List variant="offerInfoList">
                        <li>{this.props.guarantor.name}</li>
                        <li>
                          {this.props.nationalIdPrefixText}
                          {this.props.guarantor.ssn}
                        </li>
                      </List>
                    </div>
                  )}
                </Layout>
              </LayoutItem>
            )}

            <ItemGroup variant="overflow">
              {this.props.isLoading ? (
                <Loading variant={"buttonLoading"} />
              ) : (
                <React.Fragment>
                  <Button
                    disabled={!this.state.isValid}
                    onClick={() => this.respondToOffer(true)}
                  >
                    {this.props.acceptOfferButtonText}
                  </Button>
                  <Button
                    variant={[theming.VARIANT_DEFAULT, "decline"]}
                    onClick={() => this.respondToOffer(false)}
                  >
                    {this.props.rejectOfferButtonText}
                  </Button>
                </React.Fragment>
              )}
            </ItemGroup>
          </Layout>
        </Wrapper>
      </div>
    )
  }
}

const NoWrap = styled.span`
  white-space: nowrap;
`

PresentOffer.propTypes = {
  acceptOfferButtonText: PropTypes.string,
  company: PropTypes.shape({
    name: PropTypes.string,
    orgNumber: PropTypes.string
  }),
  companyHeadingPrefixText: PropTypes.string,
  guarantor: PropTypes.any,
  handleChangeCustomAmount: PropTypes.func,
  handleChangeLoanDuration: PropTypes.func,
  headingText: PropTypes.string,
  interestRate: PropTypes.any,
  isValid: PropTypes.bool,
  loanAmount: PropTypes.number.isRequired,
  loanDurationText: PropTypes.string,
  maxAmount: PropTypes.number,
  maxLoanAmountText: PropTypes.string,
  minAmount: PropTypes.number,
  monthlyFeeText: PropTypes.string,
  monthlyFees: PropTypes.number,
  monthlyPayment: PropTypes.number,
  nationalIdPrefixText: PropTypes.string,
  onComplete: PropTypes.func.isRequired,
  onRejected: PropTypes.func.isRequired,
  orgNumberPrefixText: PropTypes.string,
  payMonthlyText: PropTypes.string,
  paybackText: PropTypes.string,
  paybackTotal: PropTypes.number.isRequired,
  potentialDurations: PropTypes.array,
  rejectOfferButtonText: PropTypes.string,
  repaymentPeriod: PropTypes.number.isRequired,
  selectedDuration: PropTypes.any,
  startFee: PropTypes.any,
  termFee: PropTypes.any,
  productType: PropTypes.string,
  showMonthlyFee: PropTypes.bool,
  showPayback: PropTypes.bool
}

PresentOffer.defaultProps = {
  acceptOfferButtonText: "Fortsett",
  company: {
    name: "Stacc X",
    orgNo: "912319123"
  },
  companyHeadingPrefixText: "Selskap",
  handleChangeCustomAmount: val => null,
  handleChangeLoanDuration: val => null,
  headingText: "Lånetilbud",
  interestRate: 15,
  isValid: false,
  loanAmount: 100000,
  loanDurationText: "Låneperiode",
  maxAmount: 1000000,
  maxLoanAmountText: "Du kan låne inntil",
  minAmount: 50000,
  monthlyFeeText: "Månedlig kostnad",
  monthlyFees: 4000,
  monthlyPayment: 84000,
  nationalIdPrefixText: "Personnummer",
  onComplete: console.log,
  onRejected: console.log,
  orgNumberPrefixText: "Organisasjonsnummer",
  payMonthlyText: "Å betale hver måned",
  paybackText: "Å betale tilbake",
  paybackTotal: 101000,
  potentialDurations: [1, 3, 6, 12, 18, 24, 36],
  rejectOfferButtonText: "Avslå",
  repaymentPeriod: 6,
  selectedDuration: 6,
  startFee: 0,
  termFee: 0,
  productType: "PRODUCT_LOAN",
  showMonthlyFee: true,
  showInterestRate: true,
  interestRateText: "Rente",
  showPayback: true
}

export default PresentOffer
