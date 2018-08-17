import React, { Component } from "react"
import { Wrapper, Button, ItemGroup } from "@staccx/base"
import AddCustomerConsumer from "./AddCustomer.Consumer"
import AddCustomerBusiness from "./AddCustomer.Business"

class AddCustomer extends Component {
  constructor(...args) {
    super(...args)
    this.state = {
      customerType: "company"
    }
    this.setCustomerType = this.setCustomerType.bind(this)
  }

  setCustomerType(type) {
    this.setState({
      customerType: type
    })
  }

  render() {
    return (
      <Wrapper>
        <ItemGroup variant="customerType">
          <Button
            onClick={() => this.setCustomerType("company")}
            active={this.state.customerType === "company"}
            variant="customerType"
          >
            Bedrift
          </Button>
          <Button
            onClick={() => this.setCustomerType("consumer")}
            active={this.state.customerType === "consumer"}
            variant="customerType"
          >
            Privatkunde
          </Button>
        </ItemGroup>

        {this.state.customerType === "consumer" && <AddCustomerConsumer />}
        {this.state.customerType === "company" && <AddCustomerBusiness />}
      </Wrapper>
    )
  }
}

export default AddCustomer
