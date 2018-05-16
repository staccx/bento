import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Text } from "@staccx/base"
import withLoanApplication from "../../hoc/withLoanApplication"
import SystemText from "../SystemText"
import SignInstance from "./SignInstance"

class Signers extends React.PureComponent {
  render() {
    if (!this.props.signers) {
      return null
    }

    const signers = Object.keys(this.props.signers)

    // TODO: Formik
    return (
      <SignerTable>
        <SignerTableHead>
          <tr>
            <FirstColumn>
              <Text variant="visuallyHidden">
                <SystemText systemKey="CHOOSE_WITH_DOTS" />
              </Text>
            </FirstColumn>
            <th>
              <SystemText systemKey="NAME" />
            </th>
            <th>
              <SystemText systemKey="ROLE" />
            </th>
          </tr>
        </SignerTableHead>
        <tbody>
          {signers.map(key => {
            const person = this.props.signers[key]
            return (
              <SignInstance
                key={key}
                person={person}
                onCheckChange={this.props.onRowChanged}
                onEmailChange={this.props.onEmailChange}
                onNationalIdChange={this.props.onNationalIdChange}
                onValidated={isValid =>
                  this.props.onValidated(person.id, isValid)
                }
                showErrors={this.props.showErrors}
              />
            )
          })}
        </tbody>
      </SignerTable>
    )
  }
}

const SignerTable = styled.table`
  width: 100%;
`

const SignerTableHead = styled.thead`
  text-align: left;
`

export const FirstColumn = styled.td`
  width: 32px;
  padding-left: 24px;
  padding-right: 12px;
  label {
    width: 24px;
    height: 24px;
  }
`

export default withLoanApplication(Signers)

Signers.propTypes = {
  onEmailChange: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onNationalIdChange: PropTypes.func.isRequired,
  onRowChanged: PropTypes.func.isRequired,
  signers: PropTypes.object.isRequired
}
