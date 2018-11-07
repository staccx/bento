import React from "react"
import { Field, Formik } from "formik"
import PropTypes from "prop-types"
import {
  Button,
  LayoutItem,
  Layout,
  CurrencyInput,
  Alert,
  Wrapper,
  Heading,
  Loading,
  Paragraph
} from "@staccx/base"
import { removeWhitespace } from "@staccx/formatting"

const Yup = require("yup")

class ProvideAdditionalInfo extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      siNetIncome: this.props.siNetIncome,
      siTotalOperatingRevenue: this.props.siTotalOperatingRevenue,
      asInventories: this.props.asInventories,
      asBankDepositsCashInHandEtc: this.props.asBankDepositsCashInHandEtc,
      asCurrentAssets: this.props.asCurrentAssets,
      asTotalAssets: this.props.asTotalAssets,
      leCurrentLiabilities: this.props.leCurrentLiabilities,
      leEquity: this.props.leEquity,
      asTradeDebtors: this.props.asTradeDebtors
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
              <Wrapper size="large" variant="form">
                <Layout rowGap="small" paddingBottom="medium">
                  <Heading variant="stepHeading">
                    {this.props.headingText}
                  </Heading>
                  <Paragraph variant="lead">{this.props.leadText}</Paragraph>
                </Layout>
              </Wrapper>
              <Wrapper size="form">
                <Layout paddingBottom="medium" variant="formElements">
                  {keys.map(key => (
                    <LayoutItem key={"additional" + key}>
                      <Field
                        name={key}
                        render={({ onChange, value, ...field }) => (
                          <CurrencyInput
                            id={key}
                            label={this.props[`${key}Label`]}
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

ProvideAdditionalInfo.propTypes = {
  headingText: PropTypes.string,
  leadText: PropTypes.string,
  siNetIncome: PropTypes.number,
  siTotalOperatingRevenue: PropTypes.number,
  asInventories: PropTypes.number,
  asBankDepositsCashInHandEtc: PropTypes.number,
  asCurrentAssets: PropTypes.number,
  asTotalAssets: PropTypes.number,
  leCurrentLiabilities: PropTypes.number,
  leEquity: PropTypes.number,
  asTradeDebtors: PropTypes.number,
  siNetIncomeLabel: PropTypes.string,
  siTotalOperatingRevenueLabel: PropTypes.string,
  asInventoriesLabel: PropTypes.string,
  asBankDepositsCashInHandEtcLabel: PropTypes.string,
  asCurrentAssetsLabel: PropTypes.string,
  asTotalAssetsLabel: PropTypes.string,
  leCurrentLiabilitiesLabel: PropTypes.string,
  leEquityLabel: PropTypes.string,
  asTradeDebtorsLabel: PropTypes.string
}

ProvideAdditionalInfo.defaultProps = {
  headingText: "Legg til info",
  leadText: "Vi trenger litt mer info",
  siNetIncome: 0,
  siTotalOperatingRevenue: 0,
  asInventories: 0,
  asBankDepositsCashInHandEtc: 0,
  asCurrentAssets: 0,
  asTotalAssets: 0,
  leCurrentLiabilities: 0,
  leEquity: 0,
  asTradeDebtors: 0,
  siNetIncomeLabel: "Årsresultat",
  siTotalOperatingRevenueLabel: "Sum driftsinntekter",
  asInventoriesLabel: "Sum varelager",
  asBankDepositsCashInHandEtcLabel: "Sum Kasse/Bank/Post",
  asCurrentAssetsLabel: "Sum omløpsmidler",
  asTotalAssetsLabel: "Sum eiedeler",
  leCurrentLiabilitiesLabel: "Sum kortsiktig gjeld",
  leEquityLabel: "Sum egenkapital",
  asTradeDebtorsLabel: "Sum kundefordringer"
}

export default ProvideAdditionalInfo
