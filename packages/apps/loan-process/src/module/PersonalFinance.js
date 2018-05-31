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
  Heading
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
        <Box variant="actionBox">
          <div>
            <Heading level={2}>{props.headingPersonaliaText}</Heading>
            <List variant="topBorder">
              <LI>
                <Input
                  label={props.postNumberLabelText}
                  id="postalCode"
                  type="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="clean"
                />
                {errors.postalCode && (
                  <ValidationError>{errors.postalCode}</ValidationError>
                )}
              </LI>
              <LI>
                <SelectSimple
                  label="Sivilstatus"
                  placeholder="Velg..."
                  id="relationshipStatus"
                  value={values.relationshipStatus}
                  onChange={handleChange}
                  variant="clean"
                >
                  {relationshipStatus.map(status => (
                    <option value={status.value} key={status.key}>
                      {props.renderRelationshipOption(status.key)}
                    </option>
                  ))}
                </SelectSimple>
                {errors.relationshipStatus && (
                  <ValidationError>{errors.relationshipStatus}</ValidationError>
                )}
              </LI>
              <LI>
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
              </LI>
            </List>
          </div>
          <Right>
            <Heading level={2}>{props.headingIncomeAndExpensesText}</Heading>
            <List variant="topBorder">
              {values.relationshipStatus &&
                hasPartner(values.relationshipStatus) && (
                  <LI>
                    <CurrencyInput
                      label={props.spouseSalaryLabelText}
                      placeholder="0"
                      id="incomeOfSpouse"
                      value={values.incomeOfSpouse}
                      locale={"nb"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      variant="clean"
                    />
                    {errors.incomeOfSpouse && (
                      <ValidationError>{errors.incomeOfSpouse}</ValidationError>
                    )}
                  </LI>
                )}
              <LI>
                <CurrencyInput
                  label={props.salaryLabelText}
                  placeholder="0"
                  id="income"
                  value={values.income}
                  locale={"nb"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="clean"
                />
                {errors.income && (
                  <ValidationError>{errors.income}</ValidationError>
                )}
              </LI>
              <LI>
                <CurrencyInput
                  label={props.salaryMonthlyText}
                  placeholder="0"
                  id="monthlySalary"
                  value={values.monthlySalary}
                  locale={"nb"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="clean"
                />
                {errors.monthlySalary && (
                  <ValidationError>{errors.monthlySalary}</ValidationError>
                )}
              </LI>
              <LI>
                <CurrencyInput
                  label={props.mortgageText}
                  placeholder="0"
                  id="mortgageTotal"
                  value={values.mortgageTotal}
                  locale={"nb"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="clean"
                />
                {errors.mortgageTotal && (
                  <ValidationError>{errors.mortgageTotal}</ValidationError>
                )}
              </LI>
              <LI>
                <CurrencyInput
                  label={props.otherLoansTotalText}
                  placeholder="0"
                  id="otherLoansTotal"
                  value={values.otherLoansTotal}
                  locale={"nb"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="clean"
                />
                {errors.otherLoansTotal && (
                  <ValidationError>{errors.otherLoansTotal}</ValidationError>
                )}
              </LI>
              <LI>
                <CurrencyInput
                  label={props.expensesRentText}
                  placeholder="0"
                  id="monthlyRentAndExpenses"
                  value={values.monthlyRentAndExpenses}
                  locale={"nb"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="clean"
                />
                {errors.monthlyRentAndExpenses && (
                  <ValidationError>
                    {errors.monthlyRentAndExpenses}
                  </ValidationError>
                )}
              </LI>
            </List>
          </Right>
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

const TileWithoutPadding = styled(Tile)`
  padding-top: 0;
  padding-bottom: 0;
`

const Right = styled.div`
  border-left: 1px solid ${color.line};
`

const LI = styled.li`
  &:not(:last-child) {
    border-bottom: 1px solid ${color.line};
  }
`

PersonalFinance.propTypes = {
  errors: PropTypes.any,
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
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
  relationshipStatus: undefined
}

export default PersonalFinance
