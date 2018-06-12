import React from "react"
import PropTypes from "prop-types"
import Path from "./Path"

class Paths extends React.Component {
  render() {
    return Object.keys(this.props.paths).map(key => (
      <Path key={key} path={this.props.paths[key]} name={key} />
    ))
  }
}

export default Paths

Paths.propTypes = {
  paths: PropTypes.object
}