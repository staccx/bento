import PropTypes from "prop-types"
import React from "react"
import {
  Box,
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
  Input,
  Alert,
  PhoneInput,
  Loading
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
      email: Yup.string()
        .email(this.props.errorEmailInvalid)
        .required(this.props.errorEmailRequired),
      phone: Yup.string().required(this.props.errorPhoneNumberRequired)
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
          terms: this.state.terms
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
          <Wrapper size="large">
            {this.props.headingText && (
              <Heading level={2} variant="stepHeading">
                {this.props.headingText}
              </Heading>
            )}
            <form onSubmit={handleSubmit}>
              <Layout
                variant="calculator"
                paddingTop="large"
                inCalculator="left"
              >
                <LayoutItem area="left">
                  <Layout>
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
                    {this.props.productType === "PRODUCT_LOAN" && (
                      <Field
                        name={`terms`}
                        render={({ field }) => {
                          const { onChange, ...rest } = field
                          return (
                            <div>
                              <Box variant="loanDurationContainer">
                                <Label
                                  htmlFor="select-loan-duration"
                                  variant="loanDuration"
                                >
                                  {this.props.loanDurationLabel}
                                </Label>
                                <Select
                                  items={this.props.termValues}
                                  id={"select-loan-duration"}
                                  itemToString={this.props.termsValuesToString}
                                  onChange={item => {
                                    this.calculate(this.state.value, item)
                                    setFieldValue("terms", item)
                                  }}
                                  {...rest}
                                />
                              </Box>
                            </div>
                          )
                        }}
                      />
                    )}
                    {this.props.productType === "PRODUCT_CREDIT" && (
                      <Box variant="priceExample" size="mediumPlus">
                        <Text variant="creditExplainer">
                          {this.props.creditExplanationText}
                        </Text>
                      </Box>
                    )}
                    {this.state.term && (
                      <Box variant="loanTerms">
                        <List>
                          {this.props.showInterestRate && (
                            <SplitListItem>
                              <span>{this.props.interestRateText}</span>
                              <span>{this.props.interestRate} %</span>
                            </SplitListItem>
                          )}
                          {this.props.showDownpayment && (
                            <SplitListItem>
                              <span>{this.props.downPaymentPerMonthText}</span>
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
                                <Text bold>{this.props.totalMonthlyText}</Text>
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
                    )}
                  </Layout>
                </LayoutItem>
                <LayoutItem area="right">
                  <Layout>
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
                  </Layout>
                </LayoutItem>

                <LayoutItem area="button">
                  {this.props.isLoading ? (
                    <Loading variant={"buttonLoading"} />
                  ) : (
                    <Button onClick={this.props.onClick}>Neste</Button>
                  )}
                </LayoutItem>

                <LayoutItem area="footer">
                  <Box variant="priceExample" size="mediumPlus">
                    <Text variant="legalese">
                      {this.props.renderPriceExample
                        ? this.props.renderPriceExample()
                        : this.props.priceExampleText}
                    </Text>
                  </Box>
                </LayoutItem>
              </Layout>
            </form>
          </Wrapper>
        )}
      />
    )
  }
}

export default Calculator

Calculator.defaultProps = {
  buttonText: "Søk om lån",
  creditExplanationText:
    "Du betaler kun påløpte renter av beløpet du har brukt, resten betaler du når du selv ønsker.",
  defaultTerms: 6,
  defaultValue: 250000,
  downPaymentPerMonthText: "Nedbetaling månedlig",
  headingText: "Se hva lånet koster",
  interestRate: 12.9,
  interestRateText: "Rente",
  loanDurationLabel: "Nedbetalingstid",
  maxValue: 1000000,
  minValue: 10000,
  priceExampleText:
    "Lånet gis med fastrente i hele lånets løpetid. Priseksempel: 500 000 over 6 mnd, eff. rente 11,56 % kostnader 26 232, totalt 526 232.",
  productType: "PRODUCT_LOAN",
  showDownpayment: true,
  showInterestRate: true,
  showMonthlyFees: true,
  showTotalMonthly: true,
  startFee: 0,
  termFee: 3000,
  termValues: [6, 12, 18, 24, 36],
  termsValuesToString: item =>
    item >= 12 ? (item / 12).toPrecision(2) + " år" : item + " mnd",
  totalMonthlyText: "Totalt månedlig",
  valueLabel: "Ønsket lånebeløp",
  emailLabel: "Epost",
  emailPlaceholder: "mail@mail.com",
  nameLabel: "Navn",
  namePlaceholder: "Navn navnesen",
  phoneLabel: "Telefonnummer",
  phonePlaceholder: "xxx xx xxx"
}

Calculator.propTypes = {
  buttonText: PropTypes.string,
  creditExplanationText: PropTypes.string,
  defaultTerms: PropTypes.any,
  defaultValue: PropTypes.number,
  downPaymentPerMonthText: PropTypes.string,
  errorTerms: PropTypes.any,
  errorValueRequired: PropTypes.any,
  errorValueTooHigh: PropTypes.any,
  errorValueTooLow: PropTypes.any,
  headingText: PropTypes.string,
  interestRate: PropTypes.number,
  interestRateText: PropTypes.string,
  loanDurationLabel: PropTypes.string,
  maxValue: PropTypes.number,
  minValue: PropTypes.number,
  onClick: PropTypes.any,
  onValidated: PropTypes.any,
  priceExampleText: PropTypes.string,
  productType: PropTypes.string,
  renderPriceExample: PropTypes.func,
  showDownpayment: PropTypes.bool,
  showInterestRate: PropTypes.bool,
  showMonthlyFees: PropTypes.bool,
  showTotalMonthly: PropTypes.bool,
  startFee: PropTypes.any,
  termFee: PropTypes.number,
  termValues: PropTypes.array,
  termsValuesToString: PropTypes.func,
  totalMonthlyText: PropTypes.string,
  valueLabel: PropTypes.string,
  emailLabel: PropTypes.string,
  emailPlaceholder: PropTypes.string,
  errorEmailInvalid: PropTypes.string,
  errorEmailRequired: PropTypes.string,
  errorNameRequired: PropTypes.string,
  errorPhoneNumberRequired: PropTypes.string,
  nameLabel: PropTypes.string,
  namePlaceholder: PropTypes.string,
  phoneLabel: PropTypes.string,
  phonePlaceholder: PropTypes.string
}
