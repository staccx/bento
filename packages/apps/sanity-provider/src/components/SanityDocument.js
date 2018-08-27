import React, { Component } from "react"
import PropTypes from "prop-types"
import { BaseSanityQuery } from "./SanityQuery"
import { Consumer } from "../context"

class SanityDocument extends Component {
  componentWillMount() {
    const { id, context } = this.props

    context.queryHelper(context.helper.withFilter("_id").equalTo(`"${id}"`), id)
  }

  render() {
    const { id } = this.props
    return (
      <Consumer>
        {({ results }) => {
          const result = results[id]

          let document = null
          if (result) {
            document = result[0]
          }

          return this.props.children({ document })
        }}
      </Consumer>
    )
  }
}

SanityDocument.propTypes = {
  children: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}

export default BaseSanityQuery(SanityDocument)
