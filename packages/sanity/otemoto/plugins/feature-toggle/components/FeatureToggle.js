import React, { Component } from "react"
import PropTypes from "prop-types"
// import { SanityProvider, SanityList } from "@staccx/sanity"

class FeatureToggle extends Component {
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
    const { show } = this.state
    if (!show) {
      return null
    }

    return this.props.children
  }
}

FeatureToggle.propTypes = {
  children: PropTypes.any,
  client: PropTypes.string.isRequired,
  environment: PropTypes.string,
  feature: PropTypes.string.isRequired,
  sanityClient: PropTypes.any.isRequired
}

export default FeatureToggle

FeatureToggle.defaultProps = {
  environment: "production"
}