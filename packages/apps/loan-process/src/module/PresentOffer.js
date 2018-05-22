import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  Button,
  ItemGroup,
  Odometer,
  Wrapper,
  Box,
  Heading,
  Select,
  SelectOption,
  SelectSelected
} from "@staccx/base"
import { formatCurrency } from "@staccx/formatting"
import {
  OfferTable,
  OfferTableData,
  OfferTableDurations,
  OfferTableDurationsItem,
  OfferTableText,
  OfferTableTotal
} from "./replace/Styles.OfferTable"
import PickLoanSum from "./PresentOffer.PickLoanSum"
import Tile from "./replace/Tile"
import { spacing } from "@staccx/theme"

class PresentOffer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isCustomAmount: false,
      amount: this.props.loanAmount,
      selectedDuration: this.props.repaymentPeriod,
      initialized: false,
      isValid: true
    }
    this.handleSetCustom = this.handleSetCustom.bind(this)
    this.handleChangeLoanDuration = this.handleChangeLoanDuration.bind(this)
    this.handleCustomAmount = this.handleCustomAmount.bind(this)
  }

  handleSetCustom(customAmount) {
    console.log(customAmount)
    this.setState(
      {
        isCustomAmount: customAmount === "other"
      },
      () => this.handleCustomAmount(this.state.amount)
    )
  }

  handleChangeLoanDuration(duration) {
    this.setState({ selectedDuration: duration }, () => {
      this.props.handleChangeLoanDuration(duration)
    })
  }

  handleCustomAmount(value) {
    this.setState({ amount: value }, () => {
      this.props.handleChangeCustomAmount(value)
      if (value >= this.props.minAmount && value <= this.props.maxAmount) {
        this.setState({ isValid: true })
      } else {
        this.setState({ isValid: false })
      }
    })
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
    console.log(this.state.selectedDuration)
    return (
      <div>
        <Wrapper size="medium" breakout>
          <TileBox>
            <Box variant="paddedContainerLarge">
              <Heading variant="stepHeading">{this.props.headingText}</Heading>
              <p>
                {this.props.maxLoanAmountText}{" "}
                <strong>{formatCurrency(this.props.maxAmount || 0)}</strong>
              </p>
            </Box>
            <PickLoanSum
              loanAmount={
                this.state.isCustomAmount
                  ? this.state.amount
                  : this.props.loanAmount
              }
              repaymentPeriod={this.props.repaymentPeriod}
              isCustomAmount={this.state.isCustomAmount}
              handleRadio={this.handleSetCustom}
              handleCustomAmount={this.handleCustomAmount}
              min={this.props.minAmount}
              max={this.props.maxAmount}
              chooseLoanAmountText={"Velg sum"}
              otherAmountText={"Annen sum"}
            />
            <Box variant="paddedContainerLarge">
              <OfferTable>
                <tbody>
                  <tr>
                    <OfferTableText>
                      {this.props.loanDurationText}
                    </OfferTableText>
                    <OfferTableData>
                      <OfferTableDurations>
                        <OfferTableDurationsItem>
                          <Select
                            id={"select-loan-duration"}
                            selectedElement={SelectSelected}
                            placeHolderLabel={"Velg…"}
                            onChange={value =>
                              this.handleChangeLoanDuration(
                                value ? value.text : this.props.repaymentPeriod
                              )
                            }
                          >
                            {this.props.potentialDurations.map(item => (
                              <SelectOption
                                key={item}
                                data={{ text: item, value: "mnd" }}
                              >
                                <strong>{item} mnd.</strong>
                              </SelectOption>
                            ))}
                          </Select>
                        </OfferTableDurationsItem>
                      </OfferTableDurations>
                    </OfferTableData>
                  </tr>
                  <tr>
                    <OfferTableText>{this.props.monthlyFeeText}</OfferTableText>
                    <OfferTableData>
                      <Odometer number={this.props.monthlyFees} size={14} />
                    </OfferTableData>
                  </tr>
                  <tr>
                    <OfferTableText>{this.props.paybackText}</OfferTableText>
                    <OfferTableData>
                      <Odometer number={this.props.paybackTotal} size={14} />
                    </OfferTableData>
                  </tr>
                  <OfferTableTotal>
                    <OfferTableText>{this.props.payMonthlyText}</OfferTableText>
                    <OfferTableData>
                      <Odometer number={this.props.monthlyPayment} size={14} />
                    </OfferTableData>
                  </OfferTableTotal>
                </tbody>
              </OfferTable>
            </Box>
            {this.props.company && (
              <Box variant="grayBox">
                <Box variant="halves">
                  <div>
                    <h4>{this.props.companyHeadingPrefixText}</h4>
                    <OfferInfoList>
                      <li>{this.props.company.name}</li>
                      <li>
                        {this.props.orgNumberPrefixText}{" "}
                        {this.props.company.orgNo}
                      </li>
                    </OfferInfoList>
                  </div>
                  {this.props.guarantor && (
                    <div>
                      <h4>Kausjonist</h4>
                      <OfferInfoList>
                        <li>{this.props.guarantor.name}</li>
                        <li>
                          {this.props.nationalIdPrefixText}
                          {this.props.guarantor.ssn}
                        </li>
                      </OfferInfoList>
                    </div>
                  )}
                </Box>
              </Box>
            )}
          </TileBox>
          <ItemGroup>
            <Button
              disabled={!this.props.isValid}
              onClick={() => this.respondToOffer(true)}
            >
              {this.props.acceptOfferButtonText}
            </Button>
            <Button onClick={() => this.respondToOffer(false)}>
              {this.props.rejectOfferButtonText}
            </Button>
          </ItemGroup>
        </Wrapper>
      </div>
    )
  }
}

// const StyledDropdown = styled(Dropdown)`
//   button {
//     height: 24px;
//     padding-right: 24px;
//   }
//   svg {
//     right: 6px;
//   }
// `

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
  selectedDuration: PropTypes.any
}

export default PresentOffer
