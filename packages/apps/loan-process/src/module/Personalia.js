import PropTypes from "prop-types"
import React from "react"
import {
  Box,
  Input,
  CompanyInput,
  CurrencyInput,
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

class Personalia extends React.Component {
  componentWillMount() {
    const validateSchema = Yup.object().shape({
      name: Yup.string().required(this.props.errorNameRequired),
      company: Yup.object()
        .nullable()
        .required(this.props.errorCompanyRequired),
      revenue: Yup.number().required(this.props.errorRevenueRequired),
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
            <Wrapper size="large" breakout>
              {this.props.headingText && (
                <Heading level={2} variant="stepHeading">
                  {this.props.headingText}
                </Heading>
              )}
              <form onSubmit={handleSubmit}>
                <Box variant="actionBox">
                  <Box variant="largeForm">
                    <div>
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
                                  placeholder={
                                    this.props.companyNamePlaceholder
                                  }
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
                            name={`revenue`}
                            render={({ field }) => (
                              <CurrencyInput
                                id={"revenue"}
                                label={this.props.revenueLabel}
                                placeholder={this.props.revenuePlaceholder}
                                locale={"nb"}
                                {...field}
                              />
                            )}
                          />
                          {touched.revenue &&
                            errors.revenue && (
                              <Alert variant="error" type="warning">
                                {errors.revenue}
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
                                  placeHolderLabel={
                                    this.props.purposePlaceholder
                                  }
                                  name={name}
                                  value={value}
                                  onChange={item =>
                                    setFieldValue("purpose", item)
                                  }
                                  // onBlur={onBlur}
                                  variant="loanPurpose"
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
                                    setFieldValue("repaymentMethod", item)
                                  }
                                  onBlur={onBlur}
                                  variant="loanPurpose"
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
                                <Box variant="radioContainer">
                                  <Label htmlFor={name}>
                                    Mottar du innbetalinger fra utenfor Norge?
                                  </Label>
                                  <RadioButton
                                    name={name}
                                    id="213ewqs"
                                    defaultChecked={
                                      values.paymentsInternational
                                    }
                                    onChange={() =>
                                      setFieldValue(
                                        "paymentsInternational",
                                        true
                                      )
                                    }
                                  >
                                    Ja
                                  </RadioButton>
                                  <RadioButton
                                    name={name}
                                    id="21iehwdaj"
                                    defaultChecked={
                                      !values.paymentsInternational
                                    }
                                    onChange={() =>
                                      setFieldValue(
                                        "paymentsInternational",
                                        false
                                      )
                                    }
                                  >
                                    Nei
                                  </RadioButton>
                                </Box>
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
                                <Box variant="radioContainer">
                                  <Label htmlFor={name}>
                                    Tar du i mot kontanter i betaling fra dine
                                    kunder
                                  </Label>
                                  <RadioButton
                                    name={name}
                                    id="3riejwfjnsldk"
                                    defaultChecked={values.paymentCash}
                                    onChange={item =>
                                      setFieldValue("paymentCash", item)
                                    }
                                  >
                                    Ja
                                  </RadioButton>
                                  <RadioButton
                                    name={name}
                                    id="okwenfs"
                                    defaultChecked={!values.paymentCash}
                                    onChange={item =>
                                      setFieldValue("paymentCash", !item)
                                    }
                                  >
                                    Nei
                                  </RadioButton>
                                </Box>
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
                      </Layout>
                      <Button
                        type={"submit"}
                        onClick={() =>
                          this.props.onClick({ values, touched, errors })
                        }
                      >
                        {this.props.buttonText}
                      </Button>
                    </div>
                  </Box>
                </Box>
              </form>
            </Wrapper>
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
  repaymentMethods: PropTypes.array,
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
  monthlyFeesText: "Månedlige gebyr",
  nameLabel: "Navn",
  namePlaceholder: "Navn navnesen",
  phoneLabel: "Telefonnummer",
  phonePlaceholder: "xxx xx xxx",
  purposeLabel: "Hva skal lånet brukes til?",
  purposePlaceholder: "Velg...",
  repaymentMethods: [
    "Nettbetaling",
    "Kortbetaling",
    "Fakturering",
    "Kontantbetaling"
  ],
  revenueLabel: "Omsetning siste 12 monads"
}
