import React, { Component } from "react"
// eslint-disable-next-line
import { inject, observer } from "mobx-react"
import { formatCurrency } from "@staccx/formatting"
import { Text, Wrapper, List, SplitListItem, Box } from "@staccx/base"
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
    console.log(property)

    const { lat, lng, address } = property.details
    return (
      <Wrapper>
        <Box size={"small"}>
          <Map lat={lat} lng={lng} address={address} />
          <List>
            <SplitListItem>
              <Text>{address}</Text>
              <Text>{formatCurrency(property.value)}</Text>
            </SplitListItem>
          </List>
        </Box>
      </Wrapper>
    )
  }
}

export default PropertyValue
