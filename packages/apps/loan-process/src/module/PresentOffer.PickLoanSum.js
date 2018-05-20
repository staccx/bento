import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { withFormik } from "formik"
import Yup from "yup"
import { CurrencyInput, RadioButton } from "@staccx/base"
import { formatCurrency, removeWhitespace } from "@staccx/formatting"
import { BounceIn, BounceOut } from "@staccx/animations"
import { color, spacing } from "@staccx/theme"
import ValidationError from "./replace/ValidationError"

const PickLoanSum = props => {
  const {
    loanAmount,
    max,
    min,
    isCustomAmount,
    handleRadio,
    handleCustomAmount,
    chooseLoanAmountText,
    otherAmountText,
    handleChange,
    handleBlur,
    resetForm,
    errors
  } = props

  const _handleRadio = e => {
    handleRadio(e.target.value)
    resetForm()
  }

  const _handleChange = e => {
    const value = e.target.value
    handleCustomAmount(parseInt(removeWhitespace(value), 10))
    handleChange(e)
  }
  return (
    <Container>
      <PickAmounts visible>
        <legend>{chooseLoanAmountText}</legend>
        <InlineRadioButtons>
          <InlineRadioButtonsItem>
            <RadioButton
              key={"userValue"}
              id="userValue"
              value={loanAmount.toString()}
              group={"loanSum"}
              defaultChecked
              onChange={_handleChange}
            >
              {formatCurrency(loanAmount)}
            </RadioButton>
          </InlineRadioButtonsItem>
          {max > loanAmount && (
            <InlineRadioButtonsItem>
              <RadioButton
                key={"maxValue"}
                id="maxValue"
                value={max.toString()}
                group={"loanSum"}
                onChange={_handleChange}
              >
                {formatCurrency(max)}
              </RadioButton>
            </InlineRadioButtonsItem>
          )}
          <InlineRadioButtonsItem>
            <RadioButton
              key={"otherValue"}
              id="otherValue"
              value={"other"}
              group={"loanSum"}
              onChange={_handleRadio}
            >
              {otherAmountText}
            </RadioButton>
          </InlineRadioButtonsItem>
        </InlineRadioButtons>
      </PickAmounts>
      {isCustomAmount && (
        <UserDefinedAmount visible={isCustomAmount}>
          <CurrencyInput
            label={chooseLoanAmountText}
            placeholder="0"
            id="amount"
            max={max}
            min={min}
            onChange={_handleChange}
            value={loanAmount}
            locale={"nb"}
            onBlur={handleBlur}
          />
          {errors.amount && <ValidationError>{errors.amount}</ValidationError>}
        </UserDefinedAmount>
      )}
    </Container>
  )
}

const Container = styled.form`
  border-top: 1px solid ${color.line};
  border-bottom: 1px solid ${color.line};
`

const PickAmounts = styled.div`
  ${""};
  padding: ${spacing.medium} ${spacing.large};
  overflow: hidden;
  ${props =>
    props.visible
      ? "animation: .4s " + BounceIn + " .05s ease-out forwards 1;"
      : "animation: .4s " + BounceOut + ".05s ease-out forwards 1;"};
`

const UserDefinedAmount = styled.div`
  ${""} ${props =>
    props.visible
      ? "animation: .4s " + BounceIn + " .05s ease-out forwards 1;"
      : "animation: .4s " + BounceOut + " .05s ease-out forwards 1;"};

  input {
    padding-left: ${spacing.large};
  }

  label {
    padding-left: ${spacing.medium};
  }
`

const InlineRadioButtons = styled.div`
  display: flex;
  margin-left: -${spacing.medium};
  margin-right: -${spacing.medium};
`
const InlineRadioButtonsItem = styled.div`
  padding: 0 ${spacing.medium};
`

PickLoanSum.defaultProps = {
  customAmount: false
}

PickLoanSum.propTypes = {
  chooseLoanAmountText: PropTypes.string.isRequired,
  isCustomAmount: PropTypes.bool,
  errors: PropTypes.any,
  handleBlur: PropTypes.any,
  handleChange: PropTypes.any,
  handleCustomAmount: PropTypes.func.isRequired,
  handleRadio: PropTypes.func.isRequired,
  loanAmount: PropTypes.any,
  max: PropTypes.any,
  min: PropTypes.any,
  otherAmountText: PropTypes.any,
  resetForm: PropTypes.any
}

export default withFormik({
  mapPropsToValues: props => ({
    amount: props.loanAmount,
    chooseLoanAmountText: props.chooseLoanAmountText
  }),

  validationSchema: props =>
    Yup.object().shape({
      amount: Yup.number("NaN bread")
        .required(props.requiredText)
        .transform((currentValue, originalValue) => {
          return parseInt(removeWhitespace(originalValue.toString()), 10)
        })
        .integer()
        .min(props.min, props.sumTooLowText)
        .max(props.max, props.sumTooHighText)
    }),
  handleSubmit: (values, { setSubmitting, props }) => {
    setTimeout(() => {
      setSubmitting(false)
      if (props.onValidated) {
        props.onValidated()
      }
    }, 200)
  }
})(PickLoanSum)
