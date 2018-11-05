import React from "react"
import PropTypes from "prop-types"
import { withFormik } from "formik"
import {
  AccountInput,
  Button,
  Wrapper,
  Box,
  Heading,
  Layout,
  LayoutItem,
  Alert,
  Paragraph,
  Loading
} from "@staccx/base"
import { removeWhitespace } from "@staccx/formatting"
const Yup = require("yup")

const Form = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleSubmit,
    renderIllustration,
    setFieldValue
  } = props

  const _handleSubmit = e => {
    handleSubmit(e)
  }

  return (
    <form onSubmit={_handleSubmit}>
      <Box variant="illustration">
        {renderIllustration && renderIllustration()}
      </Box>
      <Wrapper size="medium">
        <Heading variant="stepHeading">{props.headingText}</Heading>
        <Paragraph variant="lead">{props.loanTypeText}</Paragraph>
      </Wrapper>
      <Wrapper size="form">
        <Layout paddingTop="medium">
          <LayoutItem>
            <AccountInput
              guide={false}
              value={values.accountNumber}
              onChange={e => {
                setFieldValue("accountNumber", e.target.rawValue)
              }}
              label={props.accountNumberText}
              placeholder="×××× ×× ××××"
              id="accountNumber"
              locale={"nb"}
            />
            {errors.accountNumber &&
              touched.accountNumber && (
                <Alert type="warning" variant="error">
                  {errors.accountNumber}
                </Alert>
              )}
          </LayoutItem>
          {!isSubmitting && (
            <div>
              {props.isLoading ? (
                <Loading variant={"buttonLoading"} />
              ) : (
                <Button type="submit" onClick={() => null}>
                  {props.continueButtonText}
                </Button>
              )}
            </div>
          )}
        </Layout>
      </Wrapper>
    </form>
  )
}

Form.propTypes = {
  accountNumber: PropTypes.string
}

const FormikForm = withFormik({
  mapPropsToValues: props => {
    return {
      accountNumber: props.accountNumber,
      onValidated: props.onValidated,
      isLoading: props.isLoading
    }
  },
  validationSchema: props =>
    Yup.object().shape({
      accountNumber: Yup.string()
        .transform(result => removeWhitespace(result.toString()))
        .min(11)
        .required(props.accountNumberErrorText)
    }),

  handleSubmit: (values, { setSubmitting, props }) => {
    setTimeout(() => {
      setSubmitting(false)
      if (props.onValidated) {
        props.onValidated({
          accountNumber: removeWhitespace(values.accountNumber)
        })
      }
    }, 10)
  }
})(Form)

class SetAccountNumber extends React.PureComponent {
  render() {
    return (
      <FormikForm
        onChange={this.props.onChange}
        headingText={this.props.headingText}
        loanTypeText={this.props.loanTypeText}
        accountNumberText={this.props.accountNumberText}
        continueButtonText={this.props.continueButtonText}
        accountNumberErrorText={this.props.accountNumberErrorText}
        onValidated={this.props.onValidated}
        renderIllustration={this.props.renderIllustration}
        isLoading={this.props.isLoading}
      />
    )
  }
}

SetAccountNumber.propTypes = {
  accountNumberErrorText: PropTypes.string,
  accountNumberText: PropTypes.string,
  continueButtonText: PropTypes.string,
  headingText: PropTypes.string,
  loanTypeText: PropTypes.string,
  onChange: PropTypes.func,
  onValidated: PropTypes.func.isRequired,
  renderIllustration: PropTypes.func
}

SetAccountNumber.defaultProps = {
  accountNumberErrorText: "Kontonummeret er ikke gyldig",
  accountNumberText: "Kontonummer",
  continueButtonText: "Fortsett nå",
  headingText: "Utbetalingskonto",
  loanTypeText:
    "Nesten ferdig, vi trenger bare kontonummeret ditt og signering av avtalen, så er pengene på vei.",
  onValidated: console.log
}

export default SetAccountNumber
