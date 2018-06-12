import React from "react"
import PropTypes from "prop-types"
import { ExpandListItem, List } from "@staccx/base"
import Operations from "./Operations"
import Responses from "./Responses"

class Path extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      operations: Object.keys(props.path).map(key => props.path[key]),
    }
  }

  componentWillMount() {}

  render() {
    const { name } = this.props

    return (
      <div>
        <List>
          <ExpandListItem title={name}>
            <List>
              <Operations operations={this.state.operations} />
            </List>
          </ExpandListItem>
        </List>
      </div>
    )
  }
}

export default Path

Path.propTypes = {
  name: PropTypes.string,
  path: PropTypes.object
}
