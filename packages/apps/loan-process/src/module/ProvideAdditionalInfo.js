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
  Paragraph,
  FileInput,
  Label
} from "@staccx/base"
import { removeWhitespace } from "@staccx/formatting"

const Yup = require("yup")

// const FILE_SIZE = 40960000

class ProvideAdditionalInfo extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      file: null,
      siNetIncome: null,
      siTotalOperatingRevenue: null,
      asInventories: null,
      asBankDepositsCashInHandEtc: null,
      asCurrentAssets: null,
      asTotalAssets: null,
      leCurrentLiabilities: null,
      leEquity: null,
      asTradeDebtors: null
    }
  }

  componentWillMount() {
    const { numberTypeValidationMessage } = this.props
    const validateSchema = Yup.object().shape({
      // file: Yup.mixed().test(
      //   "fileSize",
      //   "File Size is too large",
      //   value => value.size <= FILE_SIZE
      // ),
      siNetIncome: Yup.number()
        .typeError(numberTypeValidationMessage)
        .nullable()
        .required(),
      siTotalOperatingRevenue: Yup.number()
        .typeError(numberTypeValidationMessage)
        .nullable()
        .required(),
      asInventories: Yup.number()
        .typeError(numberTypeValidationMessage)
        .nullable()
        .required(),
      asBankDepositsCashInHandEtc: Yup.number()
        .typeError(numberTypeValidationMessage)
        .nullable()
        .required(),
      asCurrentAssets: Yup.number()
        .typeError(numberTypeValidationMessage)
        .nullable()
        .required(),
      asTotalAssets: Yup.number()
        .typeError(numberTypeValidationMessage)
        .nullable()
        .required(),
      leCurrentLiabilities: Yup.number()
        .typeError(numberTypeValidationMessage)
        .nullable()
        .required(),
      leEquity: Yup.number()
        .typeError(numberTypeValidationMessage)
        .nullable()
        .required(),
      asTradeDebtors: Yup.number()
        .typeError(numberTypeValidationMessage)
        .nullable()
        .required()
    })
    this.setState({
      validateSchema
    })
  }
  render() {
    const { validateSchema, file, ...initialValues } = this.state
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
              <Wrapper size="large" variant="formForm">
                <Layout rowGap="small" paddingBottom="medium">
                  <Heading variant="stepHeading">
                    {this.props.headingText}
                  </Heading>
                  <Paragraph variant="lead">{this.props.leadText}</Paragraph>
                </Layout>
              </Wrapper>
              <Wrapper size="form">
                <Layout paddingBottom="medium" variant="formElements">
                  <LayoutItem key={"file"}>
                    <Label for="idjadsj">Eksport av regnskap (pdf)</Label>
                    <Field
                      name={"file"}
                      render={({ onChange, value, ...field }) => (
                        <FileInput
                          group="signer"
                          id="idjadsj"
                          accept={"application/pdf"}
                          onChange={e => {
                            const file = e.target.files[0] || null
                            setFieldValue("file", file)
                          }}
                          {...field}
                        >
                          Last opp
                        </FileInput>
                      )}
                    />
                    {errors.file && (
                      <Alert variant="error" type="warning">
                        {errors.file}
                      </Alert>
                    )}
                  </LayoutItem>
                  {keys.map(key => {
                    const showError =
                      (values[key] || Number.isNaN(values[key])) && errors[key]
                    return (
                      <LayoutItem key={"additional" + key}>
                        <Field
                          name={key}
                          render={({ onChange, value, ...field }) => (
                            <CurrencyInput
                              id={key}
                              label={this.props[`${key}Label`]}
                              helpText={this.props[`${key}HelpText`]}
                              placeholder="0"
                              locale={"nb"}
                              defaultValue={value}
                              onChange={e => {
                                const { value } = e.target
                                setFieldValue(
                                  key,
                                  parseInt(removeWhitespace(value), 10)
                                )
                              }}
                              {...field}
                            />
                          )}
                        />
                        {showError && (
                          <Alert variant="error" type="warning">
                            {errors[key]}
                          </Alert>
                        )}
                      </LayoutItem>
                    )
                  })}
                </Layout>
                {this.props.isLoading ? (
                  <Loading variant={"buttonLoading"} />
                ) : (
                  <Button variant="forward" type={"submit"} disabled={!isValid}>
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
  asBankDepositsCashInHandEtc: PropTypes.number,
  asBankDepositsCashInHandEtcLabel: PropTypes.string,
  asCurrentAssets: PropTypes.number,
  asCurrentAssetsHelpText: PropTypes.string,
  asCurrentAssetsLabel: PropTypes.string,
  asInventories: PropTypes.number,
  asInventoriesLabel: PropTypes.string,
  asTotalAssets: PropTypes.number,
  asTotalAssetsLabel: PropTypes.string,
  asTradeDebtors: PropTypes.number,
  asTradeDebtorsLabel: PropTypes.string,
  headingText: PropTypes.string,
  isLoading: PropTypes.any,
  leCurrentLiabilities: PropTypes.number,
  leCurrentLiabilitiesLabel: PropTypes.string,
  leEquity: PropTypes.number,
  leEquityLabel: PropTypes.string,
  leadText: PropTypes.string,
  numberTypeValidationMessage: PropTypes.string,
  onValidated: PropTypes.any,
  siNetIncome: PropTypes.number,
  siNetIncomeHelpText: PropTypes.string,
  siNetIncomeLabel: PropTypes.string,
  siTotalOperatingRevenue: PropTypes.number,
  siTotalOperatingRevenueHelpText: PropTypes.string,
  siTotalOperatingRevenueLabel: PropTypes.string
}

ProvideAdditionalInfo.defaultProps = {
  asBankDepositsCashInHandEtc: 0,
  asBankDepositsCashInHandEtcLabel: "Sum Kasse/Bank/Post",
  asCurrentAssets: 0,
  asCurrentAssetsHelpText:
    "Virksomhetens kortsiktige eiendeler som varelager, betalingsmidler og verdipapirer.",
  asCurrentAssetsLabel: "Sum omløpsmidler",
  asInventories: 0,
  asInventoriesLabel: "Sum varelager",
  asTotalAssets: 0,
  asTotalAssetsLabel: "Sum eiedeler",
  asTradeDebtors: 0,
  asTradeDebtorsLabel: "Sum kundefordringer",
  headingText: "Legg til info",
  leCurrentLiabilities: 0,
  leCurrentLiabilitiesLabel: "Sum kortsiktig gjeld",
  leEquity: 0,
  leEquityLabel: "Sum egenkapital",
  leadText: "Vi trenger litt mer info",
  numberTypeValidationMessage: "Feltet må være et tall",
  siNetIncome: 0,
  siNetIncomeHelpText: "Driftsresultatet minus renter og skatter.",
  siNetIncomeLabel: "Årsresultat",
  siTotalOperatingRevenue: 0,
  siTotalOperatingRevenueHelpText: "Salgs- og driftsinntekter.",
  siTotalOperatingRevenueLabel: "Sum driftsinntekter"
}

export default ProvideAdditionalInfo
