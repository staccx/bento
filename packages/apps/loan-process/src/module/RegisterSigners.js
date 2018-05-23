import React from "react"
import PropTypes from "prop-types"
import {
  Box,
  Button,
  CheckBox,
  Heading,
  Input,
  NationalIdInput,
  Paragraph,
  Text,
  Wrapper,
  List,
  SplitListItem
} from "@staccx/base"
import { removeWhitespace, formatName } from "@staccx/formatting"
import styled, { keyframes } from "styled-components"
import { Field, FieldArray, Form, Formik } from "formik"
import Yup from "yup"
import { color, spacing } from "@staccx/theme"
import { norwegian } from "national-id"

import ValidationError from "./replace/ValidationError"

class RegisterSigners extends React.Component {
  constructor() {
    super()

    this.handleSignerChange = this.handleSignerChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.initState = this.initState.bind(this)

    this.state = {
      signers: []
    }
  }

  componentWillMount() {
    this.initState(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.initState(nextProps)
  }

  initState(props) {
    if (!this.state.signers.length) {
      this.setState({
        signers: props.people.map(person => ({
          id: person.id,
          checked: false,
          email: "",
          nationalId: "",
          name: person.name,
          positions: person.positions
        }))
      })
    }
  }

  handleSignerChange() {
    if (this.props.onSignerChange) {
      this.props.onSignerChange(this.state.signers)
    }
  }

  onSubmit(values, errors) {
    console.log("errors", errors)
    this.props.onComplete(values)
  }

  render() {
    const signerValidationSchema = Yup.object().shape({
      email: Yup.string()
        .email(this.props.errorEmailInvalidText)
        .required(this.props.errorEmailRequiredText),
      nationalId: Yup.string()
        .test(
          "nationalId",
          this.props.errorNationalIdInvalidText,
          (val, other) => {
            return norwegian.isValid(removeWhitespace(val))
          }
        )
        .required(this.props.errorNationalIdRequiredText)
    })

    const validationSchema = Yup.object().shape({
      signers: Yup.array().of(signerValidationSchema)
    })

    return (
      <Wrapper size="medium" breakout>
        <Heading variant="centered" level={1}>
          {this.props.headingText}
        </Heading>

        <Box variant="tileBox">
          <Box variant="paddingVertical">
            <Paragraph variant="lead">
              {this.props.leadText}
              <em>{this.props.signatureText}</em>
            </Paragraph>
            <SplitItem>
              <strong>{this.props.tableHeaderNameText}</strong>
              <strong>{this.props.tableHeaderRoleText}</strong>
            </SplitItem>

            <Formik
              initialValues={{
                signers: this.state.signers
              }}
              validationSchema={validationSchema}
              onSubmit={this.onSubmit}
              render={({ values, errors, submitCount }) => (
                <Form>
                  <FieldArray
                    name="signers"
                    render={({ insert, remove, push }) => (
                      <div>
                        {values.signers.length > 0 &&
                          values.signers.map((signer, index) => (
                            <List>
                              <SplitListItem variant="split5050" key={index}>
                                <Field
                                  render={({ field }) => (
                                    <CheckBox
                                      group={`signer.${index}`}
                                      id={`signers.${index}.checked`}
                                      {...field}
                                      defaultChecked={signer.checked}
                                    >
                                      {formatName(signer.name)}
                                    </CheckBox>
                                  )}
                                  name={`signers.${index}.checked`}
                                />
                                <SignerRoles>
                                  <span>
                                    {signer.positions.map(signer => (
                                      <span key={signer}>{signer} </span>
                                    ))}
                                  </span>
                                  <Button
                                    type="button"
                                    className="secondary"
                                    variant="delete"
                                    onClick={() => remove(index)}
                                  >
                                    X
                                  </Button>
                                </SignerRoles>
                              </SplitListItem>
                              {signer.checked && (
                                <SignerFields variant="grayBox">
                                  <div className="col">
                                    <Field
                                      render={({ field }) => (
                                        <NationalIdInput
                                          id={`signers.${index}.nationalId`}
                                          placeholder="12345678903"
                                          label={"Fødselsnummer"}
                                          {...field}
                                        />
                                      )}
                                      name={`signers.${index}.nationalId`}
                                    />
                                    {errors.signers &&
                                      errors.signers[index] &&
                                      errors.signers[index].nationalId && (
                                        <ValidationError>
                                          {errors.signers[index].nationalId}
                                        </ValidationError>
                                      )}
                                  </div>
                                  <div className="col">
                                    <Field
                                      name={`signers.${index}.email`}
                                      render={({ field /* _form */ }) => (
                                        <Input
                                          label={"Email"}
                                          id={`signers.${index}.email`}
                                          {...field}
                                          placeholder="kari@nordmann.no"
                                        />
                                      )}
                                    />
                                    {errors.signers &&
                                      errors.signers[index] &&
                                      errors.signers[index].email && (
                                        <ValidationError>
                                          {errors.signers[index].email}
                                        </ValidationError>
                                      )}
                                  </div>
                                </SignerFields>
                              )}
                            </List>
                          ))}
                        <Box>
                          <Button
                            onClick={() =>
                              push({
                                checked: true,
                                email: "",
                                nationalId: "",
                                positions: [],
                                name: this.props.newPersonDefaultName
                              })
                            }
                          >
                            Legg til
                          </Button>
                        </Box>
                      </div>
                    )}
                  />
                  <Button type="submit">{this.props.continueText}</Button>
                </Form>
              )}
            />
          </Box>
        </Box>
      </Wrapper>
    )
  }
}

const SignerRoles = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SplitItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${spacing.tiny()} ${spacing.medium()};

  > * {
    flex-basis: 50%;
  }
`

const expand = keyframes`
  from {
    opacity: 0;
    transform: translateY(-12px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const SignerFields = styled(Box)`
  animation: ${props =>
    props.animated ? expand + " .2s linear forwards" : "none"};
  border-bottom: 1px solid ${color.line};
`

export default RegisterSigners

RegisterSigners.propTypes = {
  addPersonText: PropTypes.string,
  chooseText: PropTypes.string,
  continueText: PropTypes.string,
  errorEmailInvalidText: PropTypes.string,
  errorEmailRequiredText: PropTypes.string,
  errorNationalIdInvalidText: PropTypes.string,
  errorNationalIdRequiredText: PropTypes.string,
  headingText: PropTypes.string,
  leadText: PropTypes.string,
  newPersonDefaultName: PropTypes.string,
  onComplete: PropTypes.func.isRequired,
  onSignerChange: PropTypes.func,
  people: PropTypes.array,
  signatureText: PropTypes.string,
  tableHeaderNameText: PropTypes.any,
  tableHeaderRoleText: PropTypes.any
}

RegisterSigners.defaultProps = {
  addPersonText: "Legg til",
  chooseText: "Velg...",
  continueText: "Fortsett",
  errorEmailInvalidText: "Ikke gyldig epost",
  errorEmailRequiredText: "Epost må fylles ut",
  errorNationalIdInvalidText: "Fødselsnummer ikke gyldig",
  errorNationalIdRequiredText: "Fødselsnummer må fylles ut",
  headingText: "Registrèr signatører",
  leadText: "Lead text",
  newPersonDefaultName: "Ny person",
  people: [],
  signatureText: "Daglig leder ene og alene (tekst fra Brønnøysund"
}
