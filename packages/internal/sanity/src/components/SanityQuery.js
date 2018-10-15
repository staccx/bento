import PropTypes from "prop-types"
import React from "react"
import { Consumer } from "../context"

class SanityQuery extends React.Component {
  componentWillMount() {
    const { query, id, context } = this.props

    context.send(query, id)
  }
  render() {
    const { id } = this.props
    return (
      <Consumer>
        {({ results }) => {
          return this.props.children({ result: results[id] })
        }}
      </Consumer>
    )
  }
}

export const BaseSanityQuery = Component => props => (
  <Consumer>{context => <Component {...props} context={context} />}</Consumer>
)

SanityQuery.propTypes = {
  children: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired
}

export default BaseSanityQuery(SanityQuery)
