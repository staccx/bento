import React from "react"
import PropTypes from "prop-types"
import {
  Box,
  Button,
  CheckBox,
  Heading,
  Input,
  Layout,
  LayoutItem,
  List,
  NationalIdInput,
  Paragraph,
  SplitListItem,
  Wrapper
} from "@staccx/base"
import { formatName, removeWhitespace } from "@staccx/formatting"
import styled, { keyframes } from "styled-components"
import { Field, FieldArray, Form, Formik } from "formik"
import { color, spacing } from "@staccx/theme"
import { norwegian } from "national-id"
import ValidationError from "./replace/ValidationError"
const Yup = require("yup")

class RegisterSigners extends React.Component {
  constructor() {
    super()

    this.handleSignerChange = this.handleSignerChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.initState = this.initState.bind(this)

    this.state = {
      signers: [],
      showErrors: false
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
        signers: props.people.map((person, index) => ({
          id: person.id,
          checked: index === 0,
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

  onSubmit(values) {
    console.log(values)
    this.props.onComplete(
      values.signers.map(signer => ({
        nationalId: removeWhitespace(signer.nationalId),
        id: signer.id,
        email: signer.email
      }))
    )
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
        <Heading variant="stepHeading" level={1}>
          {this.props.headingText}
        </Heading>
        <Paragraph variant="lead">{this.props.leadText}</Paragraph>

        <Formik
          initialValues={{
            signers: this.state.signers
          }}
          validationSchema={validationSchema}
          onSubmit={this.onSubmit}
          render={({ values, touched, errors }) => {
            return (
              <Form>
                <Box variant="actionBox">
                  <Box variant="paddingVertical">
                    <Paragraph variant="formIntro">
                      {this.props.signatureText}
                    </Paragraph>
                    <SplitItem>
                      <strong>{this.props.tableHeaderNameText}</strong>
                      <strong>{this.props.tableHeaderRoleText}</strong>
                    </SplitItem>
                    <FieldArray
                      name="signers"
                      render={({ insert, remove, push }) => (
                        <div>
                          <List variant="topBorder">
                            {values.signers.length > 0 &&
                              values.signers.map((signer, index) => (
                                <React.Fragment key={index}>
                                  <SplitListItem
                                    variant="signerListItem"
                                    hasInput={!!signer.isUserAdded}
                                  >
                                    {signer.isUserAdded ? (
                                      <Field
                                        render={({ field }) => (
                                          <Box variant="inputContainer">
                                            <Input
                                              id={`signers.${index}.name`}
                                              {...field}
                                              placeholder="Navn"
                                              label={
                                                this.props.newPersonDefaultName
                                              }
                                              variant="clean"
                                              autoFocus
                                            />
                                            <Button
                                              type="button"
                                              className="secondary"
                                              variant="deleteSigner"
                                              isUserAdded
                                              onClick={() => remove(index)}
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                              >
                                                <path d="M10 0c-.52 0-1.06.18-1.44.56C8.18.94 8 1.48 8 2v1H2v2h1v16c0 1.64 1.36 3 3 3h12c1.64 0 3-1.36 3-3V5h1V3h-6V2c0-.52-.18-1.06-.56-1.44A2.03 2.03 0 0 0 14 0h-4zm0 2h4v1h-4V2zM5 5h14v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5zm2 3v11h2V8H7zm4 0v11h2V8h-2zm4 0v11h2V8h-2z" />
                                              </svg>
                                            </Button>
                                          </Box>
                                        )}
                                        name={`signers.${index}.name`}
                                      />
                                    ) : (
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
                                    )}
                                    {signer.isUserAdded ? (
                                      ""
                                    ) : (
                                      <SignerRoles>
                                        <span>
                                          {signer.positions.map(signer => (
                                            <span key={signer}>
                                              {signer.description}{" "}
                                            </span>
                                          ))}
                                        </span>
                                        <Button
                                          type="button"
                                          className="secondary"
                                          variant="deleteSigner"
                                          onClick={() => remove(index)}
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                          >
                                            <path d="M10 0c-.52 0-1.06.18-1.44.56C8.18.94 8 1.48 8 2v1H2v2h1v16c0 1.64 1.36 3 3 3h12c1.64 0 3-1.36 3-3V5h1V3h-6V2c0-.52-.18-1.06-.56-1.44A2.03 2.03 0 0 0 14 0h-4zm0 2h4v1h-4V2zM5 5h14v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5zm2 3v11h2V8H7zm4 0v11h2V8h-2zm4 0v11h2V8h-2z" />
                                          </svg>
                                        </Button>
                                      </SignerRoles>
                                    )}
                                  </SplitListItem>
                                  {signer.checked && (
                                    <li>
                                      <SignerFields variant="subtleBox">
                                        <Layout grid="form">
                                          <LayoutItem>
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
                                            {(this.state.showErrors ||
                                              values.signers[index]
                                                .nationalId) &&
                                              errors.signers &&
                                              errors.signers[index] &&
                                              errors.signers[index]
                                                .nationalId &&
                                              touched.signers &&
                                              touched.signers[index] &&
                                              touched.signers[index]
                                                .nationalId && (
                                                <ValidationError>
                                                  {
                                                    errors.signers[index]
                                                      .nationalId
                                                  }
                                                </ValidationError>
                                              )}
                                          </LayoutItem>
                                          <LayoutItem>
                                            <Field
                                              name={`signers.${index}.email`}
                                              render={({
                                                field /* _form */
                                              }) => (
                                                <Input
                                                  label={"E-post"}
                                                  id={`signers.${index}.email`}
                                                  {...field}
                                                  placeholder="kari@nordmann.no"
                                                />
                                              )}
                                            />
                                            {(this.state.showErrors ||
                                              values.signers[index]
                                                .nationalId) &&
                                              errors.signers &&
                                              errors.signers[index] &&
                                              errors.signers[index].email &&
                                              touched.signers &&
                                              touched.signers[index] &&
                                              touched.signers[index].email && (
                                                <ValidationError>
                                                  {errors.signers[index].email}
                                                </ValidationError>
                                              )}
                                          </LayoutItem>
                                        </Layout>
                                      </SignerFields>
                                    </li>
                                  )}
                                </React.Fragment>
                              ))}
                          </List>
                          <AddSignerContainer>
                            <Button
                              onClick={() =>
                                push({
                                  checked: true,
                                  email: "",
                                  nationalId: "",
                                  positions: [],
                                  name: "",
                                  isUserAdded: true
                                })
                              }
                              variant="addSigner"
                            >
                              {this.props.addPersonText}
                            </Button>
                          </AddSignerContainer>
                        </div>
                      )}
                    />
                  </Box>
                </Box>
                <Button
                  type="submit"
                  onClick={() => this.setState({ showErrors: true })}
                >
                  {this.props.continueText}
                </Button>
              </Form>
            )
          }}
        />
      </Wrapper>
    )
  }
}

const AddSignerContainer = styled.div`
  padding-top: ${spacing.small};
  padding-left: ${spacing.medium};
`

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
  addPersonText: "+ Legg til person",
  chooseText: "Velg...",
  continueText: "Fortsett",
  errorEmailInvalidText: "Ikke gyldig epost",
  errorEmailRequiredText: "Epost må fylles ut",
  errorNationalIdInvalidText: "Fødselsnummer ikke gyldig",
  errorNationalIdRequiredText: "Fødselsnummer må fylles ut",
  headingText: "Hvem skal signere?",
  leadText:
    "Avtalen må signeres av de som skal signere i henhold til selskapets vedtekter.",
  newPersonDefaultName: "Ny person",
  signatureText:
    "Daglig leder ene og alene (hentet fra Brønnøysundsregisteret)",
  tableHeaderNameText: "Navn",
  tableHeaderRoleText: "Rolle",
  onComplete: console.log,
  people: [
    {
      name: "Espen Thomassen Sæverud",
      positions: ["Daglig leder", "Styreformann"]
    }
  ]
}
