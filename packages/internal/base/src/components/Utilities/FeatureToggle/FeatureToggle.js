import React from "react"
import PropTypes from "prop-types"

/**
 * @class
 * @description Feature toggle for components.
 * @todo Create preview
 */
class FeatureToggle extends React.Component {
  constructor(props, context) {
    super(props, context)

    const query =
      '*[_type == "client" && name == $name] {features[]{feature->,...}}'
    const params = { name: props.client }
    props.sanityClient.fetch(query, params).then(result => {
      if (!result || !result.length) {
        return null
      }
      console.log(result)
      const client = result[0]
      console.log(client, props.feature)
      const feature = client.features.find(
        f => f.feature.name === props.feature
      )
      console.log(feature)
      if (feature) {
        console.log("found feature", feature)
        this.setState({ show: !!feature[props.environment] })
      }
    })

    this.state = {
      show: false
    }
  }

  render() {
    const type = typeof this.props.children

    if (type === "function") {
      // If render props, send state and let client handle it
      return this.props.children({ ...this.state })
    }

    const { show } = this.state
    if (!show) {
      return null
    }
    return this.props.children
  }
}

FeatureToggle.propTypes = {
  /**
   * React element or render prop
   * Render prop will return the state, so the decision to not render is with the app
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  /**
   * Client in the cms
   * @example Aprila
   */
  client: PropTypes.string.isRequired,
  /**
   * NODE_ENV should be used here
   */
  environment: PropTypes.oneOf(["dev", "staging", "production"]),
  /**
   * Name of feature. This is defined in Sanity and must match
   * @example "savings-account"
   */
  feature: PropTypes.string.isRequired,
  /**
   * Sanity client to be used for fetching the feature
   * Must be @sanity/client
   */
  sanityClient: PropTypes.any.isRequired
}

FeatureToggle.defaultProps = {
  environment: "production"
}

export default FeatureToggle
