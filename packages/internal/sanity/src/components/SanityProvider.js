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
        useCdn: props.useCdn,
        withCredentials: props.withCredentials
      }
    })

    this.state = {
      helper,
      results: {}
    }
    this.requests = {}

    this.send = this.send.bind(this)
    this.queryHelper = this.queryHelper.bind(this)
  }

  send(query, id) {
    if (this.state.results[id] || this.requests[id]) {
      // Early out. Probably just the same component mounting again
      return
    }
    // reserve for other requests with same id
    this.requests[id] = true

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
    if (this.state.results[id] || this.requests[id]) {
      // Early out. Probably just the same component mounting again
      return
    }
    // reserve for other requests with same id
    this.requests[id] = true

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
  useCdn: PropTypes.bool,
  withCredentials: PropTypes.bool
}

SanityProvider.defaultProps = {
  useCdn: true,
  withCredentials: false
}
