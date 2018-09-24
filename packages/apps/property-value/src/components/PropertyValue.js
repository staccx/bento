import React, { Component } from "react"
import { inject, observer } from "mobx-react"
import { formatCurrency } from "@staccx/formatting"
import { Text, Wrapper, List, SplitListItem, Box, Loading } from "@staccx/base"
import Map from "./Map"

@inject("store")
@observer
class PropertyValue extends Component {
  render() {
    const { property, isLoading } = this.props.store
    if (isLoading) {
      return <Loading />
    }
    if (!property) {
      return <div>No property</div>
    }

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
