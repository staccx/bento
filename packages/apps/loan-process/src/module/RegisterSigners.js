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
  SplitListItem,
  Wrapper,
  Alert,
  theming,
  Loading
} from "@staccx/base"
import { formatName, removeWhitespace } from "@staccx/formatting"
import styled from "styled-components"
import { Field, FieldArray, Form, Formik } from "formik"
import { norwegian } from "national-id"
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
      <React.Fragment>
        <Wrapper size="medium" variant="mediumForm">
          <Layout rowGap="small" paddingBottom="large">
            <Heading variant="stepHeading" level={1}>
              {this.props.headingText}
            </Heading>
            <Box variant="lead">
              {this.props.leadText}
              <p>
                <strong>{this.props.signatureText}</strong>
              </p>
            </Box>
          </Layout>
        </Wrapper>
        <Wrapper size="small" variant="mediumForm">
          <Formik
            initialValues={{
              signers: this.state.signers
            }}
            validationSchema={validationSchema}
            onSubmit={this.onSubmit}
            render={({ values, touched, errors, setFieldValue }) => {
              return (
                <Form>
                  <Layout>
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
                                    <Field
                                      render={({ field }) => (
                                        <CheckBox
                                          group={`signer.${index}`}
                                          id={`signers.${index}.checked`}
                                          {...field}
                                          defaultChecked={signer.checked}
                                        >
                                          {signer.isUserAdded
                                            ? this.props.newPersonDefaultName
                                            : formatName(signer.name)}
                                        </CheckBox>
                                      )}
                                      name={`signers.${index}.checked`}
                                    />

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
                                  </SplitListItem>
                                  {signer.checked && (
                                    <li>
                                      <Box variant="signerFields">
                                        <Wrapper size="form">
                                          <Layout>
                                            {signer.isUserAdded && (
                                              <LayoutItem>
                                                <Field
                                                  render={({ field }) => (
                                                    <Input
                                                      id={`signers.${index}.name`}
                                                      {...field}
                                                      placeholder="Navn"
                                                      label={
                                                        this.props
                                                          .newPersonDefaultNameLabel
                                                      }
                                                      value={null}
                                                      autoFocus
                                                    />
                                                  )}
                                                />
                                              </LayoutItem>
                                            )}
                                            <LayoutItem>
                                              <Field
                                                render={({ field }) => (
                                                  <NationalIdInput
                                                    id={`signers.${index}.nationalId`}
                                                    placeholder="12345678903"
                                                    label={"Fødselsnummer"}
                                                    onChange={e =>
                                                      setFieldValue(
                                                        `signers.${index}.nationalId`,
                                                        e.target.rawValue
                                                      )
                                                    }
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
                                                  <Alert
                                                    type="warning"
                                                    variant="error"
                                                  >
                                                    {
                                                      errors.signers[index]
                                                        .nationalId
                                                    }
                                                  </Alert>
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
                                                touched.signers[index]
                                                  .email && (
                                                  <Alert
                                                    type="warning"
                                                    variant="error"
                                                  >
                                                    {
                                                      errors.signers[index]
                                                        .email
                                                    }
                                                  </Alert>
                                                )}
                                            </LayoutItem>
                                          </Layout>
                                        </Wrapper>
                                      </Box>
                                    </li>
                                  )}
                                </React.Fragment>
                              ))}
                          </List>
                          <Box variant="addSignerBtn">
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
                              variant="add"
                            >
                              {this.props.addPersonText}
                            </Button>
                          </Box>
                        </div>
                      )}
                    />
                    <div>
                      {this.props.isLoading ? (
                        <Loading variant={"buttonLoading"} />
                      ) : (
                        <Button
                          type="submit"
                          onClick={() => this.setState({ showErrors: true })}
                        >
                          {this.props.continueText}
                        </Button>
                      )}
                    </div>
                  </Layout>
                </Form>
              )
            }}
          />
        </Wrapper>
      </React.Fragment>
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
  padding: ${theming.spacing.tiny()} ${theming.spacing.medium()};

  > * {
    flex-basis: 50%;
  }
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
  newPersonDefaultNameLabel: PropTypes.string,
  onComplete: PropTypes.func.isRequired,
  onSignerChange: PropTypes.func,
  people: PropTypes.array,
  signatureText: PropTypes.string,
  tableHeaderNameText: PropTypes.any,
  tableHeaderRoleText: PropTypes.any
}

RegisterSigners.defaultProps = {
  addPersonText: "Legg til person",
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
  newPersonDefaultNameLabel: "Fullt navn",
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
