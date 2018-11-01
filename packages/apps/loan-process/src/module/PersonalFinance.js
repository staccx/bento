import React from "react"
import PropTypes from "prop-types"
import { Field, Formik } from "formik"
import {
  Alert,
  Wrapper,
  Label,
  RadioPill,
  RadioPillItem,
  SelectSimple,
  CurrencyInput,
  Button,
  Heading,
  Layout,
  LayoutItem,
  PostalCodeInput
} from "@staccx/base"
import relationshipStatus, { hasPartner } from "./constants/relationshipStatus"
const Yup = require("yup")

class PersonalFinance extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.handleValidated = this.handleValidated.bind(this)
  }

  componentWillMount() {
    const validateSchema = Yup.object().shape({
      postalCode: Yup.number()
        .min(1000)
        .max(9999)
        .required(this.props.postNumberError),
      income: Yup.number().required(this.props.salaryError),
      numberOfChildren: Yup.number()
        .transform(value => parseInt(value, 10))
        .required(this.props.childrenError),
      mortgageTotal: Yup.number().required(this.props.mortgageError),
      otherLoansTotal: Yup.number().required(this.props.otherLoansError),
      monthlySalary: Yup.number().required(this.props.monthlySalaryError),
      incomeOfSpouse: Yup.number().when(
        "relationshipStatus",
        relationshipStatus => {
          return hasPartner(relationshipStatus)
            ? Yup.number()
                .nullable()
                .required(this.props.spouseSalaryError)
            : Yup.mixed()
        }
      ),
      monthlyRentAndExpenses: Yup.number()
        .nullable()
        .required(this.props.expensesRentError),
      relationshipStatus: Yup.string()
        .nullable()
        .required("need status")
    })
    this.setState({ validateSchema })
  }

  handleValidated(values) {
    this.props.onValidated({
      ...values,
      income: parseInt(values.income, 10),
      monthlyRentAndExpenses: parseInt(values.monthlyRentAndExpenses, 10),
      monthlySalary: parseInt(values.monthlySalary, 10),
      mortgageTotal: parseInt(values.mortgageTotal, 10),
      otherLoansTotal: parseInt(values.otherLoansTotal, 10),
      numberOfChildren: parseInt(values.numberOfChildren, 10)
    })
  }

  render() {
    return (
      <Formik
        initialValues={{}}
        validationSchema={this.state.validateSchema}
        onSubmit={this.handleValidated}
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
              <Wrapper size="large">
                <Heading variant="stepHeading">
                  {this.props.headingText}
                </Heading>
              </Wrapper>
              <Wrapper size="form">
                <Layout>
                  <Heading level={2} variant="formSection">
                    {this.props.headingPersonaliaText}
                  </Heading>
                  <LayoutItem>
                    <Field
                      name={`postalCode`}
                      render={({ field }) => {
                        const { value, ...rest } = field
                        return (
                          <PostalCodeInput
                            id={"postalCode"}
                            label={this.props.postNumberLabelText}
                            {...rest}
                            type="tel"
                            onChange={({ postalCode }) => {
                              setFieldValue("postalCode", postalCode)
                            }}
                          />
                        )
                      }}
                    />
                    {touched.postalCode &&
                      errors.postalCode && (
                        <Alert variant="error" type="warning">
                          {errors.postalCode}
                        </Alert>
                      )}
                  </LayoutItem>
                  <LayoutItem>
                    <Field
                      name={`relationshipStatus`}
                      render={({ field }) => (
                        <SelectSimple
                          label="Sivilstatus"
                          id={"relationshipStatus"}
                          placeholder="Velg..."
                          value={values.relationshipStatus}
                          {...field}
                        >
                          {relationshipStatus.map(status => (
                            <option value={status.value} key={status.key}>
                              {this.props.renderRelationshipOption(status.key)}
                            </option>
                          ))}
                        </SelectSimple>
                      )}
                    />
                    {touched.relationshipStatus &&
                      errors.relationshipStatus && (
                        <Alert variant="error" type="warning">
                          {errors.relationshipStatus}
                        </Alert>
                      )}
                  </LayoutItem>
                  <LayoutItem>
                    <Label variant="radioPill">
                      {this.props.peopleUnder18Text}
                    </Label>
                    <Field
                      name={`numberOfChildren`}
                      render={({ field }) => (
                        <RadioPill group={"numberOfChildren"} full {...field}>
                          {Array.apply(null, Array(5 + 1))
                            .map((n, i) => i)
                            .map(val => (
                              <RadioPillItem
                                key={val}
                                id={val}
                                value={val}
                                group={"numberOfChildren"}
                                defaultChecked={values.numberOfChildren === val}
                              >
                                {val}
                              </RadioPillItem>
                            ))}
                        </RadioPill>
                      )}
                    />
                    {touched.numberOfChildren &&
                      errors.numberOfChildren && (
                        <Alert variant="error" type="warning">
                          {errors.numberOfChildren}
                        </Alert>
                      )}
                  </LayoutItem>

                  <Heading level={2} variant="formSection">
                    {this.props.headingIncomeAndExpensesText}
                  </Heading>
                  {values.relationshipStatus &&
                    hasPartner(values.relationshipStatus) && (
                      <LayoutItem>
                        <Field
                          name={`incomeOfSpouse`}
                          render={({ field }) => (
                            <CurrencyInput
                              id={"incomeOfSpouse"}
                              label={this.props.spouseSalaryLabelText}
                              placeholder="0"
                              locale={"nb"}
                              {...field}
                            />
                          )}
                        />
                        {touched.incomeOfSpouse &&
                          errors.incomeOfSpouse && (
                            <Alert variant="error" type="warning">
                              {errors.incomeOfSpouse}
                            </Alert>
                          )}
                      </LayoutItem>
                    )}
                  <LayoutItem>
                    <Field
                      name={`income`}
                      render={({ field }) => (
                        <CurrencyInput
                          id={"incoincomemeOfSpouse"}
                          label={this.props.salaryLabelText}
                          placeholder="0"
                          locale={"nb"}
                          {...field}
                        />
                      )}
                    />
                    {touched.income &&
                      errors.income && (
                        <Alert variant="error" type="warning">
                          {errors.income}
                        </Alert>
                      )}
                  </LayoutItem>
                  <LayoutItem>
                    <Field
                      name={`monthlySalary`}
                      render={({ field }) => (
                        <CurrencyInput
                          id={"monthlySalary"}
                          label={this.props.salaryMonthlyText}
                          placeholder="0"
                          locale={"nb"}
                          {...field}
                        />
                      )}
                    />
                    {touched.monthlySalary &&
                      errors.monthlySalary && (
                        <Alert variant="error" type="warning">
                          {errors.monthlySalary}
                        </Alert>
                      )}
                  </LayoutItem>
                  <LayoutItem>
                    <Field
                      name={`mortgageTotal`}
                      render={({ field }) => (
                        <CurrencyInput
                          id={"mortgageTotal"}
                          label={this.props.mortgageText}
                          placeholder="0"
                          locale={"nb"}
                          {...field}
                        />
                      )}
                    />
                    {touched.mortgageTotal &&
                      errors.mortgageTotal && (
                        <Alert variant="error" type="warning">
                          {errors.mortgageTotal}
                        </Alert>
                      )}
                  </LayoutItem>
                  <LayoutItem>
                    <Field
                      name={`otherLoansTotal`}
                      render={({ field }) => (
                        <CurrencyInput
                          id={"otherLoansTotal"}
                          label={this.props.otherLoansTotalText}
                          placeholder="0"
                          locale={"nb"}
                          {...field}
                        />
                      )}
                    />
                    {touched.otherLoansTotal &&
                      errors.otherLoansTotal && (
                        <Alert variant="error" type="warning">
                          {errors.otherLoansTotal}
                        </Alert>
                      )}
                  </LayoutItem>
                  <LayoutItem>
                    <Field
                      name={`monthlyRentAndExpenses`}
                      render={({ field }) => (
                        <CurrencyInput
                          id={"monthlyRentAndExpenses"}
                          label={this.props.expensesRentText}
                          placeholder="0"
                          locale={"nb"}
                          {...field}
                        />
                      )}
                    />
                    {touched.monthlyRentAndExpenses &&
                      errors.monthlyRentAndExpenses && (
                        <Alert variant="error" type="warning">
                          {errors.monthlyRentAndExpenses}
                        </Alert>
                      )}
                  </LayoutItem>
                  <LayoutItem>
                    <Button
                      disabled={!isValid}
                      type="submit"
                      onClick={() => null}
                    >
                      {this.props.renderButtonContent()}
                    </Button>
                  </LayoutItem>
                </Layout>
              </Wrapper>
            </form>
          )
        }}
      />
    )
  }
}

PersonalFinance.propTypes = {
  errors: PropTypes.any,
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  headingText: PropTypes.string,
  headingIncomeAndExpensesText: PropTypes.string,
  postNumberError: PropTypes.string,
  salaryError: PropTypes.string,
  childrenError: PropTypes.string,
  mortgageError: PropTypes.string,
  otherLoansError: PropTypes.string,
  spouseSalaryError: PropTypes.string,
  expensesRentError: PropTypes.string,
  isSubmitting: PropTypes.bool,
  onValidated: PropTypes.func.isRequired,
  otherLoansTotalText: PropTypes.string,
  peopleUnder18Text: PropTypes.string,
  postNumberLabelText: PropTypes.string,
  renderButtonContent: PropTypes.func.isRequired,
  renderRelationshipOption: PropTypes.func.isRequired,
  salaryLabelText: PropTypes.string,
  salaryMonthlyText: PropTypes.string,
  spouseSalaryLabelText: PropTypes.string,
  submitCount: PropTypes.number,
  values: PropTypes.any
}

PersonalFinance.defaultProps = {
  expensesRentText: "Leieutgifter",
  headingIncomeAndExpensesText: "Lønn og utgifter",
  headingPersonaliaText: "Personalia",
  mortgageText: "Gjeld",
  otherLoansTotalText: "Andre lån",
  peopleUnder18Text: "Personer under 18 år",
  postNumberLabelText: "Postnummer",
  salaryLabelText: "Lønn",
  salaryMonthlyText: "Netto månedlig lønn",
  spouseSalaryLabelText: "Lønn partner",
  postNumberError: "Postnummer må fylles ut",
  salaryError: "Skriv lønn",
  childrenError: "Angi antall barn under 18",
  mortgageError: "Angi gjeld",
  otherLoansError: "Angi andre lån",
  spouseSalaryError: "Angi partners lønn",
  expensesRentError: "Angi leieutgifter",
  renderButtonContent: () => "Søk lån",
  renderRelationshipOption: option => option,
  relationshipStatus: undefined,
  headingText: "Informasjon om deg"
}

export default PersonalFinance
