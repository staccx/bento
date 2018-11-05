import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { withFormik } from "formik"
import {
  Alert,
  CurrencyInput,
  RadioPillItem,
  Box,
  RadioPill,
  Layout
} from "@staccx/base"
import { formatCurrency, removeWhitespace } from "@staccx/formatting"
import { BounceIn, BounceOut } from "@staccx/animations"
const Yup = require("yup")

const PickLoanSum = props => {
  const {
    loanAmount,
    max,
    min,
    isCustomAmount,
    initialAmount,
    handleRadio,
    handleCustomAmount,
    chooseLoanAmountText,
    customLoanAmountLabel,
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
    <form>
      <Layout rowGap="small">
        <PickAmounts visible>
          <legend>{chooseLoanAmountText}</legend>
          <RadioPill onChange={_handleRadio} group={"radiopills"}>
            <RadioPillItem
              key={"userValue"}
              id="userValue"
              value={initialAmount}
              group={"loanSum"}
              defaultChecked
              onChange={_handleRadio}
            >
              {formatCurrency(initialAmount)}
            </RadioPillItem>
            {max > initialAmount && (
              <RadioPillItem
                key={"maxValue"}
                id="maxValue"
                value={max}
                group={"loanSum"}
                onChange={_handleRadio}
              >
                {formatCurrency(max)}
              </RadioPillItem>
            )}
            <RadioPillItem
              key={"otherValue"}
              id="otherValue"
              value={-1}
              group={"loanSum"}
              onChange={_handleRadio}
            >
              {otherAmountText}
            </RadioPillItem>
          </RadioPill>
        </PickAmounts>
        {isCustomAmount && (
          <UserDefinedAmount visible={isCustomAmount}>
            <CurrencyInput
              label={customLoanAmountLabel}
              placeholder="0"
              id="amount"
              max={max}
              min={min}
              onChange={_handleChange}
              value={loanAmount}
              locale={"nb"}
              onBlur={handleBlur}
            />
            {errors.amount && (
              <Alert type="warning" variant="error">
                {errors.amount}
              </Alert>
            )}
          </UserDefinedAmount>
        )}
      </Layout>
    </form>
  )
}

const PickAmounts = styled.div`
  overflow: hidden;
  ${props =>
    props.visible
      ? css`
          animation: 0.4s ${BounceIn} 0.05s ease-out forwards 1;
        `
      : css`
          animation: 0.4s ${BounceOut} 0.05s ease-out forwards 1;
        `};
`

const UserDefinedAmount = styled(Box)`
  opacity: 0;
  ${props =>
    props.visible
      ? css`
          animation: 0.4s ${BounceIn} 0.05s ease-out forwards 1;
        `
      : css`
          animation: 0.4s ${BounceOut} 0.05s ease-out forwards 1;
        `};
`

PickLoanSum.defaultProps = {
  customAmount: false,
  max: 100000,
  min: 0,
  customLoanAmountLabel: "Annet beløp"
}

PickLoanSum.propTypes = {
  chooseLoanAmountText: PropTypes.string.isRequired,
  customAmount: PropTypes.bool,
  handleCustomAmount: PropTypes.func.isRequired,
  handleRadio: PropTypes.func.isRequired,
  isCustomAmount: PropTypes.bool,
  loanAmount: PropTypes.number.isRequired,
  max: PropTypes.number,
  min: PropTypes.number,
  otherAmountText: PropTypes.string,
  customLoanAmountLabel: PropTypes.string
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
