import PropTypes from "prop-types"
import React from "react"
import {
  CompanyInput,
  Select,
  Button,
  Wrapper,
  Heading,
  Layout,
  LayoutItem,
  Alert,
  Loading,
  State,
  RadioButton,
  Label
} from "@staccx/base"
import { Field, Formik } from "formik"

const Yup = require("yup")

const mapPurpose = item => item

const mapRepaymentPeriod = item => item

const mapPaymentsInternational = item => item

class CompanyInfo extends React.Component {
  componentWillMount() {
    const validateSchema = Yup.object().shape({
      company: Yup.object()
        .nullable()
        .required(this.props.errorCompanyRequired),
      purpose: Yup.string().required(this.props.errorPurposeRequired),
      paymentCash: Yup.string()
        .nullable()
        .required("Påkrevd"),
      paymentsInternational: Yup.string().required("Påkrevd")
    })
    this.setState({
      validateSchema
    })
  }

  render() {
    return (
      <Formik
        initialValues={{
          company: null,
          purpose: null,
          paymentCash: this.props.paymentCash[0],
          paymentsInternational: null
        }}
        validationSchema={this.state.validateSchema}
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
            <React.Fragment>
              <Wrapper size="large">
                {this.props.headingText && (
                  <Heading level={2} variant="stepHeading">
                    {this.props.headingText}
                  </Heading>
                )}
              </Wrapper>
              <Wrapper size="form">
                <form onSubmit={handleSubmit}>
                  <Layout inCalculator>
                    <LayoutItem>
                      <Field
                        name={`company`}
                        render={({ field }) => {
                          return (
                            <CompanyInput
                              label={this.props.companyNameLabel}
                              onSearch={this.props.companySearchFunc}
                              mapItem={this.props.mapCompany}
                              id="company"
                              onSelect={value => {
                                if (value && value.target) {
                                  value = value.target.value
                                }
                                setFieldValue("company", value)
                              }}
                            />
                          )
                        }}
                      />
                      {touched.company && errors.company && (
                        <Alert variant="error" type="warning">
                          {errors.company}
                        </Alert>
                      )}
                    </LayoutItem>
                    <LayoutItem>
                      <Field
                        name={`purpose`}
                        render={({ field }) => {
                          const {
                            name,
                            value,
                            onBlur,
                            onChange,
                            ...props
                          } = field
                          return (
                            <Select
                              items={this.props.loanPurposes}
                              label={this.props.purposeLabel}
                              placeHolderLabel={this.props.purposePlaceholder}
                              {...this.props.purposeSelectProps}
                              value={value}
                              onChange={item =>
                                setFieldValue(
                                  "purpose",
                                  this.props.mapPurpose(item)
                                )
                              }
                              // onBlur={onBlur}
                              {...props}
                            />
                          )
                        }}
                      />
                      {touched.purpose && errors.purpose && (
                        <Alert variant="error" type="warning">
                          {errors.purpose}
                        </Alert>
                      )}
                    </LayoutItem>
                    <LayoutItem>
                      <Field
                        name={`paymentCash`}
                        render={({ field }) => {
                          const {
                            name,
                            value,
                            onBlur,
                            onChange,
                            ...props
                          } = field
                          return (
                            <State>
                              {({ change, isOpen = false }) => {
                                return (
                                  <div>
                                    <Label as="legend">
                                      {this.props.paymentCashConditionalLabel}
                                    </Label>
                                    <div>
                                      <RadioButton
                                        id="cashYes"
                                        onChange={() =>
                                          change({ isOpen: true })
                                        }
                                        group="cash"
                                        value="yes"
                                      >
                                        Ja
                                      </RadioButton>
                                      <RadioButton
                                        id="cashNo"
                                        onChange={() =>
                                          change({ isOpen: false })
                                        }
                                        defaultChecked
                                        group="cash"
                                        value="no"
                                      >
                                        Nei
                                      </RadioButton>
                                    </div>
                                    {isOpen && (
                                      <Select
                                        items={this.props.paymentCash}
                                        label={this.props.paymentCashLabel}
                                        initialSelectedItem={values.paymentCash}
                                        placeHolderLabel={
                                          this.props.paymentCashPlaceholder
                                        }
                                        {...this.props.paymentSelectProps}
                                        value={value}
                                        onChange={item =>
                                          setFieldValue(
                                            "paymentCash",
                                            this.props.mapRepaymentPeriod(item)
                                          )
                                        }
                                        // onBlur={onBlur}
                                        {...props}
                                      />
                                    )}
                                  </div>
                                )
                              }}
                            </State>
                          )
                        }}
                      />
                      {touched.paymentCash && errors.paymentCash && (
                        <Alert variant="error" type="warning">
                          {errors.paymentCash}
                        </Alert>
                      )}
                    </LayoutItem>
                    <LayoutItem>
                      <Field
                        name={`paymentsInternational`}
                        render={({ field }) => {
                          const {
                            name,
                            value,
                            onBlur,
                            onChange,
                            ...props
                          } = field
                          return (
                            <Select
                              items={this.props.paymentsInternationals}
                              label={this.props.paymentsInternationalsLabel}
                              placeHolderLabel={
                                this.props.paymentsInternationalPlaceholder
                              }
                              {...this.props.paymentsInternationalSelectProps}
                              name={name}
                              value={value}
                              onChange={item =>
                                setFieldValue(
                                  "paymentsInternational",
                                  this.props.mapPaymentsInternational(item)
                                )
                              }
                              // onBlur={onBlur}
                              {...props}
                            />
                          )
                        }}
                      />
                      {touched.paymentsInternational &&
                        errors.paymentsInternational && (
                          <Alert variant="error" type="warning">
                            {errors.paymentsInternational}
                          </Alert>
                        )}
                    </LayoutItem>

                    <LayoutItem>
                      {this.props.isLoading ? (
                        <Loading variant={"buttonLoading"} />
                      ) : (
                        <Button
                          variant="forward"
                          type={"submit"}
                          disabled={!isValid}
                          onClick={() =>
                            this.props.onClick({ values, touched, errors })
                          }
                        >
                          {this.props.resolveButtonText
                            ? this.props.resolveButtonText(values)
                            : this.props.buttonText}
                        </Button>
                      )}
                    </LayoutItem>
                  </Layout>
                </form>
              </Wrapper>
            </React.Fragment>
          )
        }}
      />
    )
  }
}

export default CompanyInfo

CompanyInfo.propTypes = {
  buttonText: PropTypes.string,
  companyNameLabel: PropTypes.string,
  companyNamePlaceholder: PropTypes.string,
  companySearchFunc: PropTypes.func,
  creditExplanationText: PropTypes.string,
  defaultTerms: PropTypes.number,
  defaultValue: PropTypes.number,
  downPaymentPerMonthText: PropTypes.string,
  errorCompanyRequired: PropTypes.string,
  errorPhoneNumberRequired: PropTypes.string,
  errorPurposeRequired: PropTypes.string,
  errorRevenueRequired: PropTypes.string,
  errorTerms: PropTypes.string,
  errorValueRequired: PropTypes.string,
  errorValueTooHigh: PropTypes.string,
  errorValueTooLow: PropTypes.string,
  headingText: PropTypes.string,
  interestRate: PropTypes.number,
  interestRateText: PropTypes.string,
  isLoading: PropTypes.any,
  loanAmount: PropTypes.number,
  loanDurationLabel: PropTypes.string,
  loanPurposes: PropTypes.array,
  mapCompany: PropTypes.func,
  mapPaymentsInternational: PropTypes.any,
  mapPurpose: PropTypes.func,
  mapRepaymentPeriod: PropTypes.any,
  maxValue: PropTypes.number,
  minValue: PropTypes.number,
  monthlyFeesText: PropTypes.string,
  nameLabel: PropTypes.string,
  namePlaceholder: PropTypes.string,
  onClick: PropTypes.func,
  onValidated: PropTypes.func.isRequired,
  paymentCash: PropTypes.array,
  paymentCashLabel: PropTypes.string,
  paymentCashPlaceholder: PropTypes.string,
  paymentSelectProps: PropTypes.func,
  paymentsInternational: PropTypes.string,
  paymentsInternationalPlaceholder: PropTypes.string,
  paymentsInternationalSelectProps: PropTypes.func,
  paymentsInternationals: PropTypes.array,
  paymentsInternationalsLabel: PropTypes.string,
  priceExampleText: PropTypes.string,
  productType: PropTypes.string,
  purposeLabel: PropTypes.string,
  purposePlaceholder: PropTypes.string,
  purposeSelectProps: PropTypes.object,
  resolveButtonText: PropTypes.func,
  revenueLabel: PropTypes.string,
  revenuePlaceholder: PropTypes.string,
  showDownpayment: PropTypes.bool,
  showInterestRate: PropTypes.bool,
  showMonthlyFees: PropTypes.bool,
  showTotalMonthly: PropTypes.bool,
  startFee: PropTypes.number,
  termFee: PropTypes.number,
  termValues: PropTypes.array,
  totalMonthlyText: PropTypes.string,
  valueLabel: PropTypes.string
}

CompanyInfo.defaultProps = {
  buttonText: "Søk om lån",
  companyNameLabel: "Selskap",
  companyNamePlaceholder: "Navn eller orgnummer",
  downPaymentPerMonthText: "Nedbetaling månedlig",
  loanDurationLabel: "Nedbetalingstid",
  loanPurposes: ["party", "hoverboard"],
  mapPaymentsInternational: mapPaymentsInternational,
  mapPurpose: mapPurpose,
  mapRepaymentPeriod: mapRepaymentPeriod,
  monthlyFeesText: "Månedlige gebyr",
  onClick: () => null,
  paymentCashConditionalLabel: "Mottar dere kontantbetaling?",
  paymentCash: ["Ingen", "Lite", "Halvparten", "Alt", "Vet ikke"],
  paymentCashLabel: "Hvor mye kontantbetaling mottar dere?",
  paymentCashPlaceholder: "Velg...",
  paymentSelectProps: item => item,
  paymentsInternationalPlaceholder: "Velg...",
  paymentsInternationalSelectProps: item => item,
  paymentsInternationals: ["Norge", "Skandinavia", "Europa", "Hele verden"],
  paymentsInternationalsLabel: "Hvor kommer betalingene deres fra?",
  purposeLabel: "Hva skal lånet brukes til?",
  purposePlaceholder: "Velg...",
  purposeSelectProps: {}
}
