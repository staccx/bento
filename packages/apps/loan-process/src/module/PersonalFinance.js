import React from "react"
import PropTypes from "prop-types"
import { withFormik } from "formik"
import styled from "styled-components"
import {
  Wrapper,
  Input,
  Label,
  RadioPill,
  RadioPillItem,
  SelectSimple,
  CurrencyInput,
  Button,
  List,
  Box,
  Heading,
  Layout,
  LayoutItem
} from "@staccx/base"
import ValidationError from "./replace/ValidationError"
import Tile from "./replace/Tile"
import { spacing, color } from "@staccx/theme"
import relationshipStatus, {
  hasPartner,
  RELATIONSHIP_STATUS_MARRIED
} from "./constants/relationshipStatus"
const Yup = require("yup")

const Form = props => {
  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit
  } = props

  return (
    <form onSubmit={handleSubmit}>
      <Wrapper breakout>
        <Heading variant="stepHeading">{props.headingText}</Heading>
        <Box variant="actionBox">
          <Box variant="largeForm">
            <div>
              <Heading level={2} variant="formSection">
                {props.headingPersonaliaText}
              </Heading>
              <Layout variant="formElements">
                <LayoutItem>
                  <Input
                    label={props.postNumberLabelText}
                    id="postalCode"
                    type="number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.postalCode && (
                    <ValidationError>{errors.postalCode}</ValidationError>
                  )}
                </LayoutItem>
                <LayoutItem>
                  <SelectSimple
                    label="Sivilstatus"
                    placeholder="Velg..."
                    id="relationshipStatus"
                    value={values.relationshipStatus}
                    onChange={handleChange}
                  >
                    {relationshipStatus.map(status => (
                      <option value={status.value} key={status.key}>
                        {props.renderRelationshipOption(status.key)}
                      </option>
                    ))}
                  </SelectSimple>
                  {errors.relationshipStatus && (
                    <ValidationError>
                      {errors.relationshipStatus}
                    </ValidationError>
                  )}
                </LayoutItem>
                <LayoutItem>
                  <Label>
                    <span>{props.peopleUnder18Text}</span>
                  </Label>
                  <RadioPill
                    group={"numberOfChildren"}
                    variant={"numberOfChildren"}
                    onChange={handleChange}
                  >
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
                  {errors.numberOfChildren && (
                    <ValidationError>{errors.numberOfChildren}</ValidationError>
                  )}
                </LayoutItem>
              </Layout>
            </div>

            <div>
              <Heading level={2} variant="formSection">
                {props.headingIncomeAndExpensesText}
              </Heading>
              <Layout variant="formElements">
                {values.relationshipStatus &&
                  hasPartner(values.relationshipStatus) && (
                    <LayoutItem>
                      <CurrencyInput
                        label={props.spouseSalaryLabelText}
                        placeholder="0"
                        id="incomeOfSpouse"
                        value={values.incomeOfSpouse}
                        locale={"nb"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.incomeOfSpouse && (
                        <ValidationError>
                          {errors.incomeOfSpouse}
                        </ValidationError>
                      )}
                    </LayoutItem>
                  )}
                <LayoutItem>
                  <CurrencyInput
                    label={props.salaryLabelText}
                    placeholder="0"
                    id="income"
                    value={values.income}
                    locale={"nb"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.income && (
                    <ValidationError>{errors.income}</ValidationError>
                  )}
                </LayoutItem>
                <LayoutItem>
                  <CurrencyInput
                    label={props.salaryMonthlyText}
                    placeholder="0"
                    id="monthlySalary"
                    value={values.monthlySalary}
                    locale={"nb"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.monthlySalary && (
                    <ValidationError>{errors.monthlySalary}</ValidationError>
                  )}
                </LayoutItem>
                <LayoutItem>
                  <CurrencyInput
                    label={props.mortgageText}
                    placeholder="0"
                    id="mortgageTotal"
                    value={values.mortgageTotal}
                    locale={"nb"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.mortgageTotal && (
                    <ValidationError>{errors.mortgageTotal}</ValidationError>
                  )}
                </LayoutItem>
                <LayoutItem>
                  <CurrencyInput
                    label={props.otherLoansTotalText}
                    placeholder="0"
                    id="otherLoansTotal"
                    value={values.otherLoansTotal}
                    locale={"nb"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.otherLoansTotal && (
                    <ValidationError>{errors.otherLoansTotal}</ValidationError>
                  )}
                </LayoutItem>
                <LayoutItem>
                  <CurrencyInput
                    label={props.expensesRentText}
                    placeholder="0"
                    id="monthlyRentAndExpenses"
                    value={values.monthlyRentAndExpenses}
                    locale={"nb"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.monthlyRentAndExpenses && (
                    <ValidationError>
                      {errors.monthlyRentAndExpenses}
                    </ValidationError>
                  )}
                </LayoutItem>
              </Layout>
            </div>
          </Box>
        </Box>
        <Button type="submit" onClick={() => null} disabled={isSubmitting}>
          {props.renderButtonContent()}
        </Button>
      </Wrapper>
    </form>
  )
}

const PersonalFinance = withFormik({
  mapPropsToValues: props => {
    return {
      relationshipStatus: props.relationshipStatus, // [ married, partner, divorced, single, widow, separated ]
      numberOfChildren: props.numberOfChildren,
      incomeOfSpouse: props.incomeOfSpouse,
      income: props.income,
      monthlySalary: props.monthlySalary,
      monthlyRentAndExpenses: props.monthlyRentAndExpenses,
      postalCode: props.postalCode,
      mortgageTotal: props.mortgageTotal,
      otherLoansTotal: props.otherLoansTotal
    }
  },
  validationSchema: props =>
    Yup.object().shape({
      postalCode: Yup.number()
        .nullable()
        .min(1000)
        .max(9999)
        .required(props.postNumberError),
      income: Yup.number()
        .nullable()
        .required(props.salaryError),
      numberOfChildren: Yup.number()
        .nullable()
        .required(props.childrenError),
      mortgageTotal: Yup.number()
        .nullable()
        .required(props.mortgageError),
      otherLoansTotal: Yup.number()
        .nullable()
        .required(props.otherLoansError),
      monthlySalary: Yup.number()
        .nullable()
        .required(props.monthlySalaryError),
      incomeOfSpouse: Yup.number().when(
        "relationshipStatus",
        relationshipStatus => {
          return hasPartner(relationshipStatus)
            ? Yup.number()
                .nullable()
                .required(props.spouseSalaryError)
            : Yup.mixed()
        }
      ),
      monthlyRentAndExpenses: Yup.number()
        .nullable()
        .required(props.expensesRentError),
      relationshipStatus: Yup.string()
        .nullable()
        .required("need status")
    }),

  handleSubmit: (values, { setSubmitting, props }) => {
    setTimeout(() => {
      setSubmitting(false)
      if (props.onValidated) {
        props.onValidated(values)
      }
    }, 200)
  }
})(Form)

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
  renderButtonContent: () => "Ok",
  renderRelationshipOption: option => option,
  relationshipStatus: undefined,
  headingText: "Informasjon om deg"
}

export default PersonalFinance
