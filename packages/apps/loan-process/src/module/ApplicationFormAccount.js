import React from "react"
import PropTypes from "prop-types"
import {
  Hr,
  PaddedContainer,
  Illustration,
  TileBox,
  Heading
} from "../../Styles"
import Button from "../../components/button/Button"
import { Wrapper, AccountInput } from "@staccx/base"
import { toSystemText } from "../../utils/toSystemText"
import Yup from "yup"
import { withFormik } from "formik/dist/formik"
import ValidationError from "../../components/validation/ValidationError"
import withLoanApplication from "../../hoc/withLoanApplication"
import withTasks from "../../hoc/withTasks"
import { removeWhitespace } from "../../utils/removeWhitespace"
import SystemText from "../../components/SystemText"

const Form = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    setAccountNumber,
    application
  } = props

  const _handleChange = e => {
    handleChange(e)
    setAccountNumber(e)
  }

  const _handleSubmit = e => {
    handleSubmit(e)
  }

  const loanType =
    application && application.data ? application.data.loanType : null
  return (
    <form onSubmit={_handleSubmit}>
      <Illustration>
        <img src="/assets/utbetaling.svg" alt="" width="175" />
      </Illustration>
      <Heading>
        <SystemText systemKey="PAYMENT_ACCOUNT" />
      </Heading>
      <Wrapper size="small" breakout>
        <TileBox>
          <PaddedContainer>
            {loanType === "loan" && (
              <SystemText systemKey="PAYMENT_ACCOUNT_LEAD_LOAN" />
            )}
            {loanType === "credit" && (
              <SystemText systemKey="PAYMENT_ACCOUNT_LEAD_CREDIT" />
            )}
          </PaddedContainer>
          <Hr />
          <AccountInput
            guide={false}
            value={values.accountNumber}
            onChange={_handleChange}
            label={toSystemText("ACCOUNT_NUMBER", "Kontonummer")}
            placeholder="XXXX XX XXXX"
            id="accountNumber"
            locale={"nb"}
          />
          {errors.accountNumber &&
            touched.accountNumber && (
              <ValidationError>{errors.accountNumber}</ValidationError>
            )}
        </TileBox>
        {!isSubmitting && (
          <Button type="submit" onClick={() => null}>
            <SystemText systemKey="CONTINUE_NOW" />
          </Button>
        )}
      </Wrapper>
    </form>
  )
}

Form.propTypes = {
  loanApplication: PropTypes.shape({
    accountNumber: PropTypes.string
  })
}
const FormikForm = withFormik({
  mapPropsToValues: props => {
    return {
      accountNumber: props.loanApplication.accountNumber,
      onValidated: props.onValidated
    }
  },
  validationSchema: () =>
    Yup.object().shape({
      accountNumber: Yup.number()
        .min(11)
        .required(toSystemText("FORM_ACCOUNT_NUMBER_ERROR"))
    }),

  handleSubmit: (values, { setSubmitting, props }) => {
    setTimeout(() => {
      setSubmitting(false)
      if (props.onValidated) {
        props.onValidated(removeWhitespace(values.accountNumber))
      }
    }, 200)
  }
})(Form)

class ApplicationFormAccount extends React.PureComponent {
  render() {
    const task = this.props.taskReducer[
      this.props.taskTypes.TASK_TYPE_REGISTER_ACCOUNT_NUMBER
    ]
    if (!task) {
      return null
    }
    return (
      <FormikForm
        setAccountNumber={this.props.setAccountNumber}
        loanApplication={this.props.loanApplication}
        onValidated={accountNumber =>
          this.props.completeTask(task, { accountNumber })
        }
        application={this.props.application}
      />
    )
  }
}

ApplicationFormAccount.propTypes = {}

export default withTasks(withLoanApplication(ApplicationFormAccount))
