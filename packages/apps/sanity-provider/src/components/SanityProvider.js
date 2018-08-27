import PropTypes from "prop-types"
import React from "react"
import { Provider } from "../context"
import SanityQueryHelper from "sanity-query-helper"

class SanityProvider extends React.Component {
  constructor(props, context) {
    super(props, context)
    const helper = new SanityQueryHelper({
      sanityOptions: {
        projectId: props.projectId,
        dataset: props.dataset,
        useCdn: props.useCdn
      }
    })

    this.state = {
      helper,
      results: {}
    }

    this.send = this.send.bind(this)
    this.queryHelper = this.queryHelper.bind(this)
  }

  send(query, id) {
    this.state.helper.client
      .fetch(query)
      .then(result => {
        this.setState({
          results: {
            ...this.state.results,
            [id]: result
          }
        })
      })
      .catch(console.error)
  }

  queryHelper(helper, id) {
    helper.send().then(result =>
      this.setState({
        results: {
          ...this.state.results,
          [id]: result
        }
      })
    )
  }

  render() {
    return (
      <Provider
        value={{
          helper: this.state.helper,
          results: this.state.results,
          send: this.send,
          queryHelper: this.queryHelper
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export default SanityProvider

SanityProvider.propTypes = {
  children: PropTypes.any.isRequired,
  dataset: PropTypes.string.isRequired,
  projectId: PropTypes.string.isRequired,
  useCdn: PropTypes.bool
}

SanityProvider.defaultProps = {
  useCdn: true
}
