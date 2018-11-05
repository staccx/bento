import React from "react"
import { Field, Formik } from "formik"
import {
  Button,
  LayoutItem,
  Layout,
  CurrencyInput,
  Alert,
  Wrapper,
  Heading,
  Loading
} from "@staccx/base"
import { removeWhitespace } from "@staccx/formatting"

const Yup = require("yup")

class ProvideAdditionalInfo extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      siNetIncome: 0,
      siTotalOperatingRevenue: 0,
      asInventories: 0,
      asBankDepositsCashInHandEtc: 0,
      asCurrentAssets: 0,
      asTotalAssets: 0,
      leCurrentLiabilities: 0,
      leEquity: 0,
      asTradeDebtors: 0
    }
  }

  componentWillMount() {
    const validateSchema = Yup.object().shape({
      siNetIncome: Yup.number().required(),
      siTotalOperatingRevenue: Yup.number().required(),
      asInventories: Yup.number().required(),
      asBankDepositsCashInHandEtc: Yup.number().required(),
      asCurrentAssets: Yup.number().required(),
      asTotalAssets: Yup.number().required(),
      leCurrentLiabilities: Yup.number().required(),
      leEquity: Yup.number().required(),
      asTradeDebtors: Yup.number().required()
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
              <Wrapper size="form">
                <Heading variant="stepHeading">
                  {this.props.headingText}
                </Heading>

                <Layout paddingBottom="medium" variant="formElements">
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
                                parseInt(removeWhitespace(e.target.value), 10)
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
                </Layout>
                {this.props.isLoading ? (
                  <Loading variant={"buttonLoading"} />
                ) : (
                  <Button type={"submit"} disabled={!isValid}>
                    Gå videre
                  </Button>
                )}
              </Wrapper>
            </form>
          )
        }}
      />
    )
  }
}

export default ProvideAdditionalInfo
