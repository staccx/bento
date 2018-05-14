import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { ItemGroup, Odometer, Wrapper } from "@staccx/base"
import { format as formatCurrency } from "../../utils/formatCurrency"
import Dropdown from "../../components/Dropdown"
import { GrayBox, Halves, PaddedContainer, StepHeading } from "../../Styles"
import {
  OfferTable,
  OfferTableData,
  OfferTableDurations,
  OfferTableDurationsItem,
  OfferTableText,
  OfferTableTotal
} from "../../Styles.OfferTable"
import PickLoanSum from "./ApplicationFormOffer.PickLoanSum"
import Button from "../../components/button/Button"
import Tile from "../../components/Tile"
import SystemText from "../../components/SystemText"
import withTasks from "../../hoc/withTasks"
import withLoanApplication from "../../hoc/withLoanApplication"
import withApp from "../../hoc/withApp"
import withSanity from "../../hoc/withSanity"
import { spacing } from "@staccx/theme"

const reduceMonthlyPayment = (accumulator, currentItem) => {
  return accumulator + currentItem.monthlyPayment
}

class ApplicationFormOffer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      customAmount: false,
      amount: 0,
      time: 3,
      initialized: false,
      isValid: true
    }
    this.handleSetCustom = this.handleSetCustom.bind(this)
    this.handleChangeLoanAmount = this.handleChangeLoanAmount.bind(this)
    this.handleCustomAmount = this.handleCustomAmount.bind(this)
  }

  componentWillMount() {
    this.props.getPaymentPlan()
    this.props
      .getProduct(this.props.loanApplication.productCode)
      .then(console.log)
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.initialized) {
      if (nextProps.application) {
        const { data } = nextProps.application
        if (data) {
          this.setState(
            {
              amount: data.loanAmount,
              time: data.repaymentPeriod,
              initialized: true
            },
            () => this.props.getPaymentPlan(this.state.amount, this.state.time)
          )
        }
      }
    }
  }

  handleSetCustom(customAmount) {
    this.setState(
      {
        customAmount: customAmount === "other"
      },
      () =>
        this.handleCustomAmount(
          this.state.customAmount
            ? this.state.amount
            : this.props.application.data.loanAmount
        )
    )
  }

  handleChangeLoanAmount(duration) {
    this.setState({ time: duration }, () => {
      this.props.getPaymentPlan(this.state.amount, duration)
      this.props.setNumberOfTerms(duration)
    })
  }

  handleCustomAmount(value) {
    const { application } = this.props
    this.setState({ amount: value }, () => {
      if (value >= 10000 && value <= application.data.loanAmount) {
        this.props.getPaymentPlan(value, this.state.time)
        this.props.setLoanAmount(value)
        this.setState({ isValid: true })
      } else {
        console.log("amount out of bounds")
        this.setState({ isValid: false })
      }
    })
  }

  respondToOffer(accepted) {
    const task = this.props.taskReducer[
      this.props.taskTypes.TASK_TYPE_ACCEPT_LOAN_OFFER
    ]
    if (!task) {
      console.warn("no task. Why are you here?")
      return
    }
    if (!task.IsAcceptOfferTask) {
      console.warn("Only accept offer tasks can be completed here")
      return
    }

    const { amount: loanAmount, time: repaymentPeriod } = this.state
    return this.props.completeTask(task, {
      accepted,
      loanAmount,
      repaymentPeriod
    })
  }

  render() {
    const {
      payment,
      guarantor,
      loanApplication,
      taskReducer,
      sanity
    } = this.props
    const task = taskReducer[this.props.taskTypes.TASK_TYPE_ACCEPT_LOAN_OFFER]

    const { customAmount, isValid, amount } = this.state

    const { term } = payment
    const { application } = loanApplication

    const { data } = application

    if (!task || !data) {
      return null
    }

    const { company, loanAmount, repaymentPeriod } = data
    return (
      <div>
        {application &&
          term &&
          task && (
            <Wrapper size="medium" breakout>
              <TileBox>
                <PaddedContainer large>
                  <StepHeading>
                    <SystemText systemKey="LOAN_OFFER" />
                  </StepHeading>
                  <p>
                    <SystemText systemKey="LOAN_OFFER_UNTIL" />{" "}
                    <strong>{formatCurrency(loanAmount || 0)}</strong>
                  </p>
                </PaddedContainer>
                <PickLoanSum
                  loanAmount={amount}
                  repaymentPeriod={repaymentPeriod}
                  customAmount={customAmount}
                  handleRadio={this.handleSetCustom}
                  handleCustomAmount={this.handleCustomAmount}
                  min={10000}
                  max={loanAmount}
                />
                <PaddedContainer large>
                  <OfferTable>
                    <tbody>
                      <tr>
                        <OfferTableText>
                          <SystemText systemKey="LOAN_DURATION" />
                        </OfferTableText>
                        <OfferTableData>
                          <OfferTableDurations>
                            <OfferTableDurationsItem>
                              {sanity.product && (
                                <StyledDropdown
                                  items={sanity.product.termSettings}
                                  id={"select-loan-duration"}
                                  selectedItem={
                                    this.props.loanApplication.numberOfTerms
                                  }
                                  postfixItems="mnd"
                                  onChange={value =>
                                    this.handleChangeLoanAmount(value)
                                  }
                                />
                              )}
                            </OfferTableDurationsItem>
                          </OfferTableDurations>
                        </OfferTableData>
                      </tr>
                      <tr>
                        <OfferTableText>
                          <SystemText systemKey="MONTHLY_FEE" />
                        </OfferTableText>
                        <OfferTableData>
                          <Odometer number={term.monthlyFees} size={14} />
                        </OfferTableData>
                      </tr>
                      <tr>
                        <OfferTableText>
                          <SystemText systemKey="TOTAL_PAYBACK" />
                        </OfferTableText>
                        <OfferTableData>
                          <Odometer
                            number={parseInt(
                              payment.terms.reduce(reduceMonthlyPayment, 0),
                              10
                            )}
                            size={14}
                          />
                        </OfferTableData>
                      </tr>
                      <OfferTableTotal>
                        <OfferTableText>
                          <SystemText systemKey="PAY_MONTHLY" />
                        </OfferTableText>
                        <OfferTableData>
                          <Odometer number={term.monthlyPayment} size={14} />
                        </OfferTableData>
                      </OfferTableTotal>
                    </tbody>
                  </OfferTable>
                </PaddedContainer>
                {company && (
                  <GrayBox>
                    <Halves>
                      <div>
                        <h4>
                          <SystemText systemKey="COMPANY_INFO" />
                        </h4>
                        <OfferInfoList>
                          <li>{company.name}</li>
                          <li>
                            <SystemText systemKey="ORG_NR_SHORT" />{" "}
                            {company.orgNo}
                          </li>
                        </OfferInfoList>
                      </div>
                      {guarantor && (
                        <div>
                          <h4>Kausjonist</h4>
                          <OfferInfoList>
                            <li>{guarantor.name}</li>
                            <li>
                              <SystemText systemKey="PERSONAL_ID_NUMBER" />
                              {guarantor.ssn}
                            </li>
                          </OfferInfoList>
                        </div>
                      )}
                    </Halves>
                  </GrayBox>
                )}
              </TileBox>
              <ItemGroup>
                <Button
                  disabled={!isValid}
                  onClick={() => this.respondToOffer(true)}
                >
                  <SystemText systemKey="CONTINUE_NOW" />
                </Button>
                <Button
                  onClick={() =>
                    this.respondToOffer(false).then(() =>
                      this.props.navigate("/application/👎")
                    )
                  }
                >
                  <SystemText systemKey="NO_THANK_YOU" />
                </Button>
              </ItemGroup>
            </Wrapper>
          )}
      </div>
    )
  }
}

const StyledDropdown = styled(Dropdown)`
  button {
    height: 24px;
    padding-right: 24px;
  }
  svg {
    right: 6px;
  }
`

const TileBox = styled(Tile)`
  padding: 0;
  margin-bottom: ${spacing.small};
`

const OfferInfoList = styled.ul`
  margin-top: ${spacing.tiny};

  li {
    padding: 3px 0;
  }
`

ApplicationFormOffer.propTypes = {
  application: PropTypes.object,
  term: PropTypes.object,
  payment: PropTypes.object,
  task: PropTypes.object,
  company: PropTypes.object,
  guarantor: PropTypes.object
}

export default withSanity(
  withApp(withLoanApplication(withTasks(ApplicationFormOffer)))
)
