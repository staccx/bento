import React, { Component } from "react"
import { Heading, Text, Divider, Table, Paragraph, Select } from "@staccx/base"
import { VARIANT_DEFAULT } from "@staccx/theme"
import PropTypes from "prop-types"
import props from "@staccx/base/dist/lib/previews/props.json"
import { withTheme } from "styled-components"

class PreviewComponent extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      variant: VARIANT_DEFAULT
    }
  }

  render() {
    const { component } = this.props.component
    const componentProps = props[component.name]

    const data = Reflect.ownKeys(componentProps.props).map(key => {
      const prop = componentProps.props[key]
      const { type, defaultValue, required } = prop
      return {
        name: key,
        type,
        required,
        defaultValue
      }
    })

    console.log(this.props.theme)

    const variants = this.props.theme.hasOwnProperty(component.name)
      ? Reflect.ownKeys(this.props.theme[component.name]).map(key => ({
          name: key,
          value: this.props.theme[component.name][key]
        }))
      : []

    if (!variants.some(v => v.name === VARIANT_DEFAULT)) {
      variants.push({ name: VARIANT_DEFAULT, value: "" })
    }

    const themeProps = Reflect.ownKeys(component.themeProps).map(key => {
      const themeProp = component.themeProps[key]
      return themeProp
    })

    return (
      <div>
        <Heading>{this.props.component.title}</Heading>
        <Text>{this.props.component.description}</Text>

        <Divider />
        <Select
          items={variants}
          itemToString={item => item.name}
          itemToKey={item => item.name}
          onChange={value => this.setState({ variant: value.name })}
        />
        <Table data={data}>
          {({ item }) => (
            <React.Fragment>
              <td>
                <Text>{item.name}</Text>
                <Paragraph>{item.description}</Paragraph>
              </td>
              <td>{item.type.toString()}</td>
              <td>{item.required ? "yes" : "no"}</td>
              <td>{item.defaultValue && item.defaultValue.value.toString()}</td>
            </React.Fragment>
          )}
        </Table>

        <Table data={themeProps}>
          {({ item }) => (
            <React.Fragment>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.type}</td>
            </React.Fragment>
          )}
        </Table>
        {this.props.component.render({
          ...this.props,
          variant: this.state.variant
        })}
      </div>
    )
  }
}

PreviewComponent.propTypes = {
  component: PropTypes.any.isRequired
}

export default withTheme(PreviewComponent)
