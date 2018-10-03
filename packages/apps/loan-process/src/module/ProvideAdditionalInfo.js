import React from "react"
import { Field, Formik } from "formik"
import {
  Button,
  LayoutItem,
  Layout,
  CurrencyInput,
  Alert,
  Wrapper,
  Box,
  Heading
} from "@staccx/base"
import { removeWhitespace } from "@staccx/formatting"

const Yup = require("yup")

class ProvideAdditionalInfo extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      si_NetIncome: 0,
      si_TotalOperatingRevenue: 0,
      as_Inventories: 0,
      as_BankDepositsCashInHandEtc: 0,
      as_CurrentAssets: 0,
      as_TotalAssets: 0,
      le_CurrentLiabilities: 0,
      le_Equity: 0,
      as_TradeDebtors: 0
    }
  }

  componentWillMount() {
    const validateSchema = Yup.object().shape({
      si_NetIncome: Yup.number().required(),
      si_TotalOperatingRevenue: Yup.number().required(),
      as_Inventories: Yup.number().required(),
      as_BankDepositsCashInHandEtc: Yup.number().required(),
      as_CurrentAssets: Yup.number().required(),
      as_TotalAssets: Yup.number().required(),
      le_CurrentLiabilities: Yup.number().required(),
      le_Equity: Yup.number().required(),
      as_TradeDebtors: Yup.number().required()
    })
    this.setState({
      validateSchema
    })
  }
  render() {
    const { validateSchema, ...initialValues } = this.state
    const keys = Object.keys(initialValues)
    return (
      <Formik
        initialValues={{
          ...initialValues
        }}
        validationSchema={validateSchema}
        onSubmit={this.props.onValidated}
        render={({
          handleSubmit,
          isValid,
          values,
          touched,
          errors,
          setFieldValue
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Wrapper size="small" breakout>
                <Heading variant="stepHeading">
                  {this.props.headingText}
                </Heading>
                <Box variant="actionBox">
                  <Box variant="largeForm">
                    <div>
                      <Layout variant="formElements">
                        {keys.map(key => (
                          <LayoutItem>
                            <Field
                              name={key}
                              render={({ onChange, value, ...field }) => (
                                <CurrencyInput
                                  id={key}
                                  label={key}
                                  placeholder="0"
                                  locale={"nb"}
                                  defaultValue={value}
                                  onChange={e => {
                                    setFieldValue(
                                      key,
                                      parseInt(
                                        removeWhitespace(e.target.value),
                                        10
                                      )
                                    )
                                  }}
                                  {...field}
                                />
                              )}
                            />
                            {touched[key] &&
                              errors[key] && (
                                <Alert variant="error" type="warning">
                                  {errors[key]}
                                </Alert>
                              )}
                          </LayoutItem>
                        ))}
                        <Button type={"submit"} disabled={!isValid}>
                          Gå videre
                        </Button>
                      </Layout>
                    </div>
                  </Box>
                </Box>
              </Wrapper>
            </form>
          )
        }}
      />
    )
  }
}

export default ProvideAdditionalInfo
