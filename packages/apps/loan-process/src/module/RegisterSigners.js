import React from "react"
import { Wrapper } from "@staccx/base"
import { removeWhitespace } from "@staccx/formatting"
import styled from "styled-components"
import SystemText from "../../components/SystemText"
import { Heading, Lead, PaddingVertical, TileBox } from "../../Styles"
import Signers from "../../components/Tables/SignerTable"
import Button from "../../components/button/Button"
import withLoanApplication from "../../hoc/withLoanApplication"
import withTasks from "../../hoc/withTasks"
import { toSystemText } from "../../utils/toSystemText"
import { spacing } from "@staccx/theme"

const nanoid = require("nanoid")

class RegisterSigners extends React.Component {
  constructor() {
    super()

    this.handleSignerChange = this.handleSignerChange.bind(this)
    this.complete = this.complete.bind(this)
    this.toggleRow = this.toggleRow.bind(this)
    this.initState = this.initState.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleNationalIdChange = this.handleNationalIdChange.bind(this)
    this.handleNameIdChange = this.handleNameIdChange.bind(this)
    this.handleValidation = this.handleValidation.bind(this)
    this.changeProp = this.changeProp.bind(this)
    this.addPerson = this.addPerson.bind(this)

    this.state = {
      signers: null,
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
    if (this.state.signers === null) {
      const { loanApplication } = props
      if (loanApplication) {
        const { application } = loanApplication
        if (application) {
          if (
            application.data &&
            application.data.authorization.authorizationPerson.length
          ) {
            let signers = {}
            application.data.authorization.authorizationPerson.map(person => {
              signers[person.id] = {
                id: person.id,
                checked: false,
                email: "",
                nationalId: "",
                name: person.name,
                positions: person.positions,
                isValid: false
              }
            })
            this.setState({ signers })
          }
        }
      }
    }
  }

  changeProp(id, prop, value) {
    this.setState(
      {
        signers: {
          ...this.state.signers,
          [id]: {
            ...this.state.signers[id],
            [prop]: value
          }
        },
        showErrors: false
      },
      this.handleSignerChange
    )
  }

  toggleRow(id) {
    this.changeProp(id, "checked", !this.state.signers[id].checked)
  }

  handleEmailChange(event, id) {
    this.changeProp(id, "email", event.target.value)
  }

  handleNationalIdChange(event, id) {
    this.changeProp(id, "nationalId", removeWhitespace(event.target.value))
  }

  handleNameIdChange(event, id) {
    this.changeProp(id, "name", event.target.value)
  }

  handleValidation(id, isValid) {
    if (this.state.signers[id].isValid !== isValid) {
      setTimeout(() => this.changeProp(id, "isValid", isValid))
    }
  }

  handleSignerChange() {
    this.props.setSigners(this.state.signers)
  }

  addPerson() {
    const id = nanoid()
    this.setState({
      signers: {
        ...this.state.signers,
        [id]: {
          checked: true,
          email: "",
          nationalId: "",
          positions: [],
          name: toSystemText("NEW_PERSON", "Ny person"),
          id,
          custom: true,
          isValid: false
        }
      }
    })
  }

  complete() {
    const task = this.props.taskReducer[
      this.props.taskTypes.TASK_TYPE_REGISTER_SIGNERS
    ]
    if (!task) {
      console.warn("no task. Why are you here?")
      return
    }
    const signers = Object.keys(this.props.loanApplication.signers)
      .map(key => {
        const person = this.props.loanApplication.signers[key]
        const { positions, custom, checked, ...props } = person
        if (checked) {
          return {
            ...props
          }
        }
      })
      .filter(p => p)

    const isValid =
      signers.length > 0 &&
      signers.every(signer => {
        return signer.isValid
      })

    if (isValid) {
      this.props
        .completeTask(task, { signers })
        .then(console.log)
        .catch(console.error)
    } else {
      this.setState({ showErrors: true })
    }
  }

  render() {
    const { application } = this.props.loanApplication
    if (!application || !application.data) {
      return null
    }

    return (
      <Wrapper size="medium" breakout>
        <Heading>
          <SystemText systemKey="WHO_TO_SIGN" />
        </Heading>
        <Lead>
          <SystemText systemKey="REGISTER_SIGNERS_LEAD" />
          <p>
            <em>{application.data.authorization.signatureText}</em>
          </p>
        </Lead>
        <TileBox>
          <PaddingVertical>
            <Signers
              showErrors={this.state.showErrors}
              onValidated={this.handleValidation}
              signers={this.state.signers}
              onRowChanged={this.toggleRow}
              onEmailChange={this.handleEmailChange}
              onNationalIdChange={this.handleNationalIdChange}
              onNameChange={this.handleNameIdChange}
            />
          </PaddingVertical>
          <StyledButton variant={"subtle"} onClick={this.addPerson}>
            + <SystemText systemKey="ADD_PERSON" />
          </StyledButton>
        </TileBox>
        <Button onClick={this.complete}>
          <SystemText systemKey="CONTINUE_NOW" />
        </Button>
      </Wrapper>
    )
  }
}

const StyledButton = styled(Button)`
  margin-left: ${spacing.medium};
  margin-bottom: ${spacing.medium};
`

export default withTasks(withLoanApplication(RegisterSigners))
