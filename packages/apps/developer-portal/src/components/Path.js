import React from "react"
import PropTypes from "prop-types"
import { Text, ExpandListItem, List } from "@staccx/base"

class Path extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      operations: Object.keys(props.path)
    }
  }

  componentWillMount() {}

  render() {
    const { path, name } = this.props

    return (
      <div>
        <List>
          <ExpandListItem title={name}>
            <List>
              {this.state.operations.map(key => {
                const data = path[key]
                return (
                  <ExpandListItem key={data.operationId} title={key}>
                    <Text>{data.summary || " "}</Text>
                  </ExpandListItem>
                )
              })}
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