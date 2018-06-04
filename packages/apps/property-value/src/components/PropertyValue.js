import React, { Component } from "react"
// eslint-disable-next-line
import { inject, observer } from "mobx-react"
import { Heading, Text } from "@staccx/base"
import Map from "./Map"

@inject("store")
@observer
class PropertyValue extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    const { property, isLoading } = this.props.store
    if (isLoading) {
      return <div>IsLoading</div>
    }
    if (!property) {
      return <div>No property</div>
    }

    const { lat, lng, address } = property.details
    return (
      <div>
        <Map lat={lat} lng={lng} address={address} />
        <Heading>{address}</Heading>
        <Text>{property.value.toString()}</Text>
      </div>
    )
  }
}

export default PropertyValue
