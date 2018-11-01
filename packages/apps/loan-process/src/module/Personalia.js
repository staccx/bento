import PropTypes from "prop-types"
import React from "react"
import {
  Input,
  CompanyInput,
  PhoneInput,
  Select,
  Button,
  Label,
  RadioButton,
  Wrapper,
  Heading,
  Layout,
  LayoutItem,
  Alert
} from "@staccx/base"
import { Field, Formik } from "formik"

const Yup = require("yup")

const mapPurpose = item => item

const mapRepaymentPeriod = item => item

class Personalia extends React.Component {
  componentWillMount() {
    const validateSchema = Yup.object().shape({
      name: Yup.string().required(this.props.errorNameRequired),
      company: Yup.object()
        .nullable()
        .required(this.props.errorCompanyRequired),
      email: Yup.string()
        .email(this.props.errorEmailInvalid)
        .required(this.props.errorEmailRequired),
      phone: Yup.string().required(this.props.errorPhoneNumberRequired),
      purpose: Yup.string().required(this.props.errorPurposeRequired),
      repaymentMethod: Yup.string()
        .nullable()
        .required("Påkrevd"),
      paymentCash: Yup.bool().required("Påkrevd"),
      paymentsInternational: Yup.bool().required("Påkrevd")
    })
    this.setState({
      validateSchema
    })
  }

  render() {
    return (
      <Formik
        initialValues={{
          name: "",
          company: null,
          revenue: undefined,
          email: "",
          phone: "",
          purpose: "",
          repaymentMethod: null,
          paymentCash: false,
          paymentsInternational: false
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
                  <Layout variant="formElements" inCalculator>
                    <LayoutItem>
                      <Field
                        name={`name`}
                        render={({ field }) => (
                          <Input
                            id={`name`}
                            {...field}
                            placeholder={this.props.namePlaceholder}
                            label={this.props.nameLabel}
                          />
                        )}
                      />
                      {touched.name &&
                        errors.name && (
                          <Alert variant="error" type="warning">
                            {errors.name}
                          </Alert>
                        )}
                    </LayoutItem>
                    <LayoutItem>
                      <Field
                        name={`company`}
                        render={({ field }) => {
                          const { onChange, ...props } = field
                          return (
                            <CompanyInput
                              label={this.props.companyNameLabel}
                              placeholder={this.props.companyNamePlaceholder}
                              onSearch={this.props.companySearchFunc}
                              mapItem={this.props.mapCompany}
                              id="company"
                              onSelect={value =>
                                setFieldValue("company", value)
                              }
                              {...props}
                            />
                          )
                        }}
                      />
                      {touched.company &&
                        errors.company && (
                          <Alert variant="error" type="warning">
                            {errors.company}
                          </Alert>
                        )}
                    </LayoutItem>
                    <LayoutItem>
                      <Field
                        name={`email`}
                        render={({ field }) => (
                          <Input
                            id={"email"}
                            label={this.props.emailLabel}
                            placeholder={this.props.emailPlaceholder}
                            {...field}
                          />
                        )}
                      />
                      {touched.email &&
                        errors.email && (
                          <Alert variant="error" type="warning">
                            {errors.email}
                          </Alert>
                        )}
                    </LayoutItem>
                    <LayoutItem>
                      <Field
                        name={`phone`}
                        render={({ field }) => (
                          <PhoneInput
                            label={this.props.phoneLabel}
                            id={"phone"}
                            placeholder={this.props.phonePlaceholder}
                            {...field}
                          />
                        )}
                      />
                      {touched.phone &&
                        errors.phone && (
                          <Alert variant="error" type="warning">
                            {errors.phone}
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
                              name={name}
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
                      {touched.purpose &&
                        errors.purpose && (
                          <Alert variant="error" type="warning">
                            {errors.purpose}
                          </Alert>
                        )}
                    </LayoutItem>
                    <LayoutItem>
                      <Field
                        name={`repaymentMethod`}
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
                              items={this.props.repaymentMethods}
                              label={
                                "Hvordan betaler som oftest kundene dine deg?"
                              }
                              placeHolderLabel={"Velg…"}
                              name={name}
                              value={value}
                              onChange={item =>
                                setFieldValue(
                                  "repaymentMethod",
                                  this.props.mapRepaymentPeriod(item)
                                )
                              }
                              onBlur={onBlur}
                              {...props}
                            />
                          )
                        }}
                      />
                      {touched.repaymentMethod &&
                        errors.repaymentMethod && (
                          <Alert variant="error" type="warning">
                            {errors.repaymentMethod}
                          </Alert>
                        )}
                    </LayoutItem>
                    <LayoutItem>
                      <Field
                        name={`paymentsInternational`}
                        render={({ field }) => {
                          const { name } = field
                          return (
                            <div>
                              <Label htmlFor={name}>
                                Mottar du innbetalinger fra utenfor Norge?
                              </Label>
                              <Layout grid="columns" variant="columns">
                                <RadioButton
                                  name={name}
                                  id="213ewqs"
                                  defaultChecked={values.paymentsInternational}
                                  onChange={() =>
                                    setFieldValue("paymentsInternational", true)
                                  }
                                >
                                  Ja
                                </RadioButton>
                                <RadioButton
                                  name={name}
                                  id="21iehwdaj"
                                  defaultChecked={!values.paymentsInternational}
                                  onChange={() =>
                                    setFieldValue(
                                      "paymentsInternational",
                                      false
                                    )
                                  }
                                >
                                  Nei
                                </RadioButton>
                              </Layout>
                            </div>
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
                      <Field
                        name={`paymentCash`}
                        render={({ field }) => {
                          const { name } = field
                          return (
                            <div>
                              <Label htmlFor={name}>
                                Tar du i mot kontanter i betaling fra dine
                                kunder
                              </Label>

                              <Layout variant="columns">
                                <RadioButton
                                  name={name}
                                  id="3riejwfjnsldk"
                                  defaultChecked={values.paymentCash}
                                  onChange={() =>
                                    setFieldValue("paymentCash", true)
                                  }
                                >
                                  Ja
                                </RadioButton>
                                <RadioButton
                                  name={name}
                                  id="okwenfs"
                                  defaultChecked={!values.paymentCash}
                                  onChange={() =>
                                    setFieldValue("paymentCash", false)
                                  }
                                >
                                  Nei
                                </RadioButton>
                              </Layout>
                            </div>
                          )
                        }}
                      />
                      {touched.paymentCash &&
                        errors.paymentCash && (
                          <Alert variant="error" type="warning">
                            {errors.paymentCash}
                          </Alert>
                        )}
                    </LayoutItem>
                    <LayoutItem>
                      <Button
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

export default Personalia

Personalia.propTypes = {
  buttonText: PropTypes.string,
  companyNameLabel: PropTypes.string,
  companyNamePlaceholder: PropTypes.string,
  companySearchFunc: PropTypes.func,
  creditExplanationText: PropTypes.string,
  defaultTerms: PropTypes.number,
  defaultValue: PropTypes.number,
  downPaymentPerMonthText: PropTypes.string,
  emailLabel: PropTypes.string,
  emailPlaceholder: PropTypes.string,
  errorCompanyRequired: PropTypes.string,
  errorEmailInvalid: PropTypes.string,
  errorEmailRequired: PropTypes.string,
  errorNameRequired: PropTypes.string,
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
  loanAmount: PropTypes.number,
  loanDurationLabel: PropTypes.string,
  loanPurposes: PropTypes.array,
  mapCompany: PropTypes.func,
  mapPurpose: PropTypes.func,
  mapRepaymentPeriod: PropTypes.any,
  maxValue: PropTypes.number,
  minValue: PropTypes.number,
  monthlyFeesText: PropTypes.string,
  nameLabel: PropTypes.string,
  namePlaceholder: PropTypes.string,
  onClick: PropTypes.func,
  onValidated: PropTypes.func.isRequired,
  phoneLabel: PropTypes.string,
  phonePlaceholder: PropTypes.string,
  priceExampleText: PropTypes.string,
  productType: PropTypes.string,
  purposeLabel: PropTypes.string,
  purposePlaceholder: PropTypes.string,
  purposeSelectProps: PropTypes.object,
  repaymentMethods: PropTypes.array,
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

Personalia.defaultProps = {
  buttonText: "Søk om lån",
  companyNameLabel: "Selskap",
  companyNamePlaceholder: "Navn eller orgnummer",
  downPaymentPerMonthText: "Nedbetaling månedlig",
  emailLabel: "Epost",
  emailPlaceholder: "mail@mail.com",
  loanDurationLabel: "Nedbetalingstid",
  loanPurposes: ["party", "hoverboard"],
  mapPurpose: mapPurpose,
  mapRepaymentPeriod: mapRepaymentPeriod,
  monthlyFeesText: "Månedlige gebyr",
  nameLabel: "Navn",
  namePlaceholder: "Navn navnesen",
  onClick: () => null,
  phoneLabel: "Telefonnummer",
  phonePlaceholder: "xxx xx xxx",
  purposeLabel: "Hva skal lånet brukes til?",
  purposePlaceholder: "Velg...",
  purposeSelectProps: {},
  repaymentMethods: [
    "Nettbetaling",
    "Kortbetaling",
    "Fakturering",
    "Kontantbetaling"
  ],
  revenueLabel: "Omsetning siste 12 måneder"
}
