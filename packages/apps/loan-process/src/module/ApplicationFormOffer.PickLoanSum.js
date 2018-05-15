import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { withFormik } from "formik"
import Yup from "yup"
import { CurrencyInput, RadioButton } from "@staccx/base"
import { formatCurrency, removeWhitespace } from "@staccx/formatting"
import { BounceIn, BounceOut } from "@staccx/animations"
import { color, spacing } from "@staccx/theme"
import { toSystemText } from "../../utils/toSystemText"
import withLoanApplication from "../../hoc/withLoanApplication"
import ValidationError from "../../components/validation/ValidationError"
import SystemText from "../../components/SystemText"

const PickLoanSum = props => {
  const {
    loanAmount,
    max,
    min,
    customAmount,
    handleRadio,
    handleCustomAmount,
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
        <legend>{toSystemText("CHOOSE_LOAN_AMOUNT", "Velg lånebeløp")}</legend>
        <InlineRadioButtons>
          <InlineRadioButtonsItem>
            <RadioButton
              key={"userValue"}
              id="userValue"
              value={max.toString()}
              group={"loanSum"}
              defaultChecked
              onChange={_handleRadio}
            >
              {formatCurrency(max)}
            </RadioButton>
          </InlineRadioButtonsItem>
          <InlineRadioButtonsItem>
            <RadioButton
              key={"otherValue"}
              id="otherValue"
              value={"other"}
              group={"loanSum"}
              onChange={_handleRadio}
            >
              <SystemText systemKey="OTHER_AMOUNT" />
            </RadioButton>
          </InlineRadioButtonsItem>
        </InlineRadioButtons>
      </PickAmounts>
      {customAmount && (
        <UserDefinedAmount visible={customAmount}>
          <CurrencyInput
            label={toSystemText("CHOOSE_LOAN_AMOUNT", "Velg lånebeløp")}
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
  customAmount: PropTypes.bool,
  handleRadio: PropTypes.func.isRequired,
  handleCustomAmount: PropTypes.func.isRequired
}

export default withFormik({
  mapPropsToValues: props => ({
    amount: props.loanAmount
  }),

  validationSchema: props =>
    Yup.object().shape({
      amount: Yup.number("NaN bread")
        .required("Cannot be empty")
        .transform((currentValue, originalValue) => {
          return parseInt(removeWhitespace(originalValue.toString()), 10)
        })
        .integer()
        .min(props.min, toSystemText("SUM_TOO_LOW", "Lav sum"))
        .max(props.max, toSystemText("SUM_TOO_HIGH", "Høy sum"))
    }),
  handleSubmit: (values, { setSubmitting, props }) => {
    setTimeout(() => {
      setSubmitting(false)
      if (props.onValidated) {
        props.onValidated()
      }
    }, 200)
  }
})(withLoanApplication(PickLoanSum))
