import PropTypes from "prop-types"
import React from "react"
import {
  Box,
  Input,
  CompanyInput,
  CurrencyInput,
  PhoneInput,
  Select,
  SliderKeyboardInput,
  Button,
  Label,
  Odometer,
  Text,
  Wrapper,
  Heading,
  Layout,
  LayoutItem,
  List,
  SplitListItem,
  Alert
} from "@staccx/base"
import { createCurrencyMask } from "@staccx/formatting"
import { getPaymentPlan } from "@staccx/payment-plan"
import { throttle } from "@staccx/utils"
import { easeInOutBack } from "easing-utils"
import { Field, Formik } from "formik"
const Yup = require("yup")

class Calculator extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      value: this.props.defaultValue,
      terms: this.props.defaultTerms
    }
    this.recalculate = this.recalculate.bind(this)
    this.calculate = throttle(this.recalculate, 250)
  }

  componentWillMount() {
    const validateSchema = Yup.object().shape({
      value: Yup.number()
        .min(this.props.minValue, this.props.errorValueTooLow)
        .max(this.props.maxValue, this.props.errorValueTooHigh)
        .required(this.props.errorValueRequired),
      terms: Yup.number().required(this.props.errorTerms),
      name: Yup.string().required(this.props.errorNameRequired),
      company: Yup.object().required(this.props.errorCompanyRequired),
      revenue: Yup.number().required(this.props.errorRevenueRequired),
      email: Yup.string()
        .email(this.props.errorEmailInvalid)
        .required(this.props.errorEmailRequired),
      phone: Yup.string().required(this.props.errorPhoneNumberRequired),
      purpose: Yup.string().required(this.props.errorPurposeRequired)
    })
    this.setState(
      {
        validateSchema
      },
      () => this.calculate(this.props.defaultValue, this.props.defaultTerms)
    )
  }

  recalculate(loanAmount, terms) {
    const plan = getPaymentPlan({
      loanAmount,
      interestRate: this.props.interestRate,
      terms,
      startFee: this.props.startFee,
      termFee: this.props.termFee
    })

    const term = plan ? (plan.length > 0 ? plan[0] : null) : null

    this.setState({
      plan,
      term,
      value: loanAmount,
      terms
    })
  }

  render() {
    return (
      <Formik
        initialValues={{
          value: this.state.value,
          terms: this.state.terms,
          name: "",
          company: null,
          revenue: null,
          email: "",
          phone: "",
          purpose: ""
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
        }) => (
          <Wrapper size="large" breakout>
            <Heading level={2} variant="stepHeading">
              {this.props.headingText}
            </Heading>
            <form onSubmit={handleSubmit}>
              <Box variant="actionBox">
                <Box variant="largeForm">
                  <div>
                    <Layout
                      variant="formElements"
                      paddingTop="large"
                      inCalculator="left"
                    >
                      <LayoutItem>
                        <Layout variant="formElements" inCalculator="left">
                          <LayoutItem>
                            <Field
                              name={`value`}
                              render={({ field }) => {
                                const { onChange, ...rest } = field
                                return (
                                  <SliderKeyboardInput
                                    label={this.props.valueLabel}
                                    max={this.props.maxValue}
                                    min={this.props.minValue}
                                    step={5000}
                                    onChange={value => {
                                      this.calculate(value, this.state.terms)
                                      setFieldValue("value", value)
                                    }}
                                    {...rest}
                                    easingFunction={easeInOutBack}
                                    mask={createCurrencyMask(field.value)}
                                  />
                                )
                              }}
                            />
                          </LayoutItem>
                          <LayoutItem>
                            <Field
                              name={`terms`}
                              render={({ field }) => {
                                const { onChange, ...rest } = field
                                return (
                                  <Box
                                    variant="loanDurationContainer"
                                    size="flush"
                                  >
                                    <Label
                                      htmlFor="select-loan-duration"
                                      variant="loanDuration"
                                    >
                                      {this.props.loanDurationLabel}
                                    </Label>
                                    <Select
                                      items={this.props.termValues}
                                      id={"select-loan-duration"}
                                      itemToString={item => item + " mnd"}
                                      onChange={item => {
                                        this.calculate(this.state.value, item)
                                        setFieldValue("terms", item)
                                      }}
                                      {...rest}
                                    />
                                  </Box>
                                )
                              }}
                            />
                          </LayoutItem>
                        </Layout>
                      </LayoutItem>

                      {this.state.term && (
                        <LayoutItem>
                          <Box variant="loanTerms">
                            <List>
                              {this.props.showMonthlyFees && (
                                <SplitListItem>
                                  <span>{this.props.monthlyFeesText}</span>
                                  <span>
                                    <Odometer
                                      number={this.state.term.monthlyFees}
                                      size={14}
                                      seperatorSteps={3}
                                    />
                                  </span>
                                </SplitListItem>
                              )}
                              {this.props.showDownpayment && (
                                <SplitListItem>
                                  <span>
                                    {this.props.downPaymentPerMonthText}
                                  </span>
                                  <span>
                                    <Odometer
                                      number={this.state.term.installment}
                                      size={14}
                                      seperatorSteps={3}
                                    />
                                  </span>
                                </SplitListItem>
                              )}
                              {this.props.showTotalMonthly && (
                                <SplitListItem>
                                  <span>
                                    <Text bold>
                                      {this.props.totalMonthlyText}
                                    </Text>
                                  </span>
                                  <span>
                                    <Text>
                                      <Odometer
                                        number={this.state.term.monthlyPayment}
                                        size={14}
                                        seperatorSteps={3}
                                      />
                                    </Text>
                                  </span>
                                </SplitListItem>
                              )}
                            </List>
                          </Box>
                        </LayoutItem>
                      )}
                    </Layout>
                  </div>
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
                              autoFocus
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
                            const { name, value, onBlur } = field
                            return (
                              <Select
                                items={this.props.loanPurposes}
                                label={this.props.purposeLabel}
                                placeHolderLabel={this.props.purposePlaceholder}
                                name={name}
                                value={value}
                                onChange={item =>
                                  setFieldValue("purpose", item)
                                }
                                onBlur={onBlur}
                                variant="loanPurpose"
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
                    </Layout>
                    {isValid && (
                      <Button type={"submit"}>{this.props.buttonText}</Button>
                    )}
                  </div>
                </Box>
              </Box>
              <Button>Neste</Button>
            </form>
          </Wrapper>
        )}
      />
    )
  }
}

export default Calculator

Calculator.propTypes = {
  buttonText: PropTypes.string,
  companyNameLabel: PropTypes.string,
  companyNamePlaceholder: PropTypes.string,
  companySearchFunc: PropTypes.func,
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
  loanAmount: PropTypes.number,
  loanDurationLabel: PropTypes.string,
  loanPurposes: PropTypes.array,
  mapCompany: PropTypes.func,
  maxValue: PropTypes.number,
  minValue: PropTypes.number,
  monthlyFeesText: PropTypes.string,
  nameLabel: PropTypes.string,
  namePlaceholder: PropTypes.string,
  onValidated: PropTypes.func.isRequired,
  phoneLabel: PropTypes.string,
  phonePlaceholder: PropTypes.string,
  purposePlaceholder: PropTypes.string,
  revenueLabel: PropTypes.string,
  revenuePlaceholder: PropTypes.string,
  showDownpayment: PropTypes.bool,
  showMonthlyFees: PropTypes.bool,
  showTotalMonthly: PropTypes.bool,
  startFee: PropTypes.number,
  termFee: PropTypes.number,
  termValues: PropTypes.array,
  totalMonthlyText: PropTypes.string,
  valueLabel: PropTypes.string,
  purposeLabel: PropTypes.string
}

Calculator.defaultProps = {
  buttonText: "Søk om lån",
  companyNameLabel: "Selskap",
  companyNamePlaceholder: "Navn eller orgnummer",
  defaultTerms: 6,
  defaultValue: 250000,
  downPaymentPerMonthText: "Nedbetaling månedlig",
  emailLabel: "Epost",
  emailPlaceholder: "mail@mail.com",
  interestRate: 19.9,
  loanDurationLabel: "Nedbetalingstid",
  loanPurposes: ["party", "hoverboard"],
  maxValue: 1000000,
  minValue: 10000,
  monthlyFeesText: "Månedlige gebyr",
  nameLabel: "Navn",
  namePlaceholder: "Navn navnesen",
  phoneLabel: "Telefonnummer",
  phonePlaceholder: "xxx xx xxx",
  purposePlaceholder: "Velg...",
  revenueLabel: "Omsetning siste 12 monads",
  showDownpayment: true,
  showMonthlyFees: true,
  showTotalMonthly: true,
  startFee: 0,
  termFee: 3000,
  termValues: [6, 12, 18, 24, 36],
  totalMonthlyText: "Totalt månedlig",
  valueLabel: "Ønsket lånebeløp",
  headingText: "Se hva lånet koster",
  purposeLabel: "Hva skal lånet brukes til?"
}
