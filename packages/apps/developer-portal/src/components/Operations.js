import React from "react"
import PropTypes from "prop-types"
import Operation from "./Operation"
import { List, ExpandListItem } from "@staccx/base"

class Operations extends React.Component {
  render() {
    return (
      <List>
        {Object.keys(this.props.operations).map(key => {
          const operation = this.props.operations[key]

          return (
            <ExpandListItem key={this.name + key} title={key}>
              <Operation key={operation.operationId} operation={operation} />
            </ExpandListItem>
          )
        })}
      </List>
    )
  }
}

export default Operations

Operations.propTypes = {
  operations: PropTypes.object
}
