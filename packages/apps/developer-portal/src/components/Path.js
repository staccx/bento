import React from "react"
import PropTypes from "prop-types"
import { ExpandListItem, List } from "@staccx/base"
import Operations from "./Operations"

class Path extends React.Component {
  componentWillMount() {}

  render() {
    const { name, path } = this.props

    return (
      <div>
        <List>
          <ExpandListItem title={name}>
            <Operations operations={path} name={name} />
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
