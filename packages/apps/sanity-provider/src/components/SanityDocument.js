import React, { Component } from "react"
import PropTypes from "prop-types"
import { BaseSanityQuery } from "./SanityQuery"
import { Consumer } from "../context"
import SanityQueryHelper from "sanity-query-helper"

class SanityDocument extends Component {
  componentWillMount() {
    const { id, context, filter, pick } = this.props

    let helper = new SanityQueryHelper({
      sanityOptions: context.helper.sanityOptions
    })
      .withFilter("_id")
      .equalTo(`"${id}"`)
    if (filter) {
      helper = helper.doCompare(filter)
    }
    if (pick) {
      helper = helper.pick(pick)
    }

    context.queryHelper(helper, id)
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
  context: PropTypes.any,
  filter: PropTypes.string,
  id: PropTypes.string.isRequired,
  pick: PropTypes.string
}

export default BaseSanityQuery(SanityDocument)
